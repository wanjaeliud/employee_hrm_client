import React, {useState, useEffect,} from 'react';
import {Link, useParams} from 'react-router-dom';
import "../styles/CompanyProfile.css"

function CompanyProfile() {
  const baseURL = 'http://127.0.0.1:9292';

  //setting useState to hold data from Get request//
  const [company, setCompany] = useState([]);
  const { id } = useParams();

  //Get Request by id//
  useEffect(() => {
    fetch(`${baseURL}/companies/${id}`)
    .then((res) => res.json())
    .then((resData) => setCompany(resData));
    // eslint-disable-next-line
  }, []);

  return (
      <div className="res-profile">

        {company && (
            <>
              <div className="profile-card">
                <Link className="btn btn-secondary mx-4" to={"/companies"}>Back To Companies</Link>
                <Link className="btn btn-secondary" to={"/jobs"}>Go To Jobs</Link>
                <br />
                <h1>Company Details</h1>
                <img className="res-pic" src={company.image} alt="restaurant-pic"/>
                <h2>Company Name: {company.name}</h2>
                <h3>Company Type: {company.company_type}</h3>
                <h4>Location: {company.location}</h4>
                <h4>Contact: {company.contact}</h4>
                <Link className="btn btn-primary mx-3" to={`/companies/edit/${company.id}`}>Edit Company</Link>
                <Link className="btn btn-secondary" to={"/addjob"}>Add Job</Link>
              </div>
              <div className="btn-links">
              </div>
            </>
        )}

      </div>
  );
}

export default CompanyProfile;