import React,{useState} from 'react'

function Todolist() {
  const [activity, setActivity]= useState("");
  return (
    <>
    <div  className='peak'>
      <div className='header'>Todolist</div>
      <input type='text' placeholder='Add Activity'value={activity} onChange={(e)=>setActivity(e.target.value)}/>
    </div>
     </>
  )
}

export default Todolist
