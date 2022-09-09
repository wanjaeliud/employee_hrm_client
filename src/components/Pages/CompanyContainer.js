import React from 'react';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import "../styles/CompanyContainer.css"

function CompanyContainer() {
  const baseURL = 'http://127.0.0.1:9292';
  //setting initial state to empty array//
  const [companies, setCompanies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  //Implementing  GET method

  useEffect(() => {
    showCompanies(); //This function is called every time delete method is requested
  }, []);

  function showCompanies() {
    fetch(`${baseURL}/companies`)
    .then((res) => res.json())
    .then((Data) => setCompanies(Data));
  }

  // Implementing Delete//
  function deleteCompany(company) {
    fetch(`${baseURL}/companies/${company.id}`, {
      method: "DELETE",
    });
    const newCompanies = companies.filter(
        (res) => res.id !== company.id
    );
    setCompanies(newCompanies);
  }

  return (
      <>
        <div>
          <div className="Input-wrapper header">
            <label className="search">Search</label>
            <input
                type="text"
                placeholder="Search for a Company... "
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
            />
          </div>
          <div className="header">
            {companies
            .filter((value) => {
              if (searchTerm === "") {
                return value;
              } else if (
                  value.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  value.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  value.company_type.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return value;
              }
            }).map((company, idx) => (
                <div key={idx} className="company-container">
                  <div>
                    <div className="card  cmp">
                      <div className="card-body">
                        <img src={company.image} alt="company-pic" />
                        <h2>{company.name}</h2>
                        <p>{company.company_type}</p>
                        <p>{company.location}</p>
                        <p>Contact: {company.contact}</p>
                        <Link
                            className="btn btn-primary"
                            to={`/companies/${company.id}`}
                        >
                          Show company
                        </Link>
                        <button
                            onClick={() => deleteCompany(company)}
                            className="btn btn-danger mx-2"> Delete</button>
                      </div>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </>
  );
}

export default CompanyContainer;