import  { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Style from './Login.module.css'
const Login = () => {
    
    const [invalid,setInvalid]=useState(false)
    const [viewPassword,setViewPassword]=useState(false)
    const navigate=useNavigate()
    
    const validate=(e)=>{
      e.preventDefault()
      const {email,password}=e.target
      console.log(email.value,password.value)
      const users=JSON.parse(localStorage.getItem('users'))
      if(users){
        console.log(users)
        const user=users.find(user=>user.email===email?.value)
        if(user && user.email===email?.value && user.password===password?.value){
        localStorage.setItem('isAuthenticated',JSON.stringify(true))
        navigate('/Home')}
      else setInvalid(true)
      }
    }
  return (
    <div className={Style.container}>
        <div>
          <h1>Welcome back!</h1>
          <p className={Style.Details}>Please enter your details</p>
        </div>
        <form className={Style.form} onSubmit={validate}>
            <label htmlFor='email' className={Style.label}>Email</label>
            <input className={`${Style.input}`} type="text" id='email' name='email' placeholder='Enter your email'/>
            <label className={Style.label}>Password</label>
            <div className={Style.password}>
              <input className={`${Style.input}`} type={viewPassword ? 'text' : 'password'}  name='password' placeholder='Enter your password'  />
              <label htmlFor='checkbox' className={Style.labelViewPassword}>{viewPassword?'🔓':'🔒' } </label>
              <input  className={`${Style.input}`} type='checkbox' id='checkbox' onChange={(e)=>setViewPassword(e.target.checked)}/>
            </div>
            <button className={Style.submit} type='submit'>Login</button>
        </form>
        {invalid && <p style={{color:'red'}}>Invalid Credentials</p>}
        <p className={`${Style.Details} ${Style.SignUp}`}>{`Don't have an account? `}<Link to="/signup" className={Style.SignUpLink}>Sign Up</Link></p>
    </div>
  )
}

export default Login