<template>
  <div class="flip-card cursor-pointer" :class="{ 'flipped': isFlipped }" @click="toggleFlip">
    <div class="flip-card-inner w-full h-full">
      <!-- Front -->
      <div class="flip-card-front card flex flex-col items-center justify-center p-3 bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-module-cards/20">
        <div class="text-4xl font-black mb-2 text-orange-700">{{ hanzi.char }}</div>
        <div class="w-10 h-10 mb-2" v-html="hanziIcon"></div>
        <div class="text-xs text-orange-500/70 flex items-center gap-1 mt-auto">
          <span>👆</span>
          <span>点击翻转</span>
        </div>
      </div>

      <!-- Back -->
      <div class="flip-card-back card flex flex-col items-center justify-center p-3 bg-gradient-to-br from-brand-500 to-brand-600 text-white border-0">
        <div class="text-3xl font-black mb-1">{{ hanzi.char }}</div>
        <div class="text-base font-bold mb-1">{{ hanzi.pinyin }}</div>
        <div class="text-xs mb-2 opacity-90">{{ hanzi.meaning }}</div>
        <div class="flex flex-col gap-1 w-full">
          <div class="text-xs bg-white/20 px-2 py-1 rounded-full truncate">{{ hanzi.example }}</div>
          <div class="text-xs bg-white/20 px-2 py-1 rounded-full truncate">{{ hanzi.example2 }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useSettingsStore } from '@/stores/settings'
import { playSound, speak, checkSpeechSupport } from '@/utils/audio'
import { getSvgIcon, generatePlaceholderSVG } from '@/utils/svg-icons'

const props = defineProps({
  hanzi: { type: Object, required: true }
})

const emit = defineEmits(['learned'])

const settings = useSettingsStore()
const isFlipped = ref(false)

const hanziIcon = computed(() => getSvgIcon(props.hanzi.char) || generatePlaceholderSVG(props.hanzi.char))

onMounted(() => {
  checkSpeechSupport()
})

const toggleFlip = () => {
  const wasFlipped = isFlipped.value
  isFlipped.value = !isFlipped.value

  if (!wasFlipped) {
    emit('learned', props.hanzi.char)

    // 语音播放
    if (settings.voiceEnabled) {
      speak(props.hanzi.char, settings.voiceSpeed)
    }
  }
}
</script>

<style scoped>
.flip-card {
  width: 100%;
  aspect-ratio: 3/4;
  perspective: 1000px;
}

.flip-card-inner {
  transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform-style: preserve-3d;
}

.flip-card.flipped .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

.flip-card-back {
  transform: rotateY(180deg);
}
</style>
