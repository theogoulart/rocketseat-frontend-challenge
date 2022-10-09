import { ApolloClient, InMemoryCache } from "@apollo/client";

console.log(process.env);
console.log(process.env.NEXT_PUBLIC_API_URI);
const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_API_URI,
    cache: new InMemoryCache(),
});

export default client;