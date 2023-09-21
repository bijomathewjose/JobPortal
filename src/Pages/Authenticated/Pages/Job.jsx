/* eslint-disable react/prop-types */
import {} from 'react'

const Job = ({close,job}) => {
  return (
    <div>
        <h2>{job?.title}</h2>
        <p>Posted Time:{job?.postedTime}</p>
        <a href={job?.companyUrl}>Company:{job?.companyName}</a>
        <p>Contract Type:{job?.contractType}</p>
        <p>Location:{job?.location}</p>
        <p>Current No. of Applicants:{job?.applicationsCount}</p>
        <a href={job?.jobUrl}>Apply</a>
        <p>Work Type: {job?.workType}</p>
        <button onClick={close}>Close</button>
    </div>
  )
}

export default Job
