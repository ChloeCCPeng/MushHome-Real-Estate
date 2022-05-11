import React from 'react'

const handleSubmit =(e) => {
  e.preventDefault();
  console.log('submit');
}

function NewHouseForm() {
  return (
    <div>
      <h1>List a House</h1>
        <div className="container">
          <form onSubmit={handleSubmit}>
              <div>
                  <label class="text-slate-400" >Address</label>
                  <input type="text" class="bg-transparent" id="address" name="address"/>
              </div>
              <div>
                  <label class="text-slate-400">City</label>
                  <input type="text" class="bg-transparent" id="city" name="city"/>
              </div>
              <div>
                  <label class="text-slate-400">State</label>
                  <input type="email" class="bg-transparent" id="state" name="state"/>
              </div>
              <div>
                  <label class="text-slate-400">List Price</label>
                  <input type="tel" class="bg-transparent" id="listPrice" name="listPrice"/>
              </div>
              <button class="text-slate-400" type="submit" class="btn btn-primary btn-block">List</button>
          </form>
        </div>
    </div>
  )
}

export default NewHouseForm