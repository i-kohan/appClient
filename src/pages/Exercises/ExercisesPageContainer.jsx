import { compose, withProps, withState } from 'recompose'
import { withQuery } from '../../graphql/hocs'
import { exercises } from '../../graphql/queries'
import ExercisesPage from './ExercisesPage'

export default compose(
  withState('viewMode', 'setViewMode', 'table'),
  withState('isDialogOpened', 'toggleDialog', false),
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
    data: props.data.data,
    metadata: props.data.metadata,
  })),
)(ExercisesPage)
