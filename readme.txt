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

in Button functional component the onClick attribute will not work, it must be accepted in props using spread operator

 <form onSubmit={onSubmit}> this onSubmit reloads the lpage each time we click submit button, and brings us to new url, we need to prevent this default behaviour, use 
  const onSubmit = (event) => {
    event.preventDeafult();
    console.log(event);
    
  }, preventDefault will let us see values of event at console

  ---> // save data 
  let name;
  let email;
  let text;

  // on submit form even handler
  const onSubmit = (event) => {
    event.preventDefault();

   name =  event.target[0].value
    email = event.target[1].value
    text = event.target[2].value
    
  }, these variable wont be accessible inside JSX after taking values from form, to solve this, we use useState hook
  use const [name, setName] = useState("Anshu"); anshu is default  value

  use state will allow us to re render the component again when the set functionis called or stte variable value is updated

  normal variable will not re render the element, but use state makes it possible it return the state variable and set function, we can set the deault value
  and these variables


  project 3: use style components, run--> npm install styled-components
  and in package.json add -> "resolutions": {
    "styled-components": "^5"
  }
import it using --> import styled from "styled-components"
 white-space: nowrap; --> text will not come to the next line

 put the js code inside {} in jsx code

 when usig onclick and passing a function with argument then use anonymous func --> onClick={() =>roleDice(1,2)}

 we heard props helps pass data from parent to child componentsthe number we select from number selector must be compared with the random number generated
 in role dice components, both number selector and role dice have GamePlay  parent declare state varriables there,
 pass them <NumberSelector 
      selectedNumber={selectedNumber}
      setSelectedNumber={setSelectedNumber} />, nd accept them in NumberSelector same do for currentState in role dice
