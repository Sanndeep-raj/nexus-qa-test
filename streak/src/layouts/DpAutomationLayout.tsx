import { WidgetPlaceholder } from "streak/components";

const DpAutomationLayout = () => {
  console.info("Rendering DpAutomationLayout Layout");
  return (
    <html dir="ltr" lang="en">
      <head>
        <meta id="mobile-breakpoint" name="mobile-breakpoint" content="1024" />
        <WidgetPlaceholder id="AppHead" type="AppHead" />
      </head>
      <body>
        <WidgetPlaceholder id="CommonHeader" type="CommonHeader" />
        <main id="main-content">
          <WidgetPlaceholder id="QaTestingBanner" type="QaTestingBanner" />
          <WidgetPlaceholder id="AnimationHelpers" type="AnimationHelpers" />
          <WidgetPlaceholder id="DpAutomationNav" type="DpAutomationNav" />
          <WidgetPlaceholder id="DpAutomationOverview" type="DpAutomationOverview" />
          <WidgetPlaceholder id="DataAnalyticsHighlights" type="DataAnalyticsHighlights" />
          <WidgetPlaceholder id="QaTestingOverview" type="QaTestingOverview" />
          <WidgetPlaceholder id="DpAutomationTech" type="DpAutomationTech" />
          <WidgetPlaceholder id="MobileAppChoose" type="MobileAppChoose" />
          <WidgetPlaceholder id="QaTestingProcess" type="QaTestingProcess" />
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

export default DpAutomationLayout;
