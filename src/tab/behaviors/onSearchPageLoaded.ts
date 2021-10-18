import { guard } from "effector";
import { buttonClickRequested } from "../events/buttonClickRequested";
import { searchPageLoaded } from "../events/pageLoaded";
import { isRunningStore } from "../stores/isRunningStore";

guard(searchPageLoaded, {
  filter: isRunningStore,
}).watch(() => buttonClickRequested());
