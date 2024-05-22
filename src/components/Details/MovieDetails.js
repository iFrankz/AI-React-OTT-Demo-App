import React from 'react';
import { useNavigate } from 'react-router-dom';
import ReactStars from 'react-stars';
import CastAndCrew from './CastAndCrew';

const MovieDetails = ({ item }) => {
  const navigate = useNavigate();
  const heroImage = item?.images?.[0]?.hero ? `/${item.images[0].hero}` : null;

  const backgroundStyle = heroImage
    ? {
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        minHeight: '100vh',
        color: 'white',
        position: 'relative'
      }
    : {};

  const handleWatchClick = () => {
    navigate(`/video/${item.id}`);
  };

  return (
    <div style={backgroundStyle}>
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        backgroundColor: 'rgba(0, 0, 0, 0.8)' 
      }}></div>
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        color: 'white', 
        padding: '200px 20px 20px 100px' 
      }}>
        <h1 style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '20px' }}>{item.title}</h1>
        <div style={{ display: 'flex', alignItems: 'center', margin: '20px 0' }}>
          <span style={{ marginRight: '10px', fontSize: '1.2rem', background: 'rgba(0,0,0,0.5)', padding: '5px 10px', borderRadius: '5px' }}>{item.ageRating}</span>
          <span style={{ marginRight: '10px', fontSize: '1.2rem', background: 'rgba(0,0,0,0.5)', padding: '5px 10px', borderRadius: '5px' }}>{item.duration}</span>
          <ReactStars
            count={5}
            value={Math.round((item.totalUserRatings / 12345) * 5)} 
            size={24}
            color2={'#ffd700'}
            edit={false}
          />
        </div>
        <button 
          onClick={handleWatchClick}
          style={{ backgroundColor: 'red', color: 'white', padding: '10px 20px', fontSize: '1.5rem', border: 'none', borderRadius: '5px' }}>
          Watch
        </button>
        <p style={{ marginTop: '20px', marginBottom: '20px', width: '30%' }}>{item.longDescription}</p>
        <ul>
          <li>Genre: {item.genre?.join(', ')}</li>
          <li>Release Year: {item.releaseYear}</li>
          <li>Country: {item.country}</li>
        </ul>
        {item.cast?.length > 0 && <CastAndCrew cast={item.cast} />}
      </div>
    </div>
  );
};

export default MovieDetails;
