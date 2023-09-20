import  { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

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
  return (
    <div>
        <h1>Welcome to JoPortal</h1>
        <p>Please enter your details</p>
        <form onSubmit={validate}>
            <label htmlFor='firstname'>First Name</label><br/>
            <input type='text' placeholder='Enter your first name' id='firstname'/><br/>
            <label htmlFor='lastname'>Last Name</label><br/>
            <input type='text' placeholder='Enter your last name' id='lastname'/><br/>
            <label htmlFor='email'>Email</label><br/>
            <input type='text' placeholder='email' id='email'/><br/>
            <label htmlFor='password'>Password</label><br/>
            <input type='password' placeholder='password' name='password' /><br/>
            <button type='submit'>Signup</button>
        </form>
        {invalid && <p style={{color:'red'}}>Invalid Credentials</p>}
        {isExists && <p style={{color:'red'}}>Email already exists</p>}

        <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  )
}


export default Signup