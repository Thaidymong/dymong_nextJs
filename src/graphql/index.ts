import { gql } from "@apollo/client";

export const QUERY_CATEGORY = gql`
  query categories {
    categories {
      id
      category_name
      articles {
        category_id
        title
      }
    }
  }
`;

export const QUERY_ARTICLES = gql`
  query articles {
    articles {
      id
      title
      summary
      description
      image
      created_at           
      category {
        id
      }
    }
  }
`;

export const QUERY_ARTICLE = gql`
  query ($id: Int!) {
    article(id: $id) {
      id
      title
      summary
      description
      image
      created_at
      category {
        id
        category_name
      }
    }
  }
`;
