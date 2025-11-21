// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';

// const resources = {
//   en: {
//     translation: {
//       // Navbar
//       "logout": "Logout",
//       "chatbot": "AI Chat",
//       "refresh": "Refresh",
      
//       // Home
//       "title": "Reddit Crypto Intelligence",
//       "subtitle": "Powered by AI",
//       "description": "Track cryptocurrency discussions across Reddit in real-time. Get AI-powered insights, sentiment analysis, and market trends from the crypto community.",
//       "getStarted": "Start Analyzing",
//       "learnMore": "Learn More",
//       "login": "Login",
//       "features": "Powerful Features",
      
//       // Dashboard
//       "dashboard_title": "CRYPTO REDDIT INTELLIGENCE",
//       "filter_subreddit": "Filter by Subreddit",
//       "sort_by": "Sort Posts By",
//       "scrape_now": "Scrape Now",
//       "scraping": "Scraping...",
//       "reddit_posts": "Reddit Posts",
//       "top_mentions": "Top Crypto Mentions",
//       "ai_analyst": "AI Market Analyst",
//       "ask_placeholder": "Ask about crypto trends, Bitcoin, Ethereum...",
//       "send": "Send",
//       "newest": "Newest First",
//       "oldest": "Oldest First",
//       "highest_score": "Highest Score",
//       "all_subreddits": "All Subreddits",
//       "no_posts": "No posts found. Click 'Scrape Now' to fetch data.",
//       "no_data": "No data yet. Scrape posts to see trends.",
      
//       // Login
//       "welcome_back": "Welcome Back",
//       "create_account": "Create Account",
//       "signin_desc": "Sign in to your account",
//       "signup_desc": "Sign up to access crypto insights",
//       "email": "Email",
//       "password": "Password",
//       "register": "Register",
//       "already_account": "Already have an account?",
//       "no_account": "Don't have an account?",
//       "back_home": "Back to Home",
//       "google_signin": "Sign in with Google",
//       "or": "OR",
      
//       // Features
//       "feature1_title": "Reddit Scraping",
//       "feature1_desc": "Automatically collect posts from top crypto subreddits with real-time updates.",
//       "feature2_title": "Trend Analysis",
//       "feature2_desc": "Identify trending cryptocurrencies based on mention frequency and engagement.",
//       "feature3_title": "AI Chatbot",
//       "feature3_desc": "Ask questions and get intelligent insights powered by Google Gemini AI.",
//       "feature4_title": "Smart Filters",
//       "feature4_desc": "Filter by subreddit, sort by score or date, and customize your data view.",
//       "feature5_title": "Secure Access",
//       "feature5_desc": "Your data is protected with JWT authentication and encrypted storage.",
//       "feature6_title": "Real-time Updates",
//       "feature6_desc": "Get the latest crypto discussions as they happen on Reddit communities.",
      
