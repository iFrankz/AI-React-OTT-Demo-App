import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import Modal from 'react-modal';
import data from '../../data/rails.json'; 

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const VideoPlayer = () => {
    const { id } = useParams();
    const query = useQuery();
    const contentType = query.get('type');
    const seasonNumber = query.get('season');
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    let videoUrl = null;

    if (contentType === 'episode' && seasonNumber) {
        const foundShow = data.rails.flatMap(rail => rail.items)
            .find(item => item.itemType === 'show' && item.brand && item.brand.seasons);

        if (foundShow) {
            const foundSeason = foundShow.brand.seasons.find(season => season.season.toString() === seasonNumber);
            if (foundSeason) {
                const foundEpisode = foundSeason.episodes.find(ep => ep.id === id);
                if (foundEpisode) {
                    videoUrl = foundEpisode.videoAsset;
                } else {
                    setError("Episode not found");
                }
            } else {
                setError("Season not found");
            }
        } else {
            setError("Show not found");
        }
    } else {
        const videoData = data.rails.flatMap(rail => rail.items).find(item => item.id === id);
        if (videoData) {
            videoUrl = videoData.videoAsset;
        } else {
            setError("Video not found");
        }
    }

    const handlePlayerError = () => {
        setError("An error occurred and it is not possible to play the video.");
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: 'black' }}>
            {videoUrl && !error ? (
                <ReactPlayer 
                    url={videoUrl} 
                    playing 
                    controls 
                    width='100%' 
                    height='100%' 
                    onError={handlePlayerError}
                />
            ) : (
                <div style={{ color: 'white', textAlign: 'center', marginTop: '20px' }}>
                    {error || 'Error'}
                </div>
            )}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Error Modal"
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.75)',
                    },
                    content: {
                        color: 'white',
                        background: 'rgba(0, 173, 226, 0.5)', 
                        borderRadius: '10px',
                        padding: '20px',
                        textAlign: 'center',
                        maxWidth: '640px',
                        maxHeight: '480px',
                        width: '80%',
                        height: '80%',
                        margin: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    },
                }}
            >
                <h2>Error</h2>
                <p>{error}</p>
                <button onClick={closeModal} style={{ backgroundColor: 'red', marginTop: '20px', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px' }}>
                    Close
                </button>
            </Modal>
        </div>
    );
};

export default VideoPlayer;
