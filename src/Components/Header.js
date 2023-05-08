import React from 'react';
import { Link } from 'react-router-dom';
import gutkick from '../gutkick.png';

const Header = () => {
  return (
    <div>
      <header>

        <Link to="/">
          <img src={gutkick} alt="GutKick Logo" style={{ width: "180px", marginBottom: "50px" }} />
        </Link>
      </header>
    </div>
  );
};

export default Header;