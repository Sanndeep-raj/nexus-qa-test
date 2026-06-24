import { WidgetPlaceholder } from "streak/components";

const SitemapLayout = () => {
  console.info("Rendering Sitemap Layout");
  return (
    <html dir="ltr" lang="en">
      <head>
        <WidgetPlaceholder id="AppHead" type="AppHead" />
      </head>
      <body>
        <WidgetPlaceholder id="SitemapContent" type="SitemapContent" />
      </body>
    </html>
  );
};

export default SitemapLayout;
