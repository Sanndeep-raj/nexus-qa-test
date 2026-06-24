import { getSubProductsContent } from "services/SanityServices";
import { ourProductsKeyMapping } from "utils/constants";
export default async function getVbrandxData() {
  const { product } =
    (await getSubProductsContent(ourProductsKeyMapping.VBRANDX)) || {};
  return {
    status: 200,
    AppHead: { seo: product?.seo, pathName: "/vbrandx" },
  }
}