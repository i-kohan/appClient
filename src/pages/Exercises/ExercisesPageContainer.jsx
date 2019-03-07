import React from 'react'
import PropTypes from 'prop-types'
import { compose, withProps, withState } from 'recompose'
import { withQuery } from '../../graphql/hocs'
import { exercises } from '../../graphql/queries'
import ExercisesPage from './ExercisesPage'

const ExercisesPageContainer = ({
  data: { data, metadata },
  loading,
  getPageData,
  handleViewModeChange,
  viewMode,
}) => (
  <ExercisesPage
    handleViewModeChange={handleViewModeChange}
    viewMode={viewMode}
    loading={loading}
    data={data}
    metadata={metadata}
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
  withState('viewMode', 'setViewMode', 'table'),
  withProps({
    accessor: 'exercises',
  }),
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
    handleViewModeChange: (event, value) => props.setViewMode(value),
  })),
)(ExercisesPageContainer)
