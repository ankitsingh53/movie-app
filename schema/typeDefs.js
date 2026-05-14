export const typeDefs = `

    type Movie {
    id: ID!
    title: String!
    poster_path: String
    }

    type Query {
    popularMovies: [Movie!]!
    
    }

`