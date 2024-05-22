import React from 'react';
import Logo from './Logo';
import MenuLinks from './MenuLinks';
import UserArea from './UserArea';

const Menu = () => (
  <div className="menu flex justify-between items-center px-6 py-4 bg-gray-900 text-white">
    <Logo />
    <MenuLinks />
    <UserArea />
  </div>
);

export default Menu;