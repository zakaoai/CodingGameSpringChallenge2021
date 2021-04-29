import { resetPerf, logPerf } from "./utils/perf";
import { resetTimeout } from "./utils/timeout";
import { play } from "./game";

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

  turn++;
}
