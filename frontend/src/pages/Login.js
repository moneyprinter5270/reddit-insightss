// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
// import { GoogleLogin } from '@react-oauth/google';
// import { ArrowLeft, Moon, Sun, Globe } from 'lucide-react';
// import { useTheme } from '../context/ThemeContext';

// // const API_URL = 'http://localhost:5000/api';
// const API_URL = 'https://7fpmwt7n-5000.asse.devtunnels.ms/api';

// function Login({ onLogin }) {
//   const navigate = useNavigate();
//   const { t, i18n } = useTranslation();
//   const { theme, toggleTheme } = useTheme();
//   const [isRegister, setIsRegister] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [showLangMenu, setShowLangMenu] = useState(false);

//   const languages = [
//     { code: 'en', name: 'English', flag: '🇬🇧' },
//     { code: 'es', name: 'Español', flag: '🇪🇸' },
//     { code: 'ur', name: 'اردو', flag: '🇵🇰' },
//     { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
//     { code: 'ar', name: 'العربية', flag: '🇸🇦' },
//     { code: 'zh', name: '中文', flag: '🇨🇳' },
//     { code: 'ja', name: '日本語', flag: '🇯🇵' },
//     { code: 'fr', name: 'Français', flag: '🇫🇷' },
//     { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
//   ];

//   const changeLanguage = (lng) => {
//     i18n.changeLanguage(lng);
//     localStorage.setItem('language', lng);
//     setShowLangMenu(false);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);

//     try {
//       const endpoint = isRegister ? '/auth/register' : '/auth/login';
//       const response = await axios.post(`${API_URL}${endpoint}`, { email, password });
      
//       if (isRegister) {
//         setIsRegister(false);
//         setError('Registration successful! Please login.');
//       } else {
//         onLogin(response.data.token);
//       }
//     } catch (err) {
//       setError(err.response?.data?.error || 'An error occurred');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleGoogleSuccess = async (credentialResponse) => {
//     try {
//       const response = await axios.post(`${API_URL}/auth/google`, {
//         credential: credentialResponse.credential
//       });
//       onLogin(response.data.token);
//     } catch (error) {
//       console.error('Google sign-in error:', error);
//       setError('Google sign-in failed. Please try again.');
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="theme-language-controls">
//         <button onClick={toggleTheme} className="theme-toggle" title={theme === 'light' ? 'Dark Mode' : 'Light Mode'}>
//           {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
//         </button>
        
//         <div className="language-selector">
//           <button onClick={() => setShowLangMenu(!showLangMenu)} className="lang-toggle">
//             <Globe size={20} />
//             <span>{languages.find(l => l.code === i18n.language)?.flag || '🌐'}</span>
//           </button>
//           {showLangMenu && (
//             <div className="lang-menu">
//               {languages.map(lang => (
//                 <button
//                   key={lang.code}
//                   onClick={() => changeLanguage(lang.code)}
//                   className={i18n.language === lang.code ? 'active' : ''}
//                 >
//                   <span className="flag">{lang.flag}</span>
//                   <span>{lang.name}</span>
//                 </button>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>

//       <button onClick={() => navigate('/')} className="back-button">
//         <ArrowLeft size={20} />
//         {t('back_home')}
//       </button>
      
//       <div className="login-card">
//         <h1>{isRegister ? t('create_account') : t('welcome_back')}</h1>
//         <p>{isRegister ? t('signup_desc') : t('signin_desc')}</p>
        
//         {error && <div className="error">{error}</div>}
        
//         <div className="google-signin-container">
//           <GoogleLogin
//             onSuccess={handleGoogleSuccess}
//             onError={() => setError('Google sign-in failed')}
//             text={isRegister ? 'signup_with' : 'signin_with'}
//             width="100%"
//           />
//         </div>

//         <div className="divider">
//           <span>{t('or')}</span>
//         </div>
        
//         <form onSubmit={handleSubmit}>
//           <div className="input-group">
//             <label>{t('email')}</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
          
