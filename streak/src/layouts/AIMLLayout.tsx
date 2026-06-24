import { WidgetPlaceholder } from "streak/components";

const AIMLLayout = () => {
  console.info("Rendering Service Layout");
  return (
    <html dir="ltr" lang="en">
      <head>
        <WidgetPlaceholder id="AppHead" type="AppHead" />
      </head>
      <body>
        <WidgetPlaceholder id="CommonHeader" type="CommonHeader" />
           <main id="main-content">
        <WidgetPlaceholder id="AIMLBanner" type="AIMLBanner" />
        <WidgetPlaceholder id="AIMLNav" type="AIMLNav" />
        <WidgetPlaceholder id="AIMLOverview" type="AIMLOverview" />
        <WidgetPlaceholder id="AIMLTech" type="AIMLTech" />
        <WidgetPlaceholder id="AIMLTools" type="AIMLTools" />
        <WidgetPlaceholder id="AIMLServices" type="AIMLServices" />
        <WidgetPlaceholder id="AIMLProcess" type="AIMLProcess" />
        <WidgetPlaceholder id="CaseStudyCarousal" type="CaseStudyCarousal" />
        <WidgetPlaceholder id="FAQ" type="FAQ" />
        <WidgetPlaceholder id="ServicesContact" type="ServicesContact" />
        <WidgetPlaceholder id="AIMLRelatedServices" type="AIMLRelatedServices" />
        <WidgetPlaceholder id="Blogs" type="Blogs" />
        <WidgetPlaceholder id="CommonFooter" type="CommonFooter" />
        </main>
        <WidgetPlaceholder id="AnimationHelpers" type="AnimationHelpers" />
        <WidgetPlaceholder id="AnalyticsHelpers" type="AnalyticsHelpers" />
      </body>
    </html>
  );
};

export default AIMLLayout;
