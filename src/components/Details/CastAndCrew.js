import React from 'react';
import PropTypes from 'prop-types';

const CastAndCrew = ({ cast }) => {
  if (!cast || !Array.isArray(cast) || cast.length === 0) {
    return null;
  }

  return (
    <div style={{ marginTop: '20px' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Cast & Crew</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '20px' }}>
        {cast.map((member, index) => {
          const initials = member.name?.split(' ').map(part => part[0]).join('') || '';

          return (
            <div key={index} style={{ textAlign: 'center' }}>
              {member.image ? (
                <img
                  src={member.image}
                  alt={member.name || 'Cast Member'}
                  style={{ width: '200px', height: '200px', borderRadius: '50%', objectFit: 'cover' }}
                />
              ) : (
                <div
                  style={{
                    width: '200px',
                    height: '200px',
                    borderRadius: '50%',
                    backgroundColor: '#333',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '4rem',
                    color: 'white'
                  }}
                >
                  {initials}
                </div>
              )}
              <div style={{ marginTop: '10px' }}>
                <p style={{ fontWeight: 'bold' }}>{member.name}</p>
                {member.character && <p>as {member.character}</p>}
                <p>{member.role}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

CastAndCrew.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string,
      character: PropTypes.string,
      role: PropTypes.string.isRequired
    })
  ).isRequired
};

export default CastAndCrew;
