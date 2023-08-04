import { useState } from "react";
import axios from "axios";
import "./Form.css";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function RegistrationForm() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const setError = (field, message) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: message,
    }));
  };

  /////////////////////////////////////////////////////////////////////////////////
  const navigate = useNavigate()
  const setSuccess = (field) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: "",
    }));
  };

  const isValidEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateInputs();
    axios
      .post("http://192.168.1.104:2030/auth/register", { email, password })

      .then(() => {
        setSuccessMessage("Signup Successful");
        setErrorMessage("");
      })
      .catch((err) => {
        setErrorMessage("Signup Failed");
        setSuccessMessage("");
        console.log(err.response);
      });
  };

  const login = (e) => {
    e.preventDefault();
    axios
      .post("http://192.168.1.104:2030/auth/login", { email, password })
      .then((res) => {
        setSuccessMessage("Login Successful");
        
        if(res.status === 200){
          localStorage.setItem("book_library", res.data.token)
          navigate("/")
        }
        setErrorMessage("");
      })
      .catch((err) => {
        setErrorMessage("Login Failed");
        setSuccessMessage("");
        console.log(err.response);
      });
  };

  const validateInputs = () => {
    if (email.trim() === "") {
      setError("email", "Email is required");
    } else if (!isValidEmail(email.trim())) {
      setError("email", "Please enter a valid email address");
    } else {
      setSuccess("email");
    }

    if (password.trim() === "") {
      setError("password", "Password is required");
    } else if (password.length < 8) {
      setError("password", "Password must be at least 8 characters");
    } else {
      setSuccess("password");
    }
  };

  return (
    <div className="container">
      <form id="form">
        <h1>Registration</h1>

        <div className={`input-control ${errors.email ? "error" : "success"}`}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="error">{errors.email}</div>
        </div>
        <div
          className={`input-control ${errors.password ? "error" : "success"}`}
        >
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="error">{errors.password}</div>
        </div>

        <button onClick={(e) => handleSubmit(e)} id="sign-up">
          Sign Up
        </button>
        <button onClick={(e) => login(e)} id="log-in">
          Log in
        </button>

        {successMessage && <div className="success">{successMessage}</div>}
        {errorMessage && <div className="error">{errorMessage}</div>}
      </form>
    </div>
  );
}

export default RegistrationForm;







