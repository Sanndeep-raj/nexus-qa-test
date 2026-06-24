/**
 * Copyright(c) 2025 Valoriz Digital Private Ltd.
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of Valoriz ("Confidential
 * Information"). You shall not disclose such Confidential Information and shall use it only in
 * accordance with the terms of the contract agreement you entered into with Valoriz.
 *
 * @author Vishakh B S
 */
import Breadcrumbs from "@common/components/Breadcrumbs";
import Button from "@common/components/button/Button";
import Icon from "@common/components/Icon";
import ArrowRight from "@common/icons/ArrowRight";
import Whatsapp from "@common/icons/Whatsapp";
import LinkedIn from "@common/icons/LinkedIn";
import Copy from "@common/icons/Copy";
import PortableDescription from "@common/components/PortableDescription";
import TooltipWrapper from "@common/components/TooltipWrapper";
import CareerForm from "./CareerForm";
import { Script } from "streak/components";

interface CareerDetails {
  title?: string;
  role?: string;
  experience?: string;
  location?: string;
  jobDescription?: any;
}

interface CareersApplyProps {
  data?: CareerDetails;
}

const CareersApply = (props: CareersApplyProps) => {
  const careerDetails = {
    title: "",
    role: "",
    experience: "",
    location: "",
    jobDescription: [],
    ...props.data,
  };

  return (
    <section className="mt-19 bg-white mb-16 lg:mb-26">
      <div className="container">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Careers", href: "/careers" },
            { label: careerDetails.title },
          ]}
        />

        <div className="lg:flex mt-6">
          <div className="lg:w-7/12">
            <h2 className="text-h4 lg:text-h3">{careerDetails.title}</h2>
            <div className="flex flex-wrap text-md lg:text-h6 text-nowrap mt-6">
              <p>{careerDetails.role}</p>
              <span className="mx-4">|</span>
              <p>{careerDetails.experience}</p>
              <span className="mx-4">|</span>
              <p>{careerDetails.location}</p>
            </div>
          </div>

          <div className="lg:w-5/12 max-lg:mt-6">
            <div className="flex lg:justify-end">
              <Button
                variant="primary"
                className="flex items-center justify-center max-lg:w-full lg:w-[306px] group"
                id="apply-now-btn"
              >
                <span>Apply Now</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1 ms-2">
                  <Icon src={ArrowRight} size="sm" />
                </span>
              </Button>
            </div>

            <div className="flex items-center justify-end gap-4 mt-8">
              <p>Share</p>

              <a
                href="https://wa.me/+918848815445"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on WhatsApp"
              >
                <Icon src={Whatsapp} size="md" variant="primary" />
              </a>

              <a
                href="https://www.linkedin.com/company/valoriz-digital/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on LinkedIn"
              >
                <Icon src={LinkedIn} size="md" variant="primary" />
              </a>

              <TooltipWrapper>
                <button
                  id="copy-btn"
                  data-bs-placement="bottom"
                  data-bs-title="Copy URL"
                  aria-label="Copy link"
                >
                  <Icon src={Copy} size="md" variant="primary" />
                </button>
              </TooltipWrapper>
            </div>
          </div>
        </div>

        <hr className="border-gray-dark my-10" />

        <div className="flex flex-col gap-4 lg:gap-12">
          <div className="flex text-md lg:text-h6">
            <PortableDescription value={careerDetails.jobDescription} />
          </div>
        </div>

        <hr className="border-gray-dark my-10" />

        <div className="lg:mt-20" id="career-apply-now">
          <h3 className="text-h4 lg:text-h2 mb-10 lg:mb-20">
            Apply for this role
          </h3>
          <div>
            <CareerForm title={careerDetails.title} />
          </div>
        </div>
      </div>

      <Script id="careers-apply-script">
        {(_gDom: any) => {
          const attachCareersLogic = () => {
            const phoneContainer = document.querySelector(".phonenumber");
            if (phoneContainer) {
              const dialCode = phoneContainer.querySelector(
                ".dialcode"
              ) as HTMLElement;
              if (dialCode) dialCode.style.display = "none";
            }

            const copyBtn = document.getElementById("copy-btn");
            if (copyBtn && !(copyBtn as any).__boundCopyLogic) {
              (copyBtn as any).__boundCopyLogic = true;

              copyBtn.addEventListener("click", () => {
                navigator.clipboard.writeText(window.location.href);
                copyBtn.setAttribute("data-bs-title", "Copied");
              });

              copyBtn.addEventListener("mouseleave", () => {
                copyBtn.setAttribute("data-bs-title", "Copy URL");
              });
            }

            const applyBtn = document.getElementById("apply-now-btn");
            if (applyBtn && !(applyBtn as any).__boundScrollLogic) {
              (applyBtn as any).__boundScrollLogic = true;

              applyBtn.addEventListener("click", () => {
                const target = document.getElementById("career-apply-now");
                if (target) {
                  target.scrollIntoView({
                    block: "center",
                    behavior: "smooth",
                  });
                }
              });
            }
          };

          if (
            document.readyState === "complete" ||
            document.readyState === "interactive"
          ) {
            setTimeout(attachCareersLogic, 0);
          } else {
            window.addEventListener("DOMContentLoaded", attachCareersLogic, {
              once: true,
            });
          }
        }}
      </Script>
    </section>
  );
};

export default CareersApply;
