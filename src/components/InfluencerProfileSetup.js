// import React from 'react';
// import { FaCamera, FaInstagram, FaLinkedin } from 'react-icons/fa';
// import { SiTiktok } from 'react-icons/si';
// import '../styles/InfluencerProfileSetup.css';

// function InfluencerProfileSetup() {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Submit logic here
//     console.log('Profile saved');
//   };

//   const handlePreview = () => {
//     // Preview logic
//     console.log('Preview profile');
//   };

//   return (
//     <div className="profile-setup-container">
//       <h1 className="profile-setup-title">Create Your Influencer Profile</h1>
//       <p className="profile-setup-subtitle">
//         Complete your profile to start connecting with brands
//       </p>

//       <form className="profile-setup-form" onSubmit={handleSubmit}>
//         {/* Profile Photo with Camera Icon */}
//         <div className="form-group">
//           <label className="form-label" htmlFor="profilePhoto">
//             <FaCamera className="upload-icon" />
//             Profile Photo
//           </label>
//           <input
//             type="file"
//             id="profilePhoto"
//             className="form-input"
//             accept="image/*"
//           />
//         </div>

//         {/* Bio */}
//         <div className="form-group">
//           <label className="form-label" htmlFor="bio">
//             Bio
//           </label>
//           <textarea
//             id="bio"
//             className="form-textarea"
//             placeholder="Tell us about yourself..."
//             rows="4"
//           ></textarea>
//         </div>

//         {/* Niche Selection */}
//         <h2 className="section-heading">Your Niche</h2>
//         <div className="niche-group">
//           <div className="form-group">
//             <label className="form-label" htmlFor="primaryNiche">
//               Select primary niche
//             </label>
//             <select id="primaryNiche" className="form-select">
//               <option value="" disabled hidden>
//                 Select primary niche
//               </option>
//               <option>Fashion</option>
//               <option>Beauty</option>
//               <option>Lifestyle</option>
//               <option>Fitness</option>
//               <option>Travel</option>
//               <option>Other</option>
//             </select>
//           </div>
//           <div className="form-group">
//             <label className="form-label" htmlFor="secondaryNiche">
//               Select secondary niche
//             </label>
//             <select id="secondaryNiche" className="form-select">
//               <option value="" disabled hidden>
//                 Select secondary niche
//               </option>
//               <option>Fashion</option>
//               <option>Beauty</option>
//               <option>Lifestyle</option>
//               <option>Fitness</option>
//               <option>Travel</option>
//               <option>Other</option>
//             </select>
//           </div>
//         </div>

//         {/* Social Media Accounts with Icons */}
//         <h2 className="section-heading">Social Media Accounts</h2>
//         <div className="form-group">
//           <label className="form-label" htmlFor="instagramHandle">
//             <FaInstagram className="social-icon" />
//             Instagram username
//           </label>
//           <input
//             type="text"
//             id="instagramHandle"
//             className="form-input"
//             placeholder="@username"
//           />
//         </div>
//         <div className="form-group">
//           <label className="form-label" htmlFor="tiktokHandle">
//             <SiTiktok className="social-icon" />
//             TikTok username
//           </label>
//           <input
//             type="text"
//             id="tiktokHandle"
//             className="form-input"
//             placeholder="@username"
//           />
//         </div>
//         <div className="form-group">
//           <label className="form-label" htmlFor="linkedinUrl">
//             <FaLinkedin className="social-icon" />
//             LinkedIn profile URL
//           </label>
//           <input
//             type="text"
//             id="linkedinUrl"
//             className="form-input"
//             placeholder="LinkedIn profile URL"
//           />
//         </div>

//         {/* Services Offered */}
//         <h2 className="section-heading">Services Offered</h2>
//         <div className="checkbox-group">
//           <label className="checkbox-label">
//             <input type="checkbox" name="services" value="Sponsored Posts" />
//             Sponsored Posts
//           </label>
//           <label className="checkbox-label">
//             <input type="checkbox" name="services" value="Product Reviews" />
//             Product Reviews
//           </label>
//           <label className="checkbox-label">
//             <input type="checkbox" name="services" value="Event Appearances" />
//             Event Appearances
//           </label>
//           <label className="checkbox-label">
//             <input type="checkbox" name="services" value="Brand Ambassador" />
//             Brand Ambassador
//           </label>
//           <label className="checkbox-label">
//             <input type="checkbox" name="services" value="Consultation" />
//             Consultation
//           </label>
//           <label className="checkbox-label">
//             <input type="checkbox" name="services" value="Custom Content" />
//             Custom Content
//           </label>
//         </div>

//         {/* Buttons */}
//         <div className="buttons-row">
//           <button type="button" className="preview-btn" onClick={handlePreview}>
//             Preview
//           </button>
//           <button type="submit" className="save-btn">
//             Save Profile
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default InfluencerProfileSetup;




