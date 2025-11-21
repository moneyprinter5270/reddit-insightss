// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';
// import { useTranslation } from 'react-i18next';
// import { TrendingUp, MessageCircle, Database, RefreshCw, LogOut, Moon, Sun, Globe } from 'lucide-react';
// import { useTheme } from '../context/ThemeContext';

// // const API_URL = 'http://localhost:5000/api';
// const API_URL = 'https://7fpmwt7n-5000.asse.devtunnels.ms/api';

// function Dashboard({ onLogout }) {
//   const { t, i18n } = useTranslation();
//   const { theme, toggleTheme } = useTheme();
//   const chatbotRef = useRef(null);
//   const [showLangMenu, setShowLangMenu] = useState(false);
//   const [posts, setPosts] = useState([]);
//   const [topCryptos, setTopCryptos] = useState([]);
//   const [subreddits, setSubreddits] = useState([]);
//   const [selectedSubreddit, setSelectedSubreddit] = useState('');
//   const [sortBy, setSortBy] = useState('newest');
//   const [loading, setLoading] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [inputMessage, setInputMessage] = useState('');
//   const [chatLoading, setChatLoading] = useState(false);

//   const token = localStorage.getItem('token');
//   const config = { headers: { Authorization: `Bearer ${token}` } };

//   useEffect(() => {
//     fetchData();
//   }, [selectedSubreddit, sortBy]);

//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       const [postsRes, cryptosRes, subsRes] = await Promise.all([
//         axios.get(`${API_URL}/scraper/posts?subreddit=${selectedSubreddit}&sortBy=${sortBy}`, config),
//         axios.get(`${API_URL}/scraper/top-cryptos`, config),
//         axios.get(`${API_URL}/scraper/subreddits`, config)
//       ]);
      
//       setPosts(postsRes.data);
//       setTopCryptos(cryptosRes.data);
//       setSubreddits(subsRes.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleScrape = async () => {
//     setLoading(true);
//     try {
//       await axios.post(`${API_URL}/scraper/scrape`, {}, config);
//       fetchData();
//     } catch (error) {
//       console.error('Error scraping:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const formatBotMessage = (text) => {
//     // Split into lines
//     let lines = text.split('\n');
//     let html = '';
//     let inList = false;

//     lines.forEach((line, index) => {
//       line = line.trim();
      
//       // Skip empty lines
//       if (!line) {
//         if (inList) {
//           html += '</ul>';
//           inList = false;
//         }
//         html += '<br/>';
//         return;
//       }

//       // Check for bold headings (lines with **)
//       if (line.match(/^\*\*(.+?)\*\*$/)) {
//         if (inList) {
//           html += '</ul>';
//           inList = false;
//         }
//         const heading = line.replace(/^\*\*(.+?)\*\*$/, '$1');
//         html += `<strong class="bot-heading">${heading}</strong>`;
//         return;
//       }

//       // Check for bullet points
//       if (line.match(/^[-*•]\s/)) {
//         if (!inList) {
//           html += '<ul class="bot-list">';
//           inList = true;
//         }
//         const content = line.replace(/^[-*•]\s/, '');
//         html += `<li>${content}</li>`;
//         return;
//       }

//       // Regular text
//       if (inList) {
//         html += '</ul>';
//         inList = false;
//       }
//       html += `<p>${line}</p>`;
//     });

//     // Close any open lists
//     if (inList) {
//       html += '</ul>';
//     }

//     return html;
//   };

//   const handleSendMessage = async () => {
//     if (!inputMessage.trim()) return;
    
//     const userMsg = { text: inputMessage, sender: 'user' };
//     setMessages([...messages, userMsg]);
//     setInputMessage('');
//     setChatLoading(true);

//     try {
//       const response = await axios.post(
//         `${API_URL}/chatbot/chat`,
//         { message: inputMessage },
//         config
//       );
      
//       setMessages(prev => [...prev, { text: response.data.response, sender: 'bot' }]);
//     } catch (error) {
//       setMessages(prev => [...prev, { 
//         text: 'Error: Could not get response. Please try again.', 
//         sender: 'bot' 
//       }]);
//     } finally {
//       setChatLoading(false);
//     }
//   };

//   return (
//     <div className="dashboard">
//       <div className="dashboard-header">
//         <h1>📊 CRYPTO REDDIT INTELLIGENCE</h1>
//         <div className="nav-buttons">
//           <button onClick={fetchData} className="btn btn-secondary" title="Refresh Data">
//             <RefreshCw size={18} />
//           </button>
//           <button onClick={onLogout} className="btn btn-secondary">
//             <LogOut size={18} /> Logout
//           </button>
//         </div>
//       </div>

//       <div className="dashboard-content">
//         <div className="controls">
//           <div className="control-row">
//             <div className="control-group">
//               <label>Filter by Subreddit</label>
//               <select value={selectedSubreddit} onChange={(e) => setSelectedSubreddit(e.target.value)}>
//                 <option value="">All Subreddits</option>
//                 {subreddits.map(sub => (
//                   <option key={sub} value={sub}>{sub}</option>
//                 ))}
//               </select>
//             </div>

//             <div className="control-group">
//               <label>Sort Posts By</label>
//               <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
//                 <option value="newest">Newest First</option>
//                 <option value="oldest">Oldest First</option>
//                 <option value="score">Highest Score</option>
//               </select>
//             </div>

//             <button onClick={handleScrape} className="btn btn-primary" disabled={loading}>
//               {loading ? 'Scraping...' : 'Scrape Now'}
//             </button>
//           </div>
//         </div>

//         <div className="grid-2">
//           <div className="card">
//             <h2><Database size={22} /> Reddit Posts ({posts.length})</h2>
//             <div className="posts-list">
//               {loading && <div className="loading">Loading posts...</div>}
//               {!loading && posts.length === 0 && (
//                 <div className="loading">No posts found. Click "Scrape Now" to fetch data.</div>
//               )}
//               {posts.map(post => (
//                 <div key={post._id} className="post-item">
//                   <div className="post-header">
//                     <div className="post-title">{post.title}</div>
//                     <div className="post-score">↑ {post.score}</div>
//                   </div>
//                   <div className="post-meta">
//                     r/{post.subreddit} • {new Date(post.createdAt).toLocaleDateString()}
//                   </div>
//                   {post.mentions.length > 0 && (
//                     <div className="post-mentions">
//                       {post.mentions.map(mention => (
//                         <span key={mention} className="mention-tag">{mention}</span>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="card">
//             <h2><TrendingUp size={22} /> Top Crypto Mentions</h2>
//             <div>
//               {topCryptos.map((crypto, index) => (
//                 <div key={crypto._id} className="crypto-item">
//                   <div>
//                     <span style={{color: '#999', marginRight: '12px', fontWeight: 'bold'}}>
//                       #{index + 1}
//                     </span>
//                     <span className="crypto-symbol">{crypto.symbol}</span>
//                   </div>
//                   <div className="crypto-count">{crypto.count}</div>
//                 </div>
//               ))}
//               {topCryptos.length === 0 && (
//                 <div className="loading">No data yet. Scrape posts to see trends.</div>
//               )}
//             </div>
//           </div>
//         </div>

