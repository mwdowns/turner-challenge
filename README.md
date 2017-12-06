Code Challenge for a certain company here in Atlanta
====================================================

This was a code challenge I was given for a certain media company that will go un-named (but is obvious given the repo-title) because I don't want anyone copying my stuff for the challenge (Haha! Jokes on them cause this code is...well...rough). Anyway, the criteria were that it had to be:

+ A React-Node-Express-PostgreSQL project
+ I would connect to a db they gave me access to
+ Have a search function
+ List results of the search
+ Give more detailed info for that result

Getting Started
-----------------

**Note:** The db for this challenge is no longer accessible, so the app will run but not produce any results and get server timeout errors from the db calls. Womp womp.

If you are reading this, you're on Github. So, go ahead and clone this repo. Either download the zip file and unzip the repo on your computer, or you can use Terminal/PowerShell to:

```git clone https://github.com/mwdowns/turner-challenge.git```

This will install the repo in your directory. Next, go into the backend folder and run

```npm install```

Then run 

```npm start```

This should startup the backend server. In another terminal window, cd into frontend folder and, again, run 

```npm install```

Then run

```npm start```

This will start up the React frontend and should open up a page in your browser with the app.

Thoughts and Musings on this Exercise
-------------------------------------

The backend is Node and Express using a PostgreSQL database. I built this part first and tested my routes and db queries using Postico for the queries and Postman for the routes. I stayed away from long convoluted SQL searches, which, while easier, might have been the reason for my problems on the frontend. I am happy with the backend.

This is the second React app I've built, the first being a tic-tac-toe game from the React Tutorial on their homepage. I think I'm getting it, but there are still some fuzzy areas that I don't quite understand and are apparent in this app. I will explain in some detail.

My calls to the backend, not including the first call made to get the full list of movie titles available in the db, tended to result in a data type that I could not manipulate. I should be recieving an array of objects back, but when I'd make the call and get the result, I got error messages saying the result was undefined. Even though, when I "console logged" the result, I could see the array of objects with the correct information in the console.

This lead to great headaches and much time wasted that I could have used polishing up the app. I ended up figuring out a solution in the end. Not sure if it's the right solution, but it displays the information.

The search is also very rudimentary. When you submit a search it searches exactly for what you type in. So if you type in "annie" it will not return a result like "Annie Hall". You must type in the full name to get the result.

The dynamic search functionality is also lacking. I think I'm messing up somewhere with the setState method.

Not sure exactly how I should feel about all of this. I think the backend is solid, but the frontend is not. Maybe it's a good start for someone who just learned React this weekend? Or maybe it's not. I still tend to shy away from working too much on stlying...I just find that ROI for the time I spend trying to move this one block 5px to the left is not great.