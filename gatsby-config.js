module.exports = {
  siteMetadata: {
    title: `Marcelo Maia`,
    description: `Marcelo Maia, a self-taught front-end web developer with a love of
   performant, beautiful, and usable web applications.`,
    author: `Marcelo Maia`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Marcelo Maia`,
        short_name: `Marcelo Maia`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-sass`,
  ],
}
