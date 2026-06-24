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


const MobileAppTech = () => {
  return (
    <section className="py-12 xl:py-20 xxl:py-26" id="tech-stacks">
      <div className="container">
        <div className="mb-8">
          <p className="text-xxl xl:text-h4">Our Mobile App</p>
          <p className="text-h4 xl:text-h2 text-primary">Tech Stack</p>
        </div>
        <div>
          <div className="border-b border-gray-200 last:border-b-0 py-8 last:pb-0">
            <p className="text-xxl xl:text-h5 mb-8">Native Android</p>
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center justify-center w-[146px] flex-[0_0_146px] h-[130px] rounded-lg shadow-sm">
                <img
                  src="/images/logo/kotlin.svg"
                  width={97}
                  height={21}
                  alt="kotlin"
                  className="max-w-full"
                />
              </div>
            </div>
          </div>
          <div className="border-b border-gray-200 last:border-b-0 py-8 last:pb-0">
            <p className="text-xxl xl:text-h5 mb-8">Hybrid Cross Platfrom</p>
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center justify-center w-[146px] flex-[0_0_146px] h-[130px] rounded-lg shadow-sm">
                <img
                  src="/images/logo/dart.svg"
                  width={98}
                  height={26}
                  alt="dart"
                  className="max-w-full"
                />
              </div>
              <div className="flex items-center justify-center w-[146px] flex-[0_0_146px] h-[130px] rounded-lg shadow-sm">
                <img
                  src="/images/logo/javascript.svg"
                  width={74}
                  height={74}
                  alt="javascript"
                  className="max-w-full"
                />
              </div>
              <div className="flex items-center justify-center w-[146px] flex-[0_0_146px] h-[130px] rounded-lg shadow-sm">
                <img
                  src="/images/logo/swift.svg"
                  width={106}
                  height={32}
                  alt="swift"
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


export default MobileAppTech;