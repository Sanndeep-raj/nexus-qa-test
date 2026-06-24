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
import { subServiceKeyMapping } from "utils/constants";
import { getSubServicesContent } from "services/SanityServices";


export default async function getSoftwareEnterpriseData() {
  const { subService } = await (getSubServicesContent(subServiceKeyMapping.ENTERPRISE_SOFTWARE)) || {};

  return {
    status: 200,
    FAQ: {
      id: "faqs",
      title: "FAQs",
      subtitle: "eCommerce",
      faqs: subService?.faqs
    },
    AppHead: { seo: subService?.seo, pathName: "/enterprise-software" },
    DataAnalyticsHighlights: {
      title: "The Difference We Made",
      content1: "Operations",
      value1: "7",
      suffix1: "m+",
      content2: "Technology Experts On Board",
      value2: "120",
      suffix2: "+",
      content3: "On Time Project Deliveries",
      value3: "3000",
      suffix3: "+",
    },
    QaTestingProcess: {
      id: "process",
      heading: "Enterprise Software",
      subHeading: "Process",
      bgImage: "/images/bg/bg-services.webp",
      steps: [
        {
          step: 1,
          title: "Determine",
          description:
            "We start by understanding your needs, challenges, and assumptions to lay a strong foundation for your project. This ensures a smooth Enterprise Software Development Services journey.",
          img: "/images/services/process-determine.webp",
          imgSm: "/images/services/process-determine-sm.webp",
          align: "left"
        },
        {
          step: 2,
          title: "Describe",
          description:
            "From project scope to risk assessment and milestones, we map out every detail, creating a clear roadmap as a leading enterprise software development company for seamless execution.",
          img: "/images/services/process-describe.webp",
          imgSm: "/images/services/process-describe-sm.webp",
          align: "right"
        },
        {
          step: 3,
          title: "Design",
          description:
            "With wireframes, prototypes, and a user-centric approach, we craft intuitive UI/UX and robust system architecture, enhancing your store with best ecommerce hosting services.",
          img: "/images/services/process-design.webp",
          imgSm: "/images/services/process-design-sm.webp",
          align: "left"
        },
        {
          step: 4,
          title: "Develop",
          description:
            "Engineering, API integrations, QA, and security come together to build a high-performing, secure, and scalable solution with expert Enterprise Software Solutions.",
          img: "/images/services/process-develop.webp",
          imgSm: "/images/services/process-develop-sm.webp",
          align: "right"
        },
        {
          step: 5,
          title: "Deploy",
          description:
            "From environment setup to product deployment and migration, we ensure a smooth launch with ongoing support, backed by reliable best enterprise software hosting services.",
          img: "/images/services/process-deploy.webp",
          imgSm: "/images/services/process-deploy-sm.webp",
          align: "left"
        },
        {
          step: 6,
          title: "Support",
          description:
            "Get reliable support, fast updates and seamless fixes from leading Enterprise Software Services in Dubai and India.",
          img: "/images/services/es-process-support.webp",
          imgSm: "/images/services/es-process-support-sm.webp",
          align: "right"
        }
      ],
    },
    QaTestingOverview: {
      heading: "Our Enterprise Software",
      subHeading: `Development\nCapabilities`,
      intro:
        "Solving real business problems with systems that just work. Wondering what’s inside? Let’s break it down.",
      slides: [
        {
          title: "Custom Enterprise Software Development",
          description:
            "Build secure business apps that simplify workflows boost scalability and support real time access across your enterprise.",
          img: "/images/services/es-overview-1.webp",
          imgSm: "/images/services/es-overview-sm-1.webp",
        },
        {
          title: "Legacy Application Modernization",
          description:
            "Revamp outdated systems to improve performance fix hidden inefficiencies and prepare your software for future growth.",
          img: "/images/services/es-overview-2.webp",
          imgSm: "/images/services/es-overview-sm-2.webp",
        },
        {
          title: "Software integration services",
          description:
            "Connect systems devices and data into one flow that enables faster decisions smoother operations and better scalability",
          img: "/images/services/es-overview-3.webp",
          imgSm: "/images/services/es-overview-sm-3.webp",
        },
        {
          title: "Enterprise Data Management",
          description:
            "Ensure reliable insights with consistent accurate data that supports decisions streamlines operations and strengthens business performance",
          img: "/images/services/es-overview-4.webp",
          imgSm: "/images/services/es-overview-sm-4.webp",
        },
        {
          title: "Security and compliance",
          description:
            "Protect systems with built-in safeguards that reduce risks prevent breaches and support safe compliant business operations",
          img: "/images/services/es-overview-5.webp",
          imgSm: "/images/services/es-overview-sm-5.webp",
        },
        {
          title: "Software Maintenance & Support",
          description:
            "Keep systems running smoothly with fast updates reliable support and changes that never disrupt business continuity",
          img: "/images/services/es-overview-6.webp",
          imgSm: "/images/services/es-overview-sm-6.webp",
        },
      ],
    },
    QaTestingBanner: {
      heading: `Enterprise\nSoftware\nDevelopment`,
      description:
        "Purposeful enterprise systems built to connect teams, untangle workflows, and spark progress across every layer",
      buttonText: "Get Started",
      img: "/images/services/es-graphics.webp",
      scrollId: "overview",
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
        link: "/qa-testing",
        src: "/images/services/related-service-3.webp",
        title: "QA & Testing",
        description:
          " Delivering flawless, high-performing software through rigorous testing and quality assurance.",
      },
    ],
  };
}
