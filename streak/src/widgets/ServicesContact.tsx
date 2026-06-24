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

import ContactForm from "@common/components/contact/ContactForm";
import { Script } from "streak/components";

const ServicesContact = () => {
  return (
    <section className="pt-12" id = "service-contact">
      <div className="container">
        <div className="grid xl:grid-cols-10 gap-y-12">
          <div className="xl:col-span-3">
            <p className="text-h4">
              We Are Happy To Help You!
            </p>
            <p className="text-xxl font-medium mt-4">Connect With Us</p>
            <div id="desktop">
              <div className="mt-11">
                <p className="text-h5">Trivandrum</p>
                <a
                  className="block text-xxl font-semibold mt-4"
                  href="tel:+914712700666"
                >
                  <span className="text-gray-500">+91</span> 471 270 0666
                </a>
                <a
                  className="block text-xxl text-gray-500"
                  href="mailto:info@valoriz.com"
                >
                  info@valoriz.com
                </a>
              </div>

              <hr className="border-gray-400 my-5" />

              <div>
                <p className="text-h5">Kochi</p>
                <a
                  className="block text-xxl font-semibold mt-4"
                  href="tel:+914844606193"
                >
                  <span className="text-gray-500">+91</span> 484 460 6193
                </a>
                <a
                  className="block text-xxl text-gray-500"
                  href="mailto:info@valoriz.com"
                >
                  info@valoriz.com
                </a>
              </div>

              <hr className="border-gray-400 my-5" />

              <div>
                <p className="text-h5">Dubai, UAE</p>
                <a
                  className="block text-xxl font-semibold mt-4"
                  href="tel:+97142233920"
                >
                  <span className="text-gray-500">+971</span> 42 23 3920
                </a>
                <a
                  className="block text-xxl text-gray-500"
                  href="mailto:info@valoriz.com"
                >
                  info@valoriz.com
                </a>
              </div>
            </div>
          </div>
          <div className="xl:col-span-7 xl:ms-30">
            <ContactForm submitText="Submit" submitingText="Sending" />
          </div>

          <div id="mobile" className="mt-[-1rem]">
            <hr className="border-gray-400 my-5" />
            <p className="text-xxl mt-11">Trivandrum</p>
            <a
              className="block text-md font-semibold mt-4"
              href="tel:+914712700666"
            >
              <span className="text-gray-600">+91</span> 471 270 0666
            </a>
            <a
              className="block text-md text-gray-600"
              href="mailto:info@valoriz.com"
            >
              info@valoriz.com
            </a>

            <hr className="border-gray-400 my-5" />

            <p className="text-xxl">Kochi</p>
            <a
              className="block text-md font-semibold mt-4"
              href="tel:+914844606193"
            >
              <span className="text-gray-600">+91</span> 484 460 6193
            </a>
            <a
              className="block text-md text-gray-600"
              href="mailto:info@valoriz.com"
            >
              info@valoriz.com
            </a>

            <hr className="border-gray-400 my-5" />

            <p className="text-xxl">Dubai, UAE</p>
            <a
              className="block text-md font-semibold mt-4"
              href="tel:+97142233920"
            >
              <span className="text-gray-600">+971</span> 42 23 3920
            </a>
            <a
              className="block text-md text-gray-600"
              href="mailto:info@valoriz.com"
            >
              info@valoriz.com
            </a>
          </div>
        </div>
      </div>
      <hr className="border-gray-200 my-25 max-lg:my-12" />
      <Script id="ServicesContact">
        {() => {
          let isMobile = false;
          const mobile = document.getElementById("mobile");
          const desktop = document.getElementById("desktop");
          if (desktop) desktop.style.display = "block";
          if (mobile) mobile.style.display = "none";
          function toggleContent(isMobile: boolean) {
            if (isMobile) {
              if (mobile) mobile.style.display = "block";
              if (desktop) desktop.style.display = "none";

            }
            else {
              if (desktop) desktop.style.display = "block";
              if (mobile) mobile.style.display = "none";

            }

          }
          const checkIsMobile = () => {
            isMobile = window.innerWidth < 1280;
            toggleContent(isMobile);

          };
          checkIsMobile();
          window.addEventListener("resize", checkIsMobile);

        }}


      </Script>
    </section>
  );
};

export default ServicesContact;
