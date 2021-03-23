/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx, Flex, Button, Box, Grid, Container, Heading } from 'theme-ui'
import { Link, graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import App from '../components/siteapp'
import ClickableNDLogoWhite from '../components/sharedComponents/ClickableNDLogoWhite'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export const query = graphql`
  query {
    file(relativePath: { eq: "banner.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        gatsbyImageData(
          width: 1600
          height: 700
          placeholder: DOMINANT_COLOR
          formats: [AUTO, WEBP, AVIF]
        )      }
    }
  }
`

const sx = {
  titleBox: {
    borderWidth: '2px',
    borderColor: 'secondary',
    borderStyle: 'solid',
    fontSize: '1.4rem',
    backgroundColor: 'white',
    marginBottom: '1.25rem',
  },
  titleContainer: {
    gridRow: 'title',
    gridColumn: 'title',
    alignSelf: 'flex-start',
  },
  title: {
    margin: '1px 20px',
    fontFamily: 'title',
    color: 'primary',
  },
  headingBlockquote: {
    color: 'attention',
    marginTop: '0px',
    marginBottom: '0px',
    marginLeft: '115px',
    fontFamily: 'serif',
    fontSize: '1rem',
    top: '-15px',
    position: 'relative',
  },
}
/*
<Flex sx={sx.titleContainer}>
  <div sx={sx.titleBox}>
    <h1 sx={sx.title}>Inquisitio</h1>
    <blockquote sx={sx.headingBlockquote}>
  manuscript and print sources for the study of Inquisition history
    </blockquote>
  </div>
</Flex> */

const gutterWidth = '5vw'

const Test = ({ location }) => {
  const { file } = useStaticQuery(query)
  const image = getImage(file)
  return (
    <Container sx={{
      display: 'grid',
      minHeight: '100%',
      gridTemplateRows: '[header-start] auto [header-end main-start] minmax(auto, 1fr) [main-end footer-start] auto [footer-end]',
    }}>
      <App location={location}>
        <header sx={{
          gridRow: 'header',
          padding: '2.5rem 0 0',
          display: 'grid',
          gridTemplateColumns: '[screen-start] 5vw [container-start title-start] 1fr [title-end mark-start] 200px [mark-end container-end] 5vw [screen-end]',
          gridTemplateRows: '[title-start] auto [title-end nav-header-start] auto [nav-header-end nav-mobile-start] auto [nav-mobile-end]',
          textAlign: 'left',
          borderTopWidth: '5px',
          borderTopColor: 'secondary',
          borderTopStyle: 'solid',
          backgroundColor: 'primary',
          borderBottomWidth: '5px',
          borderBottomColor: '#603e1f',
          borderBottomStyle: 'solid',
          opacity: '.9',
          zIndex: 1,
        }}>
          <div sx={{
            gridRow: 'title',
            gridColumn: 'mark',
            justifySelf: 'right',
          }}>
            <ClickableNDLogoWhite />
          </div>
          <div sx={{
            gridRow: 'title',
            gridColumn: 'title',
            alignSelf: 'flex-start',
          }}>
            <Heading as='h1' sx={{
              color: 'gray.1',
              mb: '0',
              pb: 0,
              fontFamily: 'title',
              fontSize: '8',
            }}>Inquisitio</Heading>
            <p sx={{
              color: 'white',
              my: 0,
              py: 0,
              marginLeft: '115px',
              fontFamily: 'serif',
              fontSize: '2',
              top: '-15px',
              position: 'relative',
            }}>Hesburgh Libraries Rare Books & Special Collections</p>
          </div>
          <nav sx={{
            background: 'white',
            gridRow: 'nav-header',
            gridColumn: 'container',
            alignSelf: 'flex-start',
            justifySelf: 'flex-end',
            position: 'relative',
            margin: '0 0 -2.7rem',
          }}>
            <ul sx={{
              display: 'flex',
              position: 'relative',
              opacity: '1',
              transition: 'all 1s',
              listStyle: 'none',
              my: '5px',
              '& li': {
                opacity: '1',
                position: 'relative',
              },
              '& a': {
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                height: '100%',
                padding: '1.25rem 1rem',
                opacity: '1',
                lineHeight: '1.2',
                textDecoration: 'none',
                color: 'text',
                borderTop: '0.25rem solid transparent',
                borderBottom: '0.25rem solid transparent',
                transition: 'all var(--anim-duration) var(--anim-ease)',
              },
            }}>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/search'>Browse</Link></li>
              <li><Link to='/browse'>Themes</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/about'>Search</Link></li>
            </ul>
          </nav>
        </header>
        <div id='content' sx={{
          gridTemplateColumns: `[screen-start] ${gutterWidth} [container-start sidebar-start] var(--sidebar-width) [sidebar-end content-start] minmax(0, 1fr) [content-end container-end] ${gutterWidth} [screen-end]`,
        }}>
          <div id='page-header' sx={{
            gridColumn: 'screen',
            gridRow: 'header',
            position: 'relative',
            marginBottom: 'calc(-1 * 3.5rem)',
            zIndex: '0',
            display: 'grid',
            gridTemplateRows: '[header-start] 5rem [title-start] auto [title-end lede-start] auto [lede-end] 3.5rem [header-end]',
            gridTemplateColumns: `[screen-start] ${gutterWidth} [container-start title-start] 1fr [title-end image-start] 2fr [image-end container-end] ${gutterWidth} [screen-end]`,
            '::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: '0',
              bottom: '0',
              left: '0',
              right: '0',
              zIndex:'-1',
              backgroundImage: 'url(https://conductor.nd.edu/stylesheets/themes/ndt/v3/images/hdr-main-building-800.jpg)',
              backgroundRepeat: 'repeat',
              gridRow: 'header-start/title-end',
            },
          }}>
            <Heading as='h1' sx={{
              gridColumn: 'title',
              gridRow: 'title',
              alignSelf: 'flex-end',
              fontWeight: '600',
              mt: '4rem',
              fontFamily: 'title',
              '::after': {
                content: '""',
                marginLeft: '-0.5em',
                marginTop: '0.2em',
                marginBottom: '0.7em',
                width: '1.5em',
                height: '0.1em',
                minHeight: '5px',
                bg: 'secondary',
                display: 'block',
              },
            }}>Inquisitio</Heading>
            <p sx={{
              gridColumn: 'title',
              gridRow: 'lede',
              pr: '2rem',
              fontSize: 4,
              bg: 'white',
            }}
            >
            manuscript and print sources for the study of Inquisition history
              <br /><Link to='/' sx={{ color: 'secondary', pl: '10rem', pt: '5rem', display: 'block' }}>Browse Collection</Link>
            </p>
            <div sx={{
              gridRow: 'title-start/header-end',
              gridColumn: 'image-start/screen-end',
            }}>
              <GatsbyImage image={image} alt=''loading='eager' />
            </div>

          </div>
          <main sx={{
            gridColumn: 'container',
            gridRow: 'content',
          }}>
            <div sx={{
              paddingTop: '2rem',
              paddingBottom: '3rem',
              marginBottom: '4rem',
              maxWidth: '65rem',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}>
              <p>The materials featured on this website are from the University of Notre Dame's Harley L. McDevitt Inquisition Collection. The collection consists of several hundred items, from printed volumes to unique manuscripts and images, all bearing some relationship to the general theme of "inquisition." The collection emphasizes the actions of the Spanish inquisitions of the fifteenth to nineteenth centuries, but also documents elements of medieval, Portuguese, Roman, and New World inquisitions.</p>
            </div>
            <Grid columns={[2, '50%', '50%']}>
              <Box>Image</Box>
              <Box>
                <Heading as='h2'>
                  Themeatic Inquistion Resources
                </Heading>
                <p>
                Students and researchers interested in the histories of inquisitions can browse the entire digital collection or approach it by theme. Each collection theme – Inquisitorial Manuals, Trials and Sentencing, Autos de Fe, Censorship, Familiars and Officials, Policies and Proceedings, and Polemics and Histories – is accompanied by an introductory essay and a selection of featured documents. These themes introduce the work, functions, and history of the inquisitions of Europe and the New World while connecting them to the materials comprising the Harley L. McDevitt Inquisition Collection.
                </p>
              </Box>
            </Grid>
          </main>

        </div>
      </App>
    </Container>
  )
}

Test.propTypes = {
  location: PropTypes.object.isRequired,
}
export default Test
