import AddMovieReviewPage from './pages/addMovieReviewPage'
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import HomePage from "./pages/homePage";
import upcomingpage from "./pages/upcomingpage"; //new done 
import MoviePage from "./pages/movieDetailsPage"; //actor start from here

import FavouriteMoviesPage from "./pages/favoriteMoviesPage"; // NEW
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import Topratedpage from './pages/topratedMoivesPage';
import PersonDetailsPage from './pages/personDetailsPage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});


const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
            <Switch>
        <Route exact path="/reviews/form" component={AddMovieReviewPage} />
        <Route exact path="/movies/favourites" component={FavouriteMoviesPage} />
        <Route exact path="/movies/upcoming" component={upcomingpage} />  
        <Route exact path="/movies/toprated" component={Topratedpage} />  

        <Route path="/person/:person_id" component={PersonDetailsPage} />
        <Route path="/movies/:id" component={MoviePage} />
        <Route path="/reviews/:id" component={MovieReviewPage} />
        <Route exact path="/" component={HomePage} />
        
        <Redirect from="*" to="/" />
        
      </Switch>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));