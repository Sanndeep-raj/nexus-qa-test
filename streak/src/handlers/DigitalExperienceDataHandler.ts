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
export const getDigitalExperienceData = async () => {
  const { subService } = await (getSubServicesContent(subServiceKeyMapping.DIGITAL_EXPERIENCE)) || {};
  return {
    status: 200,
    FAQ: {
      id: "faqs",
      title: "FAQs",
      subtitle: "eCommerce",
      faqs: subService?.faqs
    },
    AppHead: { seo: subService?.seo, pathName: "/digital-experience" },
    QaTestingOverview: {
      heading: "Digital Experience",
      subHeading: "Services We Provide",
      intro:
        "From first click to lasting connection unlock digital services that shape every touchpoint into something customers remember and return to.",
      slides: [
        {
          title: "Customer Experience",
          description:
            "We help you turn every customer touchpoint into a meaningful moment that builds trust drives repeat business and creates lasting connections across every channel.",
          img: "/images/services/de-service-1.webp",
          imgSm: "/images/services/de-service-sm-1.webp",
        },
        {
          title: "Omnichannel Commerce",
          description:
            "We help you create shopping journeys that feel seamless so your customers can move from store to screen without missing a beat or losing trust.",
          img: "/images/services/de-service-2.webp",
          imgSm: "/images/services/de-service-sm-2.webp",
        },
        {
          title: "Customer Relationship Management",
          description:
            "Stronger customer relationships start by understanding real needs then delivering smarter sales faster service and meaningful moments that turn one-time buyers into loyal advocates.",
          img: "/images/services/de-service-3.webp",
          imgSm: "/images/services/de-service-sm-3.webp",
        },
        {
          title: "Digital Experience Platform",
          description:
            "Deliver consistent digital journeys by connecting systems designing flexible platforms and enabling effortless publishing that keeps every channel aligned with what customers expect and value.",
          img: "/images/services/de-service-4.webp",
          imgSm: "/images/services/de-service-sm-4.webp",
        },
        {
          title: "Content Management System",
          description:
            "Take control of digital content with an easy-to-use system that helps teams update publish and personalize across platforms without delays or technical roadblocks.",
          img: "/images/services/de-service-5.webp",
          imgSm: "/images/services/de-service-sm-5.webp",
        },
      ],
    },
    MobileAppChoose: {
      id: "choose",
      label: "Why We Stand Out in",
      heading: "Digital Experience",
      description:
        "Creating a great digital experience takes more than just technology. We build solutions that truly connect with your customers and drive results.",
      items: [
        {
          icon: "/images/icons/jet.svg",
          iconWidth: 32,
          iconHeight: 32,
          alt: "jet",
          title: "Seamless Integration",
          description:
            "Keep every system and channel connected so your digital experience flows without interruptions. We make sure everything works together smoothly.",
        },
        {
          icon: "/images/icons/search-spot.svg",
          iconWidth: 32,
          iconHeight: 32,
          alt: "search-spot",
          title: "Personalized Journeys",
          description:
            "Create meaningful experiences that speak directly to each customer’s unique needs and preferences. It’s how we help build real connections.",
        },
        {
          icon: "/images/icons/note-check.svg",
          iconWidth: 33,
          iconHeight: 32,
          alt: "note-check",
          title: "Agile Growth",
          description:
            "Stay flexible and ready to evolve as your business and customer expectations change. We adapt alongside your growth.",
        },
        {
          icon: "/images/icons/pie-chart.svg",
          iconWidth: 34,
          iconHeight: 32,
          alt: "pie-chart",
          title: "Actionable Insights",
          description:
            "Turn real customer behavior into clear steps that improve every interaction and outcome. Our insights guide smarter decisions.",
        },
        {
          icon: "/images/icons/shield.svg",
          iconWidth: 28,
          iconHeight: 32,
          alt: "shield",
          title: "Built-in Security",
          description:
            "Protect your data and your customers with security measures that never get in the way. We keep safety a priority.",
        },
        {
          icon: "/images/icons/people.svg",
          iconWidth: 32,
          iconHeight: 32,
          alt: "people",
          title: "True Partnership",
          description:
            "Collaborate with a team that listens, adapts, and puts your goals front and center. That’s how we move forward—together.",
        },
      ],
    },
    QaTestingProcess: {
      id: "process",
      heading: "Our Digital Experience Process",
      subHeading: "Process",
      bgImage: "/images/bg/bg-services.webp",
      steps: [
        {
          step: 1,
          title: `Determine`,
          description:
            "We begin by really getting to know your goals, challenges, and expectations. This way, we lay a solid foundation that sets your digital experience up for success.",
          img: "/images/services/process-determine.webp",
          imgSm: "/images/services/process-determine-sm.webp",
          align: "left",
        },
        {
          step: 2,
          title: "Describe",
          description:
            "We outline the entire journey, from objectives to potential roadblocks and milestones—so everyone knows the path forward with confidence.",
          img: "/images/services/process-describe.webp",
          imgSm: "/images/services/process-describe-sm.webp",
          align: "right",
        },
        {
          step: 3,
          title: "Design",
          description:
            "Using customer insights and creativity, we shape engaging, user-friendly experiences that feel natural and keep people coming back.",
          img: "/images/services/process-design.webp",
          imgSm: "/images/services/process-design-sm.webp",
          align: "left",
        },
        {
          step: 4,
          title: "Develop",
          description:
            "Our team brings the design to life, integrating systems, testing rigorously, and making sure everything runs smoothly and securely.",
          img: "/images/services/process-develop.webp",
          imgSm: "/images/services/process-develop-sm.webp",
          align: "right",
        },
        {
          step: 5,
          title: "Deploy",
          description:
            "From setting up the environment to rolling out your digital experience, we handle the details so the launch is seamless and hassle-free.",
          img: "/images/services/process-deploy.webp",
          imgSm: "/images/services/process-deploy-sm.webp",
          align: "left",
        },
        {
          step: 6,
          title: "Support",
          description:
            "We don’t just launch and leave,you get ongoing help and optimization to keep things running at their best, always.",
          img: "/images/services/es-process-support.webp",
          imgSm: "/images/services/es-process-support-sm.webp",
          align: "right",
        },
      ],
    },
    QaTestingRelatedServices: [
      {
        link: "/digital-commerce",
        src: "/images/services/related-service-cm-1.webp",
        title: "Digital Commerce",
        description:
          "Building flexible e-commerce platforms with seamless integrations, making sure of enhanced connectivity and flexibility",
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
  };
};

export default getDigitalExperienceData;
