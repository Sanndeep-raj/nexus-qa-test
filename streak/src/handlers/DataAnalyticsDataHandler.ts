import { subServiceKeyMapping } from "utils/constants";
import { getSubServicesContent } from "services/SanityServices";

export const getDataAnalyticsContent = async () => {
  const { subService } = await (getSubServicesContent(subServiceKeyMapping.DATA_ANALYTICS)) || {};
  return {
    status: 200,
    FAQ: {
      id: "faqs",
      title: "FAQs",
      subtitle: "eCommerce",
      faqs: subService?.faqs
    },
    AppHead: { seo: subService?.seo, pathName: "/data-analytics" },
    QaTestingBanner: {
      heading: `Data Analytics\nServices`,
      description:
        "Cracking the Code of Business Brilliance with Data",
      buttonText: "Get Started",
      img: "/images/services/da-graphics.webp",
      imgSm: "/images/services/da-graphics-sm.webp",
      scrollId: "over"
    },
    QaTestingOverview: {
      heading: "Data Analytics",
      subHeading: "Services We Provide",
      intro:
        "When data feels messy and direction feels unclear, we bring structure and sense. Here’s how Valoriz gets it done.",
      slides: [
        {
          title: "Business intelligence consulting",
          description:
            "Drive smarter business decisions with clear, actionable insights from our custom Business Intelligence services.",
          img: "/images/services/da-service-1.webp",
          imgSm: "/images/services/da-service-sm-1.webp",
        },
        {
          title: "Data migration & modernization",
          description:
            "Secure your data’s long-term value by migrating to better systems or the cloud quickly, safely and smartly.",
          img: "/images/services/da-service-2.webp",
          imgSm: "/images/services/da-service-sm-2.webp",
        },
        {
          title: "Data governance",
          description:
            "Unlock clarity and control with data strategy, automation, and governance—all designed for growth.",
          img: "/images/services/da-service-3.webp",
          imgSm: "/images/services/da-service-sm-3.webp",
        },
        {
          title: "Data Strategy and consulting",
          description:
            "Establish data trust with industry-best practices, policies, and governance services that ensure transparency and accountability.",
          img: "/images/services/da-service-4.webp",
          imgSm: "/images/services/da-service-sm-4.webp",
        },
      ],
    },
    DataAnalyticsHighlights: {
      title: "The Difference We Made",
      content1: "Operations",
      value1: "7",
      suffix1: "M+",
      content2: "Revenue",
      value2: "200",
      suffix2: "M+",
      content3: "Years Of Industry Expertise",
      value3: "10",
      suffix3: "+",
    },
    MobileAppChoose: {
      id: "solutions",
      label: "Why We Lead in",
      heading: "Data Analytics Solutions",
      description:
        "Anyone can collect data, but turning it into results takes the right approach. We're here to help you do just that.",
      items: [
        {
          icon: "/images/icons/data-governance.svg",
          iconWidth: 32,
          iconHeight: 32,
          alt: "data-governance",
          title: "Data Governance & Security",
          description:
            "We ensure that your data is handled responsibly, securely, and in compliance with regulations, maintaining the highest standards of governance.",
        },
        {
          icon: "/images/icons/customer-focus.svg",
          iconWidth: 32,
          iconHeight: 32,
          alt: "customer-focus",
          title: "Customer Focus",
          description:
            "Valoriz collaborates closely with you, understanding your unique goals and challenges to deliver solutions aligned with your business objectives.",
        },
        {
          icon: "/images/icons/insights.svg",
          iconWidth: 32,
          iconHeight: 32,
          alt: "insights",
          title: "Relevant Insights",
          description:
            "Our focus is on delivering only the most relevant insights, allowing you to prioritize what truly matters to your business.",
        },
        {
          icon: "/images/icons/end-to-end-support.svg",
          iconWidth: 32,
          iconHeight: 32,
          alt: "end-to-end-support",
          title: "End-to-End Support",
          description:
            "Valoriz offers comprehensive solutions throughout your entire data analytics journey.",
        },
        {
          icon: "/images/icons/strategic-prediction.svg",
          iconWidth: 32,
          iconHeight: 32,
          alt: "strategic-prediction",
          title: "Strategic Predictions",
          description:
            "Anticipating what’s next through data ensures your business leads, not follows.",
        },
        {
          icon: "/images/icons/smooth-integration.svg",
          iconWidth: 32,
          iconHeight: 32,
          alt: "smooth-integration",
          title: "Smooth Integration",
          description:
            "Our data analytics solutions integrate seamlessly with your systems, enhancing performance without disrupting your workflow.",
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
        link: "/mobile-app",
        src: "/images/services/related-service-cm-2.webp",
        title: "Mobile App Services",
        description:
          "Designing custom mobile apps that fit your needs perfectly and integrate uniformly with your systems.",
      },
      {
        link: "/qa-testing",
        src: "/images/services/related-service-3.webp",
        title: "QA & Testing",
        description:
          "Delivering flawless, high-performing software through rigorous testing and quality assurance.",
      },
    ]
  }
};


export default getDataAnalyticsContent;
