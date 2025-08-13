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

    const setAllModalsClosed = (e) => {
        e.preventDefault();
        setIsUPickModalOpen(false);
        setIsAppleBarnModalOpen(false);
        setIsAppleFestivalModalOpen(false);
        setIsPlaygroundModalOpen(false);
    };

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
                        <p>Not <strong>just</strong> your one-stop shop for fresh produce.<br />
                            We are a family-oriented experience with the mission to provide
                            the best produce to our guests while giving them a memorable experience
                            and supporting local growers.</p>
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
                            <p>Not <strong>just</strong> your one-stop shop for fresh produce.<br />
                                We are a family-oriented experience with the mission to provide
                                the best produce to our guests while giving them a memorable experience
                                and supporting local growers.</p>
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
                    <div className="activity-card" id="u-pick" onClick={(e) => { setAllModalsClosed(e); setIsUPickModalOpen(true); e.preventDefault(); }}>
                        <img className="icon" src={require('./img/orchard_icon.png')} alt="U-Pick" />
                        <h3>U-Pick</h3>
                        <p>Stroll through our fields and hand-pick the season's freshest fruits and veggies.</p>
                        <ul>
                            <li>→ Apples</li>
                            <li>→ Raspberries</li>
                            <li>→ Pumpkins</li>
                            <li>→ and More!</li>
                        </ul>
                    </div>

                    <div className="activity-card" id="apple-barn" onClick={(e) => { setAllModalsClosed(e); setIsAppleBarnModalOpen(true); e.preventDefault(); }}>
                        <img className="icon" src={require('./img/apple_barn_icon.png')} alt="Apple Barn" />
                        <h3>Apple Barn</h3>
                        <p>Step inside for farm-fresh goodness and cozy treats:</p>
                        <ul>
                            <li>→ Fresh-picked fruits & vegetables</li>
                            <li>→ 30+ apple varieties</li>
                            <li>→ Homemade cider & tasty concessions</li>
                            <li>→ and More!</li>
                        </ul>
                    </div>

                    <div className="activity-card" id="apple-festival" onClick={(e) => { setAllModalsClosed(e); setIsAppleFestivalModalOpen(true); e.preventDefault(); }}>
                        <img className="icon" src={require('./img/festival_icon.png')} alt="Apple Festival" />
                        <h3>Apple Festival</h3>
                        <p>Celebrate harvest season with:</p>
                        <ul>
                            <li>→ Live Music</li>
                            <li>→ Fun Games</li>
                            <li>→ Fresh-Pressed Cider</li>
                            <li>→ and More!</li>
                        </ul>
                    </div>

                    <div className="activity-card" id="playground" onClick={(e) => { setAllModalsClosed(e); setIsPlaygroundModalOpen(true); e.preventDefault(); }}>
                        <img className="icon" src={require('./img/playground_icon.png')} alt="Playground" />
                        <h3>Child-Friendly Activities</h3>
                        <p>Let the kids explore while you relax and soak in the scenic farm views.</p>
                        <ul>
                            <li>→ Swings</li>
                            <li>→ Education Center</li>
                            <li>→ Playground</li>
                            <li>→ and More!</li>
                        </ul>
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
                                        <h3>Seasons:</h3>
                                        <p>🌳 Apples (May - August)</p>
                                        <ul className="sublist">
                                            <li>🍎 Ginger Gold</li>
                                            <li>🍎 Red Free</li>
                                            <li>🍎 Elstar (tart, great for cooking, lots of flavor)</li>
                                        </ul>
                                        <p>🌳 Apples (September - October)</p>
                                        <ul className="sublist">
                                            <li>🍏 Red Delicious</li>
                                            <li>🍏 Fuji</li>
                                            <li>🍏 Granny Smith (tart, great for cooking, lots of flavor)</li>
                                        </ul>
                                        <p>🌳 Raspberries (July - August)</p>
                                        <p>🌳 Pumpkins (October)</p>
                                        <p>🌳 Blackberries (July - August)</p>
                                    </div>
                                    <div className="modal-body-part">
                                        <h3>Hours:</h3>
                                        <p>Daily 9:00 AM - 6:00 PM</p>
                                        <h3>What to Bring:</h3>
                                        <ul>
                                            <li>👟 Comfortable walking shoes</li>
                                            <li>🌞 Sun protection</li>
                                            <li>👶 Children & pets</li>
                                            <li>😊 A great attitude!</li>
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
                                    <button className="close-button" onClick={() => setIsAppleBarnModalOpen(false)}>×</button>
                                    <h2>Apple Barn Experience</h2>
                                </div>
                                <div className="modal-body">
                                    <div className="modal-body-part">
                                        <p>Come to the barn and enjoy our unique features!</p>
                                        <ul>
                                            <li>🍎 Concession Stand</li>
                                            <li>🍎 Restrooms</li>
                                            <li>🍎 Seating Areas</li>
                                            <li>🍎 Freshly-Picked Fruits and Vegetables</li>
                                        </ul>
                                    </div>
                                    <div className="modal-body-part">
                                        <h3>Hours:</h3>
                                        <p>Daily 9:00 AM - 6:00 PM</p>
                                        <h3>Available Produce:</h3>
                                        <ul>
                                            <li>🌶️ Peppers: Both mild and spicy</li>
                                            <li>🫘 Green Beans</li>
                                            <li>🫐 Blueberries</li>
                                            <li>🍑 Peaches</li>
                                            <li>🍉 Watermelon</li>
                                            <li>🌽 Corn</li>
                                            <li>🍒 Cherries</li>
                                            <li>🥬 Cabbage</li>
                                            <li>🍈 Cantaloupe</li>
                                            <li>🍅 Tomatoes: Red, Yellow, Green, Grape</li>
                                            <li>🥒 Cucumbers</li>
                                            <li>🎃 Squash</li>
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
                                            Our goal is to create a memorable experience that brings people together to enjoy the beauty of the season while
                                            providing a place for local artisans and vendors to showcase their products.</p>
                                    </div>
                                    <div className="modal-body-part">
                                        <h3>Hours:</h3>
                                        <p>Daily 9:00 AM - 6:00 PM</p>
                                        <h3>Activities:</h3>
                                        <ul>
                                            <li>🐐 Petting Zoo</li>
                                            <li>🎃 Pumpkin Patch</li>
                                            <li> Vendor Booths</li>
                                            <li>🌾 Hay Pile</li>
                                            <li>🍎 Apple Picking</li>
                                            <li>🎵 Live Music</li>
                                            <li>🚚 Food Trucks</li>
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
                                    <h2>Child-Friendly Experience</h2>
                                </div>
                                <div className="modal-body">
                                    <div className="modal-body-part">
                                        <p>We strive to create a great <i>family</i> experience! But we also know that kids can get the zoomies.
                                            That is why we have designated play areas and activities just for them! We want them to enjoy their Anderson
                                            Orchard experience just as much as their parents.</p>
                                    </div>
                                    <div className="modal-body-part">
                                        <h3>Our Activities:</h3>
                                        <ul>
                                            <li>🌾 Straw Pile (in the fall)</li>
                                            <li>🏖️ Swings</li>
                                            <li>📚 Education Center</li>
                                            <li>🛝 Playground</li>
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