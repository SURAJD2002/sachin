// import React from 'react';
// import '../styles/Signup.css';


// function SignupInfluencerPage() {
//   const handleInfluencerSignup = (e) => {
//     e.preventDefault();
//     // Handle Influencer Sign-Up logic here
//     console.log('Influencer Sign-Up');
//   };

//   return (
//     <div className="signup-card">
//       <div className="signup-icon" aria-hidden="true">
//         {/* Example icon (emoji). Replace with an <img> or icon library if desired. */}
//         ⭐
//       </div>
//       <h2 className="signup-title">Sign up as an Influencer</h2>
//       <p className="signup-subtitle">Create an account to connect with brands</p>

//       <form className="signup-form" onSubmit={handleInfluencerSignup}>
//         <label htmlFor="fullName">Full Name</label>
//         <input
//           type="text"
//           id="fullName"
//           placeholder="Your full name"
//           required
//         />

//         <label htmlFor="influencerEmail">Email</label>
//         <input
//           type="email"
//           id="influencerEmail"
//           placeholder="you@email.com"
//           required
//         />

//         <label htmlFor="influencerPassword">Password</label>
//         <input
//           type="password"
//           id="influencerPassword"
//           placeholder="********"
//           required
//         />

//         <label htmlFor="influencerLocation">Location</label>
//         <select id="influencerLocation" required>
//           <option value="" disabled selected hidden>
//             Select location
//           </option>
//           <option>New York</option>
//           <option>Los Angeles</option>
//           <option>Chicago</option>
//           <option>Houston</option>
//           <option>Other</option>
//         </select>

//         <label htmlFor="contentCategory">Content Category</label>
//         <select id="contentCategory" required>
//           <option value="" disabled selected hidden>
//             Select category
//           </option>
//           <option>Fashion</option>
//           <option>Beauty</option>
//           <option>Fitness</option>
//           <option>Food & Travel</option>
//           <option>Other</option>
//         </select>

//         <button type="submit" className="signup-button">
//           Sign up as Influencer
//         </button>
//       </form>
//     </div>
//   );
// }

// export default SignupInfluencerPage;


// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { supabase } from '../supabase';
// import '../styles/Signup.css';

// function SignupInfluencerPage() {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [formData, setFormData] = useState({
//     fullName: '',
//     influencerEmail: '',
//     influencerPassword: '',
//     influencerLocation: '',
//     contentCategory: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleInfluencerSignup = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     try {
//       // Sign up user
//       const { data: { user }, error: authError } = await supabase.auth.signUp({
//         email: formData.influencerEmail,
//         password: formData.influencerPassword,
//       });

//       if (authError) {
//         if (authError.status === 429) {
//           throw new Error('Too many requests. Please try again later.');
//         }
//         throw authError;
//       }

//       // Insert into users table
//       const { error: userError } = await supabase
//         .from('users')
//         .insert([
//           {
//             id: user.id,
//             email: formData.influencerEmail,
//             password: 'hashed', // Hash server-side in production
//             role: 'influencer',
//           },
//         ]);
//       if (userError) throw userError;

//       // Insert into influencers table
//       const { error: influencerError } = await supabase
//         .from('influencers')
//         .insert([
//           {
//             user_id: user.id,
//             full_name: formData.fullName,
//             location: formData.influencerLocation,
//             content_category: formData.contentCategory,
//           },
//         ]);
//       if (influencerError) throw influencerError;

//       // Redirect to influencer dashboard
//       navigate('/dashboard');
//     } catch (error) {
//       setError(error.message || 'Error creating account');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="signup-card">
//       <div className="signup-icon" aria-hidden="true">
//         ⭐
//       </div>
//       <h2 className="signup-title">Sign up as an Influencer</h2>
//       <p className="signup-subtitle">Create an account to connect with brands</p>

//       {error && <p className="error-message">{error}</p>}

//       <form className="signup-form" onSubmit={handleInfluencerSignup}>
//         <label htmlFor="fullName">Full Name</label>
//         <input
//           type="text"
//           id="fullName"
//           name="fullName"
//           value={formData.fullName}
//           onChange={handleInputChange}
//           placeholder="Your full name"
//           required
//         />

//         <label htmlFor="influencerEmail">Email</label>
//         <input
//           type="email"
//           id="influencerEmail"
//           name="influencerEmail"
//           value={formData.influencerEmail}
//           onChange={handleInputChange}
//           placeholder="you@email.com"
//           required
//         />

//         <label htmlFor="influencerPassword">Password</label>
//         <input
//           type="password"
//           id="influencerPassword"
//           name="influencerPassword"
//           value={formData.influencerPassword}
//           onChange={handleInputChange}
//           placeholder="********"
//           required
//         />

//         <label htmlFor="influencerLocation">Location</label>
//         <select
//           id="influencerLocation"
//           name="influencerLocation"
//           value={formData.influencerLocation}
//           onChange={handleInputChange}
//           required
//         >
//           <option value="" disabled>
//             Select location
//           </option>
//           <option value="New York">New York</option>
//           <option value="Los Angeles">Los Angeles</option>
//           <option value="Chicago">Chicago</option>
//           <option value="Houston">Houston</option>
//           <option value="Other">Other</option>
//         </select>

