// import React from 'react';
// import { FaBell, FaEnvelope, FaPlus } from 'react-icons/fa';
// import '../styles/BrandDashboard.css';

// function BrandDashboard() {
//   return (
//     <div className="brand-dashboard">
//       {/* SIDEBAR */}
//       <aside className="sidebar">
//         <div className="brand-logo">Brand Logo</div>
//         <nav className="sidebar-nav">
//           <ul>
//             <li>My Campaigns</li>
//             <li>Hire an Influencer</li>
//             <li>Search Creators</li>
//             <li>Calendar</li>
//             <li>Analytics</li>
//           </ul>
//         </nav>
//       </aside>

//       {/* MAIN CONTENT */}
//       <main className="main-content">
//         {/* TOP BAR */}
//         <div className="topbar">
//           <h2>Brand Dashboard</h2>
//           <div className="topbar-icons">
//             <FaBell className="icon" />
//             <FaEnvelope className="icon" />
//             {/* Optional: user profile or avatar can go here */}
//           </div>
//         </div>

//         {/* STATS AND NEW CAMPAIGN BUTTON */}
//         <div className="stats-section">
//           <div className="stat-card">
//             <p className="stat-title">Active Campaigns</p>
//             <p className="stat-value">12</p>
//           </div>
//           <div className="stat-card">
//             <p className="stat-title">Total Reach</p>
//             <p className="stat-value">2.4M</p>
//           </div>
//           <div className="stat-card">
//             <p className="stat-title">Engagement Rate</p>
//             <p className="stat-value">4.8%</p>
//           </div>
//           <div className="stat-card">
//             <p className="stat-title">Budget Spent</p>
//             <p className="stat-value">$45,987</p>
//           </div>

//           <button className="new-campaign-btn">
//             <FaPlus className="plus-icon" /> Create New Campaign
//           </button>
//         </div>

//         {/* CURRENT CAMPAIGNS */}
//         <section className="current-campaigns">
//           <h3>Current Campaigns</h3>
//           <div className="campaigns-header">
//             <span>Campaign</span>
//             <span>Status</span>
//             <span>Influencers</span>
//             <span>Budget</span>
//             <span>Performance</span>
//           </div>

//           <div className="campaign-row">
//             <div className="campaign-cell">Summer Collection 2025</div>
//             <div className="campaign-cell active">Active</div>
//             <div className="campaign-cell">12</div>
//             <div className="campaign-cell">$12,000</div>
//             <div className="campaign-cell">+24%</div>
//           </div>

//           <div className="campaign-row">
//             <div className="campaign-cell">Spring Launch</div>
//             <div className="campaign-cell pending">Pending</div>
//             <div className="campaign-cell">8</div>
//             <div className="campaign-cell">$5,000</div>
//             <div className="campaign-cell">+10%</div>
//           </div>

//           <div className="campaign-row">
//             <div className="campaign-cell">Winter Sale</div>
//             <div className="campaign-cell completed">Completed</div>
//             <div className="campaign-cell">15</div>
//             <div className="campaign-cell">$9,500</div>
//             <div className="campaign-cell">-3%</div>
//           </div>
//         </section>

//         {/* NOTIFICATIONS AND MESSAGES */}
//         <div className="bottom-row">
//           <div className="notifications-panel">
//             <h4>Recent Notifications</h4>
//             <ul>
//               <li>New influencer application received</li>
//               <li>Payment invoice #123 was sent</li>
//               <li>2 new messages in your inbox</li>
//             </ul>
//           </div>
//           <div className="messages-panel">
//             <h4>Recent Messages</h4>
//             <div className="message">
//               <p className="message-sender">Sarah Johnson</p>
//               <p className="message-snippet">“Hey, I'm interested in collaborating...”</p>
//               <span className="message-time">10:25 AM</span>
//             </div>
//             <div className="message">
//               <p className="message-sender">Mike Peterson</p>
//               <p className="message-snippet">“Let’s discuss the terms for your new campaign...”</p>
//               <span className="message-time">9:10 AM</span>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default BrandDashboard;



