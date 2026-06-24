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
import Icon from "@common/components/Icon";
import PlayRounded from "@common/icons/PlayRounded";
import IconMuted from "@common/icons/IconMuted";
import IconVolume from "@common/icons/IconVolume";
import { Script } from "streak/components";
import { getAzureCdnUrl } from "utils/commonUtils";

const LifeVideo = () => {
  const videoSrc = getAzureCdnUrl("HOME_HERO_BANNER_1");
  const poster = "/images/home/banner/poster-banner-video.webp";

  return (
    <section
      id="life-video-section"
      className="relative bg-black w-full aspect-video md:h-screen md:aspect-auto"
    >
      <div
        id="life-video-container"
        className="relative w-full h-full overflow-hidden"
      >
        <img
          src={poster}
          alt="Video Poster"
          data-video-src={videoSrc}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          id="lifevideo-overlay"
          className="absolute inset-0 z-10 flex items-center justify-center bg-black/40"
        >
          <button
            id="lifevideo-play-btn"
            className=" flex flex-col items-center bg-black text-white rounded-lg p-6">
            <Icon src={PlayRounded} size="xl" variant="white" />
            <span className="mt-4 text-xl font-medium">Play Video</span>
          </button>
        </div>

        <div
          id="lifevideo-mute-container"
          className="absolute bottom-4 right-4 z-20 hidden"
        >
          <button id="lifevideo-mute-btn">
            <span id="lifevideo-mute">
              <Icon src={IconMuted} size="md" variant="white" />
            </span>
            <span id="lifevideo-unmute" className="hidden">
              <Icon src={IconVolume} size="md" variant="white" />
            </span>
          </button>
        </div>
      </div>

      <Script id="life-video-script">
        {(gDom: any) => {
          const container = gDom.geById("life-video-container");
          const overlay = gDom.geById("lifevideo-overlay") as HTMLElement;
          const playBtn = gDom.geById("lifevideo-play-btn") as HTMLButtonElement;
          const muteContainer = gDom.geById("lifevideo-mute-container") as HTMLElement;
          const muteBtn = gDom.geById("lifevideo-mute-btn") as HTMLButtonElement;
          const muteIcon = gDom.geById("lifevideo-mute") as HTMLElement;
          const unmuteIcon = gDom.geById("lifevideo-unmute") as HTMLElement;

          const posterImg = container.querySelector(
            "img[data-video-src]"
          ) as HTMLImageElement;

          if (!posterImg) return;

          const videoEl = document.createElement("video");
          videoEl.src = posterImg.dataset.videoSrc!;
          videoEl.id = "life-video";
          videoEl.playsInline = true;
          videoEl.muted = true;
          videoEl.loop = true;
          videoEl.poster = posterImg.src;
          videoEl.className = "absolute inset-0 w-full h-full object-cover";
          videoEl.addEventListener("canplay", () => {
            posterImg.remove();
          });

          container.appendChild(videoEl);

          const togglePlay = () => {
            if (videoEl.paused) {
              videoEl.play().catch(() => { });
              overlay.classList.add("hidden");
              muteContainer.classList.remove("hidden");
            } else {
              videoEl.pause();
              overlay.classList.remove("hidden");
              muteContainer.classList.add("hidden");
            }
          };

          const toggleMute = (e: Event) => {
            e.preventDefault();
            videoEl.muted = !videoEl.muted;
            muteIcon.classList.toggle("hidden", !videoEl.muted);
            unmuteIcon.classList.toggle("hidden", videoEl.muted);
          };

          playBtn.addEventListener("click", togglePlay);
          videoEl.addEventListener("click", togglePlay);
          muteBtn.addEventListener("click", toggleMute);
        }}
      </Script>
    </section>
  );
};

export default LifeVideo;
