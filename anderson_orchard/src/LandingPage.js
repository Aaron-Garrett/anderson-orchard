import './css/landingpage.css';
import '@fontsource/roboto';
import '@fontsource/open-sans';


const LandingPage = () => {
    return (
        <main className="landing-page">
            <div className="splashscreen">
                <h1>Anderson Orchard</h1>
                <p>Your one-stop shop for fresh produce. <br />
                    This is the company's first impression.</p>
            </div>
            <article className="activities">
                <h2>Activities</h2>
                <div className="activity-grid">
                    <div id="u-pick">
                        <h3>U-Pick</h3>
                        <p>Experience the joy of picking your own fruits and vegetables.</p>
                    </div>
                    <div id="apple-barn">
                        <h3>Apple Barn</h3>
                        <p>Come to our Apple Barn to enjoy:</p>
                        <ul>
                            <li>→ Purchasing freshly picked fruits and vegetables</li>
                            <li>→ 30 different apple varieties</li>
                            <li>→ A concession stand with delicious treats</li>
                        </ul>
                    </div>
                    <div id="apple-festival">
                        <h3>Apple Festival</h3>
                        <p>Join us for our annual Apple Festival, celebrating the harvest with fun activities and fresh cider.</p>
                    </div>
                    <div id="playground">
                        <h3>Playground</h3>
                        <p>Let the kids enjoy our playground while you relax and take in the scenery.</p>
                    </div>
                </div>
            </article>
        </main>
    );
};

export default LandingPage;
