// import React, { useState } from 'react';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import { GoogleOAuthProvider } from '@react-oauth/google';
// import { ThemeProvider } from './context/ThemeContext';
// import './i18n';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Dashboard from './pages/Dashboard';
// import Learnmore from './pages/Learnmore';
// import './App.css';

// function App() {
//   const [token, setToken] = useState(localStorage.getItem('token'));

//   const handleLogin = (newToken) => {
//     localStorage.setItem('token', newToken);
//     setToken(newToken);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     setToken(null);
//   };

//   return (
//     <GoogleOAuthProvider clientId="604671923265-05im1ndr0ca43b0rbbcf95eikgr523e9.apps.googleusercontent.com">
//       <ThemeProvider>
//         <BrowserRouter>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/login" element={
//               token ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />
//             } />
//             <Route path="/dashboard" element={
//               token ? <Dashboard onLogout={handleLogout} /> : <Navigate to="/" />
//             } />
//           </Routes>
//         </BrowserRouter>
//       </ThemeProvider>
//     </GoogleOAuthProvider>
//   );
// }

// export default App;




import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ThemeProvider } from './context/ThemeContext';
import './i18n';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Documentation from './pages/Documentation';
import './App.css';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  const handleLogin = (newToken) => {
    localStorage.setItem('token', newToken);
    setToken(newToken);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  return (
    <GoogleOAuthProvider clientId="604671923265-05im1ndr0ca43b0rbbcf95eikgr523e9.apps.googleusercontent.com">
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/docs" element={<Documentation />} />
            <Route path="/login" element={
              token ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />
            } />
            <Route path="/dashboard" element={
              token ? <Dashboard onLogout={handleLogout} /> : <Navigate to="/" />
            } />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
