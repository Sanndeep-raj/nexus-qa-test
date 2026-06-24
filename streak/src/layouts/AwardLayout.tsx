import { WidgetPlaceholder } from "streak/components";

const AwardLayout = () => {
  console.info("Rendering Service Layout");
  return (
    <html dir="ltr" lang="en">
      <head>
        <WidgetPlaceholder id="AppHead" type="AppHead" />
      </head>
      <body>
        <WidgetPlaceholder id="CommonHeader" type="CommonHeader" />
           <main id="main-content">
        <WidgetPlaceholder id="AwardsBanner" type="AwardsBanner" />
        <WidgetPlaceholder id="AwardsList" type="AwardsList" />
        <WidgetPlaceholder id="ServerClient" type="ServerClient" />
        <WidgetPlaceholder id="Blogs" type="Blogs" />
        <WidgetPlaceholder id="CommonFooter" type="CommonFooter" />
        </main>
        <WidgetPlaceholder id="AnimationHelpers" type="AnimationHelpers" />
        <WidgetPlaceholder id="AnalyticsHelpers" type="AnalyticsHelpers" />
      </body>
    </html>
  );
};

export default AwardLayout;
 