import React from 'react'
import { Mutation } from 'react-apollo'
import { withStyles } from '@material-ui/core'
import { compose } from 'recompose'
import { Message, Loading } from '../../components'

const styles = () => ({
  progress: {
    position: 'absolute',
    top: 70,
    width: '100%',
  },
})

const withMutation = ({
  mutation,
  variables,
  onCompleted,
  refetchQueries,
  update,
}) => WrappedComponent => props => (
  <Mutation
    mutation={mutation}
    variables={variables}
    onCompleted={onCompleted}
    update={update}
    refetchQueries={refetchQueries}
  >
    {(mutate, {
      data,
      loading,
      error,
      // client,
    }) => (
      <>
        {loading && (
          <Loading
            type="linear"
            variant="query"
            className={props.classes.progress} // eslint-disable-line
          />
        )}
        {error && (
          <Message
            isOpen
            message={error.message}
            variant="error"
          />
        )}
        <WrappedComponent
          mutate={mutate}
          loading={loading}
          error={error}
          data={data}
          {...props}
        />
      </>
    )}
  </Mutation>
)

export default props => component => compose(
  withStyles(styles),
  withMutation(props),
)(component)