//       // Chat
//       "chat_example": "Ask me about crypto trends!",
//       "example_questions": "Example questions:",
//       "example1": "What's the sentiment around Bitcoin?",
//       "example2": "Which altcoins are trending?",
//       "example3": "Tell me about Solana insights",
//       "example4": "What are the top discussions today?",
//       "analyzing": "Analyzing Reddit data..."
//     }
//   },
//   es: {
//     translation: {
//       "logout": "Cerrar sesión",
//       "chatbot": "Chat IA",
//       "refresh": "Actualizar",
//       "title": "Inteligencia Cripto de Reddit",
//       "subtitle": "Impulsado por IA",
//       "description": "Rastrea discusiones de criptomonedas en Reddit en tiempo real. Obtén información impulsada por IA, análisis de sentimiento y tendencias del mercado.",
//       "getStarted": "Comenzar Análisis",
//       "learnMore": "Saber Más",
//       "login": "Iniciar Sesión",
//       "features": "Características Poderosas",
//       "dashboard_title": "INTELIGENCIA CRIPTO DE REDDIT",
//       "filter_subreddit": "Filtrar por Subreddit",
//       "sort_by": "Ordenar Por",
//       "scrape_now": "Extraer Ahora",
//       "scraping": "Extrayendo...",
//       "reddit_posts": "Publicaciones de Reddit",
//       "top_mentions": "Principales Menciones Cripto",
//       "ai_analyst": "Analista IA del Mercado",
//       "ask_placeholder": "Pregunta sobre tendencias cripto, Bitcoin, Ethereum...",
//       "send": "Enviar",
//       "newest": "Más Reciente",
//       "oldest": "Más Antiguo",
//       "highest_score": "Puntuación Más Alta",
//       "all_subreddits": "Todos los Subreddits",
//       "welcome_back": "Bienvenido de Nuevo",
//       "create_account": "Crear Cuenta",
//       "email": "Correo Electrónico",
//       "password": "Contraseña",
//       "register": "Registrarse",
//       "already_account": "¿Ya tienes una cuenta?",
//       "no_account": "¿No tienes una cuenta?",
//       "back_home": "Volver al Inicio",
//       "google_signin": "Iniciar con Google",
//       "or": "O"
//     }
//   },
//   ur: {
//     translation: {
//       "logout": "لاگ آؤٹ",
//       "chatbot": "اے آئی چیٹ",
//       "refresh": "تازہ کریں",
//       "title": "ریڈٹ کرپٹو انٹیلیجنس",
//       "subtitle": "اے آئی سے چلایا گیا",
//       "description": "ریئل ٹائم میں ریڈٹ پر کرپٹو کرنسی بحثوں کو ٹریک کریں۔ اے آئی سے چلنے والی بصیرت، جذبات کا تجزیہ، اور مارکیٹ کے رجحانات حاصل کریں۔",
//       "getStarted": "تجزیہ شروع کریں",
//       "learnMore": "مزید جانیں",
//       "login": "لاگ ان",
//       "features": "طاقتور خصوصیات",
//       "dashboard_title": "کرپٹو ریڈٹ انٹیلیجنس",
//       "filter_subreddit": "سب ریڈٹ کے ذریعے فلٹر کریں",
//       "sort_by": "ترتیب دیں",
//       "scrape_now": "ابھی سکریپ کریں",
//       "scraping": "سکریپنگ...",
//       "reddit_posts": "ریڈٹ پوسٹس",
//       "top_mentions": "ٹاپ کرپٹو تذکرے",
//       "ai_analyst": "اے آئی مارکیٹ تجزیہ کار",
//       "send": "بھیجیں",
//       "welcome_back": "خوش آمدید",
//       "create_account": "اکاؤنٹ بنائیں",
//       "email": "ای میل",
//       "password": "پاس ورڈ",
//       "register": "رجسٹر کریں",
//       "back_home": "گھر واپس",
//       "google_signin": "گوگل سے سائن ان کریں",
//       "or": "یا"
//     }
//   },
//   hi: {
//     translation: {
//       "logout": "लॉग आउट",
//       "chatbot": "एआई चैट",
//       "refresh": "रीफ्रेश",
//       "title": "रेडिट क्रिप्टो इंटेलिजेंस",
//       "subtitle": "एआई द्वारा संचालित",
//       "description": "रियल टाइम में रेडिट पर क्रिप्टोकरेंसी चर्चाओं को ट्रैक करें। एआई-संचालित अंतर्दृष्टि, भावना विश्लेषण, और बाजार के रुझान प्राप्त करें।",
//       "getStarted": "विश्लेषण शुरू करें",
//       "learnMore": "और जानें",
//       "login": "लॉगिन",
//       "features": "शक्तिशाली सुविधाएँ",
//       "dashboard_title": "क्रिप्टो रेडिट इंटेलिजेंस",
//       "filter_subreddit": "सबरेडिट द्वारा फ़िल्टर करें",
//       "sort_by": "क्रमबद्ध करें",
//       "scrape_now": "अभी स्क्रैप करें",
//       "scraping": "स्क्रैपिंग...",
//       "reddit_posts": "रेडिट पोस्ट",
//       "top_mentions": "शीर्ष क्रिप्टो उल्लेख",
//       "ai_analyst": "एआई मार्केट विश्लेषक",
//       "send": "भेजें",
//       "welcome_back": "वापसी पर स्वागत है",
//       "create_account": "खाता बनाएं",
//       "email": "ईमेल",
//       "password": "पासवर्ड",
//       "register": "रजिस्टर करें",
//       "back_home": "होम पर वापस",
//       "google_signin": "गूगल से साइन इन करें",
//       "or": "या"
//     }
//   },
//   ar: {
//     translation: {
//       "logout": "تسجيل الخروج",
//       "chatbot": "محادثة الذكاء الاصطناعي",
//       "refresh": "تحديث",
//       "title": "استخبارات العملات المشفرة من Reddit",
//       "subtitle": "مدعوم بالذكاء الاصطناعي",
//       "description": "تتبع مناقشات العملات المشفرة عبر Reddit في الوقت الفعلي. احصل على رؤى مدعومة بالذكاء الاصطناعي وتحليل المشاعر واتجاهات السوق.",
//       "getStarted": "ابدأ التحليل",
//       "learnMore": "تعلم المزيد",
//       "login": "تسجيل الدخول",
//       "dashboard_title": "استخبارات العملات المشفرة",
//       "send": "إرسال",
//       "welcome_back": "مرحبا بعودتك",
//       "email": "البريد الإلكتروني",
//       "password": "كلمة المرور",
//       "register": "تسجيل",
//       "google_signin": "تسجيل الدخول بواسطة Google",
//       "or": "أو"
//     }
//   },
//   zh: {
//     translation: {
//       "logout": "登出",
//       "chatbot": "AI 聊天",
//       "refresh": "刷新",
//       "title": "Reddit 加密货币情报",
//       "subtitle": "AI 驱动",
//       "description": "实时跟踪 Reddit 上的加密货币讨论。获取 AI 驱动的见解、情绪分析和市场趋势。",
//       "getStarted": "开始分析",
//       "learnMore": "了解更多",
//       "login": "登录",
//       "dashboard_title": "加密货币 REDDIT 情报",
//       "send": "发送",
//       "welcome_back": "欢迎回来",
//       "email": "电子邮件",
//       "password": "密码",
//       "register": "注册",
//       "google_signin": "使用 Google 登录",
//       "or": "或"
//     }
//   },
//   ja: {
//     translation: {
//       "logout": "ログアウト",
//       "chatbot": "AI チャット",
//       "refresh": "更新",
//       "title": "Reddit 暗号通貨インテリジェンス",
//       "subtitle": "AI搭載",
//       "description": "Reddit での暗号通貨の議論をリアルタイムで追跡します。AI を活用した洞察、センチメント分析、市場トレンドを取得します。",
//       "getStarted": "分析を開始",
//       "learnMore": "もっと詳しく",
//       "login": "ログイン",
//       "dashboard_title": "暗号通貨 REDDIT インテリジェンス",
//       "send": "送信",
//       "welcome_back": "おかえりなさい",
//       "email": "メール",
//       "password": "パスワード",
//       "register": "登録",
//       "google_signin": "Google でサインイン",
//       "or": "または"
//     }
//   },
//   fr: {
//     translation: {
//       "logout": "Déconnexion",
//       "login": "Connexion",
//       "send": "Envoyer",
//       "welcome_back": "Bon retour",
//       "email": "E-mail",
//       "password": "Mot de passe",
//       "register": "S'inscrire"
//     }
//   },
//   de: {
//     translation: {
//       "logout": "Abmelden",
//       "login": "Anmelden",
//       "send": "Senden",
//       "welcome_back": "Willkommen zurück",
//       "email": "E-Mail",
//       "password": "Passwort",
//       "register": "Registrieren"
//     }
//   }
// };

