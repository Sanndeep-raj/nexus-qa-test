import { WidgetPlaceholder } from "streak/components";

const DigitalExperienceLayout = () => {
  console.info("Rendering DigitalExperience Layout");
  return (
    <html dir="ltr" lang="en">
      <head>
        <WidgetPlaceholder id="AppHead" type="AppHead" />
      </head>
      <body>
        <WidgetPlaceholder id="CommonHeader" type="CommonHeader" />
        <main id="main-content">
          <WidgetPlaceholder id="DigitalExperienceBanner" type="DigitalExperienceBanner" />
          <WidgetPlaceholder id="DigitalExperienceNav" type="DigitalExperienceNav" />
          <WidgetPlaceholder id="DigitalExperienceOverview" type="DigitalExperienceOverview" />
          <WidgetPlaceholder id="QaTestingOverview" type="QaTestingOverview" />
          <WidgetPlaceholder id="DigitalExperienceTrustedAllies" type="DigitalExperienceTrustedAllies" />
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
        <WidgetPlaceholder id="AnimationHelpers" type="AnimationHelpers" />

      </body>
    </html>
  );
};

export default DigitalExperienceLayout;
