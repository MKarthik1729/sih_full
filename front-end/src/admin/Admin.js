import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Userpage from '../user/Userpage'
import {AdminURL} from '../values'

function Admin() {
    const [id,setId] = useState()
    const [Pass,setPass] = useState()
    const [Url,setUrl] = useState(true)
    // setUrl('/');
    const HandleSubmit = async(e)=>{  
        // console.log(id,Pass)
        console.log(AdminURL)
        const result = await fetch(AdminURL,{
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
        
        console.log(fin.id)
        fin.id && setUrl(fin.id) 
        // history.push('/NewAdmin')
    }
  return (
    <div>
        <h1>Admin data</h1>
        {Url && <form>
            <label>
                Admin email : 
                <input type='text' onChange={(e)=>setId(e.target.value)}/>
            </label><br /><br />
            <label>
                Password : 
                <input type='Password' onChange={(e)=>setPass(e.target.value)} />
            </label>  
            <p>forget Password</p>         

                <Link to="/MainUser" onClick={HandleSubmit}>submit</Link>
        </form>}
        {
            !Url && <Userpage hello={Url}/>
        }
        
    </div>
  )
}

export default Admin