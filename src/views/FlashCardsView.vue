<template>
  <div class="min-h-screen bg-[#F5F5F5] pb-4">
    <!-- Header -->
    <header class="page-header !from-module-cards !to-module-cards-dark">
      <div class="absolute top-4 right-8 w-20 h-20 bg-white/10 rounded-full animate-float"></div>

      <div class="page-header-content">
        <button @click="goBack" class="glass rounded-xl px-4 py-2 flex items-center gap-2 text-white font-bold w-fit mb-4">
          <span>←</span>
          <span>返回</span>
        </button>

        <h1 class="page-title">识字卡片</h1>
        <p class="page-subtitle">每组10个字，点击卡片翻转学习</p>
      </div>

      <svg class="wave-bottom" viewBox="0 0 1440 60" fill="none">
        <path d="M0 60L60 52C120 44 240 28 360 24C480 20 600 28 720 32C840 36 960 36 1080 38C1200 40 1320 44 1380 46L1440 48V60H0Z" fill="#F5F5F5"/>
      </svg>
    </header>

    <!-- Group selector -->
    <div class="px-5 -mt-3 relative z-10">
      <div class="card p-2 flex items-center justify-between gap-2 max-w-sm mx-auto">
        <button
          @click="prevGroup"
          :disabled="currentGroup === 0"
          class="p-2 rounded-lg transition-colors"
          :class="currentGroup === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-module-cards hover:bg-module-cards/10'"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>

        <div class="flex-1 text-center">
          <span class="text-sm font-bold text-gray-700">第 {{ currentGroup + 1 }} 组</span>
          <span class="text-xs text-gray-400 block">({{ currentGroup * GROUP_SIZE + 1 }}-{{ Math.min((currentGroup + 1) * GROUP_SIZE, totalHanzi) }} / {{ totalHanzi }})</span>
        </div>

        <button
          @click="nextGroup"
          :disabled="currentGroup >= totalGroups - 1"
          class="p-2 rounded-lg transition-colors"
          :class="currentGroup >= totalGroups - 1 ? 'text-gray-300 cursor-not-allowed' : 'text-module-cards hover:bg-module-cards/10'"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
      </div>

      <!-- Group dots -->
      <div class="flex justify-center gap-1.5 mt-3">
        <button
          v-for="i in Math.min(totalGroups, 10)"
          :key="i"
          @click="goToGroup(i - 1)"
          class="w-2.5 h-2.5 rounded-full transition-all"
          :class="currentGroup === i - 1 ? 'bg-module-cards w-6' : 'bg-gray-300 hover:bg-gray-400'"
        ></button>
      </div>
      <div v-if="totalGroups > 10" class="text-center mt-2">
        <span class="text-xs text-gray-400">共 {{ totalGroups }} 组</span>
      </div>
    </div>

    <!-- Cards grid -->
    <main class="px-5 mt-5 pb-20">
      <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 max-w-5xl mx-auto">
        <HanziCard
          v-for="hanzi in currentGroupHanzi"
          :key="hanzi.char"
          :hanzi="hanzi"
          @learned="onLearned"
          class="animate-fade-in"
        />
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
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useProgressStore } from '@/stores/progress'
import HanziCard from '@/components/HanziCard.vue'
import { getAllHanzi, getHanziByGroup, getTotalGroups, GROUP_SIZE } from '@/data/hanzi-data'

const router = useRouter()
const progress = useProgressStore()

const currentGroup = ref(0)
const learnedInSession = ref(new Set())

const totalGroups = computed(() => getTotalGroups())
const totalHanzi = computed(() => getAllHanzi().length)
const currentGroupHanzi = computed(() => getHanziByGroup(currentGroup.value))

const learnedCount = computed(() => {
  return currentGroupHanzi.value.filter(h =>
    progress.learnedHanzi.has(h.char) || learnedInSession.value.has(h.char)
  ).length
})

const progressPercentage = computed(() => {
  if (currentGroupHanzi.value.length === 0) return 0
  return Math.round((learnedCount.value / currentGroupHanzi.value.length) * 100)
})

const prevGroup = () => {
  if (currentGroup.value > 0) {
    currentGroup.value--
    learnedInSession.value.clear()
  }
}

const nextGroup = () => {
  if (currentGroup.value < totalGroups.value - 1) {
    currentGroup.value++
    learnedInSession.value.clear()
  }
}

const goToGroup = (index) => {
  currentGroup.value = index
  learnedInSession.value.clear()
}

const onLearned = (char) => {
  learnedInSession.value.add(char)
  progress.learnHanzi(char)
}

const goBack = () => router.push('/')

// 恢复之前的学习进度
onMounted(() => {
  // 可以在这里添加恢复逻辑
})
</script>
