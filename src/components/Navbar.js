// import React from 'react';
// import '../styles/Navbar.css';

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <div className="nav-left">
//         <span className="nav-logo">Influence.local</span>
//       </div>

//       <div className="nav-right">
//         <a href="#howitworks">How It Works</a>
//         <a href="#forbrands">For Brands</a>
//         <a href="#forinfluencers">For Influencers</a>
//         <a href="#login">Login</a>
//         <button className="signup-btn">Sign Up</button>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;



// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { supabase } from '../supabase'; // Adjust path based on your setup
// import '../styles/Navbar.css';

// function Navbar() {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);
//   const [userRole, setUserRole] = useState(null);

//   // Check authentication status on mount
//   useEffect(() => {
//     const checkUser = async () => {
//       try {
//         const { data: { user } } = await supabase.auth.getUser();
//         if (user) {
//           setUser(user);
//           // Fetch user role
//           const { data, error } = await supabase
//             .from('users')
//             .select('role')
//             .eq('id', user.id)
//             .single();
//           if (error) throw error;
//           setUserRole(data.role);
//         }
//       } catch (error) {
//         console.error('Error checking user:', error.message);
//       }
//     };

//     checkUser();

//     // Listen for auth changes
//     const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
//       setUser(session?.user ?? null);
//       if (session?.user) {
//         checkUser();
//       } else {
//         setUserRole(null);
//       }
//     });

//     return () => authListener.subscription.unsubscribe();
//   }, []);

//   // Handle sign-up button click
//   const handleSignUp = () => {
//     navigate('/signup-brand'); // Default to brand sign-up; could be a wrapper page
//   };

//   // Handle logout
//   const handleLogout = async () => {
//     try {
//       await supabase.auth.signOut();
//       navigate('/');
//     } catch (error) {
//       console.error('Logout error:', error.message);
//     }
//   };

//   return (
//     <nav className="navbar">
//       <div className="nav-left">
//         <Link to="/" className="nav-logo">Influence.local</Link>
//       </div>

//       <div className="nav-right">
//         {user ? (
//           <>
//             <Link to={userRole === 'brand' ? '/brand-dashboard' : '/dashboard'}>Dashboard</Link>
//             <button className="logout-btn" onClick={handleLogout}>Logout</button>
//           </>
//         ) : (
//           <>
//             <Link to="/how-it-works">How It Works</Link>
//             <Link to="/for-brands">For Brands</Link>
//             <Link to="/for-influencers">For Influencers</Link>
//             <Link to="/login">Login</Link>
//             <button className="signup-btn" onClick={handleSignUp}>Sign Up</button>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;



// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { FaTachometerAlt, FaBullhorn, FaChartLine, FaWallet, FaCog, FaHome, FaInfoCircle, FaSignInAlt, FaDollarSign } from 'react-icons/fa';
// import '../styles/Navbar.css';

// const navItems = [
//   { id: 'home', label: 'Home', icon: <FaHome />, path: '/' },
//   { id: 'dashboard', label: 'Dashboard', icon: <FaTachometerAlt />, path: '/dashboard' },
//   { id: 'campaigns', label: 'Campaigns', icon: <FaBullhorn />, path: '/CampaignListingPage' },
//   { id: 'analytics', label: 'Analytics', icon: <FaChartLine />, path: '/analytics' },
//   { id: 'earnings', label: 'Earnings', icon: <FaWallet />, path: '/earnings' },
//   { id: 'settings', label: 'Settings', icon: <FaCog />, path: '/settings' },
//   { id: 'about', label: 'About', icon: <FaInfoCircle />, path: '/about' },
//   { id: 'login', label: 'Login', icon: <FaSignInAlt />, path: '/login' },
//   { id: 'pricing', label: 'Pricing', icon: <FaDollarSign />, path: '/pricing' },
// ];

// const Navbar = () => {
//   return (
//     <aside className="navbar">
//       <h1 className="navbar__logo">InfluenceHub</h1>
//       <nav className="navbar__nav">
//         {navItems.map((item) => (
//           <NavLink
//             key={item.id}
//             to={item.path}
//             className={({ isActive }) =>
//               `navbar__item${isActive ? ' navbar__item--active' : ''}`
//             }
//           >
//             <span className="navbar__icon">{item.icon}</span>
//             {item.label}
//           </NavLink>
//         ))}
//       </nav>
//     </aside>
//   );
// };

// export default Navbar;