// // src/components/BrandDashboard.jsx
// import React, { useState, useEffect } from 'react';
// import { FaBell, FaEnvelope, FaPlus } from 'react-icons/fa';
// import { supabase } from '../supabase';
// import '../styles/BrandDashboard.css';

// function BrandDashboard() {
//   const [campaigns, setCampaigns] = useState([]);
//   const [notifications, setNotifications] = useState([]);
//   const [messages, setMessages] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchDashboardData();
//   }, []);

//   const fetchDashboardData = async () => {
//     setLoading(true);
//     setError(null);

//     // 1) Get current user
//     const {
//       data: { user },
//       error: userErr,
//     } = await supabase.auth.getUser();
//     if (userErr || !user) {
//       console.error('Error fetching user:', userErr);
//       setError('Could not authenticate. Please log in again.');
//       setLoading(false);
//       return;
//     }
//     const brandId = user.id;

//     try {
//       // 2) Fetch campaigns
//       const { data: campData, error: campErr } = await supabase
//         .from('campaigns')
//         .select('*')
//         .eq('brand_id', brandId);
//       if (campErr) throw campErr;
//       setCampaigns(campData);

//       // 3) Fetch notifications (latest 5)
//       const { data: notifData, error: notifErr } = await supabase
//         .from('notifications')
//         .select('*')
//         .eq('brand_id', brandId)
//         .order('created_at', { ascending: false })
//         .limit(5);
//       if (notifErr) throw notifErr;
//       setNotifications(notifData);

//       // 4) Fetch messages (latest 5)
//       const { data: msgData, error: msgErr } = await supabase
//         .from('messages')
//         .select('*')
//         .eq('brand_id', brandId)
//         .order('sent_at', { ascending: false })
//         .limit(5);
//       if (msgErr) throw msgErr;
//       setMessages(msgData);

//     } catch (fetchErr) {
//       console.error('Dashboard fetch error:', fetchErr);
//       setError('Failed to load dashboard data.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) return <div className="dashboard-loading">Loading dashboard…</div>;
//   if (error)   return <div className="dashboard-error">Error: {error}</div>;

//   return (
//     <div className="brand-dashboard">
//       {/* SIDEBAR */}
//       <aside className="sidebar">
//         <div className="brand-logo">Brand Logo</div>
//         <nav className="sidebar-nav">
//           <ul>
//             <li>My Campaigns</li>
//             <li>Hire an Influencer</li>
//             <li>Search Creators</li>
//             <li>Calendar</li>
//             <li>Analytics</li>
//           </ul>
//         </nav>
//       </aside>

//       {/* MAIN CONTENT */}
//       <main className="main-content">
//         {/* TOP BAR */}
//         <div className="topbar">
//           <h2>Brand Dashboard</h2>
//           <div className="topbar-icons">
//             <FaBell className="icon" />
//             <FaEnvelope className="icon" />
//           </div>
//         </div>

//         {/* STATS & NEW CAMPAIGN */}
//         <div className="stats-section">
//           <div className="stat-card">
//             <p className="stat-title">Active Campaigns</p>
//             <p className="stat-value">
//               {campaigns.filter(c => c.status === 'Active').length}
//             </p>
//           </div>
//           <div className="stat-card">
//             <p className="stat-title">Total Reach</p>
//             <p className="stat-value">2.4M</p>
//           </div>
//           <div className="stat-card">
//             <p className="stat-title">Engagement Rate</p>
//             <p className="stat-value">4.8%</p>
//           </div>
//           <div className="stat-card">
//             <p className="stat-title">Budget Spent</p>
//             <p className="stat-value">$45,987</p>
//           </div>

//           <button className="new-campaign-btn">
//             <FaPlus className="plus-icon" /> Create New Campaign
//           </button>
//         </div>

//         {/* CURRENT CAMPAIGNS */}
//         <section className="current-campaigns">
//           <h3>Current Campaigns</h3>
//           <div className="campaigns-header">
//             <span>Campaign</span>
//             <span>Status</span>
//             <span>Influencers</span>
//             <span>Budget</span>
//             <span>Performance</span>
//           </div>

