import React, {useState, useEffect}  from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { getGenres, getMovie, getMovies } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner';


// 
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: { height: 300 },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)",
  },
}));

export default function FilterMoviesCard(props) {
  const classes = useStyles();
  const { data, error, isLoading, isError } = useQuery("genres", getGenres)

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const genres = data.genres;
  if (genres[0].name !== "All") {
    genres.unshift({ id: "0", name: "All" });
  }

  const handleUserImput = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value); // NEW
  };

  const handleTextChange = (e, props) => {
    handleUserImput(e, "title", e.target.value);
  };

  const handleOriginal_titleChange = (e, props) => {
    handleUserImput(e, "release_date", e.target.value);
  };

  const handleGenreChange = (e) => {
    handleUserImput(e, "genre", e.target.value);
  };


  return (
    <>
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
          Filter the movies.
        </Typography>
        <TextField
      className={classes.formControl}
      id="filled-search"
      label="Search field"
      type="search"
      value={props.titleFilter}
      variant="filled"
      onChange={handleTextChange}
    />

         <TextField
      className={classes.formControl}
      id="filled-search"
      label="Search year"
      type="search"
      value={props.original_titleFilter}
      variant="filled"
      onChange={handleOriginal_titleChange}
        /> 
        <TextField
        className={classes.formControl}
        id="filled-search"
        label="Search keyword"
        type="search"
        value={props.original_titleFilter}
        variant="filled"
        onChange={handleOriginal_titleChange}
          />

        <FormControl className={classes.formControl}>
          <InputLabel id="genre-label">Genre</InputLabel>
          <Select
      labelId="genre-label"
      id="genre-select"
      value={props.genreFilter}
      onChange={handleGenreChange}
    >
            {genres.map((genre) => {
              return (
                <MenuItem key={genre.id} value={genre.id}>
                  {genre.name}
                </MenuItem>
              );
            })}
          </Select>

        </FormControl>
      </CardContent>
    </Card>
    <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h1">
            <SearchIcon fontSize="large" />
            Sort the movies.
          </Typography>
        </CardContent>
      </Card>
      </>
  );
}