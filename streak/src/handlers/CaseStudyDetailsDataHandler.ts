import { getCaseStudyDetailsPageContents } from "services/SanityServices";

export const getCaseStudyDetailsPageData = async (props: { slug: string }) => {
  const { slug } = props;
  const response = await getCaseStudyDetailsPageContents(slug);
  return {
    status: 200,
    AppHead: {
      seo: response?.seo || null,
      pathName: `/case-study/${slug}`,
    },
    SimilarCaseStudies: {
      similarCaseStudies: response?.similarCaseStudies || null,
    },
    CaseStudyBanner: {
      banner: response?.banner || null,
      title: response?.title || null,
    },
    CaseStudyConclusion: {
      data: response?.conclusion ? { conclusion: response.conclusion } : { conclusion: null },
    },
    CaseStudyChallenges: {
      data: response?.challenges ? { challenges: response.challenges } : { challenges: null },
    },
    CaseStudyTechnologies: {
      data: response?.technology ? { technologies: response.technology } : { technologies: null },
    },
    CaseStudyImpact: {
      data: response?.impact ? { impact: response.impact } : { impact: null },
    },
    CaseStudyGoal: {
     data: response?.goals ? { goals: response.goals } : { goals: null },
},
    CaseStudyImageReel: {
      data: response?.imageReel ? { imageReel: response.imageReel } : { imageReel: null },
    },
    CaseStudyOverview: {
      data: response?.overview ? { overview: response.overview } : { overview: null },
    },
    CaseStudyProcess: {
      data: response?.process ? { process: response.process } : { process: null },
    },
    CaseStudySolution: {
      data: response?.solution ? { solution: response.solution } : { solution: null },
    },

  };
};

export default getCaseStudyDetailsPageData;