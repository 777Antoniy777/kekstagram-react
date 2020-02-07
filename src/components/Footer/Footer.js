import React from 'react';
import './Footer.css';
import Copyright from '../Copyright/Copyright';
import Contacts from '../Contacts/Contacts';

function Footer() {
  return (
    <footer className="Page-footer container">

      <div className="Page-footer__wrapper">

        <Copyright />
        <Contacts />

      </div>

    </footer>
  );
}

export default Footer;
