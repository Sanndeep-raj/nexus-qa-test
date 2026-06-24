import { cdnBaseUrl } from "utils/config";

export const getAzureCdnUrl = (section: string) => {
  const URLS: Record<string, string> = {
    HOME_ANNIVERSARY_BANNER: "/assets/anniversary-teaser.mp4",
    HOME_AKENO_PARTNERSHIP: "/assets/akeneo-partnership.mp4",
    HOME_HERO_BANNER_1: "/assets/banner-video.mp4",
    HOME_HERO_BANNER_2: "/assets/banner-video-2.mp4",
    HOME_ABOUT_VALORIZ_1: "/assets/home-potential.mp4",
    HOME_ABOUT_VALORIZ_2: "/assets/home-level-up.mp4",
    HOME_ABOUT_VALORIZ_3: "/assets/home-trophy-90.mp4",
  };
  return cdnBaseUrl && URLS?.[section] ? `${cdnBaseUrl}${URLS?.[section]}` : "";
};
export const constructDropDownOptions = (
  contents: Record<string, unknown>[],
  key: string
) => {
  if (!hasArrayElements(contents)) return [];
  return Array.from(
    new Set(contents?.flatMap((each) => each?.[key] ?? []))
  )?.map((m) => ({
    value: m,
    label: m,
  }));
};
export const hasArrayElements = <T>(list: T[] | unknown): list is T[] =>
  Array.isArray(list) && list.length > 0;

export const getCaseStudyChallengesClass = (index = 0) => {
  return (
    [
      "w-[1px] h-[190px] bg-[linear-gradient(0deg,rgba(240,73,57,1)_0%,rgba(0,0,0,1)_100%)]",
      "w-[1px] h-[268px] bg-[linear-gradient(0deg,rgba(240,73,57,1)_0%,rgba(0,0,0,1)_100%)]",
      "w-[1px] h-[393px] bg-[linear-gradient(0deg,rgba(240,73,57,1)_0%,rgba(0,0,0,1)_100%)]",
      "w-[1px] h-[552px] bg-[linear-gradient(0deg,rgba(240,73,57,1)_0%,rgba(0,0,0,1)_100%)]",
    ]?.[index] ?? ""
  );
};

export const getCaseStudyGoalClass = (index = 0) => {
  return (
    [
      "w-[1px] h-[190px] bg-[linear-gradient(0deg,rgba(0,0,0,1)_0%,rgba(4,158,118,1)_100%)]",
      "w-[1px] h-[286px] bg-[linear-gradient(0deg,rgba(0,0,0,1)_0%,rgba(4,158,118,1)_100%)]",
      "w-[1px] h-[406px] bg-[linear-gradient(0deg,rgba(0,0,0,1)_0%,rgba(4,158,118,1)_100%)]",
      "w-[1px] h-[563px] bg-[linear-gradient(0deg,rgba(0,0,0,1)_0%,rgba(4,158,118,1)_100%)]",
    ]?.[index] ?? ""
  );
};

export const toBase64 = (file: any) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });

export const baseValidatePhoneNumber = (
  value: string,
  dialCode: string
): true | string => {
  if (dialCode === "+91") {
    // India: 10 digits starting with 6–9
    if (!/^([6-9]\d{9})$/.test(value)) {
      return "For India, enter a 10-digit number starting with 6-9.";
    }
  } else if (dialCode === "+971") {
    // UAE: 9 digits starting with 5
    if (!/^5\d{8}$/.test(value)) {
      return "For UAE, enter a 9-digit number starting with 5.";
    }
  } else {
    return "Unsupported dial code selected.";
  }

  return true;
};

export const isValidFileType = (file: File | null | undefined): boolean => {
  const allowedTypes: string[] = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];
  return allowedTypes.includes(file?.type ?? "");
};