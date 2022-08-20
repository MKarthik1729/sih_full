import React, { createContext, useState } from 'react'

const UserContext = createContext()

export function UserfnContext(props) {
    const [UserId,setUserId] = useState()
    const [Name,setName]= useState()

    const UserSetter = (data)=>{
        setUserId(data)
    }
   return (
    <UserContext.Provider value={{UserId,UserSetter,Name,setName}}>
            {props.children}
    </UserContext.Provider>
  )
}

export default UserContext