import { createHttpLink } from 'apollo-link-http'
import { ApolloLink } from 'apollo-link'
import { setContext } from 'apollo-link-context'
import { onError } from 'apollo-link-error'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-boost'
// import { withClientState } from 'apollo-link-state'

const cache = new InMemoryCache()

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) => console.log('Error'))
  }
  if (networkError) console.log(`[Network error]: ${networkError}`)
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token')
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      // authorization: token ? `Bearer ${token}` : '',
      authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjNjY5NTI1MzRkMjZmNjI0OGJjYTEyZCIsImlhdCI6MTU1MDQ4NzM1NX0.kA5Dbu7ny5DL7-N243s8l-XyzMbbtM-hsKo02RQIEIA'
    },
  }
})

// const logoutLink = onError(({ networkError }) => { !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//   if (networkError.statusCode === 401) logout()
// })

const client = new ApolloClient({
  link: authLink.concat(...[httpLink, errorLink]),
  cache,
})

export default client
