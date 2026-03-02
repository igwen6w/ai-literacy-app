<template>
  <div class="min-h-screen bg-[#F5F5F5] pb-10">
    <!-- Header -->
    <header class="page-header">
      <div class="absolute top-4 right-8 w-16 h-16 bg-white/10 rounded-full animate-float"></div>
      
      <div class="page-header-content">
        <div class="flex items-center justify-between mb-4">
          <button @click="goBack" class="glass rounded-xl px-4 py-2 flex items-center gap-2 text-white font-bold">
            <span>←</span>
            <span>返回</span>
          </button>
          
          <div class="glass rounded-xl px-4 py-2 flex items-center gap-2">
            <span>⭐</span>
            <span class="text-white font-bold">{{ currentStars }} / {{ maxStars }}</span>
          </div>
        </div>
        
        <h1 class="page-title">{{ level.name }}</h1>
      </div>
      
      <svg class="wave-bottom" viewBox="0 0 1440 60" fill="none">
        <path d="M0 60L60 52C120 44 240 28 360 24C480 20 600 28 720 32C840 36 960 36 1080 38C1200 40 1320 44 1380 46L1440 48V60H0Z" fill="#F5F5F5"/>
      </svg>
    </header>

    <main class="px-5 -mt-6 relative z-10 max-w-2xl mx-auto">
      <!-- Start screen -->
      <div v-if="gameState === 'start'" class="card p-6 text-center animate-fade-in">
        <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-3xl mx-auto mb-5 shadow-md">
          🎯
        </div>
        
        <p class="text-gray-600 mb-6">{{ level.description }}</p>
        
        <div class="grid grid-cols-2 gap-3 mb-6 max-w-xs mx-auto">
          <div class="bg-brand-50 rounded-xl p-3">
            <div class="text-xl font-black text-brand-600">{{ level.hanziCount }}</div>
            <div class="text-xs text-gray-500">汉字数量</div>
          </div>
          <div class="bg-module-cards-light rounded-xl p-3">
            <div class="text-xl font-black text-module-cards">{{ level.starsRequired || 0 }}</div>
            <div class="text-xs text-gray-500">需要星星</div>
          </div>
        </div>
        
        <button @click="startGame" class="btn-primary w-full">开始学习 🚀</button>
      </div>

      <!-- Learning mode -->
      <div v-else-if="gameState === 'learning'" class="space-y-5 animate-fade-in">
        <div class="flex justify-center gap-2">
          <span v-for="(h, i) in levelHanzi" :key="i" class="w-2.5 h-2.5 rounded-full transition-all"
            :class="{
              'bg-brand-500 scale-125': i === currentIndex,
              'bg-brand-300': i < currentIndex,
              'bg-gray-200': i > currentIndex
            }"></span>
        </div>

        <div class="flex justify-center">
          <HanziCard v-if="currentHanzi" :hanzi="currentHanzi" @learned="onHanziLearned" />
        </div>

        <div class="flex justify-center gap-3">
          <button v-if="currentIndex > 0" @click="prevHanzi" class="btn-secondary px-6">
            ← 上一个
          </button>
          <button v-if="currentIndex < levelHanzi.length - 1" @click="nextHanzi" 
            class="btn-primary px-6" :disabled="!currentHanziLearned">
            下一个 →
          </button>
          <button v-else @click="finishLearning" class="btn-primary !bg-success px-6" :disabled="!allLearned">
            完成学习 ✓
          </button>
        </div>
      </div>

      <!-- Listen game -->
      <div v-else-if="gameState === 'game-listen'" class="space-y-5 animate-fade-in">
        <div class="card p-6 text-center">
          <p class="text-gray-600 mb-5">听读音，选出正确的汉字</p>
          
          <button @click="playAudio" class="w-20 h-20 rounded-full bg-gradient-to-br from-brand-500 to-brand-600 text-white text-3xl shadow-lg hover:shadow-xl transition-shadow mb-2">
            🔊
          </button>
          <p class="text-xs text-gray-400">点击播放</p>
        </div>

        <div class="grid grid-cols-2 gap-3">
          <button v-for="(option, i) in currentOptions" :key="i" @click="selectOption(option.char)"
            class="aspect-square rounded-2xl text-3xl font-bold transition-all border-3"
            :class="{
              'border-success bg-success/10 text-success': answered && option.char === correctAnswer,
              'border-error bg-error/10 text-error': answered && option.char === selectedAnswer && option.char !== correctAnswer,
              'border-brand-400 bg-brand-50 text-brand-700': option.char === selectedAnswer && !answered,
              'border-gray-100 bg-white text-gray-700 hover:border-brand-200 hover:bg-brand-50': !answered && option.char !== selectedAnswer
            }" :disabled="answered">
            {{ option.char }}
          </button>
        </div>

        <button v-if="answered" @click="nextQuestion" class="btn-primary w-full">
          下一题 →
        </button>
      </div>

      <!-- Visual game -->
      <div v-else-if="gameState === 'game-visual'" class="space-y-5 animate-fade-in">
        <div class="card p-6 text-center">
          <p class="text-gray-600 mb-4">看图片，选出对应的汉字</p>
          <div class="text-7xl animate-bounce-gentle">{{ currentHanzi?.emoji }}</div>
        </div>

        <div class="grid grid-cols-2 gap-3">
          <button v-for="(option, i) in currentOptions" :key="i" @click="selectOption(option.char)"
            class="aspect-square rounded-2xl text-3xl font-bold transition-all border-3"
            :class="{
              'border-success bg-success/10 text-success': answered && option.char === correctAnswer,
              'border-error bg-error/10 text-error': answered && option.char === selectedAnswer && option.char !== correctAnswer,
              'border-brand-400 bg-brand-50 text-brand-700': option.char === selectedAnswer && !answered,
              'border-gray-100 bg-white text-gray-700 hover:border-brand-200 hover:bg-brand-50': !answered && option.char !== selectedAnswer
            }" :disabled="answered">
            {{ option.char }}
          </button>
        </div>

        <button v-if="answered" @click="nextQuestion" class="btn-primary w-full">
          下一题 →
        </button>
      </div>

      <!-- Complete screen -->
      <div v-else-if="gameState === 'complete'" class="card p-6 text-center animate-fade-in">
        <div class="text-5xl mb-4">
          <span v-for="i in 3" :key="i" class="inline-block"
            :class="i <= finalStars ? 'text-yellow-400' : 'text-gray-200'">
            {{ i <= finalStars ? '★' : '☆' }}
          </span>
        </div>
        
        <h2 class="text-2xl font-black text-gray-800 mb-1">关卡完成！</h2>
        <p class="text-gray-500 mb-6">正确率: {{ finalAccuracy }}%</p>

        <div class="grid grid-cols-2 gap-3 mb-6 max-w-xs mx-auto">
          <div class="bg-success/10 rounded-xl p-3">
            <div class="text-2xl font-black text-success">{{ correctCount }}</div>
            <div class="text-xs text-gray-500">答对</div>
          </div>
          <div class="bg-error/10 rounded-xl p-3">
            <div class="text-2xl font-black text-error">{{ wrongCount }}</div>
            <div class="text-xs text-gray-500">答错</div>
          </div>
        </div>

        <div class="flex gap-3">
          <button @click="retryLevel" class="btn-primary flex-1">再玩一次</button>
          <button @click="goBack" class="btn-secondary flex-1">返回主页</button>
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
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useProgressStore } from '@/stores/progress'
import { useSettingsStore } from '@/stores/settings'
import HanziCard from './HanziCard.vue'
import { findHanzi, getHanziByLevel } from '@/data/hanzi-data'
import { calculateStars, getLevelById } from '@/data/levels'

