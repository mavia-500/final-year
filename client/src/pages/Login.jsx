import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import axios from 'axios'
import { BiLogoGmail, BiLockOpen ,BiWindowClose} from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate=useNavigate();
  const [user, setUser] = useState({
    email: '',
    password: '',
  })
  const loginUser = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4000/api/workout/login',user)
    navigate("/")
    .then(res=>alert("login successfull"))
  }
  const hanldeChange=(e)=>{
    const {name,value}=e.target
    
    setUser({
      ...user,
      [name]:value
    })
  }
  return (
    
      <div className="wrapper">
        {console.log(user)}
     <span className="icon-close"><BiWindowClose /></span>
        <div className="form-box login">
          <h2>Login</h2>
          <form action="#">
            <div className="input-box">
              
              <span className="icon"><BiLogoGmail/></span>
             
              <input type="email" id='login-email' name='email' value={user.value} required  onChange={hanldeChange}/>
              <label htmlFor="login-email">Email</label>
            </div>
            <div className="input-box">
              
              <span className="icon"><BiLockOpen/></span>
              <input type="password" required onChange={hanldeChange} name='password' value={user.password} id='login-password' />
              <label htmlFor="login-password">Password</label>
            </div>
            <div className="remember-forgot">
              <label htmlFor="remember-me"><input type="checkbox" id='remember-me'/>
                Remember me
              </label>
              <Link to="/forgotpassword">Forgot Password?</Link>
            </div>
            <button type="submit" className="btn" onClick={loginUser}>Login</button>
            <div className="login-register">
              <p>Don't have an account<Link to="/register" className="register-link">Register</Link></p>
            </div>
            
          </form>
          
        </div>

       
      </div>

    
  )
}

export default Login