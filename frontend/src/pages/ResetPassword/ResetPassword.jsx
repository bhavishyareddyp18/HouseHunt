import "./ResetPassword.css";

import { useState } from "react";

import {
  useNavigate,
  useParams
} from "react-router-dom";

import { toast } from "react-toastify";

function ResetPassword() {

  const navigate =
    useNavigate();

  const { token } =
    useParams();

  const [password,
    setPassword] =
    useState("");

  const [confirmPassword,
    setConfirmPassword] =
    useState("");

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      if (
        password !==
        confirmPassword
      ) {

        toast.error(
          "Passwords do not match"
        );

        return;
      }

      try {

        /*
        await authService.resetPassword({
          token,
          password
        });
        */

        toast.success(
          "Password Updated"
        );

        navigate(
          "/login"
        );

      }
      catch(error) {

        toast.error(
          "Reset Failed"
        );
      }
    };

  return (

    <div className="reset-page">

      <div className="reset-card">

        <h2>
          Reset Password
        </h2>

        <form
          onSubmit={handleSubmit}
        >

          <input
            type="password"
            className="form-control mb-3"
            placeholder="New Password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
          />

          <input
            type="password"
            className="form-control mb-3"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(
                e.target.value
              )
            }
          />

          <button
            className="btn btn-success w-100"
          >
            Reset Password
          </button>

        </form>

      </div>

    </div>

  );
}

export default ResetPassword;
