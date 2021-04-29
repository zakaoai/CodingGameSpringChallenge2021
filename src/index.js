import { resetPerf, logPerf } from "./utils/perf";
import { resetTimeout } from "./utils/timeout";
import { play } from "./game";
import { log } from "./utils/log";
import { globalConst } from "./constant/global";

// The Game Loop
while (true) {
  resetPerf();
  resetTimeout();

  try {
    play();
    logPerf();
  } catch (error) {
    log(true, "ERROR", error);
  }

  globalConst.turn++;
}
