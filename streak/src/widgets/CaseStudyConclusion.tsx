/**
 * Copyright(c) 2025 Valoriz Digital Private Ltd.
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of Valoriz ("Confidential
 * Information"). You shall not disclose such Confidential Information and shall use it only in
 * accordance with the terms of the contract agreement you entered into with Valoriz.
 *
 * @author
 * Anagha Chandrababu
 */
import SanityImage from "@common/components/SanityImage";

type CaseStudy = {
  data: {
    conclusion: {
      _type: string;
      description: string;
      details: {
        _key: string;
        _type: string;
        description: string;
        media: { url?: string; alt?: string; _ref?: string; _type?: string };
        title: string;
      }[];
    } | null;
  };
  widgetId?: string;
  widgetType?: string;
  loadingStrategy?: string;
};

const CaseStudyConclusion = (props: any) => {
  const conclusion =
    props?.data?.conclusion ?? props?.data?.data?.conclusion ?? null;
  if (!conclusion) return null;

  return (
    <section className="bg-[image:url(/images/case-studies/bg-conclusion.webp)] bg-cover bg-no-repeat py-12 xl:py-20 xxl:py-26">
      <div className="container">
        <h2 className="text-h4 xl:text-h2">Conclusion</h2>
        <div className="md:w-5/12 mt-6">
          <p className="text-md xl:text-h5">{conclusion.description}</p>
        </div>
        <div className="flex max-md:flex-col gap-14 md:gap-20 xl:gap-30 mt-20">
          {conclusion.details?.length > 0 &&
            conclusion.details.map((detail: any) => (
              <div className="flex flex-col md:w-1/2" key={detail._key}>
                <div className="mb-8">
                  <SanityImage
                    src={detail.media}
                    width={319}
                    height={148}
                    alt={detail.media?.alt || ""}
                    className="max-w-full"
                  />
                </div>
                <div>
                  <h3 className="text-xxl xl:text-h5">{detail.title}</h3>
                  <p className="xl:text-md mt-2">{detail.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyConclusion;