// import React, { useState, useEffect, useRef } from 'react';
// import { NavLink } from 'react-router-dom';
// import { FaTachometerAlt, FaBullhorn, FaChartLine, FaWallet, FaCog, FaHome, FaInfoCircle, FaSignInAlt, FaDollarSign, FaBars } from 'react-icons/fa';
// import { supabase } from '../supabase'; // Import Supabase client
// import '../styles/Navbar.css';

// const navItems = [
//   { id: 'home', label: 'Home', icon: <FaHome />, path: '/', authRequired: false },
//   { id: 'dashboard', label: 'Dashboard', icon: <FaTachometerAlt />, path: '/dashboard', authRequired: true },
//   { id: 'campaigns', label: 'Campaigns', icon: <FaBullhorn />, path: '/CampaignListingPage', authRequired: true },
//   { id: 'analytics', label: 'Analytics', icon: <FaChartLine />, path: '/analytics', authRequired: true },
//   { id: 'earnings', label: 'Earnings', icon: <FaWallet />, path: '/earnings', authRequired: true },
//   { id: 'settings', label: 'Settings', icon: <FaCog />, path: '/settings', authRequired: true },
//   { id: 'about', label: 'About', icon: <FaInfoCircle />, path: '/about', authRequired: false },
//   { id: 'login', label: 'Login', icon: <FaSignInAlt />, path: '/login', authRequired: false, hideWhenAuthenticated: true },
//   { id: 'pricing', label: 'Pricing', icon: <FaDollarSign />, path: '/pricing', authRequired: false },
// ];

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [user, setUser] = useState(null);
//   const menuRef = useRef(null);

//   // Check authentication status
//   useEffect(() => {
//     const fetchUser = async () => {
//       const { data: { user } } = await supabase.auth.getUser();
//       setUser(user);
//     };
//     fetchUser();

//     // Listen for auth state changes
//     const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
//       setUser(session?.user || null);
//     });

//     return () => {
//       authListener.subscription.unsubscribe();
//     };
//   }, []);

//   // Swipe to close menu
//   useEffect(() => {
//     const handleTouchStart = (e) => {
//       touchStartX = e.touches[0].clientX;
//     };
//     const handleTouchMove = (e) => {
//       if (!menuOpen) return;
//       const touchEndX = e.touches[0].clientX;
//       const diffX = touchEndX - touchStartX;
//       if (diffX > 100) {
//         setMenuOpen(false); // Close menu on right swipe
//       }
//     };
//     let touchStartX = 0;
//     document.addEventListener('touchstart', handleTouchStart, { passive: false });
//     document.addEventListener('touchmove', handleTouchMove, { passive: false });
//     return () => {
//       document.removeEventListener('touchstart', handleTouchStart);
//       document.removeEventListener('touchmove', handleTouchMove);
//     };
//   }, [menuOpen]);

