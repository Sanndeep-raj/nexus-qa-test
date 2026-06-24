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

const LifeAtValorizLayout = () => {
  console.info("Rendering Life At Valoriz Layout");

  return (
    <html dir="ltr" lang="en">
      <head>
        <WidgetPlaceholder id="AppHead" type="AppHead" />
      </head>
      <body>
        <WidgetPlaceholder id="CommonHeader" type="CommonHeader" />
        <main id="main-content">
          <WidgetPlaceholder id="LifeBanner" type="LifeBanner" />
          <WidgetPlaceholder id="LifeOverView" type="LifeOverView" />
           <WidgetPlaceholder id="HomeHeroBanner" type="HomeHeroBanner" />
          <WidgetPlaceholder id="LifeInside" type="LifeInside" />
          <WidgetPlaceholder id="ServerClient" type="ServerClient" />
          <WidgetPlaceholder id="LifeVideo" type="LifeVideo" />
          <WidgetPlaceholder id="LifeVoice" type="LifeVoice" />
          <WidgetPlaceholder id="LifeEvents" type="LifeEvents" />
          <WidgetPlaceholder id="LifeWellnessHealth" type="LifeWellnessHealth" />
          <WidgetPlaceholder id="LifeWellnessMedical" type="LifeWellnessMedical" />
          <WidgetPlaceholder id="JoinUsCarousel" type="JoinUsCarousel"/>
        </main>
        <WidgetPlaceholder id="CommonFooter" type="CommonFooter" />
        <WidgetPlaceholder id="AnalyticsHelpers" type="AnalyticsHelpers" />
        <WidgetPlaceholder id="AnimationHelpers" type="AnimationHelpers" />
      </body>
    </html>
  );
};

export default LifeAtValorizLayout;