//         <div className="card">
//           <h2><MessageCircle size={22} /> AI Market Analyst</h2>
//           <div className="chatbot">
//             <div className="chatbot-messages">
//               {messages.length === 0 && (
//                 <div className="loading">
//                   💬 Ask me about crypto trends!<br/><br/>
//                   <strong>Example questions:</strong><br/>
//                   • "What's the sentiment around Bitcoin?"<br/>
//                   • "Which altcoins are trending?"<br/>
//                   • "Tell me about Solana insights"<br/>
//                   • "What are the top discussions today?"
//                 </div>
//               )}
//               {messages.map((msg, i) => (
//                 <div key={i} className={`message ${msg.sender}`}>
//                   {msg.sender === 'bot' ? (
//                     <div dangerouslySetInnerHTML={{ __html: formatBotMessage(msg.text) }} />
//                   ) : (
//                     <div>{msg.text}</div>
//                   )}
//                 </div>
//               ))}
//               {chatLoading && <div className="loading">🤖 Analyzing Reddit data...</div>}
//             </div>
//             <div className="chatbot-input">
//               <input
//                 type="text"
//                 value={inputMessage}
//                 onChange={(e) => setInputMessage(e.target.value)}
//                 onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
//                 placeholder="Ask about crypto trends, Bitcoin, Ethereum..."
//               />
//               <button 
//                 onClick={handleSendMessage} 
//                 className="btn btn-primary"
//                 disabled={chatLoading || !inputMessage.trim()}
//               >
//                 Send
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;




// original


// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';
// import { useTranslation } from 'react-i18next';
// import { TrendingUp, MessageCircle, Database, RefreshCw, LogOut, Moon, Sun, Globe, X } from 'lucide-react';
// import { useTheme } from '../context/ThemeContext';

// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';
// import { useTranslation } from 'react-i18next';
// import { TrendingUp, MessageCircle, Database, RefreshCw, LogOut, Moon, Sun, Globe, X, BarChart3 } from 'lucide-react';
// import { useTheme } from '../context/ThemeContext';


// const API_URL = 'http://localhost:5000/api';

// function Dashboard({ onLogout }) {
//   const { t, i18n } = useTranslation();
//   const { theme, toggleTheme } = useTheme();
//   const chatbotRef = useRef(null);
//   const [showLangMenu, setShowLangMenu] = useState(false);
//   const [posts, setPosts] = useState([]);
//   const [topCryptos, setTopCryptos] = useState([]);
//   const [subreddits, setSubreddits] = useState([]);
//   const [selectedSubreddit, setSelectedSubreddit] = useState('');
//   const [sortBy, setSortBy] = useState('newest');
//   const [timeFilter, setTimeFilter] = useState('168'); // 7 days default
//   const [loading, setLoading] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [inputMessage, setInputMessage] = useState('');
//   const [chatLoading, setChatLoading] = useState(false);
//   const [scrapeStatus, setScrapeStatus] = useState({ remainingScrapes: 5, totalScrapes: 5 });
//   const [selectedPost, setSelectedPost] = useState(null);

// // new
// const [trendingAnalysis, setTrendingAnalysis] = useState([]);
// const [communityHealth, setCommunityHealth] = useState([]);
// const [newCoins, setNewCoins] = useState([]);
// const [selectedCoin, setSelectedCoin] = useState(null);
// const [coinSentiment, setCoinSentiment] = useState(null);



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

//   const token = localStorage.getItem('token');
//   const config = { headers: { Authorization: `Bearer ${token}` } };

//   const changeLanguage = (lng) => {
//     i18n.changeLanguage(lng);
//     localStorage.setItem('language', lng);
//     setShowLangMenu(false);
//   };

//   const scrollToChatbot = () => {
//     chatbotRef.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   // useEffect(() => {
//   //   fetchData();
//   //   fetchScrapeStatus();
//   // }, [selectedSubreddit, sortBy, timeFilter]);

//   // const fetchScrapeStatus = async () => {
//   //   try {
//   //     const response = await axios.get(`${API_URL}/scraper/scrape-status`, config);
//   //     setScrapeStatus(response.data);
//   //   } catch (error) {
//   //     console.error('Error fetching scrape status:', error);
//   //   }
//   // };


// useEffect(() => {
//   fetchData(); // Load immediately
//   fetchStatus(); // Get scrape status
  
//   // Refresh data every 5 minutes to show latest
//   const refreshInterval = setInterval(() => {
//     fetchData();
//     fetchStatus();
//   }, 5 * 60 * 1000); // 5 minutes
  
//   return () => clearInterval(refreshInterval);
// }, []);

// useEffect(() => {
//   fetchData(); // Reload when filters change
// }, [selectedSubreddit, sortBy, timeFilter]);


// const fetchStatus = async () => {
//   try {
//     const response = await axios.get(`${API_URL}/scraper/status`, config);
//     setScrapeStatus(response.data);
//   } catch (error) {
//     console.error('Error fetching status:', error);
//   }
// };


// const fetchData = async () => {
//   setLoading(true);
//   try {
//     const [postsRes, cryptosRes, subsRes, trendingRes, communityRes, newCoinsRes] = await Promise.all([
//       axios.get(`${API_URL}/scraper/posts?subreddit=${selectedSubreddit}&sortBy=${sortBy}&timeFilter=${timeFilter}`, config),
//       axios.get(`${API_URL}/scraper/top-cryptos`, config),
//       axios.get(`${API_URL}/scraper/subreddits`, config),
//       axios.get(`${API_URL}/scraper/trending-analysis`, config),
//       axios.get(`${API_URL}/scraper/community-health`, config),
//       axios.get(`${API_URL}/scraper/new-coins`, config)
//     ]);
    
//     setPosts(postsRes.data);
//     setTopCryptos(cryptosRes.data);
//     setSubreddits(subsRes.data);
//     setTrendingAnalysis(trendingRes.data.trending || []);
//     setCommunityHealth(communityRes.data.communities || []);
//     // setNewCoins(newCoinsRes.data.newCoins || []);
//     setNewCoins(newCoinsRes.data.newCoins || newCoinsRes.data.trendingCoins || []);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   } finally {
//     setLoading(false);
//   }
// };






// // new
// const fetchSentiment = async (symbol) => {
//   try {
//     setCoinSentiment({ loading: true });
//     const response = await axios.get(`${API_URL}/scraper/sentiment/${symbol}`, config);
//     setCoinSentiment(response.data);
//     setSelectedCoin(symbol);
//   } catch (error) {
//     console.error('Error fetching sentiment:', error);
//     setCoinSentiment({ error: 'Failed to load sentiment' });
//   }
// };


//   const handleScrape = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.post(`${API_URL}/scraper/scrape`, {}, config);
      
//       if (response.data.remainingScrapes !== undefined) {
//         setScrapeStatus({
//           remainingScrapes: response.data.remainingScrapes,
//           totalScrapes: scrapeStatus.totalScrapes
//         });
//       }
      
