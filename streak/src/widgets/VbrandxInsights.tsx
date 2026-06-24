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
import PlayRounded from "@common/icons/PlayRounded";
import { Script } from "streak/components";
import { getAzureCdnUrl } from "utils/commonUtils";
const VbrandxInsights = () => {
  const videosrc =getAzureCdnUrl("HOME_HERO_BANNER_1")
  return (
    <section className="text-white bg-black py-12 xl:py-20 xxl:py-26">
      <div className="container">
        <h2 className="text-h4 lg:text-h2 mb-8">VBrandX Insights</h2>
        <div className="relative h-full rounded-[16px] overflow-hidden">
          <video
            id="video"
            src={videosrc}
            className="w-full h-full object-cover"
            loop
            muted
            playsInline
          />
          <div id="overlay" className="absolute left-0 top-0 w-full h-full flex items-center justify-center bg-black/40">
            <button
              id="btn_video"
              className="flex flex-col items-center text-white bg-black rounded-lg p-4"
            >
              <Icon src={PlayRounded} size="xl" variant="white" />
              <span className="text-xxl mt-4">Play Video</span>
            </button>
          </div>

        </div>
      </div>
      <Script id="VbrandxInsights">
        {() => {
          const video = document.getElementById("video") as HTMLVideoElement;
          const btn = document.getElementById("btn_video") as HTMLButtonElement;
          const overlay = document.getElementById("overlay") as HTMLElement;

          video.pause();
          video.addEventListener("click", () => {
            videoaction(false, true);

          })
          btn.addEventListener("click", () => {
            videoaction(true, false);

          })
          const videoaction = (vid: boolean, showOverlay: boolean) => {
            if (vid) {
              video.play();
              overlay.classList.add("hidden");

            }
            else {
              video.pause();
              overlay.classList.remove("hidden");

            }

          }
        }}

      </Script>
    </section>
  );
};

export default VbrandxInsights;