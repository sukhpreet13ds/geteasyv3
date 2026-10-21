import React from 'react';
import for1Img from '../assets/smart-billing.jpg';
import for2Img from '../assets/marketing-control.jpg';
import for3Img from '../assets/next-level.jpg';
import for4Img from '../assets/access-anytime.jpg';

const For = () => {
    return (
        <section className="for-section">
            <div className="for-container">
                <div className="for-grid">
                    {/* Area 1: Content */}
                    <div className="for-area for-area-content">
                        <span className="for-tag">INSIGHTS</span>
                        <h2 className="for-title">Smart Billing Insights</h2>
                        <p className="for-desc">
                            
Monitor your business in real time on a single dashboard. Track revenue, collections, attendance, bookings, and member activity, uncover trends, optimize operations, and make data-driven decisions for smarter growth and retention.
                        </p>
                        <a href="#customer-stories" className="for-btn">
                            Read customer stories
                        </a>
                    </div>

                    {/* Area 2: Image */}
                    <div className="for-area for-area-image">
                        <div className="for-image-box">
                            <img src={for1Img} alt="Platform Preview" className="for-img" />
                        </div>
                    </div>

                    {/* Area 3: Image */}
                    <div className="for-area for-area-image">
                        <div className="for-image-box">
                            <img src={for2Img} alt="Platform Preview" className="for-img" />
                        </div>
                    </div>

                    {/* Area 4: Content */}
                    <div className="for-area for-area-content">
                        <span className="for-tag">FINANCIAL INTELLIGENCE</span>
                        <h2 className="for-title">Centralized Marketing Control</h2>
                        <p className="for-desc">
                            
Gain complete, real-time visibility into cash flow, collections, and pending dues. Instantly monitor sales, invoices, refunds & payments to enable faster follow-ups, smarter decisions, seamless revenue protection, and efficient business control.
                        </p>
                        <div className="for-stats-row">
                            <div className="for-stat-item">
                                <span className="for-stat-num">98%</span>
                                <span className="for-stat-label">Clients saw 30%+ revenue increase</span>
                            </div>
                            <div className="for-stat-item">
                                <span className="for-stat-num">2X</span>
                                <span className="for-stat-label">Faster payment processing</span>
                            </div>
                        </div>
                    </div>

                    {/* Area 5: Content */}
                    <div className="for-area for-area-content">
                        <span className="for-tag">COMPLETE VISIBILITY</span>
                        <h2 className="for-title">Next-Level Inventory Management</h2>
                        <p className="for-desc">
                           
Master your inventory across all locations instantly and effortlessly. Automatically track stock, sales, returns, and suppliers, receive smart alerts before shortages, and make data-driven decisions to maximize efficiency and profits.
                        </p>
                        <a href="#explore" className="for-btn">
                            Explore all features
                        </a>
                    </div>

                    {/* Area 6: Image */}
                    <div className="for-area for-area-image">
                        <div className="for-image-box">
                            <img src={for3Img} alt="Platform Preview" className="for-img" />
                        </div>
                    </div>

                    {/* Area 7: Image */}
                    <div className="for-area for-area-image">
                        <div className="for-image-box">
                            <img src={for4Img} alt="Platform Preview" className="for-img" />
                        </div>
                    </div>

                    {/* Area 8: Content */}
                    <div className="for-area for-area-content">
                        <span className="for-tag">ALWAYS CONNECTED</span>
                        <h2 className="for-title">Access Anytime, Anywhere</h2>
                        <p className="for-desc">
                           
Easily manage your entire business from anywhere. Track revenue, payments, bookings, staff, inventory, and leads in real time. Secure, cloud-based access ensures faster decisions, complete visibility, and total peace of mind.
                        </p>
                        <div className="for-stats-row">
                            <div className="for-stat-item">
                                <span className="for-stat-num">99.9%</span>
                                <span className="for-stat-label">Uptime reliability across platforms</span>
                            </div>
                            <div className="for-stat-item">
                                <span className="for-stat-num">4.9/5</span>
                                <span className="for-stat-label">Average client satisfaction score</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default For;