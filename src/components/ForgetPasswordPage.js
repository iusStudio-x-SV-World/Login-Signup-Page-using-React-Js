import React from "react";
import { Link } from "react-router-dom";

const ForgetPasswordPage = () => {
  return (
    <div className="text-center m-5-auto">
      <h2>Reset your password</h2>
      <h5>Enter your email address and we will send you a new password</h5>

      <form action="/home">
        <p>
          <label className="reset-pswd-lbl">Email address</label>
          <br />
          <input type="email" name="email" required />
        </p>
        <p>
          <button id="sub-btn" type="submit">
            Send password reset email
          </button>
        </p>
      </form>
      <footer>
        <p>
          First time? <Link to="/register">Create an account</Link>
        </p>
        <p>
          <Link to="/">Back to Homepage</Link>
        </p>
      </footer>
    </div>
  );
};

export default ForgetPasswordPage;
