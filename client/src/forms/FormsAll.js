import React, { useState } from 'react'

import GroundArea from './GroundArea'
import './FormsAll.css'
import Equipment from './Equipment'
import PlayField from './PlayField'
import './allforms.css'

function FormsAll() {
    // const [active ,setactive] = useState('')
    const [divi,setdivi] = useState()

    const ConsentLetter = (kk)=>{
        setdivi('consent')
        console.log(kk)
    }

  return (
    <div className='formsAll'>
        {/* fuck off */}
        <div className='divisions'>
            <h5 onClick={()=>setdivi('ground')} className={
                (divi === 'ground')? 'hello':'normal'
            }>Ground Area</h5>
            <h5 onClick={()=>setdivi('equip')} className={
                (divi === 'equip')? 'hello':'normal'
            }>Equipment</h5>
            <h5 onClick={()=>setdivi('field')} className={
                (divi === 'field')? 'hello':'normal'
            }>Play Field</h5>
        </div>
        {
            (divi === 'ground') && <GroundArea ConsentLetter={ConsentLetter}/>
        }
        {(divi==='equip') && <Equipment ConsentLetter={ConsentLetter} />}
        {(divi === 'field')&& <PlayField ConsentLetter={ConsentLetter} />}
        {(divi === 'consent')&& <h1>ConsentLetter</h1>}
    </div>
  )
}

export default FormsAll