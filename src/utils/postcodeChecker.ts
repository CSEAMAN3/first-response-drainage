import { eastAngliaOutcodes } from "@/lib/outcodes";

export type PostcodeCheckResult =
  | { status: "invalid" }
  | { status: "covered"; outcode: string }
  | { status: "not-covered"; outcode: string };

const coveredOutcodes = new Set(eastAngliaOutcodes);

const OUTCODE_PATTERN =
  /^[A-PR-UWYZ](?:[0-9]{1,2}|[0-9][A-HJKPSTUW]|[A-HK-Y][0-9]{1,2}|[A-HK-Y][0-9][ABEHMNPRVWXY])$/;

const INCODE_PATTERN = /^[0-9][ABD-HJLNP-UW-Z]{2}$/;

export function normalisePostcode(input: string): string {
  return input.trim().toUpperCase().replace(/\s+/g, " ");
}

export function getOutcode(input: string): string | null {
  const postcode = normalisePostcode(input);

  if (!postcode) {
    return null;
  }

  // Accept a valid postcode district on its own.
  if (OUTCODE_PATTERN.test(postcode)) {
    return postcode;
  }

  // Special UK postcode.
  if (postcode === "GIR 0AA" || postcode === "GIR0AA") {
    return "GIR";
  }

  // Handle full postcodes with or without a space.
  const match = postcode.match(/^([A-Z0-9]{2,4}) ?([0-9][A-Z]{2})$/);

  if (!match) {
    return null;
  }

  const [, outcode, incode] = match;

  if (!OUTCODE_PATTERN.test(outcode) || !INCODE_PATTERN.test(incode)) {
    return null;
  }

  return outcode;
}

export function checkPostcode(input: string): PostcodeCheckResult {
  const outcode = getOutcode(input);

  if (!outcode) {
    return { status: "invalid" };
  }

  return {
    status: coveredOutcodes.has(outcode) ? "covered" : "not-covered",
    outcode,
  };
}
