import "./ForgotPassword.css";

import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { validateEmail } from "../../utils/validators";

function ForgotPassword() {

  const [email, setEmail] =
    useState("");

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      if (
        !validateEmail(email)
      ) {

        toast.error(
          "Enter a valid email"
        );

        return;
      }

      try {

        /*
        await authService.forgotPassword({
          email
        });
        */

        toast.success(
          "Password reset link sent"
        );

      }
      catch (error) {

        toast.error(
          "Unable to process request"
        );
      }
    };

  return (

    <div className="forgot-page">

      <div className="forgot-card">

        <h2>
          Forgot Password
        </h2>

        <p>
          Enter your registered email.
        </p>

        <form
          onSubmit={handleSubmit}
        >

          <input
            type="email"
            className="form-control mb-3"
            placeholder="Enter Email"
            value={email}
            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }
          />

          <button
            className="btn btn-primary w-100"
          >
            Send Link
          </button>

        </form>

        <Link
          to="/login"
          className="back-link"
        >
          Back To Login
        </Link>

      </div>

    </div>

  );
}

export default ForgotPassword;