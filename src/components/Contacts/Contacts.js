import React from 'react';
import './Contacts.css';

function Contacts() {
  return (

    <ul className="Page-footer__contacts  Contacts">
      <li><a href="https://twitter.com/htmlacademy_ru" className="Contacts__link  Contacts__link--twitter">Twitter</a></li>
      <li><a href="https://www.instagram.com/htmlacademy/" className="Contacts__link  Contacts__link--instagram">Instagtam</a></li>
      <li><a href="https://www.facebook.com/htmlacademy" className="Contacts__link  Contacts__link--facebook">Facebook</a></li>
      <li><a href="https://vk.com/htmlacademy" className="Contacts__link  Contacts__link--vk">VK</a></li>
    </ul>

  );
}

export default Contacts;