import React, { useState } from 'react';
import { FaCamera, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabase';
import '../styles/InfluencerProfileSetup.css';

function InfluencerProfileSetup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    profilePhoto: null,
    bio: '',
    primaryNiche: '',
    secondaryNiche: '',
    instagramHandle: '',
    tiktokHandle: '',
    linkedinUrl: '',
    services: [],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { id, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === 'file' ? files[0] : value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      services: checked
        ? [...prev.services, value]
        : prev.services.filter((service) => service !== value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Check authenticated user
      const { data: { user }, error: authError } = await supabase.auth.getUser();
      if (authError || !user) throw new Error('You must be logged in.');

      // Verify influencer role
      const { data: userData, error: userError } = await supabase
        .from('users')
        .select('role')
        .eq('id', user.id)
        .single();
      if (userError || userData.role !== 'influencer') {
        throw new Error('Only influencers can update this profile.');
      }

      // Upload profile photo
      let profilePhotoUrl = null;
      if (formData.profilePhoto) {
        const fileName = `${user.id}/${Date.now()}-${formData.profilePhoto.name}`;
        const { error: uploadError } = await supabase.storage
          .from('profile-photos')
          .upload(fileName, formData.profilePhoto);
        if (uploadError) throw new Error('Failed to upload photo: ' + uploadError.message);

        const { data: urlData } = supabase.storage
          .from('profile-photos')
          .getPublicUrl(fileName);
        profilePhotoUrl = urlData.publicUrl;
      }

      // Update influencers table
      const { error: updateError } = await supabase
        .from('influencers')
        .update({
          profile_photo_url: profilePhotoUrl,
          bio: formData.bio,
          primary_niche: formData.primaryNiche,
          secondary_niche: formData.secondaryNiche,
          instagram_handle: formData.instagramHandle,
          tiktok_handle: formData.tiktokHandle,
          linkedin_url: formData.linkedinUrl,
          services: formData.services,
        })
        .eq('user_id', user.id);
      if (updateError) throw new Error('Failed to save profile: ' + updateError.message);

      console.log('Profile saved');
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePreview = () => {
    console.log('Preview profile');
  };

  return (
    <div className="profile-setup-container">
      <h1 className="profile-setup-title">Create Your Influencer Profile</h1>
      <p className="profile-setup-subtitle">
        Complete your profile to start connecting with brands
      </p>

      {error && <p className="error-message">{error}</p>}

      <form className="profile-setup-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="profilePhoto">
            <FaCamera className="upload-icon" />
            Profile Photo
          </label>
          <input
            type="file"
            id="profilePhoto"
            className="form-input"
            accept="image/*"
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="bio">
            Bio
          </label>
          <textarea
            id="bio"
            className="form-textarea"
            placeholder="Tell us about yourself..."
            rows="4"
            value={formData.bio}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <h2 className="section-heading">Your Niche</h2>
        <div className="niche-group">
          <div className="form-group">
            <label className="form-label" htmlFor="primaryNiche">
              Select primary niche
            </label>
            <select
              id="primaryNiche"
              className="form-select"
              value={formData.primaryNiche}
              onChange={handleInputChange}
            >
              <option value="" disabled hidden>
                Select primary niche
              </option>
              <option>Fashion</option>
              <option>Beauty</option>
              <option>Lifestyle</option>
              <option>Fitness</option>
              <option>Travel</option>
              <option>Other</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="secondaryNiche">
              Select secondary niche
            </label>
            <select
              id="secondaryNiche"
              className="form-select"
              value={formData.secondaryNiche}
              onChange={handleInputChange}
            >
              <option value="" disabled hidden>
                Select secondary niche
              </option>
              <option>Fashion</option>
              <option>Beauty</option>
              <option>Lifestyle</option>
              <option>Fitness</option>
              <option>Travel</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <h2 className="section-heading">Social Media Accounts</h2>
        <div className="form-group">
          <label className="form-label" htmlFor="instagramHandle">
            <FaInstagram className="social-icon" />
            Instagram username
          </label>
          <input
            type="text"
            id="instagramHandle"
            className="form-input"
            placeholder="@username"
            value={formData.instagramHandle}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="tiktokHandle">
            <SiTiktok className="social-icon" />
            TikTok username
          </label>
          <input
            type="text"
            id="tiktokHandle"
            className="form-input"
            placeholder="@username"
            value={formData.tiktokHandle}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="linkedinUrl">
            <FaLinkedin className="social-icon" />
            LinkedIn profile URL
          </label>
          <input
            type="text"
            id="linkedinUrl"
            className="form-input"
            placeholder="LinkedIn profile URL"
            value={formData.linkedinUrl}
            onChange={handleInputChange}
          />
        </div>

        <h2 className="section-heading">Services Offered</h2>
        <div className="checkbox-group">
          {['Sponsored Posts', 'Product Reviews', 'Event Appearances', 'Brand Ambassador', 'Consultation', 'Custom Content'].map((service) => (
            <label className="checkbox-label" key={service}>
              <input
                type="checkbox"
                name="services"
                value={service}
                checked={formData.services.includes(service)}
                onChange={handleCheckboxChange}
              />
              {service}
            </label>
          ))}
        </div>

        <div className="buttons-row">
          <button type="button" className="preview-btn" onClick={handlePreview}>
            Preview
          </button>
          <button type="submit" className="save-btn" disabled={loading}>
            {loading ? 'Saving...' : 'Save Profile'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default InfluencerProfileSetup;