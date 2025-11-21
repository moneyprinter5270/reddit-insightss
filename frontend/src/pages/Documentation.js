import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Moon, Sun, Globe, CheckCircle, AlertCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

function Documentation() {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [showLangMenu, setShowLangMenu] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'ur', name: 'اردو', flag: '🇵🇰' },
    { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' }
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
    setShowLangMenu(false);
  };

  return (
    <div className="documentation-page">
      <nav className="docs-navbar">
        <div className="nav-container">
          <div className="nav-brand">
            <span className="brand-icon">📊</span>
            <span className="brand-text">CryptoInsights Docs</span>
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
            <button onClick={() => navigate('/')} className="btn btn-outline">
              <ArrowLeft size={18} /> Back to Home
            </button>
          </div>
        </div>
      </nav>

      <div className="docs-content">
        <aside className="docs-sidebar">
          <h3>Table of Contents</h3>
          <ul>
            <li><a href="#getting-started">Getting Started</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#scraping">Reddit Scraping</a></li>
            <li><a href="#filters">Filters & Sorting</a></li>
            <li><a href="#chatbot">AI Chatbot</a></li>
            <li><a href="#limits">Rate Limits</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </aside>

        <main className="docs-main">
          <section id="getting-started">
            <h1>📚 Getting Started with CryptoInsights</h1>
            <p>Welcome to CryptoInsights! This guide will help you get started with analyzing cryptocurrency discussions from Reddit.</p>

            <div className="doc-card">
              <h2>🚀 Quick Start</h2>
              <ol>
                <li><strong>Sign Up:</strong> Create a free account using email or Google sign-in</li>
                <li><strong>Scrape Data:</strong> Click "Scrape Now" to fetch latest crypto discussions</li>
                <li><strong>Analyze:</strong> Use filters to find specific trends and insights</li>
                <li><strong>Ask AI:</strong> Chat with our AI analyst for detailed market insights</li>
              </ol>
            </div>
          </section>

          <section id="features">
            <h2>✨ Key Features</h2>
            
            <div className="feature-grid-docs">
              <div className="feature-doc-card">
                <CheckCircle size={24} color="#4caf50" />
                <h3>Real-time Scraping</h3>
                <p>Automatically fetch latest posts from top crypto subreddits including r/cryptocurrency, r/Bitcoin, r/CryptoMarkets, and r/ethtrader.</p>
              </div>

              <div className="feature-doc-card">
                <CheckCircle size={24} color="#4caf50" />
                <h3>Smart Filters</h3>
                <p>Filter posts by subreddit, time period (12h to 7 days), and sort by newest, oldest, or highest score.</p>
              </div>

              <div className="feature-doc-card">
                <CheckCircle size={24} color="#4caf50" />
                <h3>Crypto Tracking</h3>
                <p>Automatically detects mentions of major cryptocurrencies including BTC, ETH, SOL, ADA, XRP, and more.</p>
              </div>

              <div className="feature-doc-card">
                <CheckCircle size={24} color="#4caf50" />
                <h3>AI Analysis</h3>
                <p>Powered by Google Gemini AI for intelligent market sentiment analysis and trend insights.</p>
              </div>
            </div>
          </section>

          <section id="scraping">
            <h2>🔍 Reddit Scraping</h2>
            
            <div className="doc-card">
              <h3>How It Works</h3>
              <p>When you click "Scrape Now", the system fetches the latest 30 posts per subreddit from:</p>
              <ul>
                <li>r/cryptocurrency - General crypto discussions</li>
                <li>r/CryptoMarkets - Trading and market analysis</li>
                <li>r/Bitcoin - Bitcoin-specific discussions</li>
                <li>r/ethtrader - Ethereum trading community</li>
              </ul>
              <p>Each post is analyzed for cryptocurrency mentions and stored in your personal dashboard.</p>
            </div>

            <div className="alert-box info">
              <AlertCircle size={20} />
              <p><strong>Note:</strong> Duplicate posts are automatically detected and skipped to keep your data clean.</p>
            </div>
          </section>

          <section id="filters">
            <h2>🎯 Filters & Sorting</h2>
            
            <div className="doc-card">
              <h3>Subreddit Filter</h3>
              <p>View posts from specific subreddits or all at once. Select from the dropdown to focus on a particular community.</p>

              <h3>Time Period Filter</h3>
              <p>Choose from multiple time ranges:</p>
              <ul>
                <li><strong>All Time:</strong> View all scraped posts</li>
                <li><strong>Last 12 Hours:</strong> Most recent discussions</li>
                <li><strong>Last 24 Hours:</strong> Daily trends</li>
                <li><strong>Last 7 Days:</strong> Weekly overview</li>
              </ul>

              <h3>Sort Options</h3>
              <ul>
                <li><strong>Newest First:</strong> Most recent posts at the top</li>
                <li><strong>Oldest First:</strong> Chronological order</li>
                <li><strong>Highest Score:</strong> Most upvoted posts first</li>
              </ul>
            </div>
          </section>

          <section id="chatbot">
            <h2>🤖 AI Chatbot</h2>
            
            <div className="doc-card">
              <h3>Ask Intelligent Questions</h3>
              <p>Our AI analyst can help you understand market trends. Try asking:</p>
              <ul>
                <li>"What's the sentiment around Bitcoin?"</li>
                <li>"Which altcoins are trending this week?"</li>
                <li>"Tell me about Solana insights"</li>
                <li>"What are the top discussions today?"</li>
              </ul>

              <h3>How It Works</h3>
              <p>The AI analyzes all your scraped Reddit posts and provides structured insights with:</p>
              <ul>
                <li><strong>Bold headings</strong> for main topics</li>
                <li><strong>Bullet points</strong> for key insights</li>
                <li><strong>Data-backed analysis</strong> from actual Reddit discussions</li>
              </ul>
            </div>

            <div className="alert-box warning">
              <AlertCircle size={20} />
              <p><strong>Important:</strong> The AI only answers crypto-related questions. General queries will be redirected.</p>
            </div>
          </section>

          <section id="limits">
            <h2>⚡ Rate Limits</h2>
            
            <div className="doc-card">
              <h3>Scraping Limits</h3>
              <p>To ensure fair usage and protect Reddit's servers, we implement the following limits:</p>
              
              <div className="limits-table">
                <div className="limit-row">
                  <div className="limit-label">Daily Scrapes</div>
                  <div className="limit-value">5 per day</div>
                </div>
                <div className="limit-row">
                  <div className="limit-label">Cooldown Period</div>
                  <div className="limit-value">3 minutes between scrapes</div>
                </div>
                <div className="limit-row">
                  <div className="limit-label">Posts Per Scrape</div>
                  <div className="limit-value">30 per subreddit (120 total)</div>
                </div>
                <div className="limit-row">
                  <div className="limit-label">Limit Reset</div>
                  <div className="limit-value">Midnight daily</div>
                </div>
              </div>
            </div>

            <div className="alert-box success">
              <CheckCircle size={20} />
              <p><strong>Tip:</strong> Your remaining scrapes are displayed on the button. Plan your scrapes wisely!</p>
            </div>
          </section>

          <section id="faq">
            <h2>❓ Frequently Asked Questions</h2>
            
            <div className="faq-item">
              <h3>Q: Why can't I see my posts after scraping?</h3>
              <p>A: Make sure you've selected "All Time" in the time filter. If you just scraped, the default 7-day filter might not show older posts.</p>
            </div>

            <div className="faq-item">
              <h3>Q: Are my posts visible to other users?</h3>
              <p>A: No! All scraped data is completely private and isolated per user. Other users cannot see your data.</p>
            </div>

            <div className="faq-item">
              <h3>Q: How accurate is the crypto mention detection?</h3>
              <p>A: Our system detects mentions of 20+ major cryptocurrencies using keyword matching. It's highly accurate for common coins like BTC, ETH, SOL, etc.</p>
            </div>

            <div className="faq-item">
              <h3>Q: Can I scrape more than 5 times per day?</h3>
              <p>A: Currently, the free tier allows 5 scrapes per day. This helps us maintain server costs and ensure fair usage for all users.</p>
            </div>

            <div className="faq-item">
              <h3>Q: Does dark mode work on all pages?</h3>
              <p>A: Yes! Dark mode is available on all pages including home, login, dashboard, and documentation.</p>
            </div>

            <div className="faq-item">
              <h3>Q: What languages are supported?</h3>
              <p>A: We support English, Spanish, Urdu, Hindi, Arabic, Chinese, Japanese, French, and German across the entire platform.</p>
            </div>
          </section>

          <section id="contact">
            <h2>💬 Need Help?</h2>
            <div className="doc-card">
              <p>If you have questions or need support:</p>
              <ul>
                <li>Email: support@cryptoinsights.com</li>
                <li>Twitter: @CryptoInsights</li>
                <li>Discord: Join our community</li>
              </ul>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Documentation;