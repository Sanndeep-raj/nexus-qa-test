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

const DPAutomationTech = () => {
  return (
    <section
      className="bg-[linear-gradient(50deg,_rgba(255,255,255,1)_52%,_rgba(218,239,234,1)_100%)] py-12 xl:py-20 xxl:py-26"
      id="tech-stacks"
    >
      <div className="container">
        <div className="mb-8">
          <h1 className="text-xxl xl:text-h4">Our Digital Automation</h1>
          <h2 className="text-h4 xl:text-h2 text-primary">Tech Stack</h2>
        </div>
        <div>
          <div className="border-b border-gray-200 last:border-b-0 py-8 last:pb-0">
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center justify-center w-[146px] flex-[0_0_146px] h-[130px] rounded-lg shadow-sm">
                <img
                  src="/images/logo/powerapps.svg"
                  width={120}
                  height={45}
                  alt="powerapps"
                  className="max-w-full"
                />
              </div>
              <div className="flex items-center justify-center w-[146px] flex-[0_0_146px] h-[130px] rounded-lg shadow-sm">
                <img
                  src="/images/logo/power-automate.svg"
                  width={120}
                  height={38}
                  alt="power-automate"
                  className="max-w-full"
                />
              </div>
              <div className="flex items-center justify-center w-[146px] flex-[0_0_146px] h-[130px] rounded-lg shadow-sm">
                <img
                  src="/images/logo/powerbi-stack.svg"
                  width={114}
                  height={46}
                  alt="powerbi-stack"
                  className="max-w-full"
                />
              </div>
              <div className="flex items-center justify-center w-[146px] flex-[0_0_146px] h-[130px] rounded-lg shadow-sm">
                <img
                  src="/images/logo/ms-dynamics-365.svg"
                  width={122}
                  height={42}
                  alt="ms-dynamics-365"
                  className="max-w-full"
                />
              </div>
              <div className="flex items-center justify-center w-[146px] flex-[0_0_146px] h-[130px] rounded-lg shadow-sm">
                <img
                  src="/images/logo/ms-365.svg"
                  width={114}
                  height={19}
                  alt="ms-365"
                  className="max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-12 xl:mt-26" />
      </div>
    </section>
  );
};


export default DPAutomationTech;