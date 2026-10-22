import React, { useState } from 'react';

// Hero Assets
import leftBack from '../assets/left-back.webp';
import leftOver from '../assets/left-over.webp';
import rightBack from '../assets/right-back.webp';
import rightOver from '../assets/right-over.webp';

// Unified Platform Assets
import easyDash from '../assets/easyDash.webm';
import feature1 from '../assets/feature1.png';
import feature2 from '../assets/feature2.png';
import feature3 from '../assets/feature3.png';
import feature4 from '../assets/feature4.png';

// Features / AI Solutions Assets
import crmImg from '../assets/CRM.jpg';
import automationImg from '../assets/Automation.jpg';
import pastelImg from '../assets/Pastel.jpg';
import Solutions from '../components/Solutions';
import Shorts from '../components/Shorts';
import Stats from '../components/Stats';
import For from '../components/For';
import Explore from '../components/Explore';
import Review from '../components/Review';

const platformTopics = [
    {
        icon: feature1,
        title: 'Domain knowledge with an AI edge',
        desc: "Connect AI and business context with Get Easy's data ontology for finance, supply chain, retail planning, sales, and operations so decisions reflect how your business actually works."
    },
    {
        icon: feature2,
        title: 'Accuracy you can trust',
        desc: 'Combine the probabilistic power of an LLM with our deterministic calculation engine to deliver accurate and auditable answers. So you can be right, every time.'
    },
    {
        icon: feature3,
        title: 'Proprietary data for decision intelligence',
        desc: 'Turn your data into specific, actionable insights faster. Easy AI understands business context, giving you the ability to generate operational intelligence in real-time.'
    },
    {
        icon: feature4,
        title: 'Highly integrated across systems and workflows',
        desc: "Unify data across sources and systems with business context and AI to generate forward-looking scenarios, and plan what's next."
    }
];

const platformAccordionData = [
    {
        id: 0,
        title: 'Finance',
        desc: 'Accelerate financial planning, streamline reporting, and drive profitable growth with automated intelligence.',
        link: 'Learn more'
    },
    {
        id: 1,
        title: 'Supply chain',
        desc: 'Accelerate decision-making in the face of disruption and align end-to-end strategic impact with AI-driven supply chain planning.',
        link: 'Learn more'
    },
    {
        id: 2,
        title: 'Sales and marketing',
        desc: 'Optimize sales performance, target high-value opportunities, and align go-to-market strategies with real-time customer data.',
        link: 'Learn more'
    },
    {
        id: 3,
        title: 'HR and workforce',
        desc: 'Empower talent strategies, forecast headcount requirements, and optimize workforce costs with intelligent planning tools.',
        link: 'Learn more'
    },
    {
        id: 4,
        title: 'Retail planning',
        desc: 'Anticipate consumer demand, optimize omni-channel inventory, and drive higher margins across merchandising lifecycles.',
        link: 'Learn more'
    }
];

