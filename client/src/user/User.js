import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {  StyledDiv, SubmitButton } from '../style/button'
import { ForgotP, FormDiv, ImgDiv, LoginDiv, StyledInput } from '../style/login'
import { front_URL} from '../values'
// import {FaUser} from 'react-icons/fa';
import {AiOutlineUser} from 'react-icons/ai'
import  UserContext  from '../Context/UserContext'

function User() {
    const user_id = useContext(UserContext)
    const navigate = useNavigate()
    const [id,setId] = useState()
    const [Pass,setPass] = useState()
        const plac = `Email Address`
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
        user_id.UserSetter(fin.id)
        // console.log(user_id.item)
        navigate('/userInterface')
        
    }
  return (
    <StyledDiv>
        <LoginDiv>
            <FormDiv>
                {/* <label> */}
                {/* <FaUser size='20' /> */}
                <AiOutlineUser size='20%' />
                   {/* <h3>User</h3> */}
                {/* </label> */}
<div>
<Link to='newUser'>NewUser/Register</Link><br />

</div>
        <form>
            <label>
                {/* Admin Id :  */}
                <StyledInput type='email' placeholder={plac} required onChange={(e)=>setId(e.target.value)}/>
            </label><br /><br />
            <label>
                {/* Password :  */}
                <StyledInput type='Password' placeholder='Password' required onChange={(e)=>setPass(e.target.value)} />
            </label>  
            <ForgotP>forget Password</ForgotP>         
            {/* <Link to='/NewAdmin' onClick={HandleSubmit}>submit</Link> */}
            <SubmitButton onClick={HandleSubmit}>Login</SubmitButton>
        </form>
            </FormDiv>
            <ImgDiv>
            </ImgDiv>
        </LoginDiv>

    </StyledDiv>
  )
}

export default User