<template>
  <div class="game-container">
    <div class="game-header">
      <button @click="goBack" class="back-btn">← 返回</button>
      <h2>{{ level.name }}</h2>
      <div class="stars-display">
        ⭐ {{ currentStars }} / {{ maxStars }}
      </div>
    </div>

    <!-- 游戏开始界面 -->
    <div v-if="gameState === 'start'" class="start-screen">
      <div class="level-info">
        <p class="description">{{ level.description }}</p>
        <div class="level-stats">
          <div class="stat">
            <span class="label">汉字数量</span>
            <span class="value">{{ level.hanziCount }}</span>
          </div>
          <div class="stat">
            <span class="label">需要星星</span>
            <span class="value">{{ level.starsRequired }}</span>
          </div>
        </div>
      </div>
      <button @click="startGame" class="start-btn big-btn">
        开始学习
      </button>
    </div>

    <!-- 学习模式 -->
    <div v-else-if="gameState === 'learning'" class="learning-screen">
      <div class="progress-dots">
        <span
          v-for="(h, i) in levelHanzi"
          :key="i"
          class="dot"
          :class="{
            current: i === currentIndex,
            completed: i < currentIndex
          }"
        ></span>
      </div>

      <div class="hanzi-display">
        <HanziCard
          v-if="currentHanzi"
          :hanzi="currentHanzi"
          @learned="onHanziLearned"
        />
      </div>

      <div class="nav-buttons">
        <button
          v-if="currentIndex > 0"
          @click="prevHanzi"
          class="nav-btn"
        >
          上一个
        </button>
        <button
          v-if="currentIndex < levelHanzi.length - 1"
          @click="nextHanzi"
          class="nav-btn primary"
          :disabled="!currentHanziLearned"
        >
          下一个
        </button>
        <button
          v-else
          @click="finishLearning"
          class="nav-btn success"
          :disabled="!allLearned"
        >
          完成学习
        </button>
      </div>
    </div>

    <!-- 游戏模式：听音辨字 -->
    <div v-else-if="gameState === 'game-listen'" class="game-screen">
      <div class="question-area">
        <p class="instruction">听读音，选出正确的汉字</p>
        <button @click="playAudio" class="play-audio-btn">
          🔊 播放读音
        </button>
      </div>

      <div class="options-grid">
        <button
          v-for="(option, i) in currentOptions"
          :key="i"
          @click="selectOption(option.char)"
          class="option-btn"
          :class="{
            correct: answered && option.char === correctAnswer,
            wrong: answered && option.char === selectedAnswer && option.char !== correctAnswer,
            selected: option.char === selectedAnswer && !answered
          }"
          :disabled="answered"
        >
          {{ option.char }}
        </button>
      </div>

      <button
        v-if="answered"
        @click="nextQuestion"
        class="next-btn"
      >
        下一题
      </button>
    </div>

    <!-- 游戏模式：看图识字 -->
    <div v-else-if="gameState === 'game-visual'" class="game-screen">
      <div class="question-area">
        <p class="instruction">看图片，选出对应的汉字</p>
      </div>

      <div class="emoji-display">
        <div class="big-emoji">{{ currentHanzi?.emoji }}</div>
      </div>

      <div class="options-grid">
        <button
          v-for="(option, i) in currentOptions"
          :key="i"
          @click="selectOption(option.char)"
          class="option-btn"
          :class="{
            correct: answered && option.char === correctAnswer,
            wrong: answered && option.char === selectedAnswer && option.char !== correctAnswer,
            selected: option.char === selectedAnswer && !answered
          }"
          :disabled="answered"
        >
          {{ option.char }}
        </button>
      </div>

      <button
        v-if="answered"
        @click="nextQuestion"
        class="next-btn"
      >
        下一题
      </button>
    </div>

    <!-- 完成界面 -->
    <div v-else-if="gameState === 'complete'" class="complete-screen">
      <div class="result-card">
        <div class="stars-earned">
          <span v-for="i in 3" :key="i" class="star">
            {{ i <= finalStars ? '⭐' : '☆' }}
          </span>
        </div>
        <h3>关卡完成！</h3>
        <p class="accuracy">正确率: {{ finalAccuracy }}%</p>

        <div class="stats">
          <div class="stat-item">
            <span class="value">{{ correctCount }}</span>
            <span class="label">答对</span>
          </div>
          <div class="stat-item">
            <span class="value">{{ wrongCount }}</span>
            <span class="label">答错</span>
          </div>
        </div>

        <div class="action-buttons">
          <button @click="retryLevel" class="retry-btn">
            再玩一次
          </button>
          <button @click="goBack" class="home-btn">
            返回主页
          </button>
        </div>
      </div>
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
  levelId: {
    type: [Number, String],
    required: true
  }
})

