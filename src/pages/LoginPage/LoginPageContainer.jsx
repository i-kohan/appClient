import React, { useState } from 'react'
import { compose, withProps } from 'recompose'
import { withMutation } from '../../graphql/hocs'
import { login } from '../../graphql/mutations'
import LoginPage from './LoginPage'
import { currentUserQuery } from '../../graphql/queries'

const Log = ({ mutate, loading, handleLogin }) => {
  const [username, handleUsernameChange] = useState('')
  const [password, handlePasswordChange] = useState('')
  if (loading) {
    return 'Loading'
  }
  return (
    <LoginPage
      username={username}
      password={password}
      onUsernameChange={handleUsernameChange}
      onPasswordChange={handlePasswordChange}
      onLogin={handleLogin}
      login={mutate}
    />
  )
}

export default compose(
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
    handleLogin: (username, password) => props.login({
      variables: {
        input: { username, password },
      },
    }),
  })),
)(Log)
