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

const DigitalCommerceTech = () => {
  const id = "tech-stacks"
  return (
    <section
      className="bg-[linear-gradient(344deg,_rgba(247,252,250,1)_40%,_rgba(231,239,236,1)_100%)] py-12 xl:py-20 xxl:py-26"
      id={id}
    >
      <div className="container">
        <div className="mb-8">
          <p className="text-xxl xl:text-h4">Trusted Allies in</p>
          <p className="text-h4 xl:text-h2 text-primary">
            Digital Experience
          </p>
        </div>
        <div>
          <div className="border-b border-gray-200 last:border-b-0 py-8 last:pb-0">
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center justify-center w-[146px] flex-[0_0_146px] h-[130px] rounded-lg shadow-sm">
                <img
                  src="/images/logo/microsoft.svg"
                  width={114}
                  height={19}
                  alt=""
                  className="max-w-full"
                />
              </div>
              <div className="flex items-center justify-center w-[146px] flex-[0_0_146px] h-[130px] rounded-lg shadow-sm">
                <img
                  src="/images/logo/sanity.svg"
                  width={106}
                  height={21}
                  alt=""
                  className="max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalCommerceTech;