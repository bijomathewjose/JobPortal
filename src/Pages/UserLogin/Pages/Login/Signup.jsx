import  { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Style from './Login.module.css'

const Signup = () => {
    const [invalid,setInvalid]=useState(false)
    const [isExists,setIsExists]=useState(false)
    const navigate=useNavigate()
    const validate=(e)=>{
        e.preventDefault()
        const {firstname,lastname,email,password}=e.target
        if(firstname?.value && lastname?.value && email?.value && password?.value){
            const user={firstname:firstname?.value,lastname:lastname?.value,email:email?.value,password:password?.value}
            const userList=[]
            let users=JSON.parse(localStorage.getItem('users'))
            if(users){
                userList.push(...users)
            }
            const oldUser=userList.find(user=>user.email!==email.value)
            setIsExists(oldUser!==undefined)
            localStorage.setItem('users',JSON.stringify([...userList,user]))
            navigate('/login')  
        }
        else setInvalid(true)}
    const [viewPassword,setViewPassword]=useState(false)
  return (
    <div className={Style.container}>
       <div>
        <h1>Welcome to Jobs</h1>
        <p className={Style.Details}>Please enter your details</p>
       </div>
        <form className={Style.form} onSubmit={validate}>
            <label className={Style.label} htmlFor='firstname'>First Name</label>
            <input className={`${Style.input}`} type='text' placeholder='Enter your first name' id='firstname'/>
            <label className={Style.label} htmlFor='lastname'>Last Name</label>
            <input className={`${Style.input}`} type='text' placeholder='Enter your last name' id='lastname'/>
            <label className={Style.label} htmlFor='email'>Email</label>
            <input className={`${Style.input}`} type='text' placeholder='Enter your email' id='email'/>
            <label className={Style.label} htmlFor='password'>Password</label>

            <div className={Style.password}>
              <input className={`${Style.input}`} type={viewPassword ? 'text' : 'password'}  name='password' placeholder='Enter your password'  />
              <label  htmlFor='checkbox' className={`${Style.label} ${Style.labelViewPassword}`}>{viewPassword?'🔓':'🔒' } </label>
              <input  className={`${Style.input}`} type='checkbox' id='checkbox' onChange={(e)=>setViewPassword(e.target.checked)}/>
            </div>
            <button className={Style.submit} type='submit'>Signup</button>
        </form>
        {invalid && <p style={{color:'red'}}>Invalid Credentials</p>}
        {isExists && <p style={{color:'red'}}>Email already exists</p>}

        <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  )
}


export default Signup