import { getProductsPageContents } from "services/SanityServices";
export const getProductsPageContent = async () => {
  const response = await getProductsPageContents();

  return {
    status: 200,
    AppHead: { seo: response?.seo,pathName: "/products" },
    ProductsGoodHands: [
      {
        "_key": "goodhand_1",
        "quote": "REWARDING ASSOCIATION",
        "title": "Teleflora has been partnering with Valoriz since 2015 and it has has been a very rewarding association. Team Valoriz played an important role.",
        "author": "Praveen Kumar P",
        "role": "Manager - Web Application Development",
        "logo": {
          "_type": "image",
          "alt": "Teleflora Logo",
          "url": "/images/clients/teleflora-color.svg"
        },
        "backgroundGradient": {
          "gradientAngle": 216,
          "gradientStart": { "hex": "#171717" },
          "gradientMiddle": { "hex": "#171717" },
          "gradientEnd": { "hex": "#F249C8" }
        }
      },
      {
        "_key": "goodhand_2",
        "quote": "BRILLIRANT SUPPORT",
        "title": "It was a great pleasure to be associated with Valoriz and experience some brilliant support in delivering IT services to our key customers.",
        "author": "Sambit Rout",
        "role": "VP-Digital",
        "logo": {
          "_type": "image",
          "alt": "Bluerose logo",
          "url": "/images/clients/blue-rose.svg"
        },
        "backgroundGradient": {
          "gradientAngle": 216,
          "gradientStart": { "hex": "#171717" },
          "gradientMiddle": { "hex": "#171717" },
          "gradientEnd": { "hex": "#1B67A5" }
        }
      }
    ]
  }
};


export default getProductsPageContent;
