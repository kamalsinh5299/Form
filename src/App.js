import { fireEvent } from '@testing-library/react'
import React, { useState } from 'react'

export default function App() {
  const [FirstName,setFirstName]=useState("")
const [LastName,setLastName]=useState("")
const [email,setEmail]=useState("")
const [number,setNumber]=useState("")
const [profile,setProfile]=useState("")
const [data,setData]=useState("")
const hand=()=>{
  setData(localStorage.setItem('name',FirstName))
}
  return (
    <div >
        <label>
                FirstName:<input type="text" value={FirstName} onChange={(e)=>{setFirstName(e.target.value)}} name="firstname" required/>
              </label>
              <label>
                LastName:<input type="text" value={LastName}onChange={(e)=>{setLastName(e.target.value)}} name="lastname" required/>
              </label>
              <label>
                Email:<input type="email" name="email"  value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>
              </label>
              <label>
                Mobile:<input type="number" name="mobile" value={number} onChange={(e)=>{setNumber(e.target.value)}} required/>
              </label>
              <label>
                Profile:<input type="file" name="profile" value={profile} onChange={(e)=>{setProfile(e.target.value)}} />
              </label>
             <button onClick={hand}>Login</button>
       

       <h1>Information</h1>
      FirstName:<span>{localStorage.getItem("name")}</span>
      LastName:<span>{LastName}</span>
      email:<span>{email}</span>
      Mobile:<span>{number}</span>
      Profile:<img src={profile} alt="img"></img>

    </div>
  )
}

