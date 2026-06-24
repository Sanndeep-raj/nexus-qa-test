import { WidgetPlaceholder } from "streak/components";

const DigitalMarketingLayout = () => {
  console.info("Rendering DigitalMarketingLayout Layout");
  return (
    <html dir="ltr" lang="en">
      <head>
        <meta id="mobile-breakpoint" name="mobile-breakpoint" content="1024" />
        <WidgetPlaceholder id="AppHead" type="AppHead" />
      </head>
      <body>
        <WidgetPlaceholder id="CommonHeader" type="CommonHeader" />
        <main id="main-content">
          <WidgetPlaceholder id="CloudModernizationBanner" type="CloudModernizationBanner" />
          <WidgetPlaceholder id="AnimationHelpers" type="AnimationHelpers" />
          <WidgetPlaceholder id="CloudModernizationNav" type="CloudModernizationNav" />
          <WidgetPlaceholder id="QaTestingOverview" type="QaTestingOverview" />
          <WidgetPlaceholder id="DigitalMarketingIndustry" type="DigitalMarketingIndustry" />
          <WidgetPlaceholder id="QaTestingProcess" type="QaTestingProcess" />
          <WidgetPlaceholder id="DigitalMarketingTech" type="DigitalMarketingTech" />
          <WidgetPlaceholder id="DigitalMarketingStrategy" type="DigitalMarketingStrategy" />
          <WidgetPlaceholder id="FAQ" type="FAQ" />
          <WidgetPlaceholder id="ServicesContact" type="ServicesContact" />
          <WidgetPlaceholder id="CommonFooter" type="CommonFooter" />
        </main>
        <WidgetPlaceholder id="AnalyticsHelpers" type="AnalyticsHelpers" />
      </body>
    </html>
  );
};

export default DigitalMarketingLayout;
