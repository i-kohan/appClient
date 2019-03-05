import React from 'react'
import PropTypes from 'prop-types'
import { compose, withProps } from 'recompose'
import { withQuery } from '../../graphql/hocs'
import { exercises } from '../../graphql/queries'
import ExercisesPage from './ExercisesPage'

const ExercisesPageContainer = ({ data, loading, getPageData }) => (
  <ExercisesPage
    loading={loading}
    exercises={data.exercises && data.exercises.exercises}
    metadata={data.exercises && data.exercises.metadata}
    count={data.exercises && data.exercises.count}
    getPageData={getPageData}
  />
)

ExercisesPageContainer.propTypes = {
  data: PropTypes.shape({
    exercises: PropTypes.array,
  }).isRequired,
  getPageData: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default compose(
  withQuery({
    query: exercises,
    notifyOnNetworkStatusChange: true,
    variables: {
      page: 0,
      rowsPerPage: 5, // TODO get by backEnd
    },
  }),
  withProps(props => ({
    getPageData: (page, rowsPerPage) => {
      props.fetchMore({
        variables: {
          page,
          rowsPerPage,
        },
        updateQuery(previousResult, { fetchMoreResult }) {
          return fetchMoreResult
        },
      })
    },
  })),
)(ExercisesPageContainer)
