/* eslint-disable max-len */
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

import Icon from "@common/components/Icon";
import IconTwitter from "@common/icons/Twitter";
import IconLinkedIn from "@common/icons/LinkedIn";
import IconWhatsapp from "@common/icons/Whatsapp";

const SocialMedia = () => {
  return (
    <>
      <hr className="xl:hidden border-gray-500 -mx-6" />
      <div className="pt-10 pb-8 xl:pb-0 xl:pt-20">
        <p className="text-md font-semibold">Enjoying this article?</p>
        <div className="flex items-center gap-x-4 mt-4">
          <span className="text-md">Share</span>
          <a href="https://wa.me/+918848815445"
            aria-label="Share on WhatsApp"
          >
            <Icon src={IconWhatsapp} variant="gray500" />
          </a>
          <a href="https://www.linkedin.com/company/valoriz-digital/"
            aria-label="Share on LinkedIn"
          >
            <Icon src={IconLinkedIn} variant="gray500" />
          </a>
          <a href="https://x.com/valorizdigital"
            aria-label="Share on Twitter"
          >
            <Icon src={IconTwitter} variant="gray500" />
          </a>
        </div>
      </div>
      <hr className="xl:hidden border-gray-500 -mx-6" />
    </>
  );
};

export default SocialMedia;