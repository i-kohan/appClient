import { compose, withProps } from 'recompose'
import { withQuery } from '../../graphql/hocs'
import { programs } from '../../graphql/queries'
import ProgramsPage from './ProgramsPage'

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
    data: props.data.data,
    metadata: props.data.metadata,
  })),
)(ProgramsPage)