const router = useRouter()
const progress = useProgressStore()
const settings = useSettingsStore()

const level = ref({})
const levelHanzi = ref([])
const gameState = ref('start')
const currentIndex = ref(0)
const learnedHanziInLevel = ref(new Set())

// 游戏状态
const currentQuestionIndex = ref(0)
const currentOptions = ref([])
const correctAnswer = ref('')
const selectedAnswer = ref('')
const answered = ref(false)
const correctCount = ref(0)
const wrongCount = ref(0)

// 结果
const finalStars = ref(0)
const finalAccuracy = ref(0)
const currentStars = ref(0)
const maxStars = ref(3)

const currentHanzi = computed(() => {
  return levelHanzi.value[currentIndex.value]
})

const currentHanziLearned = computed(() => {
  return currentHanzi.value &&
    (progress.learnedHanzi.has(currentHanzi.value.char) ||
     learnedHanziInLevel.value.has(currentHanzi.value.char))
})

const allLearned = computed(() => {
  return levelHanzi.value.every(h =>
    progress.learnedHanzi.has(h.char) || learnedHanziInLevel.value.has(h.char)
  )
})

onMounted(() => {
  loadLevel()
})

function loadLevel() {
  // 从关卡配置加载数据
  const levelConfig = getLevelById(props.levelId)

  if (!levelConfig) {
    // 如果没有找到配置，使用默认配置
    level.value = {
      id: props.levelId,
      name: `第 ${props.levelId} 关`,
      description: '开始学习汉字吧！',
      hanziCount: 5,
      starsRequired: 0,
      type: 'learn',
      level: 1
    }
  } else {
    level.value = levelConfig
  }

  // 加载关卡汉字
  if (level.value.hanzi && level.value.hanzi.length > 0) {
    levelHanzi.value = level.value.hanzi.map(char =>
      findHanzi(char) || { char, pinyin: '', meaning: '', emoji: '❓', example: '', example2: '' }
    )
  } else {
    // 从对应级别获取汉字
    const hanziList = getHanziByLevel(level.value.level || 1)
    const count = Math.min(level.value.hanziCount || 5, hanziList.length)
    levelHanzi.value = hanziList.slice(0, count)
  }

  // 获取已获得的星级
  currentStars.value = progress.getLevelStars(props.levelId)
}

function startGame() {
  const levelType = level.value.type

  if (levelType === 'learn' || levelType === 'game-speak') {
    gameState.value = 'learning'
  } else {
    gameState.value = levelType
    prepareQuestion()
  }
}

function onHanziLearned(char) {
  learnedHanziInLevel.value.add(char)
  progress.learnHanzi(char)
}

function nextHanzi() {
  if (currentIndex.value < levelHanzi.value.length - 1) {
    currentIndex.value++
  }
}

