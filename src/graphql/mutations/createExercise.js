import gql from 'graphql-tag'

export default gql`
  mutation CreateExercise($input: ExerciseCreateInput!) {
    createExercise(input: $input) {
      id
      name
      description
    }
  }
`
