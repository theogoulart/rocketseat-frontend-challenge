import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://rocketseat-frontend-challenge.herokuapp.com/',
    cache: new InMemoryCache(),
});

export default client;