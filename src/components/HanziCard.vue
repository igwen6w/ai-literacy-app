<template>
  <div
    class="hanzi-card"
    :class="{ 'flipped': isFlipped, 'bounce-in': justAppeared }"
    @click="toggleFlip"
  >
    <div class="card-inner">
      <!-- 正面：汉字和SVG图片 -->
      <div class="card-front">
        <div class="hanzi-char">{{ hanzi.char }}</div>
        <div class="hanzi-svg" v-html="hanziIcon"></div>
        <div class="hint-text">点击翻转</div>
      </div>

      <!-- 背面：拼音和解释 -->
      <div class="card-back">
        <div class="hanzi-char-back">{{ hanzi.char }}</div>
        <div class="hanzi-pinyin">{{ hanzi.pinyin }}</div>
        <div class="hanzi-meaning">{{ hanzi.meaning }}</div>
        <div class="hanzi-examples">
          <div class="example">{{ hanzi.example }}</div>
          <div class="example">{{ hanzi.example2 }}</div>
        </div>
        <button v-if="voiceEnabled" @click.stop="playAudio" class="audio-btn">
          🔊 读音
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useSettingsStore } from '@/stores/settings'
import { playSound, speak } from '@/utils/audio'
import { getSvgIcon, generatePlaceholderSVG } from '@/utils/svg-icons'

const props = defineProps({
  hanzi: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['learned'])

const settings = useSettingsStore()
const isFlipped = ref(false)
const justAppeared = ref(true)

const hanziIcon = computed(() => {
  return getSvgIcon(props.hanzi.char) || generatePlaceholderSVG(props.hanzi.char)
})

onMounted(() => {
  setTimeout(() => {
    justAppeared.value = false
  }, 500)
})

function toggleFlip() {
  isFlipped.value = !isFlipped.value

  // 播放翻转音效
  playSound('flip')

  if (isFlipped.value) {
    emit('learned', props.hanzi.char)

    // 自动朗读汉字
    if (settings.voiceEnabled) {
      setTimeout(() => {
        speak(props.hanzi.char, settings.voiceSpeed)
      }, 300)
    }
  }
}

function playAudio() {
  if (!settings.voiceEnabled) return

  // 播放点击音效
  playSound('click')

  // 朗读汉字
  speak(props.hanzi.char, settings.voiceSpeed)
}
</script>

<style scoped>
.hanzi-card {
  width: 200px;
  height: 280px;
  perspective: 1000px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  font-family: 'Nunito', sans-serif;
}

.hanzi-card:hover {
  transform: translateY(-12px) scale(1.02);
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform-style: preserve-3d;
}

.hanzi-card.flipped .card-inner {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  border-radius: 30px;
  box-shadow: 0 12px 40px rgba(255, 107, 157, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  border: none;
}

.card-front {
  background: linear-gradient(135deg, #FFF4BD 0%, #FFC3A0 100%);
  color: #800F48;
}

.card-back {
  background: linear-gradient(135deg, #FFB5BA 0%, #FF9AA2 100%);
  color: white;
  transform: rotateY(180deg);
}

.hanzi-char {
  font-size: 85px;
  font-weight: 800;
  margin-bottom: 12px;
  background: linear-gradient(135deg, #FF6B9D 0%, #C7CEEA 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.1));
}

.hanzi-emoji {
  font-size: 65px;
  margin-bottom: 18px;
  animation: float 3s ease-in-out infinite;
}

.hanzi-svg {
  width: 80px;
  height: 80px;
  margin-bottom: 18px;
  animation: float 3s ease-in-out infinite;
}

.hanzi-svg :deep(svg) {
  width: 100%;
  height: 100%;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.1));
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.hanzi-char-back {
  font-size: 65px;
  font-weight: 800;
  margin-bottom: 12px;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.hanzi-pinyin {
  font-size: 22px;
  margin-bottom: 8px;
  font-weight: 700;
  opacity: 0.95;
}

.hanzi-meaning {
  font-size: 18px;
  margin-bottom: 16px;
  font-weight: 600;
  opacity: 0.9;
}

.hanzi-examples {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
}

.example {
  font-size: 15px;
  background: rgba(255, 255, 255, 0.5);
  padding: 8px 18px;
  border-radius: 20px;
  font-weight: 600;
  backdrop-filter: blur(10px);
}

.hint-text {
  font-size: 13px;
  opacity: 0.75;
  margin-top: auto;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.audio-btn {
  background: white;
  border: none;
  color: #FF6B9D;
  padding: 12px 28px;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 6px 20px rgba(255, 107, 157, 0.3);
}

.audio-btn:hover {
  background: #FFF4BD;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 107, 157, 0.4);
}

.audio-btn:active {
  transform: translateY(0);
  box-shadow: 0 4px 15px rgba(255, 107, 157, 0.3);
}

@media (max-width: 640px) {
  .hanzi-card {
    width: 160px;
    height: 240px;
  }

  .hanzi-char {
    font-size: 65px;
  }

  .hanzi-emoji {
    font-size: 50px;
  }

  .hanzi-char-back {
    font-size: 55px;
  }
}
</style>
