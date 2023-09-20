import  { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

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
    <div>
        <h1>Welcome back</h1>
        <p>Please enter your details</p>
        <form onSubmit={validate}>
            <label>Email</label><br/>
            <input type="text" id='email' name='email' placeholder='Enter your email'/>
            <div>
            <label>Password</label><br/>
            <input type={viewPassword ? 'text' : 'password'}  name='password' placeholder='Enter your password'  />
            <label htmlFor='checkbox' style={{userSelect:'none'}}>{viewPassword?'🔓':'🔒' } </label>
            <input style={{display:'none'}}  type='checkbox' id='checkbox' onChange={(e)=>setViewPassword(e.target.checked)}/>
            </div>
            <button type='submit'>Login</button>
        </form>
        {invalid && <p style={{color:'red'}}>Invalid Credentials</p>}
        <p>{`Don't have an account? `}<Link to="/signup">Sign Up</Link></p>
    </div>
  )
}

export default Login