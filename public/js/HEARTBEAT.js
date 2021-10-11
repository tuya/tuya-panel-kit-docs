var HEARTBEAT = {
  ref: 0,
  delta: 500, // 心跳频率
  connect(onBeat) {
    if (onBeat) {
      window.addEventListener('load', () => {
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
            onBeat(HEARTBEAT.ref !== state.ref);
            state.ref = HEARTBEAT.ref;
          },
          HEARTBEAT.delta,
          { ref: -1 },
        );
      });
    } else {
      if (top !== self) {
        setInterval(() => {
          // 发送心跳包
          top.postMessage({ type: 'HEARTBEAT', value: Date.now() }, '*');
        }, HEARTBEAT.delta);
      }
    }
  },
};
HEARTBEAT.connect();