const props = defineProps({
  levelId: { type: [Number, String], required: true }
})

const router = useRouter()
const progress = useProgressStore()
const settings = useSettingsStore()

const level = ref({})
const levelHanzi = ref([])
const gameState = ref('start')
const currentIndex = ref(0)
const learnedHanziInLevel = ref(new Set())

const currentQuestionIndex = ref(0)
const currentOptions = ref([])
const correctAnswer = ref('')
const selectedAnswer = ref('')
const answered = ref(false)
const correctCount = ref(0)
const wrongCount = ref(0)

const finalStars = ref(0)
const finalAccuracy = ref(0)
const currentStars = ref(0)
const maxStars = ref(3)

const currentHanzi = computed(() => levelHanzi.value[currentIndex.value])
const currentHanziLearned = computed(() => currentHanzi.value &&
  (progress.learnedHanzi.has(currentHanzi.value.char) || learnedHanziInLevel.value.has(currentHanzi.value.char)))
const allLearned = computed(() => levelHanzi.value.every(h =>
  progress.learnedHanzi.has(h.char) || learnedHanziInLevel.value.has(h.char)))

onMounted(() => loadLevel())

const loadLevel = () => {
  const levelConfig = getLevelById(props.levelId)
  if (!levelConfig) {
    level.value = { id: props.levelId, name: `第 ${props.levelId} 关`, description: '开始学习汉字吧！', hanziCount: 5, starsRequired: 0, type: 'learn', level: 1 }
  } else {
    level.value = levelConfig
  }

  if (level.value.hanzi && level.value.hanzi.length > 0) {
    levelHanzi.value = level.value.hanzi.map(char => findHanzi(char) || { char, pinyin: '', meaning: '', emoji: '❓', example: '', example2: '' })
  } else {
    const hanziList = getHanziByLevel(level.value.level || 1)
    levelHanzi.value = hanziList.slice(0, Math.min(level.value.hanziCount || 5, hanziList.length))
  }
  currentStars.value = progress.getLevelStars(props.levelId)
}

