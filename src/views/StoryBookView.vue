<template>
  <div class="storybook">
    <div class="top-bar">
      <button @click="goBack" class="back-btn">← 返回</button>
      <h2>互动绘本</h2>
      <div class="spacer"></div>
    </div>

    <div class="coming-soon">
      <div class="illustration">📖</div>
      <h3>互动绘本</h3>
      <p>这个功能正在开发中...</p>
      <p>即将推出精彩的互动绘本故事！</p>
      <button @click="goBack" class="back-home-btn">
        返回首页
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goBack() {
  router.push('/')
}
</script>

<style scoped>
.storybook {
  min-height: 100vh;
  padding: 20px;
}

.top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
}

.back-btn {
  padding: 8px 16px;
  border: none;
  background: #e2e8f0;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
}

.spacer {
  width: 70px;
}

.coming-soon {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  text-align: center;
  padding: 40px 20px;
}

.illustration {
  font-size: 100px;
  margin-bottom: 20px;
}

.coming-soon h3 {
  font-size: 28px;
  color: #2d3748;
  margin-bottom: 15px;
}

.coming-soon p {
  font-size: 16px;
  color: #718096;
  margin-bottom: 10px;
}

.back-home-btn {
  margin-top: 30px;
  padding: 12px 32px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  background: #4caf50;
  color: white;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s;
}

.back-home-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(76, 175, 80, 0.4);
}
</style>
