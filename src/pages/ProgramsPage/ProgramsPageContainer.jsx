import React from 'react'
import PropTypes from 'prop-types'
import { compose, withProps } from 'recompose'
import { withQuery } from '../../graphql/hocs'
import { programs } from '../../graphql/queries'
import ProgramsPage from './ProgramsPage'

const ProgramsPageContainer = ({ data: { data, metadata }, loading, getPageData }) => (
  <ProgramsPage
    loading={loading}
    data={data}
    metadata={metadata}
    getPageData={getPageData}
  />
)

ProgramsPageContainer.propTypes = {
  data: PropTypes.shape({
    exercises: PropTypes.array,
  }).isRequired,
  getPageData: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default compose(
  withProps({
    accessor: 'programs',
  }),
  withQuery({
    query: programs,
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
)(ProgramsPageContainer)
