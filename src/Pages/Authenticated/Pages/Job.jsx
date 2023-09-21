/* eslint-disable react/prop-types */

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setApplicationForm } from '../../../Redux/jobSlice'
import { Link } from 'react-router-dom'
const Job = () => {
    const [showModal, setShowModal] = useState(false)
    const job=useSelector(state=>state.jobReducer.selectedJob)
  return (
    <div>
        <h2>{job?.title}</h2>
        <p>Posted Time:{job?.postedTime}</p>
        <a href={job?.companyUrl}>Company:{job?.companyName}</a>
        <p>Contract Type:{job?.contractType}</p>
        <p>Location:{job?.location}</p>
        <p>Current No. of Applicants:{job?.applicationsCount}</p>
        <p>Work Type: {job?.workType}</p>
        <button onClick={() => setShowModal(true)}>Apply</button>
        {showModal && <Modal job={job} close={() => setShowModal(false)}/>}
    </div>
  )
}

const Modal = ({job,close}) => {
    const dispatch=useDispatch()
    const [showForm,setShowForm]=useState(true)
    const ApplicationForm=useSelector(state=>state.jobReducer.applicationForm)
    const handleSubmit=(e)=>{
        e.preventDefault()
        const name=e.target.name.value
        const email=e.target.email.value
        const note=e.target.note.value
        dispatch(setApplicationForm({name,email,note}))
        setShowForm(false)
    }
    return (
        <div>
            <button onClick={close}>Close</button>
           {showForm ?<>
            <h2>Enter your details </h2>
            <p>{job?.title} : {job?.id}</p>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter your name' id='name' required/><br/>
                <input type="email" placeholder='Enter your email' id='email' required/><br/>
                <input type='textArea' placeholder='Enter your cover letter note' id='note' required/><br/>
                <input type='file' placeholder='Upload your Cover Letter/Resume' id='file' /><br/>
                <button type='submit'>Submit</button>
            </form>
           </>:
           <>
           <h2>Successfully Submitted</h2>
                <h3>Application</h3>
                <p>Name:{ApplicationForm?.name}</p>
                <p>Email:{ApplicationForm?.email}</p>
                <p>Note:{ApplicationForm?.note}</p>
           </>
           }
           <Link to='/Home'>Home</Link>
        </div>
    )
}
export default Job
