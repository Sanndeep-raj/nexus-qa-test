export default async (request, context) => {
  const url = new URL(request.url);

  const referer = request?.headers?.get("referer") ?? null;
  const refererUrl = referer ? new URL(referer) : null;

  const streakPaths = new Set([
    "/",
    "/about",
    "/about/",
    "/services",
    "/services/",
    "/products",
    "/products/",
    "/careers",
    "/careers/",
    "/careers-apply",
    "/careers-apply/senior-python-developer",
    "/careers-apply/technical-architect-apply",
    "/careers-apply/digital-marketing-executive",
    "/contact",
    "/contact/",
    "/assets/js/asset-worker.js",
    "/case-studies",
    "/case-studies/",
    "/case-studies/quick-b2c-e-commerce-launch-using-shopify/",
    "/case-study/transforming-b2c-retail-brand-experience-platform-with-sanity",
    "/case-study/transforming-b2c-retail-brand-experience-platform-with-sanity/",
    "/partners",
    "/partners/",
    "/industry",
    "/industry/",
    "/life-at-valoriz",
    "/life-at-valoriz/",
    "/qa-testing",
    "/qa-testing/",
    "/case-study/Mirakl-Marketplace-Integration-CaseStudy-Growth",
    "/case-study/Mirakl-Marketplace-Integration-CaseStudy-Growth/",
    "/case-study/How-Valoriz-Launched-5-Brands-in-Weeks-Using-Composable-Commerce",
    "/case-study/How-Valoriz-Launched-5-Brands-in-Weeks-Using-Composable-Commerce/",
    "/case-study/ecommerce-migration-case-study-how-valoriz-moved-7-brands-to-cloud-in-4-months",
    "/case-study/ecommerce-migration-case-study-how-valoriz-moved-7-brands-to-cloud-in-4-months/",
    "/case-study/azure-data-lake-implementation-case-study-how-valoriz-unified-multi-cloud-data-architecture",
    "/case-study/azure-data-lake-implementation-case-study-how-valoriz-unified-multi-cloud-data-architecture/",  
    "/case-study/cloud-based-data-integration-for-a-multi-brand-retailer",
    "/case-study/cloud-based-data-integration-for-a-multi-brand-retailer/",     
    "/mobile-app",
    "/mobile-app/",
    "/data-analytics",
    "/data-analytics/",
    "/digital-commerce",
    "/digital-commerce/",
    "/cloud-modernization",
    "/cloud-modernization/",
    "/digital-experience",
    "/digital-experience/",
    "/enterprise-software",
    "/enterprise-software/",
    "/clients",
    "/clients/",
    "/product-engineering",
    "/product-engineering/",
    "/dp-automation",
    "/dp-automation/",
    "/ai-ml",
    "/ai-ml/",
    "/awards",
    "/awards/",
    "/blogs",
    "/blogs/",
  ]);

  const isAsset =
    /\.(png|jpe?g|gif|svg|webp|ico|css|js|woff2?|ttf|eot|json|vtt)$/i.test(
      url.pathname
    );

  // Serve to Streak.js
  if (
    streakPaths.has(url?.pathname) ||
    (isAsset && streakPaths?.has(refererUrl?.pathname ?? "")) ||
    refererUrl?.pathname?.includes("/secondary-css.css")
  ) {
    console.log(
      `🪶 Requested url:"${url.pathname}" or referer:"${refererUrl?.pathname}" to Streak.js`
    );
    return context.next();
  }

  // Proxy everything else to Next.js
  const NEXT_APP_DOMAIN = Deno.env.get("NEXT_APP_BASE_URL") ?? "";
  const target = NEXT_APP_DOMAIN + url.pathname + url.search;
  const response = await fetch(target, { headers: request.headers });

  console.log(`➡️ Requested url:"${url.pathname + url.search}" to Next.js app`);

  // Return proxied response
  return new Response(response.body, {
    status: response.status,
    headers: response.headers,
  });
};
