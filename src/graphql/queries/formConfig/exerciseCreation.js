import gql from 'graphql-tag'

export default gql`
  query ExerciseCreationForm {
    exerciseCreationForm {
      fields {
        fieldType
        fields {
          lable
          inputs {
            accessor
            initialValue
            fieldType
          }
        }
      }
    }
  }
`
