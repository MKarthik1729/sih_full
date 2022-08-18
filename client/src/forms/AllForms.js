import React from 'react'
import './allforms.css'
const switchers = [...document.querySelectorAll('.switcher')]

switchers.forEach(item => {
	item.addEventListener('click', function() {
		switchers.forEach(item => item.parentElement.classList.remove('is-active'))
		this.parentElement.classList.add('is-active')
	})
})


function AllForms() {
  return (
    <div class="forms-section">
    <h1 class="section-title"></h1>
    <div class="forms">
      <div class="form-wrapper is-active">
        <button type="button" class="switcher switcher-login">
          Ground Area
          <span class="underline"></span>
        </button>
        <form class="form form-login">
          <fieldset>
            <div class="input-block">
              Is ground present ?  
              <br />
              <input type="radio" name="choice-radio" /> Yes
              <br />
            <input type="radio" name="choice-radio" /> No
              </div>
            <div class="input-block">
              Need a new Ground ?   
              <input type="radio" name="choice-radio" /> Yes<input type="radio" name="choice-radio"/> No
            </div>
          </fieldset>
          <button type="submit" class="btn-login">submit</button>
        </form>
      </div>
      <div class="form-wrapper">
        <button type="button" class="switcher switcher-signup">
          Equipment
          <span class="underline"></span>
        </button>
        <form class="form form-signup">
          <fieldset>
            <div class="input-block">
              <label >Equipment for sport</label>
              <input  type="text" required/>
            </div>
            <div class="input-block">
              <label>Name of item : </label>
              <input type="text" required/>
              <label>Number of items : </label>
              <input type="number" required/>
              <label>Number of people using : </label>
              <input type="number" required/>
              <label>Approx cost : </label>
              <input type="number" required/>
            </div>
            <div class="input-block">
              <label>Total estimate amount : </label>
              <input type="number" required/>
              <label for="myfile">Required Document:</label>
              <input type="file" id="RD" name="myfile" /><br /><br />
            </div>
          </fieldset>
          <button type="submit" class="btn-signup">Continue</button>
        </form>
      </div>
      
      <div class="form-wrapper">
        <button type="button" class="switcher switcher-signup">
          Play Field 
          <span class="underline"></span>
        </button>
        <form class="form form-signup">
          <fieldset>
            <div class="input-block">
              <label >Playfield/Court required for  </label>
              <input id="Playfield" type="text" required/>
            </div>
            <div class="input-block">
              <label>Approx usage of Playfield Proposed </label>
              <input type="number" required/>
            </div>
            <div class="input-block">
              
              <label>Approx cost : </label>
              <input type="number" required/>
            </div>
          </fieldset>
          <button type="submit" class="btn-signup">Continue</button>
        </form>
      </div>
    </div></div>
  )
}

export default AllForms