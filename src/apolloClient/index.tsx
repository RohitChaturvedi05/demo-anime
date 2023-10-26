import React from 'react';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'https://graphql.anilist.co',
    cache: new InMemoryCache(),
});

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
