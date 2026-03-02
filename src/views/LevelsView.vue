<template>
  <div class="min-h-screen bg-[#F5F5F5] pb-28">
    <!-- Header -->
    <header class="page-header">
      <div class="absolute top-4 right-8 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
      
      <div class="page-header-content">
        <button @click="goBack" class="glass rounded-xl px-4 py-2 flex items-center gap-2 text-white font-bold w-fit mb-4">
          <span>←</span>
          <span>返回</span>
        </button>
        
        <h1 class="page-title">选择关卡</h1>
        <p class="page-subtitle">挑战自己，收集星星</p>
      </div>
      
      <svg class="wave-bottom" viewBox="0 0 1440 60" fill="none">
        <path d="M0 60L60 52C120 44 240 28 360 24C480 20 600 28 720 32C840 36 960 36 1080 38C1200 40 1320 44 1380 46L1440 48V60H0Z" fill="#F5F5F5"/>
      </svg>
    </header>

    <!-- Level list -->
    <main class="px-5 -mt-4 relative z-10">
      <div class="space-y-4 max-w-2xl mx-auto">
        <div
          v-for="level in levels"
          :key="level.id"
          @click="selectLevel(level)"
          class="card p-5 relative overflow-hidden"
          :class="{ 
            'opacity-60 cursor-not-allowed': level.starsRequired > progress.totalStars,
            'cursor-pointer': level.starsRequired <= progress.totalStars 
          }"
        >
          <div class="absolute top-0 right-0 w-20 h-20 bg-brand-50 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          
          <div class="flex items-center gap-4 relative">
            <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-2xl shadow-md flex-shrink-0">
              {{ getLevelIcon(level.type) }}
            </div>
            
            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-2 mb-1">
                <span class="text-xs font-bold text-brand-700 bg-brand-50 px-2 py-0.5 rounded-full">第 {{ level.id }} 关</span>
                <span class="text-xs text-gray-400">{{ getLevelTypeName(level.type) }}</span>
              </div>
              <h3 class="font-bold text-gray-800 mb-1 truncate">{{ level.name }}</h3>
              <p class="text-sm text-gray-500 mb-2">{{ level.description }}</p>
              
              <div v-if="level.hanzi && level.hanzi.length > 0" class="flex gap-1.5 mb-2">
                <span v-for="char in level.hanzi.slice(0, 4)" :key="char" 
                  class="w-7 h-7 rounded bg-gray-50 flex items-center justify-center text-sm font-bold text-gray-700 border border-gray-100">
                  {{ char }}
                </span>
                <span v-if="level.hanzi.length > 4" class="text-xs text-gray-400 self-center">+{{ level.hanzi.length - 4 }}</span>
              </div>
              
              <div class="flex items-center gap-0.5">
                <span v-for="i in 3" :key="i" class="text-base"
                  :class="progress.getLevelStars(level.id) >= i ? 'text-yellow-400' : 'text-gray-200'">
                  {{ progress.getLevelStars(level.id) >= i ? '★' : '☆' }}
                </span>
              </div>
            </div>
            
            <div class="flex-shrink-0">
              <button v-if="level.starsRequired <= progress.totalStars"
                class="btn-icon bg-gradient-to-br from-brand-500 to-brand-600 text-white shadow-md hover:shadow-lg">
                ▶
              </button>
              <div v-else class="w-12 h-12 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center">
                🔒
              </div>
            </div>
          </div>
          
          <!-- Lock overlay -->
          <div v-if="level.starsRequired > progress.totalStars" 
            class="absolute inset-0 bg-white/60 backdrop-blur-[1px] flex items-center justify-center rounded-2xl">
            <div class="bg-white rounded-xl px-4 py-3 shadow-lg text-center">
              <div class="text-2xl mb-1">🔒</div>
              <div class="text-sm font-bold text-gray-700">需 {{ level.starsRequired }} 颗星</div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Stats floating card -->
    <div class="fixed bottom-24 left-5 right-5 max-w-sm mx-auto">
      <div class="card px-5 py-4 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-11 h-11 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-xl shadow-md">
            ⭐
          </div>
          <div>
            <div class="text-xs text-gray-500">已获得星星</div>
            <div class="text-xl font-black text-gray-800">{{ progress.totalStars }}</div>
          </div>
        </div>
        <div class="text-right">
          <div class="text-xs text-gray-500">目标</div>
          <div class="text-base font-bold text-brand-600">{{ maxStars }}</div>
        </div>
      </div>
    </div>

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
import { levels } from '@/data/levels'

const router = useRouter()
const progress = useProgressStore()

const maxStars = computed(() => levels.length * 3)

const goBack = () => router.push('/')

const selectLevel = (level) => {
  if (level.starsRequired <= progress.totalStars) {
    router.push(`/game/${level.id}`)
  }
}

const getLevelTypeName = (type) => {
  const names = {
    'learn': '学习',
    'game-listen': '听音辨字',
    'game-visual': '看图识字',
    'game-speak': '朗读练习',
    'game-final': '综合挑战'
  }
  return names[type] || '游戏'
}

const getLevelIcon = (type) => {
  const icons = {
    'learn': '📚',
    'game-listen': '👂',
    'game-visual': '👀',
    'game-speak': '🎤',
    'game-final': '🏆'
  }
  return icons[type] || '🎮'
}
</script>
