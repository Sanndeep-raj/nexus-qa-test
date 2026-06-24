import { WidgetPlaceholder } from "streak/components";

const ServicesLayout = () => {
  console.info("Rendering Service Layout");
  return (
    <html dir="ltr" lang="en">
      <head>
        <WidgetPlaceholder id="AppHead" type="AppHead" />
      </head>
      <body>
        <WidgetPlaceholder id="CommonHeader" type="CommonHeader" />
        <WidgetPlaceholder id="AboutBanner" type="AboutBanner" />
        <WidgetPlaceholder id="AnimationHelpers" type="AnimationHelpers" />
        <WidgetPlaceholder id="DigitalCommerceSection" type="DigitalCommerceSection" />
        <WidgetPlaceholder id="CloudModernisationSection" type="CloudModernisationSection" />
        <WidgetPlaceholder id="MobileApplicationsSection" type="MobileApplicationsSection" />
        <WidgetPlaceholder id="DigitalExperienceSection" type="DigitalExperienceSection" />
        <WidgetPlaceholder id="QATestingSection" type="QATestingSection" />
        <WidgetPlaceholder id="OtherServices" type="OtherServices" />
        <WidgetPlaceholder id="ServicesHighlights" type="ServicesHighlights" />
        <WidgetPlaceholder id="HomeClients" type="HomeClients" />
        <WidgetPlaceholder id="HomeProjectInMind" type="HomeProjectInMind" />
        <WidgetPlaceholder id="CommonFooter" type="CommonFooter" />
        <WidgetPlaceholder id="AnalyticsHelpers" type="AnalyticsHelpers" />
      </body>
    </html>
  );
};

export default ServicesLayout;
