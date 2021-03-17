import React from 'react'
import renderer from 'react-test-renderer'
import { useStaticQuery } from 'gatsby'
import HomePage from '../src/templates/home'
import Store from '@ndlib/gatsby-theme-marble/src/store/ReduxWrapper'
import staticQuery from '../__mocks__/staticQueryHelper'

const testData = {
  site: {
    siteMetadata: {
      title: 'Inquisitio',
      description: 'Manuscript and print sources for the study of Inquisition history.',
      author: 'University of Notre Dame Hesburgh Libraries Rare Books & Special Collections',
    },
  },
  markdownRemark: {
    id: '302a2c4b-e79c-5b16-a301-27c37e62b206',
    excerpt: 'Students and researchers interested in the histories of inquisitions can browse the entire digital collection or approach it by theme. Each collection theme…',
    html: '<p>Students and researchers interested in the histories of inquisitions can browse the entire digital collection or approach it by theme. Each collection theme – Inquisitorial Manuals, Trials and Sentencing, Autos de Fe, Censorship, Familiars and Officials, Policies and Proceedings, and Polemics and Histories – is accompanied by an introductory essay and a selection of featured documents. These themes introduce the work, functions, and history of the inquisitions of Europe and the New World while connecting them to the materials comprising the Harley L. McDevitt Inquisition Collection.</p>',
    frontmatter: {
      title: 'Inquisito',
      slug: '/',
      summary: null,
      contentTop: "The materials featured on this website are from the University of Notre Dame's Harley L. McDevitt Inquisition Collection. The collection consists of several hundred items, from printed volumes to unique manuscripts and images, all bearing some relationship to the general theme of &quot;inquisition.&quot; The collection emphasizes the actions of the Spanish inquisitions of the fifteenth to nineteenth centuries, but also documents elements of medieval, Portuguese, Roman, and New World inquisitions.",
      contentTopCard: {
        link: '/browse',
        image: 'https://image-iiif.library.nd.edu/iiif/2/MSNCW5010_EAD%2F5010-01.a.150/full/!300,300/0/default.jpg',
      },
      contentMiddleCard: {
        link: '/essays',
        image: 'https://image-iiif.library.nd.edu/iiif/2/MSNCW5053_EAD%2F5053-01.a.150/full/!250,250/0/default.jpg',
      },
      featuredItems: [
        {
          title: 'Orden que comunmente se guarda en el Santo Oficio de la Inquisicion, acerca del processar en las causas que en el se tratan; conforme à lo que está proveido por las instrucciones antiguas y nuevas.',
          link: '/item/aspace_7e85bf4e9549b2a635169a95403e573a',
          thumbnail: 'https://image-iiif.library.nd.edu/iiif/2/001591353%2FINQ_001591353-a/full/!250,250/0/default.webp',
        },
        {
          title: 'Relación de los méritos del proceso de Ana Méndez, doncella portuguesa, hija de Jorge Rodriguez. Requerida por el Santo Oficio de la Ynquisición de Cuenca.',
          link: '/item/aspace_7e85bf4e9549b2a635169a95403e573a',
          thumbnail: 'https://image-iiif.library.nd.edu/iiif/2/001591353%2FINQ_001591353-a/full/!250,250/0/default.webp',
        },
        {
          title: 'Diligencias contra el Reo Atanacio de la Crus, por haver echo pacto, con el Diablo: Yndio de este Pueblo de Santiago Coparando de oficio.',
          link: '/item/aspace_7e85bf4e9549b2a635169a95403e573a',
          thumbnail: 'https://image-iiif.library.nd.edu/iiif/2/MSNCW2013_EAD%2F2013-01.a.150/full/!250,250/0/default.webp',
        },
      ],
    },
  },
  collectionFile: {
    childImageSharp: {
      gatsbyImageData: {
        layout: 'constrained',
        placeholder: {
          fallback: 'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAaABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAIBAwQF/8QAFwEAAwEAAAAAAAAAAAAAAAAAAAIDAf/aAAwDAQACEAMQAAAB6cCpuQkm+5a2ouUvA//EAB4QAAEDBAMAAAAAAAAAAAAAAAEAAgMQITEyETNB/9oACAEBAAEFAvFPubNZdT9mWgcKbehz/8QAFhEAAwAAAAAAAAAAAAAAAAAAABAR/9oACAEDAQE/AXT/xAAXEQEAAwAAAAAAAAAAAAAAAAAAARAR/9oACAECAQE/AU1j/8QAFRABAQAAAAAAAAAAAAAAAAAAASD/2gAIAQEABj8CKK//xAAcEAEAAwEAAwEAAAAAAAAAAAABABEhUUFhgbH/2gAIAQEAAT8hBKDxN5LGeRUvqonDSz8omzJeua+YL2C9gHRP/9oADAMBAAIAAwAAABB8NQD/xAAXEQADAQAAAAAAAAAAAAAAAAAAAREQ/9oACAEDAQE/EBSa/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAEREP/aAAgBAgEBPxAq4rP/xAAfEAEAAwACAgMBAAAAAAAAAAABABEhMUGRoVFhcbH/2gAIAQEAAT8Q1IEt0fEpuW/SYYyvE3Y4BTjPcVVBt1XqWdPWD0QGuepnluqchtecfyUjXmINXmMEF+yf/9k=',
        },
        images: {
          fallback: {
            src: '/static/f11feeb7d67596b0408f25732598c3fe/1bbac/collection.jpg',
            srcSet: '/static/f11feeb7d67596b0408f25732598c3fe/ad181/collection.jpg 75w,\n/static/f11feeb7d67596b0408f25732598c3fe/2c796/collection.jpg 150w,\n/static/f11feeb7d67596b0408f25732598c3fe/1bbac/collection.jpg 300w',
            sizes: '(min-width: 300px) 300px, 100vw',
          },
          sources: [
            {
              srcSet: '/static/f11feeb7d67596b0408f25732598c3fe/2bec2/collection.avif 75w,\n/static/f11feeb7d67596b0408f25732598c3fe/00cba/collection.avif 150w,\n/static/f11feeb7d67596b0408f25732598c3fe/2160b/collection.avif 300w',
              type: 'image/avif',
              sizes: '(min-width: 300px) 300px, 100vw',
            },
            {
              srcSet: '/static/f11feeb7d67596b0408f25732598c3fe/dda9f/collection.webp 75w,\n/static/f11feeb7d67596b0408f25732598c3fe/2aae9/collection.webp 150w,\n/static/f11feeb7d67596b0408f25732598c3fe/f4f05/collection.webp 300w',
              type: 'image/webp',
              sizes: '(min-width: 300px) 300px, 100vw',
            },
          ],
        },
        width: 300,
        height: 397,
      },
    },
  },
  essaysFile: {
    childImageSharp: {
      gatsbyImageData: {
        layout: 'constrained',
        placeholder: {
          fallback: 'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAbABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAECAwT/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQID/9oADAMBAAIQAxAAAAHvTHPeiyzGutogH//EABwQAAIBBQEAAAAAAAAAAAAAAABBAQIQESExMv/aAAgBAQABBQJGIFoU8FT5t//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EABYQAQEBAAAAAAAAAAAAAAAAAAEQIP/aAAgBAQAGPwI0Uv8A/8QAHBAAAgMBAAMAAAAAAAAAAAAAAAERITFREHHw/9oACAEBAAE/IUo9HD7BMSpEVnggsDEneiwXm54bP//aAAwDAQACAAMAAAAQSB3z/8QAFhEBAQEAAAAAAAAAAAAAAAAAEAER/9oACAEDAQE/EKaf/8QAFhEBAQEAAAAAAAAAAAAAAAAAEAER/9oACAECAQE/EIYf/8QAIBABAAICAQQDAAAAAAAAAAAAAQARITGRQVFhcaGx4f/aAAgBAQABPxAKVaY9IJWT4xicncI0XSlcTqJd+P2V01iVV2NH1FhZy3jcSlWpXiDiMO5//9k=',
        },
        images: {
          fallback: {
            src: '/static/d9138c2338310cef00adc624253e838b/b8b23/essays.jpg',
            srcSet: '/static/d9138c2338310cef00adc624253e838b/3813a/essays.jpg 75w,\n/static/d9138c2338310cef00adc624253e838b/0f8bd/essays.jpg 150w,\n/static/d9138c2338310cef00adc624253e838b/b8b23/essays.jpg 300w',
            sizes: '(min-width: 300px) 300px, 100vw',
          },
          sources: [
            {
              srcSet: '/static/d9138c2338310cef00adc624253e838b/75ef7/essays.avif 75w,\n/static/d9138c2338310cef00adc624253e838b/c1cbc/essays.avif 150w,\n/static/d9138c2338310cef00adc624253e838b/881e4/essays.avif 300w',
              type: 'image/avif',
              sizes: '(min-width: 300px) 300px, 100vw',
            },
            {
              srcSet: '/static/d9138c2338310cef00adc624253e838b/86fd1/essays.webp 75w,\n/static/d9138c2338310cef00adc624253e838b/2ee58/essays.webp 150w,\n/static/d9138c2338310cef00adc624253e838b/5be79/essays.webp 300w',
              type: 'image/webp',
              sizes: '(min-width: 300px) 300px, 100vw',
            },
          ],
        },
        width: 300,
        height: 407,
      },
    },
  },
}

describe('home page', () => {
  it('renders correctly', () => {
    useStaticQuery.mockImplementation(() => staticQuery)

    const tree = renderer
      .create(<Store>
        <HomePage location={{}} data={testData} />
      </Store>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
