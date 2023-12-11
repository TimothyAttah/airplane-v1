import React, { useState } from 'react';
import * as Styles from './HeaderStyles';
import { FaBars } from 'react-icons/fa';
import { SideBar } from '../sideBar/SideBar';
import { AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Styles.MainHeaderContainer>
        <h1>
          Aircraft<span>Sales</span>
        </h1>
        <Styles.HeaderNavLinks>
          <Link to='/'>Home</Link>
          <Link to='/aircrafts-for-sale'>Aircraft</Link>
          <Link to='/'>About</Link>
        </Styles.HeaderNavLinks>
        <Styles.HeaderBar>
          <FaBars onClick={() => setIsOpen(true)} />
        </Styles.HeaderBar>
      </Styles.MainHeaderContainer>
      <AnimatePresence>
        {isOpen && <SideBar setIsOpen={setIsOpen} />}
      </AnimatePresence>
    </>
  );
};
