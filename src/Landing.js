import React, { useState } from "react";
import './LandingPage.css'; 
import design from './Design.png'; 

const LandingPage = () => {
  const [loading, setLoading] = useState(false);

  const navigateToMain = () => {
    setLoading(true);
    
    setTimeout(() => {
      window.location.href = "/main"; 
    }, 3000);
  };

  return (
    <div className="landing-container">
      <h1 className={loading ? "textStreamer" : ""}>Welcome to Quicksell!</h1>
      <button className="button" onClick={navigateToMain}>
        <span className={loading ? "loading" : "arrow"}>{!loading && "➔"}</span>
      </button>
      <div className="image-container">
        <img src={design} alt="Quicksell Logo" />
      </div>
    </div>
  );
};

export default LandingPage;
