<template>
  <div class="home">
    <!-- 头部 -->
    <header class="header">
      <div class="logo">
        <span class="logo-emoji">📚</span>
        <h1>AI识字宝</h1>
      </div>
      <div class="header-stats">
        <div class="stat-item">
          <span class="icon">⭐</span>
          <span class="value">{{ progress.totalStars }}</span>
        </div>
        <div class="stat-item">
          <span class="icon">📖</span>
          <span class="value">{{ progress.totalLearnedCount }}</span>
        </div>
      </div>
    </header>

    <!-- 主菜单 -->
    <main class="main-content">
      <section class="welcome-section">
        <h2>欢迎来到识字宝！</h2>
        <p>选择你想玩的学习模式吧～</p>
      </section>

      <section class="menu-grid">
        <div @click="goToCards" class="menu-card cards">
          <div class="card-icon">📇</div>
          <h3>识字卡片</h3>
          <p>翻转卡片学习汉字</p>
        </div>

        <div @click="goToLevels" class="menu-card game">
          <div class="card-icon">🎮</div>
          <h3>游戏闯关</h3>
          <p>边玩边学更开心</p>
        </div>

        <div @click="goToStorybook" class="menu-card story">
          <div class="card-icon">📖</div>
          <h3>互动绘本</h3>
          <p>在故事中学习</p>
        </div>

        <div @click="goToDashboard" class="menu-card dashboard">
          <div class="card-icon">📊</div>
          <h3>学习报告</h3>
          <p>查看学习进度</p>
        </div>
      </section>

      <!-- 快速统计 -->
      <section class="quick-stats">
        <div class="stat-card">
          <div class="stat-label">学习天数</div>
          <div class="stat-number">{{ progress.studyDays }}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">学习时长</div>
          <div class="stat-number">{{ Math.floor(progress.totalStudyTime / 60) }}h</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">当前星级</div>
          <div class="stat-number">{{ progress.totalStars }}⭐</div>
        </div>
      </section>
    </main>

    <!-- 底部导航 -->
    <nav class="bottom-nav">
      <router-link to="/" class="nav-item active">
        <span class="nav-icon">🏠</span>
        <span class="nav-label">首页</span>
      </router-link>
      <router-link to="/levels" class="nav-item">
        <span class="nav-icon">🎮</span>
        <span class="nav-label">闯关</span>
      </router-link>
      <router-link to="/cards" class="nav-item">
        <span class="nav-icon">📇</span>
        <span class="nav-label">卡片</span>
      </router-link>
      <router-link to="/dashboard" class="nav-item">
        <span class="nav-icon">📊</span>
        <span class="nav-label">报告</span>
      </router-link>
    </nav>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useProgressStore } from '@/stores/progress'

const router = useRouter()
const progress = useProgressStore()

function goToCards() {
  router.push('/cards')
}

function goToLevels() {
  router.push('/levels')
}

function goToStorybook() {
  router.push('/storybook')
}

function goToDashboard() {
  router.push('/dashboard')
}
</script>

<style scoped>
.home {
  min-height: 100vh;
  padding-bottom: 80px;
  font-family: 'Comic Sans MS', 'Chalkboard SE', cursive;
}

.header {
  background: linear-gradient(135deg, #FFD93D 0%, #FF9F43 100%);
  color: #8B5A2B;
  padding: 20px;
  border-radius: 0 0 30px 30px;
  box-shadow: 0 6px 0px 0px rgba(139, 90, 43, 0.2);
  border-bottom: 4px solid #8B5A2B;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 15px;
}

.logo-emoji {
  font-size: 42px;
  filter: drop-shadow(2px 2px 0px rgba(139, 90, 43, 0.3));
}

.logo h1 {
  font-size: 32px;
  margin: 0;
  font-weight: 900;
  text-shadow: 2px 2px 0px rgba(139, 90, 43, 0.2);
}

.header-stats {
  display: flex;
  gap: 20px;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 6px;
  background: rgba(255, 255, 255, 0.2);
  padding: 8px 16px;
  border-radius: 20px;
}

.stat-item .icon {
  font-size: 20px;
}

.stat-item .value {
  font-size: 18px;
  font-weight: bold;
}

.main-content {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.welcome-section {
  text-align: center;
  margin-bottom: 30px;
}

.welcome-section h2 {
  font-size: 24px;
  color: #2d3748;
  margin-bottom: 8px;
}

.welcome-section p {
  font-size: 16px;
  color: #718096;
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin-bottom: 30px;
}

.menu-card {
  background: white;
  padding: 24px;
  border-radius: 25px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 6px 6px 0px 0px rgba(139, 90, 43, 0.2);
  border: 4px solid #8B5A2B;
  font-family: 'Comic Sans MS', 'Chalkboard SE', cursive;
}

.menu-card:hover {
  transform: translateY(-6px) rotate(-2deg);
  box-shadow: 8px 8px 0px 0px rgba(139, 90, 43, 0.3);
}

.card-icon {
  font-size: 52px;
  margin-bottom: 12px;
  filter: drop-shadow(2px 2px 0px rgba(139, 90, 43, 0.2));
}

.menu-card h3 {
  font-size: 20px;
  color: #8B5A2B;
  margin-bottom: 6px;
  font-weight: 900;
}

.menu-card p {
  font-size: 14px;
  color: #8B5A2B;
  font-weight: 600;
}

.menu-card.cards {
  background: linear-gradient(135deg, #FFD93D 0%, #FFE5A0 100%);
}

.menu-card.game {
  background: linear-gradient(135deg, #FF6B6B 0%, #FF8FAB 100%);
  color: white;
}

.menu-card.game h3,
.menu-card.game p {
  color: white;
  text-shadow: 2px 2px 0px rgba(139, 90, 43, 0.3);
}

.menu-card.story {
  background: linear-gradient(135deg, #4ECDC4 0%, #A8E6CF 100%);
}

.menu-card.story h3,
.menu-card.story p {
  color: #fff;
  text-shadow: 2px 2px 0px rgba(139, 90, 43, 0.2);
}

.menu-card.dashboard {
  background: linear-gradient(135deg, #FF9F43 0%, #FFD93D 100%);
}

.menu-card.dashboard h3,
.menu-card.dashboard p {
  color: #8B5A2B;
}

.quick-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.stat-card {
  background: white;
  padding: 16px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 4px 4px 0px 0px rgba(139, 90, 43, 0.2);
  border: 3px solid #8B5A2B;
}

.stat-label {
  font-size: 12px;
  color: #8B5A2B;
  margin-bottom: 6px;
  font-weight: 600;
}

.stat-number {
  font-size: 20px;
  font-weight: 900;
  color: #FF6B6B;
}

.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(180deg, #FFD93D 0%, #FF9F43 100%);
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  box-shadow: 0 -4px 0px 0px rgba(139, 90, 43, 0.2);
  border-top: 4px solid #8B5A2B;
  z-index: 100;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #8B5A2B;
  transition: all 0.3s;
  padding: 8px 16px;
  border-radius: 15px;
  font-weight: 600;
}

.nav-item.active {
  background: rgba(255, 255, 255, 0.5);
  color: #FF6B6B;
}

.nav-icon {
  font-size: 24px;
  margin-bottom: 4px;
  filter: drop-shadow(1px 1px 0px rgba(139, 90, 43, 0.2));
}

.nav-label {
  font-size: 12px;
  font-weight: 700;
}

@media (max-width: 640px) {
  .menu-grid {
    grid-template-columns: 1fr;
  }
}
</style>
