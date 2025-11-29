import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import "./App.css";

export default function App() {
  return (
    <div className="app-root">
      <header className="app-header">
        <h1>Course Registration System</h1>
        <p>Fill the form to register for a course</p>
      </header>

      <main>
        <RegistrationForm />
      </main>

      <footer className="app-footer">
        <small>Made for assignment — your name</small>
      </footer>
    </div>
  );
}
