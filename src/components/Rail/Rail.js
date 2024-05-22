import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Item from '../Item/Item';

const Rail = ({ title, items }) => {
  const railRef = useRef(null);

  const scrollLeft = () => {
    if (railRef.current) {
      railRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (railRef.current) {
      railRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  if (!title || !Array.isArray(items) || items.length === 0) {
    return null;
  }

  return (
    <div className="rail my-8 relative group">
      <h2 className="text-2xl text-white mb-4">{title}</h2>
      <div className="relative">
        <div
          className="absolute left-0 top-0 flex items-center justify-center bg-gray-900 bg-opacity-50 hover:bg-opacity-100 text-white p-2 cursor-pointer hidden group-hover:flex z-10 arrow-button left"
          onClick={scrollLeft}
        />
        <div
          className="absolute right-0 top-0 flex items-center justify-center bg-gray-900 bg-opacity-50 hover:bg-opacity-100 text-white p-2 cursor-pointer hidden group-hover:flex z-10 arrow-button right"
          onClick={scrollRight}
        />
        <div
          ref={railRef}
          className="flex overflow-hidden space-x-4 scrollbar-hide relative"
        >
          {items.map((item, index) => (
            <Item key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

Rail.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string,
      thumbnail: PropTypes.string,
      badges: PropTypes.arrayOf(PropTypes.string),
      duration: PropTypes.string,
      ageRating: PropTypes.string,
      hd: PropTypes.bool,
      dolby: PropTypes.bool,
      cc: PropTypes.bool,
      shortDescription: PropTypes.string,
      images: PropTypes.arrayOf(
        PropTypes.shape({
          hero: PropTypes.string
        })
      )
    })
  ).isRequired
};

export default Rail;
