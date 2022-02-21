module.exports = {
    siteMetadata: {
      title: `playground_gatsby`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
      `gatsby-plugin-material-ui`,
      'gatsby-plugin-image',
      'gatsby-plugin-sharp',
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: `blog`,
          path: `${__dirname}/blog`,
        }
      },
    ]
}