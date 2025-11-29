import React, { useState } from "react";
import "../App.css";

export default function RegistrationForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName]   = useState("");
  const [email, setEmail]         = useState("");
  const [age, setAge]             = useState("");
  const [course, setCourse]       = useState("");
  const [errors, setErrors]       = useState({});
  const [success, setSuccess]     = useState(false);

  const courses = ["React Basics", "Advanced JS", "TypeScript Intro"];

  function validate() {
    const err = {};
    if (!firstName.trim()) err.firstName = "First name is required";
    if (!lastName.trim())  err.lastName  = "Last name is required";

    if (!email.trim()) {
      err.email = "Email is required";
    } else {
      // simple email regex
      const re = /^\S+@\S+\.\S+$/;
      if (!re.test(email)) err.email = "Enter a valid email";
    }

    if (!age) {
      err.age = "Age is required";
    } else {
      const n = Number(age);
      if (Number.isNaN(n) || n < 18) err.age = "You must be 18 or older";
    }

    if (!course) err.course = "Please select a course";

    return err;
  }

  function clearForm() {
    setFirstName("");
    setLastName("");
    setEmail("");
    setAge("");
    setCourse("");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(false);
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length === 0) {
      // pretend to submit — here you could call an API
      setSuccess(true);
      clearForm();
      // clear success after a while
      setTimeout(() => setSuccess(false), 5000);
    }
  };

  return (
    <section className="form-card">
      <h2>Course Registration</h2>

      <form onSubmit={handleSubmit} noValidate>
        <label>
          First Name *
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className={errors.firstName ? "invalid" : ""}
            />
          {errors.firstName && <div className="error">{errors.firstName}</div>}
        </label>

        <label>
          Last Name *
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className={errors.lastName ? "invalid" : ""}
          />
          {errors.lastName && <div className="error">{errors.lastName}</div>}
        </label>

        <label>
          Email *
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={errors.email ? "invalid" : ""}
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </label>

        <label>
          Age *
          <input
            type="number"
            min="0"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className={errors.age ? "invalid" : ""}
          />
          {errors.age && <div className="error">{errors.age}</div>}
        </label>

        <label>
          Course *
          <select
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            className={errors.course ? "invalid" : ""}
          >
            <option value="">-- choose a course --</option>
            {courses.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          {errors.course && <div className="error">{errors.course}</div>}
        </label>

        <div className="form-actions">
          <button type="submit" className="btn-primary">Register</button>
        </div>

        {success && <div className="success">Registration successful 🎉</div>}
      </form>
    </section>
  );
}
