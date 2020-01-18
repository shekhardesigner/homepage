/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Shekhar K. Sharma - a Software Engineering Professional`,
    description: `Portfolio of Shekhar K. Sharma, a seasoned user experience designer, and a full-stack web developer. I serve the clients worldwide, working remotely from Kathmandu Nepal.`,
    author: `shekhardesigner`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Abril Fatface\:400`,
          `Quicksand\:300,500`,
        ],
        display: `swap`
      },
    }
  ]
}
