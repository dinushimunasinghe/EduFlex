import React, { useState, useContext } from 'react';
import axios from "axios";
import bg from '../../assets/images/bg.jpg'
import Logo from '../../assets/images/login.jpg'
import SearchBar from '../../Components/Bar/NavBar/SearchBar';
import * as mdb from 'mdb-ui-kit'; // lib
import { AuthContext } from '../Checkcontext/AuthContext';
import { useNavigate } from "react-router-dom";

window.mdb = mdb;

const Login = () => {
  const auth = useContext(AuthContext); // Using useContext to access AuthContext
const navigate = useNavigate();

  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const btnSignin = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/auth/login", {
        email: formData.username,
        password: formData.password
      })
      .then((res) => {
        console.log(res)
        auth.login(res.data.userId, res.data.token, res.data.role);
          alert("Registered Successfully.");
          if(res.data.role === 'user'){
          navigate('/StudentDashboard')}
          else{
            navigate('/admindashboard')
          }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="img-fluid" style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <br /><br />
      <div className="row text-center mx-5 text-light">
        <div className='col-11 col-lg-7 mt-5'>
          <div className='col-8 mt-5'>
            <h3 className="text-start fw-bold text-light">Start To Successes </h3>
          </div>
          <div className='mt-5'>
            <h1 className="text-start fw-bold display-4 text-light">Discover Your </h1>
            <h1 className="text-start fw-bold display-4 text-light">Passion For Learning </h1>
          </div>
          <div className="text-start fw-bold mt-5">
            <a type="button" href='/Register' className="btn btn-dark px-5 py-3" data-mdb-ripple-init>Sign in</a>
          </div>
        </div>
        <div className='col-12 col-md-5 mb-8 text-light'>
          <div className="card mt-5 bg-dark text-dark bg-opacity-75" style={{ borderRadius: '24px' }}>
            <div className="card-body text-light">
              <h1 className='text-start mt-5'>EduFlex</h1>
              <h5 className="card-subtitle mb-2 mt-4  mb-3 text-start text-light">Login to</h5>
              <a className="btn  ms-3 text-white" data-mdb-ripple-init style={{ backgroundColor: '#dd4b39' }} href="#!" role="button">
                <i className="fab fa-google"></i>
              </a>
              <a className="btn  ms-3 text-white" data-mdb-ripple-init style={{ backgroundColor: '#3b5998' }} href="#!" role="button">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="btn  ms-3 text-white" data-mdb-ripple-init style={{ backgroundColor: '#6495ED' }} href="#!" role="button">
                <i className="fab fa-linkedin"></i>
              </a>
              <a className="btn ms-3 text-white" data-mdb-ripple-init style={{ backgroundColor: "#333333" }} href="#!" role="button">
                <i className="fab fa-github"></i>
              </a>
              <form className='m-4'>
                <div className="mb-3">
                  <h6 className='text-start'>Email address</h6>
                  <input
                    type="email"
                    id="username"
                    className="form-control"
                    name="username"
                    onChange={handleChange}
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                  <h6 className='text-start'>Password</h6>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" onClick={btnSignin} className="btn btn-primary mt-4 mb-4">Login</button>
              </form>
              <a href="/Home" className="text-start mt-4 mb-5"><i className="fa-solid fa-home me-3 mb-2"></i>Back to Home</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
