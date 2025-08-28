

interface NAV_ITEMS_PROPS {
    label:string;
    href:string;
}

export const NAV_ITEMS: NAV_ITEMS_PROPS[] = [
    {
      label: "HOME", href: "/"
    },
      {
      label: "PORTFOLIO", href: "/portfolio"
    },
    {
      label: "SERVICES", href: "/#services"
    },
  
    {
      label: "SKILLS", href: "/#skills"
    },
    {
      label: "CERTIFICATIONS", href: "/#certifications"
    },

    {
      label: "RESUME", href: "/#resume"
    },
 
    {
      label: "BLOGS", href: "/blogs"
    },
    {
      label: "CONTACT", href: "/#contact"
    },
  ];
  






export const SERVICES = [
  {
    title: " My Event Tracking Services",
    features: [
      {
        subtitle: " Google Tag Manager (GTM) Integration",
        service: "Full GTM setup and configuration for seamless event tracking.",
      },
      {
        subtitle: " Conversion Event Tracking",
        service:
          "Page View → View Content → Add to Cart → Initiate Checkout → Add Payment Info → Purchase.",
      },
      {
        subtitle: " Scroll Depth & Click Tracking",
        service:
          "Measure engagement by tracking scroll percentage and important clicks.",
      },
      {
        subtitle: " Enhanced eCommerce Tracking",
        service: "Track complete customer journeys and revenue data in GA4.",
      },
      {
        subtitle: " Event Deduplication & Debugging",
        service: "Prevent duplicate conversions and fix broken tracking.",
      },
      {
        subtitle: " Dynamic Value Tracking",
        service:
          "Pass real-time order value, product ID, and currency with events.",
      },
      {
        subtitle: " iOS 14.5+ Tracking Fixes",
        service:
          "Ensure accurate tracking for Apple devices despite privacy changes.",
      },
    ],
  },
  {
    title: " Google Analytics 4 (GA4) & GTM Setup",
    features: [
      {
        subtitle: " Setup Google Analytics 4 (GA4) & Google Tag Manager (GTM)",
        service: "Proper configuration for accurate data collection and reporting.",
      },
      {
        subtitle: " Enable Data Layer for Enhanced Ecommerce Tracking",
        service:
          "Track product views, add-to-cart, purchases, and more with complete accuracy.",
      },
      {
        subtitle: " Form Tracking for Multiple Platforms",
        service:
          "HubSpot, Calendly, Acuity, iFrame, and other booking systems.",
      },
      {
        subtitle: " GA4 E-commerce Events Tracking",
        service:
          "Full funnel event setup: View Item, Add to Cart, Begin Checkout, Purchase, Refund, etc.",
      },
      {
        subtitle: " Setup GA4 Standard Events",
        service:
          "Page Views, Scroll, Clicks, Video Engagement, and other key user interactions.",
      },
    ],
  },
  {
    title: " Google Ads Tracking & Optimization",
    features: [
      {
        subtitle: " Google Ads Conversion Tracking Setup",
        service:
          "Track purchases, leads, form submissions, and other valuable actions to measure ROI accurately.",
      },
      {
        subtitle: " Google Ads Remarketing Tracking",
        service:
          "Build highly targeted audiences based on user behavior for better ad personalization and higher conversions.",
      },
      {
        subtitle: " Fix Issues in GA4 Events & Google Ads Conversion Tracking",
        service:
          "Identify and resolve discrepancies, broken tags, and data mismatches between GA4 and Google Ads.",
      },
    ],
  },
];

export const PORTFOLIO = [
  "portfolio/GA1.png",
  "portfolio/GA2.png",
  "portfolio/GA3.png",
  "portfolio/GA4.png",
  "/portfolio/2.png",
   "/portfolio/3.png",
    "/portfolio/4.png",
     "/portfolio/5.png",
     "/portfolio/6.png",
     "/portfolio/7.png",
     "/portfolio/8.png",
     "/portfolio/9.png",
     "/portfolio/10.png",
     "/portfolio/11.png",
     "/portfolio/12.png",
     "/portfolio/13.png",

]

export const CERTIFICATES = [
  "/certificate/cer1.png",
  "/certificate/cer2.png",
  "/certificate/cer3.png",
  "/certificate/cer4.png",
  "/certificate/cer5.jpeg",
        
]

export const SOCIAL_MEDIA = [
  {link:"https://www.linkedin.com/in/seo-expert-us", platform:"/icons/linkedin.svg"},
   {link:"https://www.instagram.com/paltantripur", platform:"/icons/instagram.svg"},
    {link:"https://www.facebook.com/paltantripur", platform:"/icons/facebook.svg"},
]

