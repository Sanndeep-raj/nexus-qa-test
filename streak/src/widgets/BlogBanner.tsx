import DomainListing from "./DomainListing";
import SanityImage from "@common/components/SanityImage";

export interface AuthorImage {
  _type: string;
  alt: string;
  asset: any;
}

export interface Author {
  authorImage: AuthorImage;
  name: string;
  role: string;
  _type: string;
}
export interface ResponsiveBannerImage {
  _type: string;
  alt: string;
  asset: any;
}

export interface ResponsiveBanner {
  desktop: ResponsiveBannerImage;
  mobile: ResponsiveBannerImage;
  _type: string;
}

export type Domain = string

export interface BlogDetailsSections {
  _type: string;
  widgets: any;
}

export interface BlogBannerData {
  responsiveBanner: ResponsiveBanner;
  badge?: string;
  title: string;
  domains: Domain[];
  author: Author;
  description: string;
}

export interface BlogBannerProps {
  data: {
    blogDetails: BlogBannerData;
  };
}
const BlogHero = (
  props:BlogBannerProps
) => {
      const responsiveBanner = props?.data?.blogDetails?.responsiveBanner;
  const badge = props?.data?.blogDetails?.badge;
  const title = props?.data?.blogDetails?.title;
  const domains = props?.data?.blogDetails?.domains;
  const author = props?.data?.blogDetails?.author;
  const description = props?.data?.blogDetails?.description;
  return (
    <section className="max-xl:mt-19 pb-12 xl:py-20 xxl:py-26">

      {/* Mobile Banner */}
      <div className="lg:hidden mb-6">
        <SanityImage
          src={responsiveBanner?.mobile}
          className="w-full"
          width={390}
          height={362}
          alt={responsiveBanner?.mobile?.alt}
          fetchPriority="high"
        />
      </div>

      <div className="container">
        <div className="pb-8 lg:pt-10 xxl:pt-0">

          {badge && (
            <span className="text-white bg-primary text-xs uppercase font-medium px-2 py-1 rounded">
              {badge}
            </span>
          )}

          <div className="grid xl:grid-cols-5 gap-x-30 mt-6 lg:mt-4">

            <div className="col-span-3">
              <h1 className="text-xxl xl:text-h3">{title}</h1>
            </div>

            <div className="col-span-2 flex flex-col justify-between">

              <div>
                <div className="flex items-center gap-4 mt-4 xl:mt-0">
                  <DomainListing items={domains} />
                </div>

                <p className="text-xxl max-xl:hidden mt-8 mb-2">
                  {description}
                </p>
              </div>

              {/* Author */}
              <div className="mt-6">
                <p className="text-gray-700 text-sm font-medium">
                  Written By
                </p>

                <div className="flex gap-4 mt-2">
                  <SanityImage
                    src={author?.authorImage}
                    width={48}
                    height={48}
                    className="rounded-full relative w-12 h-12 overflow-hidden"
                    alt={author?.authorImage?.alt}
                  />
                  <div>
                    <p className="text-sm font-medium">{author?.name}</p>
                    <p className="text-gray-700 text-sm font-medium">
                      {author?.role}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Divider mobile */}
      <div className="md:hidden border-b border-gray-500"></div>

      {/* Desktop Banner */}
      <div className="max-lg:hidden mt-4">
        <SanityImage
          src={responsiveBanner?.desktop}
          className="w-full"
          width={1110}
          height={493}
          alt={responsiveBanner?.desktop?.alt}
        />
      </div>

    </section>
  );
};

export default BlogHero;