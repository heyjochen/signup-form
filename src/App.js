import React from "react";
import { useState } from "react";

export default function App() {
  /**
   * Challenge: Connect the form to local state
   *
   * 1. Create a state object to store the 4 values we need to save. Yes
   * 2. Create a single handleChange function that can
   *    manage the state of all the inputs and set it up
   *    correctly
   * 3. When the user clicks "Sign up", check if the
   *    password & confirmation match each other. If
   *    so, log "Successfully signed up" to the console.
   *    If not, log "passwords to not match" to the console.
   * 4. Also when submitting the form, if the person checked
   *    the "newsletter" checkbox, log "Thanks for signing
   *    up for our newsletter!" to the console.
   */

  const [formData, setFormData] = useState({
    name: "",
    value: "",
    type: "",
    checked: false,
  });

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => {
      return { ...prev, [name]: type === "checkbox" ? checked : value };
    });
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email address"
          onChange={handleChange}
          className="form--input"
          value={formData.email}
        />
        <input
          name="password1"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          className="form--input"
          value={formData.password1}
        />
        <input
          name="password2"
          type="password"
          placeholder="Confirm password"
          onChange={handleChange}
          className="form--input"
          value={formData.password2}
        />

        <div className="form--marketing">
          <input
            id="okayToEmail"
            type="checkbox"
            name="checked"
            onChange={handleChange}
            checked={formData.checked}
          />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button className="form--submit">Sign up</button>
      </form>
    </div>
  );
}
