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
export const getCloudData = async () => {
  const { subService } =
    (await getSubServicesContent(subServiceKeyMapping.CLOUD_MODERNIZATION)) || {};

  return {
    CloudModernizationNav: {
      sectionMap: {
        Services: "overview",
        "Why Choose Us": "choose",
        Process: "process",
        "Case Studies": "case-studies",
        FAQs: "faqs",
      },
    },
    CloudModernizationBanner: {
      heading: `Cloud <br /> Modernization`,
      description:
        "Reimagining your business future with a cloud that evolves and performs",
      image: "/images/services/cm-graphics.webp",
      bannerItems: [{ feature: "Operations", count: "7m+" }, { feature: "Revenue", count: "200+M" }, { feature: "Years Of Industry Expertise", count: "10+" }]
    },
    FAQ: {
      id: "faqs",
      title: "FAQs",
      subtitle: "eCommerce",
      faqs: subService?.faqs
    },
    status: 200,
    AppHead: { seo: subService?.seo, pathName: "/cloud-modernization" },
    QaTestingOverview: {
      heading: "Setting the",
      subHeading: "Standard in Cloud Modernization Services",
      intro:
        "Unlock Peak Efficiency and Scalable Growth with Cloud Modernization.",
      slides: [
        {
          title: "Cloud migration services",
          description:
            "Easily shift business systems, data, and apps from local or cloud setups to a new cloud platform with complete efficiency.",
          img: "/images/services/cm-overview-1.webp",
          imgSm: "/images/services/cm-overview-sm-1.webp",
        },
        {
          title: "VME application modernization services",
          description:
            " We help businesses exit VME by transitioning to Linux, cutting long-term expenses and eliminating legacy system challenges through intelligent automation.",
          img: "/images/services/cm-overview-2.webp",
          imgSm: "/images/services/cm-overview-sm-2.webp",
        },
        {
          title: "Application & Mainframe Modernization",
          description:
            "Shape your customer experience through cloud transitions, future ready upgrades, and breakthrough solutions,all fueling a powerful shift to digital excellence.",
          img: "/images/services/cm-overview-3.webp",
          imgSm: "/images/services/cm-overview-sm-3.webp",
        },
        {
          title: "Cloud Advisory and Consulting",
          description:
            "Transformation blueprint, evaluation for cloud readiness, and intelligent expense optimization for efficient and future-focused infrastructure evolution.",
          img: "/images/services/cm-overview-4.webp",
          imgSm: "/images/services/cm-overview-sm-4.webp",
        },
        {
          title: "Cloud Hosting",
          description:
            "We enable businesses to deploy digital solutions on remote infrastructure using elastic compute power, remote hosting, and resilient performance capabilities.",
          img: "/images/services/cm-overview-5.webp",
          imgSm: "/images/services/cm-overview-sm-5.webp",
        },
        {
          title: "Security Audit",
          description:
            "By evaluating cloud safeguards, we uncover risks, detect policy shortfalls, and advise enhancements to uphold privacy, protection, and legal alignment.",
          img: "/images/services/cm-overview-6.webp",
          imgSm: "/images/services/cm-overview-sm-6.webp",
        },
        {
          title: "Continuous Integration and Deployment",
          description:
            "We streamline code integration, validation, and release workflows, ensuring fast, dependable, and repeatable software delivery across development lifecycles.",
          img: "/images/services/cm-overview-7.webp",
          imgSm: "/images/services/cm-overview-sm-7.webp",
        },
        {
          title: "Hybrid Cloud Modernization",
          description:
            "Our approach upgrades IT by integrating local and cloud systems, increasing flexibility, performance, and security across diverse environments.",
          img: "/images/services/cm-overview-8.webp",
          imgSm: "/images/services/cm-overview-sm-8.webp",
        },
        {
          title: "Cloud Monitoring and Reporting",
          description:
            "We continuously track cloud resource status, providing instant notifications and insights to maintain optimal operation and achieve performance targets.",
          img: "/images/services/cm-overview-9.webp",
          imgSm: "/images/services/cm-overview-sm-9.webp",
        },
      ],
    },
    MobileAppChoose: {
      id: "choose",
      label: "What Sets Us Apart in",
      heading: "Cloud Modernization Services",
      description:
        "We’ve had the privilege of helping businesses in India and the UAE move to the cloud with confidence. For us, it’s not just about the tech , it’s about simplifying the complex, cutting the chaos, and making sure your team feels supported every step of the way.",
      items: [
        {
          icon: "/images/icons/monitor.svg",
          iconWidth: 32,
          iconHeight: 32,
          alt: "monitor",
          title: "Proven Track Record",
          description:
            "We have successfully helped businesses move to the cloud with confidence delivering results that speak for themselves.",
        },
        {
          icon: "/images/icons/shine.svg",
          iconWidth: 32,
          iconHeight: 32,
          alt: "shine",
          title: "Innovation Focus",
          description:
            "We prioritize the latest technologies and continuous improvement to keep your cloud environment ahead of the competition.",
        },
        {
          icon: "/images/icons/migration.svg",
          iconWidth: 32,
          iconHeight: 32,
          alt: "migration",
          title: "Smooth Migration",
          description:
            "We manage the entire migration process so your operations stay uninterrupted and your team stays focused.",
        },
        {
          icon: "/images/icons/solutions.svg",
          iconWidth: 31,
          iconHeight: 32,
          alt: "solutions",
          title: "Hybrid Ready",
          description:
            "Our cloud environments are built to adapt with your needs whether hybrid multi-cloud or fully remote.",
        },
        {
          icon: "/images/icons/shield-check.svg",
          iconWidth: 30,
          iconHeight: 32,
          alt: "shield-check",
          title: "Security First",
          description:
            "We prioritize security at every level to keep your data safe and your compliance requirements fully covered.",
        },
        {
          icon: "/images/icons/call.svg",
          iconWidth: 32,
          iconHeight: 32,
          alt: "call",
          title: "Support",
          description:
            "You get ongoing support from real people who understand your system and are ready to help whenever needed.",
        },
      ],
    },
    QaTestingProcess: {
      id: "process",
      heading: "Cloud Modernization",
      subHeading: "Process",
      bgImage: "/images/bg/bg-services.webp",
      steps: [
        {
          step: 1,
          title: `Initial Evaluation\n  and Advisory`,
          description:
            "We begin by gaining a thorough understanding of your business needs, assessing goals, data storage requirements, workload demands, budget limits, and regulatory obligations.",
          img: "/images/services/process-determine.webp",
          imgSm: "/images/services/process-determine-sm.webp",
          align: "left",
        },
        {
          step: 2,
          title: "Provider Selection",
          description:
            "This stage allows you to select a cloud provider that best fits your business criteria. We guide you by evaluating performance, scalability, security, and cost factors to help make an informed decision.",
          img: "/images/services/process-describe.webp",
          imgSm: "/images/services/process-describe-sm.webp",
          align: "right",
        },
        {
          step: 3,
          title: "Architecture",
          description:
            "Our experts design a tailored cloud infrastructure that aligns with your business objectives. This includes configuring network setup, storage solutions, computing resources, and planning for redundancy, disaster recovery, and data backups.",
          img: "/images/services/process-design.webp",
          imgSm: "/images/services/process-design-sm.webp",
          align: "left",
        },
        {
          step: 4,
          title: "Security",
          description:
            "We implement strong security frameworks, including encryption, firewalls, and strict access controls. Compliance with industry standards is maintained, with ongoing updates to safeguard against emerging threats.",
          img: "/images/services/process-develop.webp",
          imgSm: "/images/services/process-develop-sm.webp",
          align: "right",
        },
        {
          step: 5,
          title: "Migration",
          description:
            "We manage the secure migration of your existing data and workloads to the selected cloud platform, ensuring smooth integration between on-site systems and cloud services, while safeguarding data integrity throughout.",
          img: "/images/services/process-deploy.webp",
          imgSm: "/images/services/process-deploy-sm.webp",
          align: "left",
        },
        {
          step: 6,
          title: "Optimization",
          description:
            "The cloud environment is continuously adjusted for peak efficiency. We monitor resource usage closely and implement auto-scaling to effectively handle traffic fluctuations and maintain optimal performance.",
          img: "/images/services/es-process-support.webp",
          imgSm: "/images/services/es-process-support-sm.webp",
          align: "right",
        },
        {
          step: 7,
          title: "Backup",
          description:
            "Automated backups are established to guarantee data availability during unexpected failures. We develop comprehensive disaster recovery strategies and perform regular testing to ensure data protection.",
          img: "/images/services/process-deploy.webp",
          imgSm: "/images/services/process-deploy-sm.webp",
          align: "left",
        },
        {
          step: 8,
          title: "Training",
          description:
            "We provide comprehensive training sessions for your staff on cloud service usage and access. Detailed documentation of operational procedures is created to promote best practices across the organization.",
          img: "/images/services/es-process-support.webp",
          imgSm: "/images/services/es-process-support-sm.webp",
          align: "right",
        },
        {
          step: 9,
          title: "Support",
          description:
            "Our team offers full technical assistance and keeps you informed about updates and new features. Regular assessments are conducted to continuously improve and optimize your cloud infrastructure.",
          img: "/images/services/process-deploy.webp",
          imgSm: "/images/services/process-deploy-sm.webp",
          align: "left",
        }
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

export default getCloudData;
