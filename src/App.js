// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import HomePage from './components/HomePage';
// import AboutPage from './components/AboutPage';
// import CampaignPage from './components/CampaignPage';
// import LoginPage from './components/LoginPage';
// import SignupBrandPage from './components/SignupBrandPage';
// import SignupInfluencerPage from './components/SignupInfluencerPage';
// import PricingPage from './components/PricingPage';
// import InfluencerDashboard from './components/InfluencerDashboard';
// import InfluencerProfileSetup from './components/InfluencerProfileSetup';
// import BrandDashboard from './components/BrandDashboard';
// import CreateCampaign from './components/CreateCampaign';
// import InfluencerSearchPage from './components/InfluencerSearchPage';
// import InfluencerProfilePublic from './components/InfluencerProfilePublic';
// import PostJobPage from './components/PostJobPage';
// import ContentCalendar from './components/ContentCalendar';
// import AnalyticsDashboard from './components/AnalyticsDashboard';
// import CampaignListingPage from './components/CampaignListingPage';
// import CampaignDetailsPage from './components/CampaignDetailsPage';

// import './App.css';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         {/* Navbar is displayed on all pages */}
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/campaign" element={<CampaignPage />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/signup-brand" element={<SignupBrandPage />} />
//           <Route path="/signup-influencer" element={<SignupInfluencerPage />} />
//           <Route path="/pricing" element={<PricingPage />} />
//           <Route path="/about" element={<AboutPage />} />
//           <Route path="/post-job" element={<PostJobPage />} />
//           <Route path="/dashboard" element={<InfluencerDashboard />} />
//           <Route path="/profile-setup" element={<InfluencerProfileSetup />} />
//           <Route path="/resources" element={<div>Resources Page</div>} />
//           <Route path="/how-it-works" element={<div>How It Works</div>} />
//           <Route path="/influencer-profile" element={<InfluencerProfilePublic />} />
//           <Route path="/brand-dashboard" element={<BrandDashboard />} />
//           <Route path="/for-brands" element={<div>For Brands</div>} />
//           <Route path="/for-influencers" element={<div>For Influencers</div>} />
//           <Route path="/content-calendar" element={<ContentCalendar />} />
//           <Route path="/create-campaign" element={<CreateCampaign />} />
//           <Route path="/search-influencers" element={<InfluencerSearchPage />} />
//           <Route path="/campaign/:id" element={<CampaignDetailsPage />} />
//           <Route path="/analytics" element={<AnalyticsDashboard />} />
//           <Route path="/CampaignListingPage" element={<CampaignListingPage />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;




// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import HomePage from './components/HomePage';
// import AboutPage from './components/AboutPage';
// import CampaignPage from './components/CampaignPage';
// import LoginPage from './components/LoginPage';
// import SignupBrandPage from './components/SignupBrandPage';
// import SignupInfluencerPage from './components/SignupInfluencerPage';
// import PricingPage from './components/PricingPage';
// import InfluencerDashboard from './components/InfluencerDashboard';
// import InfluencerProfileSetup from './components/InfluencerProfileSetup';
// import BrandDashboard from './components/BrandDashboard';
// import CreateCampaign from './components/CreateCampaign';
// import InfluencerSearchPage from './components/InfluencerSearchPage';
// import InfluencerProfilePublic from './components/InfluencerProfilePublic';
// import PostJobPage from './components/PostJobPage';
// import ContentCalendar from './components/ContentCalendar';
// import AnalyticsDashboard from './components/AnalyticsDashboard';
// import CampaignListingPage from './components/CampaignListingPage';
// import CampaignDetailsPage from './components/CampaignDetailsPage';

// import './App.css';

// // Wrapper component to handle conditional rendering of Navbar
// function AppContent() {
//   const location = useLocation();
//   // Define routes where the sidebar should be hidden
//   const hideSidebarRoutes = [
//     '/login',
//     '/signup-brand',
//     '/signup-influencer',
//     '/',
//     '/about',
//     '/pricing',
//     '/campaign',
//     '/resources',
//     '/how-it-works',
//     '/for-brands',
//     '/for-influencers',
//     '/post-job',
//     '/influencer-profile',
//   ];
//   const shouldShowSidebar = !hideSidebarRoutes.includes(location.pathname);

