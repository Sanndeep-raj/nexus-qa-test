import { WidgetPlaceholder } from "streak/components";

const DigitalCommerceLayout = () => {
  console.info("Rendering DigitalCommerceLayout Layout");
  return (
    <html dir="ltr" lang="en">
      <head>
        <WidgetPlaceholder id="AppHead" type="AppHead" />
      </head>
      <body>
        <WidgetPlaceholder id="CommonHeader" type="CommonHeader" />
        <main id="main-content">
          <WidgetPlaceholder id="QaTestingBanner" type="QaTestingBanner" />
          <WidgetPlaceholder id="AnimationHelpers" type="AnimationHelpers" />
          <WidgetPlaceholder id="DigitalCommerceNav" type="DigitalCommerceNav" />
          <WidgetPlaceholder id="DigitalCommerceOverview" type="DigitalCommerceOverview" />
          <WidgetPlaceholder id="DataAnalyticsHighlights" type="DataAnalyticsHighlights" />
          <WidgetPlaceholder id="QaTestingOverview" type="QaTestingOverview" />
          <WidgetPlaceholder id="DigitalCommerceTechStack" type="DigitalCommerceTechStack" />
          <WidgetPlaceholder id="DigitalCommerceServiceProviders" type="DigitalCommerceServiceProviders" />
          <WidgetPlaceholder id="MobileAppChoose" type="MobileAppChoose" />
          <WidgetPlaceholder id="QaTestingProcess" type="QaTestingProcess" />
          <WidgetPlaceholder id="CaseStudyCarousal" type="CaseStudyCarousal" />
          <WidgetPlaceholder id="FAQ" type="FAQ" />
          <WidgetPlaceholder id="ServicesContact" type="ServicesContact" />
          <WidgetPlaceholder id="Blogs" type="Blogs" />
          <WidgetPlaceholder id="CommonFooter" type="CommonFooter" />
        </main>
        <WidgetPlaceholder id="AnalyticsHelpers" type="AnalyticsHelpers" />
      </body>
    </html>
  );
};

export default DigitalCommerceLayout;
