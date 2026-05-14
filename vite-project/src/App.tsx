import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'
import { ApolloProvider } from "@apollo/client/react"
import Movie from './components/Movie'

function App() {
  
const client= new ApolloClient ({
  link: new HttpLink ( {uri: "http://localhost:4001/"}),
  cache: new InMemoryCache(),
});

  return (
    <ApolloProvider client={client}>
      <Movie/>
    </ApolloProvider>
  )
}

export default App
