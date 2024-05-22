import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => (
  <div className="logo">
    <Link to="/">
      <img src="/images/logo.png" alt="BritBox Logo" className="h-8" />
    </Link>
  </div>
);

export default Logo;
