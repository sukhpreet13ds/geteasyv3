import React, { useState } from 'react';

// Software Category Icons from assets
import category1 from '../assets/category1.png';
import category2 from '../assets/category2.png';
import category3 from '../assets/category3.png';
import category4 from '../assets/category4.png';
import category5 from '../assets/category5.png';
import category6 from '../assets/category6.png';
import category7 from '../assets/category7.png';
import category8 from '../assets/category8.png';
import category9 from '../assets/category9.png';
import category10 from '../assets/category10.png';

const categoryItems = [
    {
        id: 1,
        title: 'Beauty Salon',
        desc: 'Maximize salon potential with ease using our best-in-class salon software.',
        icon: category1,
        link: '#beauty-salon'
    },
    {
        id: 2,
        title: 'Spa',
        desc: 'Simplify spa management and reduce stress with an all-in-one software solution.',
        icon: category2,
        link: '#spa'
    },
    {
        id: 3,
        title: 'Nail Art',
        desc: 'Create personalized nail & salon experiences for customers with intuitive software.',
        icon: category3,
        link: '#nail-art'
    },
    {
        id: 4,
        title: 'Car Spa',
        desc: 'Easily reduce the daily stress of car spa management with smart software.',
        icon: category4,
        link: '#car-spa'
    },
    {
        id: 5,
        title: 'Aesthetic',
        desc: 'Elevate your aesthetic studio brand with smart aesthetic studio software.',
        icon: category5,
        link: '#aesthetic'
    },
    {
        id: 6,
        title: 'Makeup Studio',
        desc: 'Grow & expand a makeup studio brand with comprehensive studio software.',
        icon: category6,
        link: '#makeup-studio'
    },
    {
        id: 7,
        title: 'Tattoo Studio',
        desc: 'Leading tattoo studio software for efficiently managing business operations.',
        icon: category7,
        link: '#tattoo-studio'
    },
    {
        id: 8,
        title: 'Med Spa',
        desc: 'Increase Medical Spa business growth with your powerful smart solution.',
        icon: category8,
        link: '#med-spa'
    },
    {
        id: 9,
        title: 'Pet Facility',
        desc: 'Simplify management for pet grooming businesses and veterinary clinics.',
        icon: category9,
        link: '#pet-facility'
    },
    {
        id: 10,
        title: 'Auto Detailing',
        desc: 'Transform your auto detailing operations and eliminate everyday chaos.',
        icon: category10,
        link: '#auto-detailing'
    }
];

const Explore = () => {
    const [cursorPos, setCursorPos] = useState({ x: -200, y: -200 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e) => {
        setCursorPos({ x: e.clientX, y: e.clientY });
    };

    return (
        <section
            className="explore-section"
            onMouseMove={handleMouseMove}
        >
            {/* Custom Cursor Explore Button */}
            <div
                className="explore-cursor-btn"
                style={{
                    opacity: isHovering ? 1 : 0,
                    transform: `translate3d(${cursorPos.x}px, ${cursorPos.y}px, 0) translate(-50%, -50%) scale(${isHovering ? 1 : 0.7})`,
                    transition: 'opacity 0.2s ease, transform 0.08s ease-out'
                }}
                aria-hidden="true"
            >
                <span>Explore</span>
                <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                </svg>
            </div>

            <div className="explore-header">
                <h2 className="explore-main-title">
                    Explore tailored solutions for every industry
                </h2>
            </div>

            <div className="explore-container">
                <div
                    className="explore-grid"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >
                    {categoryItems.map((item) => (
                        <a key={item.id} href={item.link} className="explore-box">
                            <div className="explore-box-top">
                                <div className="explore-box-heading-row">
                                    <h3 className="explore-box-title">{item.title}</h3>
                                    <svg
                                        className="explore-box-arrow"
                                        width="26"
                                        height="26"
                                        viewBox="0 0 26 26"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <line x1="7" y1="17" x2="17" y2="7" />
                                        <polyline points="7 7 17 7 17 17" />
                                    </svg>
                                </div>
                                <p className="explore-box-desc">{item.desc}</p>
                            </div>
                            <div className="explore-box-bottom">
                                <div className="explore-box-icon">
                                    <img src={item.icon} alt={item.title} />
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Explore;