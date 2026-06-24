import { getBlogDetailsPageContents } from "services/SanityServices";

export const getProductsPageContent = async (props: { slug: string }) => {
  const { slug } = props;
  const blogDetails = await getBlogDetailsPageContents(slug);

  return {
    status: 200,
    AppHead: { seo: blogDetails?.seo, pathName: `/blog/${slug}`, schema: blogDetails?.schemaMarkup },
    BlogBanner:{blogDetails},
    BlogDetails: { blogDetails:blogDetails?.blogDetailsSections },
    SimilarArticles: { similarBlogs: blogDetails?.similarBlogs }
  }
}
export default getProductsPageContent