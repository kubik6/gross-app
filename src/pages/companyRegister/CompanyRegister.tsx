import React, { ChangeEvent, FormEvent, useState } from 'react'

import '@/pages/companyRegister/companyRegister.scss'
import { registerCompany } from '@/api/authApi';
import { useNavigate } from 'react-router-dom';

const CompanyRegister:React.FC = () => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
    website: ""
  });
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setMessage(null);

    // Validate that the password and confirm password match.
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      // Create payload. We are using "fullname" field mapped as "name".
      const payload = {
        name: formData.fullname,
        email: formData.email,
        password: formData.password,
        website: formData.website || undefined, // optional
      };

      const data = await registerCompany(payload);
      setMessage(data.message || "Registration successful!");
      navigate('/login')
      
    } catch (err: any) {
      setError(err.response?.data?.message || "Registration failed.");
    }
  };

  return (
    <div className="company-register">
      <main className="company-register__main">
      <header className="company-register__header">
        <h1 className="company-register__logo">LOGO</h1>
        <span className="company-register__login-link">
          Log in
        </span>
        {error && <p className="company-register__error">{error}</p>}
        {message && <p className="company-register__success">{message}</p>}
      </header>
        <h2 className="company-register__title">Welcome to Site</h2>
        <p className="company-register__subtitle">Let’s get started</p>
        <form className="company-register__form" onSubmit={handleSubmit}>
          <div className="company-register__form-group">
            {/* <label htmlFor="fullname" className="company-register__form-label">
              Full Name
            </label> */}
            <input
              type="text"
              id="fullname"
              name="fullname"
              className="company-register__form-input"
              placeholder="Enter your full name"
              value={formData.fullname}
              onChange={handleChange}
              required
            />
          </div>

          <div className="company-register__form-group">
            {/* <label htmlFor="email" className="company-register__form-label">
              Email Address
            </label> */}
            <input
              type="email"
              id="email"
              name="email"
              className="company-register__form-input"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="company-register__form-group">
            {/* <label htmlFor="password" className="company-register__form-label">
              Password
            </label> */}
            <input
              type="password"
              id="password"
              name="password"
              className="company-register__form-input"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="company-register__form-group">
            {/* <label
              htmlFor="confirmPassword"
              className="company-register__form-label"
            >
              Confirm Password
            </label> */}
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="company-register__form-input"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <div className="company-register__form-terms">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              className="company-register__form-checkbox"
              required
            />
            <label htmlFor="terms" className="company-register__form-terms-label">
              I agree to the <a href="#terms">Terms &amp; Conditions</a>
            </label>
          </div>

          <button type="submit" className="company-register__submit-button">
            Create Account
          </button>

          <div className="company-register__social-signup">
            <p>OR</p>
            <button
              type="button"
              className="company-register__social-button company-register__social-button--google"
            >
              Sign up with Google
            </button>
            <button
              type="button"
              className="company-register__social-button company-register__social-button--linkedin"
            >
              Sign up with LinkedIn
            </button>
            <button
              type="button"
              className="company-register__social-button company-register__social-button--facebook"
            >
              Sign up with Facebook
            </button>
          </div>
        </form>

        <div className="company-register__footer">
          Already have an account? <a href="/login">Log in</a>
        </div>
      </main>
    </div>
  );
};

export default CompanyRegister;