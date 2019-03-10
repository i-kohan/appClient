import { compose, withProps, withState } from 'recompose'
import { withMutation } from '../../graphql/hocs'
import { login } from '../../graphql/mutations'
import LoginPage from './LoginPage'
import { currentUserQuery } from '../../graphql/queries'

export default compose(
  withState('username', 'handleUsernameChange', ''),
  withState('password', 'handlePasswordChange', ''),
  withMutation({
    update: (cache, { data }) => {
      localStorage.setItem('token', data.login.jwt)
      cache.writeQuery({
        query: currentUserQuery,
        data: {
          currentUser: {
            ...data.login,
          },
        },
      })
    },
    mutation: login,
  }),
  withProps(props => ({
    handleLogin: (username, password) => props.mutate({
      variables: {
        input: { username, password },
      },
    }),
  })),
)(LoginPage)
