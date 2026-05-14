import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

interface MovieItem {
  id?: number;
  title: string;
  poster_path: string;
}
interface MovieData {
  popularMovies: MovieItem[];
}

const Movie = () => {
  const GET_MOVIE_DATA = gql`
    query GetMovieData {
      popularMovies {
        id
        poster_path
        title
      }
    }
  `;

  const { data, loading, error } = useQuery<MovieData>(GET_MOVIE_DATA);

  // console.log(data?.popularMovies)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      <Box sx={{ flexGrow: 1, p: 1 }}>
        <AppBar position="static" sx={{p:2, margin:"auto"}}>
          <Toolbar>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }} >
              Movie App
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ flexGrow: 2, p: 8 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 1 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {data?.popularMovies.map((item) => {
            return (
              <Grid key={item.id} size={{ xs: 2, sm: 4, md: 4 } }>
                <Card sx={{ maxWidth: 345, display: "flex" }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="240"
                      image={`https://image.tmdb.org/t/p/w500${item?.poster_path}`}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.title}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default Movie;
