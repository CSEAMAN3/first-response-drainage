export const countyToSlug = (county: string) =>
  county.toLowerCase().trim().replace(/\s+/g, "-");
