// SVG 图标数据
export const svgIcons = {
  // 基础汉字图标
  人: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="30" r="15" fill="#FFB5BA"/>
    <rect x="35" y="50" width="30" height="40" rx="5" fill="#FFB5BA"/>
    <rect x="25" y="55" width="15" height="30" rx="3" fill="#FFB5BA"/>
    <rect x="60" y="55" width="15" height="30" rx="3" fill="#FFB5BA"/>
    <rect x="35" y="90" width="12" height="8" rx="2" fill="#FF9AA2"/>
    <rect x="53" y="90" width="12" height="8" rx="2" fill="#FF9AA2"/>
    <circle cx="45" cy="28" r="2" fill="#800F48"/>
    <circle cx="55" cy="28" r="2" fill="#800F48"/>
    <path d="M 45 35 Q 50 38 55 35" stroke="#800F48" stroke-width="2" fill="none"/>
  </svg>`,

  大: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <text x="50" y="70" font-size="60" text-anchor="middle" font-weight="bold" fill="#FF6B9D">大</text>
    <circle cx="50" cy="50" r="40" fill="none" stroke="#FFB5BA" stroke-width="4"/>
  </svg>`,

  小: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <text x="50" y="65" font-size="35" text-anchor="middle" font-weight="bold" fill="#FF6B9D">小</text>
    <circle cx="50" cy="50" r="30" fill="none" stroke="#FFB5BA" stroke-width="3" stroke-dasharray="5,5"/>
  </svg>`,

  天: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="30" r="12" fill="#FFD93D"/>
    <g stroke="#FFD93D" stroke-width="3">
      <line x1="50" y1="20" x2="50" y2="80"/>
      <line x1="20" y1="50" x2="80" y2="50"/>
      <line x1="28" y1="28" x2="72" y2="72"/>
      <line x1="72" y1="28" x2="28" y2="72"/>
    </g>
  </svg>`,

  地: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="60" width="60" height="15" rx="3" fill="#26DE81"/>
    <rect x="25" y="45" width="50" height="15" rx="3" fill="#B8F2E6"/>
    <circle cx="70" cy="35" r="8" fill="#FFD93D"/>
    <rect x="30" y="75" width="40" height="10" rx="2" fill="#8B5A2B"/>
  </svg>`,

  水: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M 50 20 Q 30 40 30 55 A 20 20 0 0 0 70 55 Q 70 40 50 20" fill="#4ECDC4" opacity="0.8"/>
    <ellipse cx="40" cy="50" rx="5" ry="8" fill="white" opacity="0.6"/>
  </svg>`,

  火: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M 50 20 Q 40 35 35 50 Q 30 65 40 75 Q 50 85 60 75 Q 70 65 65 50 Q 60 35 50 20" fill="#FF6B6B"/>
    <path d="M 50 35 Q 45 45 42 55 Q 50 65 58 55 Q 55 45 50 35" fill="#FFD93D"/>
  </svg>`,

  山: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <polygon points="50,25 25,75 75,75" fill="#B8F2E6"/>
    <polygon points="50,25 40,50 60,50" fill="white" opacity="0.5"/>
    <rect x="20" y="75" width="60" height="15" fill="#8B5A2B"/>
  </svg>`,

  日: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="30" fill="#FFD93D"/>
    <circle cx="50" cy="50" r="20" fill="#FF9F43"/>
    <g stroke="#FFD93D" stroke-width="3">
      <line x1="50" y1="10" x2="50" y2="20"/>
      <line x1="50" y1="80" x2="50" y2="90"/>
      <line x1="10" y1="50" x2="20" y2="50"/>
      <line x1="80" y1="50" x2="90" y2="50"/>
    </g>
  </svg>`,

  月: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M 50 20 A 30 30 0 1 1 50 80 A 25 25 0 1 0 50 20" fill="#C7CEEA"/>
    <circle cx="65" cy="40" r="5" fill="white" opacity="0.5"/>
    <circle cx="60" cy="55" r="3" fill="white" opacity="0.3"/>
  </svg>`,

  // 数字
  一: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="45" width="60" height="10" rx="2" fill="#FF6B9D"/>
  </svg>`,

  二: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="30" width="60" height="10" rx="2" fill="#FF6B9D"/>
    <rect x="20" y="60" width="60" height="10" rx="2" fill="#FF6B9D"/>
  </svg>`,

  三: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="20" width="60" height="10" rx="2" fill="#FF6B9D"/>
    <rect x="20" y="45" width="60" height="10" rx="2" fill="#FF6B9D"/>
    <rect x="20" y="70" width="60" height="10" rx="2" fill="#FF6B9D"/>
  </svg>`,

  // 家人
  爸: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="25" r="12" fill="#FFB5BA"/>
    <rect x="35" y="40" width="30" height="45" rx="5" fill="#4ECDC4"/>
    <rect x="30" y="45" width="12" height="25" rx="2" fill="#FFB5BA"/>
    <rect x="58" y="45" width="12" height="25" rx="2" fill="#FFB5BA"/>
    <rect x="40" y="85" width="8" height="10" rx="1" fill="#8B5A2B"/>
    <rect x="52" y="85" width="8" height="10" rx="1" fill="#8B5A2B"/>
  </svg>`,

  妈: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="25" r="12" fill="#FFB5BA"/>
    <path d="M 35 40 Q 50 35 65 40 L 65 70 Q 50 80 35 70 Z" fill="#FF9AA2"/>
    <circle cx="45" cy="50" r="3" fill="#800F48"/>
    <circle cx="55" cy="50" r="3" fill="#800F48"/>
    <path d="M 45 58 Q 50 62 55 58" stroke="#800F48" stroke-width="2" fill="none"/>
  </svg>`,

  // 动物
  鸟: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="55" rx="20" ry="15" fill="#FFD93D"/>
    <circle cx="50" cy="35" r="12" fill="#FFD93D"/>
    <circle cx="45" cy="33" r="2" fill="#800F48"/>
    <circle cx="55" cy="33" r="2" fill="#800F48"/>
    <polygon points="50,38 48,42 52,42" fill="#FF9F43"/>
    <polygon points="32,52 25,48 25,56" fill="#C7CEEA"/>
    <polygon points="68,52 75,48 75,56" fill="#C7CEEA"/>
  </svg>`,

  鱼: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="55" cy="50" rx="30" ry="20" fill="#4ECDC4"/>
    <polygon points="25,50 10,40 10,60" fill="#4ECDC4"/>
    <circle cx="70" cy="45" r="4" fill="white"/>
    <circle cx="71" cy="45" r="2" fill="#800F48"/>
    <path d="M 45 50 Q 40 45 35 50 Q 40 55 45 50" fill="#B8F2E6"/>
    <polygon points="75,42 85,40 85,45" fill="#FF9AA2"/>
    <polygon points="75,58 85,55 85,60" fill="#FF9AA2"/>
  </svg>`,

  猫: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="55" r="25" fill="#FFD93D"/>
    <polygon points="30,40 35,30 40,40" fill="#FFD93D"/>
    <polygon points="60,40 65,30 70,40" fill="#FFD93D"/>
    <circle cx="40" cy="50" r="4" fill="white"/>
    <circle cx="60" cy="50" r="4" fill="white"/>
    <circle cx="41" cy="51" r="2" fill="#800F48"/>
    <circle cx="61" cy="51" r="2" fill="#800F48"/>
    <polygon points="48,60 52,60 50,63" fill="#FF9F43"/>
    <line x1="30" y1="40" x2="38" y2="38" stroke="#8B5A2B" stroke-width="2"/>
    <line x1="62" y1="38" x2="70" y2="40" stroke="#8B5A2B" stroke-width="2"/>
  </svg>`,

  狗: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="60" rx="25" ry="20" fill="#D4A574"/>
    <circle cx="50" cy="35" r="18" fill="#D4A574"/>
    <ellipse cx="35" cy="50" rx="8" ry="10" fill="#D4A574"/>
    <ellipse cx="65" cy="50" rx="8" ry="10" fill="#D4A574"/>
    <circle cx="43" cy="32" r="4" fill="white"/>
    <circle cx="57" cy="32" r="4" fill="white"/>
    <circle cx="44" cy="33" r="2" fill="#800F48"/>
    <circle cx="58" cy="33" r="2" fill="#800F48"/>
    <ellipse cx="50" cy="42" rx="8" ry="6" fill="#800F48"/>
    <circle cx="50" cy="40" r="3" fill="#800F48"/>
    <polygon points="45,75 50,85 55,75" fill="#800F48"/>
  </svg>`,

  花: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="8" fill="#FFD93D"/>
    <ellipse cx="50" cy="30" rx="10" ry="15" fill="#FF9AA2"/>
    <ellipse cx="70" cy="50" rx="15" ry="10" fill="#FF9AA2"/>
    <ellipse cx="50" cy="70" rx="10" ry="15" fill="#FF9AA2"/>
    <ellipse cx="30" cy="50" rx="15" ry="10" fill="#FF9AA2"/>
    <rect x="48" y="50" width="4" height="35" fill="#26DE81"/>
  </svg>`,

  树: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <polygon points="50,15 20,50 35,50 15,75 85,75 65,50 80,50" fill="#26DE81"/>
    <polygon points="50,25 30,50 40,50 25,70 75,70 60,50 70,50" fill="#B8F2E6"/>
    <rect x="40" y="75" width="20" height="20" fill="#8B5A2B"/>
  </svg>`,

  车: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="40" width="60" height="30" rx="5" fill="#FF6B9D"/>
    <rect x="30" y="25" width="35" height="20" rx="3" fill="#FFB5BA"/>
    <rect x="40" y="30" width="15" height="10" fill="#C7CEEA"/>
    <circle cx="30" cy="75" r="8" fill="#800F48"/>
    <circle cx="70" cy="75" r="8" fill="#800F48"/>
    <circle cx="30" cy="75" r="4" fill="white"/>
    <circle cx="70" cy="75" r="4" fill="white"/>
  </svg>`,
}

// 获取 SVG 图标
export function getSvgIcon(char) {
  return svgIcons[char] || svgIcons[Object.keys(svgIcons)[0]]
}

// 生成随机颜色占位 SVG
export function generatePlaceholderSVG(char, color1 = '#FFB5BA', color2 = '#FF9AA2') {
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" fill="${color1}"/>
    <text x="50" y="55" font-size="40" text-anchor="middle" fill="white" font-weight="bold">${char}</text>
  </svg>`
}
