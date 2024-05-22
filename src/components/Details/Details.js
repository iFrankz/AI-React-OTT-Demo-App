import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import MovieDetails from './MovieDetails';
import ShowDetails from './ShowDetails';
import data from '../../data/rails.json';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Details = () => {
    const { id } = useParams();
    const query = useQuery();
    const [item, setItem] = useState(null);

    useEffect(() => {
        const contentType = query.get('type');
        const seasonNumber = query.get('season');

        if (contentType === 'episode' && seasonNumber) {
            const foundShow = data.rails.flatMap(rail => rail.items)
                .find(show => show.itemType === 'show' && show.brand && show.brand.seasons);
        
            if (foundShow) {
                const foundSeason = foundShow.brand.seasons.find(season => season.season.toString() === seasonNumber);
                if (foundSeason) {
                    const foundEpisode = foundSeason.episodes.find(ep => ep.id === id);
                    if (foundEpisode) {
                        setItem({
                            ...foundShow,
                            currentEpisode: foundEpisode
                        });
                    }
                }
            }
        } else {
            const foundItem = data.rails.flatMap(rail => rail.items).find(item => item.id === id);
            setItem(foundItem || null);
        }
    }, [id, query]);

    if (!item) {
        return <div>Loading...</div>;
    }

    return (
        <div className="details p-6">
            {item.itemType === 'movie' ? (
                <MovieDetails item={item} />
            ) : (
                <ShowDetails item={item} />
            )}
        </div>
    );
};

export default Details;