function randomDate(start: Date, end: Date) {
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return date.toISOString().split("T")[0]; // format as YYYY-MM-DD
}

export const BLOGS = [
  {
    id: 1,
    title: "Facebook Pixel & Conversion API (CAPI) Setup",
    description: "Using Facebook Pixel and Conversion API (CAPI), you can accurately track customer actions on your website and app. Facebook Pixel collects data from the client side, while CAPI sends data from the server side. Together, they improve your Facebook Ads performance and make remarketing more effective.",
    content: [
      "Accurately track website visits, conversions, and other important events.",
      "Reduce data loss caused by browser limitations and ad blockers.",
      "Send more precise and comprehensive data to the Facebook Ads platform for better ad optimization.",
      "Improve remarketing and custom audience creation, thereby increasing sales and ROI.",
      "Overall, Facebook Pixel and Conversion API setup enhances the quality of your marketing data, helping grow your business."
    ],
    benefits: [
      "📊 Accurate data collection — Capture data correctly from both client and server sides.",
      "💡 Reduce data loss — Protect data from browser or tool restrictions.",
      "🎯 Improved remarketing — Target customers based on their specific actions.",
      "📈 Ad optimization — Increase data depth to boost ad performance."
    ],
    date: randomDate(new Date(2023, 0, 1), new Date()) // random date between Jan 1, 2023 and today
  },
  {
    id: 2,
    title: "Google Analytics & Tag Manager Setup",
    description: "Google Analytics 4 (GA4) and Google Tag Manager (GTM) are essential tools for understanding your website visitors’ behavior and accurately tracking every key action — such as page views, clicks, form submissions, and purchases. GA4 helps you collect precise data and generate detailed reports. By setting up GA4 and GTM, you can gain a clear view of your customers’ entire journey, measure the true performance of your advertising and marketing campaigns, and seamlessly integrate data with platforms like Google Ads, Facebook Ads, and TikTok.",
    content: [
      "Identify your top-selling products and highest-converting ads.",
      "Improve targeting, save time on reporting, and make data-driven business decisions.",
      "Accurate tracking, reduced ad spend, smarter decisions, and better results for your business."
    ],
    benefits: [
      "📈 Make better decisions — Identify which products/services sell the most and which ads perform best.",
      "💰 Increase ad ROI — Stop ineffective ads and focus your budget on high-performing campaigns.",
      "🎯 Improve targeting — Reach the right audience segments to boost conversions.",
      "🕒 Save time — Centralized data makes reporting and analysis faster and easier."
    ],
    date: randomDate(new Date(2023, 0, 1), new Date())
  },
  {
    id: 3,
    title: "Google Ads Conversion & Remarketing Tracking Setup",
    description: "Setting up Google Ads Conversion and Remarketing Tracking empowers you to effectively monitor key customer actions on your website and strategically re-engage previous visitors with targeted advertisements. Conversion tracking enables you to accurately identify which campaigns, keywords, or ads are driving valuable actions such as purchases, sign-ups, or leads. Meanwhile, remarketing tracking lets you deliver personalized ads to users based on their past interactions and interests, significantly enhancing the likelihood of conversions.",
    content: [
      "Precisely track customer conversions to assess and optimize campaign performance.",
      "Build tailored remarketing audiences by analyzing user behavior.",
      "Maximize your marketing budget by prioritizing campaigns and audiences that convert best.",
      "Boost ROI by reaching previous visitors with highly relevant, personalized ads.",
      "Provide powerful insights and tools to maximize advertising effectiveness and accelerate business growth."
    ],
    benefits: [
      "📊 Accurate Conversion Measurement — Gain clear visibility into which ads and keywords deliver the most valuable results.",
      "💡 Effective Remarketing — Reconnect with past visitors through personalized, timely ads.",
      "🎯 Optimized Budget Allocation — Invest wisely by focusing spend on top-performing campaigns.",
      "📈 Increased ROI — Drive higher sales by targeting engaged audiences with relevant offers."
    ],
    date: randomDate(new Date(2023, 0, 1), new Date())
  }
];


export const SKILLS = [
"Server Side Tracking", 
"Google Tag Manager",
"Google ads Tracking",
"GA4 e-commerce tracking", 
"Google analytics 4",
] 

export const EXPERIENCE = [
  {
    componay:"Panaconchal", skill:"social manager"
  },
    {
    componay:"Web analytics bd", skill:"Tracking manager"
  },
    {
    componay:"Skilluper", skill:"Ga4 manager"
  },
]

export const EDUCATION = [
  {
    institution: "Dhaka University",
    degree: "Master of Business Administration (MBA)",
    level: "Master",
    graduationYear: 2021,
  },
]
