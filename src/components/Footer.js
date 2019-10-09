import React from 'react';
import logo from '../img/svg/htmla-logo.svg';
import '../css/blocks/Footer.css';

function Footer() {
  return (
    <footer className="Page-footer Container">

      <div className="Page-footer__wrapper">
        <div className="Page-footer__copyright  Copyright">
          <a className="Copyright__link  Copyright__link--image" href="https://htmlacademy.ru/intensive/javascript">
            <img src={logo} width="130" height="45" alt="HTML Academy"/>
          </a>
          <p>Сделано в
            <a className="Copyright__link  Copyright__link--text" href="https://htmlacademy.ru/intensive/javascript">HTML Academy</a>
            &copy; 2018
          </p>
        </div>

        <ul className="Page-footer__contacts  Contacts">
          <li><a href="https://twitter.com/htmlacademy_ru" className="Contacts__link  Contacts__link--twitter">Twitter</a></li>
          <li><a href="https://www.instagram.com/htmlacademy/" className="Contacts__link  Contacts__link--instagram">Instagtam</a></li>
          <li><a href="https://www.facebook.com/htmlacademy" className="Contacts__link  Contacts__link--facebook">Facebook</a></li>
          <li><a href="https://vk.com/htmlacademy" className="Contacts__link  Contacts__link--vk">VK</a></li>
        </ul>
      </div>

    </footer>
  );
}

export default Footer;
