<template>
  <div class="min-h-screen bg-[#F5F5F5] pb-10">
    <!-- Header -->
    <header class="page-header">
      <div class="absolute top-4 right-8 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
      
      <div class="page-header-content">
        <button @click="goBack" class="glass rounded-xl px-4 py-2 flex items-center gap-2 text-white font-bold w-fit mb-4">
          <span>←</span>
          <span>返回</span>
        </button>
        
        <h1 class="page-title">设置</h1>
        <p class="page-subtitle">个性化学习体验</p>
      </div>
      
      <svg class="wave-bottom" viewBox="0 0 1440 60" fill="none">
        <path d="M0 60L60 52C120 44 240 28 360 24C480 20 600 28 720 32C840 36 960 36 1080 38C1200 40 1320 44 1380 46L1440 48V60H0Z" fill="#F5F5F5"/>
      </svg>
    </header>

    <main class="px-5 -mt-6 relative z-10 max-w-2xl mx-auto space-y-5">
      <!-- Sound settings -->
      <div class="card p-5">
        <h3 class="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-brand-500 text-white flex items-center justify-center text-xs">🔊</span>
          声音设置
        </h3>

        <div class="space-y-4">
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-700">启用音效</span>
            <button @click="settings.setSoundEnabled(!settings.soundEnabled)"
              class="relative w-12 h-6 rounded-full transition-colors"
              :class="settings.soundEnabled ? 'bg-brand-500' : 'bg-gray-200'">
              <span class="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform"
                :class="settings.soundEnabled ? 'translate-x-6' : 'translate-x-0'"></span>
            </button>
          </div>

          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-700">启用语音</span>
            <button @click="settings.setVoiceEnabled(!settings.voiceEnabled)"
              class="relative w-12 h-6 rounded-full transition-colors"
              :class="settings.voiceEnabled ? 'bg-brand-500' : 'bg-gray-200'">
              <span class="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform"
                :class="settings.voiceEnabled ? 'translate-x-6' : 'translate-x-0'"></span>
            </button>
          </div>

          <div>
            <div class="flex justify-between items-center mb-2">
              <span class="text-sm text-gray-700">语音速度</span>
              <span class="text-sm font-bold text-brand-600">{{ settings.voiceSpeed }}x</span>
            </div>
            <input type="range" min="0.5" max="2" step="0.1" :value="settings.voiceSpeed"
              @input="settings.setVoiceSpeed(parseFloat($event.target.value))"
              class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-500">
          </div>
        </div>
      </div>

      <!-- AI settings -->
      <div class="card p-5">
        <h3 class="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-module-game text-white flex items-center justify-center text-xs">🤖</span>
          AI 设置
        </h3>

        <div class="space-y-3">
          <div>
            <label class="text-sm text-gray-700 block mb-2">OpenAI API Key (可选)</label>
            <input type="password" :value="settings.aiApiKey" @input="settings.setAiApiKey($event.target.value)"
              placeholder="sk-..." class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:outline-none text-sm">
          </div>
          <p class="text-xs text-gray-400">启用 AI 功能可获得更准确的语音识别</p>
        </div>
      </div>

      <!-- Parent settings -->
      <div class="card p-5">
        <h3 class="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-module-cards text-white flex items-center justify-center text-xs">👨‍👩‍👧</span>
          家长设置
        </h3>

        <div>
          <label class="text-sm text-gray-700 block mb-2">每日学习限制 (分钟)</label>
          <input type="number" :value="settings.dailyTimeLimit" @input="settings.setDailyTimeLimit(parseInt($event.target.value))"
            min="5" max="120" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:outline-none text-sm">
        </div>
      </div>

      <!-- Data management -->
      <div class="card p-5 border-2 border-error/20">
        <h3 class="font-bold text-error mb-4 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-error/10 text-error flex items-center justify-center text-xs">⚠️</span>
          数据管理
        </h3>

        <button @click="confirmReset" class="w-full py-3.5 rounded-xl border-2 border-error/30 text-error font-bold hover:bg-error/5 transition-colors">
          重置所有进度
        </button>
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
import { useRouter } from 'vue-router'
import { useProgressStore } from '@/stores/progress'
import { useSettingsStore } from '@/stores/settings'

const router = useRouter()
const progress = useProgressStore()
const settings = useSettingsStore()

const confirmReset = () => {
  if (confirm('确定要重置所有学习进度吗？此操作无法撤销！')) {
    progress.resetProgress()
    settings.resetSettings()
    alert('已重置所有数据')
    router.push('/')
  }
}

const goBack = () => router.push('/')
</script>