//           {campaigns.map(c => (
//             <div key={c.id} className="campaign-row">
//               <div className="campaign-cell">{c.name}</div>
//               <div className={`campaign-cell ${c.status.toLowerCase()}`}>
//                 {c.status}
//               </div>
//               <div className="campaign-cell">{c.influencers_count}</div>
//               <div className="campaign-cell">${c.budget}</div>
//               <div className="campaign-cell">{c.performance}</div>
//             </div>
//           ))}
//         </section>

//         {/* NOTIFICATIONS & MESSAGES */}
//         <div className="bottom-row">
//           <div className="notifications-panel">
//             <h4>Recent Notifications</h4>
//             <ul>
//               {notifications.map(n => (
//                 <li key={n.id}>{n.message}</li>
//               ))}
//             </ul>
//           </div>
//           <div className="messages-panel">
//             <h4>Recent Messages</h4>
//             {messages.map(m => (
//               <div key={m.id} className="message">
//                 <p className="message-sender">{m.sender_name}</p>
//                 <p className="message-snippet">{m.snippet}</p>
//                 <span className="message-time">
//                   {new Date(m.sent_at).toLocaleTimeString()}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default BrandDashboard;



// import React, { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FaBell, FaEnvelope, FaPlus, FaBars, FaTrash, FaEye } from 'react-icons/fa';
// import { supabase } from '../supabase';
// import '../styles/BrandDashboard.css';

// function BrandDashboard() {
//   const [campaigns, setCampaigns] = useState([]);
//   const [notifications, setNotifications] = useState([]);
//   const [messages, setMessages] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [newCampaignName, setNewCampaignName] = useState('');
//   const navigate = useNavigate();
//   const sidebarRef = useRef(null);

//   useEffect(() => {
//     fetchDashboardData();
//     // Add event listener for swipe to close sidebar on mobile
//     document.addEventListener('touchstart', handleTouchStart, { passive: false });
//     document.addEventListener('touchmove', handleTouchMove, { passive: false });
//     return () => {
//       document.removeEventListener('touchstart', handleTouchStart);
//       document.removeEventListener('touchmove', handleTouchMove);
//     };
//   }, []);

//   // Swipe to close sidebar logic
//   let touchStartX = 0;
//   const handleTouchStart = (e) => {
//     touchStartX = e.touches[0].clientX;
//   };

//   const handleTouchMove = (e) => {
//     if (!sidebarOpen) return;
//     const touchEndX = e.touches[0].clientX;
//     const diffX = touchEndX - touchStartX;
//     if (diffX > 100) {
//       setSidebarOpen(false); // Close sidebar on right swipe
//     }
//   };

//   const fetchDashboardData = async (retries = 3) => {
//     setLoading(true);
//     setError(null);

//     let attempt = 0;
//     while (attempt < retries) {
//       try {
//         // 1) Get current user
//         const {
//           data: { user },
//           error: userErr,
//         } = await supabase.auth.getUser();
//         if (userErr || !user) {
//           throw new Error('Could not authenticate. Please log in again.');
//         }
//         const brandId = user.id;

//         // 2) Fetch campaigns
//         const { data: campData, error: campErr } = await supabase
//           .from('campaigns')
//           .select('*')
//           .eq('brand_id', brandId);
//         if (campErr) throw campErr;
//         setCampaigns(campData);

//         // 3) Fetch notifications (latest 5)
//         const { data: notifData, error: notifErr } = await supabase
//           .from('notifications')
//           .select('*')
//           .eq('brand_id', brandId)
//           .order('created_at', { ascending: false })
//           .limit(5);
//         if (notifErr) throw notifErr;
//         setNotifications(notifData);

//         // 4) Fetch messages (latest 5)
//         const { data: msgData, error: msgErr } = await supabase
//           .from('messages')
//           .select('*')
//           .eq('brand_id', brandId)
//           .order('sent_at', { ascending: false })
//           .limit(5);
//         if (msgErr) throw msgErr;
//         setMessages(msgData);

