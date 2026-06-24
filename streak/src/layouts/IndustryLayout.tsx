import { WidgetPlaceholder } from "streak/components";

const IndustryLayout = () => {
  console.info("Rendering Industry Layout");
  return (
    <html dir="ltr" lang="en">
      <head>
        <WidgetPlaceholder id="AppHead" type="AppHead" />
      </head>
      <body>
        <WidgetPlaceholder id="CommonHeader" type="CommonHeader" />
        <main id="main-content">
          <WidgetPlaceholder id="AboutBanner" type="AboutBanner" />
          <WidgetPlaceholder id="AnimationHelpers" type="AnimationHelpers" />
          <WidgetPlaceholder id="Industry" type="Industry" />
          <WidgetPlaceholder id="ProductsGoodHands" type="ProductsGoodHands" />
          <WidgetPlaceholder id="Blogs" type="Blogs" />
          <WidgetPlaceholder id="CommonFooter" type="CommonFooter" />
        </main>
        <WidgetPlaceholder id="AnalyticsHelpers" type="AnalyticsHelpers" />
      </body>
    </html>
  );
};

export default IndustryLayout;
