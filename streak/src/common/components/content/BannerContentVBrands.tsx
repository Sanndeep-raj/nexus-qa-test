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

const BannerContentVBrands = () => {
  return (
    <div>
      <div className="mb-10">
        <img src="/images/products/vbrand-logo-white.svg" alt="vbrand" width={282} height={57} />
      </div>
      <div className="flex flex-wrap gap-x-4 gap-y-6">
        <div className="p-[2px] rounded-[16px] bg-gradient-border inline-block">
          <div className="relative text-white text-md rounded-[14px] bg-[black]/90 py-6 px-8">
            Mobile-First UI
          </div>
        </div>
        <div className="p-[2px] rounded-[16px] bg-gradient-border inline-block">
          <div className="relative text-white text-md rounded-[14px] bg-[black]/90 py-6 px-8">
            Touch-Friendly Design
          </div>
        </div>
        <div className="p-[2px] rounded-[16px] bg-gradient-border inline-block">
          <div className="relative text-white text-md rounded-[14px] bg-[black]/90 py-6 px-8">
            Dynamic Widgets
          </div>
        </div>
        <div className="p-[2px] rounded-[16px] bg-gradient-border inline-block">
          <div className="relative text-white text-md rounded-[14px] bg-[black]/90 py-6 px-8">
            App UI Customization
          </div>
        </div>
        <div className="p-[2px] rounded-[16px] bg-gradient-border inline-block">
          <div className="relative text-white text-md rounded-[14px] bg-[black]/90 py-6 px-8">
            Zero Coding Needed
          </div>
        </div>
        <div className="p-[2px] rounded-[16px] bg-gradient-border inline-block">
          <div className="relative text-white text-md rounded-[14px] bg-[black]/90 py-6 px-8">
            Real-Time Preview
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerContentVBrands;