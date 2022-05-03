// import { useState } from "react";
// // import styled from "styled-components";
// import LoginForm from "./LoginForm";
// import SignUpForm from "./SignUpForm";
// // import { button } from "../styles/button";

// function Login({ onLogin }) {
//   const [showLogin, setShowLogin] = useState(true);

//   return (
//     <container>
//       {/* <Logo>Log in</Logo> */}
//       {showLogin ? (
//         <>
//           <LoginForm onLogin={onLogin} />
  
//           <p>
//             Don't have an account? &nbsp;
//             <button onClick={() => setShowLogin(false)}>
//               Sign Up
//             </button>
//           </p>
//         </>
//       ) : (
//         <>
//           <SignUpForm onLogin={onLogin} />
  
//           <p>
//             Already have an account? &nbsp;
//             <button onClick={() => setShowLogin(true)}>
//               Log In
//             </button>
//           </p>
//         </>
//       )}
//     </container>
//   );
// }

// export default Login;

import React, { useState } from "react";
import styled from "styled-components";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { Button } from "../styles";

function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      {showLogin ? (
        <>
          {/* <LoginForm onLogin={onLogin} /> */}
          <h2>hello</h2>
          <div />
          <p>
            Don't have an account? &nbsp;
            <Button color="secondary" onClick={() => setShowLogin(false)}>
              Sign Up
            </Button>
          </p>
        </>
      ) : (
        <>
          <SignUpForm onLogin={onLogin} />
          <div />
          <p>
            Already have an account? &nbsp;
            <Button color="secondary" onClick={() => setShowLogin(true)}>
              Log In
            </Button>
          </p>
        </>
      )}
    </div>
  );
}

export default Login;