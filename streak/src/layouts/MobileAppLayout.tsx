/**
 * Copyright(c) 2025 Valoriz Digital Private Ltd.
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of Valoriz ("Confidential
 * Information"). You shall not disclose such Confidential Information and shall use it only in
 * accordance with the terms of the contract agreement you entered into with Valoriz.
 *
 * @author Ram S Madhav
 */
import { WidgetPlaceholder } from "streak/components";

const MobileAppLayout = () => {
  console.info("Rendering Mobile Applications Layout");
  return (
    <html dir="ltr" lang="en">
      <head>
        <WidgetPlaceholder id="AppHead" type="AppHead" />
      </head>
      <body>
        <WidgetPlaceholder id="CommonHeader" type="CommonHeader" />
        <main id="main-content">
          <WidgetPlaceholder id="AnimationHelpers" type="AnimationHelpers" />
          <WidgetPlaceholder id="QaTestingBanner" type="QaTestingBanner" />
          <WidgetPlaceholder id="MobileAppNav" type="MobileAppNav" />
          <WidgetPlaceholder id="QaTestingOverview" type="QaTestingOverview" />
          <WidgetPlaceholder id="QaTestingProcess" type="QaTestingProcess" />
          <WidgetPlaceholder id="DataAnalyticsHighlights" type="DataAnalyticsHighlights" />
          <WidgetPlaceholder id="MobileAppTech" type="MobileAppTech" />
          <WidgetPlaceholder id="MobileAppChoose" type="MobileAppChoose" />
          <WidgetPlaceholder id="CaseStudyCarousal" type="CaseStudyCarousal" />
          <WidgetPlaceholder id="FAQ" type="FAQ" />
          <WidgetPlaceholder id="ServicesContact" type="ServicesContact" />
          <WidgetPlaceholder id="QaTestingRelatedServices" type="QaTestingRelatedServices" />
          <WidgetPlaceholder id="Blogs" type="Blogs" />
          <WidgetPlaceholder id="CommonFooter" type="CommonFooter" />
        </main>
        <WidgetPlaceholder id="AnalyticsHelpers" type="AnalyticsHelpers" />
      </body>
    </html>
  );
};

export default MobileAppLayout;
