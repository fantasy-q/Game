import '../../gems/script/yml.js';
import '../../gems/script/font.js';

const ymlFile = 'content';

loadAndRenderYaml(ymlFile);
performFontUpdate(); // 首次扫描
setupObserver();     // 启动监听
