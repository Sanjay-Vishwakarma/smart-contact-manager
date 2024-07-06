
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/welcome.css';  // Custom CSS if needed
import '..//..//styles/homepage.css';
import Footer from "../layout/Footer";

// import Portfolio from "./PortFolio";

const WelcomePage = () => {
    return (
        <div>
            <div className="main-content">
                <h2>Welcome to Your Smart Contact Manager</h2>
                <p>Keep your contacts organized and accessible anytime, anywhere.</p>
            </div>
          <Footer/>
        </div>
    );
};
export default WelcomePage;
