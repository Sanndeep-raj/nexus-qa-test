/**
 * Copyright(c) 2025 Valoriz Digital Pvt. Ltd.
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of Valoriz ("Confidential
 * Information"). You shall not disclose such Confidential Information and shall use it only in
 * accordance with the terms of the contract agreement you entered into with Valoriz.
 *
 * @author Ram S Madhav
 */

export interface StepItem {
  step: number;
  title: string;
  description: string;
  img: string;
  imgSm: string;
  align?: "left" | "right";
}

export interface ProcessSectionProps {
  id?: string;
  heading?: string;
  subHeading?: string;
  bgImage?: string;
  steps?: StepItem[];
  data?: {
    id?: string;
    heading: string;
    subHeading: string;
    bgImage?: string;
    steps: StepItem[];
  };
}


const ProcessSection = (props: ProcessSectionProps) => {
  const {
    id = props?.data?.id ?? "process",
    heading = props?.data?.heading ?? "",
    subHeading = props?.data?.subHeading ?? "",
    bgImage = props?.data?.bgImage ?? "/images/bg/bg-services.webp",
    steps = props?.data?.steps ?? props?.steps ?? [],
  } = props;

  return (
    <section
      id={id}
      className="relative py-12 xl:py-20 xxl:py-26 bg-contain bg-no-repeat border-b"
      style={{ backgroundImage: `url('${bgImage}')` }}
    >
      <div
        className="absolute top-0 bottom-0 left-1/2 w-2 h-full max-lg:hidden"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, #AEAEAE, #AEAEAE 3px, transparent 3px, transparent 10px)",
        }}
      />

      <div className="container pointer-events-none">
        {heading && <h1 className="text-xxl xl:text-h4">{heading}</h1>}
        {subHeading && (
          <h1 className="text-primary text-h4 xl:text-h2 mt-2 mb-10 lg:mb-26">
            {subHeading}
          </h1>
        )}

        {steps.map((item, index) => {
          const isLeft = item.align === "left";

          return (
            <div
              key={index}
              className="lg:flex lg:items-start lg:gap-18 mb-8 lg:mb-18 last:mb-0"
            >
              {isLeft && (
                <div className="lg:flex lg:flex-col lg:items-end lg:gap-6 lg:w-1/2 lg:pe-2">
                  <StepCard item={item} />
                </div>
              )}

              <StepIndicator step={item.step} align={item.align} />

              {!isLeft && (
                <div className="lg:flex lg:flex-col lg:gap-6 lg:w-1/2 lg:ps-2">
                  <StepCard item={item} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

const StepCard = ({ item }: { item: StepItem }) => (
  <>
    <div className="relative lg:w-[420px] lg:h-[152px] rounded-lg max-lg:mb-6 overflow-hidden before:absolute before:right-0 before:top-0 before:w-full before:h-screen before:bg-gradient-process before:z-10">
      <picture>
        {/* Desktop (lg and up) */}
        <source media="(min-width: 1024px)" srcSet={item.img} />

        {/* Mobile (below lg) */}
        <source media="(max-width: 1023px)" srcSet={item.imgSm} />

        {/* Fallback */}
        <img
          src={item.img}
          alt={item.title}
          className="w-full"
          loading="lazy"
        />
      </picture>
      <span className="absolute left-0 top-0 flex text-center items-center lg:justify-center w-full h-full text-white text-xxl font-semibold p-8 lg:p-4 z-20 whitespace-pre-line">
        {item.title}
      </span>
    </div>

    <p
      className={
        item.align === "left" ? "lg:text-end xl:text-md" : "xl:text-md"
      }
    >
      {item.description}
    </p>
  </>
);

const StepIndicator = ({
  step,
  align,
}: {
  step: number;
  align?: "left" | "right";
}) => (
  <div className="lg:w-1/2 max-lg:hidden">
    <div className={`relative ${align === "right" ? "text-end" : ""}`}>
      <div
        className={`absolute ${align === "right" ? "-right-19" : "-left-17"
          } top-[75px] -translate-y-1/2 flex items-center gap-1`}
      >
        {align === "right" ? (
          <>
            <span className="w-7 h-[3px] bg-primary" />
            <span className="w-[9px] h-[9px] border-[3px] border-primary rounded-full" />
          </>
        ) : (
          <>
            <span className="w-[9px] h-[9px] border-[3px] border-primary rounded-full" />
            <span className="w-7 h-[3px] bg-primary" />
          </>
        )}
      </div>

      <p
        className={`absolute ${align === "right" ? "right-0" : "left-0"
          } top-[65px] text-[#AEAEAE] text-sm font-semibold`}
      >
        STEP {step}
      </p>
    </div>
  </div>
);

export default ProcessSection;