//   return (
//     <div className="App">
//       {shouldShowSidebar && <Navbar />}
//       <main className={shouldShowSidebar ? 'main-content' : 'main-content-full'}>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/campaign" element={<CampaignPage />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/signup-brand" element={<SignupBrandPage />} />
//           <Route path="/signup-influencer" element={<SignupInfluencerPage />} />
//           <Route path="/pricing" element={<PricingPage />} />
//           <Route path="/about" element={<AboutPage />} />
//           <Route path="/post-job" element={<PostJobPage />} />
//           <Route path="/dashboard" element={<InfluencerDashboard />} />
//           <Route path="/profile-setup" element={<InfluencerProfileSetup />} />
//           <Route path="/resources" element={<div>Resources Page</div>} />
//           <Route path="/how-it-works" element={<div>How It Works</div>} />
//           <Route path="/influencer-profile" element={<InfluencerProfilePublic />} />
//           <Route path="/brand-dashboard" element={<BrandDashboard />} />
//           <Route path="/for-brands" element={<div>For Brands</div>} />
//           <Route path="/for-influencers" element={<div>For Influencers</div>} />
//           <Route path="/content-calendar" element={<ContentCalendar />} />
//           <Route path="/create-campaign" element={<CreateCampaign />} />
//           <Route path="/search-influencers" element={<InfluencerSearchPage />} />
//           <Route path="/campaign/:id" element={<CampaignDetailsPage />} />
//           <Route path="/analytics" element={<AnalyticsDashboard />} />
//           <Route path="/CampaignListingPage" element={<CampaignListingPage />} />
//           <Route path="/earnings" element={<div>Earnings Page</div>} />
//           <Route path="/settings" element={<div>Settings Page</div>} />
//         </Routes>
//       </main>
//     </div>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <AppContent />
//     </Router>
//   );
// }

// export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import HomePage from './components/HomePage';
// import AboutPage from './components/AboutPage';
// import CampaignPage from './components/CampaignPage';
// import LoginPage from './components/LoginPage';
// import SignupBrandPage from './components/SignupBrandPage';
// import SignupInfluencerPage from './components/SignupInfluencerPage';
// import PricingPage from './components/PricingPage';
// import InfluencerDashboard from './components/InfluencerDashboard';
// import InfluencerProfileSetup from './components/InfluencerProfileSetup';
// import BrandDashboard from './components/BrandDashboard';
// import CreateCampaign from './components/CreateCampaign';
// import InfluencerSearchPage from './components/InfluencerSearchPage';
// import InfluencerProfilePublic from './components/InfluencerProfilePublic';
// import PostJobPage from './components/PostJobPage';
// import ContentCalendar from './components/ContentCalendar';
// import AnalyticsDashboard from './components/AnalyticsDashboard';
// import CampaignListingPage from './components/CampaignListingPage';
// import CampaignDetailsPage from './components/CampaignDetailsPage';
// import './App.css';

// function AppContent() {
//   const location = useLocation();
//   // Define routes where the sidebar should be hidden
//   const hideSidebarRoutes = [
//     '/login',
//     '/signup-brand',
//     '/signup-influencer',
//     '/',
//     '/about',
//     '/pricing',
//     '/campaign',
//     '/resources',
//     '/how-it-works',
//     '/for-brands',
//     '/for-influencers',
//     '/post-job',
//     '/influencer-profile',
//   ];
//   const shouldShowSidebar = !hideSidebarRoutes.includes(location.pathname);

