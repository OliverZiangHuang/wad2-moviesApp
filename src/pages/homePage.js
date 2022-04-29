import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { getMovies } from "../api/tmdb-api";
import useFiltering from "../hooks/useFiltering";
import MovieFilterUI, {
  titleFilter,
  genreFilter,
  original_titleFilter,
} from "../components/movieFilterUI";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'
import Pagination from "./Pagination";

const titleFiltering = {
  name: "title",
  value: "",
  condition: titleFilter,
};
const original_titleFiltering = {
  name: "original_title",
  value: "",
  condition: original_titleFilter,
};

const genreFiltering = {
  name: "genre",
  value: "0",
  condition: genreFilter,
};

const HomePage = (props) => {
  const { data, error, isLoading, isError } = useQuery("discover", getMovies);
  const { filterValues, setFilterValues, filterFunction } = useFiltering(
    [],
    [titleFiltering, genreFiltering, original_titleFiltering]
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const changeFilterValues = (type, value) => {
    const newf = { name: type, value: value };
    const newFilters =
      type === "title" ? [newf, filterValues[1]] : [filterValues[0], newf];
    setFilterValues(newFilters);
  };

  const movies = data ? data.results : [];
  const displayedMovies = filterFunction(movies);

  // Redundant, but necessary to avoid app crashing. The lines below can be deleted now.
  //const favourites = movies.filter((m) => m.favorite);
  //localStorage.setItem("favourites", JSON.stringify(favourites));
  //const addToFavourites = (movieId) => true;

  return (
    <>
      <PageTemplate
        title="Discover Movies"
        movies={displayedMovies}
        action={(movie) => {
          return <AddToFavouritesIcon movie={movie} />
        }}
      />
      <MovieFilterUI
        filterInputChange={changeFilterValues}
        titleFilter={filterValues[0].value}
        original_titleFilter= {filterValues[0].value}
        genreFilter={filterValues[1].value}
      />
   {/*
   <Pagination
        data={this.props.data}
        nextPage={this.handleNextPage}
        prevPage={this.handlePrevPage}
        />
   */}
    </>
  );
};

export default HomePage;