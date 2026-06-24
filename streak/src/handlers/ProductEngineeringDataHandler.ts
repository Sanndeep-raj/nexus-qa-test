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
  const { subService } = await (getSubServicesContent(subServiceKeyMapping.PRODUCT_ENGINEERING)) || {};

  return {
    status: 200,
    FAQ: {
      id: "faqs",
      title: "FAQs",
      subtitle: "eCommerce",
      faqs: subService?.faqs
    },
    AppHead: { seo: subService?.seo, pathName: "/product-engineering" },
    QaTestingProcess: {
      id: "process",
      heading: "Product Engineering",
      subHeading: "Process",
      bgImage: "/images/bg/bg-services.webp",
      steps: [
        {
          step: 1,
          title: "Determine",
          description:
            "We begin by understanding your product goals, challenges, and assumptions to build a solid foundation for your product journey.",
          img: "/images/services/process-determine.webp",
          imgSm: "/images/services/process-determine-sm.webp",
          align: "left"
        },
        {
          step: 2,
          title: "Describe",
          description:
            "From defining requirements to assessing risks and milestones, we create a clear roadmap to guide your project smoothly.",
          img: "/images/services/process-describe.webp",
          imgSm: "/images/services/process-describe-sm.webp",
          align: "right"
        },
        {
          step: 3,
          title: "Design",
          description:
            "Using user-focused wireframes, prototypes, and system architecture, we design intuitive, scalable products that truly meet your user’s needs.",
          img: "/images/services/process-design.webp",
          imgSm: "/images/services/process-design-sm.webp",
          align: "left"
        },
        {
          step: 4,
          title: "Develop",
          description:
            "Our team handles engineering, API integrations, thorough testing, and security to build reliable, high-performance product engineering solutions.",
          img: "/images/services/process-develop.webp",
          imgSm: "/images/services/process-develop-sm.webp",
          align: "right"
        },
        {
          step: 5,
          title: "Deploy",
          description:
            "We manage environment setup, product launch, and data migration, ensuring a seamless deployment backed by ongoing support.",
          img: "/images/services/process-deploy.webp",
          imgSm: "/images/services/process-deploy-sm.webp",
          align: "left"
        },
        {
          step: 6,
          title: "Support",
          description:
            "After launch, we provide continuous maintenance and improvements to keep your product running smoothly and evolving with your business.",
          img: "/images/services/es-process-support.webp",
          imgSm: "/images/services/es-process-support-sm.webp",
          align: "right"
        }
      ]
    },
    QaTestingOverview: {
      heading: "Product Engineering",
      subHeading: `Services We Provide`,
      intro:
        "Take a closer look at how we help shape product ideas into experiences your users will love.",
      slides: [
        {
          title: "User Experience",
          description:
            "With the best product engineering services behind it, your product will feel like second nature to users. We focus on smooth journeys and real-world usability,because great design isn’t just pretty, it works.",
          img: "/images/services/pe-overview-1.webp",
          imgSm: "/images/services/pe-overview-sm-1.webp",
        },
        {
          title: "Product Engineering Consulting",
          description:
            "With digital product engineering, we clear the tech clutter and map out a straightforward path for your product’s future.",
          img: "/images/services/pe-overview-2.webp",
          imgSm: "/images/services/pe-overview-sm-2.webp",
        },
        {
          title: "Product Development",
          description:
            "From concept to launch, this product engineering services company helps shape ideas, document needs, design improvements, and build products with the right technology.",
          img: "/images/services/pe-overview-3.webp",
          imgSm: "/images/services/pe-overview-sm-3.webp",
        },
        {
          title: "Mobile Product Development",
          description:
            "Switching between devices should feel easy. We create mobile apps that stay connected and consistent—no matter the screen, platform, or user.",
          img: "/images/services/pe-overview-4.webp",
          imgSm: "/images/services/pe-overview-sm-4.webp",
        },
        {
          title: "Product Modernization",
          description:
            "Let’s turn your aging product into something fresh. We focus on smarter structure, cleaner design, and stronger performance from end to end.",
          img: "/images/services/pe-overview-5.webp",
          imgSm: "/images/services/pe-overview-sm-5.webp",
        },
        {
          title: "Product Testing",
          description:
            "From mobile and performance to UI and security, we run deep testing across the board before your product enters the market.",
          img: "/images/services/pe-overview-6.webp",
          imgSm: "/images/services/pe-overview-sm-6.webp",
        },
        {
          title: "Product Support & Maintenance",
          description:
            "Keeping your products running smoothly with expert support, regular updates, and smart improvements to boost user experience, performance, and overall efficiency.",
          img: "/images/services/pe-overview-7.webp",
          imgSm: "/images/services/pe-overview-sm-7.webp",
        },
      ],
    },
    QaTestingBanner: {
      heading: `Product\nEngineering\nServices`,
      buttonText: "Get Started",
      img: "/images/services/pe-graphics.webp",
      imgSm: "/images/services/pe-graphics-sm.webp",
      scrollId: "over",
    },
    QaTestingRelatedServices: [
      {
        link: "/digital-commerce",
        src: "/images/services/related-service-cm-1.webp",
        title: "Digital Commerce",
        description:
          " Building flexible e-commerce platforms with seamless integrations, making sure of enhanced connectivity and flexibility.",
      },
      {
        link: "/data-analytics",
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
          " Delivering flawless, high-performing software through rigorous testing and quality assurance.",
      },
    ],
    MobileAppChoose: {
      id: "choose",
      label: "What Makes",
      heading: "Us Different",
      description:
        "We partner closely with you, understanding your needs to build exactly what your business demands.",
      items: [
        {
          icon: "/images/icons/monitor.svg",
          iconWidth: 32,
          iconHeight: 32,
          alt: "monitor",
          title: "Reliable Delivery",
          description:
            "As a trusted product engineering company, we deliver quality results on time, ensuring your projects run smoothly and efficiently.",
        },
        {
          icon: "/images/icons/shine.svg",
          iconWidth: 32,
          iconHeight: 32,
          alt: "shine",
          title: "Client First Approach",
          description:
            "Your goals guide every decision, making sure our digital product engineering services are tailored exactly to what you need.",
        },
        {
          icon: "/images/icons/migration.svg",
          iconWidth: 32,
          iconHeight: 32,
          alt: "migration",
          title: "Strategic Partnerships",
          description:
            "We build strong collaborations to bring fresh ideas and reliable expertise that elevate your product engineering journey.",
        },
        {
          icon: "/images/icons/shield-check.svg",
          iconWidth: 30,
          iconHeight: 32,
          alt: "shield-check",
          title: "Robust Security",
          description:
            "Protecting your data and products is our priority, following strict security standards and compliance you can count on.",
        },
        {
          icon: "/images/icons/globe.svg",
          iconWidth: 32,
          iconHeight: 32,
          alt: "globe",
          title: "Global Reach",
          description:
            "Our experience spans worldwide, delivering digital product engineering services adapted to different markets and cultures.",
        },
        {
          icon: "/images/icons/search.svg",
          iconWidth: 32,
          iconHeight: 32,
          alt: "search",
          title: "Local Insight",
          description:
            "Deep understanding of local markets helps us customize solutions that truly resonate with your target audience.",
        },
      ],
    }
  };

}
