import React, { useState } from 'react'

function PlayField({ConsentLetter}) {
  const [requiredFor,setrequiredFor] = useState()
  const [approx ,setApprox] = useState()
  const [consent , setConsent] = useState()
  const [doc,setDoc] = useState()
  const [est,setest] = useState()

  return (
    <div>
        <h1>playfield form</h1>
        <label>playfield/court required<input onChange={(e)=>setrequiredFor(e.target.value)} type='text' /></label><br />
        <label>Approx usuage of people<input onChange={(e)=>setApprox(e.target.value)} type='number' /></label><br />
        <label>Approved consent letter<input onChange={(e)=>setConsent(e.target.value)} type='text' /></label><br />
        <label>other documents<input onChange={(e)=>setDoc(e.target.value)} type='text' /></label><br />
        <label>Esimate amount<input onChange={(e)=>setest(e.target.value)} type='number' /></label><br />
        <button onClick={()=>ConsentLetter({
          required_for : requiredFor,
          approx_usage : approx,
          consent_letter: true,
          approx_price:est,
        })}>next</button>
    </div>
  )
}

export default PlayField