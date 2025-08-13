import React, { useState, useEffect } from 'react';
import './css/landingpage.css';
import '@fontsource/roboto';
import '@fontsource/open-sans';


const LandingPage = () => {
    const [yearCount, setYearCount] = useState(1);
    const [varietyCount, setVarietyCount] = useState(1);
    const [treesCount, setTreesCount] = useState(1);
    const [produceCount, setProduceCount] = useState(1);
    const [isUPickModalOpen, setIsUPickModalOpen] = useState(false);
    const [isAppleBarnModalOpen, setIsAppleBarnModalOpen] = useState(false);
    const [isAppleFestivalModalOpen, setIsAppleFestivalModalOpen] = useState(false);
    const [isPlaygroundModalOpen, setIsPlaygroundModalOpen] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            let allComplete = false;

            setYearCount(prevCount => {
                if (prevCount >= 40) return prevCount;
                allComplete = false;
                return prevCount + 2;
            });

            setVarietyCount(prevCount => {
                if (prevCount >= 30) return prevCount;
                allComplete = false;
                return prevCount + 1;
            });

            setTreesCount(prevCount => {
                if (prevCount >= 1676) return prevCount;
                allComplete = false;
                return prevCount + 50;
            });

            setProduceCount(prevCount => {
                if (prevCount >= 21) return prevCount;
                allComplete = false;
                return prevCount + 1;
            });

            if (allComplete) {
                clearInterval(interval);
            }
        }, 40);

        return () => clearInterval(interval);
    }, []);

    return (
        <main className="landing-page">
            <article>
                <div className="splashscreen" id="desktop-splash">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source src={require('./assets/splash_video.mp4')} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="content">
                        <h1>Anderson Orchard</h1>
                        <p>Your one-stop shop for fresh produce. <br />
                            This is the company's first impression.</p>
                    </div>
                    <div className="grown">
                        <div className="grown-wrap">
                            <div className="grown-intro">How We've Grown</div>
                            <div className="counts-wrap">
                                <div className="count supported">
                                    <div className="count-title">Years in Service</div>
                                    <div className="count-number">{yearCount}</div>
                                </div>
                                <div className="count planted">
                                    <div className="count-title">No. of Apple Varieties</div>
                                    <div className="count-number">{varietyCount}</div>
                                </div>
                                <div className="count trees">
                                    <div className="count-title">Trees Planted</div>
                                    <div className="count-number">{treesCount}</div>
                                </div>
                                <div className="count shrubs">
                                    <div className="count-title">No. of Produce Types</div>
                                    <div className="count-number">{produceCount}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="splashscreen" id="mobile-splash">
                    <div className="top-splash">
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                        >
                            <source src={require('./assets/splash_video.mp4')} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="content">
                            <h1>Anderson Orchard</h1>
                            <p>Your one-stop shop for fresh produce. <br />
                                This is the company's first impression.</p>
                        </div>
                    </div>
                    <div className="grown">
                        <div className="grown-wrap">
                            <div className="grown-intro">How We've Grown</div>
                            <div className="counts-wrap">
                                <div className="count supported">
                                    <div className="count-title">Years in Service</div>
                                    <div className="count-number">{yearCount}</div>
                                </div>
                                <div className="count planted">
                                    <div className="count-title">No. of Apple Varieties</div>
                                    <div className="count-number">{varietyCount}</div>
                                </div>
                                <div className="count trees">
                                    <div className="count-title">Trees Planted</div>
                                    <div className="count-number">{treesCount}</div>
                                </div>
                                <div className="count shrubs">
                                    <div className="count-title">No. of Produce Types</div>
                                    <div className="count-number">{produceCount}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="activity-grid">
                    <div className="activity-card" id="u-pick" onClick={(e) => { setIsUPickModalOpen(true); e.preventDefault(); }}>
                        <img className="icon" src={require('./img/orchard_icon.png')} alt="U-Pick" />
                        <h3>U-Pick</h3>
                        <p>Stroll through our fields and hand-pick the season's freshest fruits and veggies.</p>
                    </div>

                    <div className="activity-card" id="apple-barn" onClick={(e) => { setIsAppleBarnModalOpen(true); e.preventDefault(); }}>
                        <img className="icon" src={require('./img/apple_barn_icon.png')} alt="Apple Barn" />
                        <h3>Apple Barn</h3>
                        <p>Step inside for farm-fresh goodness and cozy treats:</p>
                        <ul>
                            <li>→ Fresh-picked fruits & vegetables</li>
                            <li>→ 30+ apple varieties</li>
                            <li>→ Homemade cider & tasty concessions</li>
                        </ul>
                    </div>

                    <div className="activity-card" id="apple-festival" onClick={(e) => { setIsAppleFestivalModalOpen(true); e.preventDefault(); }}>
                        <img className="icon" src={require('./img/festival_icon.png')} alt="Apple Festival" />
                        <h3>Apple Festival</h3>
                        <p>Celebrate harvest season with live music, fun games, and fresh-pressed cider.</p>
                    </div>

                    <div className="activity-card" id="playground" onClick={(e) => { setIsPlaygroundModalOpen(true); e.preventDefault(); }}>
                        <img className="icon" src={require('./img/playground_icon.png')} alt="Playground" />
                        <h3>Playground</h3>
                        <p>Let the kids explore while you relax and soak in the scenic farm views.</p>
                    </div>
                    {isUPickModalOpen && (
                        <div className="modal-overlay" onClick={() => setIsUPickModalOpen(false)}>
                            <div className="modal-content" onClick={e => e.stopPropagation()}>
                                <div className="modal-top">
                                    <button className="close-button" onClick={() => setIsUPickModalOpen(false)}>×</button>
                                    <h2>U-Pick Experience</h2>
                                </div>
                                <div className="modal-body">
                                    <div className="modal-body-part">
                                        <p>Come experience the joy of picking your own fresh fruits!</p>
                                        <h3>Current Season:</h3>
                                        <p>Apples (September - October)</p>
                                    </div>
                                    <div className="modal-body-part">
                                        <h3>Hours:</h3>
                                        <p>Daily 9:00 AM - 6:00 PM</p>
                                        <h3>What to Bring:</h3>
                                        <ul>
                                            <li>Comfortable walking shoes</li>
                                            <li>Sun protection</li>
                                            <li>Containers (or purchase ours)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {isAppleBarnModalOpen && (
                        <div className="modal-overlay" onClick={() => setIsAppleBarnModalOpen(false)}>
                            <div className="modal-content" onClick={e => e.stopPropagation()}>
                                <div className="modal-top">
                                    <button className="close-button" onClick={() => setIsAppleBarnModalOpen(false)}>x</button>
                                    <h2>Apple Barn Experience</h2>
                                </div>
                                <div className="modal-body">
                                    <div className="modal-body-part">
                                        <p>Come to the barn and enjoy our unique features!</p>
                                    </div>
                                    <div className="modal-body-part">
                                        <h3>Hours:</h3>
                                        <p>Daily 9:00 AM - 6:00 PM</p>
                                        <h3>What's in the Barn:</h3>
                                        <ul>
                                            <li>Concession Stand</li>
                                            <li>Restrooms</li>
                                            <li>Seating Areas</li>
                                            <li>Freshly-Picked Fruits and Vegetables</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {isAppleFestivalModalOpen && (
                        <div className="modal-overlay" onClick={() => setIsAppleFestivalModalOpen(false)}>
                            <div className="modal-content" onClick={e => e.stopPropagation()}>
                                <div className="modal-top">
                                    <button className="close-button" onClick={() => setIsAppleFestivalModalOpen(false)}>×</button>
                                    <h2>Apple Festival Experience</h2>
                                </div>
                                <div className="modal-body">
                                    <div className="modal-body-part">
                                        <h3>What is the Fall Festival?</h3>
                                        <p>The Fall Festival is a celebration of the harvest season, featuring a variety of fun activities for the whole family.
                                            We have art booths and food trucks. Live music and pumpkin patches. And, as always, you can pick your own apples!</p>
                                    </div>
                                    <div className="modal-body-part">
                                        <h3>Hours:</h3>
                                        <p>Daily 9:00 AM - 6:00 PM</p>
                                        <h3>What to Bring:</h3>
                                        <ul>
                                            <li>Comfortable walking shoes</li>
                                            <li>Sun protection</li>
                                            <li>Containers (or purchase ours)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {isPlaygroundModalOpen && (
                        <div className="modal-overlay" onClick={() => setIsPlaygroundModalOpen(false)}>
                            <div className="modal-content" onClick={e => e.stopPropagation()}>
                                <div className="modal-top">
                                    <button className="close-button" onClick={() => setIsPlaygroundModalOpen(false)}>×</button>
                                    <h2>Playground Experience</h2>
                                </div>
                                <div className="modal-body">
                                    <div className="modal-body-part">
                                        <p>Kids can come and play on the playground while you enjoy your time!<br />
                                            We have:</p>
                                        <ul>
                                            <li>Straw Pile (in the fall)</li>
                                            <li>Swings</li>
                                            <li>Education Center</li>
                                            <li>Playground</li>
                                        </ul>
                                    </div>
                                    <div className="modal-body-part">
                                        <h3>Hours:</h3>
                                        <p>Daily 9:00 AM - 6:00 PM</p>
                                        <h3>What to Bring:</h3>
                                        <ul>
                                            <li>Comfortable walking shoes</li>
                                            <li>Sun protection</li>
                                            <li>A positive attitude</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </article>
        </main >
    );
};

export default LandingPage;