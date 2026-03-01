<template>
  <div class="flashcards-container">
    <div class="header">
      <h2>识字卡片</h2>
      <div class="category-selector">
        <button
          v-for="level in [1, 2, 3]"
          :key="level"
          @click="selectLevel(level)"
          :class="{ active: currentLevel === level }"
          class="level-btn"
        >
          Level {{ level }}
        </button>
      </div>
    </div>

    <div class="cards-grid">
      <HanziCard
        v-for="hanzi in filteredHanzi"
        :key="hanzi.char"
        :hanzi="hanzi"
        @learned="onLearned"
      />
    </div>

    <div class="progress-bar">
      <div class="progress-info">
        <span>已学: {{ learnedCount }} / {{ filteredHanzi.length }}</span>
        <span>{{ progressPercentage }}%</span>
      </div>
      <div class="progress-track">
        <div class="progress-fill" :style="{ width: progressPercentage + '%' }"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useProgressStore } from '@/stores/progress'
import HanziCard from './HanziCard.vue'
import { getHanziByLevel } from '@/data/hanzi-data'

const progress = useProgressStore()
const currentLevel = ref(1)
const learnedInSession = ref(new Set())

const filteredHanzi = computed(() => {
  return getHanziByLevel(currentLevel.value)
})

const learnedCount = computed(() => {
  return filteredHanzi.value.filter(h =>
    progress.learnedHanzi.has(h.char) || learnedInSession.value.has(h.char)
  ).length
})

const progressPercentage = computed(() => {
  if (filteredHanzi.value.length === 0) return 0
  return Math.round((learnedCount.value / filteredHanzi.value.length) * 100)
})

function selectLevel(level) {
  currentLevel.value = level
  learnedInSession.value.clear()
}

function onLearned(char) {
  learnedInSession.value.add(char)
  progress.learnHanzi(char)
}

onMounted(() => {
  // 滚动到顶部
  window.scrollTo(0, 0)
})
</script>

<style scoped>
.flashcards-container {
  min-height: 100vh;
  padding: 20px;
  max-width: 1400px;
  margin: 0 auto;
}

.header {
  text-align: center;
  margin-bottom: 30px;
}

.header h2 {
  font-size: 32px;
  color: #2d3748;
  margin-bottom: 20px;
}

.category-selector {
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
}

.level-btn {
  padding: 10px 24px;
  border: 2px solid #4caf50;
  background: white;
  color: #4caf50;
  border-radius: 25px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
}

.level-btn:hover {
  background: #4caf50;
  color: white;
  transform: translateY(-2px);
}

.level-btn.active {
  background: #4caf50;
  color: white;
  box-shadow: 0 4px 12px rgba(76, 175, 80, 0.4);
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 24px;
  margin-bottom: 40px;
  justify-items: center;
}

@media (max-width: 640px) {
  .cards-grid {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 16px;
  }
}

.progress-bar {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  padding: 16px 24px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 500px;
}

.progress-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 600;
  color: #4a5568;
}

.progress-track {
  height: 8px;
  background: #e2e8f0;
  border-radius: 4px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #4caf50, #8bc34a);
  transition: width 0.5s ease;
  border-radius: 4px;
}
</style>
