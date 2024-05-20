import React, {useState} from 'react';
import '../assets/Login.css'; 

interface LoginProps {
    onSwitchComponent: (index: number) => void;
  }
  function Login({onSwitchComponent}:LoginProps){
    return (
    <div className="form-container">
        <form> 
        <div className='form-header'>          
            <h2>Login</h2>
            <button className='close-btn' type="button" onClick={()=>onSwitchComponent(0)}>✖</button>
        </div>
        <div className='form-group'> 
            <label htmlFor="username">Username:</label><br></br>
            <input type="text" id="username" name="username" required />
        </div>    
        <div className='form-group'>
            <label htmlFor="password">Password:</label><br></br>
            <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Login</button>
        </form>
    </div>);
}
export default Login;