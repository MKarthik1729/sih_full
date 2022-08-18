import React, { useState } from 'react'

import GroundArea from './GroundArea'
import './FormsAll.css'
import Equipment from './Equipment'
import PlayField from './PlayField'

function FormsAll() {
    const [divi,setdivi] = useState()
  return (
    <div>
        {/* fuck off */}
        <div className='divisions'>
            <h5 onClick={()=>setdivi('ground')}>Ground Area</h5>
            <h5 onClick={()=>setdivi('equip')}>Equipment</h5>
            <h5 onClick={()=>setdivi('field')}>Play Field</h5>
        </div>
        {
            (divi === 'ground') && <GroundArea />
        }
        {(divi==='equip') && <Equipment />}
        {(divi === 'field')&& <PlayField />}
    </div>
  )
}

export default FormsAll