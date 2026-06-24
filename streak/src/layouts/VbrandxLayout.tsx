import { WidgetPlaceholder } from "streak/components";

const VbrandxLayout = () => {
  console.info("Rendering Vbrandx Layout");
  return (
    <html dir="ltr" lang="en">
      <head>
        <WidgetPlaceholder id="AppHead" type="AppHead" />
      </head>
      <body>
        <WidgetPlaceholder id="CommonHeader" type="CommonHeader" />
        <main id="main-content">
          <WidgetPlaceholder id="AnimationHelpers" type="AnimationHelpers" />
          <WidgetPlaceholder id="VbrandxBanner" type="VbrandxBanner" />
          <WidgetPlaceholder id="VbrandxAbout" type="VbrandxAbout" />
          <WidgetPlaceholder id="VbrandxFeatures" type="VbrandxFeatures" />
          <WidgetPlaceholder id="VbrandxImpact" type="VbrandxImpact" />
          <WidgetPlaceholder id="VbrandxWhy" type="VbrandxWhy" />
          <WidgetPlaceholder id="VbrandxInsights" type="VbrandxInsights" />
          <WidgetPlaceholder id="CaseStudyCarousal" type="CaseStudyCarousal" />
          <WidgetPlaceholder id="VbrandxFaq" type="VbrandxFaq" />
          <WidgetPlaceholder id="VbrandxProjectInMind" type="VbrandxProjectInMind" />
          <WidgetPlaceholder id="CommonFooter" type="CommonFooter" />
        </main>
        <WidgetPlaceholder id="AnalyticsHelpers" type="AnalyticsHelpers" />
      </body>
    </html>
  );
};

export default VbrandxLayout;
