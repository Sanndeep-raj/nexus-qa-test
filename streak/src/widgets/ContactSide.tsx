/**
 * Copyright(c) 2025 Valoriz Digital Pvt. Ltd.
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of Valoriz ("Confidential
 * Information"). You shall not disclose such Confidential Information and shall use it only in
 * accordance with the terms of the contract agreement you entered into with Valoriz.
 *
 * @author Minna Ancy Mathew
 */

import ContactForm from "@common/components/contact/ContactForm";

const ContactSide = () => {
  return (
    <section className="mt-19 py-12 xl:py-20 xxl:py-26">
      <div className="container">
        <div className="grid xl:grid-cols-10 gap-y-12">

          {/* LEFT — Desktop Only */}
          <div className="xl:col-span-3">
            <h3 className="text-h4 text-black">
              Have A Project <br className="md:hidden" /> In Mind?
            </h3>

            {/* DESKTOP CONTACT INFO */}
            <div className="hidden xl:block mt-6 text-black">
              <p className="text-xxl font-medium">Connect With Us</p>

              <p className="text-h5 mt-11">Trivandrum</p>
              <a className="block text-xxl font-semibold mt-4" href="tel:+914712700666">
                <span className="text-gray-500">+91</span> 471 270 0666
              </a>
              <a className="block text-xxl text-gray-500" href="mailto:info@valoriz.com">
                info@valoriz.com
              </a>

              <hr className="border-gray-400 my-5" />

              <p className="text-h5">Kochi</p>
              <a className="block text-xxl font-semibold mt-4" href="tel:+914844606193">
                <span className="text-gray-500">+91</span> 484 460 6193
              </a>
              <a className="block text-xxl text-gray-500" href="mailto:info@valoriz.com">
                info@valoriz.com
              </a>

              <hr className="border-gray-400 my-5" />

              <p className="text-h5">Dubai, UAE</p>
              <a className="block text-xxl font-semibold mt-4" href="tel:+97142233920">
                <span className="text-gray-500">+971</span> 42 23 3920
              </a>
              <a className="block text-xxl text-gray-500" href="mailto:info@valoriz.com">
                info@valoriz.com
              </a>
            </div>
          </div>

          {/* RIGHT — Form */}
          <div className="xl:col-span-7 xl:ms-30">
            <ContactForm submitText="Submit" submitingText="Sending" />
          </div>
        </div>
      </div>

      {/* 💥 MOBILE FULL-WIDTH BLACK SECTION */}
      <div className="xl:hidden mt-14 w-screen bg-black text-white px-8 py-14
                      relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw]">
        <p className="text-h4 font-medium leading-tight">
          Connect <br /> With Us
        </p>

        {/* Trivandrum */}
        <p className="text-h5 mt-10">Trivandrum</p>
        <a className="block text-xl font-semibold mt-4 text-white" href="tel:+914712700666">
          <span className="text-gray-400">+91</span> 471 270 0666
        </a>
        <a className="block text-xl text-gray-300" href="mailto:info@valoriz.com">
          info@valoriz.com
        </a>

        <hr className="border-gray-700 my-8" />

        {/* Kochi */}
        <p className="text-h5">Kochi</p>
        <a className="block text-xl font-semibold mt-4 text-white" href="tel:+914844606193">
          <span className="text-gray-400">+91</span> 484 460 6193
        </a>
        <a className="block text-xl text-gray-300" href="mailto:info@valoriz.com">
          info@valoriz.com
        </a>

        <hr className="border-gray-700 my-8" />

        {/* Dubai */}
        <p className="text-h5">Dubai, UAE</p>
        <a className="block text-xl font-semibold mt-4 text-white" href="tel:+97142233920">
          <span className="text-gray-400">+971</span> 42 23 3920
        </a>
        <a className="block text-xl text-gray-300" href="mailto:info@valoriz.com">
          info@valoriz.com
        </a>
      </div>

    </section>
  );
};

export default ContactSide;
