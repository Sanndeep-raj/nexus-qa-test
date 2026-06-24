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


export default async function getQaTestingData() {
  const { subService } = await (getSubServicesContent(subServiceKeyMapping.QA_TESTING)) || {};

  return {
    status: 200,
    FAQ: {
      id: "faqs",
      title: "FAQs",
      subtitle: "eCommerce",
      faqs: subService?.faqs
    },
    AppHead: { seo: {}, pathName: "/qa-testing" },
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
    QaTestingProcess: {
      id: "process",
      heading: "Quality Assurance & Testing",
      subHeading: "Process",
      bgImage: "/images/bg/bg-services.webp",
      steps: [
        {
          step: 1,
          title: "Requirement Analysis",
          description:
            "Reviewing project needs to define clear test objectives, ensuring alignment with business goals and precise testing requirements.",
          img: "/images/services/process-determine.webp",
          imgSm: "/images/services/process-determine-sm.webp",
          align: "left",
        },
        {
          step: 2,
          title: "Test Planning",
          description:
            "Developing a detailed test strategy, setting timelines, allocating resources, and preparing for a smooth and effective testing process.",
          img: "/images/services/process-describe.webp",
          imgSm: "/images/services/process-describe-sm.webp",
          align: "right",
        },
        {
          step: 3,
          title: "Test Case Development",
          description:
            "Creating comprehensive test cases that cover all functionality, ensuring all aspects of the system are thoroughly validated.",
          img: "/images/services/process-design.webp",
          imgSm: "/images/services/process-design-sm.webp",
          align: "left",
        },
        {
          step: 4,
          title: "Environment Setup",
          description:
            "Configuring the right tools, systems, and infrastructure to create an optimal testing environment for accurate and efficient results.",
          img: "/images/services/process-develop.webp",
          imgSm: "/images/services/process-develop-sm.webp",
          align: "right",
        },
        {
          step: 5,
          title: "Test Execution",
          description:
            "Executing test cases, monitoring results, identifying issues, and documenting defects to ensure optimal performance and flawless functionality.",
          img: "/images/services/qa-overview-6.webp",
          imgSm: "/images/services/qa-overview-6.webp",
          align: "left",
        },
        {
          step: 6,
          title: "Test Cycle Closure",
          description:
            "Wrapping up the testing cycle by analyzing outcomes, resolving issues, and preparing detailed reports for a smooth release.",
          img: "/images/services/process-test-cycle.webp",
          imgSm: "/images/services/process-test-cycle.webp",
          align: "right",
        },
      ],
    },
    QaTestingOverview: {
      heading: "Quality Assurance & Testing",
      subHeading: "Services We Provide",
      intro:
        "Making sure everything works smoothly and reliably. Want to know how we do it? Let's take a look!",
      slides: [
        {
          title: "Mobile App Testing",
          description:
            "Ensuring mobile apps work flawlessly across different devices for smooth user experiences.",
          img: "/images/services/qa-overview-1.webp",
          imgSm: "/images/services/qa-overview-sm-1.webp",
        },
        {
          title: "Web App Testing",
          description:
            "Testing across browsers and screen sizes to guarantee consistent performance and functionality.",
          img: "/images/services/qa-overview-2.webp",
          imgSm: "/images/services/qa-overview-sm-2.webp",
        },
        {
          title: "Automation Testing",
          description:
            "Streamlining repetitive tests to enhance speed and accuracy in the testing process.",
          img: "/images/services/qa-overview-3.webp",
          imgSm: "/images/services/qa-overview-sm-3.webp",
        },
        {
          title: "Security Testing",
          description:
            "Safeguarding user data to maintain privacy and integrity across digital platforms.",
          img: "/images/services/qa-overview-4.webp",
          imgSm: "/images/services/qa-overview-sm-4.webp",
        },
        {
          title: "Performance Testing",
          description:
            "Identifying weaknesses through stress tests and detailed code analysis for improved app performance.",
          img: "/images/services/qa-overview-5.webp",
          imgSm: "/images/services/qa-overview-sm-5.webp",
        },
        {
          title: "Usability Testing",
          description:
            "Evaluating app performance under various conditions to ensure smooth, reliable user interactions.",
          img: "/images/services/qa-overview-6.webp",
          imgSm: "/images/services/qa-overview-sm-6.webp",
        },
        {
          title: "Cloud Testing",
          description:
            "Simulating user scenarios to ensure seamless performance and uptime across cloud-based platforms.",
          img: "/images/services/qa-overview-7.webp",
          imgSm: "/images/services/qa-overview-sm-7.webp",
        },
        {
          title: "Data and Analytics Testing",
          description:
            "Validating data consistency and accuracy to enable better decision-making and business insights.",
          img: "/images/services/qa-overview-8.webp",
          imgSm: "/images/services/qa-overview-sm-8.webp",
        },
        {
          title: "AI/ML Testing",
          description:
            "Refining models to adapt and improve accuracy as application behaviors evolve over time.",
          img: "/images/services/qa-overview-9.webp",
          imgSm: "/images/services/qa-overview-sm-9.webp",
        },
      ],
    },
    QaTestingBanner: {
      heading: `Quality\nAssurance &\nTesting`,
      description:
        "Our QA team ensures reliable products that deliver smooth experiences and build lasting customer trust.",
      buttonText: "Get Started",
      img: "/images/services/qa-graphics.webp",
      scrollId: "overview"
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
        src: "/images/services/related-service-cm-2.webp",
        title: "Mobile App Services",
        description:
          "Designing custom mobile apps that fit your needs perfectly and integrate uniformly with your systems.",
      },
    ]
  };
}

