require("dotenv").config();

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Gatsby Cloud + Prismic Test",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
        accessToken: process.env.PRISMIC_API_KEY,
        schemas: {
          page: require("./customtypes/page.json"),
        },
        linkResolver: require("./src/linkResolver").linkResolver,
        releaseID: process.env.PRISMIC_RELEASE_ID,
      },
    },
    {
      resolve: "gatsby-plugin-prismic-previews",
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
        accessToken: process.env.PRISMIC_API_KEY,
      },
    },
  ],
};
