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
export default async function getDpAutomationData() {
  const { subService } =
    (await getSubServicesContent(subServiceKeyMapping.DP_AUTOMATION)) || {};

  return {
    status: 200,
    FAQ: {
      id: "faqs",
      title: "FAQs",
      subtitle: "eCommerce",
      faqs: subService?.faqs
    },
    AppHead: { seo: subService?.seo, pathName: "/dp-automation" },
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
      heading: "Digital Process Automation",
      subHeading: "Process",
      bgImage: "/images/bg/bg-services.webp",
      steps: [
        {
          step: 1,
          title: "Determine",
          description:
            "We begin by really getting to know your current workflows, challenges, and goals so we can build solutions that actually fit your business needs.",
          img: "/images/services/process-determine.webp",
          imgSm: "/images/services/process-determine-sm.webp",
          align: "left"
        },
        {
          step: 2,
          title: "Describe",
          description:
            "Next, we map out what success looks like—setting clear priorities and outlining the steps so everyone knows what to expect along the way.",
          img: "/images/services/process-describe.webp",
          imgSm: "/images/services/process-describe-sm.webp",
          align: "right"
        },
        {
          step: 3,
          title: "Design",
          description:
            "We create user-friendly workflows and systems that feel natural to your team, making sure everything is simple to use and efficient from the start.",
          img: "/images/services/process-design.webp",
          imgSm: "/images/services/process-design-sm.webp",
          align: "left"
        },
        {
          step: 4,
          title: "Develop",
          description:
            "Our team then builds the automation tools and integrations carefully, making sure they work smoothly and securely with your existing setup.",
          img: "/images/services/process-develop.webp",
          imgSm: "/images/services/process-develop-sm.webp",
          align: "right"
        },
        {
          step: 5,
          title: "Deploy",
          description:
            "When it's time to launch, we handle all the details to get everything running without a hitch, making the transition as seamless as possible.",
          img: "/images/services/process-deploy.webp",
          imgSm: "/images/services/process-deploy-sm.webp",
          align: "left"
        },
        {
          step: 6,
          title: "Support",
          description:
            "After launch, we stick around to help fine-tune, troubleshoot, and improve your automation so it keeps working well as your business grows.",
          img: "/images/services/es-process-support.webp",
          imgSm: "/images/services/es-process-support-sm.webp",
          align: "right"
        }
      ]
    },
    QaTestingOverview: {
      heading: "Our Digital Automation",
      subHeading: "Capabilities",
      intro:
        "Achieve operational clarity and faster outcomes through intelligent digital transformation and automation solutions",
      slides: [
        {
          title: "Digital Process Automation Consulting",
          description:
            "We begin by studying your workflows and then use AI automation and Copilot to replicate tasks streamline processes and drive smarter faster business decisions",
          img: "/images/services/pe-overview-6.webp",
          imgSm: "/images/services/pe-overview-sm-6.webp",
        },
        {
          title: "Low-code platform Apps",
          description:
            "At Valoriz we make it simple to use Azure Power Apps Logic Apps and other Microsoft tools so your team can work smarter connect everything easily and get things done faster",
          img: "/images/services/pe-overview-3.webp",
          imgSm: "/images/services/pe-overview-sm-3.webp",
        },
        {
          title: "Digital Automation",
          description:
            "Transform your business with powerful digital automation and low-code tools that speed up app development empower users and boost efficiency while modernizing systems and improving customer experiences",
          img: "/images/services/ai-overview-1.webp",
          imgSm: "/images/services/ai-overview-sm-1.webp",
        },
        {
          title: "SharePoint portals and content management",
          description:
            "Organize your digital content securely and easily with SharePoint CMS while we help set up libraries version control tagging and workflows to boost efficiency and with Copilot AI making management smarter and faster",
          img: "/images/services/dc-service-2.webp",
          imgSm: "/images/services/dc-service-sm-4.webp",
        },
        {
          title: "DPA Software Implementation",
          description:
            "Implementing digital process automation transforms your business by improving efficiency guiding you through each step customizing solutions and using AI-powered Copilot to keep workflows smooth and decisions smart",
          img: "/images/services/overview-1.webp",
          imgSm: "/images/services/dpa-service-sm-1.webp",
        },
        {
          title: "Process Automation",
          description:
            "Our automation solutions use RPA workflow orchestration and IT automation to streamline processes reduce manual work and help businesses improve efficiency deliver better customer experiences and innovate with human oversight",
          img: "/images/services/qa-overview-4.webp",
          imgSm: "/images/services/qa-overview-sm-4.webp",
        },
      ],
    },
    QaTestingBanner: {
      heading: `Digital Process\nAutomation`,
      description:
        "Simplifying complex workflows to help your business run smoothly every day",
      buttonText: "Get Started",
      img: "/images/services/dp-graphics.webp",
      scrollId: "over"
    },
    MobileAppChoose: {
      id: "choose",
      label: "What Makes Us Leaders in",
      heading: `Digital Transformation\nand Automation`,
      description:
        "Transforming your business goes beyond technology. As experts in digital automation solutions, we create solutions that drive real results.",
      items: [
        {
          icon: "/images/icons/industry-expertise.svg",
          iconWidth: 32,
          iconHeight: 32,
          alt: "Industry Expertise",
          title: "Industry Expertise",
          description:
            "We take the time to really understand your business and the challenges you face so the solutions we build actually make a difference and help you grow.",
        },
        {
          icon: "/images/icons/forward-thinking.svg",
          iconWidth: 32,
          iconHeight: 32,
          alt: "Forward Thinking",
          title: "Forward Thinking",
          description:
            "It’s about looking ahead and finding better ways to get things done today that set you up for success tomorrow without overcomplicating the process.",
        },
        {
          icon: "/images/icons/customer-focus-automation.svg",
          iconWidth: 32,
          iconHeight: 32,
          alt: "Customer Focus",
          title: "Customer Focus",
          description:
            "Everything we do starts with what you and your customers need — making sure your team can work easily and your customers enjoy every interaction.",
        },
        {
          icon: "/images/icons/strong-security.svg",
          iconWidth: 32,
          iconHeight: 32,
          alt: "Strong Security & Compliance",
          title: "Strong Security & Compliance",
          description:
            "Keeping your information safe is a top priority — we design solutions that protect your business so you can focus on what matters without worry.",
        },
        {
          icon: "/images/icons/end-to-end-partnership.svg",
          iconWidth: 32,
          iconHeight: 32,
          alt: "End-to-End Partnership",
          title: "End-to-End Partnership",
          description:
            "From planning to delivery and beyond, we’re here with you every step of the way making sure things run smoothly and your goals are met.",
        },
        {
          icon: "/images/icons/data-driven.svg",
          iconWidth: 32,
          iconHeight: 32,
          alt: "Data-Driven",
          title: "Data-Driven",
          description:
            "We rely on real facts and results to guide what we do — making adjustments as needed to keep improving how your business works.",
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
    ],
  };
}

