import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://appointment-booking-syst-e0829-default-rtdb.firebaseio.com/contacts.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );

    if (response.ok) {
      console.log("Contact details saved successfully!");
      setUser({ name: "", email: "", phone: "" });
    } else {
      console.log("Something went wrong!");
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>

      <form onSubmit={submitHandler}>
        <div>
          <label>Name</label>
          <br />
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={changeHandler}
            required
          />
        </div>

        <div>
          <label>Email</label>
          <br />
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={changeHandler}
            required
          />
        </div>

        <div>
          <label>Phone</label>
          <br />
          <input
            type="tel"
            name="phone"
            value={user.phone}
            onChange={changeHandler}
            required
          />
        </div>

        <button type="submit" style={{ marginTop: "15px" }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
