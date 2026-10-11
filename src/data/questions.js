const questions = [
  {
    id: 1,
    category: "Phishing",
    difficulty: "Easy",
    question: {
      en: "You receive an email saying your bank account will be blocked unless you click a link and verify your details. What should you do?",
      hi: "आपको एक ईमेल मिलता है जिसमें कहा गया है कि लिंक पर क्लिक करके अपनी जानकारी सत्यापित नहीं करने पर आपका बैंक खाता बंद कर दिया जाएगा। आपको क्या करना चाहिए?",
    },
    options: {
      en: [
        "Click the link and verify your details immediately",
        "Reply to the email asking whether it is genuine",
        "Avoid the link and verify the message through the bank's official website or app",
        "Forward the email to your friends",
      ],
      hi: [
        "लिंक पर क्लिक करके तुरंत अपनी जानकारी सत्यापित करें",
        "ईमेल का जवाब देकर पूछें कि यह असली है या नहीं",
        "लिंक से बचें और बैंक की आधिकारिक वेबसाइट या ऐप से संदेश को सत्यापित करें",
        "ईमेल को अपने दोस्तों को भेज दें",
      ],
    },
    answer: 2,
    explanation: {
      en: "Phishing emails often create urgency and use fake links to steal personal or banking information. Always access your bank through its official website or application instead of clicking suspicious links.",
      hi: "फिशिंग ईमेल अक्सर जल्दबाजी का माहौल बनाकर नकली लिंक के माध्यम से व्यक्तिगत या बैंकिंग जानकारी चुराने की कोशिश करते हैं। संदिग्ध लिंक पर क्लिक करने के बजाय बैंक की आधिकारिक वेबसाइट या ऐप का उपयोग करें।",
    },
  },

  {
    id: 2,
    category: "OTP Fraud",
    difficulty: "Easy",
    question: {
      en: "Someone calls claiming to be a bank employee and asks for your OTP to cancel a suspicious transaction. What should you do?",
      hi: "कोई व्यक्ति बैंक कर्मचारी बनकर आपको कॉल करता है और संदिग्ध लेनदेन रद्द करने के लिए OTP मांगता है। आपको क्या करना चाहिए?",
    },
    options: {
      en: [
        "Give the OTP because they are helping you",
        "Give only the last two digits of the OTP",
        "Ask them to send another OTP",
        "Never share the OTP and contact the bank through its official number",
      ],
      hi: [
        "OTP दे दें क्योंकि वे आपकी मदद कर रहे हैं",
        "OTP के केवल आखिरी दो अंक बताएं",
        "उनसे दूसरा OTP भेजने के लिए कहें",
        "OTP कभी साझा न करें और बैंक के आधिकारिक नंबर से संपर्क करें",
      ],
    },
    answer: 3,
    explanation: {
      en: "A legitimate bank representative should never ask for your OTP, PIN, CVV or password. Never share these details with anyone over a call.",
      hi: "बैंक का वास्तविक कर्मचारी कभी भी आपका OTP, PIN, CVV या पासवर्ड नहीं मांगता है। इन जानकारियों को फोन पर किसी के साथ साझा न करें।",
    },
  },

  {
    id: 3,
    category: "UPI Fraud",
    difficulty: "Easy",
    question: {
      en: "A person says they are sending you a UPI payment and asks you to enter your UPI PIN to receive the money. What should you do?",
      hi: "एक व्यक्ति कहता है कि वह आपको UPI से पैसे भेज रहा है और पैसे प्राप्त करने के लिए UPI PIN डालने को कहता है। आपको क्या करना चाहिए?",
    },
    options: {
      en: [
        "Enter your UPI PIN",
        "Scan their QR code and enter your PIN",
        "Refuse because receiving money does not require entering your UPI PIN",
        "Give them your phone number and PIN",
      ],
      hi: [
        "अपना UPI PIN डालें",
        "उनका QR कोड स्कैन करके PIN डालें",
        "मना करें क्योंकि पैसे प्राप्त करने के लिए UPI PIN डालने की आवश्यकता नहीं होती",
        "उन्हें अपना फोन नंबर और PIN दें",
      ],
    },
    answer: 2,
    explanation: {
      en: "Your UPI PIN is required to authorize payments from your account. You generally do not need to enter your PIN to receive money.",
      hi: "आपके खाते से भुगतान को अधिकृत करने के लिए UPI PIN का उपयोग होता है। पैसे प्राप्त करने के लिए आमतौर पर PIN डालने की आवश्यकता नहीं होती।",
    },
  },

  {
    id: 4,
    category: "Passwords",
    difficulty: "Easy",
    question: {
      en: "Which password is the strongest?",
      hi: "इनमें से सबसे मजबूत पासवर्ड कौन सा है?",
    },
    options: {
      en: [
        "sarthak123",
        "password2026",
        "MyName@123",
        "T9!vQ2#Lm7@Xp4",
      ],
      hi: [
        "sarthak123",
        "password2026",
        "MyName@123",
        "T9!vQ2#Lm7@Xp4",
      ],
    },
    answer: 3,
    explanation: {
      en: "Strong passwords should be long, unique and difficult to guess. Avoid names, birthdays, common words and predictable patterns.",
      hi: "मजबूत पासवर्ड लंबा, अलग और अनुमान लगाना मुश्किल होना चाहिए। नाम, जन्मदिन, सामान्य शब्दों और आसानी से अनुमान लगाए जा सकने वाले पैटर्न से बचें।",
    },
  },

  {
    id: 5,
    category: "Social Engineering",
    difficulty: "Medium",
    question: {
      en: "A caller knows your name and company and claims your account has a security problem. They ask you to install remote-access software. What is the safest action?",
      hi: "एक कॉल करने वाला व्यक्ति आपका नाम और कंपनी जानता है और कहता है कि आपके खाते में सुरक्षा समस्या है। वह आपको रिमोट-एक्सेस सॉफ्टवेयर इंस्टॉल करने को कहता है। सबसे सुरक्षित कदम क्या है?",
    },
    options: {
      en: [
        "Install the software because they know your details",
        "Install it and allow them temporary access",
        "End the call and independently contact the organization",
        "Ask the caller for their personal ID and then install it",
      ],
      hi: [
        "सॉफ्टवेयर इंस्टॉल करें क्योंकि उसे आपकी जानकारी पता है",
        "सॉफ्टवेयर इंस्टॉल करके उसे अस्थायी एक्सेस दें",
        "कॉल समाप्त करें और संगठन से स्वयं आधिकारिक माध्यम से संपर्क करें",
        "कॉलर की व्यक्तिगत ID मांगकर सॉफ्टवेयर इंस्टॉल करें",
      ],
    },
    answer: 2,
    explanation: {
      en: "Attackers can use publicly available information to sound convincing. Never give unknown callers remote access to your device. Contact the organization independently using an official channel.",
      hi: "हमलावर सार्वजनिक रूप से उपलब्ध जानकारी का उपयोग करके विश्वसनीय लगने की कोशिश कर सकते हैं। अनजान कॉल करने वालों को अपने डिवाइस का रिमोट एक्सेस कभी न दें। संगठन से आधिकारिक माध्यम से स्वयं संपर्क करें।",
    },
  },

  {
    id: 6,
    category: "Fake Websites",
    difficulty: "Medium",
    question: {
      en: "You want to log into your bank account. Which is the safest approach?",
      hi: "आप अपने बैंक खाते में लॉगिन करना चाहते हैं। सबसे सुरक्षित तरीका क्या है?",
    },
    options: {
      en: [
        "Click the first banking link received through WhatsApp",
        "Use a link from a random search advertisement",
        "Type the official website address yourself or use the official banking app",
        "Use any website that has the bank logo",
      ],
      hi: [
        "WhatsApp पर मिले पहले बैंकिंग लिंक पर क्लिक करें",
        "किसी भी सर्च विज्ञापन के लिंक का उपयोग करें",
        "आधिकारिक वेबसाइट का पता स्वयं टाइप करें या आधिकारिक बैंकिंग ऐप का उपयोग करें",
        "बैंक का लोगो वाली किसी भी वेबसाइट का उपयोग करें",
      ],
    },
    answer: 2,
    explanation: {
      en: "Fake websites can look almost identical to legitimate websites. Use the official banking application or manually enter the trusted website address.",
      hi: "नकली वेबसाइट असली वेबसाइट जैसी दिखाई दे सकती हैं। आधिकारिक बैंकिंग ऐप का उपयोग करें या विश्वसनीय वेबसाइट का पता स्वयं दर्ज करें।",
    },
  },

  {
    id: 7,
    category: "Online Shopping Fraud",
    difficulty: "Medium",
    question: {
      en: "An unknown shopping website offers an expensive smartphone for 80% off and asks for immediate payment through a personal UPI ID. What should you do?",
      hi: "एक अनजान शॉपिंग वेबसाइट महंगा स्मार्टफोन 80% छूट पर देती है और व्यक्तिगत UPI ID पर तुरंत भुगतान करने को कहती है। आपको क्या करना चाहिए?",
    },
    options: {
      en: [
        "Pay immediately because the discount is excellent",
        "Share your card details to confirm the order",
        "Verify the seller and website before purchasing and avoid suspicious payment requests",
        "Send the payment and ask for a refund if the product does not arrive",
      ],
      hi: [
        "छूट अच्छी है इसलिए तुरंत भुगतान करें",
        "ऑर्डर की पुष्टि के लिए कार्ड की जानकारी दें",
        "खरीदारी से पहले विक्रेता और वेबसाइट की जांच करें और संदिग्ध भुगतान अनुरोधों से बचें",
        "भुगतान करें और सामान न आने पर रिफंड मांगें",
      ],
    },
    answer: 2,
    explanation: {
      en: "Extremely unrealistic discounts and requests to pay personal UPI IDs are common warning signs. Verify the seller, website, reviews and payment details before purchasing.",
      hi: "बहुत अधिक और अविश्वसनीय छूट तथा व्यक्तिगत UPI ID पर भुगतान मांगना धोखाधड़ी के सामान्य संकेत हैं। खरीदारी से पहले विक्रेता, वेबसाइट, समीक्षाओं और भुगतान विवरण की जांच करें।",
    },
  },

  {
    id: 8,
    category: "Public Wi-Fi",
    difficulty: "Medium",
    question: {
      en: "You are connected to free public Wi-Fi at an airport. What should you avoid doing on an unsecured network?",
      hi: "आप एयरपोर्ट के मुफ्त सार्वजनिक Wi-Fi से जुड़े हैं। असुरक्षित नेटवर्क पर आपको क्या करने से बचना चाहिए?",
    },
    options: {
      en: [
        "Reading public news websites",
        "Checking the weather",
        "Accessing sensitive banking or financial accounts",
        "Watching a public video",
      ],
      hi: [
        "सार्वजनिक समाचार वेबसाइट पढ़ना",
        "मौसम देखना",
        "संवेदनशील बैंकिंग या वित्तीय खातों का उपयोग करना",
        "सार्वजनिक वीडियो देखना",
      ],
    },
    answer: 2,
    explanation: {
      en: "Unsecured public networks can expose sensitive traffic to attackers. Avoid banking and other highly sensitive activities on unknown networks.",
      hi: "असुरक्षित सार्वजनिक नेटवर्क संवेदनशील जानकारी को हमलावरों के सामने उजागर कर सकते हैं। अनजान नेटवर्क पर बैंकिंग और अन्य संवेदनशील गतिविधियों से बचें।",
    },
  },

  {
    id: 9,
    category: "Job Scam",
    difficulty: "Hard",
    question: {
      en: "You receive a job offer through WhatsApp. The recruiter asks you to pay ₹2,000 as a registration fee before the interview. What should you do?",
      hi: "आपको WhatsApp पर नौकरी का ऑफर मिलता है। रिक्रूटर इंटरव्यू से पहले ₹2,000 रजिस्ट्रेशन फीस मांगता है। आपको क्या करना चाहिए?",
    },
    options: {
      en: [
        "Pay because it is a small amount",
        "Send your Aadhaar and PAN first",
        "Verify the company independently and avoid paying suspicious recruitment fees",
        "Ask them for a discount",
      ],
      hi: [
        "भुगतान कर दें क्योंकि यह छोटी राशि है",
        "पहले अपना आधार और PAN भेजें",
        "कंपनी की स्वतंत्र रूप से जांच करें और संदिग्ध भर्ती शुल्क देने से बचें",
        "उनसे छूट मांगें",
      ],
    },
    answer: 2,
    explanation: {
      en: "Fraudsters often use fake job offers to collect money or personal information. Verify the company using official sources and be cautious of requests for upfront payments.",
      hi: "धोखेबाज अक्सर पैसे या व्यक्तिगत जानकारी लेने के लिए नकली नौकरी के ऑफर का उपयोग करते हैं। आधिकारिक स्रोतों से कंपनी की जांच करें और पहले से भुगतान मांगने वाले अनुरोधों से सावधान रहें।",
    },
  },

  {
    id: 10,
    category: "QR Scam",
    difficulty: "Hard",
    question: {
      en: "Someone tells you to scan a QR code to receive a refund. After scanning, your UPI app asks for your PIN. What should you do?",
      hi: "कोई व्यक्ति रिफंड प्राप्त करने के लिए QR कोड स्कैन करने को कहता है। स्कैन करने के बाद UPI ऐप आपका PIN मांगता है। आपको क्या करना चाहिए?",
    },
    options: {
      en: [
        "Enter the PIN to receive the refund",
        "Cancel the transaction and verify the refund through the official company",
        "Scan the QR code again",
        "Share a screenshot of the QR code",
      ],
      hi: [
        "रिफंड प्राप्त करने के लिए PIN डालें",
        "लेनदेन रद्द करें और आधिकारिक कंपनी से रिफंड की पुष्टि करें",
        "QR कोड दोबारा स्कैन करें",
        "QR कोड का स्क्रीनशॉट साझा करें",
      ],
    },
    answer: 1,
    explanation: {
      en: "Scanning a QR code and entering a UPI PIN can authorize a payment rather than receive money. Cancel the transaction and verify the refund independently.",
      hi: "QR कोड स्कैन करके UPI PIN डालना पैसे प्राप्त करने के बजाय भुगतान को अधिकृत कर सकता है। लेनदेन रद्द करें और रिफंड की स्वतंत्र रूप से पुष्टि करें।",
    },
  },
];

export default questions;