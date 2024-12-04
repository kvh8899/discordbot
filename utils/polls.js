import { readFileSync } from "node:fs";

export function getPollData(fileName) {
  try {
    return JSON.parse(readFileSync(fileName, "utf8"));
  } catch (e) {
    console.log(e);
  }
}
