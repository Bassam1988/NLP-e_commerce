import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {createMessage} from '../../redux/actions/messages';
import {registerUser} from '../../redux/actions/auth';



function Register() {
  const [username, setUnserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [last_name, setLastName] = useState("");
  const [first_name, setFirstName] = useState("");
  const [groups, setGroup] = useState([]);

  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const onSubmit = (e) => {
    e.preventDefault();
    
    if (password !== password2) {
      dispatch(createMessage({ passwordNotMatch: 'Passwords do not match' }));
    } else {
      const newUser = {
        first_name,
        last_name,
        username,
        email,
        password,
        groups
        
      };
      dispatch(registerUser(newUser));
    }
  };

  return (
    !isAuthenticated ? (
    <div className="col-md-6 m-auto">
      <div className="card card-body mt-5">
        <h2 className="text-center">Register</h2>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="validationServer01">First name</label>
            <input
              type="text"
              className="form-control"
              id="validationServer01"
              onChange={(e) => setFirstName(e.target.value)}
              value={first_name}
              required
            ></input>
           
          </div>
          <div className="form-group">
            <label htmlFor="validationServer02">Last name</label>
            <input
              type="text"
              className="form-control"
              id="validationServer02"
              onChange={(e) => setLastName(e.target.value)}
              value={last_name}
              required
            ></input>
            
          </div>
          <div className="form-group">
            <label htmlFor="validationServer02">User Name</label>
            <input
              type="text"
              className="form-control "
              id="validationServer03"
              onChange={(e) => setUnserName(e.target.value)}
              value={username}
              required
            ></input>
            
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            ></input>
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password confirm</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword2"
              onChange={(e) => setPassword2(e.target.value)}
              value={password2}
            ></input>
          </div>
          <div
            className="radio"
            onChange={(e) => setGroup([e.target.value])}
          >
            <input type="radio" value="6" name="expType" /> Customer <br />
            <input type="radio" value="5" name="expType" /> Seller
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>):(<Redirect to="/"/>)
  );
}

export default Register;
