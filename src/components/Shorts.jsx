import React, { useState } from 'react';
import thumb1 from '../assets/thumbnail1.jpg';
import thumb2 from '../assets/thumbnail2.jpg';
import thumb3 from '../assets/thumbnail3.jpg';

const shortsData = [
    {
        id: 'VYYlVHE15II',
        thumbnail: thumb1,
        quote: '"Salon Owners Love This Software | Easy Salon Software Review 🔥"',
        author: 'Get Easy',
        role: 'Software',
        company: 'Get Easy Software'
    },
    {
        id: 'RzytFGrGDrc',
        thumbnail: thumb2,
        quote: '"This App Helps Me Work Less & Earn More at My Salon ✨Get Easy Software"',
        author: 'Get Easy',
        role: 'Digital Marketing',
        company: 'Get Easy Software'
    },
    {
        id: 's9hZEp0XBFE',
        thumbnail: thumb3,
        quote: '"Salon Owners: Boost Your Profits & Manage Multiple Locations Effortlessly"',
        author: 'Get Easy',
        role: 'Software',
        company: 'Get Easy Software'
    }
];

const Shorts = () => {
    const [playingId, setPlayingId] = useState(null);

    const handlePlay = (id) => {
        // If clicking same video toggle, otherwise play new one and pause previous
        setPlayingId((prev) => (prev === id ? null : id));
    };

    return (
        <section className="shorts-section">
            <div className="shorts-container">
                {/* Header (No badges as requested) */}
                <div className="shorts-header">
                    <h2 className="shorts-title">
                        Loved by 5+ thousands teams,
                        <br />
                        backed by 100+ awards
                    </h2>
                </div>

                {/* Shorts Cards Grid (Horizontal scroll on mobile) */}
                <div className="shorts-grid">
                    {shortsData.map((item) => {
                        const isPlaying = playingId === item.id;

                        return (
                            <div key={item.id} className="shorts-card">
                                {isPlaying ? (
                                    <div className="shorts-video-wrapper">
                                        <iframe
                                            src={`https://www.youtube.com/embed/${item.id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                                            title={item.author}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className="shorts-iframe"
                                        />
                                        <button
                                            className="shorts-pause-btn"
                                            onClick={() => setPlayingId(null)}
                                            aria-label="Pause Video"
                                            title="Pause"
                                        >
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                                <rect x="6" y="4" width="4" height="16"></rect>
                                                <rect x="14" y="4" width="4" height="16"></rect>
                                            </svg>
                                        </button>
                                    </div>
                                ) : (
                                    <div className="shorts-preview" onClick={() => handlePlay(item.id)}>
                                        <img
                                            src={item.thumbnail}
                                            alt={item.author}
                                            className="shorts-thumbnail"
                                            loading="lazy"
                                        />

                                        {/* Play Button Overlay */}
                                        <div className="shorts-play-overlay">
                                            <div className="shorts-play-btn" aria-label="Play video">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                                    <polygon points="6 3 20 12 6 21 6 3"></polygon>
                                                </svg>
                                            </div>
                                        </div>

                                        {/* Gradient and Quote Content Overlay */}
                                        <div className="shorts-card-content">
                                            <p className="shorts-quote">{item.quote}</p>
                                            <div className="shorts-author-row">
                                                <div className="shorts-author-info">
                                                    <h4 className="shorts-author-name">{item.author}</h4>
                                                    <span className="shorts-author-role">{item.role}</span>
                                                </div>
                                                <div className="shorts-company-badge">
                                                    <span>{item.company}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Shorts;