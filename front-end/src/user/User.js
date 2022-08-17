import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { front_URL} from '../values'

function User() {
    const [id,setId] = useState()
    const [Pass,setPass] = useState()

    const HandleSubmit =async (e)=>{
        e.preventDefault()
        console.log(id,Pass)
        const result = await fetch(front_URL,{
            method:"POST",
            headers:{
              "Content-Type":"application/json",
            },
            body:JSON.stringify({
                email : id,
                pass : Pass
            })
        })
        const fin = await result.json()
        console.log(fin)
    }
  return (
    <div>
        <h1>User data</h1>
        <Link to='newUser'>NewUser/Register</Link>
        <form>
            <label>
                Admin Id : 
                <input type='email' required onChange={(e)=>setId(e.target.value)}/>
            </label><br /><br />
            <label>
                Password : 
                <input type='Password' required onChange={(e)=>setPass(e.target.value)} />
            </label>  
            <p>forget Password</p>         
            <Link to='/NewAdmin' onClick={HandleSubmit}>submit</Link>
        </form>
    </div>
  )
}

export default User