const videos = [
  {
    id: 1,
    title: {
      en: "Phishing Attacks",
      hi: "फिशिंग हमले",
    },
    description: {
      en: "Learn how attackers use fake emails, messages and links to steal your information.",
      hi: "जानें कि हमलावर नकली ईमेल, संदेश और लिंक का उपयोग करके आपकी जानकारी कैसे चुराते हैं।",
    },
    category: "Phishing",
    difficulty: "Easy",
    duration: "4:32",
    thumbnail: "/thumbnails/phishing.jpg",
    video: "/videos/phishing.mp4",
  },

  {
    id: 2,
    title: {
      en: "OTP & Banking Fraud",
      hi: "OTP और बैंकिंग धोखाधड़ी",
    },
    description: {
      en: "Understand OTP scams and learn why you should never share your OTP with anyone.",
      hi: "OTP स्कैम को समझें और जानें कि आपको अपना OTP किसी के साथ क्यों साझा नहीं करना चाहिए।",
    },
    category: "OTP Fraud",
    difficulty: "Easy",
    duration: "3:48",
    thumbnail: "/thumbnails/otp-fraud.jpg",
    video: "/videos/otp-fraud.mp4",
  },

  {
    id: 3,
    title: {
      en: "UPI Payment Scams",
      hi: "UPI भुगतान स्कैम",
    },
    description: {
      en: "Learn how UPI scams work and how to safely handle payment requests and collect requests.",
      hi: "जानें कि UPI स्कैम कैसे काम करते हैं और भुगतान या कलेक्ट रिक्वेस्ट को सुरक्षित तरीके से कैसे संभालें।",
    },
    category: "UPI Fraud",
    difficulty: "Easy",
    duration: "4:15",
    thumbnail: "/thumbnails/upi-fraud.jpg",
    video: "/videos/upi-fraud.mp4",
  },

  {
    id: 4,
    title: {
      en: "Strong Passwords & Password Managers",
      hi: "मजबूत पासवर्ड और पासवर्ड मैनेजर",
    },
    description: {
      en: "Discover how to create strong passwords and protect your accounts from unauthorized access.",
      hi: "जानें कि मजबूत पासवर्ड कैसे बनाएं और अपने अकाउंट को अनधिकृत पहुंच से कैसे सुरक्षित रखें।",
    },
    category: "Passwords",
    difficulty: "Easy",
    duration: "3:55",
    thumbnail: "/thumbnails/passwords.jpg",
    video: "/videos/passwords.mp4",
  },

  {
    id: 5,
    title: {
      en: "Social Engineering",
      hi: "सोशल इंजीनियरिंग",
    },
    description: {
      en: "Learn how attackers manipulate people into revealing confidential information.",
      hi: "जानें कि हमलावर लोगों को प्रभावित करके गोपनीय जानकारी कैसे प्राप्त करते हैं।",
    },
    category: "Social Engineering",
    difficulty: "Medium",
    duration: "5:02",
    thumbnail: "/thumbnails/social-engineering.jpg",
    video: "/videos/social-engineering.mp4",
  },

  {
    id: 6,
    title: {
      en: "Fake Websites & URLs",
      hi: "नकली वेबसाइट और URL",
    },
    description: {
      en: "Learn how to identify fake websites, suspicious URLs and dangerous login pages.",
      hi: "नकली वेबसाइट, संदिग्ध URL और खतरनाक लॉगिन पेज की पहचान करना सीखें।",
    },
    category: "Fake Websites",
    difficulty: "Medium",
    duration: "4:27",
    thumbnail: "/thumbnails/fake-websites.jpg",
    video: "/videos/fake-websites.mp4",
  },

  {
    id: 7,
    title: {
      en: "Online Shopping Scams",
      hi: "ऑनलाइन शॉपिंग स्कैम",
    },
    description: {
      en: "Learn how fake stores, unrealistic offers and fraudulent sellers can trick online shoppers.",
      hi: "जानें कि नकली स्टोर, अविश्वसनीय ऑफर और धोखाधड़ी करने वाले विक्रेता ऑनलाइन खरीदारों को कैसे फंसा सकते हैं।",
    },
    category: "Shopping Fraud",
    difficulty: "Medium",
    duration: "4:10",
    thumbnail: "/thumbnails/shopping-scams.jpg",
    video: "/videos/shopping-scams.mp4",
  },

  {
    id: 8,
    title: {
      en: "Public Wi-Fi Safety",
      hi: "पब्लिक Wi-Fi सुरक्षा",
    },
    description: {
      en: "Understand the risks of public Wi-Fi and learn how to protect your accounts and data.",
      hi: "पब्लिक Wi-Fi के खतरों को समझें और अपने अकाउंट व डेटा को सुरक्षित रखना सीखें।",
    },
    category: "Network Security",
    difficulty: "Medium",
    duration: "3:42",
    thumbnail: "/thumbnails/public-wifi.jpg",
    video: "/videos/public-wifi.mp4",
  },

  {
    id: 9,
    title: {
      en: "Job & Recruitment Scams",
      hi: "जॉब और भर्ती स्कैम",
    },
    description: {
      en: "Learn how fake recruiters and job offers are used to steal money and personal information.",
      hi: "जानें कि नकली रिक्रूटर और जॉब ऑफर पैसे और व्यक्तिगत जानकारी चुराने के लिए कैसे इस्तेमाल किए जाते हैं।",
    },
    category: "Job Scams",
    difficulty: "Medium",
    duration: "4:38",
    thumbnail: "/thumbnails/job-scams.jpg",
    video: "/videos/job-scams.mp4",
  },

  {
    id: 10,
    title: {
      en: "QR Code Scams",
      hi: "QR कोड स्कैम",
    },
    description: {
      en: "Understand QR-based scams and learn how to safely scan and use QR codes.",
      hi: "QR आधारित स्कैम को समझें और QR कोड को सुरक्षित तरीके से स्कैन करना सीखें।",
    },
    category: "QR Scams",
    difficulty: "Medium",
    duration: "3:36",
    thumbnail: "/thumbnails/qr-scams.jpg",
    video: "/videos/qr-scams.mp4",
  },

  {
    id: 11,
    title: {
      en: "Social Media Security",
      hi: "सोशल मीडिया सुरक्षा",
    },
    description: {
      en: "Learn how to protect your social media accounts from impersonation, hacking and privacy threats.",
      hi: "अपने सोशल मीडिया अकाउंट को नकली प्रोफाइल, हैकिंग और प्राइवेसी खतरों से सुरक्षित रखना सीखें।",
    },
    category: "Social Media",
    difficulty: "Hard",
    duration: "5:12",
    thumbnail: "/thumbnails/social-media.jpg",
    video: "/videos/social-media.mp4",
  },

  {
    id: 12,
    title: {
      en: "Malware & Suspicious Downloads",
      hi: "मैलवेयर और संदिग्ध डाउनलोड",
    },
    description: {
      en: "Learn how malicious software spreads through unsafe downloads, attachments and applications.",
      hi: "जानें कि असुरक्षित डाउनलोड, अटैचमेंट और एप्लिकेशन के माध्यम से हानिकारक सॉफ्टवेयर कैसे फैलता है।",
    },
    category: "Malware",
    difficulty: "Hard",
    duration: "5:05",
    thumbnail: "/thumbnails/malware.jpg",
    video: "/videos/malware.mp4",
  },
];

export default videos;