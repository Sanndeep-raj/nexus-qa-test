import { Script } from "streak/components";
import { GTM_LAYER_NAME } from "utils/constants";

const AnalyticsHelpers = () => {
  return (
    <div>
      <Script
        id={`analytics-helpers-script-loader`}
        options={{
          gly: GTM_LAYER_NAME,
        }}
      >
        {(
          gDom: any,
          options: {
            gly: string;
            gtmKey?: string;
          }
        ) => {
          const gly = options?.gly;

          const performanceImpactScripts = () => {
            const gtmKey = gDom?._s_gtmKey;
            const linkedInKey = gDom?._linkedin_partner_id;
            if (gtmKey) {
              setTimeout(() => {
                const dataLayerQuery = gly !== "dataLayer" ? "&l=" + gly : "";
                gDom.addResourceToBody(
                  "https://www.googletagmanager.com/gtm.js?id=" +
                  gtmKey +
                  dataLayerQuery,
                  { defer: true }
                );
              }, 0);
            }
            if (linkedInKey) {
              setTimeout(() => {
                gDom.addResourceToBody(
                  "https://snap.licdn.com/li.lms-analytics/insight.min.js",
                  { defer: true }
                );
              }, 0);
            }
          };

          if (gDom.ftr) {
            setTimeout(performanceImpactScripts, 4000);
          } else {
            performanceImpactScripts();
          }
        }}
      </Script>
    </div>
  );
};

export default AnalyticsHelpers;
