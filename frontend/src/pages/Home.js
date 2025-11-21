// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
// import { TrendingUp, Database, MessageCircle, BarChart3, Shield, Zap, Moon, Sun, Globe } from 'lucide-react';
// import { useTheme } from '../context/ThemeContext';

// function Home() {
//   const navigate = useNavigate();
//   const { t, i18n } = useTranslation();
//   const { theme, toggleTheme } = useTheme();
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

//   return (
//     <div className="home">
//       <nav className="home-navbar">
//         <div className="nav-container">
//           <div className="nav-brand">
//             <span className="brand-icon"></span>
//             <span className="brand-text">RED NEWS</span>
//           </div>
//           <div className="nav-links">
//             <button onClick={toggleTheme} className="btn btn-outline">
//               {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
//             </button>
//             <div className="language-selector">
//               <button onClick={() => setShowLangMenu(!showLangMenu)} className="btn btn-outline">
//                 <Globe size={18} />
//               </button>
//               {showLangMenu && (
//                 <div className="lang-menu">
//                   {languages.map(lang => (
//                     <button
//                       key={lang.code}
//                       onClick={() => changeLanguage(lang.code)}
//                       className={i18n.language === lang.code ? 'active' : ''}
//                     >
//                       <span className="flag">{lang.flag}</span>
//                       <span>{lang.name}</span>
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>
//             <button onClick={() => navigate('/login')} className="btn btn-outline">
//               {t('login')}
//             </button>
//             <button onClick={() => navigate('/login')} className="btn btn-primary">
//               {t('getStarted')}
//             </button>
//           </div>
//         </div>
//       </nav>

//       <section className="hero">
//         <div className="hero-content">
//           <h1 className="hero-title">
//             {t('title')}
//             <span className="hero-subtitle">{t('subtitle')}</span>
//           </h1>
//           <p className="hero-description">
//             {t('description')}
//           </p>
//           <div className="hero-buttons">
//             <button onClick={() => navigate('/login')} className="btn btn-primary btn-large">
//               {t('getStarted')}
//             </button>
//             <button className="btn btn-outline btn-large">
//               {t('learnMore')}
//             </button>
//           </div>
//         </div>
//       </section>

//       <section className="features">
//         <h2 className="section-title">{t('features')}</h2>
//         <div className="features-grid">
//           <div className="feature-card">
//             <div className="feature-icon">
//               <Database size={32} />
//             </div>
//             <h3>{t('feature1_title')}</h3>
//             <p>{t('feature1_desc')}</p>
//           </div>

//           <div className="feature-card">
//             <div className="feature-icon">
//               <TrendingUp size={32} />
//             </div>
//             <h3>{t('feature2_title')}</h3>
//             <p>{t('feature2_desc')}</p>
//           </div>

//           <div className="feature-card">
//             <div className="feature-icon">
//               <MessageCircle size={32} />
//             </div>
//             <h3>{t('feature3_title')}</h3>
//             <p>{t('feature3_desc')}</p>
//           </div>

//           <div className="feature-card">
//             <div className="feature-icon">
//               <BarChart3 size={32} />
//             </div>
//             <h3>{t('feature4_title')}</h3>
//             <p>{t('feature4_desc')}</p>
//           </div>

//           <div className="feature-card">
//             <div className="feature-icon">
//               <Shield size={32} />
//             </div>
//             <h3>{t('feature5_title')}</h3>
//             <p>{t('feature5_desc')}</p>
//           </div>

//           <div className="feature-card">
//             <div className="feature-icon">
//               <Zap size={32} />
//             </div>
//             <h3>{t('feature6_title')}</h3>
//             <p>{t('feature6_desc')}</p>
//           </div>
//         </div>
//       </section>

//       <footer className="home-footer">
//         <p>© 2025 RED NEWS.</p>
//       </footer>
//     </div>
//   );
// }

// export default Home;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { TrendingUp, Database, MessageCircle, BarChart3, Shield, Zap, Moon, Sun, Globe } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

function Home() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
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

  return (
    <div className="home">
      <nav className="home-navbar">
        <div className="nav-container">
          <div className="nav-brand">
            <span className="brand-icon"></span>
            <span className="brand-text">RED NEWS</span>
          </div>
          <div className="nav-links">
            <button onClick={toggleTheme} className="btn btn-outline">
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <div className="language-selector">
              <button onClick={() => setShowLangMenu(!showLangMenu)} className="btn btn-outline">
                <Globe size={18} />
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
            <button onClick={() => navigate('/login?mode=signin')} className="btn btn-outline">
              {t('login')}
            </button>
            <button onClick={() => navigate('/login?mode=signup')} className="btn btn-primary">
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            {t('title')}
            <span className="hero-subtitle">{t('subtitle')}</span>
          </h1>
          <p className="hero-description">
            {t('description')}
          </p>
          <div className="hero-buttons">
            <button onClick={() => navigate('/login?mode=signup')} className="btn btn-primary btn-large">
              {t('getStarted')}
            </button>
            {/* <button className="btn btn-outline btn-large">
              {t('learnMore')}
            </button> */}
            <button onClick={() => navigate('/docs')} className="btn btn-outline btn-large">
  Learn More
</button>
          </div>
          
          {/* Stats Section */}
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">3+</div>
              <div className="stat-label">Crypto Subreddits</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100+</div>
              <div className="stat-label">Posts Daily</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Real-time Updates</div>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <h2 className="section-title">{t('features')}</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <Database size={32} />
            </div>
            <h3>{t('feature1_title')}</h3>
            <p>{t('feature1_desc')}</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <TrendingUp size={32} />
            </div>
            <h3>{t('feature2_title')}</h3>
            <p>{t('feature2_desc')}</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <MessageCircle size={32} />
            </div>
            <h3>{t('feature3_title')}</h3>
            <p>{t('feature3_desc')}</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <BarChart3 size={32} />
            </div>
            <h3>{t('feature4_title')}</h3>
            <p>{t('feature4_desc')}</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Shield size={32} />
            </div>
            <h3>{t('feature5_title')}</h3>
            <p>{t('feature5_desc')}</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Zap size={32} />
            </div>
            <h3>{t('feature6_title')}</h3>
            <p>{t('feature6_desc')}</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="how-container">
          <h2 className="section-title">How It Works</h2>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Sign Up</h3>
              <p>Create your free account with email or Google sign-in</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Scrape Data</h3>
              <p>Click "Scrape Now" to fetch latest crypto discussions from Reddit</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Analyze Trends</h3>
              <p>View trending cryptocurrencies and apply filters to find insights</p>
            </div>
            <div className="step-card">
              <div className="step-number">4</div>
              <h3>Ask AI</h3>
              <p>Chat with our AI analyst to get detailed market insights</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Start Analyzing?</h2>
          <p>Join thousands of crypto enthusiasts tracking Reddit sentiment</p>
          <button onClick={() => navigate('/login?mode=signup')} className="btn btn-primary btn-large">
            Get Started Free
          </button>
          <p className="cta-note">No credit card required • 5 free scrapes daily</p>
        </div>
      </section>

      <footer className="home-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>📊 CryptoInsights</h4>
            <p>AI-powered Reddit crypto intelligence platform</p>
          </div>
          <div className="footer-section">
            <h4>Product</h4>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#how">How It Works</a></li>
              <li><a href="#pricing">Pricing</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Connect</h4>
            <ul>
              <li><a href="#twitter">Twitter</a></li>
              <li><a href="#discord">Discord</a></li>
              <li><a href="#github">GitHub</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 CryptoInsights. Built with React, Node.js & AI.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
