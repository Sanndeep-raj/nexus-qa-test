import { WidgetPlaceholder } from "streak/components";
const CaseStudyLayout = () => {
  console.info("Rendering Case Study Layout");
  return (
    <html dir="ltr" lang="en">
      <head>
        <WidgetPlaceholder id="AppHead" type="AppHead" />
      </head>
      <body>
        <WidgetPlaceholder id="CommonHeader" type="CommonHeader" />
        <WidgetPlaceholder id="AnimationHelpers" type="AnimationHelpers" />
         <main id="main-content">
        <WidgetPlaceholder id="CaseStudyList" type="CaseStudyList" />
          </main>
        <WidgetPlaceholder id="CommonFooter" type="CommonFooter" />
        <WidgetPlaceholder id="AnalyticsHelpers" type="AnalyticsHelpers" />
      </body>
    </html>
  );
};

export default CaseStudyLayout;
