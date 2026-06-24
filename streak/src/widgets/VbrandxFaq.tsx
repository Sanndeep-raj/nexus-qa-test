/**
 * Copyright(c) 2025 Valoriz Digital Pvt. Ltd.
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of Valoriz ("Confidential
 * Information"). You shall not disclose such Confidential Information and shall use it only in
 * accordance with the terms of the contract agreement you entered into with Valoriz.
 *
 * @author Valoriz UI Team
 */

import Icon from "@common/components/Icon";
import ChevronDown from "@common/icons/ChevronDown";
import { Script } from "streak/components";

const VbrandxFAQ = () => {
  return (
    <section className="text-white bg-black py-12 xl:py-20 xxl:py-26">
      <div className="container">
        <h2 className="text-h4 xl:text-h2 mb-10 lg:mb-16">
          FAQs Of
          <br className="max-md:hidden" /> VBrandX
        </h2>

        {[
          {
            id: "open1",
            q: "Can you provide a brief introduction to your company and its history in eCommerce development?",
            a: `We are a top eCommerce development company in India and UAE,
            offering full-lifecycle software development services specializing in Digital Commerce
            for over 10 years. We deliver cutting-edge eCommerce platforms and solutions like CMS,
            PIM, OMS, and Pricing Engines. Over the past decade, we’ve successfully supported
            60+ brands across the Americas, Europe, and the Middle East.`,
          },
          {
            id: "open2",
            q: "How many years of experience do you have in developing eCommerce platforms?",
            a: `We have over 10 years of experience in developing eCommerce`,
          },
          {
            id: "open3",
            q: "How do you ensure adherence to tight deadlines, such as our 2-month target for quick implementation?",
            a: `We prioritize efficient project management, agile development methodologies, and a dedicated team to ensure timely delivery without compromising quality. Our experience with similar projects allows us to streamline processes and meet tight deadlines effectively.`,
          },
          {
            id: "open4",
            q: "What sets your company apart from other eCommerce development firms?",
            a: `Our company stands out due to our extensive experience in eCommerce development, a proven track record of successful projects, and a commitment to delivering high-quality solutions tailored to our clients specific needs. We prioritize customer satisfaction and maintain open communication throughout the development process.`,
          },
          {
            id: "open5",
            q: "What kind of post-launch support and maintenance do you offer?",
            a: `We offer comprehensive post-launch support and maintenance, including regular updates, bug fixes, performance optimization, and ongoing technical assistance. Our team is dedicated to ensuring the long-term success of your eCommerce platform.`,
          },
        ].map((faq) => (
          <div key={faq.id} className="border-b border-b-gray-dark">
            <button
              data-faq={faq.id}
              className="flex items-start lg:items-center w-full text-start py-6 lg:py-10 transition-colors"
            >
              <div className="flex-1">
                <h1 className="text-xxl xl:text-h5">{faq.q}</h1>
              </div>
              <div className="faq-icon transform transition-transform duration-300 ms-2">
                <Icon src={ChevronDown} size="md" />
              </div>
            </button>

            <div
              id={faq.id}
              className="faq-content transition-all duration-500 ease-in-out overflow-hidden max-h-0 opacity-0 scale-y-95 transform origin-top"
            >
              <div className="pt-2 pb-8 lg:pt-0 lg:pb-10">
                <p className="xl:text-xxl">{faq.a}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Script id="VbrandxFAQ">
        {() => {
          const buttons = document.querySelectorAll("[data-faq]");

          buttons.forEach(btn => {
            btn.addEventListener("click", () => {
              const id: string = btn.getAttribute("data-faq")!;
              const content = document.getElementById(id)!;
              const icon = btn.querySelector(".faq-icon") as HTMLElement;

              const isCurrentlyOpen = content.style.maxHeight !== "0px" && content.style.maxHeight !== "";

              if (isCurrentlyOpen) {
                content.style.maxHeight = "0px";
                content.style.opacity = "0";
                content.style.transform = "scaleY(0.95)";
                icon.style.transform = "rotate(0deg)";
                return;
              }

              document.querySelectorAll<HTMLElement>(".faq-content").forEach(el => {
                el.style.maxHeight = "0px";
                el.style.opacity = "0";
                el.style.transform = "scaleY(0.95)";
              });

              document.querySelectorAll<HTMLElement>(".faq-icon").forEach(icon => {
                icon.style.transform = "rotate(0deg)";
              });

              content.style.maxHeight = content.scrollHeight + "px";
              content.style.opacity = "1";
              content.style.transform = "scaleY(1)";
              icon.style.transform = "rotate(180deg)";
            });

          });
          ;
        }}
      </Script>
    </section>
  );
};

export default VbrandxFAQ;
