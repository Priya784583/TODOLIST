import React, { useState } from 'react';

function Todolist() {
  const [activity, setActivity] = useState("");
  const [listData, setlistData] = useState([]);

  function addActivity() {
    setlistData(prevListData => {
      const updatedList = [...prevListData, activity];
      console.log(updatedList);
      setActivity('');
      return updatedList;
    });
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
      </div>
    </>
  );
}

export default Todolist;



