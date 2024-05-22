import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../data/rails.json';
import ReactStars from 'react-stars';
import CastAndCrew from './CastAndCrew';

const EpisodeDetails = () => {
  const { id } = useParams();

  let episodeData = null;

  data.rails.forEach(rail => {
    rail.items.forEach(item => {
      if (item.brand && item.brand.seasons) {
        item.brand.seasons.forEach(season => {
          season.episodes.forEach(episode => {
            if (episode.id === id) {
              episodeData = { ...episode, parentShow: item };
            }
          });
        });
      }
    });
  });

  if (!episodeData) {
    return <div>Episode not found</div>;
  }

  const heroImage = episodeData.images && episodeData.images[0] && episodeData.images[0].hero ? `/${episodeData.images[0].hero}` : null;

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

  return (
    <div style={backgroundStyle}>
      <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '200px 20px 20px 100px', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
        <h1 style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '20px' }}>{episodeData.title}</h1>
        <div style={{ display: 'flex', alignItems: 'center', margin: '20px 0' }}>
          <span style={{ marginRight: '10px', fontSize: '1.2rem', background: 'rgba(0,0,0,0.5)', padding: '5px 10px', borderRadius: '5px' }}>{episodeData.ageRating}</span>
          <span style={{ marginRight: '10px', fontSize: '1.2rem', background: 'rgba(0,0,0,0.5)', padding: '5px 10px', borderRadius: '5px' }}>{episodeData.duration}</span>
          <ReactStars
            count={5}
            value={Math.round((episodeData.totalUserRatings / 12345) * 5)} 
            size={24}
            color2={'#ffd700'}
            edit={false}
          />
        </div>
        <p style={{ marginTop: '20px', marginBottom: '20px' }}>{episodeData.longDescription}</p>
        <ul>
          <li>Genre: {episodeData.genre.join(', ')}</li>
          <li>Release Year: {episodeData.releaseYear}</li>
          <li>Country: {episodeData.country}</li>
        </ul>
        {episodeData.cast && episodeData.cast.length > 0 && <CastAndCrew cast={episodeData.cast} />}
      </div>
    </div>
  );
};

export default EpisodeDetails;
