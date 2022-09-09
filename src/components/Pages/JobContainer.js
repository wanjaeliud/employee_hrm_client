import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { BsTrash } from "react-icons/bs";
import "../styles/JobContainer.css"

function JobContainer() {
  const baseURL = 'http://127.0.0.1:9292';
  //setting initial state to empty array//
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  //Implementing  GET method
  useEffect(() => {
    showJobs();
  }, []);

  function showJobs(){
    fetch(`${baseURL}/jobs`)
    .then((res) => res.json())
    .then((Data) => setJobs(Data));
  }

  //Implementing Delete//
  function deleteJob(job) {
    fetch(`${baseURL}/jobs/${job.id}`, {
      method: "DELETE",
    })
    const newJob = jobs.filter((jobItem) => jobItem.id !== job.id);
    setJobs(newJob);
  }

  return (
      <>
        <div  className="Input-wrapper header">
          <label className="search">Search</label>
          <input
              type="text"
              placeholder="Search by job.. "
              className="input"
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
          />
        </div>
        <div >
          <div className="header">
            {jobs.filter(value =>{
              if (searchTerm === '') {
                return value;
              }else if(
                  value.job_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  value.description.toLowerCase().includes(searchTerm.toLowerCase())

              )
              {
                return value
              }
            }).map((jobItem, idx) => (
                <div key={idx}>
                  <div className="card rest">
                    <div className="card-body">
                      <div>
                        <img src={jobItem.image} alt="menu-pic card" />
                        <h2>{jobItem.job_name}</h2>
                        <p>Description:  {jobItem.description}</p>
                        <p>Price: {jobItem.price}</p>

                      </div>
                      <Link className="btn btn-secondary" to={`/companies/${jobItem.company_id}`}>Company</Link>
                      <Link className="btn btn-primary mx-3" to={"/Hires"}>Hire</Link>
                      <button
                          onClick={() => deleteJob(jobItem)} className="btn btn-danger mx-2">
                        <BsTrash /></button>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </>
  );
}

export default JobContainer;