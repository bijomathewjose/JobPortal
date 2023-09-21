import axios from 'axios';
import { addJobs ,selectJob} from '../../../Redux/jobSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

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
    <div>
        <h2>Search</h2>
        <form onSubmit={validate}>
            <input type="text" id='searchKeyword'/>
            <button type='submit'>Search</button>
        </form>
        <div>
            {jobs.map((job)=>(
                <div key={job.id}>
                    <h2>{job.title}</h2>
                    <p>Posted Time:{job.postedTime}</p>
                    <p>Company:{job.companyName}</p>
                    <p>Contract Type:{job.contractType}</p>
                    <button onClick={()=>{
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