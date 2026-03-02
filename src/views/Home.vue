<template>
  <div class="min-h-screen bg-[#F5F5F5]">
    <!-- Header -->
    <header class="page-header">
      <!-- Floating decorations -->
      <div class="absolute top-4 left-4 w-24 h-24 bg-white/10 rounded-full animate-float"></div>
      <div class="absolute top-12 right-8 w-16 h-16 bg-white/10 rounded-full animate-bounce-gentle"></div>
      
      <div class="page-header-content">
        <!-- Top bar -->
        <div class="flex justify-between items-center mb-6">
          <div class="glass rounded-xl px-4 py-2.5 flex items-center gap-3">
            <div class="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-2xl shadow-sm">
              📚
            </div>
            <span class="text-white font-bold text-lg">识字宝</span>
          </div>
          
          <div class="glass rounded-xl px-4 py-2.5 flex items-center gap-2">
            <span>⭐</span>
            <span class="text-white font-bold text-lg">{{ progress.totalStars }}</span>
          </div>
        </div>
        
        <!-- Title -->
        <h1 class="page-title">快乐学汉字</h1>
        <p class="page-subtitle">每天进步一点点</p>
      </div>
      
      <!-- Wave -->
      <svg class="wave-bottom" viewBox="0 0 1440 60" fill="none">
        <path d="M0 60L60 52C120 44 240 28 360 24C480 20 600 28 720 32C840 36 960 36 1080 38C1200 40 1320 44 1380 46L1440 48V60H0Z" fill="#F5F5F5"/>
      </svg>
    </header>

    <!-- Main content -->
    <main class="px-5 -mt-6 relative z-10 pb-28">
      <!-- Game cards grid -->
      <div class="grid grid-cols-2 gap-4 max-w-3xl mx-auto">
        <!-- Cards -->
        <div @click="goToCards" class="card p-5 cursor-pointer relative overflow-hidden group">
          <div class="absolute top-0 right-0 w-24 h-24 bg-module-cards-light rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div class="absolute top-3 right-3 bg-module-cards-light text-module-cards-dark text-xs font-bold px-2.5 py-1 rounded-full">
            3-8岁
          </div>
          
          <div class="relative">
            <div class="w-16 h-16 rounded-xl bg-gradient-to-br from-module-cards to-module-cards-dark flex items-center justify-center text-3xl shadow-lg mb-3 group-hover:scale-110 transition-transform">
              📇
            </div>
            <h3 class="font-bold text-gray-800 mb-1">识字卡片</h3>
            <p class="text-gray-500 text-sm mb-3">翻转卡片学汉字</p>
            <button class="text-module-cards font-bold text-sm flex items-center gap-1">
              开始学习 <span class="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
          
          <div class="flex gap-1 mt-3">
            <div v-for="i in 5" :key="i" class="h-1 rounded-full flex-1" :class="i <= 3 ? 'bg-module-cards' : 'bg-gray-100'"></div>
          </div>
        </div>

        <!-- Game -->
        <div @click="goToLevels" class="card p-5 cursor-pointer relative overflow-hidden group">
          <div class="absolute top-0 right-0 w-24 h-24 bg-module-game-light rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div class="absolute top-3 right-3 bg-module-game-light text-module-game-dark text-xs font-bold px-2.5 py-1 rounded-full">
            4-8岁
          </div>
          
          <div class="relative">
            <div class="w-16 h-16 rounded-xl bg-gradient-to-br from-module-game to-module-game-dark flex items-center justify-center text-3xl shadow-lg mb-3 group-hover:scale-110 transition-transform">
              🎮
            </div>
            <h3 class="font-bold text-gray-800 mb-1">游戏闯关</h3>
            <p class="text-gray-500 text-sm mb-3">边玩边学更开心</p>
            <button class="text-module-game font-bold text-sm flex items-center gap-1">
              开始挑战 <span class="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
          
          <div class="flex gap-1 mt-3">
            <div v-for="i in 5" :key="i" class="h-1 rounded-full flex-1" :class="i <= 2 ? 'bg-module-game' : 'bg-gray-100'"></div>
          </div>
        </div>

        <!-- Story -->
        <div @click="goToStorybook" class="card p-5 cursor-pointer relative overflow-hidden group">
          <div class="absolute top-0 right-0 w-24 h-24 bg-module-story-light rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div class="absolute top-3 right-3 bg-module-story-light text-module-story-dark text-xs font-bold px-2.5 py-1 rounded-full">
            5-8岁
          </div>
          
          <div class="relative">
            <div class="w-16 h-16 rounded-xl bg-gradient-to-br from-module-story to-module-story-dark flex items-center justify-center text-3xl shadow-lg mb-3 group-hover:scale-110 transition-transform">
              📖
            </div>
            <h3 class="font-bold text-gray-800 mb-1">互动绘本</h3>
            <p class="text-gray-500 text-sm mb-3">在故事中学习</p>
            <button class="text-module-story font-bold text-sm flex items-center gap-1">
              开始阅读 <span class="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
          
          <div class="flex gap-1 mt-3">
            <div v-for="i in 5" :key="i" class="h-1 rounded-full flex-1 bg-gray-100"></div>
          </div>
        </div>

        <!-- Report -->
        <div @click="goToDashboard" class="card p-5 cursor-pointer relative overflow-hidden group">
          <div class="absolute top-0 right-0 w-24 h-24 bg-module-report-light rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div class="absolute top-3 right-3 bg-module-report-light text-module-report-dark text-xs font-bold px-2.5 py-1 rounded-full">
            全部
          </div>
          
          <div class="relative">
            <div class="w-16 h-16 rounded-xl bg-gradient-to-br from-module-report to-module-report-dark flex items-center justify-center text-3xl shadow-lg mb-3 group-hover:scale-110 transition-transform">
              📊
            </div>
            <h3 class="font-bold text-gray-800 mb-1">学习报告</h3>
            <p class="text-gray-500 text-sm mb-3">查看学习进度</p>
            <button class="text-module-report font-bold text-sm flex items-center gap-1">
              查看报告 <span class="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
          
          <div class="flex gap-1 mt-3">
            <div v-for="i in 5" :key="i" class="h-1 rounded-full flex-1" :class="i <= 4 ? 'bg-module-report' : 'bg-gray-100'"></div>
          </div>
        </div>
      </div>

      <!-- Stats -->
      <div class="card mt-5 p-5 max-w-3xl mx-auto">
        <h3 class="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span class="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-white text-sm">🏆</span>
          学习成就
        </h3>
        
        <div class="grid grid-cols-3 gap-4">
          <div class="text-center p-4 bg-brand-50 rounded-xl">
            <div class="text-2xl font-black text-brand-600">{{ progress.studyDays }}</div>
            <div class="text-xs text-gray-500">学习天数</div>
          </div>
          <div class="text-center p-4 bg-module-game-light rounded-xl">
            <div class="text-2xl font-black text-module-game">{{ Math.floor(progress.totalStudyTime / 60) }}</div>
            <div class="text-xs text-gray-500">学习时长</div>
          </div>
          <div class="text-center p-4 bg-module-cards-light rounded-xl">
            <div class="text-2xl font-black text-module-cards">{{ progress.totalStars }}</div>
            <div class="text-xs text-gray-500">获得星星</div>
          </div>
        </div>
      </div>
    </main>

    <!-- Bottom nav -->
    <nav class="bottom-nav">
      <div class="flex justify-around">
        <router-link to="/" class="nav-item" :class="{ 'active': $route.path === '/' }">
          <span class="text-xl">🏠</span>
          <span class="text-xs font-bold">首页</span>
        </router-link>
        
        <router-link to="/levels" class="nav-item" :class="{ 'active': $route.path === '/levels' }">
          <span class="text-xl">🎮</span>
          <span class="text-xs font-bold">闯关</span>
        </router-link>
        
        <router-link to="/cards" class="nav-item" :class="{ 'active': $route.path === '/cards' }">
          <span class="text-xl">📇</span>
          <span class="text-xs font-bold">卡片</span>
        </router-link>
        
        <router-link to="/dashboard" class="nav-item" :class="{ 'active': $route.path === '/dashboard' }">
          <span class="text-xl">📊</span>
          <span class="text-xs font-bold">报告</span>
        </router-link>
      </div>
    </nav>

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

const router = useRouter()
const progress = useProgressStore()

const goToCards = () => router.push('/cards')
const goToLevels = () => router.push('/levels')
const goToStorybook = () => router.push('/storybook')
const goToDashboard = () => router.push('/dashboard')
</script>
