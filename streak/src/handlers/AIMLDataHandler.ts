/**
 * Copyright(c) 2025 Valoriz Digital Pvt. Ltd.
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of Valoriz ("Confidential
 * Information"). You shall not disclose such Confidential Information and shall use it only in
 * accordance with the terms of the contract agreement you entered into with Valoriz.
 *
 * @author Anagha Chandrababu
 */

import { getSubServicesContent } from "services/SanityServices";
import { subServiceKeyMapping } from "utils/constants";


export default async function getAiMlData() {
  const { subService } =
    (await getSubServicesContent(subServiceKeyMapping.AI_ML)) || {};

  return {
    status: 200,
    FAQ: {
      id: "faqs",
      title: "FAQs",
      subtitle: "eCommerce",
      faqs: subService?.faqs
    },
    AppHead: { seo: {}, pathName: "/ai-ml" },
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
    AIMLProcess: {
      id: "process",
      heading: "Our eCommerce",
      subHeading: "Process",
      bgImage: "/images/bg/bg-services.webp",
      steps: [
        {
          step: 1,
          title: "Assessment",
          description: "We start by understanding your e-commerce pain points, then plan smart, growth driven strategies through our AI ML Development service expertise",
          img: "/images/services/process-determine.webp",
          imgSm: "/images/services/process-determine-sm.webp",
          align: "left",
        },
        {
          step: 2,
          title: "Data Curation",
          description:
            "After the assessment, we aggregate structured and unstructured data from multiple sources to unlock actionable insights across customer behavior, sales, and inventory.",
          img: "/images/services/process-describe.webp",
          imgSm: "/images/services/process-describe-sm.webp",
          align: "right",
        },
        {
          step: 3,
          title: "Modeling",
          description:
            "Using advanced modeling, we build AI solutions that deliver personalized recommendations, enhanced search capabilities, and predictive analytics for smarter, data driven decisions.",
          img: "/images/services/process-design.webp",
          imgSm: "/images/services/process-design-sm.webp",
          align: "left",
        },
        {
          step: 4,
          title: "Implementation",
          description:
            "From platform to backend, we enable seamless integration with e-commerce systems like Shopify, Magento, and retail ERPs for smooth deployment.",
          img: "/images/services/process-develop.webp",
          imgSm: "/images/services/process-develop-sm.webp",
          align: "right",
        },
        {
          step: 5,
          title: "Refinement",
          description:
            "With custom AI-powered software solutions, we track model performance and accuracy to ensure long-term reliability and business impact as conditions evolve.",
          img: "/images/services/process-deploy.webp",
          imgSm: "/images/services/process-deploy-sm.webp",
          align: "left",
        },
        {
          step: 6,
          title: "Support",
          description:
            "Providing ongoing support and AI model refinements for long-term scalability.",
          img: "/images/services/process-support-2.webp",
          imgSm: "/images/services/process-support-2-sm.webp",
          align: "right",
        },
      ],
    },
    AIMLOverview: {
      heading: "AI & ML",
      subHeading: "Services We Provide",
      intro:
        "We make AI & ML simple, smart, and seriously effective. Want to know how it can work for your business? Let’s jump in, this is just the start of something big.",
      slides: [
        {
          title: "Computer Vision Solutions",
          description:
            " Our AI ML Developers can enable visual search for ideal shopping, automate product content and PIM, and use image/video analytics for customer insights, inventory tracking, and automated quality control.",
          img: "/images/services/ai-overview-1.webp",
          imgSm: "/images/services/ai-overview-sm-1.webp",
        },
        {
          title: "AI-powered Recommendation Systems",
          description:
            " Boost revenue with an AI ML Development Solution that delivers personalized product recommendations, drives cross-sell/upsell with behavioral insights, and optimizes pricing and inventory through real-time AI-powered forecasting.",
          img: "/images/services/ai-overview-2.webp",
          imgSm: "/images/services/ai-overview-sm-2.webp",
        },
        {
          title: "Chatbots & Generative AI",
          description:
            "Revolutionize ecommerce experiences with RAG-based chatbots,virtual shopping assistants, and sentiment analysis,delivered by a leading AI and ML development company to boost engagement, support, and strategic decision making.",
          img: "/images/services/ai-overview-3.webp",
          imgSm: "/images/services/ai-overview-sm-3.webp",
        },
        {
          title: "Retail Analytics & AI-driven Insights",
          description:
            "Unlock business growth with Machine Learning development services that deliver customer segmentation, predictive sales forecasting, and AI-driven A/B testing to personalize marketing, optimize inventory, and boost conversions with smart insights.",
          img: "/images/services/ai-overview-4.webp",
          imgSm: "/images/services/ai-overview-sm-4.webp",
        },
      ],
    },
    AIMLBanner: {
      heading: `AI & Machine\nLearning Services`,
      description:
        "Building smart AI and ML solutions that boost efficiency, personalization and growth in ecommerce.",
      buttonText: "Get Started",
      scrollId: "overview"
    },
    AIMLRelatedServices: [
      {
        link: "/ai-ml",
        src: "/images/services/related-service-cm-2.webp",
        title: "Mobile App Services",
        description:
          "Designing custom mobile apps that fit your needs perfectly and integrate uniformly with your systems.",
      },
      {
        link: "/data-analytics",
        src: "/images/services/related-service-2.webp",
        title: "Data Analytics",
        description:
          "We help you unlock real time insights, predict trends, and track performance for smarter decisions.",
      },
      {
        link: "/qa-testing",
        src: "/images/services/related-service-3.webp",
        title: "QA & Testing",
        description:
          "Delivering flawless, high-performing software through rigorous testing and quality assurance.",
      },
    ],
    AIMLServices: {
      id: "choose",
      label: "Why We Stand Out in",
      heading: "AI & ML Development Services",
      description:
        "Smart tech comes from smarter companies. As a trusted AI development company in India, we build intelligent systems that fuel real business growth.",
      items: [
        {
          icon: "/images/icons/candle-bars.svg",
          iconWidth: 31,
          iconHeight: 32,
          alt: "candle-bars",
          title: "Business-Driven Approach",
          description:
            "As an AI ML development company, we align every solution with your core business goals—focusing on real impact, not just tech for the sake of it.",
        },
        {
          icon: "/images/icons/meter.svg",
          iconWidth: 34,
          iconHeight: 32,
          alt: "meter",
          title: "Full Cycle Expertise",
          description:
            "From discovery and data prep to model training, integration, and ongoing optimization, we manage the complete AI/ML journey.",
        },
        {
          icon: "/images/icons/setting-arrows.svg",
          iconWidth: 32,
          iconHeight: 32,
          alt: "migration",
          title: "Seamless Platform Integration",
          description:
            "Our solutions easily integrate with e-commerce platforms (like Shopify, Magento, Saleor) and ERP systems without disrupting workflows.",
        },
        {
          icon: "/images/icons/dynamic.svg",
          iconWidth: 33,
          iconHeight: 32,
          alt: "dynamic",
          title: "Dynamic Personalization",
          description:
            "  As a top AI & ML development company, we power intelligent experiences with real-time recommendations, dynamic pricing, and contextual engagement to boost conversions.",
        },
        {
          icon: "/images/icons/lightning.svg",
          iconWidth: 24,
          iconHeight: 32,
          alt: "lightning",
          title: "Continuous Performance Optimization",
          description:
            "Post deployment, our AI ML experts continuously monitor and refine models to ensure long-term accuracy, performance, and ROI.",
        },
        {
          icon: "/images/icons/hexagon.svg",
          iconWidth: 32,
          iconHeight: 32,
          alt: "hexagon",
          title: "Resilient Tech Backbone",
          description:
            "Our AI/ML systems are designed to scale effortlessly as your business grows, flexible, fast, and built to evolve.",
        },
      ],
    },
  };
}

