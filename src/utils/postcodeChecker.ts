import { eastAngliaOutcodes } from "@/lib/outcodes";

export function normalisePostcode(input: string) {
  return input.trim().toUpperCase().replace(/\s+/g, " ");
}

export function getOutcode(postcode: string) {
  const p = normalisePostcode(postcode);
  // Outcode is the part before the space, but if no space yet, take up to first 4 chars safely
  return p.includes(" ") ? p.split(" ")[0] : p.slice(0, 4);
}

export function isCoveredPostcode(input: string) {
  const outcode = getOutcode(input);
  return eastAngliaOutcodes.includes(outcode);
}
