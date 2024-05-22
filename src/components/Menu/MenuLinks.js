import React from 'react';

const MenuLinks = () => (
  <div className="menu-links flex space-x-4">
    <a href="/" className="hover:text-red-600">Home</a>
    <a href="/tv-series" className="hover:text-red-600">TV Series</a>
    <a href="/movies" className="hover:text-red-600">Movies</a>
    <a href="/new" className="hover:text-red-600">New</a>
    <a href="/watchlist" className="hover:text-red-600">Watchlist</a>
  </div>
);

export default MenuLinks;