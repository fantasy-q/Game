const CONTENTS = [
  {/* 其他收集 */
    h2: { text: "其他收集" },
    children: [
      {
        h3: { rb: "阿努利宝珠", rt: "Anuri Pearlstone" },
        links: [
          { part: null, time: 4114, text: '入口' },
          { part: null, time: 4440, text: '迷宫' },
          { part: null, time: 4680, text: '压开关' },
          { part: null, time: 5488, text: '平台冲刺' },
          { part: null, time: 6001, text: '水上平台' },
          { part: null, time: 6200, text: '罐子' },
          { part: 6, time: 4133, text: '古墓左' },
          { part: 6, time: 4329, text: '古墓右' },
          { part: 12, time: 1671, text: '古墓底' },
          { part: 12, time: 1979, text: '左右平台机关' },
        ]
      },
      {
        h3: { rb: "衔尾蛇之钥", rt: "Ouro Guard Key" },
        links: [
          { part: 4, time: 1379, text: '据点中心' },
          { part: 4, time: 1985, text: '龙蜥巢穴' },
          { part: 4, time: 2240, text: '资助美洛迪' },
          { part: 7, time: 3551, text: '左上仓库' },
          { part: 17, time: 1999, text: '试炼１' },
        ]
      },
      {
        h3: { rb: "衔尾蛇书卷", rt: "Ouroboros Scroll" },
        links: [
          { part: 3, time: 1080, text: '亚泰镇' },
          { part: 7, time: 2351, text: '流沙荒漠' },
          { part: 10, time: 2641, text: '边远海滩' },
          { part: 11, time: 2429, text: '丘比特喷泉' },
          { part: 12, time: 5422, text: '绿洲' },
          { part: 18, time: 6435, text: '风化遗迹' },
        ]
      },
      {
        h3: { rb: "狗牌", rt: "Dog Tag" },
        links: [
          { part: 13, time: 5708, text: '第一阀门：下方' },
          { part: 19, time: 1786, text: '安全屋内：下方​' },
          { part: 13, time: 6265, text: '安全屋外：地铁中间门' },
          { part: 13, time: 6265, text: '安全屋外：地铁右直走​' },
          { part: 13, time: 6909, text: "Gl'amour：上方" },
          { part: 13, time: 7229, text: '三阀门：下方酸液房​' },
          { part: 14, time: 2399, text: '三阀门：下方车厢' },
          { part: 13, time: 7502, text: '缪尔洞穴：入口前​' },
          { part: 19, time: 2118, text: '四炮塔：右上' },
        ]
      },
      {
        h3: { rb: "翠绿宝石", rt: "Verdant Stone" },
        links: [
          { part: 15, time: 3435, text: '洞穴巨怪​' },
          { part: 15, time: 4116, text: '塔顶巨怪​' },
          { part: 15, time: 5160, text: '食人花解谜​' },
          { part: 15, time: 5674, text: '打碎所有罐子​' },
          { part: 22, time: 2719, text: '塔顶鹰身妖' },
          { part: 22, time: 3190, text: '塔顶双鹰身妖' },
          { part: 22, time: 2956, text: '限时跑酷' },
          { part: 15, time: 6158, text: '鳞片交换​' },
        ]
      },
      {
        h3: { rb: "兔子模型", rt: "Bunny Figurine" },
        links: [
          { part: 20, time: 1860, text: '斯菲亚庭院：P城前' },
          { part: 20, time: 2811, text: 'P城：魔像对话' },
          { part: 20, time: 2868, text: 'P城：音乐解谜' },
          { part: 20, time: 3335, text: 'P城：商店右侧' },
          { part: 20, time: 3890, text: 'P城：317左侧' },
          { part: 20, time: 4068, text: '斯菲亚庭院：入口' },
          { part: 20, time: 4365, text: '斯菲亚庭院：车站前' },
        ]
      },
      {
        h3: { rb: "金龙鳞片", rt: "Gold Dragon Scale" },
        links: [
          { part: 6, time: 5356, text: '多奇森林​' },
          { part: 19, time: 3429, text: '缪尔洞窟：隐藏区​' },
          { part: 22, time: 5886, text: '奥兰提亚：宝石门' },
          { part: 15, time: 5518, text: '奥兰提亚：推箱子​' },
          { part: 15, time: 7499, text: '世界尽头​', mark: "repeatable" },
          { part: 19, time: 4277, text: '海边悬崖​', mark: "repeatable" },
        ]
      },
      {
        h3: { rb: "佩罗", rt: "Perro" },
        links: [
          { part: 16, time: 800, text: '潘瑟罗' },
          { part: 3, time: 1080, text: '亚泰' },
          { part: 16, time: 7175, text: '蒂亚' },
          { part: 16, time: 7020, text: '珂赛特' },
          { part: 11, time: 672, text: '高墙之间' },
          { part: 15, time: 2387, text: '禁忌之地' },
        ]
      },
      {
        h3: { rb: "GEO票卷", rt: "GEO Ticket" },
        links: [
          { part: 6, time: 7649, text: 'GEO 总部' },
          { part: 16, time: 7175, text: '蒂亚' },
          { part: 16, time: 800, text: '潘瑟罗' },
          { part: 11, time: 672, text: '高墙之间' },
          { part: 12, time: 3179, text: '南卡斯特拉大桥' },
          { part: 12, time: 6265, text: '国王大桥' },
          { part: 14, time: 3770, text: '地底隧道' },
          { part: 14, time: 4806, text: '蒂亚市' },
          { part: 16, time: 7020, text: '珂赛特' },
          { part: 18, time: 5296, text: '麦田大道' },
        ]
      },
      {
        h3: { rb: "古旧胸针", rt: "Antique Pin" },
        links: [
          { part: 18, time: 7342, text: '流沙荒漠：古代GEO遗迹' },
          { part: 19, time: 8294, text: '焦土地带：古代GEO总部' },
        ]
      },
      {
        h3: { rb: "月神古董", rt: "Lunar Artifact" },
        links: [
          { part: 12, time: 2361, text: '月神青蛙' },
          { part: 12, time: 821, text: '月神花瓶' },
          { part: 7, time: 3509, text: '月神龙蜥' },
          { part: 7, time: 4498, text: '月神罗盘' },
          { part: 16, time: 2507, text: '月神三叉戟' },
          { part: 4, time: 5431, text: '月神王冠' },
          { part: 21, time: 6061, text: '月神梳子' },
          { part: 10, time: 5207, text: '月神手表' },
          { part: 11, time: 94, text: '月神酒杯' },
          { part: 19, time: 1415, text: '月神勋章' },
          { part: 15, time: 7959, text: '月神蛋​' },
          { part: 21, time: 5481, text: '月神钥匙' },
        ]
      },
    ]
  },
  {/* 成就 */
    h2: { text: "成就", },
    children: [
      {
        h3: { rb: "睡眠大师", rt: "Fluffy Pillow Connoisseur", p: "在所有可以睡觉的地方睡过觉" },
        links: [
          { part: 12, time: 2741, text: '向日葵大道​' },
          { part: 2, time: 5137, text: '阿达尔的家​' },
          { part: 3, time: 1080, text: '亚泰镇​' },
          { part: 22, time: 6647, text: '亚泰镇旅馆' },
          { part: 14, time: 4806, text: '蒂亚市​' },
          { part: 19, time: 8294, text: 'GEO总部​' },
          { part: 9, time: 4015, text: '珂赛特村​' },
          { part: 10, time: 5787, text: '皇家档案馆​' },
          { part: 11, time: 5786, text: '古堡遗址​' },
          { part: 11, time: 1186, text: '最终高墙​' },
          { part: 15, time: 6541, text: '特拉鲁姆​' },
          { part: 20, time: 2244, text: '普利斯汀城​' },
          { part: 23, time: 1923, text: '最后休憩点' },
        ]
      },
      {
        h3: { rb: "窥视之人", rt: "Snooper", p: "偷看别人的日记" },
        links: [
          { part: 22, time: 7003, text: '露缇亚家：每日短歌' },
          { part: 2, time: 4813, text: '阿尔达家：阿尔达的日记​' },
          { part: 5, time: 5321, text: '托马斯实验室：托马斯的日记​' },
          { part: 14, time: 4457, text: '湖畔实验室​：芙兰的研究记录​' },
          { part: 9, time: 4038, text: '珂赛特村：村长​的日记' },
          { part: 19, time: 8294, text: '古代GEO总部：遥远的宇宙之旅​' },
          { part: 23, time: 1966, text: '最后休憩点：格拉索的记录' },
        ]
      },
      {
        h3: { rb: "爱猫之人", rt: "Cat Petter", p: "找到9只猫，然后抚摸它们" },
        links: [
          { part: 12, time: 2741, text: '向日葵大道​' },
          { part: 8, time: 3525, text: '罗达斯边检站​' },
          { part: 7, time: 3698, text: '衔尾蛇据点​' },
          { part: 14, time: 4457, text: '湖畔实验室​' },
          { part: 5, time: 5321, text: '托马斯实验室​' },
          { part: 14, time: 4806, text: '蒂亚市​' },
          { part: 6, time: 2679, text: '最初高墙​' },
          { part: 18, time: 5296, text: '麦田大道' },
          { part: 9, time: 4671, text: '普奇牧场​' },
        ]
      },
      {
        h3: { rb: "古道热肠", rt: "Not for Profit", p: "找到3个不需要花钱也肯帮助你的人" },
        links: [
          { part: 22, time: 6308, text: '蒂亚市：钢琴家' },
          { part: 22, time: 6447, text: '月光溪谷北：船夫' },
          { part: 22, time: 6782, text: '向日葵大道：旅馆' },
        ]
      },
    ]
  }
]