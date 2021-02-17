const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const essayTemplate = path.resolve(`src/templates/essay.js`)

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
        ) {
          nodes {
            id
            frontmatter {
              slug
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const essays = result.data.allMarkdownRemark.nodes

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (essays.length > 0) {
    essays.forEach((essay, index) => {
      const previousPostId = index === 0 ? null : essays[index - 1].id
      const nextPostId = index === essays.length - 1 ? null : essays[index + 1].id

      createPage({
        path: essay.frontmatter.slug,
        component: essayTemplate,
        context: {
          id: essay.id,
          previousPostId,
          nextPostId,
        },
      })
    })
  }

  const marbleResult = await graphql(`
    {
      allMarbleItem {
        nodes {
          id
          slug
        }
      }
    }
  `)

  const marbleItems = marbleResult.data && marbleResult.data.allMarbleItem ? marbleResult.data.allMarbleItem.nodes : []
  marbleItems.forEach(node => {
    if (node.id) {
      createPage({
        path: node.slug,
        component: require.resolve('./src/templates/marbleItem.js'),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.slug,
          id: node.id,
          iiifUri: node.iiifUri,
        },
      })
    }
  })
}