const startGame = () => {
  const levelType = level.value.type
  if (levelType === 'learn' || levelType === 'game-speak') {
    gameState.value = 'learning'
  } else {
    gameState.value = levelType
    prepareQuestion()
  }
}

const onHanziLearned = (char) => {
  learnedHanziInLevel.value.add(char)
  progress.learnHanzi(char)
}

const nextHanzi = () => { if (currentIndex.value < levelHanzi.value.length - 1) currentIndex.value++ }
const prevHanzi = () => { if (currentIndex.value > 0) currentIndex.value-- }

const finishLearning = () => {
  finalAccuracy.value = 100
  finalStars.value = 3
  correctCount.value = levelHanzi.value.length
  wrongCount.value = 0
  progress.completeLevel(props.levelId, finalStars.value, 1)
  gameState.value = 'complete'
}

const prepareQuestion = () => {
  answered.value = false
  selectedAnswer.value = ''
  const currentQHanzi = levelHanzi.value[currentQuestionIndex.value]
  correctAnswer.value = currentQHanzi.char
  const options = [currentQHanzi]
  const allHanzi = getHanziByLevel(level.value.level || 1)
  while (options.length < 4 && allHanzi.length > 0) {
    const random = allHanzi[Math.floor(Math.random() * allHanzi.length)]
    if (!options.find(o => o.char === random.char)) options.push(random)
  }
  currentOptions.value = options.sort(() => Math.random() - 0.5)
}

const playAudio = () => {
  if (!settings.voiceEnabled) return
  const charToSpeak = correctAnswer.value || currentHanzi.value?.char
  if (!charToSpeak) return
  const utterance = new SpeechSynthesisUtterance(charToSpeak)
  utterance.lang = 'zh-CN'
  utterance.rate = settings.voiceSpeed
  speechSynthesis.speak(utterance)
}

const selectOption = (option) => {
  if (answered.value) return
  selectedAnswer.value = option
  answered.value = true
  if (option === correctAnswer.value) correctCount.value++
  else wrongCount.value++
}

const nextQuestion = () => {
  currentQuestionIndex.value++
  if (currentQuestionIndex.value >= levelHanzi.value.length) {
    finalAccuracy.value = Math.round((correctCount.value / levelHanzi.value.length) * 100)
    finalStars.value = calculateStars(finalAccuracy.value / 100)
    progress.completeLevel(props.levelId, finalStars.value, finalAccuracy.value / 100)
    gameState.value = 'complete'
  } else {
    prepareQuestion()
  }
}

const retryLevel = () => {
  currentIndex.value = 0
  currentQuestionIndex.value = 0
  correctCount.value = 0
  wrongCount.value = 0
  learnedHanziInLevel.value.clear()
  gameState.value = 'start'
}

const goBack = () => router.push('/')
</script>
