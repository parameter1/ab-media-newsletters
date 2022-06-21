const gql = require('graphql-tag');

module.exports = gql`
fragment MagazinePublicationLatestIssueFragment on MagazineIssue {
  id
  name
  digitalEditionUrl
  canonicalPath
  coverImage {
    id
    src
  }
  publication {
    id
    name
    subscribeUrl
    canonicalPath
  }
}
`;