//         break; // Exit retry loop on success
//       } catch (fetchErr) {
//         console.error('Dashboard fetch error:', fetchErr);
//         attempt++;
//         if (attempt === retries) {
//           setError('Failed to load dashboard data. Please try again.');
//         }
//         await new Promise((resolve) => setTimeout(resolve, 2000 * attempt)); // Exponential backoff
//       } finally {
//         setLoading(false);
//       }
//     }
//   };

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   // Handle clicks outside sidebar to close it
//   const handleClickOutside = (e) => {
//     if (sidebarOpen && sidebarRef.current && !sidebarRef.current.contains(e.target)) {
//       setSidebarOpen(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, [sidebarOpen]);

//   // Navigation logic for sidebar
//   const handleNavClick = (route) => {
//     setSidebarOpen(false); // Close sidebar on navigation
//     switch (route) {
//       case 'My Campaigns':
//         navigate('/brand-dashboard');
//         break;
//       case 'Hire an Influencer':
//         navigate('/hire-influencer');
//         break;
//       case 'Search Creators':
//         navigate('/search-creators');
//         break;
//       case 'Calendar':
//         navigate('/calendar');
//         break;
//       case 'Analytics':
//         navigate('/analytics');
//         break;
//       default:
//         break;
//     }
//   };

//   // Create new campaign
//   const handleCreateCampaign = async (e) => {
//     e.preventDefault();
//     if (!newCampaignName.trim()) {
//       setError('Campaign name is required.');
//       return;
//     }

//     setLoading(true);
//     try {
//       const {
//         data: { user },
//       } = await supabase.auth.getUser();
//       const brandId = user.id;

//       const { error } = await supabase.from('campaigns').insert([
//         {
//           brand_id: brandId,
//           name: newCampaignName,
//           status: 'Pending',
//           influencers_count: 0,
//           budget: 0,
//           performance: 'N/A',
//         },
//       ]);
//       if (error) throw error;

//       setNewCampaignName('');
//       await fetchDashboardData(); // Refresh campaigns
//     } catch (err) {
//       console.error('Create campaign error:', err);
//       setError('Failed to create campaign.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Delete campaign
//   const handleDeleteCampaign = async (campaignId) => {
//     if (!window.confirm('Are you sure you want to delete this campaign?')) return;

//     setLoading(true);
//     try {
//       const { error } = await supabase.from('campaigns').delete().eq('id', campaignId);
//       if (error) throw error;
//       await fetchDashboardData(); // Refresh campaigns
//     } catch (err) {
//       console.error('Delete campaign error:', err);
//       setError('Failed to delete campaign.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   // View campaign details (placeholder for navigation)
//   const handleViewCampaign = (campaignId) => {
//     navigate(`/campaign/${campaignId}`);
//   };

//   // Mark notification as read
//   const handleMarkNotificationRead = async (notificationId) => {
//     try {
//       const { error } = await supabase
//         .from('notifications')
//         .update({ read: true })
//         .eq('id', notificationId);
//       if (error) throw error;
//       setNotifications((prev) =>
//         prev.map((n) => (n.id === notificationId ? { ...n, read: true } : n))
//       );
//     } catch (err) {
//       console.error('Mark notification read error:', err);
//       setError('Failed to mark notification as read.');
//     }
//   };

//   // Reply to message (placeholder)
//   const handleReplyMessage = (messageId) => {
//     alert(`Replying to message ${messageId} (Placeholder)`);
//     // Implement reply logic, e.g., open a modal or navigate to a messaging page
//   };

//   if (loading) return <div className="dashboard-loading">Loading dashboard…</div>;
//   if (error) return <div className="dashboard-error">Error: {error}</div>;

//   return (
//     <div className="brand-dashboard">
//       {/* SIDEBAR TOGGLE BUTTON */}
//       <button
//         className="sidebar-toggle"
//         onClick={toggleSidebar}
//         aria-label="Toggle sidebar"
//       >
//         <FaBars />
//       </button>

