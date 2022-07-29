# HauntedPNT

Hi! I'm Jonatan Aguilar and this is my first Yelp like **FullStack** single page application.  

You can visit my project at [HauntedPBT](https://hauntedpnt.herokuapp.com/)

# Technologies Used

 - [JavaScript](https://www.javascript.com/)
 - CSS
 - [React](https://reactjs.org/)
 - [Redux](https://redux.js.org/)
 - [Express](https://expressjs.com/)
 - [PostgreSQL](https://www.postgresql.org/)
 - [Node Js](https://nodejs.org/en/)

///

# How to Install Application via Command Line
Go to [Repo](https://hauntedpnt.herokuapp.com/)
 1. Copy Code Link
 
  
 2. Open up terminal and input git clone ```Link from github``` in your desired folder.
 

 3. Got to application by using ```cd /Folder Location```.
 
 4. Open Up Code in your IDE by using code . in the location folder or by opening it directly on your IDE.
 

 5. Open up the integrated terminal.
 

 6. In two seperate terminal instances run NPM Install in both ```/frontend``` and ```/backend``` directories.
 
 
 7.a Create a user with in PostgreSQL using ``` psql -c "CREATE USER <username> PASSWORD '<password>' CREATEDB" ``` replacing the text in     <> with credentials.
 
 7.b Create an .ENV file and a JWT (Can be any string) as shown in the .env.example file

 8. Run the ```npx dotenv sequelize db:create``` command to create the Database

 9. In the backend terminal run: ```npx dotenv sequelize db:create && npx dotenv sequelize db:migrate && npx dotenv sequelize       db:seed:all```

 
 10. In the backend terminal run ```npm start```
 

 11. In the front end terminal run ```npm start```


# Link to WIKI and additional information
[Wiki](https://github.com/nullgar/HauntedPNT/wiki)
[Feature List](https://github.com/nullgar/HauntedPNT/wiki/Feature-List)
[Database Schema](https://github.com/nullgar/HauntedPNT/wiki/DataBase-Schema)
[StateShape](https://github.com/nullgar/HauntedPNT/wiki/State-Shape)





