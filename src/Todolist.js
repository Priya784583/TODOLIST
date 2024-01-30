import React, { useState } from 'react';

function Todolist() {
  const [activity, setActivity] = useState("");
  const [listData, setlistData] = useState([]);

  function addActivity() {
    setlistData(prevListData => {
      const updatedList = [...listData, activity];
      console.log(updatedList);
      setActivity('');
      return updatedList;
    });
  }
  function removeActivity(i){
const updatedlistData =listData.filter((elem, id)=>{
    return i!==id;
})
setlistData(updatedlistData);
  }
  function Removeall(){
    setlistData([])
  }

  return (
    <>
      <div className='peak'>
        <div className='header'>Todolist</div>
        <input
          type='text'
          placeholder='Add Activity'
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <button onClick={addActivity}>add</button>
        <p className='list-heading'>Here is your List :{")"}</p>
        {listData.length > 0 && listData.map((data, i) => (
  <React.Fragment key={i}>
    <p>
      <div className='listData'>{data}</div>
    <div className='btn-position'><button onClick={()=>removeActivity
   (i)}>remove(-)</button></div>
    </p>
  </React.Fragment>
))}
{listData.length>=1 &&
<button onClick={Removeall}>Remove all</button>}
      </div>
    </>
  );
}

export default Todolist;