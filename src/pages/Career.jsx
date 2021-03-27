import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobListItem from '../components/JobListItem';

export default function Career() {
  //state to save JSON object
  const [jobs, setJobs] = useState(null);
  const url =
    'https://us-central1-wands-2017.cloudfunctions.net/githubjobs?description=react';

  //calling my function getJob on render.
  useEffect(() => {
    getJob();
  }, []);

  //function getJob,
  // axios is a promise-based library
  // .then is used to handle the promise if its fulfilled and
  //.catch if it is rejected.
  // the response data (JSON-object) is then stored in the variable "jobs"
  const getJob = () => {
    axios
      .get(url)
      .then((res) => {
        setJobs(res.data);
      })
      .catch((error) => console.log(`Error: ${error} `));
  };

  //if the variable job is not null, then map the stored JSON-object to
  //a child component JobListItem and pass the JSON-object as a prop.
  return (
    <div className='career-page'>
      <h1>WORK WITH US!</h1>
      {jobs &&
        jobs.map((job) => {
          return <JobListItem props={job} />;
        })}
    </div>
  );
}