//   return (
//     <div className="app">
//       {shouldShowSidebar && <Navbar />}
//       <main className={shouldShowSidebar ? 'main-content' : 'main-content-full'}>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/campaign" element={<CampaignPage />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/signup-brand" element={<SignupBrandPage />} />
//           <Route path="/signup-influencer" element={<SignupInfluencerPage />} />
//           <Route path="/pricing" element={<PricingPage />} />
//           <Route path="/about" element={<AboutPage />} />
//           <Route path="/post-job" element={<PostJobPage />} />
//           <Route path="/dashboard" element={<InfluencerDashboard />} />
//           <Route path="/profile-setup" element={<InfluencerProfileSetup />} />
//           <Route path="/resources" element={<div>Resources Page</div>} />
//           <Route path="/how-it-works" element={<div>How It Works</div>} />
//           <Route path="/influencer-profile" element={<InfluencerProfilePublic />} />
//           <Route path="/brand-dashboard" element={<BrandDashboard />} />
//           <Route path="/for-brands" element={<div>For Brands</div>} />
//           <Route path="/for-influencers" element={<div>For Influencers</div>} />
//           <Route path="/content-calendar" element={<ContentCalendar />} />
//           <Route path="/create-campaign" element={<CreateCampaign />} />
//           <Route path="/search-influencers" element={<InfluencerSearchPage />} />
//           <Route path="/campaign/:id" element={<CampaignDetailsPage />} />
//           <Route path="/analytics" element={<AnalyticsDashboard />} />
//           <Route path="/CampaignListingPage" element={<CampaignListingPage />} />
//           <Route path="/earnings" element={<div>Earnings Page</div>} />
//           <Route path="/settings" element={<div>Settings Page</div>} />
//         </Routes>
//       </main>
//     </div>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <AppContent />
//     </Router>
//   );
// }

// export default App;



// import React, { lazy, Suspense, useMemo, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
// import { supabase } from './supabase';
// import Navbar from './components/Navbar';
// import HomePage from './components/HomePage';
// import AboutPage from './components/AboutPage';
// import CampaignPage from './components/CampaignPage';
// import LoginPage from './components/LoginPage';
// import SignupBrandPage from './components/SignupBrandPage';
// import SignupInfluencerPage from './components/SignupInfluencerPage';
// import PricingPage from './components/PricingPage';
// import './App.css';

// // Lazy-loaded components
// const InfluencerDashboard = lazy(() => import('./components/InfluencerDashboard'));
// const InfluencerProfileSetup = lazy(() => import('./components/InfluencerProfileSetup'));
// const BrandDashboard = lazy(() => import('./components/BrandDashboard'));
// const CreateCampaign = lazy(() => import('./components/CreateCampaign'));
// const InfluencerSearchPage = lazy(() => import('./components/InfluencerSearchPage'));
// const InfluencerProfilePublic = lazy(() => import('./components/InfluencerProfilePublic'));
// const PostJobPage = lazy(() => import('./components/PostJobPage'));
// const ContentCalendar = lazy(() => import('./components/ContentCalendar'));
// const AnalyticsDashboard = lazy(() => import('./components/AnalyticsDashboard'));
// const CampaignListingPage = lazy(() => import('./components/CampaignListingPage'));
// const CampaignDetailsPage = lazy(() => import('./components/CampaignDetailsPage'));

// // Error Boundary Component
// class ErrorBoundary extends React.Component {
//   state = { hasError: false };

//   static getDerivedStateFromError() {
//     return { hasError: true };
//   }

//   render() {
//     if (this.state.hasError) {
//       return <div className="error-message">Something went wrong. Please try again.</div>;
//     }
//     return this.props.children;
//   }
// }

// // Protected Route Component
// function ProtectedRoute({ children }) {
//   const navigate = useNavigate();
//   const [user, setUser] = React.useState(null);
//   const [loading, setLoading] = React.useState(true);

//   useEffect(() => {
//     const checkAuth = async () => {
//       const { data: { user } } = await supabase.auth.getUser();
//       setUser(user);
//       setLoading(false);
//       if (!user) {
//         navigate('/login', { replace: true });
//       }
//     };
//     checkAuth();
//   }, [navigate]);

//   if (loading) return <div className="loading">Loading...</div>;
//   return user ? children : null;
// }

