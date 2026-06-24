import { getHomePageContents } from "services/SanityServices";

export const getHomeData = async () => {
  const response = await getHomePageContents();
  return {
    status: 200,
    AppHead: {
      seo: response?.seo,
      schema: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Valoriz Digital",
        "url": "https://valoriz.com/",
        "logo": "https://valoriz.com/images/valoriz-logo-white.svg",
        "sameAs": [
          "https://www.facebook.com/valorizdigital/",
          "https://x.com/valorizdigital",
          "https://www.instagram.com/valorizdigital/?hl=en",
          "https://www.linkedin.com/company/valoriz-digital/?originalSubdomain=in"
        ]
      }),
    },
    HomeWhyValoriz: response?.whyValoriz,
    HomeGoodHands: response?.goodHands,
    HomeClients: {
      isBlackBg: false,
      clients: [
        { logo: "/images/clients/alfuttaim-logo.svg", client: "alfuttaim" },
        { logo: "/images/clients/noon-logo.svg", client: "noon" },
        { logo: "/images/clients/teleflora-logo.svg", client: "teleflora" },
        { logo: "/images/clients/magrabi-logo.svg", client: "magrabi" },
        { logo: "/images/clients/fenix-logo.svg", client: "fenix" },
        { logo: "/images/clients/m&s-logo.svg", client: "mns" },
        { logo: "/images/clients/toysrus.svg", client: "toysrus" },
        { logo: "/images/clients/doctorM-logo.svg", client: "doctorM" },
        { logo: "/images/clients/american-greetings-logo.svg", client: "american-greetings" },
        { logo: "/images/clients/primus-logo.svg", client: "primus" },
        { logo: "/images/clients/watsons-logo.svg", client: "watsons" },
        { logo: "/images/clients/fjall-raven-logo.svg", client: "fjall-raven" },
        { logo: "/images/clients/han-wag-logo.svg", client: "han-wag" },
        { logo: "/images/clients/ace-logo.svg", client: "ace" },
        { logo: "/images/clients/kiabi-logo.svg", client: "kiabi" },
        { logo: "/images/clients/kccna-logo.webp", client: "kccna" },
      ],
    },
  };
};

export default getHomeData;
