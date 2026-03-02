// SVG 生成工具 - 基于设计规范
// viewBox: 0 0 1024 1024
// 图层结构: defs → background → shadow → main-object → expression → accent

// SVG 配置常量
export const svgConfig = {
  viewBox: '0 0 1024 1024',
  width: 1024,
  height: 1024,
  cornerRadius: 128,
  circleRadius: 480,
  centerX: 512,
  centerY: 512,
};

// 背景形状类型
export const BackgroundShape = {
  RECT: 'rect',
  CIRCLE: 'circle',
  NONE: 'none',
};

// 默认颜色
export const DefaultColors = {
  CIRCLE_BG: '#FFF8E1',
  RECT_BG: '#FFFFFF',
};

// 柔和童趣配色方案
export const colorPalettes = {
  // 暖色系
  warm: {
    main: ['#FF9F43', '#FF7043', '#FF5722'],
    soft: ['#FFE0B2', '#FFCC80', '#FFB74D'],
    accent: ['#E65100', '#BF360C'],
  },
  // 冷色系
  cool: {
    main: ['#42A5F5', '#29B6F6', '#03A9F4'],
    soft: ['#BBDEFB', '#90CAF9', '#64B5F6'],
    accent: ['#1565C0', '#0D47A1'],
  },
  // 自然色系
  nature: {
    main: ['#66BB6A', '#4CAF50', '#43A047'],
    soft: ['#C8E6C9', '#A5D6A7', '#81C784'],
    accent: ['#2E7D32', '#1B5E20'],
  },
  // 柔和色系
  soft: {
    main: ['#F48FB1', '#EC407A', '#E91E63'],
    soft: ['#F8BBD0', '#F4C2D7', '#F48FB1'],
    accent: ['#AD1457', '#880E4F'],
  },
  // 大地色系
  earth: {
    main: ['#8D6E63', '#795548', '#6D4C41'],
    soft: ['#D7CCC8', '#BCAAA4', '#A1887F'],
    accent: ['#4E342E', '#3E2723'],
  },
  // 天空色系
  sky: {
    main: ['#4FC3F7', '#29B6F6', '#03A9F4'],
    soft: ['#B3E5FC', '#81D4FA', '#4FC3F7'],
    accent: ['#0277BD', '#01579B'],
  },
};

// 生成 SVG（统一函数）
export function createSVG(options = {}) {
  const {
    content = '',
    background = BackgroundShape.NONE,
    backgroundColor = DefaultColors.RECT_BG,
  } = options;

  // 输入验证
  const safeContent = typeof content === 'string' ? content : String(content ?? '');

  // 生成背景元素
  let backgroundElement = '';
  if (background === BackgroundShape.RECT) {
    backgroundElement = `<rect x="0" y="0" width="${svgConfig.width}" height="${svgConfig.height}" rx="${svgConfig.cornerRadius}" fill="${backgroundColor}"/>`;
  } else if (background === BackgroundShape.CIRCLE) {
    backgroundElement = `<circle cx="${svgConfig.centerX}" cy="${svgConfig.centerY}" r="${svgConfig.circleRadius}" fill="${backgroundColor}"/>`;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${svgConfig.viewBox}">
  <defs/>
  <g id="background">${backgroundElement}</g>
  <g id="shadow"/>
  <g id="main-object">${safeContent}</g>
  <g id="expression"/>
  <g id="accent"/>
</svg>`;
}

// 便捷函数：基础 SVG（无背景）
export function createBaseSVG(content) {
  return createSVG({ content });
}

// 便捷函数：矩形背景 SVG
export function createSVGWithBackground(backgroundColor, content) {
  return createSVG({
    content,
    background: BackgroundShape.RECT,
    backgroundColor,
  });
}

// 便捷函数：圆形背景 SVG
export function createCircularSVG(content) {
  return createSVG({
    content,
    background: BackgroundShape.CIRCLE,
    backgroundColor: DefaultColors.CIRCLE_BG,
  });
}

// 导出所有模块
export {
  svgConfig,
  colorPalettes,
  BackgroundShape,
  DefaultColors,
  createSVG,
  createBaseSVG,
  createSVGWithBackground,
  createCircularSVG,
};
