import React from 'react'
import {FaPlusSquare} from 'react-icons/fa'

function AddTask({ buttonClick}) {

    const showForm=(event)=>{
        event.preventDefault();
        document.querySelector('.formBox').setAttribute('style', 'display: block');
        document.querySelector('.addBox').setAttribute('style', 'display: none');
    }

    const cancel =()=>{
        document.querySelector('.formBox').setAttribute('style', 'display: none');
        document.querySelector('.addBox').setAttribute('style', 'display: flex');
    }
    
    // date input min set to today
    let theDay = new Date()
    let today = `${theDay.getFullYear()}-0${theDay.getMonth()+1}-${theDay.getDate()}T00:00`

    return (
        <>  
            <div className='addBox'>
                <FaPlusSquare size={'5em'} cursor={'pointer'} onClick={showForm} className='addToggle'/>
            </div>
            <form onSubmit={buttonClick} className='formBox'>
            <label >Task <input id="taskeInput" type="text"  placeholder='Add Task' required/> </label>
            
            <label >Date <input id="dateInput" type="datetime-local" min={today} max="2032-12-13T00:00" required/></label>
            
            <div className='btnDiv'>
            <button className='btn' type='submit'>ADD</button>
            <button className='btn' onClick={cancel}>Cancel</button>
            </div>
            </form>
        </>
    )
}

export default AddTask
