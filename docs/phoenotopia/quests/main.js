const { createApp, ref, onMounted } = Vue;
const BILI_BASE_URL = "https://www.bilibili.com/video/BV1V2vvBrEPU";

createApp({
  setup() {
    // 响应式数据
    const contents = ref(CONTENTS);
    const anchor = (p, t) => `${BILI_BASE_URL}?p=${p ?? 1}&t=${t ?? 0}`;

    onMounted(() => {
      addGoogleFont();
    });

    // 暴露给模板
    return {
      contents,
      anchor,
    };
  }
}).mount('#app');


function addGoogleFont() {
  // 2. 提取所有字符并去重 (包括中文、英文、数字和标点)
  const allChars = JSON.stringify(CONTENTS);
  const uniqueChars = Array.from(new Set(allChars)).join('');
  console.debug(uniqueChars);

  // 3. 对字符进行 URL 编码
  const encodedText = encodeURIComponent(uniqueChars);

  /**
   * 4. 构建 Google Fonts 复合链接
   */
  const baseUrl = "https://fonts.googleapis.com/css2";
  const families = [
    "Noto+Sans+SC", "Noto+Serif+SC", "Montserrat"
  ].map(f => `family=${f}`).join('&');

  const finalUrl = `${baseUrl}?${families}&text=${encodedText}&display=swap`;

  // 5. 插入到页面中
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = finalUrl;
  document.head.appendChild(link);
}
