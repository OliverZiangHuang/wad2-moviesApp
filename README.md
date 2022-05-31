# wad2-moviesApp

This application is only used for assignments in the WIT Enterprise web Development course.
In addition to the functions completed in the course lab, here are 5 additional endpoints from TMDB (https://developers.themoviedb.org/3)
## 5 additional endpoints are:  
-Toprated movie : api.themoviedb.org/3/movie/top_rated  
-Movie actor : api.themoviedb.org/3/movie/${id}/credits  
-similar movies : api.themoviedb.org/3/movie/${id}/recommendations  
-Actor details : api.themoviedb.org/3/person/${person_id}/movie_credits  
-Actor's movies : api.themoviedb.org/3/person/${person_id} & api.themoviedb.org/3/person/${person_id}/images  
The above endpoints are all used in the project for (template) pages.
In the loginapp, we added registration, login verification, and verification of private links.

In addition, the multi-condition search and pagination functions are not completed, and the running display cannot be performed.

The specific implementation of the 7 parts is shown below. Video demo link: https://www.youtube.com/watch?v=vax3bbUeV5g.
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


## 6-Register and log in.  
In the loginapp, we added registration, login verification, and verification of private links.
When not logged in, the upcoming interface as a private link cannot be displayed, and a login and registration box will pop up.
![c4d77df9f567b1c7aa5f36ecffae73b](https://user-images.githubusercontent.com/91920008/171168440-290aef3e-6874-4455-be21-ddd537e1fcf4.png)
Enter the information in the registration interface and click register. After success, the account will be displayed in the database.
![fd1a1aa4194469928290b75de2edb0d](https://user-images.githubusercontent.com/91920008/171168477-5f62742d-3b35-4f9b-bb56-4e118f828fc6.png)
## 7-Enter private routing.  
After automatically jumping back to the upcoming interface, after logging in, the upcoming interface will be displayed normally, and the login button in the upper right corner will automatically become the logout button.
![ebc359ee45a3e8dc383ebce9aa2f489](https://user-images.githubusercontent.com/91920008/171168590-2655243f-5a4e-4cc4-ab1c-eedddb40bbec.png)






This web page is developed based on React.js and uses network APIs. The installation details and usage are as follows.

## Installing
Perform yarn install in the root directory.

## Starting the development server
Perform yarn start in the root directory.

## Note
The API key is stored in the environment variable via dotenv and so the file is not committed to the repo. Make a .env once cloned in the root directory and add a REACT_APP_API_KEY=<value> to it where <value> is your API key. Get  API key from TMDB(https://developers.themoviedb.org/3)
