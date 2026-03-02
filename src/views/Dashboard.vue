<template>
  <div class="min-h-screen bg-[#F5F5F5] pb-10">
    <!-- Header -->
    <header class="page-header !from-module-report !to-module-report-dark">
      <div class="absolute top-4 right-8 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
      
      <div class="page-header-content">
        <button @click="goBack" class="glass rounded-xl px-4 py-2 flex items-center gap-2 text-white font-bold w-fit mb-4">
          <span>←</span>
          <span>返回</span>
        </button>
        
        <h1 class="page-title">学习报告</h1>
        <p class="page-subtitle">记录每个进步</p>
      </div>
      
      <svg class="wave-bottom" viewBox="0 0 1440 60" fill="none">
        <path d="M0 60L60 52C120 44 240 28 360 24C480 20 600 28 720 32C840 36 960 36 1080 38C1200 40 1320 44 1380 46L1440 48V60H0Z" fill="#F5F5F5"/>
      </svg>
    </header>

    <main class="px-5 -mt-6 relative z-10 max-w-2xl mx-auto space-y-5">
      <!-- Overview cards -->
      <div class="grid grid-cols-3 gap-3">
        <div class="card p-4 text-center">
          <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-2xl mx-auto mb-2 shadow-md">
            ⭐
          </div>
          <div class="text-2xl font-black text-gray-800">{{ progress.totalStars }}</div>
          <div class="text-xs text-gray-500">总星星</div>
        </div>

        <div class="card p-4 text-center">
          <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-2xl mx-auto mb-2 shadow-md">
            📖
          </div>
          <div class="text-2xl font-black text-gray-800">{{ progress.totalLearnedCount }}</div>
          <div class="text-xs text-gray-500">已学汉字</div>
        </div>

        <div class="card p-4 text-center">
          <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-module-game to-module-game-dark flex items-center justify-center text-2xl mx-auto mb-2 shadow-md">
            📅
          </div>
          <div class="text-2xl font-black text-gray-800">{{ progress.studyDays }}</div>
          <div class="text-xs text-gray-500">学习天数</div>
        </div>
      </div>

      <!-- Detailed stats -->
      <div class="card p-5">
        <h3 class="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-brand-500 text-white flex items-center justify-center text-xs">📊</span>
          详细统计
        </h3>
        
        <div class="space-y-3">
          <div class="flex items-center justify-between p-3.5 bg-brand-50 rounded-xl">
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-lg bg-brand-100 flex items-center justify-center text-lg">⏱️</div>
              <span class="text-sm font-medium text-gray-700">总学习时长</span>
            </div>
            <span class="font-bold text-brand-600">{{ formatTime(progress.totalStudyTime) }}</span>
          </div>
          
          <div class="flex items-center justify-between p-3.5 bg-module-game-light rounded-xl">
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-lg bg-module-game/20 flex items-center justify-center text-lg">📈</div>
              <span class="text-sm font-medium text-gray-700">平均每天</span>
            </div>
            <span class="font-bold text-module-game">{{ progress.studyDays > 0 ? Math.round(progress.totalStudyTime / progress.studyDays) : 0 }} 分钟</span>
          </div>
          
          <div class="flex items-center justify-between p-3.5 bg-module-cards-light rounded-xl">
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-lg bg-module-cards/20 flex items-center justify-center text-lg">🏆</div>
              <span class="text-sm font-medium text-gray-700">完成关卡</span>
            </div>
            <span class="font-bold text-module-cards">{{ completedLevels }} 个</span>
          </div>
        </div>
      </div>

      <!-- Learned characters -->
      <div class="card p-5">
        <h3 class="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-module-cards text-white flex items-center justify-center text-xs">📝</span>
          已学汉字
        </h3>
        
        <div v-if="progress.learnedHanzi.size > 0" class="flex flex-wrap gap-2">
          <div v-for="char in Array.from(progress.learnedHanzi)" :key="char"
            class="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 text-white flex items-center justify-center text-lg font-bold shadow-md">
            {{ char }}
          </div>
        </div>
        <div v-else class="text-center py-8 text-gray-400">
          <div class="text-4xl mb-2">📚</div>
          <p class="text-sm">还没有学习汉字，快去开始吧！</p>
        </div>
      </div>

      <!-- Level progress -->
      <div class="card p-5">
        <h3 class="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-module-game text-white flex items-center justify-center text-xs">🎮</span>
          关卡进度
        </h3>
        
        <div class="space-y-3">
          <div v-for="i in 5" :key="i" class="p-3.5 bg-gray-50 rounded-xl">
            <div class="flex justify-between items-center mb-2">
              <span class="font-bold text-gray-700 text-sm">第 {{ i }} 关</span>
              <div class="flex items-center gap-0.5">
                <span v-for="star in 3" :key="star" class="text-sm"
                  :class="getLevelStarCount(i) >= star ? 'text-yellow-400' : 'text-gray-200'">
                  {{ getLevelStarCount(i) >= star ? '★' : '☆' }}
                </span>
              </div>
            </div>
            <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div class="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all"
                :style="{ width: (getLevelStarCount(i) / 3 * 100) + '%' }"></div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Bottom bar -->
    <div class="fixed bottom-0 left-0 right-0 h-1 flex">
      <div class="flex-1 bg-module-cards"></div>
      <div class="flex-1 bg-module-game"></div>
      <div class="flex-1 bg-module-story"></div>
      <div class="flex-1 bg-module-report"></div>
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

const getLevelStarCount = (levelId) => progress.getLevelStars(levelId)

const formatTime = (minutes) => {
  if (minutes < 60) return `${minutes} 分钟`
  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60
  return `${hours} 小时 ${mins} 分钟`
}

const goBack = () => router.push('/')
</script>
