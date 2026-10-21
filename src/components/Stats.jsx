import React from 'react';

const statsData = [
    {
        id: 1,
        label: 'ROI',
        value: '384%',
        desc: 'Get Easy delivered 384% ROI over three years, helping organizations unlock significant efficiency gains.'
    },
    {
        id: 2,
        label: 'REVENUE INCREASE',
        value: '$3.9M',
        desc: 'Get Easy projects drove $3.9M in revenue gains by streamlining work, consolidating tools, and scaling faster.'
    },
    {
        id: 3,
        label: 'HOURS SAVED',
        value: '92,400',
        desc: 'Organizations saved 92,400 hours with Get Easy, reducing manual work and recapturing productivity at scale.'
    },
    {
        id: 4,
        label: 'PAYBACK',
        value: '<6 mo',
        desc: 'Customers reached payback in under six months, making Get Easy a proven investment with rapid returns.'
    }
];

const Stats = () => {
    return (
        <section className="stats-section">
            <div className="stats-container">
                {/* Header Row: Title & Subtitle Left, Button Right */}
                <div className="stats-header-row">
                    <div className="stats-header-left">
                        <h2 className="stats-main-title">
                            It's like adding 15 full-time employees
                        </h2>
                        <p className="stats-header-desc">
                            According to third party research Get Easy saves the average company over 30k hours per year, and delivers industry-leading ROI.
                        </p>
                    </div>
                    <div className="stats-header-right">
                        <a href="#get-started" className="stats-btn-start">
                            Get started
                        </a>
                    </div>
                </div>

                {/* 4 Stats Cards Grid */}
                <div className="stats-cards-grid">
                    {statsData.map((stat) => (
                        <div key={stat.id} className="stats-card">
                            <div className="stats-card-top">
                                <span className="stats-card-label">{stat.label}</span>
                                <div className="stats-card-value">{stat.value}</div>
                            </div>
                            <div className="stats-card-bottom">
                                <p className="stats-card-desc">{stat.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
