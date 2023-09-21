import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Job from './Job';

const options = {
  method: 'POST',
  url: 'https://linkedin-jobs-scraper-api.p.rapidapi.com/jobs',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': '04dc24c55fmsh0963eed07ffc744p1ad672jsn057b8f981660',
    'X-RapidAPI-Host': 'linkedin-jobs-scraper-api.p.rapidapi.com'
  },
};


const Search = () => {
    const [showJob, setShowJob] = useState(false)
    const [jobs,setJobs]=useState([])
    const [job,setJob]=useState({})
    const validate=async (e)=>{
        e.preventDefault()
        const searchKeyword=e.target.searchKeyword.value
        if(searchKeyword){
            try {
                const response = await axios.request({...options,data:{title:searchKeyword,location:"India",rows:100}});
                setJobs(response.data);
            } catch (error) {
                console.error(error);
            }
        }
    }
  return (
    <div>
        <h2>Search</h2>
        <form onSubmit={validate}>
            <input type="text" id='searchKeyword'/>
            <button type='submit'>Search</button>
        </form>
        {showJob && <Job close={()=>setShowJob(false)}  job={job} />}
        <div>
            {jobs.map((job)=>(
                <div key={job.id}>
                    <h2>{job.title}</h2>
                    <p>Posted Time:{job.postedTime}</p>
                    <p>Company:{job.companyName}</p>
                    <p>Contract Type:{job.contractType}</p>
                    <button onClick={()=>{setJob(job);setShowJob(true)}}>Apply</button>
                </div>
            ))}
        </div>
       
    </div>
  )
}

export default Search