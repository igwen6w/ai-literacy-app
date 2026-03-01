// 关卡配置
export const levels = [
  {
    id: 1,
    name: '第一关：认识基本字',
    description: '学习最简单的基础汉字',
    level: 1, // hanziData level
    hanziCount: 5,
    starsRequired: 0, // 需要的星星数才能解锁
    type: 'learn', // learn | game
    hanzi: ['人', '大', '小', '上', '下']
  },
  {
    id: 2,
    name: '第二关：认识方向',
    description: '学习表示方向的汉字',
    level: 1,
    hanziCount: 5,
    starsRequired: 3,
    type: 'learn',
    hanzi: ['上', '下', '左', '右', '中']
  },
  {
    id: 3,
    name: '第三关：认识自然',
    description: '学习天空和大地',
    level: 1,
    hanziCount: 6,
    starsRequired: 6,
    type: 'learn',
    hanzi: ['天', '地', '日', '月', '水', '火']
  },
  {
    id: 4,
    name: '游戏：听音辨字',
    description: '听读音，选出正确的汉字',
    level: 1,
    hanziCount: 8,
    starsRequired: 9,
    type: 'game-listen',
    hanzi: ['人', '大', '小', '天', '地', '水', '火', '山']
  },
  {
    id: 5,
    name: '第四关：身体部位',
    description: '学习身体相关的汉字',
    level: 1,
    hanziCount: 6,
    starsRequired: 12,
    type: 'learn',
    hanzi: ['口', '目', '耳', '手', '足', '心']
  },
  {
    id: 6,
    name: '第五关：认识数字',
    description: '学习一到十',
    level: 2,
    hanziCount: 10,
    starsRequired: 15,
    type: 'learn',
    hanzi: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十']
  },
  {
    id: 7,
    name: '游戏：看图识字',
    description: '看图片，选出对应的汉字',
    level: 2,
    hanziCount: 8,
    starsRequired: 18,
    type: 'game-visual',
    hanzi: ['爸', '妈', '爷', '奶', '哥', '姐', '弟', '妹']
  },
  {
    id: 8,
    name: '第六关：我的家庭',
    description: '学习家人的称呼',
    level: 2,
    hanziCount: 8,
    starsRequired: 21,
    type: 'learn',
    hanzi: ['爸', '妈', '爷', '奶', '哥', '姐', '弟', '妹']
  },
  {
    id: 9,
    name: '游戏：读音测试',
    description: '大声读出汉字吧！',
    level: 2,
    hanziCount: 6,
    starsRequired: 24,
    type: 'game-speak',
    hanzi: ['你', '我', '他', '好', '来', '去']
  },
  {
    id: 10,
    name: '第七关：认识动物',
    description: '学习小动物的名字',
    level: 3,
    hanziCount: 8,
    starsRequired: 27,
    type: 'learn',
    hanzi: ['鸟', '鱼', '马', '牛', '羊', '猫', '狗', '鸡']
  },
  {
    id: 11,
    name: '第八关：植物和水果',
    description: '学习花草树木和水果',
    level: 3,
    hanziCount: 7,
    starsRequired: 30,
    type: 'learn',
    hanzi: ['花', '草', '树', '叶', '果', '木', '禾']
  },
  {
    id: 12,
    name: '综合测试',
    description: '测试你学过的所有汉字',
    level: 3,
    hanziCount: 15,
    starsRequired: 33,
    type: 'game-final',
    hanzi: ['人', '大', '小', '天', '地', '水', '火', '爸', '妈', '一', '二', '三', '花', '鸟', '鱼']
  },
]

// 根据关卡ID获取关卡
export function getLevelById(id) {
  return levels.find(l => l.id === id)
}

// 获取已解锁的关卡
export function getUnlockedLevels(userStars = 0) {
  return levels.filter(l => l.starsRequired <= userStars)
}

// 计算关卡星级 (1-3 stars based on accuracy)
export function calculateStars(accuracy) {
  if (accuracy >= 0.9) return 3
  if (accuracy >= 0.7) return 2
  if (accuracy >= 0.5) return 1
  return 0
}
