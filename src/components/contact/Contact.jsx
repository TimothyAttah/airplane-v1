import React from 'react';

import * as Styles from './ContactStyles';
import { RiCloseLine } from 'react-icons/ri';

export const Contact = ({ setOpenForm }) => {
  return (
    <>
      <Styles.ContactContainer>
        <Styles.ContactWrapper>
          <RiCloseLine onClick={() => setOpenForm(false)} />
          <form>
            <h2>
              Aircraft<span>Sales</span>
            </h2>
            <div>
              <label htmlFor='fullName'>Full Name</label>
              <input type='text' placeholder='Enter your full name' />
            </div>
            <div>
              <label htmlFor='phoneNumber'>Phone Number</label>
              <input type='text' placeholder='Enter your phone number' />
            </div>
            <div>
              <label htmlFor='message'>Message</label>
              <textarea placeholder='Enter your message' />
            </div>
            <button>Send</button>
          </form>
        </Styles.ContactWrapper>
      </Styles.ContactContainer>
    </>
  );
};
