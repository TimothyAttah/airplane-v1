import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import * as Styles from './ContactStyles';
import { RiCloseLine } from 'react-icons/ri';
import { toast } from 'react-toastify';

export const Contact = ({ setOpenForm }) => {
  const form = useRef();
  const [data, setData] = useState({
    fullName: '',
    phoneNumber: '',
    message: '',
  });

  const handleInputs = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ivxi6um',
        'template_xip6d8z',
        form.current,
        'f-dg8DJR-mmm4ntbK',
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );

    setData({
      fullName: '',
      phoneNumber: '',
      message: '',
    });

    setOpenForm(false);
    toast('Message sent successfully!', {
      position: toast.POSITION.TOP_RIGHT,
      className: 'toast-message',
    });
  };
  return (
    <>
      <Styles.ContactContainer>
        <Styles.ContactWrapper>
          <RiCloseLine onClick={() => setOpenForm(false)} />
          <form ref={form} onSubmit={sendEmail}>
            <h2>
              Aircraft<span>Sales</span>
            </h2>
            <div>
              <label htmlFor='fullName'>Full Name</label>
              <input
                type='text'
                placeholder='Enter your full name'
                name='fullName'
                value={data.fullName}
                onChange={handleInputs}
              />
            </div>
            <div>
              <label htmlFor='phoneNumber'>Phone Number</label>
              <input
                type='text'
                placeholder='Enter your phone number'
                name='phoneNumber'
                value={data.phoneNumber}
                onChange={handleInputs}
              />
            </div>
            <div>
              <label htmlFor='message'>Message</label>
              <textarea
                placeholder='Enter your message'
                name='message'
                value={data.message}
                onChange={handleInputs}
              />
            </div>
            <button>Send</button>
          </form>
        </Styles.ContactWrapper>
      </Styles.ContactContainer>
    </>
  );
};