//       {/* SIDEBAR */}
//       <aside ref={sidebarRef} className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
//         <div className="brand-logo">Brand Logo</div>
//         <nav className="sidebar-nav">
//           <ul>
//             {['My Campaigns', 'Hire an Influencer', 'Search Creators', 'Calendar', 'Analytics'].map(
//               (item) => (
//                 <li key={item} onClick={() => handleNavClick(item)}>
//                   {item}
//                 </li>
//               )
//             )}
//           </ul>
//         </nav>
//       </aside>

//       {/* MAIN CONTENT */}
//       <main className="main-content">
//         {/* TOP BAR */}
//         <div className="topbar">
//           <h2>Brand Dashboard</h2>
//           <div className="topbar-icons">
//             <FaBell className="icon" />
//             <FaEnvelope className="icon" />
//           </div>
//         </div>

//         {/* STATS & NEW CAMPAIGN */}
//         <div className="stats-section">
//           <div className="stat-card">
//             <p className="stat-title">Active Campaigns</p>
//             <p className="stat-value">
//               {campaigns.filter((c) => c.status === 'Active').length}
//             </p>
//           </div>
//           <div className="stat-card">
//             <p className="stat-title">Total Reach</p>
//             <p class="stat-value">2.4M</p>
//           </div>
//           <div className="stat-card">
//             <p className="stat-title">Engagement Rate</p>
//             <p className="stat-value">4.8%</p>
//           </div>
//           <div className="stat-card">
//             <p className="stat-title">Budget Spent</p>
//             <p className="stat-value">$45,987</p>
//           </div>

//           <form onSubmit={handleCreateCampaign} className="new-campaign-form">
//             <input
//               type="text"
//               value={newCampaignName}
//               onChange={(e) => setNewCampaignName(e.target.value)}
//               placeholder="New campaign name"
//               className="new-campaign-input"
//               disabled={loading}
//             />
//             <button type="submit" className="new-campaign-btn" disabled={loading}>
//               <FaPlus className="plus-icon" /> Create
//             </button>
//           </form>
//         </div>

//         {/* CURRENT CAMPAIGNS */}
//         <section className="current-campaigns">
//           <h3>Current Campaigns</h3>
//           <div className="campaigns-header">
//             <span>Campaign</span>
//             <span>Status</span>
//             <span>Influencers</span>
//             <span>Budget</span>
//             <span>Performance</span>
//             <span>Actions</span>
//           </div>

//           {campaigns.map((c) => (
//             <div key={c.id} className="campaign-row">
//               <div className="campaign-cell" data-label="Campaign">
//                 {c.name}
//               </div>
//               <div
//                 className={`campaign-cell ${c.status.toLowerCase()}`}
//                 data-label="Status"
//               >
//                 {c.status}
//               </div>
//               <div className="campaign-cell" data-label="Influencers">
//                 {c.influencers_count}
//               </div>
//               <div className="campaign-cell" data-label="Budget">
//                 ${c.budget}
//               </div>
//               <div className="campaign-cell" data-label="Performance">
//                 {c.performance}
//               </div>
//               <div className="campaign-cell" data-label="Actions">
//                 <button
//                   onClick={() => handleViewCampaign(c.id)}
//                   className="action-btn"
//                   aria-label="View campaign"
//                 >
//                   <FaEye />
//                 </button>
//                 <button
//                   onClick={() => handleDeleteCampaign(c.id)}
//                   className="action-btn"
//                   aria-label="Delete campaign"
//                 >
//                   <FaTrash />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </section>

//         {/* NOTIFICATIONS & MESSAGES */}
//         <div className="bottom-row">
//           <div className="notifications-panel">
//             <h4>Recent Notifications</h4>
//             <ul>
//               {notifications.map((n) => (
//                 <li
//                   key={n.id}
//                   className={n.read ? 'notification-read' : 'notification-unread'}
//                   onClick={() => handleMarkNotificationRead(n.id)}
//                 >
//                   {n.message}
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div className="messages-panel">
//             <h4>Recent Messages</h4>
//             {messages.map((m) => (
//               <div key={m.id} className="message" onClick={() => handleReplyMessage(m.id)}>
//                 <p className="message-sender">{m.sender_name}</p>
//                 <p className="message-snippet">{m.snippet}</p>
//                 <span className="message-time">
//                   {new Date(m.sent_at).toLocaleTimeString()}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default BrandDashboard;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBell, FaEnvelope, FaPlus, FaTrash, FaEye } from 'react-icons/fa';
import { supabase } from '../supabase';
import '../styles/BrandDashboard.css';