function prevHanzi() {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

function finishLearning() {
  // 计算星星并完成
  finalAccuracy.value = 100
  finalStars.value = 3
  correctCount.value = levelHanzi.value.length
  wrongCount.value = 0

  progress.completeLevel(props.levelId, finalStars.value, finalAccuracy.value / 100)
  gameState.value = 'complete'
}

function prepareQuestion() {
  answered.value = false
  selectedAnswer.value = ''

  const currentQHanzi = levelHanzi.value[currentQuestionIndex.value]
  correctAnswer.value = currentQHanzi.char

  // 生成选项
  const options = [currentQHanzi]
  const allHanzi = getHanziByLevel(level.value.level || 1)

  while (options.length < 4 && allHanzi.length > 0) {
    const random = allHanzi[Math.floor(Math.random() * allHanzi.length)]
    if (!options.find(o => o.char === random.char)) {
      options.push(random)
    }
  }

  currentOptions.value = options.sort(() => Math.random() - 0.5)
}

function playAudio() {
  if (!settings.voiceEnabled) return

  // 在游戏模式下，播放正确答案的读音
  const charToSpeak = correctAnswer.value || currentHanzi.value?.char
  if (!charToSpeak) return

  const utterance = new SpeechSynthesisUtterance(charToSpeak)
  utterance.lang = 'zh-CN'
  utterance.rate = settings.voiceSpeed
  speechSynthesis.speak(utterance)
}

function selectOption(option) {
  if (answered.value) return

  selectedAnswer.value = option
  answered.value = true

  if (option === correctAnswer.value) {
    correctCount.value++
  } else {
    wrongCount.value++
  }
}

function nextQuestion() {
  currentQuestionIndex.value++

  if (currentQuestionIndex.value >= levelHanzi.value.length) {
    // 游戏结束
    finalAccuracy.value = Math.round(
      (correctCount.value / levelHanzi.value.length) * 100
    )
    finalStars.value = calculateStars(finalAccuracy.value / 100)

    progress.completeLevel(props.levelId, finalStars.value, finalAccuracy.value / 100)
    gameState.value = 'complete'
  } else {
    prepareQuestion()
  }
}

function retryLevel() {
  currentIndex.value = 0
  currentQuestionIndex.value = 0
  correctCount.value = 0
  wrongCount.value = 0
  learnedHanziInLevel.value.clear()
  gameState.value = 'start'
}

function goBack() {
  router.push('/')
}
</script>

<style scoped>
.game-container {
  min-height: 100vh;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.game-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding: 15px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.back-btn {
  padding: 8px 16px;
  border: none;
  background: #e2e8f0;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
}

.stars-display {
  font-size: 20px;
  font-weight: bold;
  color: #f59e0b;
}

/* 开始界面 */
.start-screen {
  text-align: center;
  padding: 40px 20px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.level-info {
  margin-bottom: 30px;
}

.description {
  font-size: 18px;
  color: #4a5568;
  margin-bottom: 20px;
}

.level-stats {
  display: flex;
  justify-content: center;
  gap: 40px;
}

.stat {
  text-align: center;
}

.stat .label {
  display: block;
  font-size: 14px;
  color: #718096;
  margin-bottom: 5px;
}

.stat .value {
  font-size: 24px;
  font-weight: bold;
  color: #4caf50;
}

.big-btn {
  padding: 16px 48px;
  font-size: 20px;
  font-weight: bold;
  border: none;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s;
}

.big-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
}

/* 学习界面 */
.learning-screen {
  text-align: center;
}

.progress-dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 30px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #e2e8f0;
  transition: all 0.3s;
}

.dot.current {
  background: #4caf50;
  transform: scale(1.3);
}

.dot.completed {
  background: #81c784;
}

.hanzi-display {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}

.nav-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.nav-btn {
  padding: 12px 32px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  background: #e2e8f0;
  color: #4a5568;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s;
}

.nav-btn.primary {
  background: #4caf50;
  color: white;
}

.nav-btn.success {
  background: #10b981;
  color: white;
}

.nav-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* 游戏界面 */
.game-screen {
  text-align: center;
}

.question-area {
  background: white;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 30px;
}

.instruction {
  font-size: 20px;
  color: #2d3748;
  margin-bottom: 15px;
}

.play-audio-btn {
  padding: 12px 32px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  background: #667eea;
  color: white;
  border-radius: 12px;
  cursor: pointer;
}

.emoji-display {
  font-size: 100px;
  margin-bottom: 30px;
}

.options-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin-bottom: 20px;
}

.option-btn {
  padding: 20px;
  font-size: 32px;
  font-weight: bold;
  border: 3px solid #e2e8f0;
  background: white;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s;
}

.option-btn:hover:not(:disabled) {
  border-color: #667eea;
  transform: scale(1.02);
}

.option-btn.selected {
  border-color: #667eea;
  background: #f0f4ff;
}

.option-btn.correct {
  border-color: #10b981;
  background: #d1fae5;
}

.option-btn.wrong {
  border-color: #ef4444;
  background: #fee2e2;
}

.next-btn {
  padding: 12px 48px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  background: #4caf50;
  color: white;
  border-radius: 12px;
  cursor: pointer;
}

/* 完成界面 */
.complete-screen {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
}

.result-card {
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.stars-earned {
  font-size: 48px;
  margin-bottom: 20px;
}

.star {
  margin: 0 5px;
}

.result-card h3 {
  font-size: 28px;
  color: #2d3748;
  margin-bottom: 10px;
}

.accuracy {
  font-size: 20px;
  color: #4a5568;
  margin-bottom: 30px;
}

.stats {
  display: flex;
  justify-content: center;
  gap: 60px;
  margin-bottom: 30px;
}

.stat-item {
  text-align: center;
}

.stat-item .value {
  display: block;
  font-size: 36px;
  font-weight: bold;
  color: #4caf50;
}

.stat-item .label {
  font-size: 16px;
  color: #718096;
}

.action-buttons {
  display: flex;
  gap: 15px;
  justify-content: center;
}

.retry-btn,
.home-btn {
  padding: 12px 32px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s;
}

.retry-btn {
  background: #667eea;
  color: white;
}

.home-btn {
  background: #e2e8f0;
  color: #4a5568;
}

.retry-btn:hover,
.home-btn:hover {
  transform: translateY(-2px);
}

@media (max-width: 640px) {
  .options-grid {
    grid-template-columns: 1fr;
  }

  .level-stats {
    flex-direction: column;
    gap: 20px;
  }
}
</style>