// // Route Configuration
// const routes = [
//   { path: '/', element: <HomePage />, fullPage: true },
//   { path: '/campaign', element: <CampaignPage />, fullPage: true },
//   { path: '/login', element: <LoginPage />, fullPage: true },
//   { path: '/signup-brand', element: <SignupBrandPage />, fullPage: true },
//   { path: '/signup-influencer', element: <SignupInfluencerPage />, fullPage: true },
//   { path: '/pricing', element: <PricingPage />, fullPage: true },
//   { path: '/about', element: <AboutPage />, fullPage: true },
//   { path: '/post-job', element: <PostJobPage />, fullPage: true },
//   { path: '/resources', element: <div>Resources Page</div>, fullPage: true },
//   { path: '/how-it-works', element: <div>How It Works</div>, fullPage: true },
//   { path: '/for-brands', element: <div>For Brands</div>, fullPage: true },
//   { path: '/for-influencers', element: <div>For Influencers</div>, fullPage: true },
//   { path: '/influencer-profile', element: <InfluencerProfilePublic />, fullPage: true },
//   { path: '/dashboard', element: <InfluencerDashboard />, protected: true },
//   { path: '/profile-setup', element: <InfluencerProfileSetup />, protected: true },
//   { path: '/brand-dashboard', element: <BrandDashboard />, protected: true },
//   { path: '/create-campaign', element: <CreateCampaign />, protected: true },
//   { path: '/search-influencers', element: <InfluencerSearchPage />, protected: true },
//   { path: '/campaign/:id', element: <CampaignDetailsPage />, protected: true },
//   { path: '/analytics', element: <AnalyticsDashboard />, protected: true },
//   { path: '/CampaignListingPage', element: <CampaignListingPage />, protected: true },
//   { path: '/content-calendar', element: <ContentCalendar />, protected: true },
//   { path: '/earnings', element: <div>Earnings Page</div>, protected: true },
//   { path: '/settings', element: <div>Settings Page</div>, protected: true },
// ];

// function AppContent() {
//   const location = useLocation();

//   // Memoized sidebar visibility
//   const shouldShowSidebar = useMemo(() => {
//     const route = routes.find((r) => {
//       if (r.path.includes(':id')) {
//         const regex = new RegExp(`^${r.path.replace(':id', '[^/]+')}$`);
//         return regex.test(location.pathname);
//       }
//       return r.path === location.pathname;
//     });
//     return route && !route.fullPage;
//   }, [location.pathname]);

//   // Focus management for accessibility
//   useEffect(() => {
//     const mainContent = document.querySelector('main');
//     if (mainContent) {
//       mainContent.focus();
//     }
//     // Restore scroll position
//     window.scrollTo(0, 0);
//   }, [location.pathname]);

//   return (
//     <div className="app">
//       {shouldShowSidebar && <Navbar />}
//       <main
//         className={shouldShowSidebar ? 'main-content' : 'main-content-full'}
//         tabIndex={-1}
//         role="main"
//         aria-label="Main content"
//       >
//         <ErrorBoundary>
//           <Suspense fallback={<div className="loading">Loading...</div>}>
//             <Routes>
//               {routes.map(({ path, element, protected: isProtected }) => (
//                 <Route
//                   key={path}
//                   path={path}
//                   element={
//                     isProtected ? (
//                       <ProtectedRoute>{element}</ProtectedRoute>
//                     ) : (
//                       element
//                     )
//                   }
//                 />
//               ))}
//             </Routes>
//           </Suspense>
//         </ErrorBoundary>
//       </main>
//     </div>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <AppContent />
//     </Router>
//   );
// }

// export default App;



import React, { lazy, Suspense, useMemo, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate, Navigate } from 'react-router-dom';
import { supabase } from './supabase';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import CampaignPage from './components/CampaignPage';
import LoginPage from './components/LoginPage';
import SignupBrandPage from './components/SignupBrandPage';
import SignupInfluencerPage from './components/SignupInfluencerPage';
import PricingPage from './components/PricingPage';
import './App.css';

// Lazy-loaded components
const InfluencerDashboard = lazy(() => import('./components/InfluencerDashboard'));
const InfluencerProfileSetup = lazy(() => import('./components/InfluencerProfileSetup'));
const BrandDashboard = lazy(() => import('./components/BrandDashboard'));
const CreateCampaign = lazy(() => import('./components/CreateCampaign'));
const InfluencerSearchPage = lazy(() => import('./components/InfluencerSearchPage'));
const InfluencerProfilePublic = lazy(() => import('./components/InfluencerProfilePublic'));
const PostJobPage = lazy(() => import('./components/PostJobPage'));
const ContentCalendar = lazy(() => import('./components/ContentCalendar'));
const AnalyticsDashboard = lazy(() => import('./components/AnalyticsDashboard'));
const CampaignListingPage = lazy(() => import('./components/CampaignListingPage'));
const CampaignDetailsPage = lazy(() => import('./components/CampaignDetailsPage'));

