import gql from 'graphql-tag'

export default gql`
query GetPrograms($page: Int, $rowsPerPage: Int) {
  programs(page: $page, rowsPerPage :$rowsPerPage) {
    metadata {
      accessor
      rowsToShow
      count
    }
    data {
      name
      description
      createdAt
      updatedAt
      id
    }
  }
}
`
