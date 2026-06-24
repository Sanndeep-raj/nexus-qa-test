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

const CardExpandService = () => {
  return (
    <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between h-full rounded-lg overflow-hidden">
      <div className="xl:w-2/5 xl:order-2">
        <img
          src="/images/partners/partners-3.webp"
          width={528}
          height={332}
          alt="Expand your service offerings large view"
          className="h-full max-xl:hidden rounded-lg"
          loading="lazy"
        />
        <img
          src="/images/partners/partners-sm-3.webp"
          width={312}
          height={333}
          alt="Expand your service offerings small view"
          className="w-full xl:hidden rounded-lg h-auto"
          loading="lazy"
        />
      </div>
      <div className="max-xl:flex-1 py-8 xl:py-0 max-xl:h-full xl:w-1/2">
        <div className="flex justify-between flex-col h-full xl:w-[90%]">
          <h4 className="text-h5 xl:text-h4">
            Expand Your Service Offerings &amp; Reach
          </h4>
          <p className="text-md xl:text-xxl mt-6 xl:mt-8">
            We plug into your process, not disrupt it, making it easier to offer
            more, deliver better, and reach new markets with confidence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardExpandService;
