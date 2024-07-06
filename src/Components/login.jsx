import React, { useState } from 'react'
import './Login.css'
export const LoginSignup = () => {
  const [action,setAction]=useState("Sign Up");
  return (
    <div>
      <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action==="Login"?<div></div>:<div className="input">
          <input type="text" placeholder='name'/>
        </div>}
        
        <div className="input">
          <input type="email" placeholder='email' />
        </div>
        <div className="input">
          <input type="password" placeholder='password'/>
        </div>
      </div>
      {action==="Sign Up"?<div className='tologin'>Already Registered ? <span>Login</span> </div>:<div className="forgot-password">Forgot Password?<span>Click Here!</span></div>}
      
      <div className="submitcontainer">
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=> {setAction("Sign Up")}}>Sign Up</div>
        <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
      </div>
    </div>
    </div>
    

  )
}
export default LoginSignup