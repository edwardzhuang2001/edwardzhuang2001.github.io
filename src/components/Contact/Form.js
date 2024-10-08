import React from 'react';
import '../../App.css';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
      },
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      alert("Message sent!");
    }, () => {
      alert("An error occurred. Please try again later.");
    });
  }

  return (
    <form className="form-container" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="form-group">
        <label htmlFor="name"><p>Name</p></label>
        <input
          type="text"
          id="name"
          {...register("name", {
            required: {
              value: true,
              message: "Name is required."
            }
          })}
          placeholder="John Doe"
        />
        <p className="error-message">{errors.name?.message}</p>
      </div>

      <div className="form-group">
        <label htmlFor="email"><p>Email</p></label>
        <input
          type="email"
          id="email"
          {...register("email", {
            required: {
              value: true,
              message: "Email is required."
            },
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email format."
            }
          })}
          placeholder="example@domain.com"
        />
        <p className="error-message">{errors.email?.message}</p>
      </div>

      <div className="form-group">
        <label htmlFor="message"><p>Message</p></label>
        <textarea
          id="message"
          {...register("message", {
            required: {
              value: true,
              message: "Please leave your message here."
            }
          })}
          placeholder="Your message..."
          rows="10"
        />
        <p className="error-message">{errors.message?.message}</p>
      </div>
      
      <div className="button-container">
        <button type="submit" className="submit-button"><p>Submit</p></button>
      </div>
    </form>
  );
}

export default Form;