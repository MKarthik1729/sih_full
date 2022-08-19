import React, { useState } from 'react'
import { StyledDiv } from '../style/button'
import { FormDiv, ImgDiv, LoginDiv, StyledInput } from '../style/login'
import {front_URL} from '../values'
import { SubmitButton } from '../style/button'

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
    <StyledDiv>
    <LoginDiv>
        <FormDiv>
    <div>
        <h1>new User</h1>
        <form onSubmit={HandleSubmit}>
            <label> <StyledInput type='text' placeholder='Name' onChange={(e)=>setName(e.target.value)} /></label><br /><br />
            <label><StyledInput placeholder='Designation' type='text' onChange={(e)=>setDes(e.target.value)}/></label><br /><br />
            <label><StyledInput placeholder='Address' type='text' onChange={(e)=>setAddress(e.target.value)}/></label><br /><br />
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

export default NewUser