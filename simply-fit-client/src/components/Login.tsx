import { useState , ChangeEvent, FormEvent} from 'react';
import axios from 'axios';
import '../assets/Login.css'; 

interface LoginProps {
    onSwitchComponent: (index: number) => void;
  }
  function Login({onSwitchComponent}:LoginProps){
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
        
    });
    const [responseMessage, setResponseMessage] = useState('');
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginData({
          ...loginData,
          [name]: value,
        });
      };
    
      const loginUser = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
         await axios.post('http://localhost:8080/api/login', loginData, {withCredentials: true});
        
         window.location.href = '/dashboard';
        } catch (error:unknown) {
          if (axios.isAxiosError(error)) {
            setResponseMessage('An error occurred (UNKNOWN)');
          } else {
            setResponseMessage('An error occurred (UNKNOWN)');
          }
        }
      };
    return (
    <div className="form-container">
        <form onSubmit={loginUser}> 
        <div className='form-header'>          
            <h2>Login</h2>
            <button className='close-btn' type="button" onClick={()=>onSwitchComponent(0)}>✖</button>
        </div>
        <div className='form-group'> 
            <label htmlFor="username">Username:</label><br></br>
            <input type="text" id="username" name="username" value={loginData.username}  onChange={handleChange} required />
        </div>    
        <div className='form-group'>
            <label htmlFor="password">Password:</label><br></br>
            <input type="password" id="password" name="password" value={loginData.password}  onChange={handleChange} required />
        </div>
        <button type="submit">Login</button>
        {responseMessage && <p className='errorMsg'>{responseMessage}</p>}
        </form>
    </div>);
}
export default Login;