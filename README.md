# taskTracker
Hi,:wave: this is my **first React project**, I chose to build a task tracker to learn all the basics and get a good understanding how Reactjs framework works.

## During this project had the chance to learn all the following about React<br/>

Set up my first react development envierment<br/>
by running the following command:<br/>
`npx crear-react-app my-app`
<br/>
<br/>
### How to creat a class Component:<br/>
```
export default class Header extends React.Component{
constructor(props) {
    super(props);
    this.state = {}
}
    render()  {
        return (
            <div>
	<h1> My Header </h1>
            </div>
        )

   }
}
```
### How to creat a function Component:<br/>
```
export const Header = () => {

      const name = ‘reda’

      return (
            <div>
	<h1> Hi {name} </h1>
            </div>
}
```
### Calling a component:<br/>
```

Import Header from ‘./Header’;

 and use:  <Header />
```
### Passing props to components:<br/>
```
< Component name=’reda’ />
```
### setting a propsType:<br/>
```
Component.propTypes = {
name: PropTypes.string
}
{string, number, bool, func, array, object...}
```
### Events:<br/>
```
<Button onClick={buttonClicked} />
<input  type="text"  onChange={e => console.log(e.target.value)} />
```
### useState Hook:<br/>
The React useState Hook allows us to track state in a function component.<br/> 
1 – Import the hook:
```
import { useState } from "react";
```
2 - Initialize useState:
```
const [variabl, setVariable] = useState([one, two, three]);
```

variable:          is the name of our state.<br/>
SetVariable:    the function we use to update our state.<br/>
UseState:        the initial state of our state.<br/>
### UseEffect:<br/>
`UseEffect( ()=>{   } )` when we want something to happen right after page loads.
### Lists & .map(key):<br/>
```
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) => <li>{number}</li>);
```
```
const users = [{name:’reda’, age:25},{name:’john’, age:28}];
const usersAge = users.map((key) => <p>{key.age}</p>);
```
### React-icons:<br/>
1 - install react icons: `npm I react-icons`<br/>
2 - import to file: `import {FaTimes} from 'react-icons/fa'`<br/>
3 – use the icons in code: `<FaTimes />`<br/>
### React Build Version:<br/>
After finishig the app we can create a statc version.<br/>
`npm run build` (Creat new folder named build with all files)
