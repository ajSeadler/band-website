import React, { useRef, useState } from "react";
import {
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  ListItemText,
} from "@mui/material";
import emailjs from "@emailjs/browser";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/Booking.css";

const Contact = () => {
  const form = useRef();
  const [isSuccess, setIsSuccess] = useState(false);
  const [validationErrors, setValidationErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.from_name.value.trim();
    const email = form.current.email_id.value.trim();
    const message = form.current.message.value.trim();

    if (!name) {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        name: "Name is required",
      }));
      return;
    }

    if (!email) {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email is required",
      }));
      return;
    }

    if (!message) {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        message: "Message is required",
      }));
      return;
    }

    const selectedDateString = selectedDate
      ? selectedDate.toLocaleDateString()
      : "";
    const messageWithServicesAndDate = `${message}\n\nSelected Date: ${selectedDateString}`;

    setValidationErrors({
      name: "",
      email: "",
      message: "",
    });

    form.current.message.value = messageWithServicesAndDate;

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
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="booking-container">
      <div
        style={{
          width: "90%",
          maxWidth: "400px",
          margin: "0 auto",
          textAlign: "center",
          marginBottom: "5%",
          color: "#fff",
        }}
      >
        {/* <Typography variant="h4" gutterBottom style={{ fontSize: "1.9rem", marginTop: "2rem", marginBottom: "1rem", color:'#000' }}>
          Booking:
        </Typography> */}
        
        <form ref={form} onSubmit={sendEmail}>
          <TextField
            label="Name"
            name="from_name"
            variant="standard"
            fullWidth
            margin="normal"
          />
          {validationErrors.name && (
            <Typography
              variant="body2"
              style={{ color: "red", marginTop: "0.5rem" }}
            >
              {validationErrors.name}
            </Typography>
          )}
          <TextField
            label="Email"
            name="email_id"
            type="email"
            variant="standard"
            fullWidth
            margin="normal"
          />

          <TextField
            label="Message"
            name="message"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            margin="normal"
          />
          {validationErrors.message && (
            <Typography
              variant="body2"
              style={{ color: "red", marginTop: "0.5rem" }}
            >
              {validationErrors.message}
            </Typography>
          )}
          <div className="date">
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="MM/dd/yyyy"
              placeholderText="Show Date"
              className="date-picker"
            />
          </div>
          <Button
            type="submit"
            variant="contained"
            style={{
              marginTop: "2rem",
              margin: "10px",
              backgroundColor: "#ff652f",
              color: "#fff",
              fontFamily:'Oswald'
              
            }}
          >
            Send
          </Button>
        </form>
        {isSuccess && (
          <Typography
            variant="body1"
            style={{ color: "green", marginTop: "1rem" }}
          >
            Message sent successfully! <br></br>Please allow 24 hours for a
            reply.
          </Typography>
        )}
      </div>
    </div>
  );
};

export default Contact;