//       fetchData();
//     } catch (error) {
//       console.error('Error scraping:', error);
//       if (error.response?.data?.error) {
//         alert(error.response.data.error);
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handlePostClick = async (postId) => {
//     try {
//       const response = await axios.get(`${API_URL}/scraper/posts/${postId}`, config);
//       setSelectedPost(response.data);
//     } catch (error) {
//       console.error('Error fetching post details:', error);
//     }
//   };

//   const formatBotMessage = (text) => {
//     let lines = text.split('\n');
//     let html = '';
//     let inList = false;

//     lines.forEach((line) => {
//       line = line.trim();
      
//       if (!line) {
//         if (inList) {
//           html += '</ul>';
//           inList = false;
//         }
//         html += '<br/>';
//         return;
//       }

//       if (line.match(/^\*\*(.+?)\*\*$/)) {
//         if (inList) {
//           html += '</ul>';
//           inList = false;
//         }
//         const heading = line.replace(/^\*\*(.+?)\*\*$/, '$1');
//         html += `<strong class="bot-heading">${heading}</strong>`;
//         return;
//       }

//       if (line.match(/^[-*•]\s/)) {
//         if (!inList) {
//           html += '<ul class="bot-list">';
//           inList = true;
//         }
//         const content = line.replace(/^[-*•]\s/, '');
//         html += `<li>${content}</li>`;
//         return;
//       }

//       if (inList) {
//         html += '</ul>';
//         inList = false;
//       }
//       html += `<p>${line}</p>`;
//     });

//     if (inList) {
//       html += '</ul>';
//     }

//     return html;
//   };

//   const handleSendMessage = async () => {
//     if (!inputMessage.trim()) return;
    
//     const userMsg = { text: inputMessage, sender: 'user' };
//     setMessages([...messages, userMsg]);
//     setInputMessage('');
//     setChatLoading(true);

//     try {
//       const response = await axios.post(
//         `${API_URL}/chatbot/chat`,
//         { message: inputMessage },
//         config
//       );
      
//       setMessages(prev => [...prev, { text: response.data.response, sender: 'bot' }]);
//     } catch (error) {
//       setMessages(prev => [...prev, { 
//         text: 'Error: Could not get response. Please try again.', 
//         sender: 'bot' 
//       }]);
//     } finally {
//       setChatLoading(false);
//     }
//   };

//   return (
//     <div className="dashboard">
//       <div className="dashboard-header">
//         <h1> {t('dashboard_title')}</h1>
//         <div className="nav-buttons">
//           <button onClick={scrollToChatbot} className="btn btn-secondary" title={t('chatbot')}>
//             <MessageCircle size={18} />
//           </button>
//           <button onClick={fetchData} className="btn btn-secondary" title={t('refresh')}>
//             <RefreshCw size={18} />
//           </button>
//           <button onClick={toggleTheme} className="btn btn-secondary" title={theme === 'light' ? 'Dark Mode' : 'Light Mode'}>
//             {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
//           </button>
//           <div className="language-selector">
//             <button onClick={() => setShowLangMenu(!showLangMenu)} className="btn btn-secondary">
//               <Globe size={18} />
//             </button>
//             {showLangMenu && (
//               <div className="lang-menu">
//                 {languages.map(lang => (
//                   <button
//                     key={lang.code}
//                     onClick={() => changeLanguage(lang.code)}
//                     className={i18n.language === lang.code ? 'active' : ''}
//                   >
//                     <span className="flag">{lang.flag}</span>
//                     <span>{lang.name}</span>
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>
//           <button onClick={onLogout} className="btn btn-secondary">
//             <LogOut size={18} /> {t('logout')}
//           </button>
//         </div>
//       </div>

//       <div className="dashboard-content">
//         <div className="controls">
//   <div className="control-row">
//     <div className="control-group">
//       <label>Subreddit</label>
//       <select value={selectedSubreddit} onChange={(e) => setSelectedSubreddit(e.target.value)}>
//         <option value="">All Subreddits</option>
//         {subreddits.map(sub => (
//           <option key={sub} value={sub}>{sub}</option>
//         ))}
//       </select>
//     </div>

//     <div className="control-group">
//       <label>Time Period</label>
//       <select value={timeFilter} onChange={(e) => setTimeFilter(e.target.value)}>
//         <option value="">All Time</option>
//         <option value="12">Last 12 Hours</option>
//         <option value="24">Last 24 Hours</option>
//         <option value="48">Last 2 Days</option>
//         <option value="168">Last 7 Days</option>
//       </select>
//     </div>

//     <div className="control-group">
//       <label>Sort By</label>
//       <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
//         <option value="newest">Newest</option>
//         <option value="oldest">Oldest</option>
//         <option value="score">Top Rated</option>
//       </select>
//     </div>

//     <button onClick={fetchData} className="btn btn-primary">
//       <RefreshCw size={18} /> Refresh
//     </button>
//   </div>
  
//   {scrapeStatus && (
//     <div style={{marginTop: '15px', padding: '12px', background: '#e3f2fd', border: '1px solid #2196f3', borderRadius: '8px', color: '#1565c0'}}>
//       <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center'}}>
//         <span><strong>📊 Total Posts:</strong> {scrapeStatus.totalPosts}</span>
//         <span><strong>🔄 Auto-Updates:</strong> Every hour</span>
//         <span><strong>⏰ Next Update:</strong> {scrapeStatus.nextScrapeTime ? new Date(scrapeStatus.nextScrapeTime).toLocaleTimeString() : 'Soon'}</span>
//       </div>
//     </div>
//   )}
// </div>
//         {/* <div className="controls">
//           <div className="control-row">
//             <div className="control-group">
//               <label>{t('filter_subreddit')}</label>
//               <select value={selectedSubreddit} onChange={(e) => setSelectedSubreddit(e.target.value)}>
//                 <option value="">{t('all_subreddits')}</option>
//                 {subreddits.map(sub => (
//                   <option key={sub} value={sub}>{sub}</option>
//                 ))}
//               </select>
//             </div>

//             <div className="control-group">
//               <label>Time Period</label>
//               <select value={timeFilter} onChange={(e) => setTimeFilter(e.target.value)}>
//                 <option value="12">Last 12 Hours</option>
//                 <option value="24">Last 24 Hours</option>
//                 <option value="48">Last 2 Days</option>
//                 <option value="72">Last 3 Days</option>
//                 <option value="168">Last 7 Days</option>
//               </select>
//             </div>

//             <div className="control-group">
//               <label>{t('sort_by')}</label>
//               <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
//                 <option value="newest">{t('newest')}</option>
//                 <option value="oldest">{t('oldest')}</option>
//                 <option value="score">{t('highest_score')}</option>
//               </select>
//             </div>

//             <button 
//               onClick={handleScrape} 
//               className="btn btn-primary" 
//               disabled={loading || scrapeStatus.remainingScrapes === 0}
//               style={{whiteSpace: 'nowrap'}}
//             >
//               {loading ? t('scraping') : `Scrape (${scrapeStatus.remainingScrapes}/${scrapeStatus.totalScrapes})`}
//             </button>
//           </div>
          
//           {scrapeStatus.remainingScrapes === 0 && (
//             <div style={{marginTop: '15px', padding: '12px', background: '#fff3cd', border: '1px solid #ffc107', borderRadius: '8px', color: '#856404'}}>
//               ⚠️ Daily scrape limit reached. Resets at {new Date(scrapeStatus.resetTime).toLocaleTimeString()}
//             </div>
//           )}
//         </div> */}

//         <div className="grid-2">
//           <div className="card">
//             <h2><Database size={22} /> {t('reddit_posts')} ({posts.length})</h2>
//             <div className="posts-list">
//               {loading && <div className="loading">Loading posts...</div>}
//               {!loading && posts.length === 0 && (
//                 <div className="loading">{t('no_posts')}</div>
//               )}
//               {posts.map(post => (
//                 <div key={post._id} className="post-item" onClick={() => handlePostClick(post._id)} style={{cursor: 'pointer'}}>
//                   <div className="post-header">
//                     <div className="post-title">{post.title}</div>
//                     <div className="post-score">↑ {post.score}</div>
//                   </div>
//                   <div className="post-meta">
//                     r/{post.subreddit} • {post.author} • {post.numComments} comments • {new Date(post.createdAt).toLocaleString()}
//                   </div>
//                   {post.mentions.length > 0 && (
//                     <div className="post-mentions">
//                       {post.mentions.map(mention => (
//                         <span key={mention} className="mention-tag">{mention}</span>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="card">
//             <h2><TrendingUp size={22} /> {t('top_mentions')}</h2>
//             <div>
//               {topCryptos.map((crypto, index) => (
//                 <div key={crypto._id} className="crypto-item">
//                   <div>
//                     <span style={{color: '#999', marginRight: '12px', fontWeight: 'bold'}}>
//                       #{index + 1}
//                     </span>
//                     <span className="crypto-symbol">{crypto.symbol}</span>
//                   </div>
//                   <div className="crypto-count">{crypto.count}</div>
//                 </div>
//               ))}
//               {topCryptos.length === 0 && (
//                 <div className="loading">{t('no_data')}</div>
//               )}
//             </div>
//           </div>
//         </div>




// {/* Trending Analysis Section */}
// <div className="card">
//   <h2><TrendingUp size={22} /> 🔥 Trending Coins (24h Momentum)</h2>
//   {loading ? (
//     <div className="loading">Loading trending data...</div>
//   ) : (
//     <div className="trending-grid">
//       {trendingAnalysis.slice(0, 12).map((coin, index) => (
//         <div 
//           key={coin.symbol} 
//           className="trending-card" 
//           onClick={() => fetchSentiment(coin.symbol)}
//           style={{cursor: 'pointer'}}
//         >
//           <div className="trending-header">
//             <span className="rank">#{index + 1}</span>
//             <span className="crypto-symbol">{coin.symbol}</span>
//             <span className="status-badge">{coin.status}</span>
//           </div>
//           <div className="trending-stats">
//             <div className="stat">
//               <small>24h Mentions</small>
//               <strong>{coin.count24h}</strong>
//             </div>
//             <div className="stat">
//               <small>7d Total</small>
//               <strong>{coin.count7d}</strong>
//             </div>
//             <div className="stat">
//               <small>Momentum</small>
//               <strong className={coin.momentum > 50 ? 'positive' : 'neutral'}>
//                 {typeof coin.momentum === 'number' ? `${coin.momentum}%` : coin.momentum}
//               </strong>
//             </div>
//             <div className="stat">
//               <small>Avg Score</small>
//               <strong>{coin.avgScore}</strong>
//             </div>
//           </div>
//           <div className="trending-footer">
//             <small>💬 {coin.totalComments} comments • Click for AI analysis</small>
//           </div>
//         </div>
//       ))}
//     </div>
//   )}
// </div>

// {/* New Coins Alert Section */}
// {newCoins.length > 0 && (
//   <div className="card new-coins-card">
//     <h2><Database size={22} /> 🆕 New Coin Discoveries (48h)</h2>
//     <div className="new-coins-list">
//       {newCoins.map(coin => (
//         <div 
//           key={coin.symbol} 
//           className="new-coin-item" 
//           onClick={() => fetchSentiment(coin.symbol)}
//           style={{cursor: 'pointer'}}
//         >
//           <div className="new-coin-header">
//             <span className="crypto-symbol">{coin.symbol}</span>
//             <span className="new-badge">NEW</span>
//           </div>
//           <div className="new-coin-info">
//             <small>First seen: {new Date(coin.firstMentioned).toLocaleString()}</small>
//             <div className="new-coin-stats">
//               <span>{coin.mentionCount} mentions</span>
//               <span>Avg score: {coin.avgScore}</span>
//             </div>
//             <div className="new-coin-subs">
//               {coin.subreddits.map(sub => (
//                 <span key={sub} className="sub-tag">r/{sub}</span>
//               ))}
//             </div>
//           </div>
//           <div className="new-coin-post">
//             <small>Top post: {coin.topPost.substring(0, 80)}...</small>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// )}










// {/* Community Health Section */}
// <div className="card">
//   <h2><BarChart3 size={22} /> 📊 Community Activity</h2>
//   {loading ? (
//     <div className="loading">Loading community data...</div>
//   ) : (
//     <div className="community-grid">
//       {communityHealth.map(community => (
//         <div key={community.subreddit} className="community-card">
//           <h3>r/{community.subreddit}</h3>
//           <div className={`activity-badge ${community.activityLevel.toLowerCase()}`}>
//             {community.activityLevel} Activity
//           </div>
//           <div className="community-stats">
//             <div className="stat-row">
//               <span>Total Posts:</span>
//               <strong>{community.totalPosts}</strong>
//             </div>
//             <div className="stat-row">
//               <span>Last 24h:</span>
//               <strong>{community.posts24h}</strong>
//             </div>
//             <div className="stat-row">
//               <span>Avg Score:</span>
//               <strong>{community.avgScore}</strong>
//             </div>
//             <div className="stat-row">
//               <span>Avg Comments:</span>
//               <strong>{community.avgComments}</strong>
//             </div>
//             <div className="stat-row">
//               <span>Engagement:</span>
//               <strong>{community.engagementScore}</strong>
//             </div>
//           </div>
//           <div className="last-active">
//             <small>Last active: {new Date(community.lastActive).toLocaleString()}</small>
//           </div>
//         </div>
//       ))}
//     </div>
//   )}
// </div>

// {/* Sentiment Analysis Modal */}
// {coinSentiment && (
//   <div className="modal-overlay" onClick={() => setCoinSentiment(null)}>
//     <div className="modal-content sentiment-modal" onClick={(e) => e.stopPropagation()}>
//       <button className="modal-close" onClick={() => setCoinSentiment(null)}>
//         <X size={24} />
//       </button>
      
//       {coinSentiment.loading ? (
//         <div className="loading">🤖 Analyzing sentiment with AI...</div>
//       ) : coinSentiment.error ? (
//         <div className="sentiment-error">
//           <h2>💡 Sentiment Analysis: {selectedCoin}</h2>
//           <p>{coinSentiment.error}</p>
//         </div>
//       ) : (
//         <>
//           <h2>💡 Sentiment Analysis: {coinSentiment.symbol}</h2>
          
//           <div className="sentiment-header">
//             <div className={`sentiment-badge ${coinSentiment.sentiment}`}>
//               {coinSentiment.sentiment?.toUpperCase()}
//             </div>
//             <div className="confidence-score">
//               Confidence: {coinSentiment.confidence}%
//             </div>
//             <div className={`risk-badge ${coinSentiment.riskLevel}`}>
//               Risk: {coinSentiment.riskLevel?.toUpperCase()}
//             </div>
//           </div>
          
//           <div className="sentiment-summary">
//             <h3>Summary</h3>
//             <p>{coinSentiment.summary}</p>
//           </div>
          
//           <div className="sentiment-stats">
//             <div className="stat">
//               <small>Posts Analyzed</small>
//               <strong>{coinSentiment.postCount}</strong>
//             </div>
//             <div className="stat">
//               <small>Avg Score</small>
//               <strong>{coinSentiment.avgScore}</strong>
//             </div>
//           </div>
          
//           {coinSentiment.keyTopics && (
//             <div className="key-topics">
//               <h3>Key Discussion Topics</h3>
//               <div className="topics-list">
//                 {coinSentiment.keyTopics.map((topic, i) => (
//                   <span key={i} className="topic-tag">{topic}</span>
//                 ))}
//               </div>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   </div>
// )}



//         <div className="card" ref={chatbotRef}>
//           <h2><MessageCircle size={22} /> {t('ai_analyst')}</h2>
//           <div className="chatbot">
//             <div className="chatbot-messages">
//               {messages.length === 0 && (
//                 <div className="loading">
//                   💬 {t('chat_example')}<br/><br/>
//                   <strong>{t('example_questions')}</strong><br/>
//                   • {t('example1')}<br/>
//                   • {t('example2')}<br/>
//                   • {t('example3')}<br/>
//                   • {t('example4')}
//                 </div>
//               )}
//               {messages.map((msg, i) => (
//                 <div key={i} className={`message ${msg.sender}`}>
//                   {msg.sender === 'bot' ? (
//                     <div dangerouslySetInnerHTML={{ __html: formatBotMessage(msg.text) }} />
//                   ) : (
//                     <div>{msg.text}</div>
//                   )}
//                 </div>
//               ))}
//               {chatLoading && <div className="loading">🤖 {t('analyzing')}</div>}
//             </div>
//             <div className="chatbot-input">
//               <input
//                 type="text"
//                 value={inputMessage}
//                 onChange={(e) => setInputMessage(e.target.value)}
//                 onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
//                 placeholder={t('ask_placeholder')}
//               />
//               <button 
//                 onClick={handleSendMessage} 
//                 className="btn btn-primary"
//                 disabled={chatLoading || !inputMessage.trim()}
//               >
//                 {t('send')}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Post Detail Modal */}
//       {selectedPost && (
//         <div className="modal-overlay" onClick={() => setSelectedPost(null)}>
//           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//             <button className="modal-close" onClick={() => setSelectedPost(null)}>
//               <X size={24} />
//             </button>
//             <h2>{selectedPost.title}</h2>
//             <div className="modal-meta">
//               <span>r/{selectedPost.subreddit}</span>
//               <span>by u/{selectedPost.author}</span>
//               <span>↑ {selectedPost.score}</span>
//               <span>💬 {selectedPost.numComments}</span>
//             </div>
//             {selectedPost.thumbnail && (
//               <img src={selectedPost.thumbnail} alt="thumbnail" className="modal-thumbnail" />
//             )}
//             <div className="modal-content-text">
//               {selectedPost.content || 'No additional content'}
//             </div>
//             <div className="modal-mentions">
//               {selectedPost.mentions.map(mention => (
//                 <span key={mention} className="mention-tag">{mention}</span>
//               ))}
//             </div>
//             <a href={selectedPost.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
//               View on Reddit
//             </a>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Dashboard;



// new



import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { TrendingUp, MessageCircle, Database, RefreshCw, LogOut, Moon, Sun, Globe, X, BarChart3 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';


//const API_URL = 'http://localhost:5000/api';
const API_URL = 'http://16.16.111.90:5000/api';

function Dashboard({ onLogout }) {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const chatbotRef = useRef(null);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [posts, setPosts] = useState([]);
  const [topCryptos, setTopCryptos] = useState([]);
  const [subreddits, setSubreddits] = useState([]);
  const [selectedSubreddit, setSelectedSubreddit] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [timeFilter, setTimeFilter] = useState('168'); // 7 days default
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [chatLoading, setChatLoading] = useState(false);
  const [scrapeStatus, setScrapeStatus] = useState({ remainingScrapes: 5, totalScrapes: 5 });
  const [selectedPost, setSelectedPost] = useState(null);

// new
const [trendingAnalysis, setTrendingAnalysis] = useState([]);
const [communityHealth, setCommunityHealth] = useState([]);
const [newCoins, setNewCoins] = useState([]);
const [selectedCoin, setSelectedCoin] = useState(null);
const [coinSentiment, setCoinSentiment] = useState(null);


const [allCryptos, setAllCryptos] = useState([]);
const [cryptoPage, setCryptoPage] = useState(1);
const [cryptoSearch, setCryptoSearch] = useState('');
const [cryptoFilter, setCryptoFilter] = useState('count'); // count, symbol, recent
const [cryptoPagination, setCryptoPagination] = useState({ total: 0, pages: 0 });
const [cryptoStats, setCryptoStats] = useState({ totalCoins: 0, totalMentions: 0 });


const [selectedCoinPosts, setSelectedCoinPosts] = useState(null);
const [loadingPosts, setLoadingPosts] = useState(false);


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

  const token = localStorage.getItem('token');
  const config = { headers: { Authorization: `Bearer ${token}` } };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
    setShowLangMenu(false);
  };

  const scrollToChatbot = () => {
    chatbotRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // useEffect(() => {
  //   fetchData();
  //   fetchScrapeStatus();
  // }, [selectedSubreddit, sortBy, timeFilter]);

  // const fetchScrapeStatus = async () => {
  //   try {
  //     const response = await axios.get(`${API_URL}/scraper/scrape-status`, config);
  //     setScrapeStatus(response.data);
  //   } catch (error) {
  //     console.error('Error fetching scrape status:', error);
  //   }
  // };



// Add this function to fetch all cryptos
const fetchAllCryptos = async (page = 1, search = '', filter = 'count') => {
  try {
    const response = await axios.get(
      `${API_URL}/scraper/all-cryptos?page=${page}&limit=50&sortBy=${filter}&search=${search}`,
      config
    );
    setAllCryptos(response.data.cryptos);
    setCryptoPagination(response.data.pagination);
  } catch (error) {
    console.error('Error fetching all cryptos:', error);
  }
};


// Add this function to fetch crypto stats
const fetchCryptoStats = async () => {
  try {
    const response = await axios.get(`${API_URL}/scraper/crypto-stats`, config);
    setCryptoStats(response.data);
  } catch (error) {
    console.error('Error fetching crypto stats:', error);
  }
};


// Add this function to fetch posts for a specific coin:
const fetchCoinPosts = async (symbol) => {
  try {
    setLoadingPosts(true);
    setSelectedCoinPosts(null);
    const response = await axios.get(
      `${API_URL}/scraper/coin-posts/${symbol}?limit=20&sortBy=score`,
      config
    );
    setSelectedCoinPosts(response.data);
  } catch (error) {
    console.error('Error fetching coin posts:', error);
  } finally {
    setLoadingPosts(false);
  }
};




//  Update the useEffect to include these fetches
useEffect(() => {
  fetchData();
  fetchStatus();
  fetchAllCryptos();
  fetchCryptoStats();
  
  const refreshInterval = setInterval(() => {
    fetchData();
    fetchStatus();
    fetchAllCryptos(cryptoPage, cryptoSearch, cryptoFilter);
    fetchCryptoStats();
  }, 5 * 60 * 1000);
  
  return () => clearInterval(refreshInterval);
}, []);

// Update when filters change
useEffect(() => {
  fetchAllCryptos(cryptoPage, cryptoSearch, cryptoFilter);
}, [cryptoPage, cryptoSearch, cryptoFilter]);

useEffect(() => {
  fetchData(); // Reload when filters change
}, [selectedSubreddit, sortBy, timeFilter]);


const fetchStatus = async () => {
  try {
    const response = await axios.get(`${API_URL}/scraper/status`, config);
    setScrapeStatus(response.data);
  } catch (error) {
    console.error('Error fetching status:', error);
  }
};


const fetchData = async () => {
  setLoading(true);
  try {
    const [postsRes, cryptosRes, subsRes, trendingRes, communityRes, newCoinsRes] = await Promise.all([
      axios.get(`${API_URL}/scraper/posts?subreddit=${selectedSubreddit}&sortBy=${sortBy}&timeFilter=${timeFilter}`, config),
      axios.get(`${API_URL}/scraper/top-cryptos`, config),
      axios.get(`${API_URL}/scraper/subreddits`, config),
      axios.get(`${API_URL}/scraper/trending-analysis`, config),
      axios.get(`${API_URL}/scraper/community-health`, config),
      axios.get(`${API_URL}/scraper/new-coins`, config)
    ]);
    
    setPosts(postsRes.data);
    setTopCryptos(cryptosRes.data);
    setSubreddits(subsRes.data);
    setTrendingAnalysis(trendingRes.data.trending || []);
    setCommunityHealth(communityRes.data.communities || []);
    // setNewCoins(newCoinsRes.data.newCoins || []);
    setNewCoins(newCoinsRes.data.newCoins || newCoinsRes.data.trendingCoins || []);
  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    setLoading(false);
  }
};






// new
const fetchSentiment = async (symbol) => {
  try {
    setCoinSentiment({ loading: true });
    const response = await axios.get(`${API_URL}/scraper/sentiment/${symbol}`, config);
    setCoinSentiment(response.data);
    setSelectedCoin(symbol);
  } catch (error) {
    console.error('Error fetching sentiment:', error);
    setCoinSentiment({ error: 'Failed to load sentiment' });
  }
};


  const handleScrape = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`${API_URL}/scraper/scrape`, {}, config);
      
      if (response.data.remainingScrapes !== undefined) {
        setScrapeStatus({
          remainingScrapes: response.data.remainingScrapes,
          totalScrapes: scrapeStatus.totalScrapes
        });
      }
      
      fetchData();
    } catch (error) {
      console.error('Error scraping:', error);
      if (error.response?.data?.error) {
        alert(error.response.data.error);
      }
    } finally {
      setLoading(false);
    }
  };

  const handlePostClick = async (postId) => {
    try {
      const response = await axios.get(`${API_URL}/scraper/posts/${postId}`, config);
      setSelectedPost(response.data);
    } catch (error) {
      console.error('Error fetching post details:', error);
    }
  };

  const formatBotMessage = (text) => {
    let lines = text.split('\n');
    let html = '';
    let inList = false;

    lines.forEach((line) => {
      line = line.trim();
      
      if (!line) {
        if (inList) {
          html += '</ul>';
          inList = false;
        }
        html += '<br/>';
        return;
      }

      if (line.match(/^\*\*(.+?)\*\*$/)) {
        if (inList) {
          html += '</ul>';
          inList = false;
        }
        const heading = line.replace(/^\*\*(.+?)\*\*$/, '$1');
        html += `<strong class="bot-heading">${heading}</strong>`;
        return;
      }

      if (line.match(/^[-*•]\s/)) {
        if (!inList) {
          html += '<ul class="bot-list">';
          inList = true;
        }
        const content = line.replace(/^[-*•]\s/, '');
        html += `<li>${content}</li>`;
        return;
      }

      if (inList) {
        html += '</ul>';
        inList = false;
      }
      html += `<p>${line}</p>`;
    });

    if (inList) {
      html += '</ul>';
    }

    return html;
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;
    
    const userMsg = { text: inputMessage, sender: 'user' };
    setMessages([...messages, userMsg]);
    setInputMessage('');
    setChatLoading(true);

    try {
      const response = await axios.post(
        `${API_URL}/chatbot/chat`,
        { message: inputMessage },
        config
      );
      
      setMessages(prev => [...prev, { text: response.data.response, sender: 'bot' }]);
    } catch (error) {
      setMessages(prev => [...prev, { 
        text: 'Error: Could not get response. Please try again.', 
        sender: 'bot' 
      }]);
    } finally {
      setChatLoading(false);
    }
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1> {t('dashboard_title')}</h1>
        <div className="nav-buttons">
          <button onClick={scrollToChatbot} className="btn btn-secondary" title={t('chatbot')}>
            <MessageCircle size={18} />
          </button>
          <button onClick={fetchData} className="btn btn-secondary" title={t('refresh')}>
            <RefreshCw size={18} />
          </button>
          <button onClick={toggleTheme} className="btn btn-secondary" title={theme === 'light' ? 'Dark Mode' : 'Light Mode'}>
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <div className="language-selector">
            <button onClick={() => setShowLangMenu(!showLangMenu)} className="btn btn-secondary">
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
          <button onClick={onLogout} className="btn btn-secondary">
            <LogOut size={18} /> {t('logout')}
          </button>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="controls">
  <div className="control-row">
    <div className="control-group">
      <label>Subreddit</label>
      <select value={selectedSubreddit} onChange={(e) => setSelectedSubreddit(e.target.value)}>
        <option value="">All Subreddits</option>
        {subreddits.map(sub => (
          <option key={sub} value={sub}>{sub}</option>
        ))}
      </select>
    </div>

    <div className="control-group">
      <label>Time Period</label>
      <select value={timeFilter} onChange={(e) => setTimeFilter(e.target.value)}>
        <option value="">All Time</option>
        <option value="12">Last 12 Hours</option>
        <option value="24">Last 24 Hours</option>
        <option value="48">Last 2 Days</option>
        <option value="168">Last 7 Days</option>
      </select>
    </div>

    <div className="control-group">
      <label>Sort By</label>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="score">Top Rated</option>
      </select>
    </div>

    <button onClick={fetchData} className="btn btn-primary">
      <RefreshCw size={18} /> Refresh
    </button>
  </div>
  
  {scrapeStatus && (
    <div style={{marginTop: '15px', padding: '12px', background: '#e3f2fd', border: '1px solid #2196f3', borderRadius: '8px', color: '#1565c0'}}>
      <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center'}}>
        <span><strong>📊 Total Posts:</strong> {scrapeStatus.totalPosts}</span>
        <span><strong>🔄 Auto-Updates:</strong> Every hour</span>
        <span><strong>⏰ Next Update:</strong> {scrapeStatus.nextScrapeTime ? new Date(scrapeStatus.nextScrapeTime).toLocaleTimeString() : 'Soon'}</span>
      </div>
    </div>
  )}
</div>
        {/* <div className="controls">
          <div className="control-row">
            <div className="control-group">
              <label>{t('filter_subreddit')}</label>
              <select value={selectedSubreddit} onChange={(e) => setSelectedSubreddit(e.target.value)}>
                <option value="">{t('all_subreddits')}</option>
                {subreddits.map(sub => (
                  <option key={sub} value={sub}>{sub}</option>
                ))}
              </select>
            </div>

            <div className="control-group">
              <label>Time Period</label>
              <select value={timeFilter} onChange={(e) => setTimeFilter(e.target.value)}>
                <option value="12">Last 12 Hours</option>
                <option value="24">Last 24 Hours</option>
                <option value="48">Last 2 Days</option>
                <option value="72">Last 3 Days</option>
                <option value="168">Last 7 Days</option>
              </select>
            </div>

            <div className="control-group">
              <label>{t('sort_by')}</label>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="newest">{t('newest')}</option>
                <option value="oldest">{t('oldest')}</option>
                <option value="score">{t('highest_score')}</option>
              </select>
            </div>

            <button 
              onClick={handleScrape} 
              className="btn btn-primary" 
              disabled={loading || scrapeStatus.remainingScrapes === 0}
              style={{whiteSpace: 'nowrap'}}
            >
              {loading ? t('scraping') : `Scrape (${scrapeStatus.remainingScrapes}/${scrapeStatus.totalScrapes})`}
            </button>
          </div>
          
          {scrapeStatus.remainingScrapes === 0 && (
            <div style={{marginTop: '15px', padding: '12px', background: '#fff3cd', border: '1px solid #ffc107', borderRadius: '8px', color: '#856404'}}>
              ⚠️ Daily scrape limit reached. Resets at {new Date(scrapeStatus.resetTime).toLocaleTimeString()}
            </div>
          )}
        </div> */}

        <div className="grid-2">
          <div className="card">
            <h2><Database size={22} /> {t('reddit_posts')} ({posts.length})</h2>
            <div className="posts-list">
              {loading && <div className="loading">Loading posts...</div>}
              {!loading && posts.length === 0 && (
                <div className="loading">{t('no_posts')}</div>
              )}
              {posts.map(post => (
                <div key={post._id} className="post-item" onClick={() => handlePostClick(post._id)} style={{cursor: 'pointer'}}>
                  <div className="post-header">
                    <div className="post-title">{post.title}</div>
                    <div className="post-score">↑ {post.score}</div>
                  </div>
                  <div className="post-meta">
                    r/{post.subreddit} • {post.author} • {post.numComments} comments • {new Date(post.createdAt).toLocaleString()}
                  </div>
                  {post.mentions.length > 0 && (
                    <div className="post-mentions">
                      {post.mentions.map(mention => (
                        <span key={mention} className="mention-tag">{mention}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
           
          <div className="card">
            <h2><TrendingUp size={22} /> {t('top_mentions')}</h2>
            <div>
              {topCryptos.map((crypto, index) => (
                <div key={crypto._id} className="crypto-item">
                  <div>
                    <span style={{color: '#999', marginRight: '12px', fontWeight: 'bold'}}>
                      #{index + 1}
                    </span>
                    <span className="crypto-symbol">{crypto.symbol}</span>
                  </div>
                  <div className="crypto-count">{crypto.count}</div>
                </div>
              ))}
              {topCryptos.length === 0 && (
                <div className="loading">{t('no_data')}</div>
              )}
            </div>
          </div>
        </div>

{/* All Coins Section */}
<div className="card" style={{ marginBottom: '30px' }}>
  <h2>
    <TrendingUp size={22} /> 💰 All Detected Coins ({cryptoStats.totalCoins})
  </h2>
  
  {/* Stats Bar */}
  <div style={{
    display: 'flex', 
    gap: '20px', 
    marginBottom: '20px', 
    padding: '15px', 
    background: 'var(--bg-primary)', 
    borderRadius: '10px'
  }}>
    <div>
      <small style={{ color: 'var(--text-secondary)' }}>Total Coins</small>
      <strong style={{ display: 'block', fontSize: '24px', color: 'var(--text-primary)' }}>
        {cryptoStats.totalCoins}
      </strong>
    </div>
    <div>
      <small style={{ color: 'var(--text-secondary)' }}>Total Mentions</small>
      <strong style={{ display: 'block', fontSize: '24px', color: 'var(--text-primary)' }}>
        {cryptoStats.totalMentions}
      </strong>
    </div>
  </div>
  
  {/* Filters */}
  <div style={{ display: 'flex', gap: '15px', marginBottom: '20px', flexWrap: 'wrap' }}>
    <input
      type="text"
      placeholder="Search coin symbol..."
      value={cryptoSearch}
      onChange={(e) => {
        setCryptoSearch(e.target.value);
        setCryptoPage(1);
      }}
      style={{
        flex: '1',
        minWidth: '200px',
        padding: '10px 15px',
        border: '2px solid var(--border-color)',
        borderRadius: '8px',
        background: 'var(--input-bg)',
        color: 'var(--input-text)'
      }}
    />
    
    <select
      value={cryptoFilter}
      onChange={(e) => {
        setCryptoFilter(e.target.value);
        setCryptoPage(1);
      }}
      style={{
        padding: '10px 15px',
        border: '2px solid var(--border-color)',
        borderRadius: '8px',
        background: 'var(--input-bg)',
        color: 'var(--input-text)'
      }}
    >
      <option value="count">Most Mentioned</option>
      <option value="symbol">Alphabetical</option>
      <option value="recent">Recently Updated</option>
    </select>
  </div>
  
  {/* Coins Grid */}
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '15px',
    marginBottom: '20px',
    maxHeight: '500px',
    overflowY: 'auto',
    padding: '10px'
  }}>
    {allCryptos.map((crypto, index) => (
      <div
        key={crypto._id}
        onClick={() => fetchSentiment(crypto.symbol)}
        style={{
          background: 'var(--bg-primary)',
          padding: '15px',
          borderRadius: '10px',
          border: '2px solid var(--border-color)',
          cursor: 'pointer',
          transition: 'all 0.3s',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-3px)';
          e.currentTarget.style.borderColor = 'var(--primary)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.borderColor = 'var(--border-color)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ 
            fontSize: '18px', 
            fontWeight: '700', 
            color: 'var(--text-primary)' 
          }}>
            {crypto.symbol}
          </span>
          <span style={{
            background: 'var(--button-bg)',
            color: 'var(--button-text)',
            padding: '4px 10px',
            borderRadius: '12px',
            fontSize: '13px',
            fontWeight: '700'
          }}>
            {crypto.count}
          </span>
        </div>
        <small style={{ 
          color: 'var(--text-secondary)', 
          fontSize: '11px' 
        }}>
          Updated: {new Date(crypto.lastUpdated).toLocaleDateString()}
        </small>
        <div style={{
          fontSize: '11px',
          color: 'var(--text-secondary)',
          marginTop: '5px',
          fontStyle: 'italic'
        }}>
          Click for AI sentiment →
        </div>
      </div>
    ))}
  </div>
  
  {/* Pagination */}
  {cryptoPagination.pages > 1 && (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '10px',
      marginTop: '20px'
    }}>
      <button
        onClick={() => setCryptoPage(prev => Math.max(1, prev - 1))}
        disabled={cryptoPage === 1}
        className="btn btn-secondary"
        style={{ padding: '8px 16px' }}
      >
        Previous
      </button>
      
      <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>
        Page {cryptoPage} of {cryptoPagination.pages}
      </span>
      
      <button
        onClick={() => setCryptoPage(prev => Math.min(cryptoPagination.pages, prev + 1))}
        disabled={cryptoPage === cryptoPagination.pages}
        className="btn btn-secondary"
        style={{ padding: '8px 16px' }}
      >
        Next
      </button>
    </div>
  )}
  
  {allCryptos.length === 0 && (
    <div className="loading">No coins found. Try adjusting your filters.</div>
  )}
</div>


{/* Trending Analysis Section */}
<div className="card">
  <h2><TrendingUp size={22} /> 🔥 Trending Coins (24h Momentum)</h2>
  {loading ? (
    <div className="loading">Loading trending data...</div>
  ) : (
    <div className="trending-grid">
      {trendingAnalysis.slice(0, 12).map((coin, index) => (
        <div 
          key={coin.symbol} 
          className="trending-card" 
          onClick={() => fetchSentiment(coin.symbol)}
          style={{cursor: 'pointer'}}
        >
          <div className="trending-header">
            <span className="rank">#{index + 1}</span>
            <span className="crypto-symbol">{coin.symbol}</span>
            <span className="status-badge">{coin.status}</span>
          </div>
          <div className="trending-stats">
            <div className="stat">
              <small>24h Mentions</small>
              <strong>{coin.count24h}</strong>
            </div>
            <div className="stat">
              <small>7d Total</small>
              <strong>{coin.count7d}</strong>
            </div>
            <div className="stat">
              <small>Momentum</small>
              <strong className={coin.momentum > 50 ? 'positive' : 'neutral'}>
                {typeof coin.momentum === 'number' ? `${coin.momentum}%` : coin.momentum}
              </strong>
            </div>
            <div className="stat">
              <small>Avg Score</small>
              <strong>{coin.avgScore}</strong>
            </div>
          </div>
          <div className="trending-footer">
            <small>💬 {coin.totalComments} comments • Click for AI analysis</small>
          </div>
        </div>
      ))}
    </div>
  )}
</div>



{/* New Coins Alert Section - With AI Discovery Highlight */}
{newCoins.length > 0 && (
  <div className="card new-coins-card">
    <h2>
      <Database size={22} /> 🆕 New Coin Discoveries (48h)
      {newCoins.filter(c => c.isAIDiscovered).length > 0 && (
        <span style={{
          marginLeft: '15px',
          background: '#ff9800',
          color: 'white',
          padding: '5px 12px',
          borderRadius: '15px',
          fontSize: '12px',
          fontWeight: '700'
        }}>
          🤖 {newCoins.filter(c => c.isAIDiscovered).length} AI Discovered
        </span>
      )}
    </h2>
    
    <div className="new-coins-list">
      {newCoins.map(coin => (
        <div 
          key={coin.symbol} 
          className="new-coin-item" 
          onClick={() => fetchSentiment(coin.symbol)}
          style={{
            cursor: 'pointer',
            border: coin.isAIDiscovered 
              ? '2px solid #ff9800' 
              : '1px solid rgba(255,255,255,0.2)',
            position: 'relative'
          }}
        >
          {/* AI Discovery Badge */}
          {coin.isAIDiscovered && (
            <div style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              background: '#ff9800',
              color: 'white',
              padding: '4px 10px',
              borderRadius: '12px',
              fontSize: '10px',
              fontWeight: '700',
              display: 'flex',
              alignItems: 'center',
              gap: '5px'
            }}>
              🤖 AI Found
            </div>
          )}
          
          <div className="new-coin-header">
            <span className="crypto-symbol">{coin.symbol}</span>
            <span className="new-badge">{coin.status}</span>
          </div>
          
          <div className="new-coin-info">
            <small>First seen: {new Date(coin.firstMentioned).toLocaleString()}</small>
            <div className="new-coin-stats">
              <span>{coin.mentionCount} mentions</span>
              <span>Avg score: {coin.avgScore}</span>
              {coin.previousCount > 0 && (
                <span style={{ color: '#4caf50', fontWeight: '700' }}>
                  {coin.growthRate}
                </span>
              )}
            </div>
            <div className="new-coin-subs">
              {coin.subreddits.map(sub => (
                <span key={sub} className="sub-tag">r/{sub}</span>
              ))}
            </div>
          </div>
          
          <div className="new-coin-post">
            <small>Top post: {coin.topPost.substring(0, 80)}...</small>
          </div>
          
          {/* Highlight if from specific subreddits */}
          {coin.subreddits.includes('CryptoMoonShots') && (
            <div style={{
              marginTop: '10px',
              padding: '5px 10px',
              background: 'rgba(76, 175, 80, 0.2)',
              borderRadius: '8px',
              fontSize: '11px',
              color: '#fff',
              fontWeight: '600'
            }}>
              🚀 From CryptoMoonShots
            </div>
          )}
        </div>
      ))}
    </div>
    
    {/* Stats Footer */}
    <div style={{
      marginTop: '20px',
      padding: '15px',
      background: 'rgba(255,255,255,0.1)',
      borderRadius: '10px',
      display: 'flex',
      justifyContent: 'space-around',
      fontSize: '13px'
    }}>
      <div>
        <strong>{newCoins.length}</strong> New Coins
      </div>
      <div>
        <strong>{newCoins.filter(c => c.isAIDiscovered).length}</strong> AI Discovered
      </div>
      <div>
        <strong>{newCoins.filter(c => !c.isAIDiscovered).length}</strong> Pattern Detected
      </div>
    </div>
  </div>
)}










{/* Community Health Section */}
<div className="card">
  <h2><BarChart3 size={22} /> 📊 Community Activity</h2>
  {loading ? (
    <div className="loading">Loading community data...</div>
  ) : (
    <div className="community-grid">
      {communityHealth.map(community => (
        <div key={community.subreddit} className="community-card">
          <h3>r/{community.subreddit}</h3>
          <div className={`activity-badge ${community.activityLevel.toLowerCase()}`}>
            {community.activityLevel} Activity
          </div>
          <div className="community-stats">
            <div className="stat-row">
              <span>Total Posts:</span>
              <strong>{community.totalPosts}</strong>
            </div>
            <div className="stat-row">
              <span>Last 24h:</span>
              <strong>{community.posts24h}</strong>
            </div>
            <div className="stat-row">
              <span>Avg Score:</span>
              <strong>{community.avgScore}</strong>
            </div>
            <div className="stat-row">
              <span>Avg Comments:</span>
              <strong>{community.avgComments}</strong>
            </div>
            <div className="stat-row">
              <span>Engagement:</span>
              <strong>{community.engagementScore}</strong>
            </div>
          </div>
          <div className="last-active">
            <small>Last active: {new Date(community.lastActive).toLocaleString()}</small>
          </div>
        </div>
      ))}
    </div>
  )}
</div>

{/* Sentiment Analysis Modal */}
{coinSentiment && (
  <div className="modal-overlay" onClick={() => setCoinSentiment(null)}>
    <div className="modal-content sentiment-modal" onClick={(e) => e.stopPropagation()}>
      <button className="modal-close" onClick={() => setCoinSentiment(null)}>
        <X size={24} />
      </button>
      
      {coinSentiment.loading ? (
        <div className="loading">🤖 Analyzing sentiment with AI...</div>
      ) : coinSentiment.error ? (
        <div className="sentiment-error">
          <h2>💡 Sentiment Analysis: {selectedCoin}</h2>
          <p>{coinSentiment.error}</p>
        </div>
      ) : (
        <>
          <h2>💡 Sentiment Analysis: {coinSentiment.symbol}</h2>
          
          <div className="sentiment-header">
            <div className={`sentiment-badge ${coinSentiment.sentiment}`}>
              {coinSentiment.sentiment?.toUpperCase()}
            </div>
            <div className="confidence-score">
              Confidence: {coinSentiment.confidence}%
            </div>
            <div className={`risk-badge ${coinSentiment.riskLevel}`}>
              Risk: {coinSentiment.riskLevel?.toUpperCase()}
            </div>
          </div>
          
          <div className="sentiment-summary">
            <h3>Summary</h3>
            <p>{coinSentiment.summary}</p>
          </div>
          
          <div className="sentiment-stats">
            <div className="stat">
              <small>Posts Analyzed</small>
              <strong>{coinSentiment.postCount}</strong>
            </div>
            <div className="stat">
              <small>Avg Score</small>
              <strong>{coinSentiment.avgScore}</strong>
            </div>
          </div>
          
          {coinSentiment.keyTopics && (
            <div className="key-topics">
              <h3>Key Discussion Topics</h3>
              <div className="topics-list">
                {coinSentiment.keyTopics.map((topic, i) => (
                  <span key={i} className="topic-tag">{topic}</span>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  </div>
)}



        <div className="card" ref={chatbotRef}>
          <h2><MessageCircle size={22} /> {t('ai_analyst')}</h2>
          <div className="chatbot">
            <div className="chatbot-messages">
              {messages.length === 0 && (
                <div className="loading">
                  💬 {t('chat_example')}<br/><br/>
                  <strong>{t('example_questions')}</strong><br/>
                  • {t('example1')}<br/>
                  • {t('example2')}<br/>
                  • {t('example3')}<br/>
                  • {t('example4')}
                </div>
              )}
              {messages.map((msg, i) => (
                <div key={i} className={`message ${msg.sender}`}>
                  {msg.sender === 'bot' ? (
                    <div dangerouslySetInnerHTML={{ __html: formatBotMessage(msg.text) }} />
                  ) : (
                    <div>{msg.text}</div>
                  )}
                </div>
              ))}
              {chatLoading && <div className="loading">🤖 {t('analyzing')}</div>}
            </div>
            <div className="chatbot-input">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder={t('ask_placeholder')}
              />
              <button 
                onClick={handleSendMessage} 
                className="btn btn-primary"
                disabled={chatLoading || !inputMessage.trim()}
              >
                {t('send')}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Post Detail Modal */}
      {selectedPost && (
        <div className="modal-overlay" onClick={() => setSelectedPost(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedPost(null)}>
              <X size={24} />
            </button>
            <h2>{selectedPost.title}</h2>
            <div className="modal-meta">
              <span>r/{selectedPost.subreddit}</span>
              <span>by u/{selectedPost.author}</span>
              <span>↑ {selectedPost.score}</span>
              <span>💬 {selectedPost.numComments}</span>
            </div>
            {selectedPost.thumbnail && (
              <img src={selectedPost.thumbnail} alt="thumbnail" className="modal-thumbnail" />
            )}
            <div className="modal-content-text">
              {selectedPost.content || 'No additional content'}
            </div>
            <div className="modal-mentions">
              {selectedPost.mentions.map(mention => (
                <span key={mention} className="mention-tag">{mention}</span>
              ))}
            </div>
            <a href={selectedPost.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              View on Reddit
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;