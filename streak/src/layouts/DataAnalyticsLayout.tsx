import { WidgetPlaceholder } from "streak/components";

const QaTestingLayout = () => {
  console.info("Rendering Qa-Testing Layout");
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
          <WidgetPlaceholder id="DataAnalyticsNav" type="DataAnalyticsNav" />
          <WidgetPlaceholder id="DataAnalyticsOverview" type="DataAnalyticsOverview" />
          <WidgetPlaceholder id="QaTestingOverview" type="QaTestingOverview" />
          <WidgetPlaceholder id="DataAnalyticsHighlights" type="DataAnalyticsHighlights" />
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

export default QaTestingLayout;
