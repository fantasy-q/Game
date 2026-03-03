const { createApp, ref } = Vue;

createApp({
  setup() {
    // 响应式数据
    const contents = ref(CONTENTS);

    const anchor = (p, t) => {
      return t ?
        `https://www.bilibili.com/video/BV1V2vvBrEPU?p=${p ?? 1}&t=${t}` :
        ""
    }

    // 暴露给模板
    return {
      contents,
      anchor,
    };
  }
}).mount('#app');
