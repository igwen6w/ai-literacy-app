// 汉字数据库 - 300个常用汉字
export const hanziData = {
  // 所有汉字列表（按常用程度排序，用于分组学习）
  all: [
    // 第一组 (1-10)
    { char: '人', pinyin: 'rén', meaning: '人', example: '大人', example2: '人们' },
    { char: '大', pinyin: 'dà', meaning: '大', example: '大人', example2: '大便' },
    { char: '小', pinyin: 'xiǎo', meaning: '小', example: '小心', example2: '大小' },
    { char: '上', pinyin: 'shàng', meaning: '上面', example: '上学', example2: '山上' },
    { char: '下', pinyin: 'xià', meaning: '下面', example: '下雨', example2: '下楼' },
    { char: '左', pinyin: 'zuǒ', meaning: '左边', example: '左手', example2: '向左' },
    { char: '右', pinyin: 'yòu', meaning: '右边', example: '右手', example2: '向右' },
    { char: '中', pinyin: 'zhōng', meaning: '中间', example: '中国', example2: '中间' },
    { char: '天', pinyin: 'tiān', meaning: '天空', example: '蓝天', example2: '今天' },
    { char: '地', pinyin: 'dì', meaning: '大地', example: '土地', example2: '地方' },

    // 第二组 (11-20)
    { char: '日', pinyin: 'rì', meaning: '太阳', example: '日出', example2: '今日' },
    { char: '月', pinyin: 'yuè', meaning: '月亮', example: '月亮', example2: '明月' },
    { char: '水', pinyin: 'shuǐ', meaning: '水', example: '喝水', example2: '水果' },
    { char: '火', pinyin: 'huǒ', meaning: '火', example: '大火', example2: '火车' },
    { char: '山', pinyin: 'shān', meaning: '山', example: '高山', example2: '山上' },
    { char: '石', pinyin: 'shí', meaning: '石头', example: '石头', example2: '宝石' },
    { char: '田', pinyin: 'tián', meaning: '田地', example: '田地', example2: '田野' },
    { char: '土', pinyin: 'tǔ', meaning: '泥土', example: '土地', example2: '泥土' },
    { char: '木', pinyin: 'mù', meaning: '树木', example: '树木', example2: '木头' },
    { char: '禾', pinyin: 'hé', meaning: '禾苗', example: '禾苗', example2: '禾田' },

    // 第三组 (21-30)
    { char: '口', pinyin: 'kǒu', meaning: '嘴巴', example: '人口', example2: '门口' },
    { char: '目', pinyin: 'mù', meaning: '眼睛', example: '目光', example2: '目录' },
    { char: '耳', pinyin: 'ěr', meaning: '耳朵', example: '耳朵', example2: '木耳' },
    { char: '手', pinyin: 'shǒu', meaning: '手', example: '手机', example2: '左手' },
    { char: '足', pinyin: 'zú', meaning: '脚', example: '足球', example2: '手足' },
    { char: '心', pinyin: 'xīn', meaning: '心', example: '开心', example2: '小心' },
    { char: '力', pinyin: 'lì', meaning: '力量', example: '力量', example2: '有力' },
    { char: '言', pinyin: 'yán', meaning: '说话', example: '言语', example2: '名言' },
    { char: '立', pinyin: 'lì', meaning: '站立', example: '立正', example2: '站立' },
    { char: '走', pinyin: 'zǒu', meaning: '走路', example: '走开', example2: '走路' },

    // 第四组 (31-40)
    { char: '之', pinyin: 'zhī', meaning: '的', example: '之后', example2: '之前' },
    { char: '也', pinyin: 'yě', meaning: '也', example: '也是', example2: '也有' },
    { char: '子', pinyin: 'zǐ', meaning: '孩子', example: '子女', example2: '儿子' },
    { char: '女', pinyin: 'nǚ', meaning: '女孩', example: '女儿', example2: '女人' },
    { char: '好', pinyin: 'hǎo', meaning: '好', example: '好人', example2: '你好' },
    { char: '儿', pinyin: 'ér', meaning: '儿子', example: '儿子', example2: '女儿' },
    { char: '见', pinyin: 'jiàn', meaning: '看见', example: '看见', example2: '再见' },
    { char: '问', pinyin: 'wèn', meaning: '问', example: '问题', example2: '请问' },
    { char: '为', pinyin: 'wèi', meaning: '因为', example: '因为', example2: '为了' },
    { char: '有', pinyin: 'yǒu', meaning: '有', example: '有人', example2: '没有' },

    // 第五组 (41-50)
    { char: '无', pinyin: 'wú', meaning: '没有', example: '无法', example2: '无穷' },
    { char: '开', pinyin: 'kāi', meaning: '打开', example: '开门', example2: '开心' },
    { char: '关', pinyin: 'guān', meaning: '关闭', example: '关门', example2: '关灯' },
    { char: '方', pinyin: 'fāng', meaning: '方向', example: '地方', example2: '方法' },
    { char: '工', pinyin: 'gōng', meaning: '工作', example: '工人', example2: '工作' },
    { char: '王', pinyin: 'wáng', meaning: '国王', example: '王子', example2: '国王' },
    { char: '玉', pinyin: 'yù', meaning: '玉石', example: '玉石', example2: '宝玉' },
    { char: '贝', pinyin: 'bèi', meaning: '贝壳', example: '贝壳', example2: '宝贝' },
    { char: '车', pinyin: 'chē', meaning: '汽车', example: '汽车', example2: '火车' },
    { char: '雨', pinyin: 'yǔ', meaning: '下雨', example: '下雨', example2: '雨伞' },

    // 第六组 (51-60)
    { char: '雪', pinyin: 'xuě', meaning: '雪花', example: '下雪', example2: '雪人' },
    { char: '风', pinyin: 'fēng', meaning: '大风', example: '大风', example2: '风景' },
    { char: '云', pinyin: 'yún', meaning: '白云', example: '白云', example2: '云朵' },
    { char: '电', pinyin: 'diàn', meaning: '电话', example: '电话', example2: '电视' },
    { char: '光', pinyin: 'guāng', meaning: '阳光', example: '阳光', example2: '光明' },
    { char: '时', pinyin: 'shí', meaning: '时间', example: '时间', example2: '小时' },
    { char: '分', pinyin: 'fēn', meaning: '分钟', example: '分钟', example2: '分明' },
    { char: '秒', pinyin: 'miǎo', meaning: '秒', example: '秒针', example2: '分秒' },
    { char: '年', pinyin: 'nián', meaning: '今年', example: '今年', example2: '新年' },
    { char: '早', pinyin: 'zǎo', meaning: '早上', example: '早上', example2: '早晨' },

    // 第七组 (61-70)
    { char: '晚', pinyin: 'wǎn', meaning: '晚上', example: '晚上', example2: '晚会' },
    { char: '今', pinyin: 'jīn', meaning: '今天', example: '今天', example2: '今后' },
    { char: '昨', pinyin: 'zuó', meaning: '昨天', example: '昨天', example2: '昨夜' },
    { char: '明', pinyin: 'míng', meaning: '明天', example: '明天', example2: '明亮' },
    { char: '前', pinyin: 'qián', meaning: '前面', example: '前面', example2: '以前' },
    { char: '后', pinyin: 'hòu', meaning: '后面', example: '后面', example2: '以后' },
    { char: '里', pinyin: 'lǐ', meaning: '里面', example: '这里', example2: '那里' },
    { char: '外', pinyin: 'wài', meaning: '外面', example: '外面', example2: '国外' },
    { char: '家', pinyin: 'jiā', meaning: '回家', example: '回家', example2: '家人' },
    { char: '门', pinyin: 'mén', meaning: '大门', example: '开门', example2: '关门' },

    // 第八组 (71-80)
    { char: '窗', pinyin: 'chuāng', meaning: '窗户', example: '窗户', example2: '门窗' },
    { char: '床', pinyin: 'chuáng', meaning: '床', example: '床铺', example2: '双人床' },
    { char: '桌', pinyin: 'zhuō', meaning: '桌子', example: '桌子', example2: '书桌' },
    { char: '椅', pinyin: 'yǐ', meaning: '椅子', example: '椅子', example2: '桌椅' },
    { char: '刀', pinyin: 'dāo', meaning: '刀子', example: '刀子', example2: '小刀' },
    { char: '尺', pinyin: 'chǐ', meaning: '尺子', example: '尺子', example2: '直尺' },
    { char: '本', pinyin: 'běn', meaning: '本子', example: '本子', example2: '课本' },
    { char: '笔', pinyin: 'bǐ', meaning: '笔', example: '铅笔', example2: '毛笔' },
    { char: '纸', pinyin: 'zhǐ', meaning: '纸', example: '白纸', example2: '纸巾' },
    { char: '爸', pinyin: 'bà', meaning: '爸爸', example: '爸爸', example2: '我爸' },

    // 第九组 (81-90)
    { char: '妈', pinyin: 'mā', meaning: '妈妈', example: '妈妈', example2: '我妈' },
    { char: '爷', pinyin: 'yé', meaning: '爷爷', example: '爷爷', example2: '老爷' },
    { char: '奶', pinyin: 'nǎi', meaning: '奶奶', example: '奶奶', example2: '牛奶' },
    { char: '哥', pinyin: 'gē', meaning: '哥哥', example: '哥哥', example2: '大哥' },
    { char: '姐', pinyin: 'jiě', meaning: '姐姐', example: '姐姐', example2: '大姐' },
    { char: '弟', pinyin: 'dì', meaning: '弟弟', example: '弟弟', example2: '兄弟' },
    { char: '妹', pinyin: 'mèi', meaning: '妹妹', example: '妹妹', example2: '姐妹' },
    { char: '你', pinyin: 'nǐ', meaning: '你', example: '你好', example2: '你们' },
    { char: '我', pinyin: 'wǒ', meaning: '我', example: '我们', example2: '我的' },
    { char: '他', pinyin: 'tā', meaning: '他', example: '他们', example2: '他人' },

    // 第十组 (91-100)
    { char: '她', pinyin: 'tā', meaning: '她', example: '她们', example2: '她的' },
    { char: '它', pinyin: 'tā', meaning: '它', example: '它们', example2: '它的' },
    { char: '们', pinyin: 'men', meaning: '们', example: '我们', example2: '他们' },
    { char: '的', pinyin: 'de', meaning: '的', example: '我的', example2: '你的' },
    { char: '是', pinyin: 'shì', meaning: '是', example: '是的', example2: '这是' },
    { char: '在', pinyin: 'zài', meaning: '在', example: '在家', example2: '现在' },
    { char: '不', pinyin: 'bù', meaning: '不', example: '不要', example2: '不是' },
    { char: '了', pinyin: 'le', meaning: '了', example: '好了', example2: '来了' },
    { char: '和', pinyin: 'hé', meaning: '和', example: '和平', example2: '你和' },
    { char: '与', pinyin: 'yǔ', meaning: '和', example: '与其', example2: '参与' },

    // 第十一组 (101-110)
    { char: '或', pinyin: 'huò', meaning: '或者', example: '或者', example2: '或许' },
    { char: '但', pinyin: 'dàn', meaning: '但是', example: '但是', example2: '不但' },
    { char: '因', pinyin: 'yīn', meaning: '因为', example: '因为', example2: '原因' },
    { char: '所', pinyin: 'suǒ', meaning: '所以', example: '所以', example2: '所有' },
    { char: '从', pinyin: 'cóng', meaning: '从来', example: '从来', example2: '从前' },
    { char: '这', pinyin: 'zhè', meaning: '这个', example: '这个', example2: '这里' },
    { char: '那', pinyin: 'nà', meaning: '那个', example: '那个', example2: '那里' },
    { char: '呢', pinyin: 'ne', meaning: '呢', example: '什么呢', example2: '你呢' },
    { char: '吧', pinyin: 'ba', meaning: '吧', example: '好吧', example2: '走吧' },
    { char: '吗', pinyin: 'ma', meaning: '吗', example: '好吗', example2: '是么' },

    // 第十二组 (111-120)
    { char: '啊', pinyin: 'a', meaning: '啊', example: '好啊', example2: '是啊' },
    { char: '哦', pinyin: 'ó', meaning: '哦', example: '哦', example2: '知道了哦' },
    { char: '嗯', pinyin: 'ǹg', meaning: '嗯', example: '嗯', example2: '嗯哪' },
    { char: '一', pinyin: 'yī', meaning: '一', example: '一个', example2: '第一' },
    { char: '二', pinyin: 'èr', meaning: '二', example: '二月', example2: '第二' },
    { char: '三', pinyin: 'sān', meaning: '三', example: '三月', example2: '第三' },
    { char: '四', pinyin: 'sì', meaning: '四', example: '四月', example2: '第四' },
    { char: '五', pinyin: 'wǔ', meaning: '五', example: '五月', example2: '第五' },
    { char: '六', pinyin: 'liù', meaning: '六', example: '六月', example2: '第六' },
    { char: '七', pinyin: 'qī', meaning: '七', example: '七月', example2: '第七' },

    // 第十三组 (121-130)
    { char: '八', pinyin: 'bā', meaning: '八', example: '八月', example2: '第八' },
    { char: '九', pinyin: 'jiǔ', meaning: '九', example: '九月', example2: '第九' },
    { char: '十', pinyin: 'shí', meaning: '十', example: '十月', example2: '第十' },
    { char: '百', pinyin: 'bǎi', meaning: '百', example: '一百', example2: '百年' },
    { char: '千', pinyin: 'qiān', meaning: '千', example: '一千', example2: '千年' },
    { char: '万', pinyin: 'wàn', meaning: '万', example: '一万', example2: '万年' },
    { char: '亿', pinyin: 'yì', meaning: '亿', example: '一亿', example2: '亿年' },
    { char: '红', pinyin: 'hóng', meaning: '红色', example: '红色', example2: '红花' },
    { char: '绿', pinyin: 'lǜ', meaning: '绿色', example: '绿色', example2: '绿草' },
    { char: '蓝', pinyin: 'lán', meaning: '蓝色', example: '蓝色', example2: '蓝天' },

    // 第十四组 (131-140)
    { char: '黄', pinyin: 'huáng', meaning: '黄色', example: '黄色', example2: '黄河' },
    { char: '白', pinyin: 'bái', meaning: '白色', example: '白色', example2: '白云' },
    { char: '黑', pinyin: 'hēi', meaning: '黑色', example: '黑色', example2: '黑夜' },
    { char: '青', pinyin: 'qīng', meaning: '青色', example: '青山', example2: '青蛙' },
    { char: '紫', pinyin: 'zǐ', meaning: '紫色', example: '紫色', example2: '紫花' },
    { char: '橙', pinyin: 'chéng', meaning: '橙色', example: '橙色', example2: '橙子' },
    { char: '粉', pinyin: 'fěn', meaning: '粉色', example: '粉色', example2: '粉红' },
    { char: '东', pinyin: 'dōng', meaning: '东边', example: '东方', example2: '东边' },
    { char: '西', pinyin: 'xī', meaning: '西边', example: '西方', example2: '西边' },
    { char: '南', pinyin: 'nán', meaning: '南边', example: '南方', example2: '南边' },

    // 第十五组 (141-150)
    { char: '北', pinyin: 'běi', meaning: '北边', example: '北方', example2: '北边' },
    { char: '海', pinyin: 'hǎi', meaning: '大海', example: '大海', example2: '海洋' },
    { char: '河', pinyin: 'hé', meaning: '河流', example: '河流', example2: '黄河' },
    { char: '湖', pinyin: 'hú', meaning: '湖泊', example: '湖泊', example2: '湖水' },
    { char: '岛', pinyin: 'dǎo', meaning: '岛屿', example: '岛屿', example2: '海岛' },
    { char: '沙', pinyin: 'shā', meaning: '沙子', example: '沙子', example2: '沙滩' },
    { char: '草', pinyin: 'cǎo', meaning: '小草', example: '小草', example2: '草地' },
    { char: '树', pinyin: 'shù', meaning: '大树', example: '大树', example2: '树木' },
    { char: '花', pinyin: 'huā', meaning: '花朵', example: '花朵', example2: '鲜花' },
    { char: '果', pinyin: 'guǒ', meaning: '水果', example: '水果', example2: '苹果' },

    // 第十六组 (151-160)
    { char: '叶', pinyin: 'yè', meaning: '树叶', example: '树叶', example2: '叶子' },
    { char: '虫', pinyin: 'chóng', meaning: '虫子', example: '虫子', example2: '昆虫' },
    { char: '鸟', pinyin: 'niǎo', meaning: '小鸟', example: '小鸟', example2: '鸟儿' },
    { char: '鱼', pinyin: 'yú', meaning: '鱼', example: '小鱼', example2: '金鱼' },
    { char: '马', pinyin: 'mǎ', meaning: '小马', example: '小马', example2: '马上' },
    { char: '牛', pinyin: 'niú', meaning: '牛', example: '水牛', example2: '牛奶' },
    { char: '羊', pinyin: 'yáng', meaning: '小羊', example: '小羊', example2: '绵羊' },
    { char: '猫', pinyin: 'māo', meaning: '猫咪', example: '小猫', example2: '熊猫' },
    { char: '狗', pinyin: 'gǒu', meaning: '小狗', example: '小狗', example2: '狼狗' },
    { char: '鸡', pinyin: 'jī', meaning: '小鸡', example: '小鸡', example2: '鸡蛋' },

    // 第十七组 (161-170)
    { char: '鸭', pinyin: 'yā', meaning: '鸭子', example: '小鸭', example2: '鸭蛋' },
    { char: '兔', pinyin: 'tù', meaning: '兔子', example: '兔子', example2: '白兔' },
    { char: '衣', pinyin: 'yī', meaning: '衣服', example: '衣服', example2: '上衣' },
    { char: '裤', pinyin: 'kù', meaning: '裤子', example: '裤子', example2: '短裤' },
    { char: '帽', pinyin: 'mào', meaning: '帽子', example: '帽子', example2: '衣帽' },
    { char: '鞋', pinyin: 'xié', meaning: '鞋子', example: '鞋子', example2: '拖鞋' },
    { char: '袜', pinyin: 'wà', meaning: '袜子', example: '袜子', example2: '棉袜' },
    { char: '吃', pinyin: 'chī', meaning: '吃饭', example: '吃饭', example2: '小吃' },
    { char: '喝', pinyin: 'hē', meaning: '喝水', example: '喝水', example2: '喝茶' },
    { char: '跑', pinyin: 'pǎo', meaning: '跑步', example: '跑步', example2: '快跑' },

    // 第十八组 (171-180)
    { char: '跳', pinyin: 'tiào', meaning: '跳跃', example: '跳舞', example2: '跳高' },
    { char: '坐', pinyin: 'zuò', meaning: '坐下', example: '坐下', example2: '请坐' },
    { char: '躺', pinyin: 'tǎng', meaning: '躺下', example: '躺下', example2: '躺在床上' },
    { char: '看', pinyin: 'kàn', meaning: '看见', example: '看书', example2: '看见' },
    { char: '听', pinyin: 'tīng', meaning: '听说', example: '听说', example2: '听歌' },
    { char: '说', pinyin: 'shuō', meaning: '说话', example: '说话', example2: '听说' },
    { char: '读', pinyin: 'dú', meaning: '读书', example: '读书', example2: '阅读' },
    { char: '写', pinyin: 'xiě', meaning: '写字', example: '写字', example2: '写作' },
    { char: '画', pinyin: 'huà', meaning: '画画', example: '画画', example2: '图画' },
    { char: '唱', pinyin: 'chàng', meaning: '唱歌', example: '唱歌', example2: '演唱' },

    // 第十九组 (181-190)
    { char: '做', pinyin: 'zuò', meaning: '做事', example: '做事', example2: '做饭' },
    { char: '学', pinyin: 'xué', meaning: '学习', example: '学习', example2: '学校' },
    { char: '笑', pinyin: 'xiào', meaning: '笑声', example: '笑声', example2: '微笑' },
    { char: '哭', pinyin: 'kū', meaning: '哭泣', example: '哭泣', example2: '哭声' },
    { char: '想', pinyin: 'xiǎng', meaning: '想到', example: '想到', example2: '想念' },
    { char: '知', pinyin: 'zhī', meaning: '知道', example: '知道', example2: '知识' },
    { char: '道', pinyin: 'dào', meaning: '道路', example: '道路', example2: '知道' },
    { char: '理', pinyin: 'lǐ', meaning: '道理', example: '道理', example2: '管理' },
    { char: '法', pinyin: 'fǎ', meaning: '方法', example: '方法', example2: '法律' },
    { char: '把', pinyin: 'bǎ', meaning: '把', example: '把门', example2: '把握' },

    // 第二十组 (191-200)
    { char: '让', pinyin: 'ràng', meaning: '让开', example: '让开', example2: '让步' },
    { char: '给', pinyin: 'gěi', meaning: '给', example: '给你', example2: '送给' },
    { char: '帮', pinyin: 'bāng', meaning: '帮助', example: '帮助', example2: '帮忙' },
    { char: '拿', pinyin: 'ná', meaning: '拿来', example: '拿来', example2: '拿到' },
    { char: '放', pinyin: 'fàng', meaning: '放下', example: '放下', example2: '放心' },
    { char: '起', pinyin: 'qǐ', meaning: '起来', example: '起来', example2: '起床' },
    { char: '进', pinyin: 'jìn', meaning: '进来', example: '进来', example2: '前进' },
    { char: '出', pinyin: 'chū', meaning: '出来', example: '出来', example2: '出去' },
    { char: '回', pinyin: 'huí', meaning: '回来', example: '回来', example2: '回家' },
    { char: '过', pinyin: 'guò', meaning: '过去', example: '过去', example2: '经过' },

    // 第二十一组 (201-210)
    { char: '能', pinyin: 'néng', meaning: '能够', example: '能够', example2: '能干' },
    { char: '会', pinyin: 'huì', meaning: '开会', example: '开会', example2: '会来' },
    { char: '可', pinyin: 'kě', meaning: '可以', example: '可以', example2: '可是' },
    { char: '要', pinyin: 'yào', meaning: '要是', example: '要是', example2: '需要' },
    { char: '想', pinyin: 'xiǎng', meaning: '想要', example: '想要', example2: '想想' },
    { char: '爱', pinyin: 'ài', meaning: '爱心', example: '爱心', example2: '可爱' },
    { char: '心', pinyin: 'xīn', meaning: '心里', example: '心里', example2: '开心' },
    { char: '意', pinyin: 'yì', meaning: '意思', example: '意思', example2: '愿意' },
    { char: '思', pinyin: 'sī', meaning: '思考', example: '思考', example2: '思想' },
    { char: '念', pinyin: 'niàn', meaning: '想念', example: '想念', example2: '念头' },

    // 第二十二组 (211-220)
    { char: '高', pinyin: 'gāo', meaning: '高兴', example: '高兴', example2: '高大' },
    { char: '兴', pinyin: 'xìng', meaning: '高兴', example: '高兴', example2: '兴趣' },
    { char: '伤', pinyin: 'shāng', meaning: '伤心', example: '伤心', example2: '伤害' },
    { char: '气', pinyin: 'qì', meaning: '生气', example: '生气', example2: '天气' },
    { char: '害', pinyin: 'hài', meaning: '害怕', example: '害怕', example2: '害人' },
    { char: '怕', pinyin: 'pà', meaning: '害怕', example: '害怕', example2: '可怕' },
    { char: '累', pinyin: 'lèi', meaning: '累了', example: '累了', example2: '受累' },
    { char: '困', pinyin: 'kùn', meaning: '困了', example: '困了', example2: '困难' },
    { char: '饿', pinyin: 'è', meaning: '饿了', example: '饿了', example2: '饥饿' },
    { char: '渴', pinyin: 'kě', meaning: '渴了', example: '渴了', example2: '口渴' },

    // 第二十三组 (221-230)
    { char: '冷', pinyin: 'lěng', meaning: '寒冷', example: '寒冷', example2: '冷水' },
    { char: '热', pinyin: 'rè', meaning: '热烈', example: '热烈', example2: '热水' },
    { char: '春', pinyin: 'chūn', meaning: '春天', example: '春天', example2: '春风' },
    { char: '夏', pinyin: 'xià', meaning: '夏天', example: '夏天', example2: '夏雨' },
    { char: '秋', pinyin: 'qiū', meaning: '秋天', example: '秋天', example2: '秋风' },
    { char: '冬', pinyin: 'dōng', meaning: '冬天', example: '冬天', example2: '冬雪' },
    { char: '江', pinyin: 'jiāng', meaning: '长江', example: '长江', example2: '江河' },
    { char: '洲', pinyin: 'zhōu', meaning: '沙洲', example: '沙洲', example2: '绿洲' },
    { char: '林', pinyin: 'lín', meaning: '森林', example: '森林', example2: '树林' },
    { char: '森', pinyin: 'sēn', meaning: '森林', example: '森林', example2: '森严' },

    // 第二十四组 (231-240)
    { char: '竹', pinyin: 'zhú', meaning: '竹子', example: '竹子', example2: '竹林' },
    { char: '米', pinyin: 'mǐ', meaning: '大米', example: '大米', example2: '米饭' },
    { char: '豆', pinyin: 'dòu', meaning: '大豆', example: '大豆', example2: '豆子' },
    { char: '瓜', pinyin: 'guā', meaning: '西瓜', example: '西瓜', example2: '瓜子' },
    { char: '菜', pinyin: 'cài', meaning: '蔬菜', example: '蔬菜', example2: '白菜' },
    { char: '瓜', pinyin: 'guā', meaning: '瓜果', example: '瓜果', example2: '黄瓜' },
    { char: '茶', pinyin: 'chá', meaning: '喝茶', example: '喝茶', example2: '茶叶' },
    { char: '烟', pinyin: 'yān', meaning: '烟火', example: '烟火', example2: '香烟' },
    { char: '酒', pinyin: 'jiǔ', meaning: '白酒', example: '白酒', example2: '喝酒' },
    { char: '肉', pinyin: 'ròu', meaning: '猪肉', example: '猪肉', example2: '牛肉' },

    // 第二十五组 (241-250)
    { char: '面', pinyin: 'miàn', meaning: '面条', example: '面条', example2: '方面' },
    { char: '饭', pinyin: 'fàn', meaning: '米饭', example: '米饭', example2: '吃饭' },
    { char: '包', pinyin: 'bāo', meaning: '包子', example: '包子', example2: '书包' },
    { char: '饺', pinyin: 'jiǎo', meaning: '饺子', example: '饺子', example2: '水饺' },
    { char: '汤', pinyin: 'tāng', meaning: '汤', example: '汤', example2: '喝汤' },
    { char: '糖', pinyin: 'táng', meaning: '糖果', example: '糖果', example2: '白糖' },
    { char: '果', pinyin: 'guǒ', meaning: '水果', example: '水果', example2: '瓜果' },
    { char: '冰', pinyin: 'bīng', meaning: '冰块', example: '冰块', example2: '冰冷' },
    { char: '冷', pinyin: 'lěng', meaning: '冷冻', example: '冷冻', example2: '冷藏' },
    { char: '热', pinyin: 'rè', meaning: '热闹', example: '热闹', example2: '热爱' },

    // 第二十六组 (251-260)
    { char: '街', pinyin: 'jiē', meaning: '街道', example: '街道', example2: '上街' },
    { char: '道', pinyin: 'dào', meaning: '街道', example: '街道', example2: '道路' },
    { char: '路', pinyin: 'lù', meaning: '道路', example: '道路', example2: '走路' },
    { char: '桥', pinyin: 'qiáo', meaning: '大桥', example: '大桥', example2: '小桥' },
    { char: '房', pinyin: 'fáng', meaning: '房子', example: '房子', example2: '厂房' },
    { char: '屋', pinyin: 'wū', meaning: '房屋', example: '房屋', example2: '屋子' },
    { char: '楼', pinyin: 'lóu', meaning: '楼房', example: '楼房', example2: '大楼' },
    { char: '房', pinyin: 'fáng', meaning: '房间', example: '房间', example2: '客房' },
    { char: '间', pinyin: 'jiān', meaning: '中间', example: '中间', example2: '时间' },
    { char: '室', pinyin: 'shì', meaning: '教室', example: '教室', example2: '室内' },

    // 第二十七组 (261-270)
    { char: '校', pinyin: 'xiào', meaning: '学校', example: '学校', example2: '校园' },
    { char: '园', pinyin: 'yuán', meaning: '校园', example: '校园', example2: '公园' },
    { char: '场', pinyin: 'chǎng', meaning: '场地', example: '场地', example2: '广场' },
    { char: '院', pinyin: 'yuàn', meaning: '医院', example: '医院', example2: '院长' },
    { char: '店', pinyin: 'diàn', meaning: '商店', example: '商店', example2: '书店' },
    { char: '馆', pinyin: 'guǎn', meaning: '图书馆', example: '图书馆', example2: '宾馆' },
    { char: '站', pinyin: 'zhàn', meaning: '车站', example: '车站', example2: '站台' },
    { char: '台', pinyin: 'tái', meaning: '舞台', example: '舞台', example2: '平台' },
    { char: '公', pinyin: 'gōng', meaning: '公共', example: '公共', example2: '公司' },
    { char: '司', pinyin: 'sī', meaning: '公司', example: '公司', example2: '司机' },

    // 第二十八组 (271-280)
    { char: '机', pinyin: 'jī', meaning: '飞机', example: '飞机', example2: '手机' },
    { char: '船', pinyin: 'chuán', meaning: '轮船', example: '轮船', example2: '小船' },
    { char: '火', pinyin: 'huǒ', meaning: '火车', example: '火车', example2: '大火' },
    { char: '气', pinyin: 'qì', meaning: '气球', example: '气球', example2: '天气' },
    { char: '红', pinyin: 'hóng', meaning: '红花', example: '红花', example2: '火红' },
    { char: '绿', pinyin: 'lǜ', meaning: '绿草', example: '绿草', example2: '草绿' },
    { char: '蓝', pinyin: 'lán', meaning: '蓝天', example: '蓝天', example2: '天蓝' },
    { char: '黄', pinyin: 'huáng', meaning: '黄河', example: '黄河', example2: '金黄' },
    { char: '白', pinyin: 'bái', meaning: '白云', example: '白云', example2: '白纸' },
    { char: '黑', pinyin: 'hēi', meaning: '黑夜', example: '黑夜', example2: '黑板' },

    // 第二十九组 (281-290)
    { char: '明', pinyin: 'míng', meaning: '明天', example: '明天', example2: '聪明' },
    { char: '亮', pinyin: 'liàng', meaning: '明亮', example: '明亮', example2: '月亮' },
    { char: '光', pinyin: 'guāng', meaning: '阳光', example: '阳光', example2: '光明' },
    { char: '暗', pinyin: 'àn', meaning: '黑暗', example: '黑暗', example2: '阴暗' },
    { char: '快', pinyin: 'kuài', meaning: '快乐', example: '快乐', example2: '快速' },
    { char: '慢', pinyin: 'màn', meaning: '慢慢', example: '慢慢', example2: '快慢' },
    { char: '早', pinyin: 'zǎo', meaning: '早上', example: '早上', example2: '早日' },
    { char: '晚', pinyin: 'wǎn', meaning: '晚上', example: '晚上', example2: '夜晚' },
    { char: '长', pinyin: 'cháng', meaning: '长大', example: '长大', example2: '很长' },
    { char: '短', pinyin: 'duǎn', meaning: '长短', example: '长短', example2: '很短' },

    // 第三十组 (291-300)
    { char: '多', pinyin: 'duō', meaning: '多少', example: '多少', example2: '很多' },
    { char: '少', pinyin: 'shǎo', meaning: '多少', example: '多少', example2: '很少' },
    { char: '大', pinyin: 'dà', meaning: '大小', example: '大小', example2: '大人' },
    { char: '小', pinyin: 'xiǎo', meaning: '大小', example: '大小', example2: '小心' },
    { char: '好', pinyin: 'hǎo', meaning: '好坏', example: '好坏', example2: '好人' },
    { char: '坏', pinyin: 'huài', meaning: '好坏', example: '好坏', example2: '坏人' },
    { char: '新', pinyin: 'xīn', meaning: '新旧', example: '新旧', example2: '新年' },
    { char: '旧', pinyin: 'jiù', meaning: '新旧', example: '新旧', example2: '旧年' },
    { char: '真', pinyin: 'zhēn', meaning: '真假', example: '真假', example2: '真的' },
    { char: '假', pinyin: 'jiǎ', meaning: '真假', example: '真假', example2: '假的' },
  ],

  // Level 1: 3岁 beginner (最基础的汉字)
  level1: [
    { char: '人', pinyin: 'rén', meaning: '人', example: '大人', example2: '小朋友' },
    { char: '大', pinyin: 'dà', meaning: '大', example: '大象', example2: '大苹果' },
    { char: '小', pinyin: 'xiǎo', meaning: '小', example: '小老鼠', example2: '小花猫' },
    { char: '上', pinyin: 'shàng', meaning: '上面', example: '上学', example2: '上山' },
    { char: '下', pinyin: 'xià', meaning: '下面', example: '下雨', example2: '下楼' },
    { char: '左', pinyin: 'zuǒ', meaning: '左边', example: '左手', example2: '向左' },
    { char: '右', pinyin: 'yòu', meaning: '右边', example: '右手', example2: '向右' },
    { char: '中', pinyin: 'zhōng', meaning: '中间', example: '中国', example2: '中午' },
    { char: '天', pinyin: 'tiān', meaning: '天空', example: '蓝天', example2: '天天开心' },
    { char: '地', pinyin: 'dì', meaning: '大地', example: '土地', example2: '大地' },
    { char: '日', pinyin: 'rì', meaning: '太阳', example: '日子', example2: '日出' },
    { char: '月', pinyin: 'yuè', meaning: '月亮', example: '月亮', example2: '一月' },
    { char: '水', pinyin: 'shuǐ', meaning: '水', example: '喝水', example2: '雨水' },
    { char: '火', pinyin: 'huǒ', meaning: '火', example: '大火', example2: '火苗' },
    { char: '山', pinyin: 'shān', meaning: '山', example: '大山', example2: '山上' },
    { char: '石', pinyin: 'shí', meaning: '石头', example: '石头', example2: '宝石' },
    { char: '田', pinyin: 'tián', meaning: '田地', example: '田野', example2: '田地' },
    { char: '土', pinyin: 'tǔ', meaning: '泥土', example: '土地', example2: '泥土' },
    { char: '木', pinyin: 'mù', meaning: '木头', example: '树木', example2: '木头' },
    { char: '禾', pinyin: 'hé', meaning: '禾苗', example: '禾苗', example2: '禾田' },
    { char: '口', pinyin: 'kǒu', meaning: '嘴巴', example: '人口', example2: '门口' },
    { char: '目', pinyin: 'mù', meaning: '眼睛', example: '目光', example2: '目录' },
    { char: '耳', pinyin: 'ěr', meaning: '耳朵', example: '耳朵', example2: '木耳' },
    { char: '手', pinyin: 'shǒu', meaning: '手', example: '小手', example2: '洗手' },
    { char: '足', pinyin: 'zú', meaning: '脚', example: '手足', example2: '足球' },
    { char: '心', pinyin: 'xīn', meaning: '心', example: '开心', example2: '小心' },
  ],

  // Level 2: 4岁 intermediate (生活常用字)
  level2: [
    { char: '一', pinyin: 'yī', meaning: '一个', example: '一个', example2: '第一天' },
    { char: '二', pinyin: 'èr', meaning: '二个', example: '二月', example2: '第二' },
    { char: '三', pinyin: 'sān', meaning: '三个', example: '三月', example2: '三人' },
    { char: '四', pinyin: 'sì', meaning: '四个', example: '四月', example2: '四季' },
    { char: '五', pinyin: 'wǔ', meaning: '五个', example: '五月', example2: '五天' },
    { char: '六', pinyin: 'liù', meaning: '六个', example: '六月', example2: '六人' },
    { char: '七', pinyin: 'qī', meaning: '七个', example: '七月', example2: '七天' },
    { char: '八', pinyin: 'bā', meaning: '八个', example: '八月', example2: '八方' },
    { char: '九', pinyin: 'jiǔ', meaning: '九个', example: '九月', example2: '九天' },
    { char: '十', pinyin: 'shí', meaning: '十个', example: '十月', example2: '十天' },
    { char: '爸', pinyin: 'bà', meaning: '爸爸', example: '爸爸', example2: '我爸' },
    { char: '妈', pinyin: 'mā', meaning: '妈妈', example: '妈妈', example2: '我妈' },
    { char: '爷', pinyin: 'yé', meaning: '爷爷', example: '爷爷', example2: '姥爷' },
    { char: '奶', pinyin: 'nǎi', meaning: '奶奶', example: '奶奶', example2: '牛奶' },
    { char: '哥', pinyin: 'gē', meaning: '哥哥', example: '哥哥', example2: '大哥' },
    { char: '姐', pinyin: 'jiě', meaning: '姐姐', example: '姐姐', example2: '大姐' },
    { char: '弟', pinyin: 'dì', meaning: '弟弟', example: '弟弟', example2: '兄弟' },
    { char: '妹', pinyin: 'mèi', meaning: '妹妹', example: '妹妹', example2: '姐妹' },
    { char: '你', pinyin: 'nǐ', meaning: '你', example: '你好', example2: '你们' },
    { char: '我', pinyin: 'wǒ', meaning: '我', example: '我们', example2: '我的' },
    { char: '他', pinyin: 'tā', meaning: '他', example: '他们', example2: '他人' },
    { char: '她', pinyin: 'tā', meaning: '她', example: '她们', example2: '她的' },
    { char: '它', pinyin: 'tā', meaning: '它', example: '它们', example2: '它的' },
    { char: '好', pinyin: 'hǎo', meaning: '好', example: '你好', example2: '好人' },
    { char: '来', pinyin: 'lái', meaning: '来', example: '过来', example2: '来人' },
    { char: '去', pinyin: 'qù', meaning: '去', example: '回去', example2: '出去' },
  ],

  // Level 3: 5岁 advanced (稍复杂的汉字)
  level3: [
    { char: '花', pinyin: 'huā', meaning: '花朵', example: '花朵', example2: '开花' },
    { char: '草', pinyin: 'cǎo', meaning: '小草', example: '小草', example2: '草地' },
    { char: '树', pinyin: 'shù', meaning: '大树', example: '大树', example2: '树木' },
    { char: '叶', pinyin: 'yè', meaning: '树叶', example: '树叶', example2: '叶子' },
    { char: '果', pinyin: 'guǒ', meaning: '水果', example: '水果', example2: '苹果' },
    { char: '鸟', pinyin: 'niǎo', meaning: '小鸟', example: '小鸟', example2: '飞鸟' },
    { char: '鱼', pinyin: 'yú', meaning: '小鱼', example: '小鱼', example2: '金鱼' },
    { char: '马', pinyin: 'mǎ', meaning: '马', example: '小马', example2: '马上' },
    { char: '牛', pinyin: 'niú', meaning: '牛', example: '黄牛', example2: '奶牛' },
    { char: '羊', pinyin: 'yáng', meaning: '羊', example: '山羊', example2: '绵羊' },
    { char: '猫', pinyin: 'māo', meaning: '猫咪', example: '小猫', example2: '熊猫' },
    { char: '狗', pinyin: 'gǒu', meaning: '小狗', example: '小狗', example2: '热狗' },
    { char: '鸡', pinyin: 'jī', meaning: '鸡', example: '小鸡', example2: '鸡蛋' },
    { char: '鸭', pinyin: 'yā', meaning: '鸭子', example: '鸭子', example2: '鸭蛋' },
    { char: '书', pinyin: 'shū', meaning: '书本', example: '书本', example2: '读书' },
    { char: '笔', pinyin: 'bǐ', meaning: '笔', example: '铅笔', example2: '毛笔' },
    { char: '纸', pinyin: 'zhǐ', meaning: '纸', example: '白纸', example2: '纸张' },
    { char: '车', pinyin: 'chē', meaning: '车', example: '汽车', example2: '火车' },
    { char: '船', pinyin: 'chuán', meaning: '船', example: '小船', example2: '轮船' },
    { char: '飞机', pinyin: 'fēi jī', meaning: '飞机', example: '大飞机', example2: '飞机场' },
    { char: '饭', pinyin: 'fàn', meaning: '饭', example: '吃饭', example2: '米饭' },
    { char: '面', pinyin: 'miàn', meaning: '面条', example: '面条', example2: '面包' },
    { char: '肉', pinyin: 'ròu', meaning: '肉', example: '牛肉', example2: '猪肉' },
    { char: '蛋', pinyin: 'dàn', meaning: '蛋', example: '鸡蛋', example2: '鸭蛋' },
    { char: '学', pinyin: 'xué', meaning: '学习', example: '学习', example2: '学生' },
  ],
}

// 分组设置
export const GROUP_SIZE = 10

// 获取所有汉字列表
export function getAllHanzi() {
  return hanziData.all
}

// 获取分组后的汉字
export function getHanziByGroup(groupIndex) {
  const all = hanziData.all
  const start = groupIndex * GROUP_SIZE
  return all.slice(start, start + GROUP_SIZE)
}

// 获取总组数
export function getTotalGroups() {
  return Math.ceil(hanziData.all.length / GROUP_SIZE)
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
  return hanziData.all.length
}

// 根据汉字查找数据
export function findHanzi(char) {
  const found = hanziData.all.find(h => h.char === char)
  if (found) return found
  for (const level of Object.values(hanziData)) {
    const foundInLevel = level.find(h => h.char === char)
    if (foundInLevel) return foundInLevel
  }
  return null
}
