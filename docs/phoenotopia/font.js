async function fontDynamicSubsetting() {
    // 1. 抓取页面文本
    const allText = document.body.innerText;
    const uniqueChars = [...new Set(allText.replace(/\s/g, ''))].sort().join('');

    if (uniqueChars.length === 0) return;
    console.debug(uniqueChars);

    // 2. 定义需要引入的字体列表
    const families = [
        "Noto+Sans+SC",
        "Noto+Serif+SC",
        // "Noto+Serif+SC:wght@700;900",
        "Montserrat"
    ];

    // 3. 构造复合请求链接
    // 格式: family=Font1&family=Font2&text=Chars
    const baseUrl = "https://fonts.googleapis.com/css2";
    const familyQuery = families.map(f => `family=${f}`).join('&');
    const encodedChars = `text=${encodeURIComponent(uniqueChars)}`;
    const fontUrl = `${baseUrl}?${familyQuery}&${encodedChars}&display=swap`;

    try {
        const response = await fetch(fontUrl);
        let cssText = await response.text();

        const oldStyle = document.getElementById('dynamic-fonts');
        if (oldStyle) oldStyle.remove();

        const styleTag = document.createElement('style');
        styleTag.id = 'dynamic-fonts';
        styleTag.textContent = cssText;
        document.head.appendChild(styleTag);
    } catch (err) {
        console.error("字体加载失败:", err);
        document.body.classList.add('fonts-loaded'); // 失败也显示，使用兜底字体
    }
}
const fontObserver = new MutationObserver((mutations) => {
    // 使用防抖处理，避免短时间内大量插入导致的频繁请求
    clearTimeout(window.fontTimeout);
    window.fontTimeout = setTimeout(() => {
        fontDynamicSubsetting();
    }, 300);
});
fontObserver.observe(document.body, {
    // childList: true,
    subtree: true,
    characterData: true
});
window.onload = fontDynamicSubsetting;