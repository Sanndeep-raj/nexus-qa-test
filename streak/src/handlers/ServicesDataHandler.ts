import { getServicePageContents } from "services/SanityServices";

export const getServicesContents = async () => {
  const response = await getServicePageContents();
  return {
    status: 200,
    AppHead: { seo: response?.seo, pathName: "/services" },
    AboutBanner: {
      title: "Here&apos;s What<br /> We Can Do<br /> For You",
      slides: [
        {
          banner: "/images/services/service-banner-1.webp",
          poster: "/images/services/service-banner-poster-1.webp",
          thumb: "/images/services/service-banner-thumb-1.webp",
          keyvalue: `Digital Commerce​​`,
        },
        {
          banner: "/images/services/service-banner-2.webp",
          thumb: "/images/services/service-banner-thumb-2.webp",
          keyvalue: `Cloud Modernisation`,
        },
        {
          banner: "/images/services/service-banner-3.webp",
          thumb: "/images/services/service-banner-thumb-3.webp",
          keyvalue: `Mobile Applications`,
        }
      ]
    },
    HomeClients: {
      isBlackBg: true,
      clients: [
        { logo: "/images/clients/alfuttaim-logo.svg", client: "alfuttaim" },
        { logo: "/images/clients/noon-logo-white.svg", client: "noon" },
        { logo: "/images/clients/teleflora-logo.svg", client: "teleflora" },
        { logo: "/images/clients/magrabi-logo-white.svg", client: "magrabi" },
        { logo: "/images/clients/fenix-logo-white.svg", client: "fenix" },
        { logo: "/images/clients/m&s-logo-white.svg", client: "mns" },
        { logo: "/images/clients/toysrus.svg", client: "toysrus" },
        { logo: "/images/clients/doctorM-logo-white.svg", client: "doctorM" },
        { logo: "/images/clients/american-greetings-logo.svg", client: "american-greetings" },
        { logo: "/images/clients/primus-logo.svg", client: "primus" },
        { logo: "/images/clients/watsons-logo.svg", client: "watsons" },
        { logo: "/images/clients/fjall-raven-logo.svg", client: "fjall-raven" },
        { logo: "/images/clients/han-wag-logo.svg", client: "han-wag" },
        { logo: "/images/clients/ace-logo.svg", client: "ace" },
        { logo: "/images/clients/kiabi-logo-white.svg", client: "kiabi" },
      ],
    }
  };
};

export default getServicesContents;
