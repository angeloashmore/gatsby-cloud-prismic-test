import * as React from "react";
import { Link, graphql } from "gatsby";

const PrismicPage = ({ data }) => {
  const page = data.prismicPage;
  const allPages = data.allPrismicPage.nodes;

  return (
    <main>
      <title>{page.data.title.text}</title>
      <nav>
        <ul>
          {allPages.map((allPage) => (
            <li key={allPage.data.url}>
              <Link to={allPage.url}>{allPage.data.title.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <h1>{page.data.title.text}</h1>
      <article dangerouslySetInnerHTML={{ __html: page.data.content.html }} />
    </main>
  );
};

export default PrismicPage;

export const query = graphql`
  query PrismicPage($id: String!) {
    prismicPage(id: { eq: $id }) {
      data {
        title {
          text
        }
        content {
          html
        }
      }
    }
    allPrismicPage {
      nodes {
        url
        data {
          title {
            text
          }
        }
      }
    }
  }
`;
