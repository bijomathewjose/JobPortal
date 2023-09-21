import axios from 'axios';
import { addJobs ,selectJob} from '../../../Redux/jobSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Style from './Job.module.css';
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
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const jobs=useSelector(state=>state.jobReducer.jobs)
    
    const validate=async (e)=>{
        dispatch(selectJob({}))
        e.preventDefault()
        const searchKeyword=e.target.searchKeyword.value
        if(searchKeyword){
            try {
                const response = await axios.request({...options,data:{title:searchKeyword,location:"India",rows:100}});
                dispatch(addJobs(response.data));
            } catch (error) {
                console.error(error);
            }
        }
    }
  return (
    <div className={Style.container}>
        <h2>Search Jobs</h2>
        <form onSubmit={validate} className={Style.form}>
            <input type="text" id='searchKeyword'/>
            <button type='submit'>Search</button>
        </form>
        <div className={Style.jobList}>
            {jobs.map((job)=>(
                <div className={Style.jobBox} key={job.id}>
                    <h2>{job.title}</h2>
                    <p><b>Contract Type:</b>{job.contractType}</p>
                    <p><b>Posted Time:</b>{job.postedTime}</p>
                    <button  onClick={()=>{
                        dispatch(selectJob(job))
                        navigate(`Job/${job.id}`)
                    }}>Apply</button>
                </div>
            ))}
        </div>
       
    </div>
  )
}

export default Search