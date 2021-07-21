module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'Gatsby Cloud + Prismic Test',
  },
  plugins: [
    'gatsby-plugin-gatsby-cloud',
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'gatsby-cloud-prismic-test',
        schemas: {
          page: require('./customtypes/page.json'),
        },
        linkResolver: require('./src/linkResolver').linkResolver,
        releaseID: process.env.PRISMIC_RELEASE_ID,
      },
    },
  ],
}
