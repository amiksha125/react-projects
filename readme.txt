React is simply a framework helping developers to create web site's user interface. React combines the use of HTML, CSS and JS. But the websites made using HTML, CSS and JS are not manageable to a large scale. Plain JS will require a lot of efforts. React allows us to create websites using a well organized and manageable code. React has its own rule set followed by many developers, In plain JS project , we define rule set which is difficult to understand by other developers. Next.js provides a dedicated full stack development package using npx create-react-app. Use vite:

npm create vite@latest

name the project

vite supports multiple framework , choose react framework

main.jsx inside src will render the elments:
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render( ----- get the root div element for rendering
  <StrictMode> -- this is jsx
    <App />
  </StrictMode>,
)




index.html:
 <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>



we have index.css for styling

gitignore will contain the files that we do not wish to push into GitHub


public folder is used to store images 

package.json: keeps track of project details and there are dependencies which refer to some additional libraries

before running project run command: npm i to install all dependencies
all these dependencies folder will be stored in node_modules for example u can see folder react and react-dom
always put node_modules in gitignore

vite.config.js: when spinning vite project

running script, in json there are:
"scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  }
use dev , meaning npm run dev

we mount <App> component inside main.jsx, inside App.jsx file it should return atleast a div else it will throw error
when returning multiple divs add () -> return ()

React  components are declared just like javascript functions the first letter of function name must be capital--> const App = () => {}

its className in react as class keyword is already being used in css file

inline css using style attribute use double curly brace and put values in quotations--> style={{ width : '45px', height: '25px'}}


project 2: creating css modules , there modules are desiged for providing styling tos pecific components , we will provide className = {styles.class_name} , where impor styles from module.css, class name must not have dash -. 

We can use the same componens multiple time using props, for example two buttons are almost similarbut their contecttext changes then we will the different contents throgh 
<Button text = "chat" /> then it will automatically pass props , accept props argument and use like -> {props.text}

react incons install it -> npm i react-icons and use -> import { FaPhoneAlt } from "react-icons/fa";, Fa means  /fa folder





project 5:
Using tailwing go to the tailwing css website then choose vite then run commands :
npm create vite@latest my-project
cd my-project
npm run dev
npm install
npm install tailwindcss @tailwindcss/vite

perform all the setup mentioned in its site
also search there tailwind prettier extension
using this -> npm install -D prettier prettier-plugin-tailwindcss

tailwind css reduces code writing time we can all the css in className attribute ---> <div className='flex bg-red-500 justify-items-stretch'>App</div>

we will use firebase , go to the firebase website sign in with your google acc and go to console, then new project name it, then disable google analytics
then continue start the project, then after starting </> click this icon, and register with the same project name, for thid click
on Add App </> web app, after  this you will get npm install command, and credentials. run the command
create the config inside src folder , inside this create firebase.js file and paste the credentials code inside itand export the app in the end 

Now create database inside firebase , we will create firestore database for this in the left panel go to the database & storage then choose firework 
then  click create database, select standard edition, then kkepp DB id as defaultand choose nearby location asia-south1 - mumbai
then in configure, choose start in Test Mode, click create 

now firestore is a nosql database so create a collection --> which means a table
then Document ID click AutoId, add feild name String data type enter value, same for email
then import in firebase.js 

WE CAN see the browser inside vs code, do cntrol + shift + P ,search for simple browser then paste the url 
then split it right

tailwind has shorten the syntax of css umust study and observe
you can hover on the properti to see full css and values