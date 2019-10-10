import React from 'react';
import logo from '../../img/svg/htmla-logo.svg';
import './Copyright.css';

function Copyright() {
  return (

    <div className="Page-footer__copyright  Copyright">
      <a className="Copyright__link  Copyright__link--image" href="https://htmlacademy.ru/intensive/javascript">
        <img src={logo} width="130" height="45" alt="HTML Academy"/>
      </a>
      <p>Сделано в
        <a className="Copyright__link  Copyright__link--text" href="https://htmlacademy.ru/intensive/javascript">HTML Academy</a>
        &copy; 2018
      </p>
    </div>

  );
}

export default Copyright;
