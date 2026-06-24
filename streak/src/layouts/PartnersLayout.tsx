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
import { WidgetPlaceholder } from "streak/components";

const PartnersLayout = () => {
  console.info("Rendering Partners Layout");

  return (
    <html dir="ltr" lang="en">
      <head>
        <link rel="preload" href="/fonts/NeueHaasDisplay-Mediu.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
        <link rel="preload" href="/fonts/NeueHaasDisplay-Roman.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
        <link rel="preload" href="/fonts/NeueHaasDisplay-Light.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
        <WidgetPlaceholder id="AppHead" type="AppHead" />
      </head>
      <body>
        <WidgetPlaceholder id="CommonHeader" type="CommonHeader" />
        <main id="main-content">
          <WidgetPlaceholder id="PartnersBanner" type="PartnersBanner" />
          <WidgetPlaceholder id="Partners" type="Partners" />
          <WidgetPlaceholder id="WhyPartner" type="WhyPartner" />
          <WidgetPlaceholder id="PartnersEnquiry" type="PartnersEnquiry" />
        </main>
        <WidgetPlaceholder id="CommonFooter" type="CommonFooter" />
        <WidgetPlaceholder id="AnalyticsHelpers" type="AnalyticsHelpers" />
        <WidgetPlaceholder id="AnimationHelpers" type="AnimationHelpers" />
      </body>
    </html>
  );
};

export default PartnersLayout;