const HOST =
  import.meta.env.VITE_WS_TIMER || "wss://deno-timer-ws.herokuapp.com/";

const ws = new WebSocket(HOST);
const map = {
  timechange: [],
};

const apply = (data) => (fn) => fn(data);

ws.addEventListener("open", () => {
  ws.addEventListener("message", (msg) => {
    const date = new Date(msg.data);

    Object.entries(map).forEach(([event, callbacks]) => {
      if (event === "timechange") {
        callbacks.forEach(apply(date));
      }
    });
  });
});

export function on(event, fn) {
  if (!(event in map)) return;

  map[event].push(fn);
}

export default { on };
