<template>
  <div class="levels-view">
    <div class="top-bar">
      <button @click="goBack" class="back-btn">← 返回</button>
      <h2>选择关卡</h2>
      <div class="spacer"></div>
    </div>

    <div class="levels-container">
      <div
        v-for="level in levels"
        :key="level.id"
        class="level-card"
        :class="{
          locked: level.starsRequired > progress.totalStars,
          unlocked: level.starsRequired <= progress.totalStars
        }"
        @click="selectLevel(level)"
      >
        <div class="level-number">第 {{ level.id }} 关</div>
        <div class="level-name">{{ level.name }}</div>
        <div class="level-description">{{ level.description }}</div>

        <div class="level-stats">
          <div class="stat">
            <span class="label">汉字</span>
            <span class="value">{{ level.hanziCount }}</span>
          </div>
          <div class="stat">
            <span class="label">类型</span>
            <span class="value">{{ getLevelTypeName(level.type) }}</span>
          </div>
        </div>

        <div v-if="level.hanzi && level.hanzi.length > 0" class="hanzi-preview">
          <span class="hanzi-char" v-for="char in level.hanzi" :key="char">{{ char }}</span>
        </div>

        <div class="level-stars">
          <span
            v-for="i in 3"
            :key="i"
            class="star"
            :class="{ earned: progress.getLevelStars(level.id) >= i }"
          >
            {{ progress.getLevelStars(level.id) >= i ? '⭐' : '☆' }}
          </span>
        </div>

        <div v-if="level.starsRequired > progress.totalStars" class="lock-overlay">
          <div class="lock-icon">🔒</div>
          <div class="require-stars">需要 {{ level.starsRequired }} ⭐</div>
        </div>

        <button class="play-button" :disabled="level.starsRequired > progress.totalStars">
          {{ level.starsRequired > progress.totalStars ? '锁定' : '开始' }}
        </button>
      </div>
    </div>

    <div class="total-stars">
      总星星: {{ progress.totalStars }} ⭐
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useProgressStore } from '@/stores/progress'
import { levels } from '@/data/levels'

const router = useRouter()
const progress = useProgressStore()

function goBack() {
  router.push('/')
}

function selectLevel(level) {
  if (level.starsRequired <= progress.totalStars) {
    router.push(`/game/${level.id}`)
  }
}

function getLevelTypeName(type) {
  const typeNames = {
    'learn': '学习',
    'game-listen': '听音',
    'game-visual': '看图',
    'game-speak': '朗读',
    'game-final': '综合'
  }
  return typeNames[type] || '游戏'
}

// 调试：输出关卡数据
console.log('=== 关卡数据调试 ===')
levels.forEach((level, idx) => {
  console.log(`关卡 ${level.id}: ${level.name}`)
  console.log(`  汉字: ${level.hanzi ? level.hanzi.join(', ') : '无'}`)
  console.log(`  类型: ${level.type}`)
  console.log(`  难度: ${level.level}`)
})
console.log('==================')
</script>

<style scoped>
.levels-view {
  min-height: 100vh;
  padding: 20px;
  padding-bottom: 100px;
}

.top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
}

.back-btn {
  padding: 8px 16px;
  border: none;
  background: #FF9AA2;
  color: white;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
}

.spacer {
  width: 70px;
}

.levels-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.level-card {
  background: white;
  padding: 24px;
  border-radius: 24px;
  box-shadow: 0 8px 25px rgba(255, 107, 157, 0.15);
  cursor: pointer;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  font-family: 'Nunito', sans-serif;
}

.level-card:hover:not(.locked) {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 12px 35px rgba(255, 107, 157, 0.25);
}

.level-card.locked {
  opacity: 0.6;
  cursor: not-allowed;
}

.level-number {
  font-size: 14px;
  color: #FF6B9D;
  font-weight: 700;
  margin-bottom: 8px;
}

.level-name {
  font-size: 20px;
  font-weight: 800;
  color: #800F48;
  margin-bottom: 8px;
}

.level-description {
  font-size: 14px;
  color: #718096;
  margin-bottom: 16px;
}

.level-stats {
  display: flex;
  gap: 15px;
  margin-bottom: 16px;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat .label {
  font-size: 12px;
  color: #718096;
  margin-bottom: 4px;
}

.stat .value {
  font-size: 16px;
  font-weight: 700;
  color: #FF6B9D;
}

.hanzi-preview {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 12px;
  padding: 8px;
  background: #f7fafc;
  border-radius: 12px;
}

.hanzi-char {
  font-size: 18px;
  font-weight: 600;
  color: #800F48;
  padding: 4px 8px;
  background: white;
  border-radius: 8px;
  min-width: 32px;
  text-align: center;
}

.level-stars {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}

.star {
  font-size: 24px;
  color: #e2e8f0;
  transition: color 0.3s;
}

.star.earned {
  color: #FFD93D;
}

.lock-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  backdrop-filter: blur(2px);
}

.lock-icon {
  font-size: 32px;
  margin-bottom: 8px;
}

.require-stars {
  font-size: 14px;
  color: white;
  font-weight: 600;
}

.play-button {
  width: 100%;
  padding: 12px;
  border: none;
  background: linear-gradient(135deg, #FF6B9D 0%, #FF9AA2 100%);
  color: white;
  border-radius: 16px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
}

.play-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 107, 157, 0.4);
}

.play-button:disabled {
  background: #e2e8f0;
  cursor: not-allowed;
}

.total-stars {
  position: fixed;
  bottom: 90px;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  padding: 16px 32px;
  border-radius: 50px;
  box-shadow: 0 8px 25px rgba(255, 107, 157, 0.2);
  font-size: 18px;
  font-weight: 700;
  color: #FF6B9D;
}

@media (max-width: 640px) {
  .levels-container {
    grid-template-columns: 1fr;
  }
}
</style>
