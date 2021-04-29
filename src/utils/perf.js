const { performance } = require("perf_hooks");

let perfs = [];

export function logPerf(msg = "default") {
  perfs.push(performance.now());

  log(
    DEBUG_PERF,
    "%s - Turn n°: %s, Perf n° %s, time elapse since begin %d, time elapse since last perf %d",
    msg,
    turn,
    perfs.length - 1,
    perfs[perfs.length - 1] - perfs[0],
    perfs[perfs.length - 1] - perfs[perfs.length - 2]
  );
}

export function resetPerf() {
  perfs = [];
  perfs.push(performance.now());
}
