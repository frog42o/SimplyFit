import '../assets/SignUp.css'; 
import { useState , ChangeEvent, FormEvent} from 'react';
import axios from 'axios';

interface SignUpProps {
    onSwitchComponent: (index: number) => void;
  }
  function SignUp({onSwitchComponent}:SignUpProps){
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        dateOfBirth: '',
        phoneNumber: ''
    });
    const [responseMessage, setResponseMessage] = useState('');


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const registerUser = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:8080/api/register', formData);
        setResponseMessage(response.data);
        console.log(response.data)

      } catch (error:unknown) {
        if (axios.isAxiosError(error)) {
          if(error.response?.status == 409){
            const errorMsg = error.response?.data;
            if(errorMsg.includes('duplicate username')){
              setResponseMessage('Username already exists!');
            }else if(errorMsg.includes('duplicate email')){
              setResponseMessage('An account is already associated with this email!');
            }
          }else if(error.response?.status == 400){
            const errorMsg = error.response?.data;
            if(errorMsg.includes('invalid length')){
              setResponseMessage('Password must be at least 8 characters long!');
            }else if(errorMsg.includes('no capital')){
              setResponseMessage('Password must contain at least one capital letter!');
            }else if(errorMsg.includes('no number')){
              setResponseMessage('Password must contain at least one number!');
            }else if(errorMsg.includes('no special')){
              setResponseMessage('Password must contain at least one special character!');
            }
          }
          else{
            setResponseMessage(error.response?.data || 'An error occured');
          }
        } else {
          setResponseMessage('An error occurred');
        }
      }
    };
  
    return (
        <div className="form-container">
            <form onSubmit={registerUser}> 
            <div className='form-header'>          
                <h2>Sign Up</h2>
                <button className='close-btn' type="button" onClick={()=> onSwitchComponent(0)}>✖</button>
            </div>
            <div className='form-group'> 
                <label htmlFor="name">Full Name:</label><br></br>
                <div className="name-group">
                    <input type="text" id="firstName" name="firstName" placeholder='First' value={formData.firstName}  onChange={handleChange} required/>
                    <input type="text" id="lastName" name="lastName" placeholder='Last'  value={formData.lastName}  onChange={handleChange}required />
                </div>
            </div>
            <div className='form-group'>
                <label htmlFor="email">Email:</label><br></br>
                <input type="email" id="email" name="email" placeholder='johndoe@gmail.com'value={formData.email} onChange={handleChange} required />
            </div>
            <div className='form-group'>
                <label htmlFor="username">Username:</label><br></br>
                <input type="text" id="username" name="username" value={formData.username}  onChange={handleChange} required/>
            </div>
            <div className='form-group'>
                <label htmlFor="password">Password:</label><br></br>
                <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
            </div>
            <div className='form-group'>
                <label htmlFor="dateOfBirth">Date of Birth:</label><br></br>
                <input type="date" id="dateOfBirth" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />
            </div>
            <div className='form-group'>
                <label htmlFor="phoneNumber">Phone Number:</label><br></br>
                <input type="tel" id="phoneNumber" value={formData.phoneNumber} name="phoneNumber" onChange={handleChange} required/>
               
            </div>
            <button type="submit">Register</button>
            {responseMessage && <p className='errorMsg'>{responseMessage}</p>}
            </form>
        </div>);
}
export default SignUp;