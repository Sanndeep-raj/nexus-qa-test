import { WidgetPlaceholder } from "streak/components";

const ProductLayout = () => {
  console.info("Rendering product Layout");
  return (
    <html dir="ltr" lang="en">
      <head>
        <link rel="preload" href="/fonts/NeueHaasDisplay-Mediu.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
        <link rel="preload" href="/fonts/NeueHaasDisplay-Roman.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
        <link rel="preload" href="/fonts/NeueHaasDisplay-Light.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
        <WidgetPlaceholder id="AppHead" type="AppHead" />
      </head>
      <body>
        <WidgetPlaceholder id="CommonHeader" type="CommonHeader" />
        <main id="main-content">
          <WidgetPlaceholder id="ProductsBanner" type="ProductsBanner" />
          <WidgetPlaceholder id="AnimationHelpers" type="AnimationHelpers" />
          <WidgetPlaceholder id="ProductsShopsphere" type="ProductsShopsphere" />
          <WidgetPlaceholder id="ProductsStreak" type="ProductsStreak" />
          <WidgetPlaceholder id="ProductsKnitrix" type="ProductsKnitrix" />
          <WidgetPlaceholder id="ProductsVBrandx" type="ProductsVBrandx" />
          <WidgetPlaceholder id="HomePartners" type="HomePartners" />
          <WidgetPlaceholder id="ProductsGoodHands" type="ProductsGoodHands" />
          <WidgetPlaceholder id="ProductsEnquiry" type="ProductsEnquiry" />
          <WidgetPlaceholder id="CommonFooter" type="CommonFooter" />
        </main>
        <WidgetPlaceholder id="AnalyticsHelpers" type="AnalyticsHelpers" />
      </body>
    </html>
  );
};

export default ProductLayout;
