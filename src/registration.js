import React from 'react'
import { useState } from 'react'
import "./registration.css";
function FirebaseDemo() {

    const [details, setDetails] = useState({
        fName: '',
        Password: '',
        email: '',
       
    })

    const PostData =async(e)=>{
        e.preventDefault()

        const{fName,Password,email}=details;

       const res=await fetch("https://spacemission-d8661-default-rtdb.firebaseio.com/RegisteredUsers.json",
       {
           method:'POST',
           headers:{
               'Content-Type':'application/json'
           },
           body:JSON.stringify({
            fName,
            Password,
            email,
           
           })
        })

    }

  return (
    <div className='form' >
        <input type='text' placeholder='Enter your first name' onChange={(e)=>
            setDetails({...details,fName:e.target.value})} />
        <input type='text' placeholder='Enter your Password' onChange={(e)=>
            setDetails({...details,Password:e.target.value})}  />
        <input type='email' placeholder='Enter your Email address' onChange={(e)=>
            setDetails({...details,email:e.target.value})} />
        <button onClick={PostData}>Submit</button>
    </div>
  )
}

export default FirebaseDemo