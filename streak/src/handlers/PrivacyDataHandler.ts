import { getPrivacyContents } from "services/SanityServices";

const getPrivacyContentData = async () => {
  const response = await getPrivacyContents();
  return {
    CommonHeader: { isWhiteHeaderBg: true },
    AppHead: { seo: response?.seo, pathName: "/privacy-policy" },
    PrivacyContent: { contents: response?.policySections || [] },
  }
};

export default getPrivacyContentData;