// Error Boundary Component
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div className="error-message">Something went wrong. Please try again.</div>;
    }
    return this.props.children;
  }
}

// Protected Route Component
function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    // Mock auth for frontend (no Supabase changes)
    const checkAuth = async () => {
      // Simulate logged-in user
      setUser({ id: 'mock-user', role: 'influencer' }); // Change to 'brand' for Brand flow testing
      setLoading(false);
    };
    checkAuth();
  }, [navigate]);

  if (loading) return <div className="loading">Loading...</div>;
  return user ? children : <Navigate to="/login" replace />;
}

// Route Configuration
const routes = [
  { path: '/', element: <HomePage />, fullPage: true },
  { path: '/campaign', element: <CampaignPage />, fullPage: true },
  { path: '/login', element: <LoginPage />, fullPage: true },
  { path: '/signup-brand', element: <SignupBrandPage />, fullPage: true },
  { path: '/signup-influencer', element: <SignupInfluencerPage />, fullPage: true },
  { path: '/pricing', element: <PricingPage />, fullPage: true },
  { path: '/about', element: <AboutPage />, fullPage: true },
  { path: '/post-job', element: <PostJobPage />, fullPage: true },
  { path: '/resources', element: <div>Resources Page</div>, fullPage: true },
  { path: '/how-it-works', element: <div>How It Works</div>, fullPage: true },
  { path: '/for-brands', element: <div>For Brands</div>, fullPage: true },
  { path: '/for-influencers', element: <div>For Influencers</div>, fullPage: true },
  { path: '/influencer-profile', element: <InfluencerProfilePublic />, fullPage: true },
  { path: '/dashboard', element: <InfluencerDashboard />, protected: true },
  { path: '/profile-setup', element: <InfluencerProfileSetup />, protected: true },
  { path: '/brand-dashboard', element: <BrandDashboard />, protected: true },
  { path: '/create-campaign', element: <CreateCampaign />, protected: true },
  { path: '/search-influencers', element: <InfluencerSearchPage />, protected: true },
  { path: '/campaign/:id', element: <CampaignDetailsPage />, protected: true },
  { path: '/analytics', element: <AnalyticsDashboard />, protected: true },
  { path: '/CampaignListingPage', element: <CampaignListingPage />, protected: true },
  { path: '/content-calendar', element: <ContentCalendar />, protected: true },
  { path: '/earnings', element: <div>Earnings Page</div>, protected: true },
  { path: '/settings', element: <div>Settings Page</div>, protected: true },
];

function AppContent() {
  const location = useLocation();

  // Memoized sidebar visibility
  const shouldShowSidebar = useMemo(() => {
    const route = routes.find((r) => {
      if (r.path.includes(':id')) {
        const regex = new RegExp(`^${r.path.replace(':id', '[^/]+')}$`);
        return regex.test(location.pathname);
      }
      return r.path === location.pathname;
    });
    return route && !route.fullPage;
  }, [location.pathname]);

  // Focus management for accessibility
  useEffect(() => {
    const mainContent = document.querySelector('main');
    if (mainContent) {
      mainContent.focus();
    }
    // Restore scroll position
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="app">
      {shouldShowSidebar && <Navbar />}
      <main
        className={shouldShowSidebar ? 'main-content' : 'main-content-full'}
        tabIndex={-1}
        role="main"
        aria-label="Main content"
      >
        <ErrorBoundary>
          <Suspense fallback={<div className="loading">Loading...</div>}>
            <Routes>
              {routes.map(({ path, element, protected: isProtected }) => (
                <Route
                  key={path}
                  path={path}
                  element={
                    isProtected ? (
                      <ProtectedRoute>{element}</ProtectedRoute>
                    ) : (
                      element
                    )
                  }
                />
              ))}
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;