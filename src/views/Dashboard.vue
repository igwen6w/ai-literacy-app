<template>
  <div class="dashboard">
    <div class="top-bar">
      <button @click="goBack" class="back-btn">← 返回</button>
      <h2>学习报告</h2>
      <div class="spacer"></div>
    </div>

    <!-- 总览卡片 -->
    <div class="overview-cards">
      <div class="overview-card primary">
        <div class="card-icon">⭐</div>
        <div class="card-value">{{ progress.totalStars }}</div>
        <div class="card-label">总星星数</div>
      </div>

      <div class="overview-card success">
        <div class="card-icon">📖</div>
        <div class="card-value">{{ progress.totalLearnedCount }}</div>
        <div class="card-label">已学汉字</div>
      </div>

      <div class="overview-card info">
        <div class="card-icon">📅</div>
        <div class="card-value">{{ progress.studyDays }}</div>
        <div class="card-label">学习天数</div>
      </div>
    </div>

    <!-- 学习统计 -->
    <div class="stats-section">
      <h3>学习统计</h3>
      <div class="stats-grid">
        <div class="stat-item">
          <span class="stat-label">总学习时长</span>
          <span class="stat-value">{{ formatTime(progress.totalStudyTime) }}</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">平均每天</span>
          <span class="stat-value">{{ progress.studyDays > 0 ? Math.round(progress.totalStudyTime / progress.studyDays) : 0 }} 分钟</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">完成关卡</span>
          <span class="stat-value">{{ completedLevels }} 个</span>
        </div>
      </div>
    </div>

    <!-- 已学汉字展示 -->
    <div class="learned-hanzi-section">
      <h3>已学汉字</h3>
      <div class="hanzi-grid">
        <div
          v-for="char in Array.from(progress.learnedHanzi)"
          :key="char"
          class="hanzi-item"
        >
          {{ char }}
        </div>
      </div>
    </div>

    <!-- 关卡进度 -->
    <div class="levels-section">
      <h3>关卡进度</h3>
      <div class="levels-list">
        <div
          v-for="i in 5"
          :key="i"
          class="level-item"
        >
          <div class="level-info">
            <span class="level-name">第 {{ i }} 关</span>
            <span class="level-stars">
              {{ getStarsForLevel(i) }}
            </span>
          </div>
          <div class="level-progress">
            <div
              class="progress-bar"
              :style="{ width: (getStarsForLevel(i) / 3 * 100) + '%' }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useProgressStore } from '@/stores/progress'

const router = useRouter()
const progress = useProgressStore()

const completedLevels = computed(() => {
  return Object.values(progress.levelProgress).filter(l => l.completed).length
})

function getStarsForLevel(levelId) {
  const stars = progress.getLevelStars(levelId)
  return '⭐'.repeat(stars) + '☆'.repeat(3 - stars)
}

function formatTime(minutes) {
  if (minutes < 60) {
    return `${minutes} 分钟`
  }
  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60
  return `${hours} 小时 ${mins} 分钟`
}

function goBack() {
  router.push('/')
}
</script>

<style scoped>
.dashboard {
  min-height: 100vh;
  padding: 20px;
  padding-bottom: 80px;
}

.top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
}

.back-btn {
  padding: 8px 16px;
  border: none;
  background: #e2e8f0;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
}

.spacer {
  width: 70px;
}

.overview-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin-bottom: 30px;
}

.overview-card {
  background: white;
  padding: 20px;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
}

.card-icon {
  font-size: 32px;
  margin-bottom: 10px;
}

.card-value {
  font-size: 28px;
  font-weight: bold;
  color: #2d3748;
  margin-bottom: 5px;
}

.card-label {
  font-size: 14px;
  color: #718096;
}

.overview-card.primary {
  background: linear-gradient(135deg, #ffeaa7 0%, #fdcb6e 100%);
}

.overview-card.success {
  background: linear-gradient(135deg, #55efc4 0%, #00b894 100%);
}

.overview-card.info {
  background: linear-gradient(135deg, #74b9ff 0%, #0984e3 100%);
}

.stats-section,
.learned-hanzi-section,
.levels-section {
  background: white;
  padding: 20px;
  border-radius: 16px;
  margin-bottom: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
}

h3 {
  font-size: 20px;
  color: #2d3748;
  margin-bottom: 15px;
}

.stats-grid {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.stat-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background: #f7fafc;
  border-radius: 10px;
}

.stat-label {
  font-size: 15px;
  color: #4a5568;
}

.stat-value {
  font-size: 16px;
  font-weight: bold;
  color: #4caf50;
}

.hanzi-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.hanzi-item {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-size: 24px;
  font-weight: bold;
  border-radius: 10px;
}

.levels-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.level-item {
  padding: 12px;
  background: #f7fafc;
  border-radius: 10px;
}

.level-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.level-name {
  font-size: 15px;
  font-weight: 600;
  color: #2d3748;
}

.level-stars {
  font-size: 14px;
}

.level-progress {
  height: 6px;
  background: #e2e8f0;
  border-radius: 3px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #4caf50, #8bc34a);
  transition: width 0.5s ease;
}

@media (max-width: 640px) {
  .overview-cards {
    grid-template-columns: 1fr;
  }
}
</style>
