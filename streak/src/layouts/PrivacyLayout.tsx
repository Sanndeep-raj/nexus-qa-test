import { WidgetPlaceholder } from "streak/components";

const PrivacyLayout = () => {
  console.info("Rendering Privacy Layout");
  return (
    <html dir="ltr" lang="en">
      <head>
        <WidgetPlaceholder id="AppHead" type="AppHead" />
      </head>
      <body role="main">
        <WidgetPlaceholder id="CommonHeader" type="CommonHeader" />
        <WidgetPlaceholder id="PrivacyContent" type="PrivacyContent" />
        <WidgetPlaceholder id="AnimationHelpers" type="AnimationHelpers" />
        <WidgetPlaceholder id="CommonFooter" type="CommonFooter" />
        <WidgetPlaceholder id="AnalyticsHelpers" type="AnalyticsHelpers" />
      </body>
    </html>
  );
};

export default PrivacyLayout;
