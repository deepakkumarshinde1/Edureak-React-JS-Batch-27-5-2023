import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";
import User from "./components/User";

// connect to server
// add provider with serverClint Configuration

let apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({ uri: "http://localhost:4444/graphql" }),
});

function App() {
  return (
    <>
      <ApolloProvider client={apolloClient}>
        <User />
      </ApolloProvider>
    </>
  );
}

export default App;
