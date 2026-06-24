import { WidgetPlaceholder } from "streak/components";

const AboutLayout = () => {
  console.info("Rendering About Layout");
  return (
    <html dir="ltr" lang="en">
      <head>
        <WidgetPlaceholder id="AppHead" type="AppHead" />
      </head>
      <body>
        <WidgetPlaceholder id="CommonHeader" type="CommonHeader" />
        <WidgetPlaceholder id="AboutBanner" type="AboutBanner" />
        <WidgetPlaceholder id="AnimationHelpers" type="AnimationHelpers" />
        <WidgetPlaceholder id="AboutMission" type="AboutMission" />
        <WidgetPlaceholder id="AboutHistory" type="AboutHistory" />
        <WidgetPlaceholder id="AboutGrowth" type="AboutGrowth" />
        <WidgetPlaceholder id="AboutInnovations" type="AboutInnovations" />
        <WidgetPlaceholder id="AboutTeam" type="AboutTeam" />
        <WidgetPlaceholder id="AboutLeadership" type="AboutLeadership" />
        <WidgetPlaceholder id="AboutAwards" type="AboutAwards" />
        <WidgetPlaceholder id="JoinUsCarousel" type="JoinUsCarousel" />
        <WidgetPlaceholder id="Blogs" type="Blogs" />
        <WidgetPlaceholder id="CommonFooter" type="CommonFooter" />
        <WidgetPlaceholder id="AnalyticsHelpers" type="AnalyticsHelpers" />
      </body>
    </html>
  );
};

export default AboutLayout;
