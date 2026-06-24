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

const BannerContentStreak = () => {
  return (
    <div>
      <div className="mb-10">
        <img src="/images/products/streak-logo-white.svg" alt="streak" width={282} height={57} />
      </div>
      <div className="flex flex-wrap gap-x-4 gap-y-6">
        <div className="p-[2px] rounded-[16px] bg-gradient-border inline-block">
          <div className="relative text-white text-center text-md rounded-[14px] bg-[black]/90 py-6 px-8">
            Supercharge Website’s <br /> Speed and Performance.
          </div>
        </div>
        <div className="p-[2px] rounded-[16px] bg-gradient-border inline-block">
          <div className="relative text-white text-center text-md rounded-[14px] bg-[black]/90 py-6 px-8">
            Automated & Cloud-Native <br /> Deployment​
          </div>
        </div>
        <div className="p-[2px] rounded-[16px] bg-gradient-border inline-block">
          <div className="relative text-white text-md rounded-[14px] bg-[black]/90 py-6 px-8">
            Maximum Conversion Potential
          </div>
        </div>
        <div className="p-[2px] rounded-[16px] bg-gradient-border inline-block">
          <div className="relative text-white text-md rounded-[14px] bg-[black]/90 py-6 px-8">
            Lightweight Framework
          </div>
        </div>
        <div className="p-[2px] rounded-[16px] bg-gradient-border inline-block">
          <div className="relative text-white text-md rounded-[14px] bg-[black]/90 py-6 px-8">
            Blazing-Fast Load Times
          </div>
        </div>
        <div className="p-[2px] rounded-[16px] bg-gradient-border inline-block">
          <div className="relative text-white text-md rounded-[14px] bg-[black]/90 py-6 px-8">
            Optimized for SEO​
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerContentStreak;