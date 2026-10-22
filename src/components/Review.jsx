import React, { useState, useEffect } from 'react';
import avatarImg from '../assets/avatar.png';
import avatarImg1 from '../assets/avatar2.png';
import avatarImg2 from '../assets/avatar3.png';
import avatarImg3 from '../assets/avatar4.png';
import avatarImg4 from '../assets/avatar5.png';
import avatarImg5 from '../assets/avatar6.png';
import avatarImg6 from '../assets/avatar7.png';
import avatarImg7 from '../assets/avatar8.png';

const reviewsData = [
    {
        id: 1,
        name: 'Diana Johnston',
        profession: 'Salon Owner & Founder',
        rating: '4.9',
        avatarImg:avatarImg,
        text: 'Overall pleasurable experience. Pay a little first and Pay a little during the development of the app as milestones are achieved, which made me feel very confident and comfortable. Seamless and Easy process.'
    },
    {
        id: 2,
        name: 'Edward Alexander',
        profession: 'Creative Director',
        rating: '5.0',
        avatarImg:avatarImg3,
        text: 'Switching to Get Easy cut down our client check-in times by 70%. The automated WhatsApp reminders ensure zero no-shows, and our team has regained valuable hours every single week.'
    },
    {
        id: 3,
        name: 'Anjali Sharma',
        profession: 'Spa Operations Manager',
        rating: '4.9',
        avatarImg:avatarImg1,
        text: 'The booking and staff scheduling system is leagues ahead of anything else on the market. It seamlessly scales across all three of our locations without a single hiccup.'
    },
    {
        id: 4,
        name: 'Marcus Vance',
        profession: 'Aesthetic Clinic Director',
        rating: '5.0',
        avatarImg:avatarImg4,
        text: 'Everything from billing to customer CRM is centralized in one dashboard. Our clients rave about the instant QR check-in and our retention has increased dramatically.'
    },
    {
        id: 5,
        name: 'Sophia Chen',
        profession: 'Med Spa Founder',
        rating: '4.9',
        avatarImg:avatarImg2,
        text: 'Implementation was smooth and onboarding our staff took less than an afternoon. The AI-driven follow-ups have generated thousands in repeat appointments for our business.'
    },
    {
        id: 6,
        name: 'Rohit Malhotra',
        profession: 'Auto Detailing Lead',
        rating: '5.0',
        avatarImg:avatarImg5,
        text: 'A total game-changer for our workflow. Managing appointments and payments on mobile has freed up my front desk completely. It is fast, elegant, and super dependable.'
    },
    {
        id: 7,
        name: 'Elena Rostova',
        profession: 'Makeup Studio Lead',
        rating: '4.9',
        avatarImg:avatarImg6,
        text: 'The clarity and speed of Get Easy gave us complete visibility into daily sales and inventory. We have grown our client base by over 40% in just six months.'
    },
    {
        id: 8,
        name: 'James Thornton',
        profession: 'Pet Facility Director',
        rating: '5.0',
        avatarImg:avatarImg7,
        text: 'From automated rebooking to personalized customer portals, Get Easy provides a truly premium client experience. Support is world-class and always responsive.'
    }
];

const getArcPosition = (index, activeIdx, total) => {
    let diff = (index - activeIdx + total) % total;
    if (diff > total / 2) diff -= total; // -3, -2, -1, 0, 1, 2, 3, 4

    switch (diff) {
        case 0: // Active center
            return { x: 160, y: 235, opacity: 1, zIndex: 10 };
        case -1: // Top visible
            return { x: 115, y: 90, opacity: 0.65, zIndex: 5 };
        case 1: // Bottom visible
            return { x: 115, y: 390, opacity: 0.65, zIndex: 5 };
        case -2: // Exiting top
            return { x: 25, y: -25, opacity: 0, zIndex: 1 };
        case 2: // Entering bottom
            return { x: 25, y: 505, opacity: 0, zIndex: 1 };
        default: // Off-screen hidden
            return { x: 0, y: 235, opacity: 0, zIndex: 0 };
    }
};

const Review = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Auto-circulate seamlessly in loop every 4 seconds
    useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % reviewsData.length);
        }, 2500);
        return () => clearInterval(timer);
    }, [isPaused]);

    const activeReview = reviewsData[activeIndex];

    return (
        <section
            className="review-section"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="review-main-wrapper">
                <div className="review-header">
                    <h2 className="review-main-title">
                        Hear what our clients have to say
                    </h2>
                </div>

                <div className="review-container">
                    {/* Left Column: Curved Arc Carousel */}
                    <div className="review-left-col">
                        <div className="review-arc-stage">
                            {/* SVG Arc Curve Line */}
                            <svg className="review-arc-svg" viewBox="0 0 250 500" fill="none" aria-hidden="true">
                                <path
                                    d="M 20 15 C 220 115 220 375 20 480"
                                    stroke="#e2e8f0"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                />
                            </svg>

                            {/* Circulating Avatar Items */}
                            {reviewsData.map((item, index) => {
                                const pos = getArcPosition(index, activeIndex, reviewsData.length);
                                const isActive = index === activeIndex;

                                return (
                                    <div
                                        key={item.id}
                                        className={`review-arc-item ${isActive ? 'active' : ''}`}
                                        style={{
                                            transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
                                            opacity: pos.opacity,
                                            pointerEvents: pos.opacity > 0.1 ? 'auto' : 'none',
                                            zIndex: pos.zIndex
                                        }}
                                        onClick={() => setActiveIndex(index)}
                                    >
                                        <div className="review-avatar-wrap">
                                            <img src={item.avatarImg} alt={item.name} className="review-avatar-img" />
                                        </div>
                                        <div className="review-person-info">
                                            <h4 className="review-person-name">{item.name}</h4>
                                            <div className="review-person-meta">
                                                <span className="review-star-icon">★</span>
                                                <span className="review-rating">{item.rating}</span>
                                                <span className="review-meta-dot">on</span>
                                                <span className="review-profession">{item.profession}</span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Column: Active Review Quote Display */}
                    <div className="review-right-col">
                        <div className="review-quote-box" key={activeReview.id}>
                            <span className="review-quote-mark" aria-hidden="true">“</span>
                            <p className="review-quote-text">
                                <span className="review-dropcap">{activeReview.text.charAt(0)}</span>
                                {activeReview.text.slice(1)}
                            </p>
                        </div>

                        {/* Pagination Indicator Dots */}
                        <div className="review-dots-row">
                            {reviewsData.map((_, dotIndex) => (
                                <button
                                    key={dotIndex}
                                    type="button"
                                    className={`review-dot ${dotIndex === activeIndex ? 'active' : ''}`}
                                    onClick={() => setActiveIndex(dotIndex)}
                                    aria-label={`View review ${dotIndex + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Review;