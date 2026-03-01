<template>
  <div class="flashcards-view">
    <div class="top-bar">
      <button @click="goBack" class="back-btn">← 返回</button>
      <h2>识字卡片</h2>
      <div class="spacer"></div>
    </div>

    <div class="level-selector">
      <button
        v-for="level in [1, 2, 3]"
        :key="level"
        @click="selectLevel(level)"
        :class="{ active: currentLevel === level }"
        class="level-tab"
      >
        Level {{ level }}
      </button>
    </div>

    <div class="cards-grid">
      <HanziCard
        v-for="hanzi in filteredHanzi"
        :key="hanzi.char"
        :hanzi="hanzi"
        @learned="onLearned"
      />
    </div>

    <div class="floating-progress">
      <div class="progress-text">
        已学 {{ learnedCount }} / {{ filteredHanzi.length }}
      </div>
      <div class="progress-bar">
        <div class="progress-fill" :style="{ width: progressPercentage + '%' }"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useProgressStore } from '@/stores/progress'
import HanziCard from '@/components/HanziCard.vue'
import { getHanziByLevel } from '@/data/hanzi-data'

const router = useRouter()
const progress = useProgressStore()

const currentLevel = ref(1)
const learnedInSession = ref(new Set())

const filteredHanzi = computed(() => getHanziByLevel(currentLevel.value))

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

function goBack() {
  router.push('/')
}
</script>

<style scoped>
.flashcards-view {
  min-height: 100vh;
  padding: 20px;
  padding-bottom: 100px;
}

.top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
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

.level-selector {
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
  overflow-x: auto;
  padding-bottom: 10px;
}

.level-tab {
  flex: 1;
  padding: 12px;
  border: 2px solid #4caf50;
  background: white;
  color: #4caf50;
  border-radius: 12px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
  white-space: nowrap;
}

.level-tab.active {
  background: #4caf50;
  color: white;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
}

.floating-progress {
  position: fixed;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  padding: 12px 20px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  width: 90%;
  max-width: 400px;
}

.progress-text {
  font-size: 14px;
  font-weight: 600;
  color: #4a5568;
  margin-bottom: 8px;
  text-align: center;
}

.progress-bar {
  height: 8px;
  background: #e2e8f0;
  border-radius: 4px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #4caf50, #8bc34a);
  transition: width 0.5s ease;
}

@media (min-width: 768px) {
  .cards-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 30px;
  }
}
</style>
