import { subServiceKeyMapping } from "utils/constants";
import { getSubServicesContent } from "services/SanityServices";

export const getMobileAppContent = async () => {
  const { subService } = await (getSubServicesContent(subServiceKeyMapping.MOBILE_APP)) || {};
  return {
    FAQ: {
      id: "faqs",
      title: "FAQs",
      subtitle: "eCommerce",
      faqs: subService?.faqs
    },
    status: 200,
    AppHead: { seo: subService?.seo, pathName: "/mobile-app" },
    DataAnalyticsHighlights: {
      title: "The Difference We Made",
      content1: "Custom Mobile App Projects Delivered",
      value1: "60",
      suffix1: "+",
      content2: "Years Of Industry Expertise",
      value2: "10",
      suffix2: "+",
      content3: "Mobile App Developers",
      value3: "15",
      suffix3: "+",
    },

    QaTestingProcess: {
      id: "process",
      heading: "Our eCommerce",
      subHeading: "Process",
      bgImage: "/images/bg/bg-services.webp",
      steps: [
        {
          step: 1,
          title: "Research",
          description:
            "We gather user insights to understand their needs and create solutions that truly resonate.",
          img: "/images/services/process-determine.webp",
          imgSm: "/images/services/process-determine-sm.webp",
          align: "left",
        },
        {
          step: 2,
          title: "Market Analysis",
          description:
            "Conducting thorough market research helps us identify opportunities and stay ahead of industry trends.",
          img: "/images/services/process-describe.webp",
          imgSm: "/images/services/process-describe-sm.webp",
          align: "right",
        },
        {
          step: 3,
          title: "Design",
          description:
            "We design intuitive user interfaces and engaging experiences that ensure a seamless app journey.",
          img: "/images/services/process-design.webp",
          imgSm: "/images/services/process-design-sm.webp",
          align: "left",
        },
        {
          step: 4,
          title: "App Development",
          description:
            "Our development team crafts robust, high-performance mobile apps made for your business needs.",
          img: "/images/services/process-develop.webp",
          imgSm: "/images/services/process-develop-sm.webp",
          align: "right",
        },
        {
          step: 5,
          title: "Testing & Quality Assurance",
          description:
            "Our rigorous testing ensures a flawless, bug-free app with optimal performance across all devices.",
          img: "/images/services/process-deploy.webp",
          imgSm: "/images/services/process-deploy-sm.webp",
          align: "left",
        },
        {
          step: 6,
          title: "Deployment",
          description:
            "We handle a seamless deployment process, ensuring your app reaches users smoothly and efficiently.",
          img: "/images/services/process-deployment.webp",
          imgSm: "/images/services/process-deployment-sm.webp",
          align: "right",
        },
        {
          step: 7,
          title: "Maintenance & Support",
          description:
            "Our ongoing maintenance ensures your app remains updated, secure, and fully optimized for performance.",
          img: "/images/services/process-support.webp",
          imgSm: "/images/services/process-support-sm.webp",
          align: "left",
        },
      ],
    },

    QaTestingOverview: {
      heading: "Our Mobile Platform",
      subHeading: "Specializations",
      slides: [
        {
          title: "Native App Development Services",
          description:
            "Building native apps that work in perfect harmony with your business and mobile platforms.",
          img: "/images/services/ma-overview-1.webp",
          imgSm: "/images/services/ma-overview-sm-1.webp",
        },
        {
          title: "Hybrid Cross-platform App Development Services",
          description:
            "Empowering mobile-first strategies with Flutter and React for cross-platform apps that evolve effortlessly.",
          img: "/images/services/ma-overview-2.webp",
          imgSm: "/images/services/ma-overview-sm-2.webp",
        },
        {
          title: "iOS Application Development Services",
          description:
            "Unlock tailored iOS app development with solutions crafted for optimal performance and exceptional user experiences",
          img: "/images/services/ma-overview-3.webp",
          imgSm: "/images/services/ma-overview-sm-3.webp",
        },
        {
          title: "Android App Development Services",
          description:
            "Maximize platform reach with our Android app development services, designed to boost engagement and visibility.",
          img: "/images/services/ma-overview-4.webp",
          imgSm: "/images/services/ma-overview-sm-4.webp",
        },
        {
          title: "AI and ML App Development",
          description:
            "Our AI and ML solutions enhance operations, deliver insightful analytics, and empower data-driven business decisions.",
          img: "/images/services/ma-overview-5.webp",
          imgSm: "/images/services/ma-overview-sm-5.webp",
        },
        {
          title: "AR & VR App Development",
          description:
            "Push boundaries with our AR & VR development services, creating unforgettable, interactive experiences for your audience.",
          img: "/images/services/ma-overview-6.webp",
          imgSm: "/images/services/ma-overview-sm-6.webp",
        },
      ],
    },
    QaTestingBanner: {
      heading: `Mobile App\nDevelopment\nServices`,
      description: "Reimagining mobile app creation with thoughtful design and bold engineering.",
      buttonText: "Get Started",
      img: "/images/services/ma-graphics.webp",
      imgSm: "/images/services/ma-graphics-sm.webp",
      scrollId: "overview"
    },
    MobileAppChoose: {
      id: "choose",
      label: "Why Clients",
      heading: "Choose Us",
      description:
        "Our clients value how we combine clear communication with reliable execution, every step of the way.",
      items: [
        {
          icon: "/images/icons/eye-step.svg",
          iconWidth: 24,
          iconHeight: 32,
          alt: "eye-step",
          title: "Clarity at Every Step",
          description:
            "You’ll always know what’s happening. clear updates, honest timelines, and no last minute surprises. Ever.",
        },
        {
          icon: "/images/icons/shine.svg",
          iconWidth: 32,
          iconHeight: 32,
          alt: "shine",
          title: "Modern Technology Stack",
          description:
            "We use the latest tools like Flutter and React to build future-ready, scalable, and efficient apps",
        },
        {
          icon: "/images/icons/built-in.svg",
          iconWidth: 32,
          iconHeight: 32,
          alt: "builtin",
          title: "Adaptability Built-In",
          description:
            "Your app grows with you ,flexible architecture that supports evolving needs, platforms, and user behaviors.",
        },
        {
          icon: "/images/icons/solutions.svg",
          iconWidth: 32,
          iconHeight: 32,
          alt: "solutions",
          title: "Business Aligned Solutions",
          description:
            "We develop with your goals in mind , apps that not only work, but make business sense.",
        },
        {
          icon: "/images/icons/shield-check.svg",
          iconWidth: 32,
          iconHeight: 32,
          alt: "sheild-check",
          title: "Security by Default",
          description:
            "From day one, we prioritize data protection, secure code practices, and compliance at every level.",
        },
        {
          icon: "/images/icons/call.svg",
          iconWidth: 32,
          iconHeight: 32,
          alt: "call",
          title: "End to End Support",
          description:
            "From idea to ongoing updates ,we stay with you through every phase of your app’s journey.",
        },
      ],
    },
    QaTestingRelatedServices: [
      {
        link: "/ai-ml",
        src: "/images/services/related-service-1.webp",
        title: "AI/ML Services",
        description:
          "Delivering AI and ML solutions like chatbots and automation to enhance efficiency and customer experiences.",
      },
      {
        link: "/data-analytics",
        src: "/images/services/related-service-2.webp",
        title: "Data Analytics",
        description:
          "We help you unlock real time insights, predict trends, and track performance for smarter decisions.",
      },
      {
        link: "/mobile-app",
        src: "/images/services/related-service-cm-2.webp",
        title: "Mobile App Services",
        description:
          "Designing custom mobile apps that fit your needs perfectly and integrate uniformly with your systems.",
      },
    ]
  }

};


export default getMobileAppContent;
