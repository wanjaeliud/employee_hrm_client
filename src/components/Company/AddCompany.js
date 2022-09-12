import React, { useState } from "react";
import  {useHistory } from 'react-router';
import '../styles/EditCompany.css'
import '../styles/Home.css'

function AddCompany() {
  const baseURL = 'http://127.0.0.1:9292';
  const history = useHistory();
  //setting initial value as empty string to hold form data//
  const [formData, setformData] = useState({
    name: "",
    image: "",
    location: "",
    company_type: "",
    contact: "",
  });

  function onHandleChange(e) {
    setformData({ ...formData, [e.target.name]: e.target.value });
  }

  //Implementing POST method to add Employee
  function onSubmitAddCompany(e) {
    e.preventDefault();
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        image: formData.image,
        location: formData.location,
        company_type: formData.company_type,
        contact: formData.contact,
      }),
    };

    fetch(`${baseURL}/companies`, config)
    .then((res) => res.json())
    .then((newCompany) => {
      const newCompanies = [formData, newCompany];
      setformData(newCompanies);
      history.push('/companies')
    });
  }

  return (
      <div>
        <div className="container1">
          <div>
            <h2 className="add">Add New Company</h2>

            <form>
              <div className="login">
                <input
                    className="input"
                    type="text"
                    placeholder="Enter Company Name.."
                    name="name"
                    value={formData.name}
                    onChange={onHandleChange}
                />
              </div>

              <div className="login">
                <input
                    className="input"
                    type="text"
                    placeholder="Enter Image URL.."
                    name="image"
                    value={formData.image}
                    onChange={onHandleChange}
                />
              </div>

              <div className="login">
                <input
                    className="input"
                    type="location"
                    placeholder="Enter location.."
                    name="location"
                    value={formData.location}
                    onChange={onHandleChange}
                />
              </div>

              <div className="login">
                <input
                    className="input"
                    type="text"
                    placeholder="Enter Company Type.."
                    name="company_type"
                    value={formData.company_type}
                    onChange={onHandleChange}
                />
              </div>

              <div className="login">
                <input
                    className="input"
                    type="text"
                    placeholder="Enter Contact Information.."
                    name="contact"
                    value={formData.contact}
                    onChange={onHandleChange}
                />
              </div>

              <button onClick={onSubmitAddCompany} className="btn-1">
                ADD Company
              </button>

            </form>
          </div>
        </div>
      </div>
  );
}

export default AddCompany;