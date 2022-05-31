# wad2-moviesApp
## Registration, private routing and other functions are in the new brunch: https://github.com/OliverZiangHuang/wad2-moviesApp/tree/loginapp
This application is only used for assignments in the WIT Enterprise web Development course.
In addition to the functions completed in the course lab, here are 5 additional endpoints from TMDB (https://developers.themoviedb.org/3)
## 5 additional endpoints are:  
-Toprated movie : api.themoviedb.org/3/movie/top_rated  
-Movie actor : api.themoviedb.org/3/movie/${id}/credits  
-similar movies : api.themoviedb.org/3/movie/${id}/recommendations  
-Actor details : api.themoviedb.org/3/person/${person_id}/movie_credits  
-Actor's movies : api.themoviedb.org/3/person/${person_id} & api.themoviedb.org/3/person/${person_id}/images  
The above endpoints are all used in the project for (template) pages.

In addition, the multi-condition search and pagination functions are not completed, and the running display cannot be performed.

The specific implementation of the 5 parts is shown below. Video demo link: https://www.youtube.com/watch?v=vax3bbUeV5g.
## 1-Toprated movie  
![1651249531(1)](https://user-images.githubusercontent.com/91920008/165985461-99131f5b-31b6-43d9-a2b8-5c6b37d82463.png)
## 2-Movie actor  
![1651249621(1)](https://user-images.githubusercontent.com/91920008/165985548-09750d8a-c41e-4039-92c1-27b3ce55024e.png)
## 3-similar movies  
![1651249654(1)](https://user-images.githubusercontent.com/91920008/165985574-bc0e7bb0-a203-4908-956d-478fbca153d0.png)
## 4-Actor details  
![1651249681(1)](https://user-images.githubusercontent.com/91920008/165985683-a65cb020-ab87-4f79-bdc3-0c4a76e98ffc.png)
## 5-Actor's movies  
![1651249696(1)](https://user-images.githubusercontent.com/91920008/165985697-bc4d9e52-e459-4730-9dfc-e8cc0522472e.png)













This web page is developed based on React.js and uses network APIs. The installation details and usage are as follows.

## Installing
Perform yarn install in the root directory.

## Starting the development server
Perform yarn start in the root directory.

## Note
The API key is stored in the environment variable via dotenv and so the file is not committed to the repo. Make a .env once cloned in the root directory and add a REACT_APP_API_KEY=<value> to it where <value> is your API key. Get  API key from TMDB(https://developers.themoviedb.org/3)
