import React, { useState } from 'react';

// Assets
import crmImg from '../assets/conversion.jpg';
import automationImg from '../assets/schedulingg.jpg';
import pastelImg from '../assets/campaigns.jpg';

const solutionsData = [
    {
        id: 0,
        title: 'Campaigns',
        desc: 'Send personalized messages at scale to engage clients, drive bookings, and boost marketing results instantly.',
        image: pastelImg,
        alt: 'Campaigns'
    },
    {
        id: 1,
        title: 'Conversion',
        desc: 'Sell memberships and services with customizable plans, payments, automated engagement & analytics to grow loyalty.',
        image: crmImg,
        alt: 'Conversion'
    },
    {
        id: 2,
        title: 'Scheduling',
        desc: 'Empower members to book appointments, memberships, or sessions anytime with payments, scheduling, and alerts.',
        image: automationImg,
        alt: 'Scheduling'
    }
];

const Solutions = () => {
    const [activeIndex, setActiveIndex] = useState(1); // Default to Security matching screenshot

    return (
        <section className="solutions-section">
            <div className="solutions-container">
                {/* Header Row: Title Left, Description & Button Right */}
                <div className="solutions-header-row">
                    <div className="solutions-header-left">
                        <h2 className="solutions-header-title">
                            Build your website on
                            <br />
                            unshakeable foundations
                        </h2>
                    </div>
                    <div className="solutions-header-right">
                        <p className="solutions-header-desc">
                            Our free website builder handles the heavy lifting so your site stays fast, smooth and always at peak performance.
                        </p>
                        <a href="#get-started" className="solutions-btn-start">
                            Get Started
                        </a>
                    </div>
                </div>

                {/* Solutions Rows with Floating Overlay Preview */}
                <div className="solutions-list-wrapper">
                    <div className="solutions-list">
                        {solutionsData.map((item, index) => {
                            const isActive = activeIndex === index;
                            return (
                                <div
                                    key={item.id}
                                    className={`solutions-row ${isActive ? 'active' : ''}`}
                                    onMouseEnter={() => setActiveIndex(index)}
                                >
                                    <div className="solutions-row-title-col">
                                        <h3 className="solutions-row-title">{item.title}</h3>
                                    </div>
                                    <div className="solutions-row-desc-col">
                                        {isActive && (
                                            <p className="solutions-row-desc">{item.desc}</p>
                                        )}
                                    </div>
                                    {/* Floating overlay image positioned absolutely over the lines without shifting layout */}
                                    {isActive && (
                                        <div className="solutions-floating-card">
                                            <img
                                                src={item.image}
                                                alt={item.alt}
                                                className="solutions-card-img"
                                            />
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solutions;