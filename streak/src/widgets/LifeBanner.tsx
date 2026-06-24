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

const LifeBanner = () => {
  return (
    <section className="relative flex items-center justify-center min-h-[532px] max-md:min-h-screen bg-black overflow-hidden">
      <img
        src="/images/careers/about-banner-1.webp"
        alt="Life at Valoriz banner"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/70 z-10" />
      <div className="container relative z-20">
        <div className="md:w-8/12 text-white text-center mx-auto">
          <h1 className="text-h4 xl:text-h1 text-primary-light leading-tight">
            Life @ Valoriz
          </h1>
          <h2 className="text-md xl:text-xxl mt-8 xl:mt-6">
            We don&apos;t believe in hierarchy or job titles getting in the way.
            Everyone here is on equal footing, and that&apos;s how we like it.
            We work together, laugh together, and celebrate every step as a team.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default LifeBanner;
