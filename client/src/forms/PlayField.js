import React from 'react'

function PlayField() {
  return (
    <div>
        <h1>playfield form</h1>
        <label>playfield/court required<input type='text' /></label><br />
        <label>Approx usuage of people<input type='text' /></label><br />
        <label>Approved consent letter<input type='text' /></label><br />
        <label>other documents<input type='text' /></label><br />
        <label>Esimate amount<input type='text' /></label><br />
        <button>next</button>
    </div>
  )
}

export default PlayField