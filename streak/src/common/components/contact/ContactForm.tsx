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

import Button from "@common/components/button/Button";
import Icon from "@common/components/Icon";
import TextField from "@common/components/textField/TextField";
import ArrowRightIcon from "@common/icons/ArrowRight";
import { gmailApi } from "utils/config";
import Checked from "@common/icons/Checked";
import Spinner from "@common/components/Spinner";
import { Script } from "streak/components";
import type { Any } from "@sanity/client";

const ContactForm = ({ submitText, submitingText }: { submitText: string; submitingText: string }) => {
  return (
    <>
      <div id="form-success-toast" className="flex mb-12 hidden">
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
      <form id="contact-form">
        <fieldset id="form-fieldset">
          <div className="flex flex-col md:flex-row md:space-x-5">
            <div className="w-full mb-6 md:mb-11">
              <label id="first-name-label" className="text-md mb-2" htmlFor="first-name">
                First Name <span className="text-red text-md">*</span>
              </label>
              <TextField
                id="first-name"
                className="w-full border border-black rounded-none placeholder:text-gray-500 placeholder:text-base focus:outline-none"
                placeholder="Enter First Name"
                sizes="lg"
                variant="default"
              />
              <p id="error-firstName" className="text-sm text-red mt-1 hidden"></p>
            </div>

            <div className="w-full mb-6 md:mb-11">
              <label id="last-name-label" className="text-md mb-2" htmlFor="last-name">
                Last Name
              </label>
              <TextField
                id="last-name"
                className="w-full border border-black rounded-none placeholder:text-gray-500 placeholder:text-base focus:outline-none"
                placeholder="Enter Last Name"
                sizes="lg"
                variant="default"
              />
              <p id="error-lastName" className="text-sm text-red mt-1 hidden"></p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-5">
            <div className="w-full mb-6 md:mb-11">
              <label id="email-label" className="text-md mb-2" htmlFor="email">
                Email <span className="text-red text-md">*</span>
              </label>

              <TextField
                id="email"
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
                {/* <span className="text-red text-md">*</span> */}
              </label>
              <div className="flex relative w-full">
                {/* <div className="relative w-[5rem]" id="dial-code-dropdown">
                  <button
                    id="dial-code-btn"
                    type="button"
                    className="flex items-center justify-between w-full h-full border border-black rounded-l-md py-2 pl-3 pr-8 bg-white"
                  >
                    <div className="flex items-center">
                      <img id="dial-code-flag" src="/images/contact/ind.png" className="w-6 h-auto" width="24" height="24" alt="flag" />
                    </div>
                    <svg
                      id="dial-chevron"
                      className="w-4 h-4 text-gray-600 absolute right-2 pointer-events-none transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                </div> */}
                <TextField
                  id="phone"
                  type="tel"
                  // className="border-s-0"
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
                    <img src="/images/contact/ind.png" className="w-6 h-auto" alt="India" loading="lazy"/>
                    <span>+91</span>
                  </div>
                  <hr className="mx-auto w-[95%] border-t border-gray-400 my-2" />
                  <div
                    data-value="+971"
                    data-img="/images/contact/uae.svg"
                    className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    <img src="/images/contact/uae.svg" className="w-6 h-auto" alt="UAE" loading="lazy" />
                    <span>+971</span>
                  </div>
                  <input type="hidden" id="dial-code-input" name="dialCode" value="+91" />
                </div>
              </div>
              <p id="error-phone" className="text-sm text-red mt-1 hidden"></p>
            </div>
          </div>
          <div className="w-full mb-6 md:mb-11">
            <div className="flex items-center justify-between">
              <label id="project-idea-label" className="text-md mb-2" htmlFor="project-idea">
                Tell Us More About Your Project
              </label>
              <span id="project-idea-count" className="text-sm">0/800</span>
            </div>
            <textarea
              className="w-full border border-black rounded-none focus:outline-none p-4"
              id="project-idea"
              rows={9}
              placeholder="Brief about your project"
            />

            <p id="project-idea-error" className="hidden text-sm text-red mt-2"></p>
          </div>

          <div className="flex justify-end">
            <Button
              id="submit-btn"
              type="submit"
              variant="secondary"
              className="inline-flex w-full lg:w-auto items-center justify-center gap-3 transition-all duration-300 group"
            >
              <span className="btn-text">{submitText}</span>
              <Spinner id="spinner" />
              <span className="transition-transform duration-300 group-hover:translate-x-1 ms-2">
                <Icon src={ArrowRightIcon} size="md" />
              </span>
            </Button>
          </div>
        </fieldset>
      </form>

      {/* SCRIPT */}
      <Script id="ContactForm" options={{ submitText, submitingText, gmailApi }}>
        {(gDom: any, options: any) => {
          const firstNameInput = document.getElementById("first-name") as HTMLInputElement;
          const firstNameLabel = document.getElementById("first-name-label") as HTMLElement;
          const errorFirstName = document.getElementById("error-firstName") as HTMLElement;

          const lastNameInput = document.getElementById("last-name") as HTMLInputElement;
          const lastNameLabel = document.getElementById("last-name-label") as HTMLElement;
          const errorLastName = document.getElementById("error-lastName") as HTMLElement;

          const emailInput = document.getElementById("email") as HTMLInputElement;
          const emailLabel = document.getElementById("email-label") as HTMLElement;
          const errorEmail = document.getElementById("error-email") as HTMLElement;

          const phoneInput = document.getElementById("phone") as HTMLInputElement;
          const phoneLabel = document.getElementById("phone-label") as HTMLElement;
          const errorphone = document.getElementById("error-phone") as HTMLElement;

          const projectIdea = document.getElementById("project-idea") as HTMLTextAreaElement;
          const projectIdeaLabel = document.getElementById("project-idea-label") as HTMLElement;
          const errorProjectIdea = document.getElementById("project-idea-error") as HTMLElement;
          const countLabel = document.getElementById("project-idea-count") as HTMLElement;

          const chevron = document.getElementById("dial-chevron") as HTMLElement;
          const dropdownBtn = document.getElementById("dial-code-btn") as HTMLElement;
          const dropdownList = document.getElementById("dial-code-list") as HTMLElement;
          const flagImg = document.getElementById("dial-code-flag") as HTMLImageElement;
          const hiddenInput = document.getElementById("dial-code-input") as HTMLInputElement;

          const validationConstants = {
            IS_MAIL: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
          };

          let isOpen = false;
          let isSubmitted = false;

          dropdownBtn?.addEventListener("click", (e: MouseEvent) => {
            e.stopPropagation();
            dropdownList?.classList.toggle("hidden");
            isOpen = !dropdownList?.classList.contains("hidden");
            chevron.style.transform = isOpen ? "rotate(180deg)" : "rotate(0deg)";
          });

          dropdownList?.querySelectorAll("[data-value]")?.forEach((option) => {
            option.addEventListener("click", () => {
              const imgSrc = (option as HTMLElement).getAttribute("data-img") ?? "";
              const value = (option as HTMLElement).getAttribute("data-value") ?? "";
              flagImg.src = imgSrc;
              hiddenInput.value = value;
              dropdownList.classList.add("hidden");
              chevron.style.transform = "rotate(0deg)";
              isOpen = false;
            });
          });

          document.addEventListener("click", (event: MouseEvent) => {
            const dropdown = document.getElementById("dial-code-dropdown") as HTMLElement;
            if (dropdown && !dropdown.contains(event.target as Node)) {
              dropdownList.classList.add("hidden");
              chevron.style.transform = "rotate(0deg)";
              isOpen = false;
            }
          });


          firstNameInput.addEventListener("input", () => validateFirstName());
          lastNameInput.addEventListener("input", () => validateLastName());
          emailInput.addEventListener("input", () => validateEmail());
          // phoneInput.addEventListener("input", () => validatePhone());
          // projectIdea.addEventListener("input", () => validateProjectIdea());

          function validateFirstName(): boolean {
            const value = firstNameInput.value.trim();
            resetField(firstNameInput, firstNameLabel, errorFirstName);
            if (!value) {
              showError(firstNameInput, firstNameLabel, errorFirstName, "First Name is Required");
              return false;
            } else if (!/^[A-Za-z ]+$/.test(value)) {
              showError(firstNameInput, firstNameLabel, errorFirstName, "Only alphabets are allowed");
              return false;
            } else if (value.length < 3) {
              showError(firstNameInput, firstNameLabel, errorFirstName, "Must be minimum 3 letters");
              return false;
            }
            return true;
          }
          function validateLastName(): boolean {
            const value = lastNameInput.value.trim();
            resetField(lastNameInput, lastNameLabel, errorLastName);

            if (value && !/^[A-Za-z ]+$/.test(value)) {
              showError(lastNameInput, lastNameLabel, errorLastName, "Only alphabets are allowed");
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
            }
            if (!validationConstants.IS_MAIL.test(value)) {
              showError(emailInput, emailLabel, errorEmail, "Enter a valid email address");
              return false;
            }
            return true;
          }

          function validatePhone(): boolean {
            const rawValue = phoneInput.value;
            const value = rawValue.trim();
            resetField(phoneInput, phoneLabel, errorphone);
            if (!/^\d*$/.test(rawValue)) {
              showError(phoneInput, phoneLabel, errorphone, "Only numbers are allowed");
              return false;
            }
            if (!value) {
              showError(phoneInput, phoneLabel, errorphone, "Phone Number is Required");
              return false;
            }
            const dialCode = hiddenInput.value;
            if (dialCode === "+91" && !/^([6-9]\d{9})$/.test(value)) {
              showError(phoneInput, phoneLabel, errorphone, "For India, enter a 10-digit number starting with 6–9.");
              return false;
            }
            if (dialCode === "+971" && !/^5\d{8}$/.test(value)) {
              showError(phoneInput, phoneLabel, errorphone, "For UAE, enter a 9-digit number starting with 5.");
              return false;
            }
            return true;
          }

          function validateProjectIdea(): boolean {
            const value = projectIdea.value.trim();
            const length = value.length;
            countLabel.textContent = `${length}/800`;
            resetField(projectIdea, projectIdeaLabel, errorProjectIdea);
            if (!value) {
              showError(projectIdea, projectIdeaLabel, errorProjectIdea, "A brief description of your project is required.");
              countLabel.classList.add("text-red");
              return false;
            }

            if (length < 10) {
              showError(projectIdea, projectIdeaLabel, errorProjectIdea, "The description must be at least 10 characters long.");
              countLabel.classList.add("text-red");
              return false;
            }

            if (length > 800) {
              showError(projectIdea, projectIdeaLabel, errorProjectIdea, "The description cannot exceed 800 characters.");
              countLabel.classList.add("text-red");
              return false;
            }
            countLabel.classList.remove("text-red");
            return true;
          }

          function resetField(input: HTMLElement, label: HTMLElement, errorEl: HTMLElement) {
            errorEl.classList.add("hidden");
            errorEl.textContent = "";
            (input as HTMLInputElement).style.borderColor = "";
            input.classList.add("border-black");
            label.classList.remove("text-red");
            label.classList.add("text-black");
          }

          function showError(input: HTMLElement, label: HTMLElement, errorEl: HTMLElement, message: string) {
            errorEl.textContent = message;
            errorEl.classList.remove("hidden");
            (input as HTMLInputElement).style.borderColor = "red";
            input.classList.remove("border-black");
            label.classList.add("text-red");
          }
          const form = document.getElementById("contact-form") as HTMLFormElement;
          const submitBtn = document.getElementById("submit-btn") as HTMLButtonElement;
          const spinner = document.getElementById("spinner") as HTMLElement;
          let isSubmitting = false;
          const submitingText = options.submitingText;
          const submitText = options.submitText;
          spinner.style.display = "none";

          form.addEventListener("submit", async (event: SubmitEvent) => {
            event.preventDefault();
            const invalidFields: HTMLElement[] = [];
            if (!validateFirstName()) invalidFields.push(firstNameInput);
            if (!validateLastName()) invalidFields.push(lastNameInput);
            if (!validateEmail()) invalidFields.push(emailInput);
            // if (!validatePhone()) invalidFields.push(phoneInput);
            // if (!validateProjectIdea()) invalidFields.push(projectIdea);
            if (invalidFields.length > 0) {
              invalidFields[0]?.scrollIntoView({ behavior: "smooth", block: "center" });
              invalidFields[0]?.focus();
              return;
            }


            const formData = getFormData();

            if (isSubmitting) return;
            isSubmitting = true;
            updateButtonState();
            updateForm();
            const success = await handleFormSubmission(formData);
            isSubmitted = success;
            isSubmitting = false;
            updateButtonState();
            updateToast();
            updateForm();
            form.reset();
          });

          function updateButtonState() {
            const textNode = submitBtn.querySelector(".btn-text") as HTMLElement;
            if (isSubmitting) {
              textNode.textContent = submitingText ?? "Submitting...";
              submitBtn.disabled = true;
              spinner.style.display = "inline";
            } else {
              textNode.textContent = submitText ?? "Submit";
              submitBtn.disabled = false;
              spinner.style.display = "none";
            }
          }

          function updateForm() {
            const fieldset = document.getElementById("form-fieldset") as HTMLFieldSetElement;
            fieldset.disabled = isSubmitting;
          }

          function updateToast() {
            const successToast = document.getElementById("form-success-toast") as HTMLElement;
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
            firstName: string;
            lastName: string;
            email: string;
            dialCode: string;
            phoneNo: string;
            projectIdea: string;
          }): Promise<boolean> {
            try {
              const formData = new FormData();
              formData.append("firstName", request.firstName ?? "");
              formData.append("lastName", request.lastName ?? "");
              formData.append("email", request.email ?? "");
              formData.append("dialCode", request.dialCode ?? "");
              formData.append("phoneNo", request.phoneNo ?? "");
              formData.append("projectIdea", request.projectIdea ?? "");
              formData.append("type", "contact");

              const mailApi = options.gmailApi;
              const response = await fetch(mailApi, { method: "POST", body: formData });
              const result = await response.json();
              return !!result?.success;
            } catch (error) {
              console.error("[sentContactUsMailToGmail]: error", error);
              return false;
            }
          }

          function getFormData() {
            return {
              firstName: firstNameInput.value.trim(),
              lastName: lastNameInput.value.trim(),
              email: emailInput.value.trim(),
              phoneNo: phoneInput?.value?.trim(),
              dialCode: "",
              projectIdea: projectIdea?.value?.trim()
            };
          }

          updateButtonState();
        }}
      </Script>
    </>
  );
};

export default ContactForm;