//   // Close menu on click outside
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (menuOpen && menuRef.current && !menuRef.current.contains(e.target)) {
//         setMenuOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, [menuOpen]);

//   // Close menu on Escape key
//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (e.key === 'Escape' && menuOpen) {
//         setMenuOpen(false);
//       }
//     };
//     document.addEventListener('keydown', handleKeyDown);
//     return () => document.removeEventListener('keydown', handleKeyDown);
//   }, [menuOpen]);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   // Filter nav items based on authentication
//   const filteredNavItems = navItems.filter((item) => {
//     if (item.hideWhenAuthenticated && user) return false; // Hide login when authenticated
//     if (item.authRequired && !user) return false; // Hide auth-required items when not authenticated
//     return true;
//   });

//   return (
//     <>
//       <button
//         className="navbar-toggle"
//         onClick={toggleMenu}
//         aria-label="Toggle navigation menu"
//       >
//         <FaBars />
//       </button>
//       <aside ref={menuRef} className={`navbar ${menuOpen ? 'navbar--open' : 'navbar--closed'}`}>
//         <h1 className="navbar__logo">InfluenceHub</h1>
//         <nav className="navbar__nav">
//           {filteredNavItems.map((item) => (
//             <NavLink
//               key={item.id}
//               to={item.path}
//               className={({ isActive }) =>
//                 `navbar__item${isActive ? ' navbar__item--active' : ''}`
//               }
//               onClick={() => setMenuOpen(false)} // Close menu on item click
//             >
//               <span className="navbar__icon">{item.icon}</span>
//               {item.label}
//             </NavLink>
//           ))}
//         </nav>
//       </aside>
//     </>
//   );
// };

// export default Navbar;


// import React, { useState, useEffect, useRef } from 'react';
// import { NavLink } from 'react-router-dom';
// import { FaTachometerAlt, FaBullhorn, FaChartLine, FaWallet, FaCog, FaHome, FaInfoCircle, FaSignInAlt, FaDollarSign, FaBars, FaUser } from 'react-icons/fa';
// import '../styles/Navbar.css';

// // Role-based nav items
// const getNavItems = (role) => {
//   const baseItems = [
//     { id: 'home', label: 'Home', icon: <FaHome />, path: '/', authRequired: false },
//     { id: 'about', label: 'About', icon: <FaInfoCircle />, path: '/about', authRequired: false },
//     { id: 'pricing', label: 'Pricing', icon: <FaDollarSign />, path: '/pricing', authRequired: false },
//     { id: 'login', label: 'Login', icon: <FaSignInAlt />, path: '/login', authRequired: false, hideWhenAuthenticated: true },
//   ];

//   const influencerItems = [
//     { id: 'dashboard', label: 'Dashboard', icon: <FaTachometerAlt />, path: '/dashboard', authRequired: true },
//     { id: 'campaigns', label: 'Campaigns', icon: <FaBullhorn />, path: '/CampaignListingPage', authRequired: true },
//     { id: 'profile', label: 'Profile', icon: <FaUser />, path: '/profile-setup', authRequired: true }, // Maps to InfluencerProfileSetup
//     { id: 'earnings', label: 'Earnings', icon: <FaWallet />, path: '/earnings', authRequired: true },
//     { id: 'settings', label: 'Settings', icon: <FaCog />, path: '/settings', authRequired: true },
//   ];

//   const brandItems = [
//     { id: 'dashboard', label: 'Dashboard', icon: <FaTachometerAlt />, path: '/brand-dashboard', authRequired: true },
//     { id: 'campaigns', label: 'Campaigns', icon: <FaBullhorn />, path: '/create-campaign', authRequired: true }, // Maps to CreateCampaign
//     { id: 'analytics', label: 'Analytics', icon: <FaChartLine />, path: '/analytics', authRequired: true },
//     { id: 'search', label: 'Search Influencers', icon: <FaUser />, path: '/search-influencers', authRequired: true },
//   ];

//   if (!role) return baseItems; // Unauthenticated
//   return role === 'influencer' ? [...baseItems, ...influencerItems] : [...baseItems, ...brandItems];
// };

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [user, setUser] = useState(null);
//   const menuRef = useRef(null);

//   // Mock authentication (no Supabase)
//   useEffect(() => {
//     // Simulate user login
//     setUser({ id: 'mock-user', role: 'influencer' }); // Change to 'brand' for Brand flow testing
//   }, []);

//   // Swipe to close menu
//   useEffect(() => {
//     const handleTouchStart = (e) => {
//       touchStartX = e.touches[0].clientX;
//     };
//     const handleTouchMove = (e) => {
//       if (!menuOpen) return;
//       const touchEndX = e.touches[0].clientX;
//       const diffX = touchEndX - touchStartX;
//       if (diffX > 100) {
//         setMenuOpen(false);
//       }
//     };
//     let touchStartX = 0;
//     document.addEventListener('touchstart', handleTouchStart, { passive: false });
//     document.addEventListener('touchmove', handleTouchMove, { passive: false });
//     return () => {
//       document.removeEventListener('touchstart', handleTouchStart);
//       document.removeEventListener('touchmove', handleTouchMove);
//     };
//   }, [menuOpen]);

//   // Close menu on click outside
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (menuOpen && menuRef.current && !menuRef.current.contains(e.target)) {
//         setMenuOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, [menuOpen]);

//   // Close menu on Escape key
//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (e.key === 'Escape' && menuOpen) {
//         setMenuOpen(false);
//       }
//     };
//     document.addEventListener('keydown', handleKeyDown);
//     return () => document.removeEventListener('keydown', handleKeyDown);
//   }, [menuOpen]);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   // Filter nav items based on authentication
//   const filteredNavItems = getNavItems(user?.role).filter((item) => {
//     if (item.hideWhenAuthenticated && user) return false;
//     if (item.authRequired && !user) return false;
//     return true;
//   });

//   return (
//     <>
//       <button
//         className="navbar-toggle"
//         onClick={toggleMenu}
//         aria-label="Toggle navigation menu"
//       >
//         <FaBars />
//       </button>
//       <aside ref={menuRef} className={`navbar ${menuOpen ? 'navbar--open' : 'navbar--closed'}`}>
//         <h1 className="navbar__logo">InfluenceHub</h1>
//         <nav className="navbar__nav">
//           {filteredNavItems.map((item) => (
//             <NavLink
//               key={item.id}
//               to={item.path}
//               className={({ isActive }) =>
//                 `navbar__item${isActive ? ' navbar__item--active' : ''}`
//               }
//               onClick={() => setMenuOpen(false)}
//             >
//               <span className="navbar__icon">{item.icon}</span>
//               {item.label}
//             </NavLink>
//           ))}
//         </nav>
//       </aside>
//     </>
//   );
// };

// export default Navbar;


import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaTachometerAlt, FaBullhorn, FaChartLine, FaWallet, FaCog, FaHome, FaInfoCircle, FaSignInAlt, FaDollarSign, FaBars, FaUser, FaSignOutAlt } from 'react-icons/fa';
import '../styles/Navbar.css';

// Role-based nav items
const getNavItems = (role) => {
  const baseItems = [
    { id: 'home', label: 'Home', icon: <FaHome />, path: '/', authRequired: false },
    { id: 'about', label: 'About', icon: <FaInfoCircle />, path: '/about', authRequired: false },
    { id: 'pricing', label: 'Pricing', icon: <FaDollarSign />, path: '/pricing', authRequired: false },
    { id: 'login', label: 'Login', icon: <FaSignInAlt />, path: '/login', authRequired: false, hideWhenAuthenticated: true },
  ];

  const influencerItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <FaTachometerAlt />, path: '/dashboard', authRequired: true },
    { id: 'campaigns', label: 'Campaigns', icon: <FaBullhorn />, path: '/CampaignListingPage', authRequired: true },
    { id: 'profile', label: 'Profile', icon: <FaUser />, path: '/profile-setup', authRequired: true },
    { id: 'earnings', label: 'Earnings', icon: <FaWallet />, path: '/earnings', authRequired: true },
    { id: 'settings', label: 'Settings', icon: <FaCog />, path: '/settings', authRequired: true },
    { id: 'logout', label: 'Logout', icon: <FaSignOutAlt />, path: '#', authRequired: true },
  ];

  const brandItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <FaTachometerAlt />, path: '/brand-dashboard', authRequired: true },
    { id: 'campaigns', label: 'Campaigns', icon: <FaBullhorn />, path: '/create-campaign', authRequired: true },
    { id: 'analytics', label: 'Analytics', icon: <FaChartLine />, path: '/analytics', authRequired: true },
    { id: 'search', label: 'Search Influencers', icon: <FaUser />, path: '/search-influencers', authRequired: true },
    { id: 'logout', label: 'Logout', icon: <FaSignOutAlt />, path: '#', authRequired: true },
  ];

  if (!role) return baseItems;
  return role === 'influencer' ? [...baseItems, ...influencerItems] : [...baseItems, ...brandItems];
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  // Mock authentication (no Supabase)
  useEffect(() => {
    // Simulate user login
    setUser({ id: 'mock-user', role: 'influencer' });
  }, []);

  // Handle logout
  const handleLogout = () => {
    setUser(null);
    setMenuOpen(false);
    navigate('/login');
  };

  // Swipe to close menu
  useEffect(() => {
    const handleTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
    };
    const handleTouchMove = (e) => {
      if (!menuOpen) return;
      const touchEndX = e.touches[0].clientX;
      const diffX = touchEndX - touchStartX;
      if (diffX > 100) {
        setMenuOpen(false);
      }
    };
    let touchStartX = 0;
    document.addEventListener('touchstart', handleTouchStart, { passive: false });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, [menuOpen]);

  // Close menu on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Filter nav items based on authentication
  const filteredNavItems = getNavItems(user?.role).filter((item) => {
    if (item.hideWhenAuthenticated && user) return false;
    if (item.authRequired && !user) return false;
    return true;
  });

  return (
    <>
      <button
        className="navbar-toggle"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <FaBars />
      </button>
      <aside ref={menuRef} className={`navbar ${menuOpen ? 'navbar--open' : 'navbar--closed'}`}>
        <h1 className="navbar__logo">InfluenceHub</h1>
        <nav className="navbar__nav">
          {filteredNavItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                `navbar__item${isActive && item.id !== 'logout' ? ' navbar__item--active' : ''}`
              }
              onClick={(e) => {
                if (item.id === 'logout') {
                  e.preventDefault();
                  handleLogout();
                } else {
                  setMenuOpen(false);
                }
              }}
            >
              <span className="navbar__icon">{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Navbar;