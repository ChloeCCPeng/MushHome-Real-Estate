// import React, { useEffect, useState } from "react";
// import { BrowserRouter, Routes, Route, useHistory } from "react-router-dom";
// // import NavBar from "./NavBar";
// import Login from "./components/Login";
// import Home from "./components/Home";


// function App() {
    
//     const [user, setUser] = useState(null);
//     // const [errors, setErrors] = useState([])
  
//     // const history = useHistory()
  
  
//     // useEffect(() => {
//     //   // auto-login
//     //   fetch("/me").then((r) => {
//     //     if (r.ok) {
//     //       r.json().then((user) => setUser(user));
//     //     };
//     //   });
//     // }, []);
  
//     // if (!user) return <Login onLogin={setUser} />;
  
//     return (
//       <BrowserRouter>
//         {/* <NavBar user={user} setUser={setUser}/> */}
//         <Routes>
//           <Route exact path="/">
//             <Home /> 
//           </Route>
//           <Route exact path="/login">
//             <Login onLogin={setUser} />
//           </Route>
//           {/* <Route path="/success">
//             <Success />
//           </Route>
//           <Route path="/canceled">
//             <Canceled />
//           </Route>
//           <Route path="/checkout">
//             <Checkout />
//           </Route> */}
//         </Routes>
//       </BrowserRouter>
//     );
//   };
//   export default App;

// import React, { useEffect, useState } from "react";
import React, { useEffect, useState } from "react";
import { Routes, Route, useHistory } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Account from "./components/Account";
import Listing from "./components/Listing";
import HouseMarketReport from "./components/HouseMarketReport";
// import Search from "./components/Search";
// import './App.css';

function App() {
  const [state, setState] = useState();
  const [user, setUser] = useState(null);
  // const history = useHistory();

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
        // history.push("/")
      };
    });
  }, []);

  return (
    <>
      <Routes>
        <Route exact path="/">
          <Home /> 
        </Route>
        <Route exact path="/login">
          <Login onLogin={setUser} />
        </Route>
        <Route exact path="/account">
          <Account /> 
        </Route>
        <Route exact path="/listing">
          <Listing /> 
        </Route>
        <Route exact path="/houseMarketReport">
          <HouseMarketReport /> 
        </Route>
        {/* <Route exact path="/search">
          <Search /> 
        </Route> */}
      </Routes>
    </>
  );
};
export default App;