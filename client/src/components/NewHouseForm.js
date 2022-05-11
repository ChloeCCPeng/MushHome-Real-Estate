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
                  <input type="text" class="bg-transparent" />
              </div>
              <div>
                  <label class="text-slate-400">City</label>
                  <input type="text" class="bg-transparent" />
              </div>
              <div>
                  <label class="text-slate-400">Email</label>
                  <input type="email" class="bg-transparent"/>
              </div>
              <div>
                  <label class="text-slate-400">Phone</label>
                  <input type="tel" class="bg-transparent"/>
              </div>
              <button class="text-slate-400" type="submit" class="btn btn-primary btn-block">Submit</button>
          </form>
        </div>
    </div>
  )
}

// add onchange and onsubmit÷

export default NewHouseForm


// class UserForm extends React.Component {
//     constructor(props) {
//        super(props);
//        this.state = {username: ''};
//        this.handleChange = this.handleChange.bind(this);
//        this.handleSubmit = this.handleSubmit.bind(this);
//     }
//     handleChange(event) {
//        this.setState({username: event.target.value});
//     }
//     handleFormSubmit(event) {
//        console.log('username: ' + this.state.username);
//        event.preventDefault();
//     }
//     render() {
//        return (
//           <form onSubmit={this.handleFormSubmit}>
//              <label>
//                 Name:
//                 <input type="text" value={this.state.username} onChange={this.handleUsernameChange} />
//              </label>
//              <input type="submit" value="Submit" />
//           </form>
//        );
//     }
//  }

// function handleChange(e) {
//   setSearchData({...searchData, [e.target.id]: e.target.value})
// }

// function handleRadioClick(e) {
//   let radio_val = ""
//   if (e.target.value==="true") {
//       radio_val = true;
//   } else if (e.target.value==="false") {
//       radio_val = false;
//   }
//   setSearchData({...searchData, [e.target.name]: radio_val})
// }

// <input 
//                 type="number" 
//                 id="population_min" 
//                 name="population_min" 
//                 onChange={handleChange} 
//                 className="pl-2 mx-2 mb-2 border border-blue-600 rounded-md "
//             />



// <input 
//                 type="submit" 
//                 value="Submit" 
//                 onClick={handleSubmit} 
//                 className="p-2 m-2 text-sm text-white bg-blue-600 rounded-md cursor-pointer hover:bg-black" 
//             />