function BrandDashboard() {
  const [campaigns, setCampaigns] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newCampaignName, setNewCampaignName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async (retries = 3) => {
    setLoading(true);
    setError(null);

    let attempt = 0;
    while (attempt < retries) {
      try {
        // Get current user
        const {
          data: { user },
          error: userErr,
        } = await supabase.auth.getUser();
        if (userErr || !user) {
          throw new Error('Could not authenticate. Please log in again.');
        }
        const brandId = user.id;

        // Fetch campaigns
        const { data: campData, error: campErr } = await supabase
          .from('campaigns')
          .select('*')
          .eq('brand_id', brandId);
        if (campErr) throw campErr;
        setCampaigns(campData);

        // Fetch notifications (latest 5)
        const { data: notifData, error: notifErr } = await supabase
          .from('notifications')
          .select('*')
          .eq('brand_id', brandId)
          .order('created_at', { ascending: false })
          .limit(5);
        if (notifErr) throw notifErr;
        setNotifications(notifData);

        // Fetch messages (latest 5)
        const { data: msgData, error: msgErr } = await supabase
          .from('messages')
          .select('*')
          .eq('brand_id', brandId)
          .order('sent_at', { ascending: false })
          .limit(5);
        if (msgErr) throw msgErr;
        setMessages(msgData);

        break; // Exit retry loop on success
      } catch (fetchErr) {
        console.error('Dashboard fetch error:', fetchErr);
        attempt++;
        if (attempt === retries) {
          setError('Failed to load dashboard data. Please try again.');
        }
        await new Promise((resolve) => setTimeout(resolve, 2000 * attempt)); // Exponential backoff
      } finally {
        setLoading(false);
      }
    }
  };

  // Create new campaign
  const handleCreateCampaign = async (e) => {
    e.preventDefault();
    if (!newCampaignName.trim()) {
      setError('Campaign name is required.');
      return;
    }

    setLoading(true);
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      const brandId = user.id;

      const { error } = await supabase.from('campaigns').insert([
        {
          brand_id: brandId,
          name: newCampaignName,
          status: 'Pending',
          influencers_count: 0,
          budget: 0,
          performance: 'N/A',
        },
      ]);
      if (error) throw error;

      setNewCampaignName('');
      await fetchDashboardData(); // Refresh campaigns
    } catch (err) {
      console.error('Create campaign error:', err);
      setError('Failed to create campaign.');
    } finally {
      setLoading(false);
    }
  };

  // Delete campaign
  const handleDeleteCampaign = async (campaignId) => {
    if (!window.confirm('Are you sure you want to delete this campaign?')) return;

    setLoading(true);
    try {
      const { error } = await supabase.from('campaigns').delete().eq('id', campaignId);
      if (error) throw error;
      await fetchDashboardData(); // Refresh campaigns
    } catch (err) {
      console.error('Delete campaign error:', err);
      setError('Failed to delete campaign.');
    } finally {
      setLoading(false);
    }
  };

  // View campaign details
  const handleViewCampaign = (campaignId) => {
    navigate(`/campaign/${campaignId}`);
  };

  // Mark notification as read
  const handleMarkNotificationRead = async (notificationId) => {
    try {
      const { error } = await supabase
        .from('notifications')
        .update({ read: true })
        .eq('id', notificationId);
      if (error) throw error;
      setNotifications((prev) =>
        prev.map((n) => (n.id === notificationId ? { ...n, read: true } : n))
      );
    } catch (err) {
      console.error('Mark notification read error:', err);
      setError('Failed to mark notification as read.');
    }
  };

  // Reply to message (placeholder)
  const handleReplyMessage = (messageId) => {
    alert(`Replying to message ${messageId} (Placeholder)`);
    // Implement reply logic, e.g., open a modal or navigate to a messaging page
  };

  if (loading) return <div className="dashboard-loading">Loading dashboard…</div>;
  if (error) return <div className="dashboard-error">Error: {error}</div>;

  return (
    <div className="brand-dashboard">
      {/* MAIN CONTENT */}
      <main className="main-content">
        {/* TOP BAR */}
        <div className="topbar">
          <h2>Brand Dashboard</h2>
          <div className="topbar-icons">
            <FaBell className="icon" />
            <FaEnvelope className="icon" />
          </div>
        </div>

        {/* STATS & NEW CAMPAIGN */}
        <div className="stats-section">
          <div className="stat-card">
            <p className="stat-title">Active Campaigns</p>
            <p className="stat-value">
              {campaigns.filter((c) => c.status === 'Active').length}
            </p>
          </div>
          <div className="stat-card">
            <p className="stat-title">Total Reach</p>
            <p className="stat-value">2.4M</p>
          </div>
          <div className="stat-card">
            <p className="stat-title">Engagement Rate</p>
            <p className="stat-value">4.8%</p>
          </div>
          <div className="stat-card">
            <p className="stat-title">Budget Spent</p>
            <p className="stat-value">$45,987</p>
          </div>

          <form onSubmit={handleCreateCampaign} className="new-campaign-form">
            <input
              type="text"
              value={newCampaignName}
              onChange={(e) => setNewCampaignName(e.target.value)}
              placeholder="New campaign name"
              className="new-campaign-input"
              disabled={loading}
            />
            <button type="submit" className="new-campaign-btn" disabled={loading}>
              <FaPlus className="plus-icon" /> Create
            </button>
          </form>
        </div>

        {/* CURRENT CAMPAIGNS */}
        <section className="current-campaigns">
          <h3>Current Campaigns</h3>
          <div className="campaigns-header">
            <span>Campaign</span>
            <span>Status</span>
            <span>Influencers</span>
            <span>Budget</span>
            <span>Performance</span>
            <span>Actions</span>
          </div>

          {campaigns.map((c) => (
            <div key={c.id} className="campaign-row">
              <div className="campaign-cell" data-label="Campaign">
                {c.name}
              </div>
              <div
                className={`campaign-cell ${c.status.toLowerCase()}`}
                data-label="Status"
              >
                {c.status}
              </div>
              <div className="campaign-cell" data-label="Influencers">
                {c.influencers_count}
              </div>
              <div className="campaign-cell" data-label="Budget">
                ${c.budget}
              </div>
              <div className="campaign-cell" data-label="Performance">
                {c.performance}
              </div>
              <div className="campaign-cell" data-label="Actions">
                <button
                  onClick={() => handleViewCampaign(c.id)}
                  className="action-btn"
                  aria-label="View campaign"
                >
                  <FaEye />
                </button>
                <button
                  onClick={() => handleDeleteCampaign(c.id)}
                  className="action-btn"
                  aria-label="Delete campaign"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </section>

        {/* NOTIFICATIONS & MESSAGES */}
        <div className="bottom-row">
          <div className="notifications-panel">
            <h4>Recent Notifications</h4>
            <ul>
              {notifications.map((n) => (
                <li
                  key={n.id}
                  className={n.read ? 'notification-read' : 'notification-unread'}
                  onClick={() => handleMarkNotificationRead(n.id)}
                >
                  {n.message}
                </li>
              ))}
            </ul>
          </div>
          <div className="messages-panel">
            <h4>Recent Messages</h4>
            {messages.map((m) => (
              <div key={m.id} className="message" onClick={() => handleReplyMessage(m.id)}>
                <p className="message-sender">{m.sender_name}</p>
                <p className="message-snippet">{m.snippet}</p>
                <span className="message-time">
                  {new Date(m.sent_at).toLocaleTimeString()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default BrandDashboard;