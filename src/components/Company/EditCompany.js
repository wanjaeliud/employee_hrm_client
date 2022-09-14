import React, { useState, useEffect } from "react";
// import  { useHistory } from 'react-router';
import {Link, useParams, useHistory} from 'react-router-dom';
import "../styles/EditCompany.css"

function EditCompany() {
  const baseURL = 'http://127.0.0.1:9292';
  const { id } = useParams();
  const history = useHistory();

  //seeting useState to hold data from form//
  //setting initial value to empty string//
  const [editCompany, setEditCompany] = useState({
    name: "",
    image: "",
    company_type: "",
    location: "",
    contact: "",
  });
  //Array desturctiong//
  const { name, image, company_type, location, contact } = editCompany;

  function onHandleChange(e) {
    setEditCompany({ ...editCompany, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    showCompanyForm();
    // eslint-disable-next-line
  }, []);

  function showCompanyForm() {
    fetch(`${baseURL}/companies/${id}`)
    .then((res) => res.json())
    .then((resData) => setEditCompany(resData));
  }

  //Patch method
  function onSubmitEditCompany(e) {
    e.preventDefault();
    fetch(`${baseURL}/companies/${id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "content-Type": "application/json",
      },
      body: JSON.stringify(editCompany),
    })
    .then((res) => res.json())
    .then((newCompany) => {
      setEditCompany(newCompany);
      history.push(`/companies/${id}`)
    });
  }

  return (
      <>
        <div className="container1">
          <div>
            <h2 className="heading-style">Edit Company</h2>

            <form onSubmit={onSubmitEditCompany}>
              <div className="login">
                <input
                    className="input"
                    type="text"
                    placeholder="Enter Name"
                    name="name"
                    value={name}
                    onChange={onHandleChange}
                />
              </div>

              <div  className="login">
                <input
                    className="input"
                    type="text"
                    placeholder="Enter UserName"
                    name="image"
                    value={image}
                    onChange={onHandleChange}
                />
              </div>

              <div  className="login">
                <input
                    className="input"
                    type="text"
                    placeholder="Enter E-mail Address"
                    name="restaurant_type"
                    value={company_type}
                    onChange={onHandleChange}
                />
              </div>

              <div className="login">
                <input
                    className="input"
                    type="text"
                    placeholder="Enter Phone Number"
                    name="location"
                    value={location}
                    onChange={onHandleChange}
                />
              </div>
              <div className="login">
                <input
                    className="input"
                    type="text"
                    placeholder="Enter Image URL"
                    name="contact"
                    value={contact}
                    onChange={onHandleChange}
                />
              </div>
              <br />

              <button className="btn-1">Update</button>

              <Link className="btn btn-secondary" to={`/companies/${id}`}>Go Back</Link>
            </form>
          </div>
        </div>

        <br />

        {/* <Link className="btn btn-danger mx-3" to="/employee">
        Back to Records
      </Link> */}
      </>
  );
}

export default EditCompany;