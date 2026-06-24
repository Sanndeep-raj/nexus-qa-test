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

import Button from "@common/components/button/Button";
import Icon from "@common/components/Icon";
import ArrowRight from "@common/icons/ArrowRight";
import { Script } from "streak/components";

const VbrandxBanner = () => {
  return (
    <section className="bg-black relative bg-[url('/images/vbrandx/vb-banner-bg.webp')] bg-center bg-no-repeat bg-cover">
      <div className="container relative flex items-center lg:min-h-screen">
        <div className="w-full lg:flex lg:items-center lg:justify-between max-lg:mt-[208px]">
          <div className="relative lg:w-1/2 text-white max-lg:text-center z-20">
            <img
              src="/images/products/vbrand-logo-white.svg"
              width={334}
              height={60}
              alt=""
              className="max-lg:mx-auto"
            />
            <h1 className="text-md xl:text-xxl mt-8 xl:mt-6">
              Step Into the Future of Digital Interactions.
            </h1>
            <Button
              variant="outline-light"
              className="btn_banner flex items-center mt-8 lg:mt-12 max-lg:mx-auto group"
              onClick={() => (window.location.href = "#vstarted")}
            >
              <span>Get Started</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1 ms-2">
                <Icon src={ArrowRight} size="sm" />
              </span>
            </Button>
          </div>
          <div className="lg:w-6/12 lg:ps-8 xl:ps-10 max-lg:-mx-6 max-lg:mt-6">
            <img
              src="/images/vbrandx/vbx-graphics.webp"
              width={1000}
              height={711}
              alt=""
              className="w-full max-lg:hidden"
            />
            <img
              src="/images/vbrandx/vbx-graphics-sm.webp"
              width={800}
              height={744}
              alt=""
              className="w-full lg:hidden"
            />
          </div>
        </div>
      </div>
      <Script id="VbrandxBanner">
        {() => {
          const headerSection = document.getElementById("header");
          document.querySelector(".btn_banner")?.addEventListener("click", () => {
            const el = document.getElementById("vstarted");
            if (el) {
              const yOffset = 0;
              const y =
                el.getBoundingClientRect().top +
                window.pageYOffset +
                yOffset;
              window.scrollTo({ top: y, behavior: "smooth" });
            }

          });
        }}


      </Script>
    </section>
  );
};

export default VbrandxBanner;