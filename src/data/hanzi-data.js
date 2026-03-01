// 汉字数据库 - 按难度分级
export const hanziData = {
  // Level 1: 3岁 beginner (最基础的汉字)
  level1: [
    { char: '人', pinyin: 'rén', meaning: '人', emoji: '👨', example: '大人', example2: '小朋友' },
    { char: '大', pinyin: 'dà', meaning: '大', emoji: '🐘', example: '大象', example2: '大苹果' },
    { char: '小', pinyin: 'xiǎo', meaning: '小', emoji: '🐭', example: '小老鼠', example2: '小花猫' },
    { char: '上', pinyin: 'shàng', meaning: '上面', emoji: '⬆️', example: '上学', example2: '上山' },
    { char: '下', pinyin: 'xià', meaning: '下面', emoji: '⬇️', example: '下雨', example2: '下楼' },
    { char: '左', pinyin: 'zuǒ', meaning: '左边', emoji: '⬅️', example: '左手', example2: '向左' },
    { char: '右', pinyin: 'yòu', meaning: '右边', emoji: '➡️', example: '右手', example2: '向右' },
    { char: '中', pinyin: 'zhōng', meaning: '中间', emoji: '🎯', example: '中国', example2: '中午' },
    { char: '天', pinyin: 'tiān', meaning: '天空', emoji: '☁️', example: '蓝天', example2: '天天开心' },
    { char: '地', pinyin: 'dì', meaning: '大地', emoji: '🌍', example: '土地', example2: '大地' },
    { char: '日', pinyin: 'rì', meaning: '太阳', emoji: '☀️', example: '日子', example2: '日出' },
    { char: '月', pinyin: 'yuè', meaning: '月亮', emoji: '🌙', example: '月亮', example2: '一月' },
    { char: '水', pinyin: 'shuǐ', meaning: '水', emoji: '💧', example: '喝水', example2: '雨水' },
    { char: '火', pinyin: 'huǒ', meaning: '火', emoji: '🔥', example: '大火', example2: '火苗' },
    { char: '山', pinyin: 'shān', meaning: '山', emoji: '⛰️', example: '大山', example2: '山上' },
    { char: '石', pinyin: 'shí', meaning: '石头', emoji: '🪨', example: '石头', example2: '宝石' },
    { char: '田', pinyin: 'tián', meaning: '田地', emoji: '🌾', example: '田野', example2: '田地' },
    { char: '土', pinyin: 'tǔ', meaning: '泥土', emoji: '🟫', example: '土地', example2: '泥土' },
    { char: '木', pinyin: 'mù', meaning: '木头', emoji: '🪵', example: '树木', example2: '木头' },
    { char: '禾', pinyin: 'hé', meaning: '禾苗', emoji: '🌱', example: '禾苗', example2: '禾田' },
    { char: '口', pinyin: 'kǒu', meaning: '嘴巴', emoji: '👄', example: '人口', example2: '门口' },
    { char: '目', pinyin: 'mù', meaning: '眼睛', emoji: '👀', example: '目光', example2: '目录' },
    { char: '耳', pinyin: 'ěr', meaning: '耳朵', emoji: '👂', example: '耳朵', example2: '木耳' },
    { char: '手', pinyin: 'shǒu', meaning: '手', emoji: '✋', example: '小手', example2: '洗手' },
    { char: '足', pinyin: 'zú', meaning: '脚', emoji: '🦶', example: '手足', example2: '足球' },
    { char: '人', pinyin: 'rén', meaning: '人', emoji: '👤', example: '人口', example2: '人们' },
    { char: '心', pinyin: 'xīn', meaning: '心', emoji: '❤️', example: '开心', example2: '小心' },
  ],

  // Level 2: 4岁 intermediate (生活常用字)
  level2: [
    { char: '一', pinyin: 'yī', meaning: '一个', emoji: '1️⃣', example: '一个', example2: '第一天' },
    { char: '二', pinyin: 'èr', meaning: '二个', emoji: '2️⃣', example: '二月', example2: '第二' },
    { char: '三', pinyin: 'sān', meaning: '三个', emoji: '3️⃣', example: '三月', example2: '三人' },
    { char: '四', pinyin: 'sì', meaning: '四个', emoji: '4️⃣', example: '四月', example2: '四季' },
    { char: '五', pinyin: 'wǔ', meaning: '五个', emoji: '5️⃣', example: '五月', example2: '五天' },
    { char: '六', pinyin: 'liù', meaning: '六个', emoji: '6️⃣', example: '六月', example2: '六人' },
    { char: '七', pinyin: 'qī', meaning: '七个', emoji: '7️⃣', example: '七月', example2: '七天' },
    { char: '八', pinyin: 'bā', meaning: '八个', emoji: '8️⃣', example: '八月', example2: '八方' },
    { char: '九', pinyin: 'jiǔ', meaning: '九个', emoji: '9️⃣', example: '九月', example2: '九天' },
    { char: '十', pinyin: 'shí', meaning: '十个', emoji: '🔟', example: '十月', example2: '十天' },
    { char: '爸', pinyin: 'bà', meaning: '爸爸', emoji: '👨', example: '爸爸', example2: '我爸' },
    { char: '妈', pinyin: 'mā', meaning: '妈妈', emoji: '👩', example: '妈妈', example2: '我妈' },
    { char: '爷', pinyin: 'yé', meaning: '爷爷', emoji: '👴', example: '爷爷', example2: '姥爷' },
    { char: '奶', pinyin: 'nǎi', meaning: '奶奶', emoji: '👵', example: '奶奶', example2: '牛奶' },
    { char: '哥', pinyin: 'gē', meaning: '哥哥', emoji: '👦', example: '哥哥', example2: '大哥' },
    { char: '姐', pinyin: 'jiě', meaning: '姐姐', emoji: '👧', example: '姐姐', example2: '大姐' },
    { char: '弟', pinyin: 'dì', meaning: '弟弟', emoji: '👶', example: '弟弟', example2: '兄弟' },
    { char: '妹', pinyin: 'mèi', meaning: '妹妹', emoji: '👶', example: '妹妹', example2: '姐妹' },
    { char: '你', pinyin: 'nǐ', meaning: '你', emoji: '👈', example: '你好', example2: '你们' },
    { char: '我', pinyin: 'wǒ', meaning: '我', emoji: '🙋', example: '我们', example2: '我的' },
    { char: '他', pinyin: 'tā', meaning: '他', emoji: '👉', example: '他们', example2: '他人' },
    { char: '她', pinyin: 'tā', meaning: '她', emoji: '👩', example: '她们', example2: '她的' },
    { char: '它', pinyin: 'tā', meaning: '它', emoji: '🐾', example: '它们', example2: '它的' },
    { char: '好', pinyin: 'hǎo', meaning: '好', emoji: '👍', example: '你好', example2: '好人' },
    { char: '来', pinyin: 'lái', meaning: '来', emoji: '➡️', example: '过来', example2: '来人' },
    { char: '去', pinyin: 'qù', meaning: '去', emoji: '⬅️', example: '回去', example2: '出去' },
  ],

  // Level 3: 5岁 advanced (稍复杂的汉字)
  level3: [
    { char: '花', pinyin: 'huā', meaning: '花朵', emoji: '🌸', example: '花朵', example2: '开花' },
    { char: '草', pinyin: 'cǎo', meaning: '小草', emoji: '🌿', example: '小草', example2: '草地' },
    { char: '树', pinyin: 'shù', meaning: '大树', emoji: '🌳', example: '大树', example2: '树木' },
    { char: '叶', pinyin: 'yè', meaning: '树叶', emoji: '🍃', example: '树叶', example2: '叶子' },
    { char: '果', pinyin: 'guǒ', meaning: '水果', emoji: '🍎', example: '水果', example2: '苹果' },
    { char: '鸟', pinyin: 'niǎo', meaning: '小鸟', emoji: '🐦', example: '小鸟', example2: '飞鸟' },
    { char: '鱼', pinyin: 'yú', meaning: '小鱼', emoji: '🐟', example: '小鱼', example2: '金鱼' },
    { char: '马', pinyin: 'mǎ', meaning: '马', emoji: '🐴', example: '小马', example2: '马上' },
    { char: '牛', pinyin: 'niú', meaning: '牛', emoji: '🐮', example: '黄牛', example2: '奶牛' },
    { char: '羊', pinyin: 'yáng', meaning: '羊', emoji: '🐑', example: '山羊', example2: '绵羊' },
    { char: '猫', pinyin: 'māo', meaning: '猫咪', emoji: '🐱', example: '小猫', example2: '熊猫' },
    { char: '狗', pinyin: 'gǒu', meaning: '小狗', emoji: '🐕', example: '小狗', example2: '热狗' },
    { char: '鸡', pinyin: 'jī', meaning: '鸡', emoji: '🐔', example: '小鸡', example2: '鸡蛋' },
    { char: '鸭', pinyin: 'yā', meaning: '鸭子', emoji: '🦆', example: '鸭子', example2: '鸭蛋' },
    { char: '书', pinyin: 'shū', meaning: '书本', emoji: '📚', example: '书本', example2: '读书' },
    { char: '笔', pinyin: 'bǐ', meaning: '笔', emoji: '✏️', example: '铅笔', example2: '毛笔' },
    { char: '纸', pinyin: 'zhǐ', meaning: '纸', emoji: '📄', example: '白纸', example2: '纸张' },
    { char: '车', pinyin: 'chē', meaning: '车', emoji: '🚗', example: '汽车', example2: '火车' },
    { char: '船', pinyin: 'chuán', meaning: '船', emoji: '⛵', example: '小船', example2: '轮船' },
    { char: '飞机', pinyin: 'fēi jī', meaning: '飞机', emoji: '✈️', example: '大飞机', example2: '飞机场' },
    { char: '饭', pinyin: 'fàn', meaning: '饭', emoji: '🍚', example: '吃饭', example2: '米饭' },
    { char: '面', pinyin: 'miàn', meaning: '面条', emoji: '🍜', example: '面条', example2: '面包' },
    { char: '肉', pinyin: 'ròu', meaning: '肉', emoji: '🥩', example: '牛肉', example2: '猪肉' },
    { char: '蛋', pinyin: 'dàn', meaning: '蛋', emoji: '🥚', example: '鸡蛋', example2: '鸭蛋' },
    { char: '学', pinyin: 'xué', meaning: '学习', emoji: '📖', example: '学习', example2: '学生' },
  ],
}

// 获取特定级别的所有汉字
export function getHanziByLevel(level) {
  return hanziData[`level${level}`] || []
}

// 获取随机汉字
export function getRandomHanzi(count = 10, level = 1) {
  const list = getHanziByLevel(level)
  const shuffled = [...list].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}

// 获取总字数
export function getTotalHanziCount() {
  return Object.values(hanziData).reduce((sum, list) => sum + list.length, 0)
}

// 根据汉字查找数据
export function findHanzi(char) {
  for (const level of Object.values(hanziData)) {
    const found = level.find(h => h.char === char)
    if (found) return found
  }
  return null
}
