import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { Typography } from "@mui/material";

const Contact = () => {
  const form = useRef();
  const [isSuccess, setIsSuccess] = useState(false);
  const [validationErrors, setValidationErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    // Check for empty fields
    const name = form.current.from_name.value.trim();
    const email = form.current.user_email.value.trim();
    const message = form.current.message.value.trim();

    if (!name) {
      setValidationErrors((prevErrors) => ({ ...prevErrors, name: "Name is required" }));
      return;
    }

    if (!email) {
      setValidationErrors((prevErrors) => ({ ...prevErrors, email: "Email is required" }));
      return;
    }

    if (!message) {
      setValidationErrors((prevErrors) => ({ ...prevErrors, message: "Message is required" }));
      return;
    }

    // Clear validation errors
    setValidationErrors({
      name: "",
      email: "",
      message: "",
    });

    emailjs
      .sendForm(
        "service_przmfb9",
        "template_nww4txg",
        form.current,
        "A9aecVw00fDfpAnBP"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          setIsSuccess(true);
          // Clear form fields
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <StyledContactForm>
      <Title>CHAT WITH US!</Title>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="from_name" />
        {validationErrors.name && <ErrorMessage>{validationErrors.name}</ErrorMessage>}
        <label>Email</label>
        <input type="email" name="user_email" />
        {validationErrors.email && <ErrorMessage>{validationErrors.email}</ErrorMessage>}
        <label>Message</label>
        <textarea name="message" />
        {validationErrors.message && <ErrorMessage>{validationErrors.message}</ErrorMessage>}
        <input type="submit" value="Send" />
      </form>
      {isSuccess && <SuccessMessage>Message sent successfully!</SuccessMessage>}
    </StyledContactForm>
  );
};

// Styles
const StyledContactForm = styled.div`
  width: 90%;
  max-width: 400px;
  color: white;
  margin: 0 auto; 
  text-align: center;
  margin-bottom: 5%;

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input,
    textarea {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-height: 100px;
      min-height: 100px;
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: #70877F;
      color: black;
      border: none;
    }
  }
`;

const Title = styled.h2`
  color: white;
  font-family: YourCustomFont;
  font-size: 1.9rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const SuccessMessage = styled.div`
  color: green;
  margin-top: 1rem;
`;

const ErrorMessage = styled.div`
  color: red;
  margin-top: 0.5rem;
`;

export default Contact;
