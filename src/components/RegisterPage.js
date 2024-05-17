import React from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="text-center m-5-auto">
      <h2>Join us</h2>
      <h5>Create your personal account</h5>
      <form action="/home">
        <p>
          <label>Username</label>
          <br />
          <input type="text" name="username" required />
        </p>
        <p>
          <label>Email adrress</label>
          <br />
          <input type="email" name="email" required />
        </p>
        <p>
          <label>Password</label>
          <br />
          <input type="password" name="password" required />
        </p>
        <p>
          <input type="checkbox" name="checkbox" id="checkbox" required />
          <span>
            I agree all statements in{" "}
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              terms of service
            </a>
          </span>
        </p>
        <p>
          <button id="sub-btn" type="submit">
            Register
          </button>
        </p>
      </form>
      <footer>
        <p>
          <Link to="/">Back to Homepage</Link>
        </p>
      </footer>
    </div>
  );
};

export default RegisterPage;
