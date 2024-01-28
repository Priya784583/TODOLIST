import React, {useEffect, useState } from 'react'

function Todolist() {
    const [activity, setActivity]= useState('')
    const [allvalues, setvalues]=usestate([])
    useEffect(()=>{

    }, [allvalues])
    function additem(){
        if(item!=''){
            setvalues((allvalues)=>{
                const updated= [...allValues, item];
                console.log(updated);
                return updated;
            })
            Setitem('')
        }
    }
}
