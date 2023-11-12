import React from 'react';
import Input from './Input';
import { useForm } from "react-hook-form";
import { Button } from 'react-bootstrap';


const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    return (  <div className="contact-form-container" >
        <h3>Contact & Reach Us!</h3>
          <Input
      label=""
      name="name"
      type="text"
      placeholder="Your Name"
      className={`border rounded `}
      register={register}
    />
    <Input
      label=""
      name="address"
      type="text"
      placeholder="Email Address"
      className={`border rounded `}
      register={register}
    />
       <Input
      label=""
      name="subject"
      type="text"
      placeholder="Your Subject"
      className={`border rounded `}
      register={register}
    />
         <Input
      label=""
      name="message"
      type="textarea"
      placeholder="Enter Your Message"
      className={`border rounded `}
      register={register}
      rows={4} 
    />
  
  <Button variant='warning' className='expDesc-button'> Submit </Button>

      </div>);
}
 
export default ContactForm;