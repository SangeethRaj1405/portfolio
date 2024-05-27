import React from 'react';
import { Link } from 'react-router-dom';  
import './login.css';

const Login = () => {
  return (

  <div className='login_class'> 
  <form>
   <center>
    <h3>WELCOME </h3>
   </center>    
   <hr /><br /> 
   <div className='form_grp'>
      <label>Email Address : </label>
      <input 
      type='email'
      id='email'
      placeholder='Enter your email'
      />
    </div>
         <br />  <br />
    <div className='form_grp'>
      <label htmlFor="">Password :</label>
      <input 
      type="password"
      name="password"
      placeholder='enter your password' />
    </div>
    <br />
    <div className='action'>
    <center><button>LOGIN</button></center> <p>new here <Link to="/register">Signup</Link></p>
    </div>
   
 </form>
 </div>
  );
};

export default Login;
