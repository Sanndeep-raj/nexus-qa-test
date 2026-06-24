/**
 * Copyright(c) 2025 Valoriz Digital Private Ltd.
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of Valoriz ("Confidential
 * Information"). You shall not disclose such Confidential Information and shall use it only in
 * accordance with the terms of the contract agreement you entered into with Valoriz.
 *
 * @author Vishakh B S
 */
import { WidgetPlaceholder } from "streak/components";

const CareerLayout = () => {
  console.info("Rendering Careers Layout");
  return (
    <html dir="ltr" lang="en">
      <head>
        <WidgetPlaceholder id="AppHead" type="AppHead" />
      </head>
      <body>
        <WidgetPlaceholder id="CommonHeader" type="CommonHeader" />
        <main id="main-content">
          <WidgetPlaceholder id="CareersBanner" type="CareersBanner" />
          <WidgetPlaceholder id="AnimationHelpers" type="AnimationHelpers" />
          <WidgetPlaceholder id="OpeningList" type="OpeningList" />
          <WidgetPlaceholder id="JoinUsCarousel" type="JoinUsCarousel" />
          <WidgetPlaceholder id="Location" type="Location" />
        </main>
        <WidgetPlaceholder id="CommonFooter" type="CommonFooter" />
        <WidgetPlaceholder id="AnalyticsHelpers" type="AnalyticsHelpers" />
      </body>
    </html>
  );
};

export default CareerLayout;
