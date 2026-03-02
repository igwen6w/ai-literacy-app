// 可爱的象形文字风格 SVG 图标
export const svgIcons = {
  // 人 - 简笔画小人
  人: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="25" r="12" fill="#FF9F43"/>
    <path d="M 50 40 L 50 65" stroke="#FF9F43" stroke-width="6" stroke-linecap="round"/>
    <path d="M 35 50 L 50 40 L 65 50" stroke="#FF9F43" stroke-width="5" stroke-linecap="round" fill="none"/>
    <path d="M 50 65 L 35 85" stroke="#FF9F43" stroke-width="5" stroke-linecap="round"/>
    <path d="M 50 65 L 65 85" stroke="#FF9F43" stroke-width="5" stroke-linecap="round"/>
    <circle cx="46" cy="23" r="2" fill="white"/>
    <circle cx="54" cy="23" r="2" fill="white"/>
    <path d="M 47 30 Q 50 32 53 30" stroke="#E65100" stroke-width="1.5" fill="none"/>
  </svg>`,

  // 大 - 张开双臂的人
  大: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="25" r="12" fill="#FF7043"/>
    <path d="M 50 40 L 50 70" stroke="#FF7043" stroke-width="6" stroke-linecap="round"/>
    <path d="M 20 45 L 50 40 L 80 45" stroke="#FF7043" stroke-width="5" stroke-linecap="round" fill="none"/>
    <path d="M 50 70 L 30 90" stroke="#FF7043" stroke-width="5" stroke-linecap="round"/>
    <path d="M 50 70 L 70 90" stroke="#FF7043" stroke-width="5" stroke-linecap="round"/>
    <circle cx="46" cy="23" r="2" fill="white"/>
    <circle cx="54" cy="23" r="2" fill="white"/>
  </svg>`,

  // 小 - 小鸟
  小: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="55" rx="20" ry="16" fill="#66BB6A"/>
    <circle cx="50" cy="38" r="14" fill="#66BB6A"/>
    <circle cx="45" cy="36" r="2.5" fill="white"/>
    <circle cx="55" cy="36" r="2.5" fill="white"/>
    <circle cx="45" cy="36" r="1" fill="#333"/>
    <circle cx="55" cy="36" r="1" fill="#333"/>
    <polygon points="50,42 47,48 53,48" fill="#FF9800"/>
    <path d="M 30 50 Q 20 45 15 50" stroke="#66BB6A" stroke-width="3" fill="none"/>
    <path d="M 70 50 Q 80 45 85 50" stroke="#66BB6A" stroke-width="3" fill="none"/>
    <ellipse cx="40" cy="62" rx="8" ry="5" fill="#81C784"/>
    <ellipse cx="60" cy="62" rx="8" ry="5" fill="#81C784"/>
  </svg>`,

  // 天 - 太阳和云朵
  天: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="75" cy="30" r="15" fill="#FFD54F"/>
    <g stroke="#FFD54F" stroke-width="2.5" stroke-linecap="round">
      <line x1="75" y1="8" x2="75" y2="13"/>
      <line x1="75" y1="47" x2="75" y2="52"/>
      <line x1="53" y1="30" x2="58" y2="30"/>
      <line x1="92" y1="30" x2="97" y2="30"/>
      <line x1="60" y1="15" x2="64" y2="19"/>
      <line x1="86" y1="41" x2="90" y2="45"/>
    </g>
    <ellipse cx="35" cy="65" rx="22" ry="14" fill="#E3F2FD"/>
    <ellipse cx="50" cy="60" rx="18" ry="12" fill="#BBDEFB"/>
    <ellipse cx="20" cy="60" rx="15" ry="10" fill="#E3F2FD"/>
    <circle cx="30" cy="55" r="2" fill="white" opacity="0.6"/>
    <circle cx="45" cy="58" r="1.5" fill="white" opacity="0.6"/>
  </svg>`,

  // 地 - 山丘和草地
  地: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="70" width="100" height="30" fill="#8BC34A"/>
    <path d="M 0 70 Q 25 50 50 70 Q 75 50 100 70 L 100 100 L 0 100 Z" fill="#9CCC65"/>
    <path d="M 20 70 L 35 45 L 50 70" fill="#AED581"/>
    <path d="M 60 70 L 75 40 L 90 70" fill="#AED581"/>
    <circle cx="25" cy="50" r="2" fill="white"/>
    <circle cx="35" cy="55" r="1.5" fill="white"/>
    <circle cx="70" cy="48" r="2" fill="white"/>
    <circle cx="80" cy="52" r="1.5" fill="white"/>
    <rect x="45" y="65" width="4" height="8" fill="#795548"/>
    <circle cx="47" cy="62" r="5" fill="#FF7043"/>
    <circle cx="44" cy="60" r="4" fill="#FF8A65"/>
    <circle cx="50" cy="60" r="4" fill="#FF8A65"/>
    <circle cx="47" cy="57" r="4" fill="#FFAB91"/>
  </svg>`,

  // 水 - 水滴
  水: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M 50 15 Q 25 45 25 60 A 25 25 0 0 0 75 60 Q 75 45 50 15" fill="#4FC3F7"/>
    <ellipse cx="35" cy="55" rx="6" ry="8" fill="white" opacity="0.5"/>
    <circle cx="45" cy="45" r="2" fill="white" opacity="0.7"/>
    <path d="M 40 30 Q 35 40 32 50" stroke="#29B6F6" stroke-width="2" fill="none"/>
    <circle cx="60" cy="70" r="4" fill="#81D4FA" opacity="0.6"/>
    <circle cx="70" cy="75" r="3" fill="#81D4FA" opacity="0.5"/>
  </svg>`,

  // 火 - 火焰
  火: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M 50 15 Q 35 35 30 50 Q 25 70 40 80 Q 50 85 60 80 Q 75 70 70 50 Q 65 35 50 15" fill="#FF7043"/>
    <path d="M 50 30 Q 40 45 38 55 Q 35 65 45 72 Q 50 75 55 72 Q 65 65 62 55 Q 60 45 50 30" fill="#FFAB40"/>
    <path d="M 50 40 Q 45 50 44 58 Q 43 64 48 68 Q 50 70 52 68 Q 57 64 56 58 Q 55 50 50 40" fill="#FFD54F"/>
    <circle cx="42" cy="55" r="2" fill="white" opacity="0.4"/>
  </svg>`,

  // 山 - 三座山峰
  山: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M 10 85 L 25 45 L 40 85" fill="#8D6E63"/>
    <path d="M 35 85 L 50 30 L 65 85" fill="#795548"/>
    <path d="M 60 85 L 75 50 L 90 85" fill="#8D6E63"/>
    <path d="M 25 45 L 32 85" stroke="#6D4C41" stroke-width="1" fill="none"/>
    <path d="M 50 30 L 42 85" stroke="#5D4037" stroke-width="1" fill="none"/>
    <path d="M 75 50 L 68 85" stroke="#6D4C41" stroke-width="1" fill="none"/>
    <polygon points="45,50 48,40 51,50" fill="white"/>
    <polygon points="23,60 26,50 29,60" fill="white" opacity="0.7"/>
  </svg>`,

  // 日 - 太阳
  日: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="22" fill="#FFC107"/>
    <circle cx="50" cy="50" r="16" fill="#FFD54F"/>
    <g stroke="#FFC107" stroke-width="3" stroke-linecap="round">
      <line x1="50" y1="15" x2="50" y2="22"/>
      <line x1="50" y1="78" x2="50" y2="85"/>
      <line x1="15" y1="50" x2="22" y2="50"/>
      <line x1="78" y1="50" x2="85" y2="50"/>
      <line x1="25" y1="25" x2="30" y2="30"/>
      <line x1="70" y1="70" x2="75" y2="75"/>
      <line x1="75" y1="25" x2="70" y2="30"/>
      <line x1="30" y1="70" x2="25" y2="75"/>
    </g>
    <circle cx="45" cy="47" r="3" fill="#FF8F00" opacity="0.5"/>
  </svg>`,

  // 月 - 月亮和星星
  月: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M 55 20 A 25 25 0 1 1 55 80 A 18 18 0 1 0 55 20" fill="#FFD54F"/>
    <circle cx="75" cy="35" r="2" fill="white"/>
    <circle cx="85" cy="50" r="1.5" fill="white"/>
    <circle cx="78" cy="65" r="2" fill="white"/>
    <circle cx="25" cy="30" r="1.5" fill="#FFF9C4"/>
    <circle cx="20" cy="55" r="1" fill="#FFF9C4"/>
    <circle cx="30" cy="70" r="1.5" fill="#FFF9C4"/>
    <circle cx="70" cy="25" r="1" fill="#FFF9C4"/>
  </svg>`,

  // 数字
  一: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="48" width="60" height="8" rx="4" fill="#E91E63"/>
    <circle cx="30" cy="52" r="3" fill="#F48FB1"/>
    <circle cx="70" cy="52" r="3" fill="#F48FB1"/>
  </svg>`,

  二: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="32" width="60" height="8" rx="4" fill="#9C27B0"/>
    <rect x="20" y="60" width="60" height="8" rx="4" fill="#9C27B0"/>
    <circle cx="30" cy="36" r="2.5" fill="#CE93D8"/>
    <circle cx="70" cy="64" r="2.5" fill="#CE93D8"/>
  </svg>`,

  三: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="20" width="60" height="8" rx="4" fill="#3F51B5"/>
    <rect x="20" y="46" width="60" height="8" rx="4" fill="#3F51B5"/>
    <rect x="20" y="72" width="60" height="8" rx="4" fill="#3F51B5"/>
    <circle cx="30" cy="24" r="2" fill="#9FA8DA"/>
    <circle cx="50" cy="50" r="2" fill="#9FA8DA"/>
    <circle cx="70" cy="76" r="2" fill="#9FA8DA"/>
  </svg>`,

  // 家人 - 爸爸
  爸: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="25" r="12" fill="#FFCC80"/>
    <path d="M 35 40 L 35 75" stroke="#5C6BC0" stroke-width="5" stroke-linecap="round"/>
    <path d="M 65 40 L 65 75" stroke="#5C6BC0" stroke-width="5" stroke-linecap="round"/>
    <path d="M 35 40 L 65 40 L 60 70 L 40 70 Z" fill="#5C6BC0"/>
    <path d="M 35 75 L 30 90" stroke="#5C6BC0" stroke-width="4" stroke-linecap="round"/>
    <path d="M 65 75 L 70 90" stroke="#5C6BC0" stroke-width="4" stroke-linecap="round"/>
    <path d="M 38 20 Q 50 15 62 20" stroke="#5D4037" stroke-width="3" fill="none"/>
    <circle cx="45" cy="26" r="1.5" fill="#333"/>
    <circle cx="55" cy="26" r="1.5" fill="#333"/>
    <path d="M 47 32 Q 50 34 53 32" stroke="#333" stroke-width="1" fill="none"/>
  </svg>`,

  // 妈妈
  妈: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="25" r="12" fill="#FFCC80"/>
    <path d="M 35 40 Q 50 35 65 40 L 65 75 Q 50 80 35 75 Z" fill="#F06292"/>
    <path d="M 35 75 L 32 88" stroke="#F06292" stroke-width="4" stroke-linecap="round"/>
    <path d="M 65 75 L 68 88" stroke="#F06292" stroke-width="4" stroke-linecap="round"/>
    <circle cx="45" cy="25" r="1.5" fill="#333"/>
    <circle cx="55" cy="25" r="1.5" fill="#333"/>
    <path d="M 47 31 Q 50 33 53 31" stroke="#333" stroke-width="1" fill="none"/>
    <path d="M 30 45 Q 25 50 30 55" stroke="#F48FB1" stroke-width="2" fill="none"/>
    <path d="M 70 45 Q 75 50 70 55" stroke="#F48FB1" stroke-width="2" fill="none"/>
  </svg>`,

  // 动物
  鸟: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="55" cy="55" rx="22" ry="16" fill="#81C784"/>
    <circle cx="42" cy="42" r="12" fill="#81C784"/>
    <circle cx="38" cy="40" r="2" fill="white"/>
    <circle cx="38" cy="40" r="1" fill="#333"/>
    <polygon points="32,44 28,48 34,48" fill="#FF9800"/>
    <path d="M 33 50 Q 28 55 32 60" stroke="#66BB6A" stroke-width="3" fill="none"/>
    <path d="M 77 50 Q 85 55 80 60" stroke="#66BB6A" stroke-width="3" fill="none"/>
    <ellipse cx="40" cy="62" rx="10" ry="6" fill="#A5D6A7"/>
    <ellipse cx="70" cy="62" rx="10" ry="6" fill="#A5D6A7"/>
    <circle cx="50" cy="58" r="1.5" fill="#C8E6C9"/>
  </svg>`,

  鱼: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="55" cy="52" rx="28" ry="18" fill="#4FC3F7"/>
    <polygon points="27,52 12,42 12,62" fill="#4FC3F7"/>
    <circle cx="72" cy="47" r="4" fill="white"/>
    <circle cx="73" cy="48" r="2" fill="#333"/>
    <path d="M 50 52 Q 45 58 40 52 Q 45 46 50 52" fill="#B3E5FC"/>
    <path d="M 55 35 L 60 25 L 65 35" fill="#FF7043"/>
    <path d="M 48 68 L 52 75 L 56 68" fill="#FF7043"/>
    <path d="M 65 68 L 69 75 L 73 68" fill="#FF7043"/>
    <path d="M 60 52 Q 75 45 85 50" stroke="#29B6F6" stroke-width="2" fill="none"/>
  </svg>`,

  猫: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="58" rx="22" ry="18" fill="#FFB74D"/>
    <circle cx="50" cy="38" r="14" fill="#FFB74D"/>
    <polygon points="38,28 40,18 46,26" fill="#FFB74D"/>
    <polygon points="62,28 60,18 54,26" fill="#FFB74D"/>
    <circle cx="43" cy="36" r="3" fill="white"/>
    <circle cx="57" cy="36" r="3" fill="white"/>
    <circle cx="44" cy="37" r="1.5" fill="#333"/>
    <circle cx="56" cy="37" r="1.5" fill="#333"/>
    <polygon points="50,42 47,47 53,47" fill="#FF8A65"/>
    <path d="M 32 32 L 38 34" stroke="#8D6E63" stroke-width="2"/>
    <path d="M 68 32 L 62 34" stroke="#8D6E63" stroke-width="2"/>
    <ellipse cx="35" cy="55" rx="3" ry="5" fill="#FFCC80"/>
    <ellipse cx="65" cy="55" rx="3" ry="5" fill="#FFCC80"/>
    <path d="M 48 70 Q 50 72 52 70" stroke="#8D6E63" stroke-width="1.5" fill="none"/>
  </svg>`,

  狗: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="60" rx="24" ry="18" fill="#BCAAA4"/>
    <circle cx="50" cy="38" r="14" fill="#BCAAA4"/>
    <ellipse cx="35" cy="50" rx="6" ry="10" fill="#BCAAA4"/>
    <ellipse cx="65" cy="50" rx="6" ry="10" fill="#BCAAA4"/>
    <ellipse cx="42" cy="30" rx="4" ry="8" fill="#8D6E63"/>
    <ellipse cx="58" cy="30" rx="4" ry="8" fill="#8D6E63"/>
    <circle cx="44" cy="36" r="3.5" fill="white"/>
    <circle cx="56" cy="36" r="3.5" fill="white"/>
    <circle cx="44" cy="37" r="1.5" fill="#333"/>
    <circle cx="56" cy="37" r="1.5" fill="#333"/>
    <ellipse cx="50" cy="44" rx="5" ry="4" fill="#5D4037"/>
    <circle cx="50" cy="42" r="2" fill="#3E2723"/>
    <path d="M 50 75 L 50 82" stroke="#8D6E63" stroke-width="3"/>
    <ellipse cx="50" cy="85" rx="6" ry="4" fill="#8D6E63"/>
  </svg>`,

  花: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="8" fill="#FFEB3B"/>
    <ellipse cx="50" cy="30" rx="10" ry="14" fill="#F48FB1"/>
    <ellipse cx="70" cy="50" rx="14" ry="10" fill="#F48FB1"/>
    <ellipse cx="50" cy="70" rx="10" ry="14" fill="#F48FB1"/>
    <ellipse cx="30" cy="50" rx="14" ry="10" fill="#F48FB1"/>
    <ellipse cx="63" cy="37" rx="7" ry="7" fill="#F8BBD9"/>
    <ellipse cx="63" cy="63" rx="7" ry="7" fill="#F8BBD9"/>
    <ellipse cx="37" cy="63" rx="7" ry="7" fill="#F8BBD9"/>
    <ellipse cx="37" cy="37" rx="7" ry="7" fill="#F8BBD9"/>
    <rect x="48" y="65" width="4" height="30" fill="#66BB6A"/>
    <ellipse cx="40" cy="75" rx="10" ry="5" fill="#81C784"/>
    <ellipse cx="62" cy="70" rx="8" ry="4" fill="#81C784"/>
  </svg>`,

  树: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="42" y="70" width="16" height="25" fill="#8D6E63"/>
    <circle cx="50" cy="45" r="28" fill="#66BB6A"/>
    <circle cx="35" cy="35" r="15" fill="#81C784"/>
    <circle cx="65" cy="35" r="15" fill="#81C784"/>
    <circle cx="50" cy="25" r="18" fill="#A5D6A7"/>
    <circle cx="30" cy="50" r="12" fill="#81C784"/>
    <circle cx="70" cy="50" r="12" fill="#81C784"/>
    <circle cx="40" cy="30" r="2" fill="#C8E6C9"/>
    <circle cx="60" cy="28" r="1.5" fill="#C8E6C9"/>
    <circle cx="55" cy="40" r="2" fill="#C8E6C9"/>
    <circle cx="45" cy="20" r="1.5" fill="#C8E6C9"/>
  </svg>`,

  车: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="15" y="45" width="70" height="25" rx="5" fill="#EF5350"/>
    <rect x="22" y="30" width="40" height="18" rx="3" fill="#FFCDD2"/>
    <rect x="28" y="33" width="12" height="12" fill="#B3E5FC"/>
    <rect x="44" y="33" width="12" height="12" fill="#B3E5FC"/>
    <circle cx="30" cy="72" r="10" fill="#424242"/>
    <circle cx="30" cy="72" r="5" fill="#BDBDBD"/>
    <circle cx="70" cy="72" r="10" fill="#424242"/>
    <circle cx="70" cy="72" r="5" fill="#BDBDBD"/>
    <rect x="12" y="55" width="4" height="8" fill="#FFD54F"/>
    <rect x="84" y="55" width="4" height="8" fill="#FFD54F"/>
    <circle cx="78" cy="50" r="2" fill="white"/>
  </svg>`,

  上: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="70" width="60" height="8" rx="4" fill="#00BCD4"/>
    <path d="M 50 75 L 50 20" stroke="#00BCD4" stroke-width="8" stroke-linecap="round"/>
    <path d="M 35 30 L 50 18 L 65 30" stroke="#00BCD4" stroke-width="6" stroke-linecap="round" fill="none"/>
    <circle cx="50" cy="25" r="3" fill="#B2EBF2"/>
  </svg>`,

  下: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="30" width="60" height="8" rx="4" fill="#00BCD4"/>
    <path d="M 50 35 L 50 80" stroke="#00BCD4" stroke-width="8" stroke-linecap="round"/>
    <path d="M 35 70 L 50 82 L 65 70" stroke="#00BCD4" stroke-width="6" stroke-linecap="round" fill="none"/>
    <circle cx="50" cy="75" r="3" fill="#B2EBF2"/>
  </svg>`,

  口: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="28" y="28" width="44" height="44" rx="8" fill="#FF8A65"/>
    <rect x="35" y="35" width="30" height="30" rx="5" fill="#FFCCBC"/>
    <ellipse cx="50" cy="50" rx="8" ry="5" fill="#FF5722"/>
    <circle cx="45" cy="48" r="1.5" fill="white"/>
  </svg>`,

  手: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="45" cy="70" rx="12" ry="15" fill="#FFCC80"/>
    <rect x="35" y="35" width="8" height="25" rx="4" fill="#FFCC80"/>
    <rect x="45" y="28" width="8" height="32" rx="4" fill="#FFCC80"/>
    <rect x="55" y="32" width="8" height="28" rx="4" fill="#FFCC80"/>
    <rect x="65" y="40" width="7" height="22" rx="3" fill="#FFCC80"/>
    <circle cx="39" cy="32" r="3" fill="#FFE0B2"/>
    <circle cx="49" cy="25" r="3" fill="#FFE0B2"/>
    <circle cx="59" cy="29" r="3" fill="#FFE0B2"/>
    <circle cx="69" cy="36" r="2.5" fill="#FFE0B2"/>
  </svg>`,

  足: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="35" rx="18" ry="12" fill="#A1887F"/>
    <rect x="42" y="42" width="16" height="30" rx="3" fill="#A1887F"/>
    <ellipse cx="50" cy="75" rx="20" ry="10" fill="#8D6E63"/>
    <circle cx="38" cy="30" r="3" fill="#D7CCC8"/>
    <circle cx="50" cy="26" r="3" fill="#D7CCC8"/>
    <circle cx="62" cy="30" r="3" fill="#D7CCC8"/>
    <ellipse cx="40" cy="72" rx="4" ry="3" fill="#6D4C41"/>
    <ellipse cx="50" cy="75" rx="4" ry="3" fill="#6D4C41"/>
    <ellipse cx="60" cy="72" rx="4" ry="3" fill="#6D4C41"/>
  </svg>`,

  目: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="50" rx="30" ry="22" fill="#42A5F5"/>
    <ellipse cx="50" cy="50" rx="20" ry="14" fill="white"/>
    <circle cx="50" cy="50" r="10" fill="#1E88E5"/>
    <circle cx="50" cy="50" r="5" fill="#0D47A1"/>
    <circle cx="54" cy="46" r="3" fill="white"/>
    <ellipse cx="25" cy="50" rx="5" ry="10" fill="#90CAF9"/>
    <ellipse cx="75" cy="50" rx="5" ry="10" fill="#90CAF9"/>
    <ellipse cx="50" cy="28" rx="8" ry="4" fill="#BBDEFB"/>
    <ellipse cx="50" cy="72" rx="8" ry="4" fill="#BBDEFB"/>
  </svg>`,

  耳: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="50" rx="18" ry="28" fill="#FFCC80"/>
    <ellipse cx="50" cy="50" rx="12" ry="20" fill="#FFE0B2"/>
    <ellipse cx="50" cy="50" rx="6" ry="10" fill="#FFB74D"/>
    <path d="M 50 32 Q 40 35 38 45" stroke="#FF8A65" stroke-width="2" fill="none"/>
    <path d="M 50 68 Q 40 65 38 55" stroke="#FF8A65" stroke-width="2" fill="none"/>
    <circle cx="65" cy="45" r="2" fill="#FFE0B2"/>
    <circle cx="68" cy="55" r="1.5" fill="#FFE0B2"/>
  </svg>`,

  心: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M 50 30 Q 30 10 15 30 Q 5 50 50 85 Q 95 50 85 30 Q 70 10 50 30" fill="#E91E63"/>
    <path d="M 50 38 Q 35 25 25 38 Q 20 48 50 72" fill="#F48FB1"/>
    <circle cx="35" cy="35" r="2" fill="white" opacity="0.5"/>
    <circle cx="65" cy="35" r="2" fill="white" opacity="0.5"/>
  </svg>`,

  // 左 - 左手向左指
  左: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="45" cy="70" rx="12" ry="15" fill="#FFCC80"/>
    <rect x="35" y="35" width="8" height="25" rx="4" fill="#FFCC80"/>
    <rect x="45" y="28" width="8" height="32" rx="4" fill="#FFCC80"/>
    <rect x="55" y="32" width="8" height="28" rx="4" fill="#FFCC80"/>
    <rect x="20" y="40" width="7" height="22" rx="3" fill="#FFCC80"/>
    <circle cx="39" cy="32" r="3" fill="#FFE0B2"/>
    <circle cx="49" cy="25" r="3" fill="#FFE0B2"/>
    <circle cx="59" cy="29" r="3" fill="#FFE0B2"/>
    <circle cx="24" cy="36" r="2.5" fill="#FFE0B2"/>
    <path d="M 15 50 L 5 45" stroke="#FFCC80" stroke-width="4" stroke-linecap="round"/>
    <polygon points="5,45 0,40 10,38" fill="#FFCC80"/>
  </svg>`,

  // 右 - 右手向右指
  右: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="55" cy="70" rx="12" ry="15" fill="#FFCC80"/>
    <rect x="45" y="35" width="8" height="25" rx="4" fill="#FFCC80"/>
    <rect x="55" y="28" width="8" height="32" rx="4" fill="#FFCC80"/>
    <rect x="65" y="32" width="8" height="28" rx="4" fill="#FFCC80"/>
    <rect x="75" y="40" width="7" height="22" rx="3" fill="#FFCC80"/>
    <circle cx="49" cy="32" r="3" fill="#FFE0B2"/>
    <circle cx="59" cy="25" r="3" fill="#FFE0B2"/>
    <circle cx="69" cy="29" r="3" fill="#FFE0B2"/>
    <circle cx="79" cy="36" r="2.5" fill="#FFE0B2"/>
    <path d="M 82 50 L 95 45" stroke="#FFCC80" stroke-width="4" stroke-linecap="round"/>
    <polygon points="95,45 100,40 90,38" fill="#FFCC80"/>
  </svg>`,

  // 中 - 靶心
  中: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="35" fill="#FF5252"/>
    <circle cx="50" cy="50" r="28" fill="white"/>
    <circle cx="50" cy="50" r="20" fill="#FF5252"/>
    <circle cx="50" cy="50" r="14" fill="white"/>
    <circle cx="50" cy="50" r="8" fill="#FF5252"/>
    <circle cx="50" cy="50" r="3" fill="#FFD740"/>
    <circle cx="35" cy="40" r="3" fill="white" opacity="0.8"/>
    <circle cx="65" cy="45" r="2" fill="white" opacity="0.6"/>
    <circle cx="40" cy="65" r="2.5" fill="white" opacity="0.7"/>
  </svg>`,

  // 石 - 石头
  石: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="55" rx="30" ry="22" fill="#9E9E9E"/>
    <ellipse cx="50" cy="55" rx="24" ry="16" fill="#BDBDBD"/>
    <ellipse cx="40" cy="50" rx="8" ry="5" fill="#757575"/>
    <ellipse cx="60" cy="58" rx="6" ry="4" fill="#757575"/>
    <ellipse cx="48" cy="48" rx="4" ry="3" fill="#E0E0E0"/>
    <circle cx="35" cy="58" r="2" fill="#616161"/>
    <circle cx="65" cy="52" r="1.5" fill="#616161"/>
  </svg>`,

  // 田 - 田地
  田: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="15" y="25" width="70" height="55" rx="5" fill="#8BC34A"/>
    <rect x="22" y="32" width="25" height="20" rx="2" fill="#AED581"/>
    <rect x="53" y="32" width="25" height="20" rx="2" fill="#AED581"/>
    <rect x="22" y="57" width="25" height="18" rx="2" fill="#AED581"/>
    <rect x="53" y="57" width="25" height="18" rx="2" fill="#AED581"/>
    <path d="M 28 40 Q 32 38 36 42" stroke="#7CB342" stroke-width="1.5" fill="none"/>
    <path d="M 30 46 Q 34 44 38 48" stroke="#7CB342" stroke-width="1.5" fill="none"/>
    <path d="M 58 40 Q 62 38 66 42" stroke="#7CB342" stroke-width="1.5" fill="none"/>
    <path d="M 60 46 Q 64 44 68 48" stroke="#7CB342" stroke-width="1.5" fill="none"/>
    <path d="M 28 63 Q 32 61 36 65" stroke="#7CB342" stroke-width="1.5" fill="none"/>
    <path d="M 60 63 Q 64 61 68 65" stroke="#7CB342" stroke-width="1.5" fill="none"/>
  </svg>`,

  // 土 - 泥土
  土: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="15" y="70" width="70" height="20" rx="3" fill="#795548"/>
    <rect x="20" y="75" width="60" height="12" rx="2" fill="#8D6E63"/>
    <ellipse cx="35" cy="68" rx="10" ry="5" fill="#A1887F"/>
    <ellipse cx="65" cy="66" rx="8" ry="4" fill="#A1887F"/>
    <circle cx="30" cy="72" r="2" fill="#6D4C41"/>
    <circle cx="50" cy="70" r="1.5" fill="#6D4C41"/>
    <circle cx="70" cy="73" r="2" fill="#6D4C41"/>
    <path d="M 45 50 L 55 50 L 50 65 Z" fill="#A1887F"/>
    <path d="M 48 50 L 52 50 L 50 55 Z" fill="#8D6E63"/>
  </svg>`,

  // 木 - 大树
  木: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="45" y="55" width="10" height="40" fill="#8D6E63"/>
    <circle cx="50" cy="40" r="22" fill="#66BB6A"/>
    <circle cx="35" cy="35" r="12" fill="#81C784"/>
    <circle cx="65" cy="35" r="12" fill="#81C784"/>
    <circle cx="50" cy="25" r="14" fill="#A5D6A7"/>
    <circle cx="32" cy="45" r="8" fill="#81C784"/>
    <circle cx="68" cy="45" r="8" fill="#81C784"/>
    <circle cx="40" cy="32" r="2" fill="#C8E6C9"/>
    <circle cx="60" cy="28" r="1.5" fill="#C8E6C9"/>
    <circle cx="50" cy="38" r="2" fill="#C8E6C9"/>
    <ellipse cx="50" cy="85" rx="8" ry="3" fill="#6D4C41"/>
  </svg>`,

  // 禾 - 禾苗
  禾: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M 50 85 L 50 45" stroke="#7CB342" stroke-width="3" stroke-linecap="round"/>
    <path d="M 50 50 Q 35 35 25 40" stroke="#8BC34A" stroke-width="3" stroke-linecap="round" fill="none"/>
    <path d="M 50 55 Q 40 45 30 50" stroke="#8BC34A" stroke-width="2" stroke-linecap="round" fill="none"/>
    <ellipse cx="23" cy="38" rx="5" ry="8" fill="#CDDC39"/>
    <ellipse cx="28" cy="48" rx="4" ry="6" fill="#CDDC39"/>
    <path d="M 50 50 Q 65 35 75 40" stroke="#8BC34A" stroke-width="3" stroke-linecap="round" fill="none"/>
    <path d="M 50 55 Q 60 45 70 50" stroke="#8BC34A" stroke-width="2" stroke-linecap="round" fill="none"/>
    <ellipse cx="77" cy="38" rx="5" ry="8" fill="#CDDC39"/>
    <ellipse cx="72" cy="48" rx="4" ry="6" fill="#CDDC39"/>
    <path d="M 50 45 Q 50 30 50 20" stroke="#7CB342" stroke-width="2" stroke-linecap="round"/>
    <ellipse cx="50" cy="18" rx="4" ry="6" fill="#AFB42B"/>
    <circle cx="45" cy="35" r="1.5" fill="#C5E1A5"/>
    <circle cx="55" cy="32" r="1.5" fill="#C5E1A5"/>
  </svg>`,

  // 数字四五六七八九十
  四: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="20" width="60" height="8" rx="4" fill="#00BCD4"/>
    <rect x="20" y="38" width="8" height="45" rx="4" fill="#00BCD4"/>
    <rect x="45" y="46" width="35" height="8" rx="4" fill="#00BCD4"/>
    <circle cx="28" cy="24" r="2" fill="#80DEEA"/>
    <circle cx="72" cy="24" r="2" fill="#80DEEA"/>
  </svg>`,

  五: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="20" width="60" height="8" rx="4" fill="#FF9800"/>
    <rect x="35" y="20" width="8" height="30" rx="4" fill="#FF9800"/>
    <rect x="20" y="55" width="60" height="8" rx="4" fill="#FF9800"/>
    <rect x="35" y="63" width="8" height="20" rx="4" fill="#FF9800"/>
    <circle cx="28" cy="24" r="2" fill="#FFE0B2"/>
    <circle cx="72" cy="24" r="2" fill="#FFE0B2"/>
    <circle cx="38" cy="78" r="2" fill="#FFE0B2"/>
  </svg>`,

  六: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M 50 18 Q 30 18 30 38 Q 30 55 50 55 Q 70 55 70 38 Q 70 18 50 18" fill="#9C27B0"/>
    <path d="M 35 35 Q 50 30 65 35" stroke="#E1BEE7" stroke-width="2" fill="none"/>
    <circle cx="42" cy="45" r="2" fill="white" opacity="0.6"/>
    <circle cx="58" cy="45" r="2" fill="white" opacity="0.6"/>
    <path d="M 50 55 L 50 85" stroke="#9C27B0" stroke-width="4" stroke-linecap="round"/>
    <circle cx="50" cy="85" r="5" fill="#9C27B0"/>
  </svg>`,

  七: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="25" width="60" height="8" rx="4" fill="#4CAF50"/>
    <path d="M 70 33 L 40 85" stroke="#4CAF50" stroke-width="6" stroke-linecap="round"/>
    <circle cx="28" cy="29" r="2" fill="#A5D6A7"/>
    <circle cx="72" cy="29" r="2" fill="#A5D6A7"/>
    <circle cx="60" cy="50" r="2" fill="#A5D6A7"/>
    <circle cx="50" cy="70" r="2" fill="#A5D6A7"/>
  </svg>`,

  八: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M 35 25 Q 30 45 35 60" stroke="#E91E63" stroke-width="6" stroke-linecap="round" fill="none"/>
    <path d="M 65 25 Q 70 45 65 60" stroke="#E91E63" stroke-width="6" stroke-linecap="round" fill="none"/>
    <circle cx="32" cy="30" r="2" fill="#F8BBD9"/>
    <circle cx="38" cy="50" r="2" fill="#F8BBD9"/>
    <circle cx="68" cy="30" r="2" fill="#F8BBD9"/>
    <circle cx="62" cy="50" r="2" fill="#F8BBD9"/>
    <path d="M 40 70 Q 50 65 60 70" stroke="#E91E63" stroke-width="3" stroke-linecap="round" fill="none"/>
  </svg>`,

  九: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="30" r="18" fill="#3F51B5"/>
    <path d="M 50 48 L 50 75" stroke="#3F51B5" stroke-width="6" stroke-linecap="round"/>
    <path d="M 50 75 Q 50 85 65 85" stroke="#3F51B5" stroke-width="6" stroke-linecap="round"/>
    <circle cx="45" cy="27" r="2" fill="white"/>
    <circle cx="55" cy="27" r="2" fill="white"/>
    <circle cx="50" cy="35" r="2" fill="#9FA8DA"/>
    <circle cx="65" cy="82" r="2" fill="#9FA8DA"/>
  </svg>`,

  十: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="46" width="60" height="8" rx="4" fill="#795548"/>
    <rect x="46" y="20" width="8" height="60" rx="4" fill="#795548"/>
    <circle cx="28" cy="50" r="2" fill="#BCAAA4"/>
    <circle cx="72" cy="50" r="2" fill="#BCAAA4"/>
    <circle cx="50" cy="28" r="2" fill="#BCAAA4"/>
    <circle cx="50" cy="72" r="2" fill="#BCAAA4"/>
  </svg>`,

  // 家人 - 爷爷
  爷: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="25" r="12" fill="#FFCC80"/>
    <path d="M 35 40 L 35 75" stroke="#607D8B" stroke-width="5" stroke-linecap="round"/>
    <path d="M 65 40 L 65 75" stroke="#607D8B" stroke-width="5" stroke-linecap="round"/>
    <path d="M 35 40 L 65 40 L 60 70 L 40 70 Z" fill="#607D8B"/>
    <path d="M 35 75 L 30 90" stroke="#607D8B" stroke-width="4" stroke-linecap="round"/>
    <path d="M 65 75 L 70 90" stroke="#607D8B" stroke-width="4" stroke-linecap="round"/>
    <path d="M 38 15 Q 50 10 62 15" stroke="#9E9E9E" stroke-width="3" fill="none"/>
    <path d="M 40 10 Q 50 5 60 10" stroke="#BDBDBD" stroke-width="2" fill="none"/>
    <circle cx="45" cy="26" r="1.5" fill="#333"/>
    <circle cx="55" cy="26" r="1.5" fill="#333"/>
    <path d="M 47 32 Q 50 34 53 32" stroke="#333" stroke-width="1" fill="none"/>
    <path d="M 35 30 Q 30 35 35 40" stroke="#BDBDBD" stroke-width="2" fill="none"/>
  </svg>`,

  // 奶奶
  奶: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="25" r="12" fill="#FFCC80"/>
    <path d="M 35 40 Q 50 35 65 40 L 65 75 Q 50 80 35 75 Z" fill="#E91E63"/>
    <path d="M 35 75 L 32 88" stroke="#E91E63" stroke-width="4" stroke-linecap="round"/>
    <path d="M 65 75 L 68 88" stroke="#E91E63" stroke-width="4" stroke-linecap="round"/>
    <path d="M 32 20 Q 40 15 50 18 Q 60 15 68 20" fill="#E91E63"/>
    <circle cx="45" cy="25" r="1.5" fill="#333"/>
    <circle cx="55" cy="25" r="1.5" fill="#333"/>
    <path d="M 47 31 Q 50 33 53 31" stroke="#333" stroke-width="1" fill="none"/>
    <path d="M 30 45 Q 25 50 30 55" stroke="#F48FB1" stroke-width="2" fill="none"/>
    <path d="M 70 45 Q 75 50 70 55" stroke="#F48FB1" stroke-width="2" fill="none"/>
  </svg>`,

  // 哥哥
  哥: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="22" r="10" fill="#FFCC80"/>
    <path d="M 35 35 L 35 75" stroke="#42A5F5" stroke-width="5" stroke-linecap="round"/>
    <path d="M 65 35 L 65 75" stroke="#42A5F5" stroke-width="5" stroke-linecap="round"/>
    <path d="M 35 35 L 65 35 L 60 70 L 40 70 Z" fill="#42A5F5"/>
    <path d="M 35 75 L 30 90" stroke="#42A5F5" stroke-width="4" stroke-linecap="round"/>
    <path d="M 65 75 L 70 90" stroke="#42A5F5" stroke-width="4" stroke-linecap="round"/>
    <circle cx="45" cy="23" r="1.5" fill="#333"/>
    <circle cx="55" cy="23" r="1.5" fill="#333"/>
    <path d="M 47 28 Q 50 30 53 28" stroke="#333" stroke-width="1" fill="none"/>
    <circle cx="30" cy="45" r="3" fill="#1E88E5"/>
    <circle cx="70" cy="45" r="3" fill="#1E88E5"/>
  </svg>`,

  // 姐姐
  姐: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="22" r="10" fill="#FFCC80"/>
    <path d="M 38 35 Q 50 32 62 35 L 62 75 Q 50 78 38 75 Z" fill="#AB47BC"/>
    <path d="M 38 75 L 35 88" stroke="#AB47BC" stroke-width="4" stroke-linecap="round"/>
    <path d="M 62 75 L 65 88" stroke="#AB47BC" stroke-width="4" stroke-linecap="round"/>
    <path d="M 35 20 Q 45 12 50 15 Q 55 12 65 20" stroke="#8E24AA" stroke-width="2" fill="none"/>
    <path d="M 40 18 Q 45 15 50 18" stroke="#AB47BC" stroke-width="2" fill="none"/>
    <circle cx="45" cy="23" r="1.5" fill="#333"/>
    <circle cx="55" cy="23" r="1.5" fill="#333"/>
    <path d="M 47 28 Q 50 30 53 28" stroke="#333" stroke-width="1" fill="none"/>
    <path d="M 35 40 Q 30 45 35 50" stroke="#CE93D8" stroke-width="2" fill="none"/>
    <path d="M 65 40 Q 70 45 65 50" stroke="#CE93D8" stroke-width="2" fill="none"/>
  </svg>`,

  // 弟弟
  弟: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="25" r="10" fill="#FFCC80"/>
    <path d="M 40 38 L 40 75" stroke="#66BB6A" stroke-width="4" stroke-linecap="round"/>
    <path d="M 60 38 L 60 75" stroke="#66BB6A" stroke-width="4" stroke-linecap="round"/>
    <path d="M 40 38 Q 50 35 60 38 Q 65 55 60 70 L 40 70 Q 35 55 40 38" fill="#66BB6A"/>
    <path d="M 40 75 L 38 88" stroke="#66BB6A" stroke-width="3" stroke-linecap="round"/>
    <path d="M 60 75 L 62 88" stroke="#66BB6A" stroke-width="3" stroke-linecap="round"/>
    <circle cx="46" cy="25" r="1.5" fill="#333"/>
    <circle cx="54" cy="25" r="1.5" fill="#333"/>
    <path d="M 48 31 Q 50 33 52 31" stroke="#333" stroke-width="1" fill="none"/>
    <circle cx="50" cy="20" r="3" fill="#81C784"/>
  </svg>`,

  // 妹妹
  妹: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="25" r="10" fill="#FFCC80"/>
    <path d="M 38 38 Q 50 35 62 38 L 62 75 Q 50 78 38 75 Z" fill="#EC407A"/>
    <path d="M 38 75 L 35 88" stroke="#EC407A" stroke-width="4" stroke-linecap="round"/>
    <path d="M 62 75 L 65 88" stroke="#EC407A" stroke-width="4" stroke-linecap="round"/>
    <path d="M 35 18 Q 45 10 50 12 Q 55 10 65 18" stroke="#D81B60" stroke-width="2" fill="none"/>
    <path d="M 38 15 Q 45 10 50 15" stroke="#EC407A" stroke-width="2" fill="none"/>
    <circle cx="45" cy="25" r="1.5" fill="#333"/>
    <circle cx="55" cy="25" r="1.5" fill="#333"/>
    <path d="M 47 31 Q 50 33 53 31" stroke="#333" stroke-width="1" fill="none"/>
    <circle cx="50" cy="18" r="4" fill="#F48FB1"/>
  </svg>`,

  // 你 - 手指指向
  你: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="25" r="12" fill="#FFCC80"/>
    <path d="M 35 40 L 35 75" stroke="#78909C" stroke-width="5" stroke-linecap="round"/>
    <path d="M 65 40 L 65 75" stroke="#78909C" stroke-width="5" stroke-linecap="round"/>
    <path d="M 35 40 L 65 40 L 60 70 L 40 70 Z" fill="#78909C"/>
    <path d="M 35 75 L 30 90" stroke="#78909C" stroke-width="4" stroke-linecap="round"/>
    <path d="M 65 75 L 70 90" stroke="#78909C" stroke-width="4" stroke-linecap="round"/>
    <circle cx="45" cy="26" r="1.5" fill="#333"/>
    <circle cx="55" cy="26" r="1.5" fill="#333"/>
    <path d="M 47 32 Q 50 34 53 32" stroke="#333" stroke-width="1" fill="none"/>
    <path d="M 75 35 L 90 30" stroke="#FFCC80" stroke-width="3" stroke-linecap="round"/>
    <polygon points="90,30 95,25 92,35" fill="#FFCC80"/>
  </svg>`,

  // 我 - 举手的人
  我: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="25" r="12" fill="#FFCC80"/>
    <path d="M 35 40 L 35 75" stroke="#FF7043" stroke-width="5" stroke-linecap="round"/>
    <path d="M 65 40 L 65 75" stroke="#FF7043" stroke-width="5" stroke-linecap="round"/>
    <path d="M 35 40 L 65 40 L 60 70 L 40 70 Z" fill="#FF7043"/>
    <path d="M 35 75 L 30 90" stroke="#FF7043" stroke-width="4" stroke-linecap="round"/>
    <path d="M 65 75 L 70 90" stroke="#FF7043" stroke-width="4" stroke-linecap="round"/>
    <path d="M 35 40 L 20 25" stroke="#FF7043" stroke-width="5" stroke-linecap="round"/>
    <path d="M 20 25 L 10 15" stroke="#FF7043" stroke-width="5" stroke-linecap="round"/>
    <circle cx="45" cy="26" r="1.5" fill="#333"/>
    <circle cx="55" cy="26" r="1.5" fill="#333"/>
    <path d="M 47 32 Q 50 34 53 32" stroke="#333" stroke-width="1" fill="none"/>
    <circle cx="12" cy="12" r="3" fill="#FFCC80"/>
  </svg>`,

  // 他 - 男孩
  他: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="25" r="12" fill="#FFCC80"/>
    <path d="M 35 40 L 35 75" stroke="#5C6BC0" stroke-width="5" stroke-linecap="round"/>
    <path d="M 65 40 L 65 75" stroke="#5C6BC0" stroke-width="5" stroke-linecap="round"/>
    <path d="M 35 40 L 65 40 L 60 70 L 40 70 Z" fill="#5C6BC0"/>
    <path d="M 35 75 L 30 90" stroke="#5C6BC0" stroke-width="4" stroke-linecap="round"/>
    <path d="M 65 75 L 70 90" stroke="#5C6BC0" stroke-width="4" stroke-linecap="round"/>
    <circle cx="45" cy="26" r="1.5" fill="#333"/>
    <circle cx="55" cy="26" r="1.5" fill="#333"/>
    <path d="M 47 32 Q 50 34 53 32" stroke="#333" stroke-width="1" fill="none"/>
    <path d="M 38 20 Q 50 15 62 20" stroke="#5C6BC0" stroke-width="2" fill="none"/>
  </svg>`,

  // 她 - 女孩
  她: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="28" r="11" fill="#FFCC80"/>
    <path d="M 38 42 Q 50 38 62 42 L 62 75 Q 50 78 38 75 Z" fill="#F06292"/>
    <path d="M 38 75 L 35 88" stroke="#F06292" stroke-width="4" stroke-linecap="round"/>
    <path d="M 62 75 L 65 88" stroke="#F06292" stroke-width="4" stroke-linecap="round"/>
    <path d="M 35 22 Q 45 15 50 18 Q 55 15 65 22" fill="#F48FB1"/>
    <circle cx="45" cy="28" r="1.5" fill="#333"/>
    <circle cx="55" cy="28" r="1.5" fill="#333"/>
    <path d="M 47 34 Q 50 36 53 34" stroke="#333" stroke-width="1" fill="none"/>
  </svg>`,

  // 它 - 小动物
  它: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="55" rx="25" ry="18" fill="#8D6E63"/>
    <circle cx="50" cy="38" r="14" fill="#8D6E63"/>
    <ellipse cx="36" cy="52" rx="5" ry="8" fill="#8D6E63"/>
    <ellipse cx="64" cy="52" rx="5" ry="8" fill="#8D6E63"/>
    <circle cx="45" cy="36" r="3" fill="white"/>
    <circle cx="55" cy="36" r="3" fill="white"/>
    <circle cx="46" cy="37" r="1.5" fill="#333"/>
    <circle cx="54" cy="37" r="1.5" fill="#333"/>
    <ellipse cx="50" cy="45" rx="4" ry="3" fill="#5D4037"/>
    <path d="M 45 75 L 45 82" stroke="#8D6E63" stroke-width="3"/>
    <path d="M 55 75 L 55 82" stroke="#8D6E63" stroke-width="3"/>
  </svg>`,

  // 好 - 竖大拇指
  好: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="25" r="12" fill="#FFCC80"/>
    <path d="M 35 40 L 35 75" stroke="#4CAF50" stroke-width="5" stroke-linecap="round"/>
    <path d="M 65 40 L 65 75" stroke="#4CAF50" stroke-width="5" stroke-linecap="round"/>
    <path d="M 35 40 L 65 40 L 60 70 L 40 70 Z" fill="#4CAF50"/>
    <path d="M 35 75 L 30 90" stroke="#4CAF50" stroke-width="4" stroke-linecap="round"/>
    <path d="M 65 75 L 70 90" stroke="#4CAF50" stroke-width="4" stroke-linecap="round"/>
    <circle cx="45" cy="26" r="1.5" fill="#333"/>
    <circle cx="55" cy="26" r="1.5" fill="#333"/>
    <path d="M 47 32 Q 50 34 53 32" stroke="#333" stroke-width="1" fill="none"/>
    <path d="M 80 40 L 80 20" stroke="#4CAF50" stroke-width="6" stroke-linecap="round"/>
    <path d="M 80 20 L 75 28" stroke="#4CAF50" stroke-width="6" stroke-linecap="round"/>
    <path d="M 80 20 L 85 28" stroke="#4CAF50" stroke-width="6" stroke-linecap="round"/>
    <circle cx="80" cy="15" r="3" fill="#81C784"/>
  </svg>`,

  // 来 - 走来
  来: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="25" r="12" fill="#FFCC80"/>
    <path d="M 35 40 L 35 75" stroke="#FF9800" stroke-width="5" stroke-linecap="round"/>
    <path d="M 65 40 L 65 75" stroke="#FF9800" stroke-width="5" stroke-linecap="round"/>
    <path d="M 35 40 L 65 40 L 60 70 L 40 70 Z" fill="#FF9800"/>
    <path d="M 35 75 L 30 90" stroke="#FF9800" stroke-width="4" stroke-linecap="round"/>
    <path d="M 65 75 L 70 90" stroke="#FF9800" stroke-width="4" stroke-linecap="round"/>
    <circle cx="45" cy="26" r="1.5" fill="#333"/>
    <circle cx="55" cy="26" r="1.5" fill="#333"/>
    <path d="M 47 32 Q 50 34 53 32" stroke="#333" stroke-width="1" fill="none"/>
    <path d="M 15 50 L 30 50" stroke="#FF9800" stroke-width="4" stroke-linecap="round"/>
    <polygon points="30,50 22,45 22,55" fill="#FF9800"/>
  </svg>`,

  // 去 - 离开
  去: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="25" r="12" fill="#FFCC80"/>
    <path d="M 35 40 L 35 75" stroke="#F44336" stroke-width="5" stroke-linecap="round"/>
    <path d="M 65 40 L 65 75" stroke="#F44336" stroke-width="5" stroke-linecap="round"/>
    <path d="M 35 40 L 65 40 L 60 70 L 40 70 Z" fill="#F44336"/>
    <path d="M 35 75 L 30 90" stroke="#F44336" stroke-width="4" stroke-linecap="round"/>
    <path d="M 65 75 L 70 90" stroke="#F44336" stroke-width="4" stroke-linecap="round"/>
    <circle cx="45" cy="26" r="1.5" fill="#333"/>
    <circle cx="55" cy="26" r="1.5" fill="#333"/>
    <path d="M 47 32 Q 50 34 53 32" stroke="#333" stroke-width="1" fill="none"/>
    <path d="M 75 50 L 90 50" stroke="#F44336" stroke-width="4" stroke-linecap="round"/>
    <polygon points="90,50 83,45 83,55" fill="#F44336"/>
  </svg>`,

  // 草 - 小草
  草: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M 50 85 L 50 55" stroke="#7CB342" stroke-width="3" stroke-linecap="round"/>
    <path d="M 50 55 Q 35 40 25 45" stroke="#8BC34A" stroke-width="3" stroke-linecap="round" fill="none"/>
    <path d="M 50 60 Q 38 50 30 55" stroke="#8BC34A" stroke-width="2" stroke-linecap="round" fill="none"/>
    <ellipse cx="23" cy="43" rx="6" ry="9" fill="#CDDC39"/>
    <ellipse cx="28" cy="53" rx="5" ry="7" fill="#CDDC39"/>
    <path d="M 50 55 Q 65 40 75 45" stroke="#8BC34A" stroke-width="3" stroke-linecap="round" fill="none"/>
    <path d="M 50 60 Q 62 50 70 55" stroke="#8BC34A" stroke-width="2" stroke-linecap="round" fill="none"/>
    <ellipse cx="77" cy="43" rx="6" ry="9" fill="#CDDC39"/>
    <ellipse cx="72" cy="53" rx="5" ry="7" fill="#CDDC39"/>
    <path d="M 50 55 Q 50 35 50 25" stroke="#7CB342" stroke-width="2" stroke-linecap="round"/>
    <ellipse cx="50" cy="22" rx="5" ry="7" fill="#AFB42B"/>
    <circle cx="45" cy="35" r="1.5" fill="#F0F4C3"/>
    <circle cx="55" cy="32" r="1.5" fill="#F0F4C3"/>
  </svg>`,

  // 叶 - 树叶
  叶: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="50" rx="25" ry="35" fill="#66BB6A"/>
    <ellipse cx="50" cy="50" rx="18" ry="28" fill="#81C784"/>
    <path d="M 50 20 Q 45 50 50 80" stroke="#4CAF50" stroke-width="2" fill="none"/>
    <path d="M 50 30 Q 35 35 30 45" stroke="#4CAF50" stroke-width="1.5" fill="none"/>
    <path d="M 50 40 Q 65 35 70 45" stroke="#4CAF50" stroke-width="1.5" fill="none"/>
    <path d="M 50 50 Q 35 50 30 55" stroke="#4CAF50" stroke-width="1.5" fill="none"/>
    <path d="M 50 60 Q 65 55 70 60" stroke="#4CAF50" stroke-width="1.5" fill="none"/>
    <circle cx="40" cy="35" r="2" fill="#C8E6C9"/>
    <circle cx="60" cy="40" r="1.5" fill="#C8E6C9"/>
    <circle cx="38" cy="55" r="1.5" fill="#C8E6C9"/>
    <circle cx="62" cy="60" r="2" fill="#C8E6C9"/>
  </svg>`,

  // 果 - 水果
  果: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M 50 55 L 50 30" stroke="#7CB342" stroke-width="3" stroke-linecap="round"/>
    <ellipse cx="50" cy="70" rx="25" ry="22" fill="#F44336"/>
    <ellipse cx="50" cy="70" rx="20" ry="17" fill="#E53935"/>
    <ellipse cx="45" cy="65" rx="6" ry="4" fill="#FFCDD2"/>
    <ellipse cx="35" cy="58" rx="5" ry="4" fill="#4CAF50"/>
    <path d="M 50 30 Q 45 25 50 20 Q 55 25 50 30" fill="#66BB6A"/>
    <circle cx="42" cy="45" r="1.5" fill="#C8E6C9"/>
    <circle cx="58" cy="42" r="1.5" fill="#C8E6C9"/>
  </svg>`,

  // 马 - 小马
  马: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="55" cy="60" rx="28" ry="20" fill="#8D6E63"/>
    <ellipse cx="45" cy="40" r="15" fill="#A1887F"/>
    <polygon points="32,28 35,15 42,25" fill="#A1887F"/>
    <polygon points="38,28 40,18 45,26" fill="#A1887F"/>
    <circle cx="38" cy="38" r="2.5" fill="white"/>
    <circle cx="39" cy="39" r="1.2" fill="#333"/>
    <polygon points="45,45 42,50 48,50" fill="#5D4037"/>
    <path d="M 30 55 Q 25 60 30 70" stroke="#8D6E63" stroke-width="4" fill="none"/>
    <path d="M 75 55 Q 85 50 90 60" stroke="#8D6E63" stroke-width="4" fill="none"/>
    <ellipse cx="30" cy="75" rx="6" ry="4" fill="#5D4037"/>
    <ellipse cx="85" cy="62" rx="6" ry="4" fill="#5D4037"/>
    <path d="M 55 78 L 50 90" stroke="#8D6E63" stroke-width="4" stroke-linecap="round"/>
    <path d="M 60 78 L 65 90" stroke="#8D6E63" stroke-width="4" stroke-linecap="round"/>
  </svg>`,

  // 牛 - 奶牛
  牛: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="55" rx="32" ry="22" fill="#FAFAFA"/>
    <ellipse cx="50" cy="55" rx="26" ry="18" fill="#EEEEEE"/>
    <circle cx="50" cy="38" r="14" fill="#FAFAFA"/>
    <circle cx="50" cy="38" r="12" fill="#EEEEEE"/>
    <ellipse cx="38" cy="30" rx="5" ry="8" fill="#FFAB91"/>
    <ellipse cx="62" cy="30" rx="5" ry="8" fill="#FFAB91"/>
    <circle cx="44" cy="37" r="3" fill="white"/>
    <circle cx="56" cy="37" r="3" fill="white"/>
    <circle cx="45" cy="38" r="1.5" fill="#333"/>
    <circle cx="55" cy="38" r="1.5" fill="#333"/>
    <ellipse cx="50" cy="48" rx="5" ry="4" fill="#F8BBD9"/>
    <circle cx="48" cy="47" r="1.5" fill="#E91E63"/>
    <path d="M 50 70 L 50 88" stroke="#424242" stroke-width="4"/>
    <ellipse cx="45" cy="90" rx="5" ry="3" fill="#424242"/>
    <ellipse cx="55" cy="90" rx="5" ry="3" fill="#424242"/>
  </svg>`,

  // 羊 - 绵羊
  羊: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="65" rx="30" ry="20" fill="#ECEFF1"/>
    <circle cx="50" cy="45" r="18" fill="#ECEFF1"/>
    <circle cx="35" cy="40" r="8" fill="#CFD8DC"/>
    <circle cx="65" cy="40" r="8" fill="#CFD8DC"/>
    <circle cx="42" cy="32" r="6" fill="#CFD8DC"/>
    <circle cx="58" cy="32" r="6" fill="#CFD8DC"/>
    <circle cx="50" cy="28" r="6" fill="#CFD8DC"/>
    <circle cx="40" cy="44" r="2.5" fill="#37474F"/>
    <circle cx="60" cy="44" r="2.5" fill="#37474F"/>
    <ellipse cx="50" cy="52" rx="4" ry="3" fill="#F8BBD9"/>
    <path d="M 50 82 L 45 92" stroke="#424242" stroke-width="3" stroke-linecap="round"/>
    <path d="M 50 82 L 55 92" stroke="#424242" stroke-width="3" stroke-linecap="round"/>
  </svg>`,

  // 鸡 - 小鸡
  鸡: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="55" rx="22" ry="18" fill="#FFEB3B"/>
    <circle cx="50" cy="38" r="14" fill="#FFEB3B"/>
    <polygon points="40,30 38,18 46,26" fill="#FF9800"/>
    <polygon points="60,30 62,18 54,26" fill="#FF9800"/>
    <circle cx="45" cy="36" r="3" fill="white"/>
    <circle cx="55" cy="36" r="3" fill="white"/>
    <circle cx="46" cy="37" r="1.5" fill="#333"/>
    <circle cx="54" cy="37" r="1.5" fill="#333"/>
    <polygon points="50,42 47,47 53,47" fill="#FF9800"/>
    <ellipse cx="35" cy="55" rx="4" ry="6" fill="#FFEB3B"/>
    <ellipse cx="65" cy="55" rx="4" ry="6" fill="#FFEB3B"/>
    <path d="M 45 70 L 42 82" stroke="#FF9800" stroke-width="2"/>
    <path d="M 55 70 L 58 82" stroke="#FF9800" stroke-width="2"/>
    <ellipse cx="40" cy="83" rx="5" ry="3" fill="#FF9800"/>
    <ellipse cx="60" cy="83" rx="5" ry="3" fill="#FF9800"/>
  </svg>`,

  // 鸭 - 鸭子
  鸭: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="58" rx="24" ry="18" fill="#8BC34A"/>
    <ellipse cx="50" cy="58" rx="20" ry="14" fill="#9CCC65"/>
    <circle cx="42" cy="42" r="12" fill="#8BC34A"/>
    <circle cx="42" cy="42" r="10" fill="#9CCC65"/>
    <circle cx="38" cy="40" r="2.5" fill="white"/>
    <circle cx="38" cy="40" r="1.2" fill="#333"/>
    <path d="M 32 48 Q 25 55 30 60" stroke="#FF9800" stroke-width="2" fill="none"/>
    <polygon points="25,58 15,55 25,62" fill="#FF9800"/>
    <ellipse cx="35" cy="65" rx="6" ry="4" fill="#8BC34A"/>
    <ellipse cx="65" cy="65" rx="6" ry="4" fill="#8BC34A"/>
    <path d="M 50 73 L 50 82" stroke="#8BC34A" stroke-width="3"/>
    <ellipse cx="45" cy="85" rx="6" ry="4" fill="#FF9800"/>
    <ellipse cx="55" cy="85" rx="6" ry="4" fill="#FF9800"/>
  </svg>`,

  // 书 - 书本
  书: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="20" width="60" height="65" rx="3" fill="#42A5F5"/>
    <rect x="25" y="25" width="50" height="55" rx="2" fill="white"/>
    <rect x="28" y="30" width="44" height="4" rx="1" fill="#E3F2FD"/>
    <rect x="28" y="38" width="40" height="3" rx="1" fill="#E3F2FD"/>
    <rect x="28" y="45" width="38" height="3" rx="1" fill="#E3F2FD"/>
    <rect x="28" y="52" width="35" height="3" rx="1" fill="#E3F2FD"/>
    <rect x="28" y="59" width="40" height="3" rx="1" fill="#E3F2FD"/>
    <rect x="28" y="66" width="32" height="3" rx="1" fill="#E3F2FD"/>
    <rect x="20" y="20" width="8" height="65" rx="2" fill="#1E88E5"/>
    <circle cx="50" cy="85" r="4" fill="#1565C0"/>
    <circle cx="50" cy="85" r="2" fill="#0D47A1"/>
  </svg>`,

  // 笔 - 铅笔
  笔: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M 25 85 L 75 15 L 85 25 L 35 95 Z" fill="#FFC107"/>
    <path d="M 25 85 L 75 15 L 65 15 L 15 85 Z" fill="#FFD54F"/>
    <path d="M 75 15 L 78 12 L 82 16 L 79 19 Z" fill="#5D4037"/>
    <polygon points="75,15 70,20 78,25 80,18" fill="#FFCC80"/>
    <rect x="25" y="30" width="20" height="3" rx="1" fill="#FF9800" opacity="0.5"/>
    <rect x="25" y="40" width="18" height="3" rx="1" fill="#FF9800" opacity="0.5"/>
    <rect x="25" y="50" width="22" height="3" rx="1" fill="#FF9800" opacity="0.5"/>
    <rect x="25" y="60" width="16" height="3" rx="1" fill="#FF9800" opacity="0.5"/>
    <circle cx="30" cy="70" r="2" fill="#FF9800" opacity="0.5"/>
    <path d="M 40 75 Q 50 70 60 75" stroke="#5D4037" stroke-width="2" fill="none"/>
  </svg>`,

  // 纸 - 白纸
  纸: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="15" width="60" height="75" rx="3" fill="#FAFAFA"/>
    <rect x="25" y="20" width="50" height="65" rx="2" fill="white"/>
    <rect x="20" y="15" width="15" height="75" rx="2" fill="#EEEEEE"/>
    <line x1="30" y1="35" x2="65" y2="35" stroke="#E0E0E0" stroke-width="2"/>
    <line x1="30" y1="45" x2="60" y2="45" stroke="#E0E0E0" stroke-width="2"/>
    <line x1="30" y1="55" x2="55" y2="55" stroke="#E0E0E0" stroke-width="2"/>
    <line x1="30" y1="65" x2="50" y2="65" stroke="#E0E0E0" stroke-width="2"/>
    <circle cx="60" cy="25" r="8" fill="#E3F2FD" opacity="0.7"/>
    <path d="M 55 25 Q 60 20 65 25 Q 60 30 55 25" fill="#BBDEFB"/>
    <path d="M 35 78 L 45 88" stroke="#BDBDBD" stroke-width="2"/>
    <circle cx="50" cy="85" r="3" fill="#9E9E9E"/>
  </svg>`,

  // 船 - 小船
  船: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="75" rx="35" ry="10" fill="#8D6E63"/>
    <path d="M 25 75 Q 20 60 35 50 L 50 25 L 65 50 Q 80 60 75 75 Z" fill="#FFCC80"/>
    <rect x="45" y="25" width="8" height="45" fill="#795548"/>
    <rect x="42" y="15" width="14" height="12" rx="1" fill="white"/>
    <circle cx="49" cy="18" r="3" fill="#E3F2FD"/>
    <circle cx="55" cy="22" r="2" fill="#FF9800"/>
    <circle cx="48" cy="55" r="2" fill="#FF9800"/>
    <path d="M 20 45 Q 15 40 10 45" stroke="#4FC3F7" stroke-width="2" fill="none"/>
    <circle cx="12" cy="42" r="1.5" fill="#4FC3F7"/>
    <circle cx="8" cy="48" r="1" fill="#4FC3F7"/>
  </svg>`,

  // 飞机 - 飞机
  飞机: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="55" rx="25" ry="8" fill="#E3F2FD"/>
    <path d="M 20 55 L 35 50 L 50 55 L 80 40 L 85 45 L 55 58 L 55 65 L 85 70 L 80 75 L 50 62 L 50 70 L 35 65 L 20 70 Z" fill="#42A5F5"/>
    <path d="M 55 45 L 55 25 L 65 30 L 60 45 Z" fill="#1E88E5"/>
    <circle cx="45" cy="55" r="3" fill="#1565C0"/>
    <circle cx="50" cy="58" r="2" fill="#1565C0"/>
    <path d="M 25 75 Q 20 70 25 65" stroke="#81D4FA" stroke-width="2" fill="none"/>
    <circle cx="22" cy="68" r="1.5" fill="#4FC3F7"/>
    <path d="M 75 30 Q 80 25 85 30" stroke="#81D4FA" stroke-width="2" fill="none"/>
    <circle cx="82" cy="28" r="1.5" fill="#4FC3F7"/>
  </svg>`,

  // 饭 - 米饭
  饭: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="65" rx="30" ry="20" fill="#FAFAFA"/>
    <ellipse cx="50" cy="65" rx="25" ry="16" fill="#F5F5F5"/>
    <ellipse cx="40" cy="60" rx="8" ry="5" fill="white"/>
    <ellipse cx="55" cy="58" rx="7" ry="4" fill="white"/>
    <ellipse cx="50" cy="70" rx="6" ry="4" fill="white"/>
    <ellipse cx="60" cy="68" rx="5" ry="3" fill="white"/>
    <ellipse cx="35" cy="68" rx="5" ry="3" fill="white"/>
    <path d="M 30 35 Q 25 50 30 60 L 35 55 Q 32 45 35 35 Z" fill="#E53935"/>
    <path d="M 70 35 Q 75 50 70 60 L 65 55 Q 68 45 65 35 Z" fill="#E53935"/>
    <path d="M 35 35 L 65 35 L 60 45 Q 50 50 40 45 Z" fill="#E53935"/>
    <rect x="30" y="30" width="40" height="8" rx="2" fill="#C62828"/>
    <circle cx="45" cy="38" r="2" fill="#FFCDD2"/>
    <circle cx="55" cy="36" r="1.5" fill="#FFCDD2"/>
  </svg>`,

  // 面 - 面条
  面: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="75" rx="30" ry="12" fill="#FFCC80"/>
    <path d="M 25 65 Q 20 50 30 40 Q 40 30 50 35 Q 60 30 70 40 Q 80 50 75 65" stroke="#FFB74D" stroke-width="4" fill="none"/>
    <path d="M 30 55 Q 40 45 50 50 Q 60 45 70 55" stroke="#FFB74D" stroke-width="3" fill="none"/>
    <path d="M 28 60 Q 38 52 50 55" stroke="#FFB74D" stroke-width="3" fill="none"/>
    <circle cx="50" cy="50" r="8" fill="#FF9800"/>
    <circle cx="50" cy="50" r="5" fill="#E65100"/>
    <circle cx="40" cy="45" r="3" fill="#FF9800"/>
    <circle cx="60" cy="45" r="3" fill="#FF9800"/>
    <circle cx="50" cy="38" r="2.5" fill="#FF9800"/>
    <circle cx="45" cy="70" r="2" fill="#FFB74D"/>
    <circle cx="55" cy="72" r="1.5" fill="#FFB74D"/>
    <circle cx="50" cy="68" r="2" fill="#FFB74D"/>
    <ellipse cx="35" cy="78" rx="8" ry="4" fill="#8D6E63"/>
    <ellipse cx="65" cy="78" rx="8" ry="4" fill="#8D6E63"/>
  </svg>`,

  // 肉 - 肉
  肉: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="55" rx="28" ry="22" fill="#EF5350"/>
    <ellipse cx="50" cy="55" rx="22" ry="17" fill="#E53935"/>
    <ellipse cx="35" cy="50" rx="6" ry="4" fill="#FFCDD2"/>
    <ellipse cx="55" cy="45" rx="5" ry="3" fill="#FFCDD2"/>
    <ellipse cx="40" cy="65" rx="5" ry="3" fill="#FFCDD2"/>
    <ellipse cx="60" cy="60" rx="6" ry="4" fill="#FFCDD2"/>
    <circle cx="30" cy="55" r="3" fill="#B71C1C"/>
    <circle cx="45" cy="40" r="2.5" fill="#B71C1C"/>
    <circle cx="65" cy="50" r="2" fill="#B71C1C"/>
    <circle cx="50" cy="70" r="2.5" fill="#B71C1C"/>
    <path d="M 20 50 Q 15 55 20 65" stroke="#E53935" stroke-width="2" fill="none"/>
    <circle cx="18" cy="55" r="1.5" fill="#EF5350"/>
    <circle cx="22" cy="62" r="1" fill="#EF5350"/>
  </svg>`,

  // 蛋 - 鸡蛋
  蛋: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="55" rx="25" ry="32" fill="#FAFAFA"/>
    <ellipse cx="50" cy="55" rx="20" ry="26" fill="#FFFFFF"/>
    <ellipse cx="45" cy="45" rx="8" ry="6" fill="#F5F5F5"/>
    <ellipse cx="55" cy="65" rx="6" ry="4" fill="#F5F5F5"/>
    <circle cx="40" cy="50" r="2" fill="#EEEEEE"/>
    <circle cx="58" cy="55" r="1.5" fill="#EEEEEE"/>
    <circle cx="48" cy="70" r="2" fill="#EEEEEE"/>
    <path d="M 35 30 Q 30 35 35 40" stroke="#FF9800" stroke-width="2" fill="none"/>
    <polygon points="35,25 32,35 38,35" fill="#FF9800"/>
  </svg>`,

  // 学 - 学习
  学: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M 50 20 L 30 35 L 30 55 L 50 70 L 70 55 L 70 35 Z" fill="#42A5F5"/>
    <path d="M 50 20 L 30 35 L 30 55 L 50 70 L 70 55 L 70 35 Z" fill="none" stroke="#1E88E5" stroke-width="3"/>
    <circle cx="50" cy="45" r="12" fill="#1E88E5"/>
    <circle cx="50" cy="45" r="8" fill="#42A5F5"/>
    <path d="M 46 45 L 50 42 L 54 45 L 50 48 Z" fill="#FFD54F"/>
    <circle cx="38" cy="30" r="3" fill="#BBDEFB"/>
    <circle cx="62" cy="30" r="3" fill="#BBDEFB"/>
    <circle cx="35" cy="50" r="2" fill="#BBDEFB"/>
    <circle cx="65" cy="50" r="2" fill="#BBDEFB"/>
    <path d="M 25 65 L 35 60" stroke="#5C6BC0" stroke-width="3" stroke-linecap="round"/>
    <path d="M 75 65 L 65 60" stroke="#5C6BC0" stroke-width="3" stroke-linecap="round"/>
    <circle cx="30" cy="58" r="3" fill="#5C6BC0"/>
    <circle cx="70" cy="58" r="3" fill="#5C6BC0"/>
  </svg>`,
}

// 获取 SVG 图标
export function getSvgIcon(char) {
  return svgIcons[char] || null
}

// 生成占位 SVG（当没有对应的图标时）
export function generatePlaceholderSVG(char) {
  const colors = [
    { bg: '#FFB5BA', text: '#C62828' },
    { bg: '#B8F2E6', text: '#00695C' },
    { bg: '#FFD93D', text: '#E65100' },
    { bg: '#C7CEEA', text: '#4527A0' },
    { bg: '#4ECDC4', text: '#004D40' },
  ]
  const { bg, text } = colors[char.charCodeAt(0) % colors.length]

  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" fill="${bg}"/>
    <text x="50" y="65" font-size="50" text-anchor="middle" fill="${text}" font-weight="bold" font-family="Arial">${char}</text>
  </svg>`
}
