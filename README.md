<<<<<<< HEAD
## Description :
Our goal is for a user who plays/ interested in Hearthstone, to create his own account and personalize according to his favorites . He could comment on cards or view other's comments. He is able log in with a username and pwd , Once authneticated a session is created that allows to query the db.

Dependencies installed:

* Sequelize ORM sits between the server's API endpoints and the SQL database to translate data between JavaScript and SQL.
* Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.
* Sessions allow our Express.js server to keep track of which user is making a request, and store useful data about them in memory.
* An express-session is an Express.js middleware that uses sessions,a mechanism that helps applications to determine whether multiple requests came from the same client.
* Connect-session-sequelize is a SQL session store using Sequelize.js
* The express-session library allows us to connect to the back end. The connect-session-sequelize library automatically stores the sessions created by express-session into our database.
* Template engines allow you to write HTML code.Handlebars is a simple templating language. It uses a template and an input object to generate HTML or other text formats.They are used to deliver front-end app.
* bcrypt -A library to help you hash passwords.
* Axios to fetch card data from back end 


<<<<<<< HEAD
The JSON files contain data that is Copyright © Blizzard Entertainment - All Rights Reserved
This website is not affiliated with Blizzard Entertainment.
=======
#classify

> > > > > > > feature/seeds
=======
# HearthStone-Reviewer
  <p align="left">
    <img src="https://img.shields.io/github/repo-size/deeparkrish/classify" />
    <img src="https://img.shields.io/github/issues/deeparkrish/classify" />
    <img src="https://img.shields.io/github/last-commit/deeparkrish/classify" >       
  </p>
  <p align="left"> 
     <img src="https://img.shields.io/github/languages/top/deeparkrish/classify"/>
    <img src="https://img.shields.io/badge/MYSQL2-yellow" />
    <img src="https://img.shields.io/badge/Sequelize-blue"  />
    <img src="https://img.shields.io/badge/-Handlebars-yellow"/>
    <img src="https://img.shields.io/badge/-node.js-green" />
    <img src="https://img.shields.io/badge/-express-red" >
    <img src="https://img.shields.io/badge/-dtoenv-lightgrey" />
    <img src="https://img.shields.io/badge/-bulma-orange"/>
    <img src="https://img.shields.io/badge/Axios-blue" />
    <img src="https://img.shields.io/badge/-express session-lightgreen"/>
    <img src="https://img.shields.io/badge/-connect session-pink"/>
</p>

## Description
Our goal is for a user who plays/ interested in Hearthstone, to create his own account and personalize according to his favorites . He could comment on cards or view other's comments. He is able log in with a username and pwd , Once authenticated, a session is created that allows to query the db.
 ## Table of Contents 
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Process](#process)
  * [Technologies](#technologies)
  * [MVCAssociations](#mvcassociations)
  * [ModelAssociations](#modelassociations)
  * [MockUp](#mockup)
  * [Testing](#testing)
  * [ProjectRepo](#projectrepo)
  * [Contribution](#contribution)
  
  
  ##  Installation
    npm init
    npm install  express mysql2  sequelize dotenv axios  connect-session express-session handlebars 

  ##  Usage
  ### To access SQL :   
    mysql -u root -p
    Enter passwrd when prompted
    source db/schema.sql
  ### To Seed database:
    npm run seed
  ### Start the app
    node server.js

  ## License 
  [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)<br />
  This app is covered under ISC license.
  

 ## Technologies 
  * Axios -a Promise-based HTTP client for JavaScript which can be used in your front-end application and in your Node.js backend. By using Axios it’s easy to    send asynchronous HTTP request to REST endpoints and perform CRUD operations.
  * Sequelize ORM sits between the server's API endpoints and the SQL database to translate data between JavaScript and SQL.
  * Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.
  * Sessions allow our Express.js server to keep track of which user is making a request, and store useful data about them in memory.
  * An express-session is an Express.js middleware that uses sessions,a mechanism that helps applications to determine whether multiple requests came from the    same client.
  * Connect-session-sequelize is a SQL session store using Sequelize.js
  * The express-session library allows us to connect to the back end. The connect-session-sequelize library automatically stores the sessions 
  created by express-session into our database.
  * Template engines allow you to write HTML code.Handlebars is a simple templating language. It uses a template and an input object to generate HTML or other    text formats.They are used to deliver front-end app.
  * bcrypt -A library to help you hash passwords.
  
   ## MVCAssociation
  
  
  ## ModelAssociations
  ![Webpage](https://github.com/Deeparkrish/hearthstone_reviewer/blob/develop/src/assets/images/Screen%20Shot%202021-08-17%20at%2012.06.07%20PM.png)
  
  ## Process 
   When an end-user - a hearthstone fan visits a  CMS-style blog site, 
  * He presented with the homepage, which includes various haerthstone cards and  user comments if any have been posted; 
    navigation links for the homepage and the option to log in
  * Upon choosingthe homepage option,the user is taken to the homepage.
  * The user chan click om any other links in the navigation like login or Sign up
  * If the user chooses to sign up, he is prompted to create a username and password
  * When he clicks on the sign-up button, the user credentials are saved and I am logged into the site
  * When he revisits the site at a later time and choose to sign in,he will be prompted to enter my username and password
  * Once signed in,he sees navigation links for the homepage, the dashboard, and the option to log out
  * When he clicks  on the homepage option in the navigation he is taken to the homepage and presented with cards and their corresponding comments that include,
    the comment, username and the date created.
  * When the user clicks on the dashboard he is presented with any comments he had already created, his cards and an option to add a new comment.
  * Upon clicking the button to add a new comment, he will prompted to enter carid and  his comments  for the card, hit the create button
    and the contents entered are saved as a new comment.
  * The user can delete or update his comment and the dashboard is updated accordingly.
  * the user is logged out of the site either by clicking logout button or if the session is inactive for a long time.
 
 ## Mockup
 ![Webpage](https://github.com/Deeparkrish/hearthstone_reviewer/blob/develop/src/assets/images/image.png)
    
  ## Testing
  ####  CRUD operations can be testted using following applications:
    Insomnia core / Postman  or your browser 
    link : http://localhost:3000/api/<routes>
  
  ##  ProjectRepo 
  Heroku: https://dashboard.heroku.com/apps/hearthstone-reviewer

  ## Contribution
  Created with ❤️ by [Deepa Krishnan, Dyravuth Yorn, Jessica Kelley and Jorge Roldan](https://github.com/DeeparKrish/README-generator)
  </br>
  Credits :MVC - Controller module <br>
  The JSON files contain data that is Copyright © Blizzard Entertainment - All Rights Reserved
  This website is not affiliated with Blizzard Entertainment.



>>>>>>> 4b4e6378589764131dadfb1ff40fd61c35c4a1e1
