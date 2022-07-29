# HauntedPNT

Hi! I'm Jonatan Aguilar and this is my first Yelp like **FullStack** single page application.  

You can visit my project at [HauntedPBT](https://hauntedpnt.herokuapp.com/)

# Technologies Used


 * [JavaScript](https://www.javascript.com/)
 
 [<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"  style="pointer-events: none; display: inline-block; width: 50px;" target="_blank" />](https://www.javascript.com/)
 
 * CSS
 
 [<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" style='width: 50px' target="_blank" />](#)

 * [React](https://reactjs.org/)
 
 [<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" style='width: 50px' target="_blank" />](https://reactjs.org/)

 * [Redux](https://redux.js.org/)
 
 [<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" style='width: 50px' target="_blank" />](https://redux.js.org/)


 * [Express](https://expressjs.com/)
 
 [<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" style='width: 50px; background-color: white;' target="_blank" />](https://expressjs.com/)



 * [PostgreSQL](https://www.postgresql.org/)
 
 [<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" style='width: 50px' target="_blank" />](https://www.postgresql.org/)


 * [Node Js](https://nodejs.org/en/)
 
 [<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" style='width: 50px' target="_blank" />](https://nodejs.org/en/)

# How to Install Application via Command Line
Go to [Repo](https://hauntedpnt.herokuapp.com/)
 1. Copy Code Link
 
  <img width="555" alt="Step 1" src="https://user-images.githubusercontent.com/61948122/181853849-f61abb28-d799-4e18-bd59-0728a2350f11.png">

 2. Open up terminal and input git clone ```Link from github``` in your desired folder.
 
<img width="611" alt="Step 2" src="https://user-images.githubusercontent.com/61948122/181853858-cd8e334a-8e5e-4800-acc3-a4259ce5c3a3.png">

 3. Go to application by using ```cd /Folder Location```.
 
 <img width="611" alt="Step 3" src="https://user-images.githubusercontent.com/61948122/181853876-87060e6b-227b-444e-b030-3f7ff5937bc3.png">

 4. Open Up Code in your IDE by using code . in the location folder or by opening it directly on your IDE.
 
 <img width="884" alt="Step 4 a" src="https://user-images.githubusercontent.com/61948122/181853888-35e92599-093b-41b1-a700-b637c2088819.png">

 <img width="1123" alt="Step 4 b" src="https://user-images.githubusercontent.com/61948122/181853894-83e82ae6-794f-4505-b5a5-6e6ed99933ff.png">


 5. Open up the integrated terminal.
 
<img width="884" alt="Step 5" src="https://user-images.githubusercontent.com/61948122/181853927-bb287b46-9911-4e8f-bd60-fbf33a5256fc.png">

 6. In two seperate terminal instances run NPM Install in both ```/frontend``` and ```/backend``` directories.
 
 <img width="761" alt="Step 6" src="https://user-images.githubusercontent.com/61948122/181853933-a141511b-4885-4219-8492-ee344aac8540.png">

 
 7.a Create a user with in PostgreSQL using ``` psql -c "CREATE USER <username> PASSWORD '<password>' CREATEDB" ``` replacing the text in     <> with credentials.
 
 <img width="759" alt="Step 7 a" src="https://user-images.githubusercontent.com/61948122/181853962-0a998532-f99f-4d7a-8d27-ebc1f53ae12d.png">

 
 7.b Create an .ENV file and a JWT (Can be any string) as shown in the .env.example file

<img width="1149" alt="Step 7 b" src="https://user-images.githubusercontent.com/61948122/181853976-f77d4ad4-b443-4112-aa53-19cd63101878.png">


 8. Run the ```npx dotenv sequelize db:create``` command to create the Database

<img width="759" alt="Step 8" src="https://user-images.githubusercontent.com/61948122/181853986-cd2589d5-6e4c-4e74-beca-8fb639bf7745.png">


 9. In the backend terminal run: ```npx dotenv sequelize db:create && npx dotenv sequelize db:migrate && npx dotenv sequelize       db:seed:all```

<img width="1118" alt="Step 9" src="https://user-images.githubusercontent.com/61948122/181854000-fc08b988-528a-40d8-892a-e655e78bb822.png">

 
 10. In the backend terminal run ```npm start```
 

 11. In the front end terminal run ```npm start```


# Link to WIKI and additional information
[Wiki](https://github.com/nullgar/HauntedPNT/wiki)
[Feature List](https://github.com/nullgar/HauntedPNT/wiki/Feature-List)
[Database Schema](https://github.com/nullgar/HauntedPNT/wiki/DataBase-Schema)
[StateShape](https://github.com/nullgar/HauntedPNT/wiki/State-Shape)





