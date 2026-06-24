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
import RunningWordCanvas from "@common/components/RunningWordCanvas";

const LifeOverView = () => {
  return (
    <section className="border-b py-12 xl:py-20 xxl:py-26">
      <div className="container">
        <h2 className="text-h2 mb-14 xl:mb-24">
          <span className="flex max-md:flex-col md:justify-center gap-4 md:gap-8">
            <RunningWordCanvas
              words={["Think.", "Innovate.", "Evolve."]}
              classNames={[
                "text-gradient-1",
                "text-gradient-2",
                "text-gradient-3",
              ]}
              timeOut={1000}
            />
          </span>
        </h2>

        <div className="lg:flex lg:items-center">
          <div className="lg:w-1/2 xl:w-[640px]">
            <img
              src="/images/life/life-1.webp"
              alt=""
              className="w-full max-lg:hidden rounded-lg"
            />
            <img
              src="/images/life/life-sm-1.webp"
              alt=""
              className="w-full lg:hidden rounded-lg"
            />
          </div>

          <div className="lg:w-1/2 lg:ps-16 xl:ps-22 max-lg:mt-10">
            <p className="text-xxl xl:text-h5">
              We believe great work starts with a great environment. That’s why
              we focus on creating a culture where people feel supported, heard,
              and balanced.
            </p>
          </div>
        </div>

        <div className="lg:flex lg:items-center mt-16">
          <div className="lg:w-1/2 lg:order-2 xl:w-[640px]">
            <img
              src="/images/life/life-2.webp"
              alt=""
              className="w-full max-lg:hidden rounded-lg"
            />
            <img
              src="/images/life/life-sm-2.webp"
              alt=""
              className="w-full lg:hidden rounded-lg"
            />
          </div>

          <div className="lg:w-1/2 lg:order-1 lg:pe-16 xl:pe-22 max-lg:mt-10">
            <p className="text-xxl xl:text-h5">
              From open conversations to thoughtful benefits and a healthy
              work-life balance, we’ve created a space where people can truly do
              their best.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifeOverView;
