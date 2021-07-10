/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `UX Designer & Full-stack Developer | Shekhar K. Sharma | Nepal`,
    description: `Portfolio of Shekhar K. Sharma, a seasoned user experience designer, and a full-stack web developer. I serve the clients worldwide.`,
    author: `shekhardesigner`,
    image: `https://www.shekhardesigner.com/og_card.png`
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Abril Fatface\:400`,
          `Quicksand\:300,500`,
          `Stalemate`,
          `Tillana`
        ],
        display: `swap`
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-16286907-2`,
        anonymize: true,
        respectDNT: true,
      }
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`en`, `ne`, `fr`],
        defaultLanguage: `en`,
        redirect: true,
      }
    }
  ]
}
