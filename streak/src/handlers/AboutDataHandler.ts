import { getAboutPageContents } from "services/SanityServices";

export const getAboutData = async () => {
  const response = await getAboutPageContents();
  return {
    status: 200,
    AppHead: { seo: response?.seo, pathName: "/about" },
    AboutBanner: {
      isAboutPage: true,
      title: "Building the Future of Digital Possibilities",
      description: "We&rsquo;re more than a company, we&rsquo;re a collective of thinkers, doers, and dreamers. Our culture is the heartbeat of everything we create.",
      button: { url: "/contact", text: "Lets Talk" },
      slides: [
        {
          banner: "/images/about/about-banner-1.webp",
          poster: "/images/about/about-banner-poster.webp",
          thumb: "/images/about/about-banner-thumb-1.webp",
          keyvalue: 120,
          caption: `Skilled Professionals`,
        },
        {
          banner: "/images/about/about-banner-2.webp",
          thumb: "/images/about/about-banner-thumb-2.webp",
          keyvalue: 8,
          caption: `Trusted Partners`,
          partners: [
            { logo: "/images/partners/microsoft.svg", name: "microsoft" },
            { logo: "/images/partners/shopify-white.svg", name: "shopify" },
            { logo: "/images/partners/sanity.svg", name: "sanity" },
            { logo: "/images/partners/akeneo-white.svg", name: "akeneo" }
          ],
        },
        {
          banner: "/images/about/about-banner-3.webp",
          thumb: "/images/about/about-banner-thumb-3.webp",
          keyvalue: 3,
          caption: `Global Offices`,
        },
        {
          banner: "/images/about/about-banner-4.webp",
          thumb: "/images/about/about-banner-thumb-4.webp",
          keyvalue: 10,
          caption: `Years of Innovation`,
        },
        {
          banner: "/images/about/about-banner-5.webp",
          thumb: "/images/about/about-banner-thumb-5.webp",
          keyvalue: 20,
          caption: `Managed Brands`,
        },
      ]
    },
    JoinUsCarousel: {
      title: "Join Our Team",
      link: "/careers",
      isWhiteBg: false
    }
  };
};

export default getAboutData;
