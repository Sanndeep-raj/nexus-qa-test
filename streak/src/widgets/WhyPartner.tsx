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

import CardCollaborate from "./CardCollaborate";
import CardExpandService from "./CardExpandService";
import CardSharedSuccess from "./CardSharedSuccess";
import CardTechSupport from "./CardTechSupport";
import WhyPartnerSm from "./WhyPartnerSm";

const WhyPartnerLayout = () => {
  return (
    <section className="text-white bg-black py-12 xl:py-20 xxl:py-26 overflow-hidden">
      <div className="container">
        <div className="xl:w-1/2 mb-14 xl:mb-22">
          <h3 className="text-h4 xl:text-h2">Why Partner With Us?</h3>
          <p className="text-xxl xl:text-h5 mt-8">
            You’ll get hands-on support, smart strategy, and the speed to stay
            ahead
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 max-xl:hidden">
          <div className="flex flex-col gap-26">
            <CardCollaborate />
            <CardTechSupport />
            <CardExpandService />
            <CardSharedSuccess />
          </div>
        </div>
        <div className="mt-14 xl:hidden">
          <WhyPartnerSm />
        </div>
      </div>
    </section>
  );
};

export default WhyPartnerLayout;
