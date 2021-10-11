var HEARTBEAT = {
  ref: 0,
  delta: 100, // 心跳频率
  onBeat: () => {},
  connect() {
    if (top === self) {
      // 接收端
      window.addEventListener('message', event => {
        const data = event.data || {};
        if (data.type === 'HEARTBEAT') {
          HEARTBEAT.ref = data.value;
        }
      });
      // 检测是否收到
      setInterval(
        state => {
          HEARTBEAT.onBeat(HEARTBEAT.ref !== state.ref);
          state.ref = HEARTBEAT.ref;
        },
        HEARTBEAT.delta,
        { ref: -1 },
      );
    } else {
      setInterval(() => {
        // 发送心跳包
        top.postMessage({ type: 'HEARTBEAT', value: Date.now() }, '*');
      }, HEARTBEAT.delta);
    }
  },
};
HEARTBEAT.connect();
