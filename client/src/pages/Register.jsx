import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from "react"
import axios from 'axios'
import {toast} from "react-hot-toast";
import { useNavigate } from 'react-router-dom';  
  
  const Register = () => {
    const navigate=useNavigate()
    const [user, setUser] = useState({
      name: '',
      email: '',
      password: '',
      reEnterPassword:'',
    })
    const register=async(e)=>{
      e.preventDefault();
    const {name,email,password,reEnterPassword}=user
    try{
     await axios.post("http://localhost:4000/api/workout/register",user)
        
      // alert("successfully register")
      .then(respose=>{
      if(respose.data.error){
        toast.error(respose.data.error)
       } 
       else{ 
        console.log(respose)
        toast.success("Register SUccessful! Welcome")
         setUser({name: '',
         email: '',
         password: '',
         reEnterPassword:'',
       })
       navigate('/login')
       }

      })
    }
     
     catch(error){
     }
     
  }
  const registerUser = (e) => {

    e.preventDefault();
  }

  const hanldeChange=(e)=>{
    const {name,value}=e.target
    
    setUser({
      ...user,
      [name]:value
    })
  }
  return (
    <div className='wrapper'>

      <div className="form-box register">
        <h2>Registration</h2>
        <form action="#">
          {console.log("user",user)}
          <div className="input-box">
            {/* <span className="icon">
                    <ion-icon name="person-outline"></ion-icon>
                </span> */}
            <input type="text" required name='name' value={user.name} onChange={hanldeChange} />
            <label htmlFor="">Username</label>
          </div>

          <div className="input-box">
            {/* <span className="icon"><ion-icon name="mail-outline"></ion-icon></span> */}
            <input type="email" required name='email' value={user.email} onChange={hanldeChange} />
            <label htmlFor="">Email</label>
          </div>
          <div className="input-box">
            {/* <span className="icon"><ion-icon name="lock-closed-outline"></ion-icon></span> */}
            <input type="password" required name='password' value={user.password} onChange={hanldeChange}  />
            <label htmlFor="">Password</label>

          </div>
          <div className="input-box">
            <input type='paswword' required name='reEnterPassword' value={user.reEnterPassword}  onChange={hanldeChange}/>
            <label htmlFor="">Re Enter Password</label>

          </div>


          <div className="remember-forgot">
            <label htmlFor=""><input type="checkbox" />
              I agree to the terms & conditions
            </label>
          </div>
          <button type="submit" className="btn" onClick={register}>Register</button>

          <div className="login-register">
            <p>Already have an account<Link to="/login" className="login-link">Login</Link></p>
          </div>
        </form>
      </div>

    </div>
  )
}

export default Register
