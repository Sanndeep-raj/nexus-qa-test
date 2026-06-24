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
import Icon from "@common/components/Icon";
import Checked from "@common/icons/Checked";
import ArrowRightIcon from "@common/icons/ArrowRight";
import TextField from "@common/components/textField/TextField";
import { Script } from "streak/components";
import Button from "@common/components/button/Button";
import { gmailApi } from "utils/config";
import Spinner from "@common/components/Spinner";

interface CareerFormProps {
  title: string;
}

const CareerForm: React.FC<CareerFormProps> = ({ title }) => {
  return (
    <>
      <div id="career-success-toast" className="flex mb-12 hidden">
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

      <form id="career-form" noValidate>
        <fieldset id="career-fieldset" disabled={false}>
          <div className="flex flex-col md:flex-row md:space-x-5">
            <div className="w-full mb-6 md:mb-11">
              <label
                id="label-first-name"
                className="block text-md mb-2"
                htmlFor="first-name"
              >
                First Name
                <span className="text-red text-md">*</span>
              </label>
              <TextField
                id="first-name"
                className=""
                placeholder="Enter First Name"
                sizes="lg"
                variant="default"
              />
              <p
                id="error-firstName"
                className="text-sm text-red mt-2 hidden"
              />
            </div>

            <div className="w-full mb-6 md:mb-11">
              <label
                id="label-last-name"
                className="block text-md mb-2"
                htmlFor="last-name"
              >
                Last Name
              </label>
              <TextField
                id="last-name"
                className=""
                placeholder="Enter Last Name"
                sizes="lg"
                variant="default"
              />
              <p id="error-lastName" className="text-sm text-red mt-2 hidden" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-5">
            <div className="w-full mb-6 md:mb-11">
              <label id="label-email" className="text-md mb-2" htmlFor="mail">
                Email
              </label>
              <span className="text-red text-md">*</span>
              <TextField
                id="mail"
                type="email"
                className="w-full border border-black rounded-none placeholder:text-gray-500 placeholder:text-base focus:outline-none"
                placeholder="Enter Email"
                sizes="lg"
                variant="default"
              />
              <p id="error-email" className="text-sm text-red mt-1 hidden"></p>
            </div>
            <div className="w-full mb-6 md:mb-11">
              <label id="phone-label" className="text-md mb-2" htmlFor="phone">
                Phone
                <span className="text-red text-md">*</span>
              </label>
              <div className="flex relative w-full">
                <div className="relative w-[5rem]" id="dial-code-dropdown">
                  <button
                    id="dial-code-btn"
                    type="button"
                    className="flex items-center justify-between w-full h-full border border-black rounded-l-md py-2 pl-3 pr-8 bg-white"
                  >
                    <div className="flex items-center">
                      <img
                        id="dial-code-flag"
                        src="/images/contact/ind.png"
                        className="w-6 h-auto"
                        alt="flag"
                      />
                    </div>
                    <svg
                      id="dial-chevron"
                      className="w-4 h-4 text-gray-600 absolute right-2 pointer-events-none transition-transform duration-200 "
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 9l6 6 6-6"
                      />
                    </svg>
                  </button>
                </div>
                <TextField
                  id="phone"
                  type="tel"
                  className="border-s-0"
                  placeholder="Enter Phone Number"
                  sizes="lg"
                  variant="default"
                />
                <div
                  id="dial-code-list"
                  className="hidden absolute left-0 top-full z-50 w-full bg-white border border-black rounded-md mt-1 shadow-md"
                >
                  <div
                    data-value="+91"
                    data-img="/images/contact/ind.png"
                    className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    <img
                      src="/images/contact/ind.png"
                      className="w-6 h-auto"
                      alt="India"
                    />
                    <span>+91</span>
                  </div>
                  <hr className="mx-auto w-[95%] border-t border-gray-400 my-2" />
                  <div
                    data-value="+971"
                    data-img="/images/contact/uae.svg"
                    className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    <img
                      src="/images/contact/uae.svg"
                      className="w-6 h-auto"
                      alt="UAE"
                    />
                    <span>+971</span>
                  </div>
                  <input
                    type="hidden"
                    id="dial-code-input"
                    name="dialCode"
                    value="+91"
                  />
                </div>
              </div>
              <p id="error-phone" className="text-sm text-red mt-1 hidden"></p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-5">
            <div className="flex flex-col w-full">
              <div className="flex items-center justify-between">
                <label
                  id="label-about"
                  className="flex text-md mb-2"
                  htmlFor="about-you"
                >
                  Tell Us Little About You
                </label>
                <span id="about-count" className="text-sm">
                  0/800
                </span>
              </div>

              <textarea
                id="about-you"
                className="w-full border border-black focus:outline-none p-4"
                rows={9}
                placeholder="Brief about youself"
                maxLength={800}
                defaultValue={""}
              />

              <p id="error-about" className="text-sm text-red mt-2 hidden" />
            </div>

            <div className="flex flex-col w-full max-md:mt-6">
              <label className="flex text-md mb-2" htmlFor="your-resume">
                Upload Your Resume <span className="text-red">*</span>
              </label>

              {/* DROPZONE */}
              <div
                id="resume-dropzone"
                className="flex flex-col items-center justify-center w-full border border-dashed border-black p-12 cursor-pointer hover:bg-gray-50 transition flex-1"
              >
                <p className="text-md">Drag and drop here</p>
                <p>or</p>

                <span className="border border-secondary text-secondary bg-transparent hover:bg-secondary hover:text-white active:bg-secondary active:text-white transition-all duration-300 px-4 py-2 text-base font-medium rounded h-[38px] mt-2">
                  Browse
                </span>

                <p className="text-gray-600 mt-6">
                  Supported Files: PDF, DOC, DOCX
                </p>
              </div>

              {/* FILE ROW (initially hidden) */}
              <div
                id="resume-file-row"
                className="hidden flex items-center p-3 border border-dashed border-black rounded-sm"
              >
                <span
                  id="resume-file-name"
                  className="text-gray-800 me-4"
                ></span>
                <button
                  id="resume-remove-btn"
                  type="button"
                  className="flex justify-center items-center w-4 h-4 bg-[rgba(255,104,104,0.6)] hover:bg-red rounded-full"
                >
                  <svg className="w-2 h-2" viewBox="0 0 16 16">
                    <path
                      fill="white"
                      d="M3 3l10 10M13 3L3 13"
                      stroke="white"
                    />
                  </svg>
                </button>
              </div>

              <input
                id="your-resume"
                name="resume"
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
              />

              <p id="error-resume" className="text-sm text-red mt-2 hidden"></p>
            </div>
          </div>

          <div className="flex justify-end mt-6 lg:mt-7">
            <Button
              id="submit-btn"
              type="submit"
              variant="secondary"
              className="inline-flex w-full lg:w-auto items-center justify-center gap-3 transition-all duration-300 group"
            >
              <span id="submit-text" className="btn-text">Submit</span>
              <Spinner id="submit-spinner" className="hidden" />
              <span className="transition-transform duration-300 group-hover:translate-x-1 ms-2">
                <Icon src={ArrowRightIcon} size="md" />
              </span>
            </Button>
          </div>
        </fieldset>
      </form>

      {/* Logic implemented with DOM APIs inside Script */}
      <Script id="career-form-script" options={{ gmailApi: gmailApi }}>
        {(_gDom: any, options: { gmailApi: string }) => {
          // all logic encapsulated to avoid polluting global scope
          (function attachCareerFormLogic() {
            const form = document.getElementById(
              "career-form"
            ) as HTMLFormElement | null;
            if (!form) return;

            const firstNameEl = document.getElementById(
              "first-name"
            ) as HTMLInputElement | null;
            const lastNameEl = document.getElementById(
              "last-name"
            ) as HTMLInputElement | null;
            const emailEl = document.getElementById(
              "mail"
            ) as HTMLInputElement | null;
            const phoneEl = document.getElementById(
              "phone"
            ) as HTMLInputElement | null;
            const dialBtn = document.getElementById(
              "dial-code-btn"
            ) as HTMLButtonElement | null;
            const dialList = document.getElementById(
              "dial-code-list"
            ) as HTMLDivElement | null;
            const dialInput = document.getElementById(
              "dial-code-input"
            ) as HTMLInputElement | null;
            const dialFlag = document.getElementById(
              "dial-code-flag"
            ) as HTMLImageElement | null;
            const chevron = document.getElementById(
              "dial-chevron"
            ) as SVGElement | null;
            const aboutEl = document.getElementById(
              "about-you"
            ) as HTMLTextAreaElement | null;
            const aboutCount = document.getElementById(
              "about-count"
            ) as HTMLElement | null;
            const resumeEl = document.getElementById(
              "your-resume"
            ) as HTMLInputElement | null;
            const dropzoneEl = document.getElementById(
              "resume-dropzone"
            ) as HTMLElement | null;
            const fileRowEl = document.getElementById(
              "resume-file-row"
            ) as HTMLElement | null;
            const fileNameEl = document.getElementById(
              "resume-file-name"
            ) as HTMLElement | null;
            const removeBtnEl = document.getElementById(
              "resume-remove-btn"
            ) as HTMLElement | null;

            const errorFirst = document.getElementById(
              "error-firstName"
            ) as HTMLElement | null;
            const errorLast = document.getElementById(
              "error-lastName"
            ) as HTMLElement | null;
            const errorEmail = document.getElementById(
              "error-email"
            ) as HTMLElement | null;
            const errorPhone = document.getElementById(
              "error-phone"
            ) as HTMLElement | null;
            const errorAbout = document.getElementById(
              "error-about"
            ) as HTMLElement | null;
            const errorResume = document.getElementById(
              "error-resume"
            ) as HTMLElement | null;
            const toastRoot = document.getElementById(
              "career-success-toast"
            ) as HTMLElement | null;
            const submitBtn = document.getElementById(
              "submit-btn"
            ) as HTMLButtonElement | null;
            const submitText = document.getElementById(
              "submit-text"
            ) as HTMLElement | null;
            const submitSpinner = document.getElementById(
              "submit-spinner"
            ) as HTMLElement | null;
            const fieldset = document.getElementById(
              "career-fieldset"
            ) as HTMLFieldSetElement | null;

            let dragCount = 0;

            // helper functions
            function showDropzone() {
              if (!dropzoneEl || !fileRowEl) return;
              dropzoneEl.classList.remove("hidden");
              fileRowEl.classList.add("hidden");
            }

            function showFileRow(file: File) {
              if (!dropzoneEl || !fileRowEl || !fileNameEl) return;
              fileNameEl.textContent = file.name;
              dropzoneEl.classList.add("hidden");
              fileRowEl.classList.remove("hidden");
            }

            function showError(el: HTMLElement | null, message: string) {
              if (!el) return;
              el.textContent = message;
              el.classList.remove("hidden");
            }

            function hideError(el: HTMLElement | null) {
              if (!el) return;
              el.textContent = "";
              el.classList.add("hidden");
            }

            function markInvalid(input: HTMLElement | null) {
              if (!input) return;
              (input as HTMLInputElement).style.borderColor = "red";
            }

            function clearInvalid(input: HTMLElement | null) {
              if (!input) return;
              (input as HTMLInputElement).style.borderColor = "";
            }


            function setSubmitting(isSubmitting: boolean) {
              if (fieldset) fieldset.disabled = isSubmitting;
              if (submitText) {
                submitText.textContent = isSubmitting ? "Submitting..." : "Submit";
              }
              if (submitSpinner) {
                submitSpinner.classList.toggle("hidden", !isSubmitting);
              }
              if (submitBtn) {
                submitBtn.disabled = isSubmitting;
                submitBtn.setAttribute("aria-busy", String(isSubmitting));
              }
            }

            function clearAllErrors() {
              [
                errorFirst,
                errorLast,
                errorEmail,
                errorPhone,
                errorAbout,
                errorResume,
              ].forEach(hideError);
            }

            function validateFirstName(): boolean {
              if (!firstNameEl) return true;
              const val = (firstNameEl.value || "").trim();

              clearInvalid(firstNameEl);

              if (!val) {
                showError(errorFirst, "First Name is Required");
                markInvalid(firstNameEl);
                return false;
              }

              if (!/^[A-Za-z ]+$/.test(val)) {
                showError(errorFirst, "Only alphabets are allowed");
                markInvalid(firstNameEl);
                return false;
              }

              if (val.length < 3) {
                showError(errorFirst, "Must be minimum 3 letters");
                markInvalid(firstNameEl);
                return false;
              }
              hideError(errorFirst);
              return true;
            }

            function validateLastName(): boolean {
              if (!lastNameEl) return true;

              const val = (lastNameEl.value || "").trim();

              if (!val) {
                hideError(errorLast);
                return true;
              }

              const nameRegex = /^[A-Za-z ]+$/;
              if (!nameRegex.test(val)) {
                showError(errorLast, "Only alphabets are allowed");
                return false;
              }

              hideError(errorLast);
              return true;
            }

            function validateEmail(): boolean {
              if (!emailEl) return true;
              const val = (emailEl.value || "").trim();
              clearInvalid(emailEl);
              if (!val) {
                showError(errorEmail, "Email is Required");
                markInvalid(emailEl);
                return false;
              }
              const IS_MAIL =
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
              const re =
                IS_MAIL instanceof RegExp ? IS_MAIL : new RegExp(IS_MAIL);
              if (!re.test(val)) {
                showError(errorEmail, "Enter the valid email address");
                markInvalid(emailEl);
                return false;
              }
              hideError(errorEmail);
              return true;
            }

            function validatePhone(): boolean {
              if (!phoneEl || !dialInput) return true;
              const raw = (phoneEl.value || "").trim();
              clearInvalid(phoneEl);
              if (!/^\d*$/.test(phoneEl.value)) {
                showError(errorPhone, "Only numbers are allowed");
                markInvalid(phoneEl);
                return false;
              }
              if (!raw) {
                showError(errorPhone, "Phone Number is Required");
                markInvalid(phoneEl);
                return false;
              }
              if (raw.length < 6 || raw.length > 15) {
                showError(errorPhone, "Enter a valid phone number");
                markInvalid(phoneEl);
                return false;
              }

              try {
                const validator = (
                  value: string,
                  dialCode: string
                ): true | string => {
                  if (dialCode === "+91") {
                    // India: 10 digits starting with 6–9
                    if (!/^([6-9]\d{9})$/.test(value)) {
                      return "For India, enter a 10-digit number starting with 6-9.";
                    }
                  } else if (dialCode === "+971") {
                    // UAE: 9 digits starting with 5
                    if (!/^5\d{8}$/.test(value)) {
                      return "For UAE, enter a 9-digit number starting with 5.";
                    }
                  } else {
                    return "Unsupported dial code selected.";
                  }

                  return true;
                };

                if (typeof validator === "function") {
                  const res = validator(raw, dialInput.value);
                  if (res !== true) {
                    showError(
                      errorPhone,
                      typeof res === "string"
                        ? res
                        : "Enter a valid phone number"
                    );
                    return false;
                  }
                }
              } catch (e) {
                // ignore and continue
              }

              hideError(errorPhone);
              return true;
            }

            function validateAbout(): boolean {
              if (!aboutEl) return true;
              const val = aboutEl.value || "";
              if (val.length > 800) {
                showError(
                  errorAbout,
                  "Your description must not exceed 800 characters."
                );
                return false;
              }
              hideError(errorAbout);
              return true;
            }

            function validateResume(): boolean {
              if (!resumeEl) return true;
              if (!resumeEl.files || resumeEl.files.length === 0) {
                showError(errorResume, "Please upload your resume");
                markInvalid(dropzoneEl);
                return false;
              }
              clearInvalid(dropzoneEl);
              hideError(errorResume);
              return true;
            }


            // about char counter
            if (aboutEl && aboutCount) {
              aboutCount.textContent = `${aboutEl.value.length}/800`;
              aboutEl.addEventListener("input", function () {
                aboutCount.textContent = `${this.value.length}/800`;
                if (this.value.length > 800) {
                  showError(
                    errorAbout,
                    "Your description must not exceed 800 characters."
                  );
                } else {
                  hideError(errorAbout);
                }
              });
            }

            // Dial-code dropdown behaviour
            if (dialBtn && dialList) {
              let listOpen = false;

              function openList() {
                dialList?.classList.remove("hidden");
                if (chevron) chevron.style.transform = "rotate(180deg)";
                listOpen = true;
              }
              function closeList() {
                dialList?.classList.add("hidden");
                if (chevron) chevron.style.transform = "";
                listOpen = false;
              }

              dialBtn.addEventListener("click", (ev) => {
                ev.stopPropagation();
                if (listOpen) closeList();
                else openList();
              });

              // click on options
              Array.from(dialList.querySelectorAll("[data-value]")).forEach(
                (el) => {
                  el.addEventListener("click", () => {
                    const dv = el.getAttribute("data-value");
                    const di = el.getAttribute("data-img");

                    if (dv && dialInput) dialInput.value = dv;
                    if (di && dialFlag) dialFlag.src = di;

                    closeList();
                  });
                }
              );

              // close on outside click
              document.addEventListener("click", (e) => {
                if (
                  !dialList.contains(e.target as Node) &&
                  !dialBtn.contains(e.target as Node)
                ) {
                  closeList();
                }
              });
            }

            // Form-level validate - returns boolean
            function validateAll(): boolean {
              clearAllErrors();
              const v1 = validateFirstName();
              const v2 = validateLastName();
              const v3 = validateEmail();
              const v4 = validatePhone();
              const v5 = validateAbout();
              const v6 = validateResume();
              return v1 && v2 && v3 && v4 && v5 && v6;
            }

            // Build plain object similar to react-hook-form getValues()
            function gatherValues() {
              return {
                firstName: firstNameEl ? firstNameEl.value.trim() : "",
                lastName: lastNameEl ? lastNameEl.value.trim() : "",
                email: emailEl ? emailEl.value.trim() : "",
                dialCode: dialInput ? dialInput.value : "+91",
                phoneNo: phoneEl ? phoneEl.value.trim() : "",
                about: aboutEl ? aboutEl.value : "",
                role:
                  (
                    document.querySelector(
                      'input[name="role"]'
                    ) as HTMLInputElement | null
                  )?.value ||
                  (window as any).careerRole ||
                  "",
                // resume we will pack as File object
                resume:
                  resumeEl && resumeEl.files && resumeEl.files.length
                    ? resumeEl.files[0]
                    : null,
              };
            }

            function showSuccessToast() {
              if (!toastRoot) return;

              // Make visible
              toastRoot.classList.remove("hidden", "opacity-0");
              toastRoot.classList.add("opacity-100");
              toastRoot.scrollIntoView({ behavior: "smooth", block: "center" });
              // Auto-hide
              setTimeout(() => {
                toastRoot.classList.add("opacity-0");
                setTimeout(() => {
                  toastRoot.classList.add("hidden");
                }, 400);
              }, 3000);
            }

            // submit handler
            async function handleSubmit(ev?: SubmitEvent) {
              if (ev) ev.preventDefault();

              if (!validateAll()) {
                // scroll to first error
                const firstVisibleError = document.querySelector(
                  ".text-sm.text-red:not(.hidden)"
                );
                if (firstVisibleError) {
                  (firstVisibleError as HTMLElement).scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                } else {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
                return;
              }

              // helper: convert File -> base64
              function fileToBase64(file: File): Promise<string> {
                return new Promise((resolve, reject) => {
                  try {
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = () => {
                      if (typeof reader.result === "string")
                        resolve(reader.result);
                      else resolve(String(reader.result));
                    };
                    reader.onerror = (err) => reject(err);
                  } catch (err) {
                    reject(err);
                  }
                });
              }

              // prepare data
              const values = gatherValues();
              const safeRole =
                values.role ||
                (typeof title !== "undefined" ? title : "") ||
                "";

              try {
                setSubmitting(true);
                // Build the same FormData payload your service used
                const formData = new FormData();
                formData.append("firstName", values.firstName ?? "");
                formData.append("lastName", values.lastName ?? "");
                formData.append("email", values.email ?? "");
                formData.append("dialCode", values.dialCode ?? "");
                formData.append("phoneNo", values.phoneNo ?? "");
                formData.append("about", values.about ?? "");
                formData.append("role", safeRole ?? "");
                formData.append("type", "job-application");

                if (values.resume) {
                  // convert file -> base64
                  const resumeFile: File = values.resume;
                  const resumeBase64 = await fileToBase64(resumeFile);
                  formData.append("resume", resumeBase64);
                  formData.append("resumeFilename", resumeFile.name);
                }

                // Resolve API endpoint
                const gmailApi = options.gmailApi;

                if (!gmailApi) {
                  console.error(
                    "[CareerForm] GMAIL API endpoint not configured (gmailApi is empty)."
                  );
                  alert(
                    "Unable to submit: email service is not configured. Please contact support."
                  );
                  return;
                }

                const response = await fetch(gmailApi, {
                  method: "POST",
                  body: formData,
                });

                if (!response.ok) {
                  // server returned non-2xx — read body if possible for debugging
                  const text = await response.text().catch(() => null);
                  console.error(
                    "[CareerForm] Server returned error",
                    response.status,
                    text
                  );
                  alert(
                    "Submission failed: server returned an error. Please try again later."
                  );
                  return;
                }

                const result = await response.json().catch((err) => {
                  console.error(
                    "[CareerForm] Failed to parse JSON response:",
                    err
                  );
                  return null;
                });

                const success = Boolean(result?.success);
                if (success) {
                  showSuccessToast();
                  form?.reset();
                  if (dialInput) dialInput.value = "+91";
                  if (dialFlag) dialFlag.src = "/images/contact/ind.png";
                  if (resumeEl) resumeEl.value = "";
                  showDropzone();
                  console.info("[CareerForm] Submission success");
                } else {
                  // server responded but success flag is falsy — show helpful message
                  console.error(
                    "[CareerForm] Submission response received, but success flag is falsy:",
                    result
                  );
                  // Prefer user-friendly inline message; alert for now
                  alert(
                    "Submission could not be processed. Please try again later or contact support."
                  );
                }
              } catch (err) {
                console.error(
                  "[CareerForm] Unexpected error during submission:",
                  err
                );
                alert(
                  "An unexpected error occurred while submitting the form. Please try again."
                );
              } finally {
                setSubmitting(false);
              }
            }

            // basic input listeners for on-the-fly validation
            if (firstNameEl)
              firstNameEl.addEventListener("input", validateFirstName);
            if (lastNameEl)
              lastNameEl.addEventListener("input", validateLastName);
            if (emailEl) emailEl.addEventListener("input", validateEmail);
            if (phoneEl) phoneEl.addEventListener("input", validatePhone);
            if (aboutEl) aboutEl.addEventListener("input", validateAbout);

            if (
              !resumeEl ||
              !dropzoneEl ||
              !fileRowEl ||
              !fileNameEl ||
              !removeBtnEl
            ) {
              console.warn("Resume upload: required DOM elements not found");
              return;
            }

            dropzoneEl.addEventListener("click", () => resumeEl.click());
            resumeEl.addEventListener("change", () => {
              const file = resumeEl.files?.[0];
              if (!file) {
                showDropzone();
                return;
              }

              hideError(errorResume);
              showFileRow(file);
            });

            removeBtnEl.addEventListener("click", () => {
              resumeEl.value = "";
              showDropzone();
              validateResume();
            });

            // Highlight on drag enter
            dropzoneEl.addEventListener("dragenter", (e) => {
              e.preventDefault();
              dragCount++;
              dropzoneEl.classList.remove("border-black");
              dropzoneEl.classList.add("border-primary");
              dropzoneEl.style.backgroundColor = "#E6FFFA";
            });

            dropzoneEl.addEventListener("dragover", (e) => e.preventDefault());

            dropzoneEl.addEventListener("dragleave", (e) => {
              e.preventDefault();
              dragCount--;
              if (dragCount <= 0) {
                dropzoneEl.classList.remove("border-primary");
                dropzoneEl.classList.add("border-black");
                dropzoneEl.style.backgroundColor = "";
              }
            });

            // Handle dropped file
            dropzoneEl.addEventListener("drop", (e) => {
              e.preventDefault();
              dragCount = 0;

              dropzoneEl.classList.remove("border-primary");
              dropzoneEl.classList.add("border-black");
              dropzoneEl.style.backgroundColor = "";

              const file = e.dataTransfer?.files?.[0];
              if (!file) return;

              const dt = new DataTransfer();
              dt.items.add(file);
              resumeEl.files = dt.files;

              hideError(errorResume);
              showFileRow(file);
            });

            // hook up submit
            form.addEventListener("submit", handleSubmit);

            // accessible keyboard: toggle list with Enter/Escape handling
            if (dialBtn && dialList) {
              dialBtn.addEventListener("keydown", function (ev) {
                if (ev.key === "Enter" || ev.key === " ") {
                  ev.preventDefault();
                  dialBtn.click();
                } else if (ev.key === "Escape") {
                  dialList.classList.add("hidden");
                }
              });
            }

            // Expose a small helper for tests/debug if needed
            (window as any).__careerForm_validateAll = validateAll;
          })();
        }}
      </Script>
    </>
  );
};

export default CareerForm;
