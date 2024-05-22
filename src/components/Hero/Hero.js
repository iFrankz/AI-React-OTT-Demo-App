import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const HeroCarousel = ({ hero }) => {
  const navigate = useNavigate();

  if (!hero?.heroItems?.length) {
    return null;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: false,
    arrows: false,
    appendDots: dots => (
      <div style={{ bottom: '10px' }}>
        <ul style={{ margin: '0px' }}>{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
    )
  };

  const handleHeroClick = (id) => {
    if (id !== null && id !== undefined) {
      navigate(`/details/${id}`);
    }
  };

  return (
    <Slider {...settings} className="hero-carousel">
      {hero.heroItems.map((item, index) => {
        const imageUrl = `${process.env.PUBLIC_URL}${item['background-image']}`;

        return (
          <div 
            key={index} 
            className="hero-slide relative w-full h-[600px] flex items-end justify-start cursor-pointer"
            onClick={() => handleHeroClick(item.id)}
          >
            <img src={imageUrl} alt={item.title} className="absolute inset-0 w-full h-full object-cover" />
            <div 
              className="absolute inset-0 w-full h-full" 
              style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            ></div>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 text-white p-4 mb-12 ml-12 text-left">
              <h1 className="text-5xl font-bold">{item.title}</h1>
              <p className="text-2xl mt-2">{item.subTitle}</p>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

HeroCarousel.propTypes = {
  hero: PropTypes.shape({
    template: PropTypes.string,
    heroItems: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        subTitle: PropTypes.string.isRequired,
        'background-image': PropTypes.string.isRequired
      })
    ).isRequired
  }).isRequired
};

export default HeroCarousel;
