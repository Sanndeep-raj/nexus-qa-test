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
export default async function getDigitalCommerceData() {
  const { subService } =
    (await getSubServicesContent(subServiceKeyMapping.DIGITAL_COMMERCE)) || {};

  return {
    status: 200,
    AppHead: { seo: subService?.seo, pathName: "/digital-commerce" },
    DataAnalyticsHighlights: {
      title: "The Difference We Made",
      content1: "Products Listed",
      value1: "1.4",
      suffix1: "+M",
      decimal1: true,
      content2: "Revenue",
      value2: "100",
      suffix2: "+M",
      content3: "Years Of Industry Expertise",
      value3: "10",
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
          title: "Determine",
          description:
            "We start by understanding your needs, challenges, and assumptions to lay a strong foundation for your project. This ensures a smooth ecommerce website development services journey.",
          img: "/images/services/process-determine.webp",
          imgSm: "/images/services/process-determine-sm.webp",
          align: "left",
        },
        {
          step: 2,
          title: "Describe",
          description:
            "From project scope to risk assessment and milestones, we map out every detail, creating a clear roadmap as a leading ecommerce development agency for seamless execution.",
          img: "/images/services/process-describe.webp",
          imgSm: "/images/services/process-describe-sm.webp",
          align: "right",
        },
        {
          step: 3,
          title: "Design",
          description:
            "With wireframes, prototypes, and a user-centric approach, we craft intuitive UI/UX and robust system architecture, enhancing your store with best ecommerce hosting services.",
          img: "/images/services/process-design.webp",
          imgSm: "/images/services/process-design-sm.webp",
          align: "left",
        },
        {
          step: 4,
          title: "Develop",
          description:
            "Engineering, API integrations, QA, and security come together to build a high-performing, secure, and scalable solution with expert Ecommerce web development.",
          img: "/images/services/process-develop.webp",
          imgSm: "/images/services/process-develop-sm.webp",
          align: "right",
        },
        {
          step: 5,
          title: "Deploy",
          description:
            "From environment setup to product deployment and migration, we ensure a smooth launch with ongoing support, backed by reliable best ecommerce hosting services.",
          img: "/images/services/process-deploy.webp",
          imgSm: "/images/services/process-deploy-sm.webp",
          align: "left",
        },
      ],
    },
    QaTestingOverview: {
      heading: "Ecommerce Development",
      subHeading: "Services We Provide",
      intro:
        "We’re here to help businesses grow with ecommerce solutions that actually work. Curious how? Buckle up, because we’re just getting started!",
      slides: [
        {
          title: "Cloud Modernization",
          description:
            "Enhance your ecommerce platform with our cloud expertise, boosting your performance and scalability. As a top ecommerce development company in India, we help you prepare for the future.",
          img: "/images/services/dc-service-1.webp",
          imgSm: "/images/services/dc-service-sm-1.webp",
        },
        {
          title: "Product Engineering",
          description:
            "Building custom ecommerce stores from the ground up, blending smart product engineering with your unique needs to create platforms that truly work for your business.",
          img: "/images/services/dc-service-2.webp",
          imgSm: "/images/services/dc-service-sm-2.webp",
        },
        {
          title: "Digital Commerce Implementation",
          description:
            "With a focus on your goals, we build digital commerce solutions as the best ecommerce development company in India, ensuring your business grows effortlessly.",
          img: "/images/services/dc-service-3.webp",
          imgSm: "/images/services/dc-service-sm-3.webp",
        },
        {
          title: "Composable Commerce",
          description:
            "Delivering composable commerce experiences, we create customizable, scalable platforms as a leading custom ecommerce development company, designed to grow with your business.",
          img: "/images/services/dc-service-4.webp",
          imgSm: "/images/services/dc-service-sm-4.webp",
        },
        {
          title: "Headless Commerce",
          description:
            "Experience the freedom of fast, flexible platforms that adapt to your business needs, designed to grow and evolve with you.",
          img: "/images/services/dc-service-5.webp",
          imgSm: "/images/services/dc-service-sm-5.webp",
        },
        {
          title: "Data Analytics",
          description:
            "We help you uncover the story behind your data, providing insights that drive smarter decisions and meaningful results for your business.",
          img: "/images/services/dc-service-6.webp",
          imgSm: "/images/services/dc-service-sm-6.webp",
        },
        {
          title: "Mobile Applications",
          description:
            "We build mobile apps that make shopping a breeze, combining smart design and functionality as the best ecommerce app development team.",
          img: "/images/services/dc-service-7.webp",
          imgSm: "/images/services/dc-service-sm-7.webp",
        },
        {
          title: "UI/UX Design & Development",
          description:
            "Creating UI/UX that’s easy to navigate and visually stunning, ensuring your users stay engaged and connected.",
          img: "/images/services/dc-service-8.webp",
          imgSm: "/images/services/dc-service-sm-8.webp",
        },
      ],
    },
    QaTestingBanner: {
      heading: `Digital\nCommerce`,
      headingsm: `DigitalCommerce`,
      description:
        "Powering high-performing ecommerce experiences with stunning design, fast backend systems, and end-to-end development expertise.",
      buttonText: "Get A Quote",
      img: "/images/services/dc-graphics.webp",
      imgSm: "/images/services/dc-graphics-sm.webp",
      scrollId: "service-contact"
    },
    MobileAppChoose: {
      id: "solutions",
      label: "Why we stand out in",
      heading: `eCommerce\nDevelopment Solutions`,
      description:
        "Building an eCommerce business takes more than just a website. As a trusted eCommerce website development company in India, we create solutions that work for you.",
      items: [
        {
          icon: "/images/icons/thumbsup.svg",
          iconWidth: 24,
          iconHeight: 32,
          alt: "Proven Track Record",
          title: "Proven Track Record",
          description:
            "Years of experience and successful projects define our ecommerce development process, delivering high performing and customer focused solutions that drive growth and success.",
        },
        {
          icon: "/images/icons/shine.svg",
          iconWidth: 32,
          iconHeight: 32,
          alt: "Industry Expertise",
          title: "Industry Expertise",
          description:
            "With partnerships across top eCommerce platforms and tech providers, we bring real world expertise to every project, making us the best ecommerce website development company for businesses looking to ascend.",
        },
        {
          icon: "/images/icons/end-to-end.svg",
          iconWidth: 32,
          iconHeight: 32,
          alt: "End-to-End Services",
          title: "End-to-End Services",
          description:
            "With partnerships across top eCommerce platforms and tech providers, we bring real world expertise to every project, making us the best ecommerce website development company for businesses looking to ascend.",
        },
        {
          icon: "/images/icons/integration.svg",
          iconWidth: 32,
          iconHeight: 32,
          alt: "Omnichannel Integration",
          title: "Omnichannel Integration",
          description:
            "Shoppers expect a connected experience across every platform. Our ecommerce website development services make sure your brand delivers exactly that.",
        },
        {
          icon: "/images/icons/optimization.svg",
          iconWidth: 32,
          iconHeight: 32,
          alt: "Performance & Speed Optimization",
          title: "Performance & Speed Optimization",
          description:
            "With our best ecommerce hosting services, we guarantee a performance score above 98, making your website lightning-fast and keeping customers engaged without delays.",
        },
        {
          icon: "/images/icons/security.svg",
          iconWidth: 32,
          iconHeight: 32,
          alt: "Strong Security & Compliance",
          title: "Strong Security & Compliance",
          description:
            "With our best ecommerce hosting services, we guarantee a performance score above 98, making your website lightning-fast and keeping customers engaged without delays.",
        },
      ],
    },
    FAQ: {
      id: "faqs",
      title: "FAQs",
      subtitle: "eCommerce",
      faqs: subService?.faqs
    }

  };
}

