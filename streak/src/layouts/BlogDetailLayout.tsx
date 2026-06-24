import { WidgetPlaceholder } from "streak/components";

const BlogDetailLayout = () => {
  console.info("Rendering BlogDetail Layout");
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
          <WidgetPlaceholder id="BlogBanner" type="BlogBanner" />
          <WidgetPlaceholder id="BlogDetails" type="BlogDetails" />
          <WidgetPlaceholder id="SimilarArticles" type="SimilarArticles" />
          <WidgetPlaceholder id="CommonFooter" type="CommonFooter" />
        </main>
        <WidgetPlaceholder id="AnalyticsHelpers" type="AnalyticsHelpers" />
      </body>
    </html>
  );
};

export default BlogDetailLayout;
