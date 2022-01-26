import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from './components/Tasks';
import Header from './components/Header';
import About from './components/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  // variables
  const [tasks, setTasks] = useState([{
    "id": 1,
    "text": "Doctor appointment",
    "date": "2022-01-21T06:37",
    "reminder": true
},
{
    "id": 2,
    "text": "Finish research",
    "date": "2022-05-03T22:00",
    "reminder": false
}])

// submit button
let buttonClick = (event) =>{
    event.preventDefault();
    setTasks(tasks => [{id:(tasks.length+1), text:document.getElementById("taskeInput").value, date:document.getElementById("dateInput").value, reminder: false}, ...tasks]);
    document.querySelector('.formBox').setAttribute('style', 'display: none');
    document.querySelector('.addBox').setAttribute('style', 'display: flex');
}

//delete button
let del = (id) =>{
    setTasks(tasks.filter(task => task.id !== id))
}

//ontoggle the div
const tog = (id)=>{
    setTasks(tasks.map((task)=> task.id === id ? {...task, reminder: !task.reminder} : task))

    /* 
    {id:(task.id), text:task.text, date:task.date, reminder: (task.reminder === true ? false : true)}

    is same as

    {...task, reminder: !task.reminder} 
    
    */
}
  return (
    
    <BrowserRouter>
      <Routes>
          {/* form submite */}
          <Route path='/' exact element={
            <div className='container'>
                <Header />
                <AddTask buttonClick={buttonClick}/>
                {tasks.length > 0 ? <Tasks tasks={tasks} del={del} tog={tog}/> : <h1 className="cenTitle">No Tasks Available</h1>}
            </div>
          } />

          {/*Display tasks */}

          <Route path='/about' element={
            <div className='container'>
              <Header />
              <About />
            </div>
          } />
          
      </Routes>
    </BrowserRouter>
  );
}

export default App;
