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
import { hasArrayElements } from "utils/commonUtils";
import renderPortableText from "@common/components/PortableText";

type ResponsiveBanner = {
  _type: string;
  desktop?: { url?: string; alt?: string; _type?: string };
  mobile?: { url?: string; alt?: string; _type?: string };
};

type OverviewData = {
  _type: string;
  category?: string;
  description?: any[];
  language?: string;
  launchDate?: string;
  responsiveBanner?: ResponsiveBanner;
  servicesProvided?: string[];
  system?: string;
  timeScale?: string;
};

type CaseStudyOverviewProps = {
  data: {
    overview?: OverviewData | null;
    data?: {
      overview?: OverviewData | null;
    };
  };
};

const CaseStudyOverview = (props: CaseStudyOverviewProps) => {
  const overview = props?.data?.overview ?? props?.data?.data?.overview ?? null;
  if (!overview) return null;

  const parts = overview?.language?.split("/") || [];
  const firstSection =
    parts.slice(0, 2).join(" / ") + (parts.length > 2 ? " /" : "");
  const secondSection = parts.slice(2).join(" / ");

  return (
    <section className="relative text-black bg-white overflow-hidden py-12 xl:py-20 xxl:py-26">
      <div className="container">
        <h2 className="text-h4 xl:text-h2">Overview</h2>
        <div className="lg:flex lg:gap-[130px] mt-8 lg:mt-12">
          <div className="lg:flex lg:flex-col lg:justify-between lg:w-1/2 xl:flex-[0_0_640px] max-lg:mt-4 lg:order-2">
            <div>
              <SanityImage
                src={overview?.responsiveBanner?.desktop}
                width={800}
                height={661}
                alt={overview?.responsiveBanner?.desktop?.alt}
                className="w-full max-xl:hidden rounded-lg"
              />
              <SanityImage
                src={overview?.responsiveBanner?.mobile}
                width={800}
                height={783}
                alt={overview?.responsiveBanner?.mobile?.alt}
                className="w-full xl:hidden rounded-lg"
              />
            </div>
            {hasArrayElements(overview?.servicesProvided) && (
              <div className="mt-14 max-lg:hidden">
                <h3 className="text-xxl xl:text-h5">Services Provided</h3>
                <div className="flex flex-wrap gap-6 xl:text-md mt-4">
                  {overview.servicesProvided.map((service) => (
                    <div
                      className="border border-black p-4"
                      key={service}
                    >
                      {service}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="lg:w-1/2 xl:w-auto max-lg:mt-8 lg:order-1">
            <div
              className="text-md xl:text-xxl space-y-8"
              dangerouslySetInnerHTML={{
                __html: renderPortableText(overview?.description || []),
              }}
            />

            <div className="xl:text-md mt-8 xl:mt-14">
              {overview?.language && (
                <div className="flex justify-between gap-4 border-b border-gray-500 last:border-b-0 py-6 last:pb-0">
                  <div>Language</div>
                  <div>
                    <p>{firstSection}</p>
                    <p>{secondSection}</p>
                  </div>
                </div>
              )}

              {overview?.timeScale && (
                <div className="flex justify-between gap-4 border-b border-gray-500 last:border-b-0 py-6 last:pb-0">
                  <div>Timescale</div>
                  <div>
                    <p>{overview?.timeScale}</p>
                  </div>
                </div>
              )}

              {overview?.launchDate && (
                <div className="flex justify-between gap-4 border-b border-gray-500 last:border-b-0 py-6 last:pb-0">
                  <div>Launch Date</div>
                  <div>
                    <p>{overview?.launchDate}</p>
                  </div>
                </div>
              )}

              {overview?.category && (
                <div className="flex justify-between gap-4 border-b border-gray-500 last:border-b-0 py-6 last:pb-0">
                  <div>Category</div>
                  <div>
                    <p>{overview?.category}</p>
                  </div>
                </div>
              )}

              {overview?.system && (
                <div className="flex justify-between gap-4 border-b border-gray-500 last:border-b-0 py-6 last:pb-0">
                  <div>System</div>
                  <div>
                    <p>{overview?.system}</p>
                  </div>
                </div>
              )}
            </div>

            {hasArrayElements(overview?.servicesProvided) && (
              <div className="mt-14 lg:hidden">
                <h3 className="text-xxl xl:text-h5">Services Provided</h3>
                <div className="flex flex-wrap gap-6 xl:text-md mt-4">
                  {overview.servicesProvided.map((service) => (
                    <div
                      className="border border-black p-4"
                      key={service}
                    >
                      {service}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyOverview;
