/**
 * Copyright(c) 2025 Valoriz Digital Private Ltd.
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of Valoriz ("Confidential
 * Information"). You shall not disclose such Confidential Information and shall use it only in
 * accordance with the terms of the contract agreement you entered into with Valoriz.
 *
 * @author Minna Ancy Mathew
 */
import Button from "@common/components/button/Button";
import Icon from "@common/components/Icon";
import TextField from "@common/components/textField/TextField";
import ArrowRightIcon from "@common/icons/ArrowRight";
import Checked from "@common/icons/Checked";
import Spinner from "@common/components/Spinner";
import { Script } from "streak/components";
import { gmailApi } from "utils/config";


type Props = {
  submitText?: string;
  submitingText?: string;
};

const PartnersEnquiry = ({
  submitText = "Apply",
  submitingText = "Submitting...",
}: Props) => {
  return (
    <section id="partners-enquiry">
      <div className="py-12 xl:py-20 xxl:py-26 scroll-mt-18" id="contact-form">
        <div className="container">
          {/* Header */}
          <div>
            <h2 className="text-h4 xl:text-h2">Become A Partner Today</h2>
            <p className="xl:w-1/3 text-xxl xl:text-h5 mt-4">
              Your next big move starts here Become a Valoriz partner today
            </p>
          </div>

          {/* Success Toast */}
          <div className="mt-10 xl:mt-20">
            <div id="partner-form-success-toast" className="flex mb-12 hidden">
              <div className="flex items-center text-white rounded-lg bg-primary px-7 py-5 shadow-lg">
                <div className="me-6">
                  <Icon src={Checked} size="md" />
                </div>
                <div>
                  <h4 className="text-xxl">Thank you for your submission.</h4>
                  <p className="mt-1">Our team will be contacting you shortly.</p>
                </div>
              </div>
            </div>
            <div className="hidden border-red text-red placeholder:text-red"/>
            
            {/* Form */}
            <form id="partner-form">
              <fieldset id="partner-form-fieldset">
                <div className="flex flex-col md:flex-row md:space-x-5">
                  {/* Full Name */}
                  <div className="w-full mb-6 md:mb-11">
                    <label
                      id="full-name-label"
                      className="block text-md mb-2"
                      htmlFor="full-name"
                    >
                      Your Name<span className="text-red text-md">*</span>
                    </label>
                    <TextField
                      id="full-name"
                      className="w-full"
                      placeholder="Enter Full Name"
                      sizes="lg"
                      variant="default"
                    />
                    <p
                      id="error-fullName"
                      className="text-sm text-red mt-2 hidden"
                    ></p>
                  </div>

                  {/* Company */}
                  <div className="w-full mb-6 md:mb-11">
                    <label
                      id="company-label"
                      className="block text-md mb-2"
                      htmlFor="company"
                    >
                      Company<span className="text-red text-md">*</span>
                    </label>
                    <TextField
                      id="company"
                      className="w-full"
                      placeholder="Enter Company Name"
                      sizes="lg"
                      variant="default"
                    />
                    <p
                      id="error-company"
                      className="text-sm text-red mt-2 hidden"
                    ></p>
                  </div>
                </div>

                {/* Email + HQ */}
                <div className="flex flex-col md:flex-row md:space-x-5">
                  {/* Email */}
                  <div className="w-full mb-6 md:mb-11">
                    <label
                      id="email-label"
                      className="block text-md mb-2"
                      htmlFor="email"
                    >
                      Work Email<span className="text-red text-md">*</span>
                    </label>
                    <TextField
                      id="email"
                      type="email"
                      className="w-full"
                      placeholder="Enter Email"
                      sizes="lg"
                      variant="default"
                    />
                    <p
                      id="error-email"
                      className="text-sm text-red mt-2 hidden"
                    ></p>
                  </div>

                  {/* HQ Dropdown */}
                  <div className="w-full mb-6 md:mb-11">
                    <label
                      id="hq-label"
                      className="block text-md mb-2"
                      htmlFor="headquarters"
                    >
                      Company HQ<span className="text-red text-md">*</span>
                    </label>
                    <div className="relative w-full">
                      <button
                        id="hq-dropdown-btn"
                        type="button"
                        className="flex items-center justify-between w-full h-full border border-black py-3 px-4 bg-white text-md"
                      >
                        <span id="hq-selected-label" className="text-[#9CA3AF]">Select your HQ</span>
                        <svg
                          id="hq-chevron"
                          className="w-4 h-4 text-gray-600"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 9l6 6 6-6"
                          />
                        </svg>
                      </button>

                      <div
                        id="hq-list"
                        className="hidden absolute left-0 top-full z-50 w-full bg-white border border-black rounded-md mt-1 shadow-md"
                      >
                        {["India", "UAE", "Others"].map((country, index) => (
                          <div key={index}>
                            <div
                              data-value={country}
                              className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                            >
                              {country}
                            </div>
                            {index < 2 && (
                              <hr className="mx-auto w-[95%] border-t border-gray-400 my-2" />
                            )}
                          </div>
                        ))}
                        <input type="hidden" id="hq-input" name="headquarters" />
                      </div>
                    </div>
                    <p id="error-hq" className="text-sm text-red mt-2 hidden"></p>
                  </div>
                </div>

                {/* Message */}
                <div className="w-full mb-6 md:mb-11">
                  <div className="flex items-center justify-between">
                    <label
                      id="query-label"
                      className="flex text-md mb-2"
                      htmlFor="query"
                    >
                      Message For Us
                    </label>
                    <span id="query-count" className="text-sm">
                      0/800
                    </span>
                  </div>
                  <textarea
                    id="query"
                    rows={9}
                    placeholder="Tell us more about"
                    className="w-full border border-black focus:outline-none p-4 text-md"
                  ></textarea>
                  <p
                    id="error-query"
                    className="text-sm text-red mt-2 hidden"
                  ></p>
                </div>

                {/* Terms */}
                <div className="flex mb-6 md:mb-11">
                  <div className="flex items-center gap-x-3">
                    <div className="relative flex items-center" id="terms-accepted">
                      <input
                        id="checkbox"
                        type="checkbox"
                        className="h-4 w-4 bg-white border border-gray-500 checked:bg-black checked:border-black appearance-none cursor-pointer rounded-sm me-2"
                      />
                      <svg
                        className="absolute left-[3px] top-[3px] h-[10px] w-[10px] text-white pointer-events-none"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <label id="terms-label" className="text-md cursor-pointer" htmlFor="checkbox">
                      By submitting this form I acknowledge and agree with Valoriz
                      Privacy Policy.
                    </label>
                  </div>
                </div>

                {/* Button */}
                <div className="flex justify-end">
                  <Button
                    id="partner-submit-btn"
                    type="submit"
                    variant="secondary"
                    className="inline-flex w-full lg:w-auto items-center justify-center gap-3 transition-all duration-300 group"
                  >
                    <span className="btn-text">{submitText}</span>
                    <Spinner id="partner-spinner" />
                    <span className="transition-transform duration-300 group-hover:translate-x-1 ms-2">
                      <Icon src={ArrowRightIcon} size="md" />
                    </span>
                  </Button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>

        <Script id="PartnersEnquiry" options={{ submitText, submitingText, gmailApi }}>
          {(gDom: any, options: any) => {
            // Elements
            const fullNameInput = document.getElementById("full-name") as HTMLInputElement;
            const fullNameLabel = document.getElementById("full-name-label") as HTMLElement;
            const errorFullName = document.getElementById("error-fullName") as HTMLElement;

            const companyInput = document.getElementById("company") as HTMLInputElement;
            const companyLabel = document.getElementById("company-label") as HTMLElement;
            const errorCompany = document.getElementById("error-company") as HTMLElement;

            const emailInput = document.getElementById("email") as HTMLInputElement;
            const emailLabel = document.getElementById("email-label") as HTMLElement;
            const errorEmail = document.getElementById("error-email") as HTMLElement;

            const hqBtn = document.getElementById("hq-dropdown-btn") as HTMLElement;
            const hqList = document.getElementById("hq-list") as HTMLElement;
            const hqSelectedLabel = document.getElementById("hq-selected-label") as HTMLElement;
            const hqInput = document.getElementById("hq-input") as HTMLInputElement;
            const hqChevron = document.getElementById("hq-chevron") as HTMLElement;
            const hqLabel = document.getElementById("hq-label") as HTMLElement;
            const errorHq = document.getElementById("error-hq") as HTMLElement;


            const queryInput = document.getElementById("query") as HTMLTextAreaElement;
            const queryLabel = document.getElementById("query-label") as HTMLElement;
            const errorQuery = document.getElementById("error-query") as HTMLElement;
            const queryCount = document.getElementById("query-count") as HTMLElement;

            const checkbox = document.getElementById("checkbox") as HTMLInputElement;
            const termsLabel = document.getElementById("terms-label") as HTMLElement;
            const termsWrapper = document.getElementById("terms-accepted") as HTMLElement;

            const form = document.getElementById("partner-form") as HTMLFormElement;
            const submitBtn = document.getElementById("partner-submit-btn") as HTMLButtonElement;
            const spinner = document.getElementById("partner-spinner") as HTMLElement;
            const successToast = document.getElementById("partner-form-success-toast") as HTMLElement;

            const validationConstants = {
              IS_MAIL: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
            };
            const fieldset = document.getElementById("partner-form-fieldset") as HTMLFieldSetElement;

            let isOpen = false;
            let isSubmitting = false;
            let isSubmitted = false;
            spinner.style.display = "none";
            checkbox.addEventListener("change", validateTerms);

            // HQ dropdown behavior
            hqBtn?.addEventListener("click", (e: MouseEvent) => {
              e.stopPropagation();
              hqList?.classList.toggle("hidden");
              isOpen = !hqList?.classList.contains("hidden");
              hqChevron.style.transform = isOpen ? "rotate(180deg)" : "rotate(0deg)";
            });

            hqList?.querySelectorAll("[data-value]")?.forEach((option) => {
              option.addEventListener("click", () => {
                const value = (option as HTMLElement).getAttribute("data-value") ?? "";

                if (hqSelectedLabel) {
                  hqSelectedLabel.textContent = value;
                  hqSelectedLabel.classList.remove("text-[#9CA3AF]");
                  hqSelectedLabel.classList.add("text-black");
                }

                if (hqInput) hqInput.value = value;
                resetField(hqBtn, hqLabel, errorHq);
                hqList.classList.add("hidden");
                hqChevron.style.transform = "rotate(0deg)";
                isOpen = false;
              });
            });


            document.addEventListener("click", (event: MouseEvent) => {
              if (hqBtn && !hqBtn.contains(event.target as Node) && hqList && !hqList.contains(event.target as Node)) {
                hqList.classList.add("hidden");
                hqChevron.style.transform = "rotate(0deg)";
                isOpen = false;
              }
            });

            // Input listeners for live validation
            fullNameInput.addEventListener("input", () => validateFullName());
            companyInput.addEventListener("input", () => validateCompany());
            emailInput.addEventListener("input", () => validateEmail());
            queryInput.addEventListener("input", () => validateQuery());

            function validateFullName(): boolean {
              const value = fullNameInput.value.trim();
              resetField(fullNameInput, fullNameLabel, errorFullName);
              if (!value) {
                showError(fullNameInput, fullNameLabel, errorFullName, "Full Name is Required");
                return false;
              }
              else if (value.length < 3) {
                showError(fullNameInput, fullNameLabel, errorFullName, "Must be minimum 3 letters");
                return false;
              }
              else if (!/^[A-Za-z ]+$/.test(value)) {
                showError(fullNameInput, fullNameLabel, errorFullName, "Only alphabets are allowed");
                return false;
              }
              return true;
            }

            function validateCompany(): boolean {
              const value = companyInput.value.trim();
              resetField(companyInput, companyLabel, errorCompany);
              if (!value) {
                showError(companyInput, companyLabel, errorCompany, "Company Name is Required");
                return false;
              } else if (value.length < 2) {
                showError(companyInput, companyLabel, errorCompany, "Must be minimum 2 letters");
                return false;
              }
              return true;
            }

            function validateEmail(): boolean {
              const value = emailInput.value.trim();
              resetField(emailInput, emailLabel, errorEmail);
              if (!value) {
                showError(emailInput, emailLabel, errorEmail, "Email is Required");
                return false;
              } else if (!validationConstants.IS_MAIL.test(value)) {
                showError(emailInput, emailLabel, errorEmail, "Enter a valid email address");
                return false;
              }
              return true;
            }

            function validateHq(): boolean {
              const value = hqInput.value.trim();
              resetField(hqBtn, hqLabel, errorHq);
              if (!value) {
                showError(hqBtn, hqLabel, errorHq, "Headquarters is required");
                return false;
              }
              return true;
            }

            function validateQuery(): boolean {
              const value = queryInput.value.trim();
              const length = value.length;
              queryCount.textContent = `${length}/800`;
              resetField(queryInput, queryLabel, errorQuery);
              if (length > 800) {
                showError(queryInput, queryLabel, errorQuery, "Max 800 characters allowed");
                queryCount.classList.add("text-red");
                return false;
              }
              queryCount.classList.remove("text-red");
              return true;
            }

            function validateTerms(): boolean {
              if (!checkbox.checked) {
                termsLabel.classList.add("text-red");
                return false;
              }
              termsLabel.classList.remove("text-red");
              return true;
            }

            function getFirstInvalidField(status: {
              okFullName: boolean;
              okCompany: boolean;
              okEmail: boolean;
              okHq: boolean;
              okQuery: boolean;
              okTerms: boolean;
            }): HTMLElement | null {
              if (!status.okFullName) return fullNameInput;
              if (!status.okCompany) return companyInput;
              if (!status.okEmail) return emailInput;
              if (!status.okHq) return hqBtn;
              if (!status.okQuery) return queryInput;
              if (!status.okTerms) return checkbox;
              return null;
            }

            function resetField(input: HTMLElement, label: HTMLElement, errorEl: HTMLElement) {
              if (errorEl) {
                errorEl.classList.add("hidden");
                errorEl.textContent = "";
              }
              input.classList.remove("border-red", "text-red", "placeholder:text-red");
              input.classList.add("border-black");
              label.classList.remove("text-red");
            }

            function showError(input: HTMLElement, label: HTMLElement, errorEl: HTMLElement, message: string) {
              if (errorEl) {
                errorEl.textContent = message;
                errorEl.classList.remove("hidden");
              }
              input.classList.remove("border-black");
              input.classList.add("border-red", "text-red", "placeholder:text-red");
              label.classList.add("text-red");
            }

            // Form submit
            form.addEventListener("submit", async (event: SubmitEvent) => {
              event.preventDefault();

              const okFullName = validateFullName();
              const okCompany = validateCompany();
              const okEmail = validateEmail();
              const okHq = validateHq();
              const okQuery = validateQuery();
              const okTerms = validateTerms();

              if (!okFullName || !okCompany || !okEmail || !okHq || !okQuery || !okTerms) {
                const firstInvalidField = getFirstInvalidField({
                  okFullName,
                  okCompany,
                  okEmail,
                  okHq,
                  okQuery,
                  okTerms,
                });

                if (firstInvalidField) {
                  firstInvalidField.scrollIntoView({ behavior: "smooth", block: "center" });
                  firstInvalidField.focus({ preventScroll: true });
                }
                return;
              }


              if (isSubmitting) return;
              isSubmitting = true;
              updateButtonState();
              updateFormState();

              const payload = getFormData();
              const success = await handleFormSubmission(payload);
              console.log("Form submission success:", success, payload);


              isSubmitting = false;
              isSubmitted = success;
              updateButtonState();
              updateFormState();
              updateToast();

              if (isSubmitted) {
                form.reset();
                // reset hidden hq input + label + count
                hqInput.value = "";
                if (hqSelectedLabel)
                  hqSelectedLabel.classList.remove("text-black");
                hqSelectedLabel.classList.add("text-[#9CA3AF]");
                hqSelectedLabel.textContent = "Select your HQ";
                queryCount.textContent = "0/800";
              }
            });

            function updateButtonState() {
              const textNode = submitBtn.querySelector(".btn-text") as HTMLElement;
              if (isSubmitting) {
                textNode.textContent = options.submitingText ?? "Submitting...";
                submitBtn.disabled = true;
                spinner.style.display = "inline";
              } else {
                textNode.textContent = options.submitText ?? "Apply";
                submitBtn.disabled = false;
                spinner.style.display = "none";
              }
            }

            function updateFormState() {
              if (fieldset) fieldset.disabled = isSubmitting;
            }

            function updateToast() {
              if (!successToast) return;
              if (isSubmitted) {
                successToast.classList.remove("hidden");
                setTimeout(() => {
                  successToast.classList.add("hidden");
                }, 4000);
              } else {
                successToast.classList.add("hidden");
              }
            }

            async function handleFormSubmission(request: {
              fullName: string;
              company: string;
              email: string;
              headquarters: string;
              query: string;
            }): Promise<boolean> {
              try {
                const formData = new FormData();
                formData.append("fullName", request.fullName ?? "");
                formData.append("company", request.company ?? "");
                formData.append("email", request.email ?? "");
                formData.append("headquarters", request.headquarters ?? "");
                formData.append("query", request.query ?? "");
                formData.append("type", "partners");

                const mailApi = options.gmailApi;
                const response = await fetch(mailApi, { method: "POST", body: formData });
                const result = await response.json();
                return !!result?.success;
              } catch (error) {
                console.error("[sentPartnersEnquiryMail]: error", error);
                return false;
              }
            }

            function getFormData() {
              return {
                fullName: (document.getElementById("full-name") as HTMLInputElement).value.trim(),
                company: (document.getElementById("company") as HTMLInputElement).value.trim(),
                email: (document.getElementById("email") as HTMLInputElement).value.trim(),
                headquarters: (document.getElementById("hq-input") as HTMLInputElement).value.trim(),
                query: (document.getElementById("query") as HTMLTextAreaElement).value.trim(),
              };
            }
            updateButtonState();
          }}
        </Script>
      </div>
    </section>
  );
};

export default PartnersEnquiry;