//         <label htmlFor="contentCategory">Content Category</label>
//         <select
//           id="contentCategory"
//           name="contentCategory"
//           value={formData.contentCategory}
//           onChange={handleInputChange}
//           required
//         >
//           <option value="" disabled>
//             Select category
//           </option>
//           <option value="Fashion">Fashion</option>
//           <option value="Beauty">Beauty</option>
//           <option value="Fitness">Fitness</option>
//           <option value="Food & Travel">Food & Travel</option>
//           <option value="Other">Other</option>
//         </select>

//         <button type="submit" className="signup-button" disabled={loading}>
//           {loading ? 'Signing up...' : 'Sign up as Influencer'}
//         </button>
//       </form>

//       <p className="login-text">
//         Already have an account? <Link to="/login">Log in</Link>
//       </p>
//     </div>
//   );
// }

// export default SignupInfluencerPage;


import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';
import { supabase } from '../supabase';
import '../styles/Signup.css';

function SignupInfluencerPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    influencerEmail: '',
    influencerPassword: '',
    influencerLocation: '',
    contentCategory: '',
  });

  // Check if user is logged in
  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setIsLoggedIn(!!user);
    };
    checkUser();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInfluencerSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Validate password
      if (formData.influencerPassword.length < 6) {
        throw new Error('Password must be at least 6 characters.');
      }

      // Check if email exists
      const { data: emailExists, error: rpcError } = await supabase
        .rpc('check_email_exists', { email_input: formData.influencerEmail });
      if (rpcError) throw new Error('Failed to check email: ' + rpcError.message);
      if (emailExists) throw new Error('Email already registered.');

      // Sign up user
      const { data: { user, session }, error: authError } = await supabase.auth.signUp({
        email: formData.influencerEmail,
        password: formData.influencerPassword,
        options: { data: { role: 'influencer' } }
      });

      if (authError) {
        if (authError.status === 422) {
          throw new Error('Invalid email or password, or email already exists.');
        }
        throw authError;
      }

      // Force session refresh
      if (!session) {
        const { error: refreshError } = await supabase.auth.refreshSession();
        if (refreshError) throw new Error('Failed to refresh session: ' + refreshError.message);
      }

      // Retry insert with delay if RLS fails
      let insertError = null;
      for (let attempt = 1; attempt <= 3; attempt++) {
        try {
          const { error } = await supabase
            .from('influencers')
            .insert([
              {
                user_id: user.id,
                full_name: formData.fullName,
                location: formData.influencerLocation,
                content_category: formData.contentCategory,
              },
            ]);
          if (error) throw error;
          insertError = null;
          break;
        } catch (err) {
          insertError = err;
          if (attempt < 3) {
            await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
          }
        }
      }
      if (insertError) throw new Error('Failed to save influencer data: ' + insertError.message);

      navigate('/dashboard');
    } catch (error) {
      setError(error.message || 'Error creating account');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      setIsLoggedIn(false);
    } catch (err) {
      setError('Logout failed: ' + err.message);
    }
  };

  return (
    <div className="signup-card">
      <div className="signup-icon" aria-hidden="true">⭐</div>
      <h2 className="signup-title">Sign up as an Influencer</h2>
      <p className="signup-subtitle">Create an account to connect with brands</p>

      {error && <p className="error-message">{error}</p>}

      {isLoggedIn ? (
        <button className="logout-btn" onClick={handleLogout}>
          <FaSignOutAlt /> Logout
        </button>
      ) : (
        <form className="signup-form" onSubmit={handleInfluencerSignup}>
          <label htmlFor="fullName" className="form-label">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Your full name"
            required
            className="form-input"
          />

          <label htmlFor="influencerEmail" className="form-label">Email</label>
          <input
            type="email"
            id="influencerEmail"
            name="influencerEmail"
            value={formData.influencerEmail}
            onChange={handleInputChange}
            placeholder="you@email.com"
            required
            className="form-input"
          />

          <label htmlFor="influencerPassword" className="form-label">Password</label>
          <input
            type="password"
            id="influencerPassword"
            name="influencerPassword"
            value={formData.influencerPassword}
            onChange={handleInputChange}
            placeholder="********"
            required
            className="form-input"
          />

          <label htmlFor="influencerLocation" className="form-label">Location</label>
          <select
            id="influencerLocation"
            name="influencerLocation"
            value={formData.influencerLocation}
            onChange={handleInputChange}
            required
            className="form-input"
          >
            <option value="" disabled>Select location</option>
            <option value="New York">New York</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="Chicago">Chicago</option>
            <option value="Houston">Houston</option>
            <option value="Other">Other</option>
          </select>

          <label htmlFor="contentCategory" className="form-label">Content Category</label>
          <select
            id="contentCategory"
            name="contentCategory"
            value={formData.contentCategory}
            onChange={handleInputChange}
            required
            className="form-input"
          >
            <option value="" disabled>Select category</option>
            <option value="Fashion">Fashion</option>
            <option value="Beauty">Beauty</option>
            <option value="Fitness">Fitness</option>
            <option value="Food & Travel">Food & Travel</option>
            <option value="Other">Other</option>
          </select>

          <button type="submit" className="signup-button" disabled={loading}>
            {loading ? 'Signing up...' : 'Sign up as Influencer'}
          </button>
        </form>
      )}

      <p className="login-text">
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </div>
  );
}

export default SignupInfluencerPage;