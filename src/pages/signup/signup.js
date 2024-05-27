import React from 'react'
import './signup.css'

const signup = () => {
  return (
    <div className='login_class'> 
  <form>
   <center>
    <h3>SIGN UP</h3>
   </center>    
   <hr /><br />
   <div className='form_grp'> 
      <label>Name : </label>
      <input 
      type='name'
      id='name'
      placeholder='Enter your name'
      />
    </div> 
    <br />
   <div className='form_grp'> 
      <label>Email Address : </label>
      <input 
      type='email'
      id='email'
      placeholder='Enter your email'
      />
    </div>

    <br />   
    <div className='form_grp'>
      <label htmlFor="">Password :</label>
      <input 
      type="password"
      name="password"
      placeholder='enter your password' />
    </div>
    <br />
    
    <center><button>SUBMIT</button></center>
   
 </form>
 </div>
  )
}

export default signup