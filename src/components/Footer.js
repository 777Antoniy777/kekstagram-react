import React from 'react';
import '../css/blocks/Footer.css';
import Copyright from './Copyright';
import Contacts from './Contacts';

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
