import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { compose, withProps } from 'recompose'
import { withMutation } from '../../graphql/hocs'
import { login } from '../../graphql/mutations'
import LoginPage from './LoginPage'
import { currentUserQuery } from '../../graphql/queries'

const LoginPageContainer = ({ handleLogin }) => {
  const [username, handleUsernameChange] = useState('')
  const [password, handlePasswordChange] = useState('')

  return (
    <LoginPage
      username={username}
      password={password}
      onUsernameChange={handleUsernameChange}
      onPasswordChange={handlePasswordChange}
      onLogin={handleLogin}
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
    handleLogin: (username, password) => props.mutate({
      variables: {
        input: { username, password },
      },
    }),
  })),
)(LoginPageContainer)

LoginPageContainer.propTypes = {
  handleLogin: PropTypes.func.isRequired,
}
