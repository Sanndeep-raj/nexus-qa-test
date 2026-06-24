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

const ContactLayout = () => {
  console.info("Rendering Contact Layout");

  return (
    <html dir="ltr" lang="en">
      <head>
        <WidgetPlaceholder id="AppHead" type="AppHead" />
      </head>
      <body>
        <WidgetPlaceholder id="CommonHeader" type="CommonHeader" />
        <main id="main-content">
          <WidgetPlaceholder id="ContactSide" type="ContactSide" />
          <WidgetPlaceholder id="Location" type="Location" />
        </main>
        <WidgetPlaceholder id="CommonFooter" type="CommonFooter" />
        <WidgetPlaceholder id="AnalyticsHelpers" type="AnalyticsHelpers" />
        <WidgetPlaceholder id="AnimationHelpers" type="AnimationHelpers" />
      </body>
    </html>
  );
};

export default ContactLayout;