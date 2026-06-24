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

type ResponsiveImageType = {
  _type: string;
  alt?: string;
  asset?: {
    _ref?: string;
    _type?: string;
  };
};

type ImageReelData = {
  _type: string;
  desktop?: ResponsiveImageType;
  mobile?: ResponsiveImageType;
};

type CaseStudyImageReelProps = {
  data: {
    imageReel?: ImageReelData | null;
    data?: {
      imageReel?: ImageReelData | null;
    };
  };
};

const CaseStudyImageReel = (props: CaseStudyImageReelProps) => {
  const imageReel =
    props?.data?.imageReel ?? props?.data?.data?.imageReel ?? null;
  if (!imageReel) return null;

  return (
    <section className="bg-black">
      <SanityImage
        src={imageReel?.desktop}
        width={1920}
        height={1067}
        alt={imageReel?.desktop?.alt}
        className="w-full max-md:hidden"
      />
      <SanityImage
        src={imageReel?.mobile}
        width={800}
        height={900}
        alt={imageReel?.mobile?.alt}
        className="w-full md:hidden"
      />
    </section>
  );
};

export default CaseStudyImageReel;
