import { WidgetPlaceholder } from "streak/components";

const HomeLayout = () => {
  console.info("Rendering Home Layout");
  return (
    <html dir="ltr" lang="en">
      <head>
        <WidgetPlaceholder id="AppHead" type="AppHead" />
      </head>
      <body>
        <WidgetPlaceholder id="CommonHeader" type="CommonHeader" />
        <WidgetPlaceholder id="HomeHeroBanner" type="HomeHeroBanner" />
        <WidgetPlaceholder id="AnimationHelpers" type="AnimationHelpers" />
        <WidgetPlaceholder id="HomeStackedWidgets" type="HomeStackedWidgets" />
        <WidgetPlaceholder id="HomeClients" type="HomeClients" />
        <WidgetPlaceholder id="HomeWhyValoriz" type="HomeWhyValoriz" />
        <WidgetPlaceholder id="HomeGoodHands" type="HomeGoodHands" />
        <WidgetPlaceholder id="HomePartners" type="HomePartners" />
        <WidgetPlaceholder id="HomeCaseStudy" type="HomeCaseStudy" />
        <WidgetPlaceholder id="HomeProducts" type="HomeProducts" />
        <WidgetPlaceholder id="HomeProjectInMind" type="HomeProjectInMind" />
        <WidgetPlaceholder id="CommonFooter" type="CommonFooter" />
        <WidgetPlaceholder id="AnalyticsHelpers" type="AnalyticsHelpers" />
      </body>
    </html>
  );
};

export default HomeLayout;