// i18n
//   .use(initReactI18next)
//   .init({
//     resources,
//     lng: localStorage.getItem('language') || 'en',
//     fallbackLng: 'en',
//     interpolation: {
//       escapeValue: false
//     }
//   });

// export default i18n;





import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navbar
      "logout": "Logout",
      "chatbot": "AI Chat",
      "refresh": "Refresh",
      
      // Home
      "title": "Reddit Crypto Intelligence",
      "subtitle": "Powered by AI",
      "description": "Track cryptocurrency discussions across Reddit in real-time. Get AI-powered insights, sentiment analysis, and market trends from the crypto community.",
      "getStarted": "Start Analyzing",
      "learnMore": "Learn More",
      "login": "Login",
      "features": "Powerful Features",
      
      // Dashboard
      "dashboard_title": "CRYPTO REDDIT INTELLIGENCE",
      "filter_subreddit": "Filter by Subreddit",
      "sort_by": "Sort Posts By",
      "scrape_now": "Scrape Now",
      "scraping": "Scraping...",
      "reddit_posts": "Reddit Posts",
      "top_mentions": "Top Crypto Mentions",
      "ai_analyst": "AI Market Analyst",
      "ask_placeholder": "Ask about crypto trends, Bitcoin, Ethereum...",
      "send": "Send",
      "newest": "Newest First",
      "oldest": "Oldest First",
      "highest_score": "Highest Score",
      "all_subreddits": "All Subreddits",
      "no_posts": "No posts found. Click 'Scrape Now' to fetch data.",
      "no_data": "No data yet. Scrape posts to see trends.",
      
      // Login
      "welcome_back": "Welcome Back",
      "create_account": "Create Account",
      "signin_desc": "Sign in to your account",
      "signup_desc": "Sign up to access crypto insights",
      "email": "Email",
      "password": "Password",
      "register": "Register",
      "already_account": "Already have an account?",
      "no_account": "Don't have an account?",
      "back_home": "Back to Home",
      "google_signin": "Sign in with Google",
      "or": "OR",
      
      // Features
      "feature1_title": "Reddit Scraping",
      "feature1_desc": "Automatically collect posts from top crypto subreddits with real-time updates.",
      "feature2_title": "Trend Analysis",
      "feature2_desc": "Identify trending cryptocurrencies based on mention frequency and engagement.",
      "feature3_title": "AI Chatbot",
      "feature3_desc": "Ask questions and get intelligent insights powered by Google Gemini AI.",
      "feature4_title": "Smart Filters",
      "feature4_desc": "Filter by subreddit, sort by score or date, and customize your data view.",
      "feature5_title": "Secure Access",
      "feature5_desc": "Your data is protected with JWT authentication and encrypted storage.",
      "feature6_title": "Real-time Updates",
      "feature6_desc": "Get the latest crypto discussions as they happen on Reddit communities.",
      
      // Chat
      "chat_example": "Ask me about crypto trends!",
      "example_questions": "Example questions:",
      "example1": "What's the sentiment around Bitcoin?",
      "example2": "Which altcoins are trending?",
      "example3": "Tell me about Solana insights",
      "example4": "What are the top discussions today?",
      "analyzing": "Analyzing Reddit data..."
    }
  },
  es: {
    translation: {
      // Navbar
      "logout": "Cerrar sesión",
      "chatbot": "Chat IA",
      "refresh": "Actualizar",
      
      // Home
      "title": "Inteligencia Cripto de Reddit",
      "subtitle": "Impulsado por IA",
      "description": "Rastrea discusiones de criptomonedas en Reddit en tiempo real. Obtén información impulsada por IA, análisis de sentimiento y tendencias del mercado de la comunidad cripto.",
      "getStarted": "Comenzar Análisis",
      "learnMore": "Saber Más",
      "login": "Iniciar Sesión",
      "features": "Características Poderosas",
      
      // Dashboard
      "dashboard_title": "INTELIGENCIA CRIPTO DE REDDIT",
      "filter_subreddit": "Filtrar por Subreddit",
      "sort_by": "Ordenar Publicaciones Por",
      "scrape_now": "Extraer Ahora",
      "scraping": "Extrayendo...",
      "reddit_posts": "Publicaciones de Reddit",
      "top_mentions": "Principales Menciones Cripto",
      "ai_analyst": "Analista IA del Mercado",
      "ask_placeholder": "Pregunta sobre tendencias cripto, Bitcoin, Ethereum...",
      "send": "Enviar",
      "newest": "Más Reciente Primero",
      "oldest": "Más Antiguo Primero",
      "highest_score": "Puntuación Más Alta",
      "all_subreddits": "Todos los Subreddits",
      "no_posts": "No se encontraron publicaciones. Haz clic en 'Extraer Ahora' para obtener datos.",
      "no_data": "No hay datos aún. Extrae publicaciones para ver tendencias.",
      
      // Login
      "welcome_back": "Bienvenido de Nuevo",
      "create_account": "Crear Cuenta",
      "signin_desc": "Inicia sesión en tu cuenta",
      "signup_desc": "Regístrate para acceder a insights cripto",
      "email": "Correo Electrónico",
      "password": "Contraseña",
      "register": "Registrarse",
      "already_account": "¿Ya tienes una cuenta?",
      "no_account": "¿No tienes una cuenta?",
      "back_home": "Volver al Inicio",
      "google_signin": "Iniciar con Google",
      "or": "O",
      
      // Features
      "feature1_title": "Extracción de Reddit",
      "feature1_desc": "Recopila automáticamente publicaciones de los principales subreddits cripto con actualizaciones en tiempo real.",
      "feature2_title": "Análisis de Tendencias",
      "feature2_desc": "Identifica criptomonedas en tendencia basadas en la frecuencia de menciones y el engagement.",
      "feature3_title": "Chatbot IA",
      "feature3_desc": "Haz preguntas y obtén insights inteligentes impulsados por Google Gemini AI.",
      "feature4_title": "Filtros Inteligentes",
      "feature4_desc": "Filtra por subreddit, ordena por puntuación o fecha, y personaliza tu vista de datos.",
      "feature5_title": "Acceso Seguro",
      "feature5_desc": "Tus datos están protegidos con autenticación JWT y almacenamiento encriptado.",
      "feature6_title": "Actualizaciones en Tiempo Real",
      "feature6_desc": "Obtén las últimas discusiones cripto tal como ocurren en las comunidades de Reddit.",
      
      // Chat
      "chat_example": "¡Pregúntame sobre tendencias cripto!",
      "example_questions": "Preguntas de ejemplo:",
      "example1": "¿Cuál es el sentimiento alrededor de Bitcoin?",
      "example2": "¿Cuáles altcoins están en tendencia?",
      "example3": "Cuéntame sobre insights de Solana",
      "example4": "¿Cuáles son las discusiones principales hoy?",
      "analyzing": "Analizando datos de Reddit..."
    }
  },
  ur: {
    translation: {
      // Navbar
      "logout": "لاگ آؤٹ",
      "chatbot": "اے آئی چیٹ",
      "refresh": "تازہ کریں",
      
      // Home
      "title": "ریڈٹ کرپٹو انٹیلیجنس",
      "subtitle": "اے آئی سے چلایا گیا",
      "description": "ریئل ٹائم میں ریڈٹ پر کرپٹو کرنسی بحثوں کو ٹریک کریں۔ اے آئی سے چلنے والی بصیرت، جذبات کا تجزیہ، اور مارکیٹ کے رجحانات کریپٹو کمیونٹی سے حاصل کریں۔",
      "getStarted": "تجزیہ شروع کریں",
      "learnMore": "مزید جانیں",
      "login": "لاگ ان",
      "features": "طاقتور خصوصیات",
      
      // Dashboard
      "dashboard_title": "کرپٹو ریڈٹ انٹیلیجنس",
      "filter_subreddit": "سب ریڈٹ کے ذریعے فلٹر کریں",
      "sort_by": "پوسٹس کو ترتیب دیں",
      "scrape_now": "ابھی سکریپ کریں",
      "scraping": "سکریپنگ...",
      "reddit_posts": "ریڈٹ پوسٹس",
      "top_mentions": "ٹاپ کرپٹو تذکرے",
      "ai_analyst": "اے آئی مارکیٹ تجزیہ کار",
      "ask_placeholder": "کرپٹو رجحانات، بٹ کوائن، ایتھریم کے بارے میں پوچھیں...",
      "send": "بھیجیں",
      "newest": "سب سے نئی پہلے",
      "oldest": "سب سے پرانی پہلے",
      "highest_score": "سب سے زیادہ سکور",
      "all_subreddits": "تمام سب ریڈٹس",
      "no_posts": "کوئی پوسٹس نہیں ملیں۔ ڈیٹا حاصل کرنے کے لیے 'ابھی سکریپ کریں' پر کلک کریں۔",
      "no_data": "ابھی تک کوئی ڈیٹا نہیں۔ رجحانات دیکھنے کے لیے پوسٹس سکریپ کریں۔",
      
      // Login
      "welcome_back": "خوش آمدید",
      "create_account": "اکاؤنٹ بنائیں",
      "signin_desc": "اپنے اکاؤنٹ میں سائن ان کریں",
      "signup_desc": "کرپٹو بصیرت تک رسائی کے لیے سائن اپ کریں",
      "email": "ای میل",
      "password": "پاس ورڈ",
      "register": "رجسٹر کریں",
      "already_account": "پہلے سے اکاؤنٹ ہے؟",
      "no_account": "اکاؤنٹ نہیں ہے؟",
      "back_home": "گھر واپس",
      "google_signin": "گوگل سے سائن ان کریں",
      "or": "یا",
      
      // Features
      "feature1_title": "ریڈٹ سکریپنگ",
      "feature1_desc": "ٹاپ کرپٹو سب ریڈٹس سے پوسٹس کو خودکار طور پر جمع کریں ریئل ٹائم اپ ڈیٹس کے ساتھ۔",
      "feature2_title": "رجحان تجزیہ",
      "feature2_desc": "تذکرہ کی فریکوئنسی اور انگیجمنٹ کی بنیاد پر ٹرینڈنگ کرپٹو کرنسیز کی نشاندہی کریں۔",
      "feature3_title": "اے آئی چیٹ بوٹ",
      "feature3_desc": "سوالات پوچھیں اور گوگل جیمنی اے آئی سے چلنے والی ذہین بصیرت حاصل کریں۔",
      "feature4_title": "سمارٹ فلٹرز",
      "feature4_desc": "سب ریڈٹ کے ذریعے فلٹر کریں، سکور یا تاریخ کے ذریعے ترتیب دیں، اور اپنی ڈیٹا ویو کو اپنی مرضی کے مطابق بنائیں۔",
      "feature5_title": "محفوظ رسائی",
      "feature5_desc": "آپ کا ڈیٹا جے ڈبلیو ٹی توثیق اور انکرپٹڈ سٹوریج سے محفوظ ہے۔",
      "feature6_title": "ریئل ٹائم اپ ڈیٹس",
      "feature6_desc": "ریڈٹ کمیونٹیز پر ہونے والی تازہ ترین کرپٹو بحثیں حاصل کریں۔",
      
      // Chat
      "chat_example": "مجھ سے کرپٹو رجحانات کے بارے میں پوچھیں!",
      "example_questions": "مثالی سوالات:",
      "example1": "بٹ کوائن کے ارد گرد کا جذبات کیا ہے؟",
      "example2": "کون سے آلٹ کوائنز ٹرینڈنگ ہیں؟",
      "example3": "سولانا بصیرت کے بارے میں بتائیں",
      "example4": "آج کی ٹاپ بحثیں کیا ہیں؟",
      "analyzing": "ریڈٹ ڈیٹا کا تجزیہ کر رہے ہیں..."
    }
  },
  hi: {
    translation: {
      // Navbar
      "logout": "लॉग आउट",
      "chatbot": "एआई चैट",
      "refresh": "रीफ्रेश",
      
      // Home
      "title": "रेडिट क्रिप्टो इंटेलिजेंस",
      "subtitle": "एआई द्वारा संचालित",
      "description": "रियल टाइम में रेडिट पर क्रिप्टोकरेंसी चर्चाओं को ट्रैक करें। एआई-संचालित अंतर्दृष्टि, भावना विश्लेषण, और बाजार के रुझान क्रिप्टो समुदाय से प्राप्त करें।",
      "getStarted": "विश्लेषण शुरू करें",
      "learnMore": "और जानें",
      "login": "लॉगिन",
      "features": "शक्तिशाली सुविधाएँ",
      
      // Dashboard
      "dashboard_title": "क्रिप्टो रेडिट इंटेलिजेंस",
      "filter_subreddit": "सबरेडिट द्वारा फ़िल्टर करें",
      "sort_by": "पोस्ट को क्रमबद्ध करें",
      "scrape_now": "अभी स्क्रैप करें",
      "scraping": "स्क्रैपिंग...",
      "reddit_posts": "रेडिट पोस्ट",
      "top_mentions": "शीर्ष क्रिप्टो उल्लेख",
      "ai_analyst": "एआई मार्केट विश्लेषक",
      "ask_placeholder": "क्रिप्टो रुझान, बिटकॉइन, एथेरियम के बारे में पूछें...",
      "send": "भेजें",
      "newest": "सबसे नया पहले",
      "oldest": "सबसे पुराना पहले",
      "highest_score": "सबसे उच्च स्कोर",
      "all_subreddits": "सभी सबरेडिट",
      "no_posts": "कोई पोस्ट नहीं मिली। डेटा प्राप्त करने के लिए 'स्क्रैप नाउ' पर क्लिक करें।",
      "no_data": "अभी तक कोई डेटा नहीं। रुझान देखने के लिए पोस्ट स्क्रैप करें।",
      
      // Login
      "welcome_back": "वापसी पर स्वागत है",
      "create_account": "खाता बनाएं",
      "signin_desc": "अपने खाते में साइन इन करें",
      "signup_desc": "क्रिप्टो अंतर्दृष्टि तक पहुंच के लिए साइन अप करें",
      "email": "ईमेल",
      "password": "पासवर्ड",
      "register": "रजिस्टर करें",
      "already_account": "पहले से खाता है?",
      "no_account": "खाता नहीं है?",
      "back_home": "होम पर वापस",
      "google_signin": "गूगल से साइन इन करें",
      "or": "या",
      
      // Features
      "feature1_title": "रेडिट स्क्रैपिंग",
      "feature1_desc": "शीर्ष क्रिप्टो सबरेडिट से पोस्ट को स्वचालित रूप से एकत्र करें रियल-टाइम अपडेट के साथ।",
      "feature2_title": "रुझान विश्लेषण",
      "feature2_desc": "उल्लेख आवृत्ति और जुड़ाव के आधार पर ट्रेंडिंग क्रिप्टोकरेंसी की पहचान करें।",
      "feature3_title": "एआई चैटबॉट",
      "feature3_desc": "प्रश्न पूछें और गूगल जेमिनी एआई द्वारा संचालित बुद्धिमान अंतर्दृष्टि प्राप्त करें।",
      "feature4_title": "स्मार्ट फ़िल्टर",
      "feature4_desc": "सबरेडिट द्वारा फ़िल्टर करें, स्कोर या तिथि द्वारा क्रमबद्ध करें, और अपनी डेटा दृश्य को अनुकूलित करें।",
      "feature5_title": "सुरक्षित पहुंच",
      "feature5_desc": "आपका डेटा जेडब्ल्यूटी प्रमाणीकरण और एन्क्रिप्टेड स्टोरेज से सुरक्षित है।",
      "feature6_title": "रियल-टाइम अपडेट",
      "feature6_desc": "रेडिट समुदायों पर होने वाली नवीनतम क्रिप्टो चर्चाओं को प्राप्त करें।",
      
      // Chat
      "chat_example": "मुझसे क्रिप्टो रुझानों के बारे में पूछें!",
      "example_questions": "उदाहरण प्रश्न:",
      "example1": "बिटकॉइन के आसपास का भाव क्या है?",
      "example2": "कौन से altcoins ट्रेंडिंग हैं?",
      "example3": "सोलाना अंतर्दृष्टि के बारे में बताएं",
      "example4": "आज की शीर्ष चर्चाएं क्या हैं?",
      "analyzing": "रेडिट डेटा का विश्लेषण कर रहे हैं..."
    }
  },
  ar: {
    translation: {
      // Navbar
      "logout": "تسجيل الخروج",
      "chatbot": "محادثة الذكاء الاصطناعي",
      "refresh": "تحديث",
      
      // Home
      "title": "استخبارات العملات المشفرة من Reddit",
      "subtitle": "مدعوم بالذكاء الاصطناعي",
      "description": "تتبع مناقشات العملات المشفرة عبر Reddit في الوقت الفعلي. احصل على رؤى مدعومة بالذكاء الاصطناعي وتحليل المشاعر واتجاهات السوق من مجتمع العملات المشفرة.",
      "getStarted": "ابدأ التحليل",
      "learnMore": "تعلم المزيد",
      "login": "تسجيل الدخول",
      "features": "ميزات قوية",
      
      // Dashboard
      "dashboard_title": "استخبارات العملات المشفرة من REDDIT",
      "filter_subreddit": "تصفية حسب Subreddit",
      "sort_by": "ترتيب المنشورات حسب",
      "scrape_now": "استخرج الآن",
      "scraping": "جاري الاستخراج...",
      "reddit_posts": "منشورات Reddit",
      "top_mentions": "أبرز ذكريات العملات المشفرة",
      "ai_analyst": "محلل سوق الذكاء الاصطناعي",
      "ask_placeholder": "اسأل عن اتجاهات العملات المشفرة، البيتكوين، الإيثريوم...",
      "send": "إرسال",
      "newest": "الأحدث أولاً",
      "oldest": "الأقدم أولاً",
      "highest_score": "أعلى درجة",
      "all_subreddits": "جميع Subreddits",
      "no_posts": "لم يتم العثور على منشورات. انقر على 'استخرج الآن' لجلب البيانات.",
      "no_data": "لا بيانات بعد. استخرج المنشورات لرؤية الاتجاهات.",
      
      // Login
      "welcome_back": "مرحبا بعودتك",
      "create_account": "إنشاء حساب",
      "signin_desc": "تسجيل الدخول إلى حسابك",
      "signup_desc": "سجل للوصول إلى رؤى العملات المشفرة",
      "email": "البريد الإلكتروني",
      "password": "كلمة المرور",
      "register": "تسجيل",
      "already_account": "لديك حساب بالفعل؟",
      "no_account": "ليس لديك حساب؟",
      "back_home": "العودة إلى الصفحة الرئيسية",
      "google_signin": "تسجيل الدخول بواسطة Google",
      "or": "أو",
      
      // Features
      "feature1_title": "استخراج Reddit",
      "feature1_desc": "جمع المنشورات تلقائيًا من أبرز subreddits العملات المشفرة مع تحديثات في الوقت الفعلي.",
      "feature2_title": "تحليل الاتجاهات",
      "feature2_desc": "تحديد العملات المشفرة الرائجة بناءً على تكرار الذكر والمشاركة.",
      "feature3_title": "روبوت محادثة الذكاء الاصطناعي",
      "feature3_desc": "اسأل أسئلة واحصل على رؤى ذكية مدعومة بـ Google Gemini AI.",
      "feature4_title": "مرشحات ذكية",
      "feature4_desc": "تصفية حسب subreddit، ترتيب حسب الدرجة أو التاريخ، وتخصيص عرض البيانات الخاص بك.",
      "feature5_title": "وصول آمن",
      "feature5_desc": "بياناتك محمية بتوثيق JWT وتخزين مشفر.",
      "feature6_title": "تحديثات في الوقت الفعلي",
      "feature6_desc": "احصل على أحدث مناقشات العملات المشفرة كما تحدث في مجتمعات Reddit.",
      
      // Chat
      "chat_example": "اسألني عن اتجاهات العملات المشفرة!",
      "example_questions": "أسئلة مثالية:",
      "example1": "ما هو الشعور حول البيتكوين؟",
      "example2": "أي عملات بديلة رائجة؟",
      "example3": "أخبرني عن رؤى سولانا",
      "example4": "ما هي أبرز المناقشات اليوم؟",
      "analyzing": "تحليل بيانات Reddit..."
    }
  },
  zh: {
    translation: {
      // Navbar
      "logout": "登出",
      "chatbot": "AI 聊天",
      "refresh": "刷新",
      
      // Home
      "title": "Reddit 加密货币情报",
      "subtitle": "AI 驱动",
      "description": "实时跟踪 Reddit 上的加密货币讨论。从加密社区获取 AI 驱动的见解、情绪分析和市场趋势。",
      "getStarted": "开始分析",
      "learnMore": "了解更多",
      "login": "登录",
      "features": "强大功能",
      
      // Dashboard
      "dashboard_title": "加密货币 REDDIT 情报",
      "filter_subreddit": "按 Subreddit 过滤",
      "sort_by": "按帖子排序",
      "scrape_now": "立即抓取",
      "scraping": "抓取中...",
      "reddit_posts": "Reddit 帖子",
      "top_mentions": "顶级加密提及",
      "ai_analyst": "AI 市场分析师",
      "ask_placeholder": "询问加密趋势、比特币、以太坊...",
      "send": "发送",
      "newest": "最新优先",
      "oldest": "最旧优先",
      "highest_score": "最高分数",
      "all_subreddits": "所有 Subreddit",
      "no_posts": "未找到帖子。点击“立即抓取”以获取数据。",
      "no_data": "尚未有数据。抓取帖子以查看趋势。",
      
      // Login
      "welcome_back": "欢迎回来",
      "create_account": "创建账户",
      "signin_desc": "登录您的账户",
      "signup_desc": "注册以访问加密见解",
      "email": "电子邮件",
      "password": "密码",
      "register": "注册",
      "already_account": "已有账户？",
      "no_account": "没有账户？",
      "back_home": "返回首页",
      "google_signin": "使用 Google 登录",
      "or": "或",
      
      // Features
      "feature1_title": "Reddit 抓取",
      "feature1_desc": "自动从顶级加密 subreddit 收集帖子，并提供实时更新。",
      "feature2_title": "趋势分析",
      "feature2_desc": "基于提及频率和参与度识别趋势加密货币。",
      "feature3_title": "AI 聊天机器人",
      "feature3_desc": "提问并获取由 Google Gemini AI 驱动的智能见解。",
      "feature4_title": "智能过滤器",
      "feature4_desc": "按 subreddit 过滤，按分数或日期排序，并自定义数据视图。",
      "feature5_title": "安全访问",
      "feature5_desc": "您的数据通过 JWT 认证和加密存储得到保护。",
      "feature6_title": "实时更新",
      "feature6_desc": "获取 Reddit 社区中发生的最新加密讨论。",
      
      // Chat
      "chat_example": "问我关于加密趋势！",
      "example_questions": "示例问题：",
      "example1": "比特币周围的情绪如何？",
      "example2": "哪些山寨币在趋势？",
      "example3": "告诉我关于 Solana 的见解",
      "example4": "今天顶级讨论是什么？",
      "analyzing": "分析 Reddit 数据..."
    }
  },
  ja: {
    translation: {
      // Navbar
      "logout": "ログアウト",
      "chatbot": "AI チャット",
      "refresh": "更新",
      
      // Home
      "title": "Reddit 暗号通貨インテリジェンス",
      "subtitle": "AI搭載",
      "description": "Reddit での暗号通貨の議論をリアルタイムで追跡します。AI を活用した洞察、センチメント分析、市場トレンドを暗号コミュニティから取得します。",
      "getStarted": "分析を開始",
      "learnMore": "もっと詳しく",
      "login": "ログイン",
      "features": "強力な機能",
      
      // Dashboard
      "dashboard_title": "暗号通貨 REDDIT インテリジェンス",
      "filter_subreddit": "Subreddit でフィルタ",
      "sort_by": "投稿を並べ替え",
      "scrape_now": "今すぐスクレイプ",
      "scraping": "スクレイピング中...",
      "reddit_posts": "Reddit 投稿",
      "top_mentions": "トップ暗号言及",
      "ai_analyst": "AI 市場アナリスト",
      "ask_placeholder": "暗号トレンド、Bitcoin、Ethereum について質問...",
      "send": "送信",
      "newest": "最新優先",
      "oldest": "最古優先",
      "highest_score": "最高スコア",
      "all_subreddits": "すべての Subreddit",
      "no_posts": "投稿が見つかりません。データを取得するには '今すぐスクレイプ' をクリックしてください。",
      "no_data": "データがありません。トレンドを表示するには投稿をスクレイプしてください。",
      
      // Login
      "welcome_back": "おかえりなさい",
      "create_account": "アカウントを作成",
      "signin_desc": "アカウントにサインイン",
      "signup_desc": "暗号洞察にアクセスするためにサインアップ",
      "email": "メール",
      "password": "パスワード",
      "register": "登録",
      "already_account": "すでにアカウントをお持ちですか？",
      "no_account": "アカウントをお持ちでないですか？",
      "back_home": "ホームに戻る",
      "google_signin": "Google でサインイン",
      "or": "または",
      
      // Features
      "feature1_title": "Reddit スクレイピング",
      "feature1_desc": "トップ暗号 subreddit から投稿を自動的に収集し、リアルタイム更新。",
      "feature2_title": "トレンド分析",
      "feature2_desc": "言及頻度とエンゲージメントに基づいてトレンド暗号通貨を特定。",
      "feature3_title": "AI チャットボット",
      "feature3_desc": "質問をして Google Gemini AI 搭載のインテリジェントな洞察を取得。",
      "feature4_title": "スマートフィルタ",
      "feature4_desc": "subreddit でフィルタ、	score または日付でソートし、データビューをカスタマイズ。",
      "feature5_title": "セキュアアクセス",
      "feature5_desc": "データは JWT 認証と暗号化ストレージで保護されています。",
      "feature6_title": "リアルタイム更新",
      "feature6_desc": "Reddit コミュニティで起こる最新の暗号議論を取得。",
      
      // Chat
      "chat_example": "暗号トレンドについて質問してください！",
      "example_questions": "例の質問：",
      "example1": "Bitcoin 周辺のセンチメントは？",
      "example2": "どのアルトコインがトレンド？",
      "example3": "Solana の洞察を教えて",
      "example4": "今日のトップ議論は何？",
      "analyzing": "Reddit データ分析中..."
    }
  },
  fr: {
    translation: {
      // Navbar
      "logout": "Déconnexion",
      "chatbot": "Chat IA",
      "refresh": "Actualiser",
      
      // Home
      "title": "Intelligence Crypto Reddit",
      "subtitle": "Propulsé par l'IA",
      "description": "Suivez les discussions sur les cryptomonnaies sur Reddit en temps réel. Obtenez des insights propulsés par l'IA, une analyse des sentiments et les tendances du marché de la communauté crypto.",
      "getStarted": "Commencer l'analyse",
      "learnMore": "En savoir plus",
      "login": "Connexion",
      "features": "Fonctionnalités puissantes",
      
      // Dashboard
      "dashboard_title": "INTELLIGENCE CRYPTO REDDIT",
      "filter_subreddit": "Filtrer par Subreddit",
      "sort_by": "Trier les publications par",
      "scrape_now": "Scraper maintenant",
      "scraping": "Scraping...",
      "reddit_posts": "Publications Reddit",
      "top_mentions": "Mentions Crypto les plus populaires",
      "ai_analyst": "Analyste de marché IA",
      "ask_placeholder": "Demandez sur les tendances crypto, Bitcoin, Ethereum...",
      "send": "Envoyer",
      "newest": "Les plus récents d'abord",
      "oldest": "Les plus anciens d'abord",
      "highest_score": "Score le plus élevé",
      "all_subreddits": "Tous les Subreddits",
      "no_posts": "Aucune publication trouvée. Cliquez sur 'Scraper maintenant' pour récupérer des données.",
      "no_data": "Aucune donnée pour l'instant. Scraper des publications pour voir les tendances.",
      
      // Login
      "welcome_back": "Bon retour",
      "create_account": "Créer un compte",
      "signin_desc": "Connectez-vous à votre compte",
      "signup_desc": "Inscrivez-vous pour accéder aux insights crypto",
      "email": "E-mail",
      "password": "Mot de passe",
      "register": "S'inscrire",
      "already_account": "Vous avez déjà un compte ?",
      "no_account": "Vous n'avez pas de compte ?",
      "back_home": "Retour à l'accueil",
      "google_signin": "Se connecter avec Google",
      "or": "OU",
      
      // Features
      "feature1_title": "Scraping Reddit",
      "feature1_desc": "Collectez automatiquement les publications des principaux subreddits crypto avec des mises à jour en temps réel.",
      "feature2_title": "Analyse des tendances",
      "feature2_desc": "Identifiez les cryptomonnaies tendances basées sur la fréquence des mentions et l'engagement.",
      "feature3_title": "Chatbot IA",
      "feature3_desc": "Posez des questions et obtenez des insights intelligents propulsés par Google Gemini AI.",
      "feature4_title": "Filtres intelligents",
      "feature4_desc": "Filtrez par subreddit, triez par score ou date, et personnalisez votre vue des données.",
      "feature5_title": "Accès sécurisé",
      "feature5_desc": "Vos données sont protégées par l'authentification JWT et le stockage crypté.",
      "feature6_title": "Mises à jour en temps réel",
      "feature6_desc": "Obtenez les dernières discussions crypto telles qu'elles se produisent dans les communautés Reddit.",
      
      // Chat
      "chat_example": "Demandez-moi sur les tendances crypto !",
      "example_questions": "Exemples de questions :",
      "example1": "Quel est le sentiment autour de Bitcoin ?",
      "example2": "Quelles altcoins sont tendances ?",
      "example3": "Parlez-moi des insights sur Solana",
      "example4": "Quelles sont les discussions principales aujourd'hui ?",
      "analyzing": "Analyse des données Reddit..."
    }
  },
  de: {
    translation: {
      // Navbar
      "logout": "Abmelden",
      "chatbot": "KI-Chat",
      "refresh": "Aktualisieren",
      
      // Home
      "title": "Reddit Crypto Intelligence",
      "subtitle": "Angetrieben von KI",
      "description": "Verfolgen Sie Kryptowährungsdiskussionen auf Reddit in Echtzeit. Erhalten Sie KI-gestützte Einblicke, Sentiment-Analyse und Markttrends aus der Crypto-Community.",
      "getStarted": "Analyse starten",
      "learnMore": "Mehr erfahren",
      "login": "Anmelden",
      "features": "Leistungsstarke Funktionen",
      
      // Dashboard
      "dashboard_title": "CRYPTO REDDIT INTELLIGENCE",
      "filter_subreddit": "Nach Subreddit filtern",
      "sort_by": "Beiträge sortieren nach",
      "scrape_now": "Jetzt scrapen",
      "scraping": "Scraping...",
      "reddit_posts": "Reddit-Beiträge",
      "top_mentions": "Top Crypto-Erwähnungen",
      "ai_analyst": "KI-Marktanalyst",
      "ask_placeholder": "Fragen Sie nach Crypto-Trends, Bitcoin, Ethereum...",
      "send": "Senden",
      "newest": "Neueste zuerst",
      "oldest": "Älteste zuerst",
      "highest_score": "Höchster Score",
      "all_subreddits": "Alle Subreddits",
      "no_posts": "Keine Beiträge gefunden. Klicken Sie auf 'Jetzt scrapen', um Daten abzurufen.",
      "no_data": "Noch keine Daten. Scrapen Sie Beiträge, um Trends zu sehen.",
      
      // Login
      "welcome_back": "Willkommen zurück",
      "create_account": "Konto erstellen",
      "signin_desc": "Melden Sie sich in Ihrem Konto an",
      "signup_desc": "Registrieren Sie sich für den Zugriff auf Crypto-Einblicke",
      "email": "E-Mail",
      "password": "Passwort",
      "register": "Registrieren",
      "already_account": "Haben Sie bereits ein Konto?",
      "no_account": "Haben Sie kein Konto?",
      "back_home": "Zurück zur Startseite",
      "google_signin": "Mit Google anmelden",
      "or": "ODER",
      
      // Features
      "feature1_title": "Reddit Scraping",
      "feature1_desc": "Automatisch Beiträge aus Top-Crypto-Subreddits sammeln mit Echtzeit-Updates.",
      "feature2_title": "Trend-Analyse",
      "feature2_desc": "Trendende Kryptowährungen basierend auf Erwähnungshäufigkeit und Engagement identifizieren.",
      "feature3_title": "KI-Chatbot",
      "feature3_desc": "Fragen stellen und intelligente Einblicke erhalten, angetrieben von Google Gemini KI.",
      "feature4_title": "Smarte Filter",
      "feature4_desc": "Nach Subreddit filtern, nach Score oder Datum sortieren und Ihre Datenansicht anpassen.",
      "feature5_title": "Sicherer Zugriff",
      "feature5_desc": "Ihre Daten sind durch JWT-Authentifizierung und verschlüsselte Speicherung geschützt.",
      "feature6_title": "Echtzeit-Updates",
      "feature6_desc": "Erhalten Sie die neuesten Crypto-Diskussionen, wie sie in Reddit-Communities stattfinden.",
      
      // Chat
      "chat_example": "Fragen Sie mich nach Crypto-Trends!",
      "example_questions": "Beispielfragen:",
      "example1": "Was ist das Sentiment um Bitcoin?",
      "example2": "Welche Altcoins trenden?",
      "example3": "Erzählen Sie mir von Solana-Einblicken",
      "example4": "Was sind die Top-Diskussionen heute?",
      "analyzing": "Reddit-Daten analysieren..."
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;