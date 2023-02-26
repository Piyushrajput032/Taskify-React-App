import React,{useState,useEffect} from 'react'

export const Test = () =>{
    const [count,setCount] = useState(0)
    console.log()
    useEffect(()=>{
       console.log('init')
       return ()=>{
        console.log('data cookiebjhgw')
       }
    },[count])
    return (
        <>
        <input type='button' onClick={()=>{setCount(count+1)}} value='increment'/>
        <h1>i am {count}</h1>
        <input type='button' onClick={()=>{if(count>0){setCount(count-1)}}} value='decrement'/>
        </>
    )
}

