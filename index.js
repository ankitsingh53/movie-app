import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import axios from "axios";
import { typeDefs } from "./schema/typeDefs.js";
import { resolvers } from "./schema/resolvers.js";

import dotenv from "dotenv"
dotenv.config()


export const MOVIE_API_KEY = process.env.MOVIE_API_KEY;
export const BASE_URL = 'https://api.themoviedb.org/3'

const server = new ApolloServer({typeDefs, resolvers});
const { url } = await startStandaloneServer(server, {listen: { port: 4001}});
console.log(`Server ready at ${url}`)