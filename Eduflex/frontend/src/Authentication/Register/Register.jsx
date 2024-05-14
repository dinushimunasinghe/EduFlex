import React, { useState, useContext } from 'react';
import axios from "axios";
import background from '../../assets/images/Background.jpeg'
import Logo from '../../assets/images/Logo.jpeg'
import bg from '../../assets/images/bg.jpg'
import SearchBar from '../../Components/Bar/NavBar/SearchBar';
import * as mdb from 'mdb-ui-kit'; // lib
import { AuthContext } from '../Checkcontext/AuthContext';
import { useNavigate } from "react-router-dom";

const Register = () => {
  const auth = useContext(AuthContext); // Using useContext to access AuthContext
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    retypepassword: "",
    userType: 20
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const btnClickRegister = (e) => {
    e.preventDefault();
    if (formData.password !== formData.retypepassword) {
      alert("Password mismatch! Please check again.");
    } else {
      console.log(formData);
      axios
        .post("http://localhost:5000/auth/register", {
          full_name: formData.name,
          email: formData.email,
          password: formData.password,
        })
        .then((res) => {
          console.log(res.data)
          auth.login(res.data.userId, res.data.token, res.data.role);
          alert("Registered Successfully.");
          if(res.data.role === 'user'){
          navigate('/StudentDashboard')}
          else{
            navigate('/admindashboard')
          }
        })
        .catch((error) => {
          console.error("Registration failed:", error);
          alert("Registration failed. Please try again."); // Inform the user about the failure
        });
    }

    console.log(formData);
  };

  return (
    <div className="img-fluid" style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <br />
      <div className="row text-center mx-5">
        <div className='col-12 col-md-5 mt-5 mb-8 text-light bg-dark p-2 text-dark bg-opacity-75' style={{ borderRadius: '24px' }}>
          <div className="card bg-transparent">
            <div className="card-body">
              <h1 className='text-start mt-1 text-light'>EduFlex</h1>
              <h5 className="card-subtitle mb-2 mt-4 mb-3 text-start text-light">Login to</h5>
              <form className='m-4'>
                <div className="mb-3">
                  <h6 className='text-start text-light'>Student name</h6>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputname"
                    aria-describedby="emailHelp"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <h6 className='text-start text-light'>Email address</h6>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange} />
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                  <h6 className='text-start text-light'>Password</h6>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    required
                    name="password"
                    value={formData.password}
                    onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <h6 className='text-start text-light'>Retype Password</h6>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword2"
                    required
                    name="retypepassword"
                    value={formData.retypepassword}
                    onChange={handleChange} />
                </div>
                <button
                  type="submit"
                  onClick={btnClickRegister}
                  className="btn btn-primary mt-4">Sign Up</button>
              </form>
              <a href="/Home" className="text-start"><i className="fa-solid fa-home me-3 mb-2"></i>Back to Home</a>
            </div>
          </div>
        </div>

        <div className='col-11 col-lg-7 mt-4 text-light'>
          <br /><br /><br /><br /><br /><br /><br /><br /><br />
          <div className='mt-3'>
            <h3 className="text-end fw-bold">Start To Successes </h3>
          </div>
          <div className='mt-5'>
            <h1 className="text-end fw-bold display-4">Discover Your </h1>
            <h1 className="text-end fw-bold display-4">Passion For Learning </h1>
          </div>
          <div className="text-end fw-bold mt-5">
            <a type="button" href='/Login' className="btn btn-dark px-5 py-3" data-mdb-ripple-init>Login</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
