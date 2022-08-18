import React, { useState } from 'react'

function Equipment({ConsentLetter}) {
  const [equip,setEquip] = useState()
  const [name , setName] = useState()
  const [NoOfItem,setNoOfItem] = useState()
  const [NoOfPeople,setNoOfPeople] = useState()
  const [Approx,setpprox] = useState()
  const [totAmount , setTotAmount] = useState()
  const [doc,setDoc] = useState()

  return (
    <div>
        <h1>equipment form</h1><br />
        <label>Equipment for Sports<input onChange={(e)=>setEquip(e.target.value)} type='text' /></label><br />
        <label>Name of item<input onChange={(e)=>setName(e.target.value)} type='text' /></label><br />
        <label>Number of item<input onChange={(e)=>setNoOfItem(e.target.value)} type='text' /></label><br />
        <label>Number of people using<input onChange={(e)=>setNoOfPeople(e.target.value)} type='text' /></label><br />
        <label>Approx Cost<input onChange={(e)=>setpprox(e.target.value)} type='text' /></label><br />
        <label>total Amount<input onChange={(e)=>setTotAmount(e.target.value)} type='text' /></label><br />
        <label>Documents<input onChange={(e)=>setDoc(e.target.value)} type='text' /></label><br />
        <button onClick={()=>ConsentLetter({
          name : name,
          number_of_items : NoOfItem,
          number_of_people : NoOfPeople,
          approx_price : Approx
        })}>next</button>
    </div>
  )
}

export default Equipment