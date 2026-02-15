// 1. 通用的读取函数
function readCSV(file) {
    const filename = `data/${file}.csv`
    return new Promise((resolve, reject) => {
        Papa.parse(filename, {
            download: true, // 从服务器下载文件
            header: true, // 第一行是表头（如 id, name）
            dynamicTyping: false, // 自动将数字字符串转换为数字类型
            skipEmptyLines: true,
            complete: (res) => resolve(res.data),
            error: (err) => reject(err)
        });
    });
}

// 2. 主逻辑
async function loadAndRenderCSVs() {
    const files = ['heart', 'oxy', 'moon'];

    try {
        const allDataArrays = await Promise.all(files.map(readCSV));
        const combinedData = allDataArrays.flat();

        console.debug(allDataArrays)
        console.debug(combinedData)

        // --- 内存拼接核心逻辑开始 ---

        // 创建一个对象，用来存储每个区域对应的 HTML 字符串
        // 格式如: { "area1": "<a>...</a>...", "area2": "..." }
        const areaGroups = {};

        combinedData.forEach(row => {
            const { part, time, area, code, hint } = row;
            if (!area) return;

            const url = `https://www.bilibili.com/video/BV1V2vvBrEPU/?p=${part}&t=${time}`
            const gemType = code.split("_")[0].toLowerCase();

            // 构建当前行的 HTML 模板
            const linkHtml = `
                <p>
                    <a class="${gemType}" href="${url}" target="_blank">
                        ${code}
                    </a>
                    <span class="hint">${hint}</span>
                </p>`;

            // 如果该 area 还没在对象里，先初始化为空字符串
            if (!areaGroups[area]) {
                areaGroups[area] = "";
            }

            // 累加字符串到对应的区域
            areaGroups[area] += linkHtml;
        });

        // 获取所有的 h3 标签
        const rbElements = Array.from(document.querySelectorAll('h3.area rb'));

        rbElements.forEach(rb => {
            const areaName = rb.innerText.trim();
            // console.dir(rb);
            // 如果我们的数据里有这个 area 的内容
            if (areaGroups[areaName]) {
                // 创建一个容器一次性放入所有该 area 的 HTML
                const div = document.createElement('div');
                div.className = "area-content-wrapper";
                div.innerHTML = areaGroups[areaName];
                // 插入到 rb 后面
                rb.closest('h3').insertAdjacentElement('afterend', div);
            }
        });

        console.log("所有数据渲染完毕！");

    } catch (error) {
        console.error("读取或解析出错:", error);
    }
}

loadAndRenderCSVs();















