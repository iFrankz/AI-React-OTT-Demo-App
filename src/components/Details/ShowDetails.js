import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ReactStars from 'react-stars';
import CastAndCrew from './CastAndCrew';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import '../../styles/ShowDetails.css';

const ShowDetails = ({ item }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const type = query.get('type');
    const season = query.get('season');

    if (!item) {
        return <div>Data is missing or incomplete</div>;
    }

    const episodeDetails = item.currentEpisode || item;
    const heroImage = episodeDetails?.images?.[0]?.hero ? `/${episodeDetails.images[0].hero}` : null;

    const backgroundStyle = heroImage
        ? {
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative'
        }
        : {};

    const handleEpisodeClick = (episodeId, seasonNumber) => {
        navigate(`/details/${episodeId}?type=episode&season=${seasonNumber}`);
    };

    const handleWatchClick = () => {
        if (type === 'episode' && season) {
            navigate(`/video/${episodeDetails.id}?type=episode&season=${season}`);
        } else {
            navigate(`/video/${episodeDetails.id}`);
        }
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
                position: 'relative', 
                color: 'white', 
                padding: '200px 20px 20px 100px', 
                flex: 1, 
                overflowY: 'auto' 
            }}>
                <h1 style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '20px' }}>{episodeDetails.title}</h1>
                <div style={{ display: 'flex', alignItems: 'center', margin: '20px 0' }}>
                    <span style={{ marginRight: '10px', fontSize: '1.2rem', background: 'rgba(0,0,0,0.5)', padding: '5px 10px', borderRadius: '5px' }}>{episodeDetails.ageRating}</span>
                    <span style={{ marginRight: '10px', fontSize: '1.2rem', background: 'rgba(0,0,0,0.5)', padding: '5px 10px', borderRadius: '5px' }}>{episodeDetails.duration}</span>
                    <ReactStars
                        count={5}
                        value={Math.round((episodeDetails.totalUserRatings / 12345) * 5)} 
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
                <p style={{ marginTop: '20px', marginBottom: '20px', width: '30%' }}>{episodeDetails.longDescription}</p>
                <ul>
                    <li>Genre: {episodeDetails.genre.join(', ')}</li>
                    <li>Release Year: {episodeDetails.releaseYear}</li>
                    <li>Country: {episodeDetails.country}</li>
                </ul>
                {episodeDetails.cast?.length > 0 && <CastAndCrew cast={episodeDetails.cast} />}
                <div style={{ marginTop: '40px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Episodes</h2>
                    <Tabs style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                        <TabList style={{ flexShrink: 0 }}>
                            {item.brand?.seasons?.map((season, index) => (
                                <Tab key={index}>Season {season.season}</Tab>
                            ))}
                        </TabList>
                        <div style={{ flex: 1, overflowY: 'auto' }}>
                            {item.brand?.seasons?.map((season, index) => (
                                <TabPanel key={index}>
                                    {season.episodes?.map((episode) => (
                                        <div key={episode.id} style={{ display: 'flex', marginBottom: '20px', marginTop: '40px' }}>
                                            <img 
                                                src={episode.thumbnail} 
                                                alt={episode.title} 
                                                style={{ width: '150px', height: 'auto', marginRight: '20px' }} 
                                            />
                                            <div>
                                                <h4 
                                                    onClick={() => handleEpisodeClick(episode.id, season.season)}
                                                    style={{ fontSize: '1.2rem', fontWeight: 'bold', cursor: 'pointer', color: 'white' }}
                                                    onMouseOver={(e) => e.target.style.color = 'red'}
                                                    onMouseOut={(e) => e.target.style.color = 'white'}>
                                                    {episode.episodeNumber}. {episode.title}
                                                </h4>
                                                <p>{episode.shortDescription}</p>
                                            </div>
                                        </div>
                                    ))}
                                </TabPanel>
                            ))}
                        </div>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default ShowDetails;
