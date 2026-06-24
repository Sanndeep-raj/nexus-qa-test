/**
 * Copyright(c) 2025 Valoriz Digital Pvt. Ltd.
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of Valoriz ("Confidential
 * Information"). You shall not disclose such Confidential Information and shall use it only in
 * accordance with the terms of the contract agreement you entered into with Valoriz.
 *
 * @author Ram S Madhav
 */

import { getSubServicesContent } from "services/SanityServices";
import { subServiceKeyMapping } from "utils/constants";

export default async function getDigitalMarketingData() {
  const { subService } =
    (await getSubServicesContent(subServiceKeyMapping.DIGITAL_MARKETING)) || {};

  return {
    status: 200,
    CloudModernizationNav: {
      sectionMap: {
        Services: "overview",
        "Industries We Serve": "case-studies",
        Process: "process",
        "Tech Stacks": "tech-stacks",
        FAQs: "faqs",
      },
    },
    FAQ: {
      id: "faqs",
      title: "FAQs",
      subtitle: "eCommerce",
      faqs: subService?.faqs
    },
    AppHead: { seo: subService?.seo, pathName: "/digital-marketing" },
    QaTestingProcess: {
      id: "process",
      heading: "Our Digital Marketing Process",
      subHeading: "Process",
      bgImage: "/images/bg/bg-services.webp",
      steps: [
        {
          step: 1,
          title: "Discovery and Research",
          description: "We start with getting to know you and your business, goals, and target audience to create a solid groundwork for the digital marketing strategy.",
          img: "/images/services/process-determine.webp",
          imgSm: "/images/services/process-determine-sm.webp",
          align: "left",
        },
        {
          step: 2,
          title: "Strategy Planning",
          description: "With information gathered from our research, we create a unique digital marketing strategy that matches your goals and is focused on growth and results.",
          img: "/images/services/process-describe.webp",
          imgSm: "/images/services/process-describe-sm.webp",
          align: "right",
        },
        {
          step: 3,
          title: "Implementation",
          description: "Our team works on executing this strategy across various suitable digital marketing channels, such as SEO, social media marketing, content marketing, and paid advertising.",
          img: "/images/services/process-design.webp",
          imgSm: "/images/services/process-design-sm.webp",
          align: "left",
        },
        {
          step: 4,
          title: "Optimization",
          description: "Our team keeps a close eye on the performance of our strategies and makes necessary improvements to increase results and engagement.",
          img: "/images/services/process-develop.webp",
          imgSm: "/images/services/process-develop-sm.webp",
          align: "right",
        },
        {
          step: 5,
          title: "Reporting and Insights",
          description: "Our regular reports and insights help you understand our results and work towards creating a better marketing strategy.",
          img: "/images/services/process-deploy.webp",
          imgSm: "/images/services/process-deploy-sm.webp",
          align: "left",
        }
      ],
    },
    DigitalMarketingIndustry: {
      title: "Industries We Serve",
      slides: [
        { title: "E Commerce", description: "Assisting online retailers in using focused digital marketing techniques to boost visibility, draw in the right clients, and enhance conversions", image: "/images/services/dm-case-1.webp" },
        { title: "Technology and SaaS", description: "Our customer needed a quick and reliable migration of their e-commerce site and their content to Shopify.", image: "/images/services/dm-case-2.webp" },
        { title: "Retail and Consumer Brands", description: "Our customer needs an expert team to fully manage their cloud based data integration and data engineering requirements.", image: "/images/services/dm-case-3.webp" },
        { title: "Healthcare and Wellness", description: "Our customer needs an expert team to fully manage their cloud based data integration and data engineering requirements.", image: "/images/services/dm-case-4.webp" },
        { title: "Education and EdTech", description: "Our customer needs an expert team to fully manage their cloud based data integration and data engineering requirements.", image: "/images/services/dm-case-5.webp" },
        { title: "Finance and FinTech", description: "Our customer needs an expert team to fully manage their cloud based data integration and data engineering requirements.", image: "/images/services/dm-case-6.webp" },
      ]
    },
    QaTestingOverview: {
      heading: "Digital Marketing",
      subHeading: "Services We Provide",
      intro:
        "We help you navigate the digital world with smart strategies, real experience, and a focus on driving meaningful growth",
      slides: [
        {
          title: "Social Media Management",
          description: "Strategic social media marketing is one of our digital marketing services; it helps brands reach the right audience on sites like Facebook, Instagram, LinkedIn, and X. To keep your brand active, visible, and interesting, we oversee content planning, posting schedules, community involvement, and analytics.",
          img: "/images/services/dm-service-1.webp",
          imgSm: "/images/services/dm-service-sm-1.webp",
        },
        {
          title: "Performance Marketing",
          description: "Our performance-focused digital marketing services are intended to produce quantifiable outcomes. We increase leads, improve conversions, and drive qualified traffic through targeted advertising on Google Ads and social media platforms. We also continuously optimize campaigns to maximize return on investment.",
          img: "/images/services/dm-service-2.webp",
          imgSm: "/images/services/dm-service-sm-2.webp",
        },
        {
          title: "Search Engine Optimization (SEO)",
          description: "An essential component of our digital marketing services is SEO. Through keyword optimization, technical SEO, content improvement, and link building techniques that help draw steady organic traffic and raise search rankings, we increase your website's visibility on search engines.",
          img: "/images/services/dm-service-3.webp",
          imgSm: "/images/services/dm-service-sm-3.webp",
        },
        {
          title: "Content Marketing",
          description: "Our content-driven digital marketing services assist companies in establishing credibility and trust on the internet. In order to inform audiences, increase search visibility, and foster long-term brand growth, we produce blogs, website content, thought leadership articles, and captivating digital content.",
          img: "/images/services/dm-service-4.webp",
          imgSm: "/images/services/dm-service-sm-4.webp",
        },
        {
          title: "Generative Engine Optimization (GEO)",
          description: "Our digital marketing services include Generative Engine Optimisation as AI-powered search develops. In order for brand content to show up in AI-generated search results, recommendation engines, and new AI-driven discovery platforms, we optimise it.",
          img: "/images/services/dm-service-5.webp",
          imgSm: "/images/services/dm-service-sm-5.webp",
        },
        {
          title: "Creative and Visual Marketing",
          description: "An essential component of successful digital marketing services is creative storytelling. We create top-notch visual assets, graphics, and videos that enhance brand recognition, boost interaction, and effectively convey messages through digital platforms.",
          img: "/images/services/dm-service-6.webp",
          imgSm: "/images/services/dm-service-sm-6.webp",
        },
      ],
    },
    CloudModernizationBanner: {
      heading: `Helping You <br/>Succeed Online`,
      description:
        "We help you navigate the digital world with smart strategies, real experience, and a focus on driving meaningful growth.",
      image: "/images/services/dm-graphics.webp",
      bannerItems: [{ feature: "Active Clients", count: "4+" }, { feature: "Marketing Team", count: "10+" }, { feature: "7X Increase", count: "ROAS" }]
    },
  };
}

