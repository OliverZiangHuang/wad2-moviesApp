# wad2-moviesApp

This application is only used for assignments in the WIT Enterprise web Development course.
In addition to the functions completed in the course lab, here are 5 additional endpoints from TMDB (https://developers.themoviedb.org/3)
5 additional endpoints are:

Toprated movie : api.themoviedb.org/3/movie/top_rated
Movie actor : api.themoviedb.org/3/movie/${id}/credits
similar movies : api.themoviedb.org/3/movie/${id}/recommendations
actor's movies : api.themoviedb.org/3/person/${person_id}/movie_credits
Actor details : api.themoviedb.org/3/person/${person_id} & api.themoviedb.org/3/person/${person_id}/images
The above nodes and (template) pages are all used in the project.. 

In addition, the multi-condition search and pagination functions are not completed, and the running display cannot be performed.

This web page is developed based on React.js and uses network APIs. The installation details and usage are as follows.

## Installing
Perform yarn install in the root directory.

## Starting the development server
Perform yarn start in the root directory.

## Note
The API key is stored in the environment variable via dotenv and so the file is not committed to the repo. Make a .env once cloned in the root directory and add a REACT_APP_API_KEY=<value> to it where <value> is your API key. Get  API key from TMDB(https://developers.themoviedb.org/3)
