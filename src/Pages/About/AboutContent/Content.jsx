import React from 'react';

const MyComponent = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
    height: '100vh', // Make the container fill the viewport height
    textAlign: 'center', // Center text horizontally within the container
  };

  return (
    <div style={containerStyle}>
      <div>
        <div className="section-title">
          <h1>Sattva Ayurveda: Your Journey to Holistic Wellness</h1>
        </div>
        <div className="content-inner">
          <p>
            Welcome to Sattva Ayurveda, your trusted partner on the path to holistic well-being.</p>
           <p> At Sattva, we are dedicated to bringing you the ancient wisdom of Ayurveda,</p>
           <p> a time-tested system of natural healing that offers alternatives to conventional drugs,</p>
            <p>promoting harmony and balance within your body, mind, and spirit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
