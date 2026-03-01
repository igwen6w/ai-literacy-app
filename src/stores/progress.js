import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useProgressStore = defineStore('progress', () => {
  // 状态
  const totalStars = ref(0)
  const learnedHanzi = ref(new Set())
  const levelProgress = ref({}) // { levelId: { stars, completed, accuracy } }
  const currentLevel = ref(1)
  const studyDays = ref(0)
  const lastStudyDate = ref(null)
  const totalStudyTime = ref(0) // 分钟

  // 计算属性
  const totalLearnedCount = computed(() => learnedHanzi.value.size)

  const getLevelStars = (levelId) => {
    return levelProgress.value[levelId]?.stars || 0
  }

  const isLevelCompleted = (levelId) => {
    return levelProgress.value[levelId]?.completed || false
  }

  // Actions
  function addStars(count) {
    totalStars.value += count
    saveProgress()
  }

  function learnHanzi(char) {
    if (!learnedHanzi.value.has(char)) {
      learnedHanzi.value.add(char)
      saveProgress()
    }
  }

  function completeLevel(levelId, stars, accuracy) {
    const existing = levelProgress.value[levelId] || { stars: 0, accuracy: 0 }
    // 只保留最高星级
    const newStars = Math.max(existing.stars, stars)

    levelProgress.value[levelId] = {
      stars: newStars,
      completed: true,
      accuracy: Math.max(existing.accuracy, accuracy),
      timestamp: Date.now()
    }

    if (newStars > existing.stars) {
      totalStars.value += (newStars - existing.stars)
    }

    saveProgress()
  }

  function setCurrentLevel(level) {
    currentLevel.value = level
    saveProgress()
  }

  function addStudyTime(minutes) {
    totalStudyTime.value += minutes
    updateStudyDays()
    saveProgress()
  }

  function updateStudyDays() {
    const today = new Date().toDateString()
    if (lastStudyDate.value !== today) {
      studyDays.value += 1
      lastStudyDate.value = today
    }
  }

  // 本地存储
  function saveProgress() {
    const data = {
      totalStars: totalStars.value,
      learnedHanzi: Array.from(learnedHanzi.value),
      levelProgress: levelProgress.value,
      currentLevel: currentLevel.value,
      studyDays: studyDays.value,
      lastStudyDate: lastStudyDate.value,
      totalStudyTime: totalStudyTime.value
    }
    localStorage.setItem('literacy-progress', JSON.stringify(data))
  }

  function loadProgress() {
    const saved = localStorage.getItem('literacy-progress')
    if (saved) {
      try {
        const data = JSON.parse(saved)
        totalStars.value = data.totalStars || 0
        learnedHanzi.value = new Set(data.learnedHanzi || [])
        levelProgress.value = data.levelProgress || {}
        currentLevel.value = data.currentLevel || 1
        studyDays.value = data.studyDays || 0
        lastStudyDate.value = data.lastStudyDate
        totalStudyTime.value = data.totalStudyTime || 0
      } catch (e) {
        console.error('Failed to load progress:', e)
      }
    }
  }

  function resetProgress() {
    totalStars.value = 0
    learnedHanzi.value.clear()
    levelProgress.value = {}
    currentLevel.value = 1
    studyDays.value = 0
    lastStudyDate.value = null
    totalStudyTime.value = 0
    localStorage.removeItem('literacy-progress')
  }

  // 初始化时加载
  loadProgress()

  return {
    // 状态
    totalStars,
    learnedHanzi,
    levelProgress,
    currentLevel,
    studyDays,
    totalStudyTime,
    // 计算属性
    totalLearnedCount,
    // 方法
    addStars,
    learnHanzi,
    completeLevel,
    setCurrentLevel,
    addStudyTime,
    getLevelStars,
    isLevelCompleted,
    saveProgress,
    loadProgress,
    resetProgress
  }
})
