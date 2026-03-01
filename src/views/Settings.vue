<template>
  <div class="settings">
    <div class="top-bar">
      <button @click="goBack" class="back-btn">← 返回</button>
      <h2>设置</h2>
      <div class="spacer"></div>
    </div>

    <div class="settings-sections">
      <!-- 声音设置 -->
      <div class="setting-section">
        <h3>🔊 声音设置</h3>

        <div class="setting-item">
          <label>启用音效</label>
          <button
            @click="settings.setSoundEnabled(!settings.soundEnabled)"
            class="toggle-btn"
            :class="{ active: settings.soundEnabled }"
          >
            {{ settings.soundEnabled ? 'ON' : 'OFF' }}
          </button>
        </div>

        <div class="setting-item">
          <label>启用语音</label>
          <button
            @click="settings.setVoiceEnabled(!settings.voiceEnabled)"
            class="toggle-btn"
            :class="{ active: settings.voiceEnabled }"
          >
            {{ settings.voiceEnabled ? 'ON' : 'OFF' }}
          </button>
        </div>

        <div class="setting-item">
          <label>语音速度</label>
          <div class="slider-container">
            <input
              type="range"
              min="0.5"
              max="2"
              step="0.1"
              :value="settings.voiceSpeed"
              @input="settings.setVoiceSpeed(parseFloat($event.target.value))"
              class="slider"
            />
            <span class="slider-value">{{ settings.voiceSpeed }}x</span>
          </div>
        </div>
      </div>

      <!-- AI 设置 -->
      <div class="setting-section">
        <h3>🤖 AI 设置</h3>

        <div class="setting-item">
          <label>OpenAI API Key (可选)</label>
          <input
            type="password"
            :value="settings.aiApiKey"
            @input="settings.setAiApiKey($event.target.value)"
            placeholder="sk-..."
            class="text-input"
          />
        </div>

        <p class="hint">
          启用 AI 功能可以获得更准确的语音识别和智能对话功能
        </p>
      </div>

      <!-- 家长设置 -->
      <div class="setting-section">
        <h3>👨‍👩‍👧 家长设置</h3>

        <div class="setting-item">
          <label>每日学习限制 (分钟)</label>
          <input
            type="number"
            :value="settings.dailyTimeLimit"
            @input="settings.setDailyTimeLimit(parseInt($event.target.value))"
            min="5"
            max="120"
            class="number-input"
          />
        </div>
      </div>

      <!-- 数据管理 -->
      <div class="setting-section danger">
        <h3>⚠️ 数据管理</h3>

        <button @click="confirmReset" class="reset-btn">
          重置所有进度
        </button>
      </div>
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

function confirmReset() {
  if (confirm('确定要重置所有学习进度吗？此操作无法撤销！')) {
    progress.resetProgress()
    settings.resetSettings()
    alert('已重置所有数据')
    router.push('/')
  }
}

function goBack() {
  router.push('/')
}
</script>

<style scoped>
.settings {
  min-height: 100vh;
  padding: 20px;
  padding-bottom: 80px;
}

.top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
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

.settings-sections {
  max-width: 600px;
}

.setting-section {
  background: white;
  padding: 20px;
  border-radius: 16px;
  margin-bottom: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
}

h3 {
  font-size: 18px;
  color: #2d3748;
  margin-bottom: 15px;
}

.setting-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #e2e8f0;
}

.setting-item:last-child {
  border-bottom: none;
}

.setting-item label {
  font-size: 15px;
  color: #4a5568;
}

.toggle-btn {
  padding: 8px 20px;
  border: 2px solid #cbd5e0;
  background: white;
  border-radius: 20px;
  font-size: 14px;
  font-weight: bold;
  color: #718096;
  cursor: pointer;
  transition: all 0.3s;
}

.toggle-btn.active {
  background: #4caf50;
  border-color: #4caf50;
  color: white;
}

.slider-container {
  display: flex;
  align-items: center;
  gap: 10px;
}

.slider {
  width: 120px;
  accent-color: #4caf50;
}

.slider-value {
  font-size: 14px;
  font-weight: bold;
  color: #4caf50;
  min-width: 40px;
}

.text-input,
.number-input {
  padding: 8px 12px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 14px;
  width: 200px;
}

.text-input:focus,
.number-input:focus {
  outline: none;
  border-color: #4caf50;
}

.hint {
  font-size: 13px;
  color: #718096;
  margin-top: 10px;
  line-height: 1.5;
}

.setting-section.danger h3 {
  color: #e53e3e;
}

.reset-btn {
  width: 100%;
  padding: 12px;
  border: 2px solid #fc8181;
  background: white;
  color: #e53e3e;
  border-radius: 10px;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
}

.reset-btn:hover {
  background: #fff5f5;
}
</style>