//           <div className="input-group">
//             <label>{t('password')}</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
          
//           <button type="submit" className="btn btn-primary" disabled={loading}>
//             {loading ? 'Processing...' : (isRegister ? t('register') : t('login'))}
//           </button>
//         </form>
        
//         <p style={{marginTop: '20px', textAlign: 'center', color: 'var(--text-secondary)'}}>
//           {isRegister ? t('already_account') : t('no_account')}{' '}
//           <span
//             onClick={() => setIsRegister(!isRegister)}
//             style={{color: 'var(--primary)', cursor: 'pointer', fontWeight: '600'}}
//           >
//             {isRegister ? t('login') : t('register')}
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Login;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { GoogleLogin } from '@react-oauth/google';
import { ArrowLeft, Moon, Sun, Globe } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

//const API_URL = 'http://localhost:5000/api';
const API_URL = 'http://16.16.111.90:5000/api';

function Login({ onLogin }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  
  const searchParams = new URLSearchParams(location.search);
  const initialMode = searchParams.get('mode') === 'signup';
  
  const [isRegister, setIsRegister] = useState(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'ur', name: 'اردو', flag: '🇵🇰' },
    { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
    setShowLangMenu(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const endpoint = isRegister ? '/auth/register' : '/auth/login';
      const payload = isRegister ? { email, password, name } : { email, password };
      const response = await axios.post(`${API_URL}${endpoint}`, payload);
      
      if (isRegister) {
        // Auto-login after registration
        onLogin(response.data.token);
      } else {
        onLogin(response.data.token);
      }
    } catch (err) {
      setError(err.response?.data?.error || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const response = await axios.post(`${API_URL}/auth/google`, {
        credential: credentialResponse.credential
      });
      onLogin(response.data.token);
    } catch (error) {
      console.error('Google sign-in error:', error);
      setError('Google sign-in failed. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="theme-language-controls">
        <button onClick={toggleTheme} className="theme-toggle" title={theme === 'light' ? 'Dark Mode' : 'Light Mode'}>
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
        
        <div className="language-selector">
          <button onClick={() => setShowLangMenu(!showLangMenu)} className="lang-toggle">
            <Globe size={20} />
            <span>{languages.find(l => l.code === i18n.language)?.flag || '🌐'}</span>
          </button>
          {showLangMenu && (
            <div className="lang-menu">
              {languages.map(lang => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={i18n.language === lang.code ? 'active' : ''}
                >
                  <span className="flag">{lang.flag}</span>
                  <span>{lang.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <button onClick={() => navigate('/')} className="back-button">
        <ArrowLeft size={20} />
        {t('back_home')}
      </button>
      
      <div className="login-card">
        <h1>{isRegister ? t('create_account') : t('welcome_back')}</h1>
        <p>{isRegister ? t('signup_desc') : t('signin_desc')}</p>
        
        {error && <div className="error">{error}</div>}
        
        <div className="google-signin-container">
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={() => setError('Google sign-in failed')}
            text={isRegister ? 'signup_with' : 'signin_with'}
            width="100%"
          />
        </div>

        <div className="divider">
          <span>{t('or')}</span>
        </div>
        
        <form onSubmit={handleSubmit}>
          {isRegister && (
            <div className="input-group">
              <label>Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Your full name"
              />
            </div>
          )}
          
          <div className="input-group">
            <label>{t('email')}</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="your@email.com"
            />
          </div>
          
          <div className="input-group">
            <label>{t('password')}</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
              minLength="6"
            />
          </div>
          
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Processing...' : (isRegister ? t('register') : t('login'))}
          </button>
        </form>
        
        <p style={{marginTop: '20px', textAlign: 'center', color: 'var(--text-secondary)'}}>
          {isRegister ? t('already_account') : t('no_account')}{' '}
          <span
            onClick={() => setIsRegister(!isRegister)}
            style={{color: 'var(--primary)', cursor: 'pointer', fontWeight: '600'}}
          >
            {isRegister ? t('login') : t('register')}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;