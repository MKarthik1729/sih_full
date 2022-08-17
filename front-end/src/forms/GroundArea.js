import React, { useState } from 'react'

function GroundArea() {
    const [ground,setGround] =useState(null)
    // const [NewGround,setNewGround] =useState(null)
    const [stateground,setstateGround] =useState(null)
    const [sanctionground,setSanctionGround] =useState(null)

  return (
    <div><br/><br/><br/>groundArea<br/>
        <label>
            1. Is ground present<br />
           yes <input name='ground' 
           onChange={(e)=>{
            setGround(e.target.value)
           }} 
           value='yes' type='radio' />
           no <input name='ground' 
           onChange={(e)=>{
            setGround(e.target.value)
           }}
           value='no' type='radio' />
        </label><br />
        <label>
            1. Need a new ground<br />
           yes <input name='newground' value='yes' type='radio' />
           no <input name='newground' value='no' type='radio' />
        </label>
        {(ground === 'yes') && <div>
            <label>Ground Shape<input type='text' /></label><br />
            <label>Ground Dimensions<input type='text' /></label><br />
            <label>Improvement Info<input type='text' /></label><br />
            <label>Estimated amount<input type='text' /></label><br />
            <label>Document<input type='text' /></label><br />
            </div>}
        {(ground === 'no') && <div>
            Did State government approve any area<br />
            yes <input name='stateground' 
            onChange={(e)=>{
                setstateGround(e.target.value)
               }}
            value='yes' type='radio' />
           no <input name='stateground' 
           onChange={(e)=>{
            setstateGround(e.target.value)
           }}
           value='no' type='radio' />
            </div>}
        {(stateground === 'yes') && <div>
            <label>Ground Dimensions<input type='text' /></label><br />
            <label>required help<input type='text' /></label><br />
            <label>Estimated amount<input type='text' /></label><br />
            <label>Document<input type='text' /></label><br />
            </div>}
        {(stateground === 'no') && <div>
            <label>
           Is there any proposed area<br />
           yes <input name='newground'
           onChange={(e)=>{
            setSanctionGround(e.target.value)
           }}
           value='yes' type='radio' />
           no <input name='newground'
           onChange={(e)=>{
            setSanctionGround(e.target.value)
           }}
           value='no' type='radio' />
        </label>
            </div>}
        {
            (sanctionground === 'yes') && <div>
                <label>Ground Dimensions<input type='text' /></label><br />
            <label>required help<input type='text' /></label><br />
            <label>Estimated amount<input type='text' /></label><br />
            <label>Document<input type='text' /></label><br />
                </div>
        }
        {
            (sanctionground === 'no') && <div>
                <label>Ground Dimensions<input type='text' /></label><br />
            <label>Estimated amount<input type='text' /></label><br />
            <label>Document<input type='text' /></label><br />
            </div>
        }

    </div>
  )
}

export default GroundArea