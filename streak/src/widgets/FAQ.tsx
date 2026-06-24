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

import Icon from "@common/components/Icon";
import ChevronDown from "@common/icons/ChevronDown";
import { hasArrayElements } from "utils/commonUtils";
import PortableText from "@common/components/DigitalPortableText";
import { Script } from "streak/components";

interface faqProps {
  data: {
    id: string;
    title: string;
    subtitle: string;
    faqs: any;
  };
}

const FAQ = (props: faqProps) => {
  const { id, title, subtitle, faqs } = props?.data;

  return (
    hasArrayElements(faqs) && (
      <section
        id={id}
        className="py-12 xl:py-20 xxl:py-26 bg-contain md:bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/images/bg/bg-services.webp')" }}
      >
        <div className="container">
          <h1 className="text-xxl xl:text-h4">{subtitle}</h1>
          <h1 className="text-primary text-h4 xl:text-h2 mt-2">{title}</h1>

          {faqs?.map((faq: any, index: number) => (
            <div className="border-b border-b-gray-500 faq_item" key={faq?._key}>
              <button
                className="btn_faq flex items-start lg:items-center w-full text-start py-6 lg:py-10 transition-colors"
                data-index={index}
              >
                <div className="flex-1">
                  <p className="text-base xl:text-xxl">{faq?.question}</p>
                </div>

                <div className="faq_icon transform transition-transform duration-300 ms-2">
                  <Icon src={ChevronDown} size="md" />
                </div>
              </button>

              <div className="faq_content transition-all duration-500 ease-in-out overflow-hidden max-h-0 opacity-0 scale-y-95 transform origin-top">
                <div className="border-t border-t-gray-500 py-2 lg:py-5 px-4 lg:px-8">
                  <PortableText value={faq?.answer} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <Script id="FAQ" options={{ faqs }}>
          {(gDom: any, options: any) => {
            const faqs = options.faqs;

            let isOpens = Array(faqs.length).fill(false);

            const buttons = document.querySelectorAll(".btn_faq");
            const faqItems = document.querySelectorAll(".faq_item");

            buttons.forEach((btn) => {
              btn.addEventListener("click", () => {
                const index = Number(btn.getAttribute("data-index"));

                isOpens = isOpens.map((v, i) => (i !== index ? false : !v));
                faqItems.forEach((item, i) => {
                  const content = item.querySelector(".faq_content") as HTMLElement | null;
                  const icon = item.querySelector(".faq_icon") as HTMLElement | null;


                  if (!content || !icon) return;

                  if (isOpens[i]) {
                    content.style.maxHeight = "1000px";
                    content.style.opacity = "1";
                    content.style.transform = "scaleY(1)";
                    icon.style.transform = "rotate(180deg)";
                  } else {
                    content.style.maxHeight = "0";
                    content.style.opacity = "0";
                    content.style.transform = "scaleY(0.95)";
                    icon.style.transform = "rotate(0deg)";
                  }
                });
              });
            });
          }}
        </Script>
      </section>
    )
  );
};

export default FAQ;
