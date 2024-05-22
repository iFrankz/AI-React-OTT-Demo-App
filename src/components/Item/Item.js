import React from 'react';
import { useNavigate } from 'react-router-dom';

const Item = ({ item }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/details/${item.id}`);
  };

  const thumbnail = item?.thumbnail ? `${process.env.PUBLIC_URL}${item.thumbnail}` : null;

  return (
    <div 
      className="item flex-shrink-0 w-96 h-56 relative bg-black text-white rounded-xl overflow-hidden hover:border-4 hover:border-red-600 cursor-pointer"
      onClick={handleClick}
      style={{ backgroundColor: thumbnail ? 'transparent' : '#333' }} // Fallback background color if thumbnail is missing
    >
      {thumbnail ? (
        <img src={thumbnail} alt={item?.title || 'Item'} className="absolute inset-0 w-full h-full object-cover opacity-70" loading="lazy" />
      ) : (
        <div className="absolute inset-0 w-full h-full flex items-center justify-center text-2xl text-white opacity-70">
          No Image
        </div>
      )}
      <div className="relative p-4 h-full flex flex-col justify-end bg-gradient-to-t from-black to-transparent rounded-xl">
        {item?.badges?.length > 0 && (
          <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
            {item.badges[0]}
          </div>
        )}
        <div>
          <h3 className="text-xl font-bold">{item?.title || 'No Title'}</h3>
          <div className="flex items-center space-x-2 mt-2">
            <span>{item?.duration || 'N/A'}</span>
            {item?.ageRating && <span className="bg-gray-800 p-1 rounded">{item.ageRating}</span>}
            {item?.hd && <img src={`${process.env.PUBLIC_URL}/images/hd-icon.png`} alt="HD" className="w-6" />}
            {item?.dolby && <img src={`${process.env.PUBLIC_URL}/images/dolby-icon.png`} alt="Dolby" className="w-6" />}
            {item?.cc && <img src={`${process.env.PUBLIC_URL}/images/cc-icon.png`} alt="CC" className="w-6" />}
          </div>
          <p className="text-sm mt-2">{item?.shortDescription || 'No description available.'}</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
