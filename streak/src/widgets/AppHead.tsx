import { Script } from "streak/components";
import { baseUrl, gtmId, linkedInPartnerId, siteVerificationId } from "utils/config";
import { GTM_LAYER_NAME } from "utils/constants";

type AppHeadProps = {
  data?: {
    seo?: {
      title?: string;
      description?: string;
    };
    pathName?: string;
    schema?: string;
  };
};

const AppHead = (props: AppHeadProps) => {
  const { title, description } = props?.data?.seo || {};
  const seoTitle =
    title ||
    "Valoriz - Top Ecommerce Development & Digital Transformation Company";
  const seoDescription =
    description ||
    "We help businesses grow with ecommerce, AI, cloud, automation, and more. Valoriz is your global partner in digital transformation.";
  const canonical = `${baseUrl}${props?.data?.pathName ?? ""}`;

  const loadStructuredSchema = () => (
    <script type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: props?.data?.schema || "",
      }}
    />
  )

  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{seoTitle}</title>
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seoTitle} key="ogtitle" />

      <meta name="robots" content="index,follow" />
      <meta name="googlebot" content="index,follow" />

      <meta property="og:description" content={seoDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="Valoriz" />
      <meta name="description" content={seoDescription} />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#E7F3E3" />
      <meta name="application-name" content="Valoriz" />
      <meta name="apple-mobile-web-app-title" content="Valoriz" />
      {siteVerificationId && <meta name="google-site-verification" content={siteVerificationId} />}
      <link rel="canonical" href={canonical} />
      <link
        rel="icon"
        sizes="144x144"
        href="/images/favicon/mstile-144x144.png"
      />
      <link
        rel="shortcut icon"
        type="image/x-icon"
        media="all"
        href="/images/favicon/favicon.ico"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/images/favicon/apple-touch-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/images/favicon/apple-touch-icon-152x152.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/images/favicon/favicon.ico"
      />
      <meta name="next-head-count" content="23" />
      <link rel="stylesheet" href="/styles/tailwind.css" />

      {/* GTM Insight Tag */}
      {gtmId ? (
        <Script
          id="gtm-partner"
          options={{
            gly: GTM_LAYER_NAME,
            gtmId: gtmId,
          }}
        >
          {(gDom: any, options: any) => {
            const gly = options?.gly;
            const gtmId = options.gtmId;
            gDom[gly] = [];

            gDom._s_gtmKey = gtmId;

            gDom[gly] = gDom[gly] || [];
            // GTM Push after delay
            gDom[gly].push({ "gtm.start": gDom._s_time, event: "gtm.js" });

            gDom.pGtm = function () {
              return gDom[gly].push(...arguments);
            };
          }}
        </Script>
      ) : (
        ""
      )}

      {/* LinkedIn Insight Tag */}
      {linkedInPartnerId ? (
        <>
          <Script id="linkedin-partner-init" options={{ linkedInPartnerId }}>
            {(
              gDom: any,
              options: {
                linkedInPartnerId: string;
              }
            ) => {
              gDom._linkedin_partner_id = options?.linkedInPartnerId;
              gDom._linkedin_data_partner_ids =
                gDom._linkedin_data_partner_ids || [];
              gDom._linkedin_data_partner_ids.push(gDom._linkedin_partner_id);

              (function (l) {
                if (!l) {
                  gDom.lintrk = function (a: any, b: any) {
                    gDom.lintrk.q.push([a, b]);
                  };
                  gDom.lintrk.q = [];
                }
              })(gDom.lintrk);
            }}
          </Script>

          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              alt=""
              src={`https://px.ads.linkedin.com/collect/?pid=${linkedInPartnerId}&fmt=gif`}
            />
          </noscript>
        </>
      ) : (
        ""
      )}

      {/* GA Insight Tag */}
      {gtmId ? (
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
      ) : (
        ""
      )}

      {/* JSON-LD Schema */}
      {props?.data?.schema && loadStructuredSchema()}
    </>
  );
};

export default AppHead;
