import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div>
      <Link to="Reservierungen"><p className="mt-4">&copy; GutKick e.V. 2023</p></Link>
      </div>
    </footer>
  );
}

export default Footer;