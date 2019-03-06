import gql from 'graphql-tag'

export default gql`
query GetExercises($page: Int, $rowsPerPage: Int) {
  exercises(page: $page, rowsPerPage :$rowsPerPage) {
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
