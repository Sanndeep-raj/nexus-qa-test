/**
 * Copyright(c) 2025 Valoriz Digital Private Ltd.
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of Valoriz ("Confidential
 * Information"). You shall not disclose such Confidential Information and shall use it only in
 * accordance with the terms of the contract agreement you entered into with Valoriz.
 *
 * @author Ram S Madhav
 */

import ContactForm from "@common/components/contact/ContactForm";

const Enquiry = () => {
  if (typeof window !== "undefined") {
    const ele = document.querySelector(".desired-selector");
    if (ele) {
      const dialCodeElement = document.querySelector(".dialcode") as HTMLElement | null;
      if (dialCodeElement) {
        dialCodeElement.style.display = "none";
      }
    }
  }

  const countryCode = [
    {
      value: "+91",
      label: (
        <div className="flex">
          <img src="/images/contact/ind.png" width={24} height={24} alt="Ind" />
          <span className="dialcode">+91</span>
        </div>
      ),
    },
    {
      value: "+971",
      label: (
        <div className="flex">
          <img src="/images/contact/uae.svg" width={24} height={24} alt="uae" />
          <span className="dialcode">+971</span>
        </div>
      ),
    },
  ];


  return (
    <div className="py-12 xl:py-20 xxl:py-26">
      <div className="container">
        <div className="xl:w-1/2">
          <h2 className="text-h4 xl:text-h2">
            Want to see our products in action?
          </h2>
          <p className="text-xxl mt-4">
            Tell us what you&apos;re looking for, we’ll guide you to the right
            solution.
          </p>
        </div>
        <div className="mt-10 xl:mt-20">
          <ContactForm
            submitText="Send Enquiry"
            submitingText="Sending"
          />
        </div>
      </div>
    </div>
  );
};

export default Enquiry;