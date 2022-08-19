import React, { useState } from 'react'

import GroundArea from './GroundArea'
import './FormsAll.css'
import Equipment from './Equipment'
import PlayField from './PlayField'
import { StyledDiv } from '../style/button'
import { LoginDiv } from '../style/login'

//styles
import {NotSelectedForm, SelectedForm} from '../style/forms'

function FormsAll() {
    // const [active ,setactive] = useState('')
    const [divi,setdivi] = useState()

    const ConsentLetter = (kk)=>{
        setdivi('consent')
        console.log(kk)
    }

  return (
    <StyledDiv>
        <LoginDiv>
        {/* fuck off */}
        <div className='divisions'>
             
                {(divi === 'ground')? <SelectedForm>Ground Area</SelectedForm>
                :<NotSelectedForm onClick={()=>setdivi('ground')}>Ground Area</NotSelectedForm>}
                {(divi === 'equip')? <SelectedForm>Equipment</SelectedForm>
                :<NotSelectedForm onClick={()=>setdivi('equip')}>Equipment</NotSelectedForm>}
                {(divi === 'field')? <SelectedForm>Play Field</SelectedForm>
                :<NotSelectedForm onClick={()=>setdivi('field')}>Play Field</NotSelectedForm>}
            
            {/* <NotSelectedForm onClick={()=>setdivi('equip')} 
                // (divi === 'equip')? 
            >Equipment</NotSelectedForm>
            <NotSelectedForm onClick={()=>setdivi('field')} 
                // (divi === 'field')? 'hello':'normal'
            >Play Field</NotSelectedForm> */}
        </div>
        {
            (divi === 'ground') && <GroundArea ConsentLetter={ConsentLetter}/>
        }
        {(divi==='equip') && <Equipment ConsentLetter={ConsentLetter} />}
        {(divi === 'field')&& <PlayField ConsentLetter={ConsentLetter} />}
        {(divi === 'consent')&& <h1>ConsentLetter</h1>}
        </LoginDiv>

    </StyledDiv>

  )
}

export default FormsAll