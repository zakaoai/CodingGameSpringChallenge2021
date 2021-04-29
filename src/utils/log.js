import { DEBUG_MODE } from "../constant/debug";

export function log(show, message, ...obj) {
  if (DEBUG_MODE && show) {
    console.error(message, ...obj);
  }
}
