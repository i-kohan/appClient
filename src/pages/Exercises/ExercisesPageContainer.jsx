import { compose, withProps, withState } from 'recompose'
import { withQuery, withMutation } from '../../graphql/hocs'
import { exercises } from '../../graphql/queries'
import { createExercise } from '../../graphql/mutations'
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
  withMutation({
    mutation: createExercise,
    update: (cache, { data }) => {
      const exercisesList = cache.readQuery({
        query: exercises,
        variables: {
          page: 0,
          rowsPerPage: 5,
        },
      })
      const newExercises = exercisesList.exercises.data.push(data.createExercise)
      cache.writeQuery({
        query: exercises,
        data: newExercises,
      })
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
    handleCreateExercise: (name, description) => props.mutate({
      variables: {
        input: { name, description },
      },
    }),
    data: props.data.data,
    metadata: props.data.metadata,
  })),
)(ExercisesPage)
