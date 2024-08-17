import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/welcome.css';  // Custom CSS if needed
import '../../styles/homepage.css'; // Corrected path for homepage.css
import Footer from "../layout/Footer";

// Import the image
import backgroundImage from '../../bgImages/index1.jpg';

const WelcomePage = () => {
    return (
        <div style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            minHeight: '100vh',
            opacity: 0.8 // Adjust transparency
        }}>
            <div className="main-content">
                <h2>Welcome to Your Smart Contact Manager</h2>
                <p>Keep your contacts organized and accessible anytime, anywhere.</p>
            </div>
          
        </div>
    );
    
};
<Footer />

export default WelcomePage;
