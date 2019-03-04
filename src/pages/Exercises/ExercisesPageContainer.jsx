import React from 'react'
import PropTypes from 'prop-types'
import { withQuery } from '../../graphql/hocs'
import { exercises } from '../../graphql/queries'
import ExercisesPage from './ExercisesPage'

const ExercisesPageContainer = ({ data }) => (
  <ExercisesPage
    exercises={data.exercises}
  />
)

ExercisesPageContainer.propTypes = {
  data: PropTypes.shape({
    exercises: PropTypes.array,
  }).isRequired,
}

export default withQuery({ query: exercises })(ExercisesPageContainer)
