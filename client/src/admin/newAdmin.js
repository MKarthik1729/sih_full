import { AdminURL} from '../values'
import React, { useState } from 'react'

import {  StyledDiv, SubmitButton } from '../style/button'
import { ForgotP, FormDiv, ImgDiv, LoginDiv, StyledInput } from '../style/login'

function NewAdmin() {
  const [Name,setName ] = useState()
  const [Des,setDes ] = useState()
  const [Role,setRole ] = useState()
  const [Email,setEmail ] = useState()
  const [Mob,setMob ] = useState()
  const [Pass,setPass ] = useState()

const HandleSubmit = async (e)=>{
  e.preventDefault()
  const result = await fetch(`${AdminURL}/NewAdmin`,{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify({
      name : Name,
      designation: Des,
      role : Role,
      email : Email,
      mobile : Mob,
      password : Pass
    })
  })
  const fin = await result.json()
  console.log(fin)
}

  return (
    <StyledDiv>
    <LoginDiv>
        <FormDiv>
    <div><br></br>
        <form onSubmit={HandleSubmit}>
            <label> <StyledInput placeholder='Name of Employee' type='text' onChange={(e)=>setName(e.target.value)} /></label><br /><br />
            <label><StyledInput placeholder='Designation' type='text' onChange={(e)=>setDes(e.target.value)}/></label><br /><br />
            <label><StyledInput placeholder='Role of working' type='text' onChange={(e)=>setRole(e.target.value)}/></label><br /><br />
            <label><StyledInput placeholder='Email Id' type='email' onChange={(e)=>setEmail(e.target.value)}/></label><br /><br />
            <label><StyledInput placeholder='Mobile No' type='number' onChange={(e)=>setMob(e.target.value)}/></label><br /><br />
            <label><StyledInput placeholder='Password' type='password' onChange={(e)=>setPass(e.target.value)}/></label><br /><br />
            <SubmitButton type='submit'>Submit</SubmitButton>
        </form>
    </div>
    </FormDiv>
            <ImgDiv>
            </ImgDiv>
        </LoginDiv>

    </StyledDiv>
  )
}

export default NewAdmin