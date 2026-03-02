<template>
  <div class="min-h-screen bg-[#F5F5F5]">
    <!-- Header -->
    <header class="page-header !from-module-story !to-module-story-dark">
      <div class="absolute top-4 right-8 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
      
      <div class="page-header-content">
        <button @click="goBack" class="glass rounded-xl px-4 py-2 flex items-center gap-2 text-white font-bold w-fit mb-4">
          <span>←</span>
          <span>返回</span>
        </button>
        
        <h1 class="page-title">互动绘本</h1>
        <p class="page-subtitle">在故事中学习汉字</p>
      </div>
      
      <svg class="wave-bottom" viewBox="0 0 1440 60" fill="none">
        <path d="M0 60L60 52C120 44 240 28 360 24C480 20 600 28 720 32C840 36 960 36 1080 38C1200 40 1320 44 1380 46L1440 48V60H0Z" fill="#F5F5F5"/>
      </svg>
    </header>

    <!-- Content -->
    <main class="px-5 -mt-6 relative z-10 pb-10">
      <div class="max-w-sm mx-auto card p-8 text-center">
        <div class="w-20 h-20 rounded-2xl bg-gradient-to-br from-module-story to-module-story-dark flex items-center justify-center text-4xl mx-auto mb-6 shadow-lg animate-bounce-gentle">
          📖
        </div>
        
        <h2 class="text-xl font-bold text-gray-800 mb-2">即将推出</h2>
        <p class="text-gray-500 text-sm mb-1">互动绘本功能正在开发中</p>
        <p class="text-gray-400 text-xs mb-6">精彩的故事即将呈现，敬请期待！</p>
        
        <button @click="goBack" class="btn-primary w-full">返回首页</button>
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
const router = useRouter()
const goBack = () => router.push('/')
</script>
