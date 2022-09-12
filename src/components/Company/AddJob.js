import React, { useState } from "react";
import  {useHistory } from 'react-router';
import '../styles/EditCompany.css'

function AddJob() {
  const baseURL = 'http://127.0.0.1:9292';
  const history = useHistory();

  //setting initial value as empty string to hold form data//
  const [jobItems, setJobItems] = useState({
    job_name: "",
    image: "",
    description: "",
    price: "",
    company_id: "",
  });

  const { job_name, image, description, price, company_id } = jobItems;

  function onHandleChange(e) {
    setJobItems({ ...jobItems, [e.target.name]: e.target.value });
  }

  //Implementing POST method
  function onSubmitAddJobItem(e) {
    e.preventDefault();
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jobItems ),
    };

    fetch(`${baseURL}/jobs`, config)
    .then((res) => res.json())
    .then((newJobItem) => {
      const newJobItems = [jobItems, newJobItem];
      setJobItems(newJobItems);
      history.push('/jobs')
    });
  }

  return (
      <div>
        <div className="container1">
          <div>
            <h2 className="add">Add New Job</h2>

            <form>
              <div className="login">
                <input
                    className="input"
                    type="text"
                    placeholder="Enter Job Name"
                    name="job_name"
                    value={job_name}
                    onChange={onHandleChange}
                />
              </div>

              <div className="login">
                <input
                    className="input"
                    type="text"
                    placeholder="Enter Image URL.."
                    name="image"
                    value={image}
                    onChange={onHandleChange}
                />
              </div>

              <div className="login">
                <input
                    className="input"
                    type="text"
                    placeholder="Enter Description"
                    name="description"
                    value={description}
                    onChange={onHandleChange}
                />
              </div>

              <div className="login">
                <input
                    className="input"
                    type="text"
                    placeholder="Enter Price"
                    name="price"
                    value={price}
                    onChange={onHandleChange}
                />
              </div>

              <div className="login">
                <input
                    className="input"
                    type="number"
                    placeholder="Enter your Company ID..."
                    name="company_id"
                    value={company_id}
                    onChange={onHandleChange}
                />
              </div>

              <button className="btn-1" onClick={onSubmitAddJobItem}>
                Add Job
              </button>

            </form>
          </div>
        </div>
      </div>
  );
}

export default AddJob;