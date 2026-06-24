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

const DPAutomationOverview = () => {
  return (
    <section className="py-12 xl:py-20 xxl:py-26" id="over">
      <div className="container">
        <div className="lg:w-7/12">
          <h1 className="text-xxl xl:text-h4 mb-2">Engineering the</h1>
          <h2 className="text-h4 xl:text-h2 text-primary">
            Future of Your Product
          </h2>
        </div>
        <div className="lg:flex items-center lg:gap-20 xl:gap-[132px] border-b border-gray-200 py-6 lg:py-16">
          <div className="lg:flex-[0_0_420px] lg:order-2">
            <img
              src="/images/services/es-overview-6.webp"
              width={800}
              height={451}
              alt="es-overview"
              className="w-full h-auto rounded-lg max-lg:hidden"
            />
            <img
              src="/images/services/es-overview-sm-6.webp"
              width={800}
              height={593}
              alt="es-overview-sm"
              className="w-full h-auto rounded-lg lg:hidden"
            />
          </div>
          <div className="w-full max-lg:mt-8 lg:order-1">
            <h3 className="text-xxl">
              Empowering Growth by Eliminating Repetitive Workloads
            </h3>
            <p className="text-md mt-6">
              By embracing smart automation and simple platforms, those tasks
              become effortless allowing teams to focus on what truly matters.
            </p>
          </div>
        </div>
        <div className="lg:flex items-center lg:gap-20 xl:gap-[132px] py-6 lg:py-16 pb-0">
          <div className="lg:flex-[0_0_420px]">
            <img
              src="/images/services/dpa-overview-1.webp"
              width={800}
              height={451}
              alt="dpa-overview-1"
              className="w-full h-auto rounded-lg max-lg:hidden"
            />
            <img
              src="/images/services/dpa-overview-2-sm.webp"
              width={800}
              height={593}
              alt="dpa-overview-1"
              className="w-full h-auto rounded-lg lg:hidden"
            />
          </div>
          <div className="w-full max-lg:mt-8">
            <h4 className="text-xxl">
              To turn that momentum into lasting transformation with precision
              and purpose, you partner with Valoriz.
            </h4>
            <p className="text-md mt-6">
              It&apos;s about removing the noise, fixing what slows you down,
              and creating space for teams to focus on growth,so progress feels
              natural, not forced. That&apos;s the kind of shift Valoriz helps
              deliver.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DPAutomationOverview;