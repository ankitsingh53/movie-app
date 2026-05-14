import axios from "axios"
import { BASE_URL } from "../index.js";
import { MOVIE_API_KEY } from "../index.js";

export const resolvers = {
    Query: {
        popularMovies: async ()=>{
            const res = await axios.get(`${BASE_URL}/movie/popular?api_key=${MOVIE_API_KEY}`);
            // console.log(res.data.results);
                return res.data.results;
    }ç
},
};