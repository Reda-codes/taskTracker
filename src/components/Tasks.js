import React from 'react'
import {FaTimes} from 'react-icons/fa'
import {FaCheckCircle} from 'react-icons/fa'
import {FaRegClock} from 'react-icons/fa'

function Tasks({tasks, del, tog}) {
    

    return (
        <>
            {
                tasks.map(
                    key => <div key={key.id} onDoubleClick={()=>tog(key.id)} className={key.reminder === true ? 'greenBorder' : 'redBorder'}>
                        <div className='titleClose'>
                        <h3 className='taskH3'>{key.text} </h3>
                        <FaTimes color='red' onClick={()=>del(key.id)} cursor={'pointer'}/> 
                        </div>
                        <p>{key.date.substr(0, 10)} at {key.date.substr(11)}</p>
                        {key.reminder === true? <p><FaCheckCircle color='green'/> Done</p> : <p><FaRegClock color='red' /> Pending</p>}
                    </div>
                )
            }
        </>
    )
}

export default Tasks