const Home = () => {
    const [activeAccordion, setActiveAccordion] = useState(1); // Default open: Supply chain

    const handleAccordionClick = (id) => {
        setActiveAccordion((prev) => (prev === id ? null : id));
    };

    return (
        <main className="home-page">
            {/* 1. Hero Section */}
            <section className="hero-section">
                {/* Left Collage Images */}
                <div className="hero-images-left" aria-hidden="true">
                    <div className="hero-img-box left-back-box">
                        <img src={leftBack} alt="Left Background" className="hero-img left-back" />
                    </div>
                    <div className="hero-img-box left-over-box">
                        <img src={leftOver} alt="Left Foreground" className="hero-img left-over" />
                    </div>
                </div>

                {/* Center Content */}
                <div className="hero-center-content">
                    {/* Review badge */}
                    <div className="hero-badge">
                        <span>All-In-One CRM & Business Platform</span>
                    </div>

                    {/* Main Headline */}
                    <h1 className="hero-headline">
                        <span className="hero-line-muted">A complete system for</span>
                        <span className="hero-line-bold">AI and human</span>
                        <span className="hero-line-muted">customer service</span>
                    </h1>

                    {/* Subtitle Description */}
                    <p className="hero-description">
                        Intercom is the only helpdesk with a natively integrated AI Agent,{' '}
                        <a href="https://easyaibot.vercel.app/" target="_blank" rel="noopener noreferrer" className="hero-fin-link">
                            Easy Bot
                        </a>
                        , meaning every customer conversation improves the next one, enabling perfect experiences that were
                        never possible before.
                    </p>

                    {/* CTA Buttons */}
                    <div className="hero-cta-group">
                        <button type="button" className="hero-btn-primary">
                            Start free trial
                        </button>
                        <button type="button" className="hero-btn-secondary">
                            View demo
                        </button>
                    </div>

                    {/* Sub-note with Checkmark */}
                    <div className="hero-note">
                        <svg className="hero-check-icon" viewBox="0 0 20 20" fill="currentColor">
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <span>14 day free trial. No credit card required.</span>
                    </div>
                </div>

                {/* Right Collage Images */}
                <div className="hero-images-right" aria-hidden="true">
                    <div className="hero-img-box right-over-box">
                        <img src={rightOver} alt="Right Background" className="hero-img right-over" />
                    </div>
                    <div className="hero-img-box right-back-box">
                        <img src={rightBack} alt="Right Foreground" className="hero-img right-back" />
                    </div>
                </div>
            </section>

            {/* 2. One Unified Platform Section */}
            <section className="platform-section">
                <div className="platform-container">
                    {/* Header Row: Title & Action Buttons Left, Description Right */}
                    <div className="platform-header-row">
                        <div className="platform-header-left">
                            <h2 className="platform-title">
                                One unified platform
                                <br />
                                with AI at the core
                            </h2>
                            <div className="platform-btn-group">
                                <a href="#explore" className="platform-btn-dark">
                                    <span>Explore Get Easy's platform</span>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </a>
                                <a href="#ai" className="platform-btn-outline">
                                    Learn about Easy AI
                                </a>
                            </div>
                        </div>

                        <div className="platform-header-right">
                            <p className="platform-lead-text">
                                EasyAI brings together deterministic calculations, probabilistic AI, connected data, workflows, and
                                role-based agents so you can act faster, with confidence.
                            </p>
                        </div>
                    </div>

                    {/* 4 Topic Columns Row */}
                    <div className="platform-topics-grid">
                        {platformTopics.map((topic, index) => (
                            <div key={index} className="platform-topic-card">
                                <div className="platform-topic-icon-box">
                                    <img src={topic.icon} alt={topic.title} />
                                </div>
                                <h3 className="platform-topic-title">{topic.title}</h3>
                                <p className="platform-topic-desc">{topic.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Showcase: Accordion Left, Video Right */}
                    <div className="platform-showcase-row">
                        {/* Left Accordion Column */}
                        <div className="platform-accordion-col">
                            {platformAccordionData.map((item) => {
                                const isOpen = activeAccordion === item.id;
                                return (
                                    <div
                                        key={item.id}
                                        className={`platform-accordion-item ${isOpen ? 'active' : ''}`}
                                        onClick={() => handleAccordionClick(item.id)}
                                    >
                                        <div className="platform-accordion-header">
                                            <h4 className="platform-accordion-title">{item.title}</h4>
                                        </div>
                                        {isOpen && (
                                            <div className="platform-accordion-body">
                                                <p className="platform-accordion-desc">{item.desc}</p>
                                                <a href="#learn-more" className="platform-accordion-link" onClick={(e) => e.stopPropagation()}>
                                                    {item.link}
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        {/* Right Video Showcase Column */}
                        <div className="platform-video-col">
                            <div className="platform-video-container-card">
                                <div className="platform-video-inner">
                                    <video
                                        src={easyDash}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="platform-dash-video"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Features / AI Solutions Section */}
            <section className="features-section">
                <div className="features-container">
                    {/* Header Row: Badge & Headline Left, Subtitle Description Right */}
                    <div className="features-header-row">
                        <div className="features-header-left">
                            <span className="features-badge">Get Easy Solutions</span>
                            <h2 className="features-main-title">
                                What Makes Get Easy Software the Best Choice
                            </h2>
                        </div>
                        <div className="features-header-right">
                            <p className="features-header-desc">
                               Latest WhatsApp and AI-powered features to automate business communication, boost customer engagement, and accelerate growth with lightning-fast performance.
                            </p>
                        </div>
                    </div>

                    {/* Top Row: Two Feature Cards */}
                    <div className="features-cards-grid">
                        {/* Card 1: Instant QR Check-In for Reception */}
                        <div className="features-card">
                            <div className="features-card-media">
                                <img
                                    src={pastelImg}
                                    alt="Instant QR Check-In for Reception"
                                    className="features-card-img"
                                />
                            </div>
                            <div className="features-card-body">
                                <h3 className="features-card-title">
                                    Instant QR Check-In for Reception
                                </h3>
                                <p className="features-card-desc">
                                    A smart QR portal for fast, contactless check-in and booking, reducing queues, eliminating front-desk workload, enhancing security, and delivering a seamless, modern customer experience with one scan.
                                </p>
                            </div>
                        </div>

                        {/* Card 2: AI-Powered Automation & Messaging */}
                        <div className="features-card">
                            <div className="features-card-media">
                                <img
                                    src={automationImg}
                                    alt="AI-Powered Business Automation"
                                    className="features-card-img"
                                />
                            </div>
                            <div className="features-card-body">
                                <h3 className="features-card-title">
                                    AI-Powered Business Automation
                                </h3>
                                <p className="features-card-desc">
                                    Seamlessly integrate your AI agent and automate marketing campaigns, WhatsApp, SMS, and email interactions with real-time sync and unified workflows.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Row: Easy Deployment Tools + Intelligent Client Management */}
                    <div className="features-deploy-row">
                        <div className="features-deploy-text-col">
                            <div className="features-deploy-content">
                                <h3 className="features-deploy-title">Easy deployment tools</h3>
                                <p className="features-deploy-desc">
                                    Out-of-the-box widgets let you embed AI capabilities directly into your
                                    website, skipping complex UI/UX challenges.
                                </p>
                                <a href="#tools" className="features-tools-btn">
                                    View our tools
                                </a>
                            </div>
                        </div>
                        <div className="features-deploy-media-col">
                            <div className="features-deploy-media-divider"></div>
                            <div className="features-deploy-media-header">
                                <h3 className="features-card-title">
                                    Intelligent Client Management
                                </h3>
                                <p className="features-card-desc">
                                    Transform client chaos into charm with Intelligent Client Management: centralize profiles, track interactions, automate follow-ups, gain insights, boost retention, and grow your business.
                                </p>
                            </div>
                            <div className="features-deploy-media">
                                <img
                                    src={crmImg}
                                    alt="Intelligent Client Management"
                                    className="features-deploy-img"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Solutions Section */}
            <Solutions />

            {/* 5. Shorts / Customer Reviews Section */}
            <Shorts />

            {/* 6. Stats Section */}
            <Stats />

            {/* 7. For Section */}
            <For />

            {/* 8. Explore Software Categories Section */}
            <Explore />

            {/* 9. Review Section */}
            <Review />
        </main>
    );
};

export default Home;