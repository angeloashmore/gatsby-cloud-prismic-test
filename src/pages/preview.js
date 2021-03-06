import * as React from "react";
import { withPrismicPreviewResolver } from "gatsby-plugin-prismic-previews";

// Update the path to your Link Resolver
import { linkResolver } from "../linkResolver";

const PreviewPage = () => {
  return (
    <div>
      <h1>Loading preview…</h1>
    </div>
  );
};

export default withPrismicPreviewResolver(PreviewPage, [
  {
    repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
    linkResolver,
  },
]);
