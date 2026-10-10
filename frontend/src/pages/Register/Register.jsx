import {
  useNavigate
}
from "react-router-dom";

import {
  toast
}
from "react-toastify";

import authService
from "../../services/authService";

import useAuth
from "../../hooks/useAuth";
import "./Register.css";

import { useState } from "react";

import { Link } from "react-router-dom";

import PasswordStrength from "../../components/auth/PasswordStrength";

import {
  validateEmail,
  validatePhone,
  validatePassword
} from "../../utils/validators";

function Register() {

  const [showPassword,
    setShowPassword] =
    useState(false);
 
    const navigate =
  useNavigate();

const { login } =
  useAuth();

    const [errors,
  setErrors] =
  useState([]);

  const [formData,
    setFormData] =
    useState({

      name: "",
      email: "",
      phone: "",
      password: "",
      role: "user"

    });

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
      e.target.value

    });

  };

  const handleSubmit =
async (e) => {

  e.preventDefault();

  const validationErrors =
  [];

  if (
    !validateEmail(
      formData.email
    )
  ) {

    validationErrors.push(
      "Invalid email"
    );
  }

  if (
    !validatePhone(
      formData.phone
    )
  ) {

    validationErrors.push(
      "Invalid phone number"
    );
  }

  validationErrors.push(
    ...validatePassword(
      formData.password
    )
  );

  if (
    validationErrors.length > 0
  ) {

    setErrors(
      validationErrors
    );

    return;
  }

  try {

    const data =
      await authService.register(
        formData
      );

    login(
      data.user,
      data.token
    );

    toast.success(
      "Registration Successful"
    );

    navigate(
      "/"
    );

  }
  catch(error) {

    toast.error(
      error.response?.data?.message ||
      "Registration Failed"
    );
  }
};

  return (

    <div className="register-page">

      <div className="register-container">

        <div className="register-left">

          <h1>
            Join HouseHunt
          </h1>

          <p>

            Create an account and
            start exploring verified
            rental properties today.

          </p>

        </div>

        <div className="register-right">

          <form
            className="register-form"
            onSubmit={handleSubmit}
          >

            <h2>
              Register
            </h2>

            <div className="mb-3">

              <label>
                Full Name
              </label>

              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter name"
                value={formData.name}
                onChange={handleChange}
                required
              />

            </div>

            <div className="mb-3">

              <label>
                Email
              </label>

              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                required
              />

            </div>

            <div className="mb-3">

              <label>
                Phone Number
              </label>

              <input
                type="text"
                name="phone"
                className="form-control"
                placeholder="Enter phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />

            </div>

            <div className="mb-3">

              <label>
                Role
              </label>

              <select
                className="form-select"
                name="role"
                value={formData.role}
                onChange={handleChange}
              >

                <option value="user">
                  User
                </option>

                <option value="owner">
                  Property Owner
                </option>

                <option value="agent">
                  Agent
                </option>

              </select>

            </div>

            <div className="mb-3">

              <label>
                Password
              </label>
              
              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                name="password"
                className="form-control"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                required
              />
                  <PasswordStrength
  password={
    formData.password
  }
/>
            </div>

            <div className="mb-3">

              <input
                type="checkbox"
                checked={showPassword}
                onChange={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
              />

              <span className="ms-2">
                Show Password
              </span>

            </div>
            {
  errors.length > 0 && (

    <div
      className="alert alert-danger"
    >

      {
        errors.map(
          (
            error,
            index
          ) => (

            <div key={index}>
              {error}
            </div>

          )
        )
      }

    </div>
  )
}
            <button
              className="btn register-btn"
              type="submit"
            >
              Create Account
            </button>

            <p className="mt-3">

              Already have an account?

              <Link
                to="/login"
                className="register-link"
              >
                {" "}
                Login
              </Link>

            </p>

          </form>

        </div>

      </div>

    </div>

  );
}

export default Register;
