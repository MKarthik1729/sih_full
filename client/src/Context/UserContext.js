import React, { createContext, useState } from 'react'

const UserContext = createContext()

function UserfnContext(props) {
    const [UserId,setUserId] = useState()
  return (
    <UserContext.Provider>
            {props.children}
    </UserContext.Provider>
  )
}

export default UserfnContext