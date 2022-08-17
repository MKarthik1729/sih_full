import React, { useState } from 'react'
import {front_URL} from '../values'

function NewUser() {
  const [Name,setName ] = useState()
  const [Des,setDes ] = useState()
  const [Address,setAddress ] = useState()
  const [Email,setEmail ] = useState()
  const [Mob,setMob ] = useState()
  const [Pass,setPass ] = useState()

const HandleSubmit = async (e)=>{
  e.preventDefault()
  const result = await fetch(`${front_URL}/NewUser`,{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify({
      name : Name,
      designation : Des,
      address : Address,
      email : Email,
      mobile : Mob,
      password : Pass
    })
  })
  const fin = await result.json()
  console.log(fin)
}

  return (
    <div>
        <h1>new User</h1>
        <form onSubmit={HandleSubmit}>
            <label>Name <input type='text' onChange={(e)=>setName(e.target.value)} /></label><br /><br />
            <label>Designation<input type='text' onChange={(e)=>setDes(e.target.value)}/></label><br /><br />
            <label>Address<input type='text' onChange={(e)=>setAddress(e.target.value)}/></label><br /><br />
            <label>Email Id<input type='email' onChange={(e)=>setEmail(e.target.value)}/></label><br /><br />
            <label>Mobile No<input type='number' onChange={(e)=>setMob(e.target.value)}/></label><br /><br />
            <label>Password<input type='password' onChange={(e)=>setPass(e.target.value)}/></label><br /><br />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default NewUser