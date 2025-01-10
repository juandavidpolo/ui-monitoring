import React from "react";

const Login = () => {
  return(
    <div className="login--view">
      <div className="login--container">
        <div>
          <h3>Login</h3>
        </div>
        <div>
          <input type="text"/>
        </div>
        <div>
          <input type="password"/>
        </div>
        <div>
          <button className="custom--button dark--button">Login</button>
          <button className="custom--button">forgot password?</button>
        </div>
      </div>
    </div>
  )
}

export default Login;