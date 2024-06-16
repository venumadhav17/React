import { LOGO_URL } from '../../utils/constants.js';
import { useState } from 'react';

const Header = () => {
  //const btnName = 'Login';
  // let btnName = 'Login';

  const [btnNameReact, setBtnNameReact] = useState('Login');
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" alt="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          {/*<button
            className="login"
            onClick={() => {
              btnName = 'Logout';
            }}
          >
            {btnName}
          </button> */}
          <button
            className="login"
            onClick={() => {
              btnNameReact === 'Login'
                ? setBtnNameReact('Logout')
                : setBtnNameReact('login');
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
