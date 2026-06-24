import { WidgetPlaceholder } from "streak/components";
const CaseStudyDetailsLayout = () => {
  console.info("Rendering Case Study details Layout");
  return (
    <html dir="ltr" lang="en">
      <head>
        <WidgetPlaceholder id="AppHead" type="AppHead" />
      </head>
      <body>
        <WidgetPlaceholder id="CommonHeader" type="CommonHeader" />
        <WidgetPlaceholder id="AnimationHelpers" type="AnimationHelpers" />
         <main id="main-content">
        <WidgetPlaceholder id="CaseStudyBanner" type="CaseStudyBanner" />
        <WidgetPlaceholder id="CaseStudyOverview" type="CaseStudyOverview" />
        <WidgetPlaceholder id="CaseStudyGoal" type="CaseStudyGoal" />
        <WidgetPlaceholder id="CaseStudyChallenges" type="CaseStudyChallenges" />
        <WidgetPlaceholder id="CaseStudyProcess" type="CaseStudyProcess" />
        <WidgetPlaceholder id="CaseStudySolution" type="CaseStudySolution" />
         <WidgetPlaceholder id="CaseStudyImageReel" type="CaseStudyImageReel" />
        <WidgetPlaceholder id="CaseStudyTechnologies" type="CaseStudyTechnologies" />
        <WidgetPlaceholder id="CaseStudyImpact" type="CaseStudyImpact" />
        <WidgetPlaceholder id="CaseStudyConclusion" type="CaseStudyConclusion" />
        <WidgetPlaceholder id="SimilarCaseStudies" type="SimilarCaseStudies" />
        </main>
        <WidgetPlaceholder id="CommonFooter" type="CommonFooter" />
        <WidgetPlaceholder id="AnalyticsHelpers" type="AnalyticsHelpers" />
      </body>
    </html>
  );
};

export default CaseStudyDetailsLayout;
