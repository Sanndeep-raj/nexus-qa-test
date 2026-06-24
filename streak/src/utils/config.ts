const sanityDataSet = process?.env?.NEXT_PUBLIC_SANITY_DATASET ?? "";
const sanityProjectId = process?.env?.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
const cdnBaseUrl = process?.env?.NEXT_PUBLIC_CDN_BASE_URL ?? "";
const baseUrl = process?.env?.NEXT_PUBLIC_BASE_URL ?? "https://www.valoriz.com";
const gtmId = process?.env?.NEXT_PUBLIC_GTM_ID ?? "";
// const linkedInPartnerId = process?.env?.NEXT_PUBLIC_LINKEDIN_PARTNER_ID ?? "";
const linkedInPartnerId = "";
const siteVerificationId = process?.env?.SITE_VERIFICATION_ID ?? "Gafm9MKa1a5_lV1_tEZ4M8eeCTIUj4EFMcPfPQ7KQrQ";
const gmailApi = process.env.NEXT_PUBLIC_GMAIL_API ?? "";

export {
  siteVerificationId,
  linkedInPartnerId,
  sanityDataSet,
  sanityProjectId,
  cdnBaseUrl,
  baseUrl,
  gtmId,
  gmailApi
}