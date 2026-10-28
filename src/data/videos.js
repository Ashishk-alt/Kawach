const videos = [
  {
    id: 1,
    title: {
      en: "OTP Scam Awareness",
      hi: "OTP धोखाधड़ी जागरूकता",
    },
    description: {
      en: "Learn how scammers trick people into sharing OTPs and how to protect yourself from OTP fraud.",
      hi: "जानें कि धोखेबाज़ लोगों से OTP कैसे साझा करवाते हैं और OTP धोखाधड़ी से खुद को कैसे सुरक्षित रखें।",
    },
    category: "OTP Fraud",
    difficulty: "Easy",
    duration: "2:18",
    thumbnail: "/thumbnails/phishing.jpg",
    video: "https://youtu.be/Y8z67bi1i2A?si=jA0fPuHoCABkH-so",
  },

  {
    id: 2,
    title: {
      en: "Banking Fraud Awareness",
      hi: "बैंकिंग धोखाधड़ी जागरूकता",
    },
    description: {
      en: "Learn essential safety habits to help protect your bank account and avoid online fraud.",
      hi: "अपने बैंक खाते को सुरक्षित रखने और ऑनलाइन धोखाधड़ी से बचने के जरूरी सुरक्षा उपाय जानें।",
    },
    category: "Banking Fraud",
    difficulty: "Easy",
    duration: "1:30",
    thumbnail: null,
    video: "https://youtu.be/Sgs4K2eAZhg?si=CP8Wirw_81hZ_ihs",
  },

  {
    id: 3,
    title: {
      en: "UPI PIN Fraud",
      hi: "UPI PIN धोखाधड़ी",
    },
    description: {
      en: "Learn to enter your UPI PIN only when sending money, never to receive money, and never share it with anyone.",
      hi: "जानें कि UPI PIN केवल पैसे भेजते समय दर्ज करें, पैसे प्राप्त करने के लिए नहीं, और इसे किसी के साथ साझा न करें।",
    },
    category: "UPI Fraud",
    difficulty: "Easy",
    duration: "1:25",
    thumbnail: null,
    video: "https://youtu.be/aUDwlq9FWU4?si=Sr3svh8wZpHdBbTN",
  },

  {
    id: 4,
    title: {
      en: "Strong Passwords & Password Managers",
      hi: "मजबूत पासवर्ड और पासवर्ड मैनेजर",
    },
    description: {
      en: "Learn to create memorable, unique passwords and use a password manager and multi-factor authentication to protect your accounts.",
      hi: "याद रखने योग्य और अलग-अलग पासवर्ड बनाना सीखें। अपने खातों की सुरक्षा के लिए पासवर्ड मैनेजर और मल्टी-फैक्टर ऑथेंटिकेशन का उपयोग करें।",
    },
    category: "Passwords",
    difficulty: "Easy",
    duration: "1:18",
    thumbnail: null,
    video: "https://youtu.be/TvrFpAFitQ0?si=gSUEdVON63AGyj3R",
  },

  {
    id: 5,
    title: {
      en: "Social Engineering Attacks",
      hi: "सोशल इंजीनियरिंग हमले",
    },
    description: {
      en: "Learn how attackers manipulate people into revealing confidential information.",
      hi: "जानें कि हमलावर लोगों को प्रभावित करके गोपनीय जानकारी कैसे प्राप्त करते हैं।",
    },
    category: "Social Engineering",
    difficulty: "Medium",
    duration: "0:57",
    thumbnail: null,
    video: "https://youtube.com/shorts/OlYcYpVNEUM?si=JdyIPN41fYBwNgpB",
  },

  {
    id: 6,
    title: {
      en: "How to Check if a Website Is Legit or a Scam",
      hi: "कैसे पहचानें कि वेबसाइट असली है या धोखाधड़ी",
    },
    description: {
      en: "Learn to spot warning signs and check whether a website may be fraudulent before sharing information.",
      hi: "जानें कि जानकारी साझा करने से पहले चेतावनी के संकेत कैसे पहचानें और वेबसाइट धोखाधड़ी वाली है या नहीं कैसे जांचें।",
    },
    category: "Fake Websites",
    difficulty: "Medium",
    duration: "1:28",
    thumbnail: null,
    video: "https://youtu.be/-kB5r4Jlclk?si=T1bSQ-9YVo-Gnfnh",
  },

  {
    id: 7,
    title: {
      en: "Online Shopping Scams",
      hi: "ऑनलाइन शॉपिंग स्कैम",
    },
    description: {
      en: "See how online purchase scams work and learn to be cautious when shopping online.",
      hi: "ऑनलाइन खरीदारी के धोखाधड़ी वाले तरीकों को समझें और इंटरनेट पर खरीदारी करते समय सतर्क रहना सीखें।",
    },
    category: "Shopping Fraud",
    difficulty: "Medium",
    duration: "1:13",
    thumbnail: null,
    video: "https://youtu.be/qRWpvcjpQNw?si=ZrVROJFN5AYotl_b",
  },

  {
    id: 8,
    title: {
      en: "Public Wi-Fi Safety",
      hi: "पब्लिक Wi-Fi सुरक्षा",
    },
    description: {
      en: "Learn what to avoid when using public Wi-Fi, especially before entering banking, UPI, or password details.",
      hi: "पब्लिक Wi-Fi इस्तेमाल करते समय किन बातों से बचना चाहिए, खासकर बैंकिंग, UPI या पासवर्ड की जानकारी दर्ज करने से पहले, यह जानें।",
    },
    category: "Network Security",
    difficulty: "Medium",
    duration: "0:26",
    thumbnail: null,
    video: "https://youtube.com/shorts/ZC-jmKegZY0?si=Tk3BJOzrnJtteDIX",
  },

  {
    id: 9,
    title: {
      en: "Fake Job & Recruitment Scams",
      hi: "नकली जॉब और भर्ती स्कैम",
    },
    description: {
      en: "Learn to spot fake work-from-home offers, suspicious fees, and fraudulent job advertisements.",
      hi: "नकली वर्क-फ्रॉम-होम ऑफर, संदिग्ध शुल्क और धोखाधड़ी वाले नौकरी विज्ञापनों को पहचानना सीखें।",
    },
    category: "Job Scams",
    difficulty: "Medium",
    duration: "4:27",
    thumbnail: null,
    video: "https://youtu.be/QRgDUzKloCw?si=9wIZXar2GkWgW89q",
  },

  {
    id: 10,
    title: {
      en: "QR Code Scams",
      hi: "QR कोड स्कैम",
    },
    description: {
      en: "Learn how QR code scams can steal money or information and how to scan codes more safely.",
      hi: "जानें कि QR कोड स्कैम से पैसे या जानकारी कैसे चोरी हो सकती है और कोड को सुरक्षित तरीके से कैसे स्कैन करें।",
    },
    category: "QR Scams",
    difficulty: "Medium",
    duration: "1:09",
    thumbnail: null,
    video: "https://youtu.be/2fkh-EBC8_w?si=8KhAObe_NcfeFU5o",
  },

  {
    id: 11,
    title: {
      en: "Social Media Security",
      hi: "सोशल मीडिया सुरक्षा",
    },
    description: {
      en: "Learn to spot common social media scams, recognize warning signs, and protect your accounts.",
      hi: "सोशल मीडिया पर होने वाली आम धोखाधड़ी पहचानें, चेतावनी के संकेत समझें और अपने खातों को सुरक्षित रखें।",
    },
    category: "Social Media",
    difficulty: "Hard",
    duration: "5:09",
    thumbnail: null,
    video: "https://youtu.be/T40pmHzFf4s?si=15nYY-M9scRO3CpY",
  },

  {
    id: 12,
    title: {
      en: "Malware & Suspicious Downloads",
      hi: "मैलवेयर और संदिग्ध डाउनलोड",
    },
    description: {
      en: "Learn about malware types such as spyware, Trojans, worms, adware, and rootkits.",
      hi: "स्पाइवेयर, ट्रोजन, वर्म, एडवेयर और रूटकिट जैसे मैलवेयर के प्रकारों के बारे में जानें।",
    },
    category: "Malware",
    difficulty: "Hard",
    duration: "3:53",
    thumbnail: null,
    video: "https://youtu.be/AF_1E_5SfXg?si=5OWa5IuL6D_xlk9e",
  },
];

export default videos;