module.exports = {
  siteMetadata: {
    title: `Contested Terrain`,
    description: `Against Anti-Semetism; For Emancipation`,
    author: "Ethan Miller",
    menuItems: [
      {
        displayName: "Essays",
        path: "/essays",
      },
      {
        displayName: "News & Commentary",
        path: "/news-and-commentary",
      },
      {
        displayName: "Resources",
        path: "/resources",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-postcss`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // baseUrl: "dev-gatbsyjswp.pantheonsite.io"
        baseUrl: "165.227.75.92:8080", // TODO: Define url
        protocol: "http", // Or 'https'
        hostingWPCOM: false,
        useACF: true,
        acfOptionPageIds: [6],
        verboseOutput: true,
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "ct-site",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
