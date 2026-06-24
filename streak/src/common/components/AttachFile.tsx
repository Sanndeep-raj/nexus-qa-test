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
import { isValidFileType } from "utils/commonUtils";
import Button from "./button/Button";
import IconClose from "@common/icons/Close";
import Icon from "./Icon";
import { Script } from "streak/components";

const AttachFile = () => {
  return (
    <div id="resume-upload-container" className="w-full">
      <div
        id="resume-dropzone"
        className={`flex flex-1 items-center justify-center w-full border border-dashed border-gray-400 p-12 rounded-md transition-all duration-300`}
      >
        <div className="flex flex-col items-center">
          <p className="text-md">Drag and drop here</p>
          <p>or</p>
          <Button
            id="resume-browse-btn"
            variant="outline-secondary"
            size="md"
            className="mt-2"
            type="button"
            aria-label="Upload Resume"
          >
            Browse
          </Button>
          <input
            id="resume-file-input"
            type="file"
            accept=".pdf,.doc,.docx"
            className="hidden"
          />
          <p className="text-gray-600 mt-6">Supported Files: PDF, DOC, DOCX</p>
          <p
            id="resume-error-msg"
            className="text-red-600 text-sm mt-3 hidden"
          ></p>
        </div>
      </div>

      <div
        id="resume-preview"
        className="hidden flex items-center p-3 border border-dashed border-gray-400 rounded-sm justify-between mt-3"
      >
        <span id="resume-file-name" className="text-gray-800 me-4"></span>
        <button
          id="resume-remove-btn"
          type="button"
          title="Remove Resume"
          aria-label="Remove Resume"
          className="flex justify-center items-center w-4 h-4 bg-[rgba(255,104,104,0.6)] hover:bg-red rounded-full"
        >
          <Icon src={IconClose} variant="white" size="" className="w-2 h-2" />
        </button>
      </div>

      <Script id="resume-upload-logic">
        {() => {
          const dropzone = document.getElementById("resume-dropzone");
          const fileInput = document.getElementById(
            "resume-file-input"
          ) as HTMLInputElement;
          const browseBtn = document.getElementById("resume-browse-btn");
          const preview = document.getElementById("resume-preview");
          const fileNameEl = document.getElementById("resume-file-name");
          const removeBtn = document.getElementById("resume-remove-btn");
          const errorMsg = document.getElementById("resume-error-msg");
          let dragCounter = 0;

          const resetError = () => {
            if (errorMsg) {
              errorMsg.textContent = "";
              errorMsg.classList.add("hidden");
            }
            dropzone?.classList.remove("border-red-500");
          };

          const showError = (message: string) => {
            if (errorMsg) {
              errorMsg.textContent = message;
              errorMsg.classList.remove("hidden");
            }
            dropzone?.classList.add("border-red-500");
          };

          const showPreview = (file: File) => {
            if (fileNameEl && preview && dropzone) {
              fileNameEl.textContent = file.name;
              preview.classList.remove("hidden");
              dropzone.classList.add("hidden");
            }
          };

          const resetView = () => {
            if (preview && dropzone) {
              preview.classList.add("hidden");
              dropzone.classList.remove("hidden");
              if (fileInput) fileInput.value = "";
            }
            resetError();
          };

          const handleFile = (file: File | null) => {
            resetError();
            if (!file) return;
            if (isValidFileType(file)) {
              showPreview(file);
            } else {
              showError(
                "Unsupported file type. Supported files: PDF, DOC, DOCX."
              );
            }
          };

          const onDrop = (e: DragEvent) => {
            e.preventDefault();
            dragCounter = 0;
            dropzone?.classList.remove("bg-[#049E76]");
            const droppedFile = e.dataTransfer?.files?.[0];
            handleFile(droppedFile || null);
          };

          const attachEvents = () => {
            if (!dropzone || !fileInput || !browseBtn || !removeBtn) return;

            dropzone.addEventListener("dragenter", (e) => {
              e.preventDefault();
              dragCounter++;
              dropzone.style.backgroundColor = "#049E76";
            });

            dropzone.addEventListener("dragleave", (e) => {
              e.preventDefault();
              dragCounter--;
              if (dragCounter === 0)
                dropzone.style.backgroundColor = "transparent";
            });

            dropzone.addEventListener("dragover", (e) => e.preventDefault());
            dropzone.addEventListener("drop", onDrop);

            browseBtn.addEventListener("click", () => fileInput.click());

            fileInput.addEventListener("change", (e: Event) => {
              const target = e.target as HTMLInputElement;
              const file = target.files?.[0] || null;
              handleFile(file);
            });

            removeBtn.addEventListener("click", resetView);
          };

          if (
            document.readyState === "complete" ||
            document.readyState === "interactive"
          ) {
            attachEvents();
          } else {
            window.addEventListener("DOMContentLoaded", attachEvents, {
              once: true,
            });
          }
        }}
      </Script>
    </div>
  );
};

export default AttachFile;
