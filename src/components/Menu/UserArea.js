import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserArea = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/account');
  };

  return (
    <div className="user-area cursor-pointer" onClick={handleClick}>
      <img src="/images/user-icon.png" alt="User Icon" className="h-8" />
    </div>
  );
};

export default UserArea;
