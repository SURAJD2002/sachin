// import React from 'react';
// import SignupBrandPage from '../components/SignupBrandPage';
// import SignupInfluencerPage from '../components/SignupInfluencerPage';
// import '..styles/SignUpWrapper.css';

// function SignUpWrapper() {
//   return (
//     <div className="signup-wrapper">
//       <SignupBrandPage />
//       <SignupInfluencerPage />
//     </div>
//   );
// }

// export default SignUpWrapper;


import React, { useState } from 'react';
import SignupBrandPage from '../components/SignupBrandPage';
import SignupInfluencerPage from '../components/SignupInfluencerPage';
import '../styles/Signup.css';

function SignUpWrapper() {
  const [activeTab, setActiveTab] = useState('brand');

  return (
    <div className="signup-wrapper">
      <div className="tab-container">
        <button
          className={`tab-btn ${activeTab === 'brand' ? 'active' : ''}`}
          onClick={() => setActiveTab('brand')}
        >
          Brand Sign Up
        </button>
        <button
          className={`tab-btn ${activeTab === 'influencer' ? 'active' : ''}`}
          onClick={() => setActiveTab('influencer')}
        >
          Influencer Sign Up
        </button>
      </div>
      {activeTab === 'brand' ? <SignupBrandPage /> : <SignupInfluencerPage />}
    </div>
  );
}

export default SignUpWrapper;