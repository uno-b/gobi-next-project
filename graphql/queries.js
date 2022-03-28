import { gql } from '@apollo/client';

export const getCollection = gql`
  query getCollection($query: String, $firstProducts: Int) {
    collections(query: $query, first: 1) {
      edges {
        node {
          title
          handle
          products(first: $firstProducts) {
            edges {
              node {
                id
                handle
                title
                compareAtPriceRange {
                  minVariantPrice {
                    amount
                    currencyCode
                  }
                  maxVariantPrice {
                    amount
                    currencyCode
                  }
                }
                priceRange {
                  minVariantPrice {
                    amount
                    currencyCode
                  }
                  maxVariantPrice {
                    amount
                    currencyCode
                  }
                }
                images(first: 1) {
                  edges {
                    node {
                      altText
                      width
                      height
                      originalSrc
                      src
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const getProductByHandle = gql`
  query getProductByHandle($handle: String!) {
    productByHandle(handle: $handle) {
      id
      title
      description
      options {
        name
        values
      }
      priceRange {
        minVariantPrice {
          currencyCode
          amount
        }
        maxVariantPrice {
          currencyCode
          amount
        }
      }
      images(first: 4) {
        edges {
          node {
            altText
            originalSrc
          }
        }
      }
    }
  }
`;

export const getCustomerData = gql`
  query getCustomerData($customerAccessToken: String!) {
    customer(customerAccessToken: $customerAccessToken) {
      firstName
      lastName
      email
    }
  }
`;
