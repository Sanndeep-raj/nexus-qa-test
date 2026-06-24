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

const ClientsBanner = () => {
  return (
    <section
      style={{ backgroundImage: "url('/images/clients/clients-banner.webp')" }}
      // eslint-disable-next-line max-len
      className="bg-black relative flex flex-col justify-center min-h-screen bg-cover bg-center before:absolute before:left-0 before:top-0 before:bottom-0 before:w-full before:h-full before:bg-black/85 before:z-10 py-12 xl:py-20 xxl:py-26"
    >
      <div className="container relative z-20">
        <div className="lg:flex lg:items-center lg:justify-between lg:gap-30">
          <div className="lg:w-1/2">
            <h1 className="text-h4 xl:text-h1 text-primary-light leading-tight">
              Our Clients
            </h1>
          </div>

          <div className="lg:w-1/2 max-lg:mt-16">
            <img
              src="/images/clients/clients-image.webp"
              width={584}
              height={480}
              alt="Clients Image"
              className="w-full max-xl:hidden"
              fetchPriority="high"
            />
            <img
              src="/images/clients/clients-image-sm.webp"
              width={327}
              height={381}
              alt="Clients Image Small"
              className="w-full xl:hidden"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsBanner;
