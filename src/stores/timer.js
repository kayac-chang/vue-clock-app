import Timer from "@/services/timer";
import { reactive } from "vue";

const store = {
  debug: import.meta.env.DEV,

  state: reactive({
    time: new Date(),
  }),

  setTime(newValue) {
    // if (this.debug) {
    //   console.info("time update: ", newValue);
    // }

    this.state.time = newValue;
  },
};

Timer.on("timechange", (time) => store.setTime(time));

export default store;
