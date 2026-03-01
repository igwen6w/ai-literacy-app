import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import { setSoundEnabled as setAudioEnabled, setSoundVolume } from '@/utils/audio'

export const useSettingsStore = defineStore('settings', () => {
  // 音效设置
  const soundEnabled = ref(true)
  const musicVolume = ref(0.5)
  const sfxVolume = ref(0.7)

  // 语音设置
  const voiceEnabled = ref(true)
  const voiceSpeed = ref(1.0)

  // AI 设置
  const aiApiKey = ref('')
  const aiEnabled = ref(false) // 需要API密钥才启用

  // 家长设置
  const parentPin = ref('') // 默认无密码
  const dailyTimeLimit = ref(30) // 每天学习时间限制（分钟）
  const studyReminder = ref(true) // 学习提醒

  // 界面设置
  const theme = ref('light') // light | dark
  const autoPlayNext = ref(true) // 自动播放下一关

  // 方法
  function setSoundEnabled(enabled) {
    soundEnabled.value = enabled
    setAudioEnabled(enabled)
    saveSettings()
  }

  function setMusicVolume(volume) {
    musicVolume.value = volume
    saveSettings()
  }

  function setSfxVolume(volume) {
    sfxVolume.value = volume
    setSoundVolume(volume)
    saveSettings()
  }

  function setVoiceEnabled(enabled) {
    voiceEnabled.value = enabled
    saveSettings()
  }

  function setVoiceSpeed(speed) {
    voiceSpeed.value = speed
    saveSettings()
  }

  function setAiApiKey(key) {
    aiApiKey.value = key
    aiEnabled.value = !!key
    saveSettings()
  }

  function setParentPin(pin) {
    parentPin.value = pin
    saveSettings()
  }

  function verifyPin(pin) {
    return parentPin.value === pin
  }

  function setDailyTimeLimit(minutes) {
    dailyTimeLimit.value = minutes
    saveSettings()
  }

  function setTheme(newTheme) {
    theme.value = newTheme
    saveSettings()
  }

  function setAutoPlayNext(enabled) {
    autoPlayNext.value = enabled
    saveSettings()
  }

  // 本地存储
  function saveSettings() {
    const data = {
      soundEnabled: soundEnabled.value,
      musicVolume: musicVolume.value,
      sfxVolume: sfxVolume.value,
      voiceEnabled: voiceEnabled.value,
      voiceSpeed: voiceSpeed.value,
      aiApiKey: aiApiKey.value,
      parentPin: parentPin.value,
      dailyTimeLimit: dailyTimeLimit.value,
      studyReminder: studyReminder.value,
      theme: theme.value,
      autoPlayNext: autoPlayNext.value
    }
    localStorage.setItem('literacy-settings', JSON.stringify(data))
  }

  function loadSettings() {
    const saved = localStorage.getItem('literacy-settings')
    if (saved) {
      try {
        const data = JSON.parse(saved)
        soundEnabled.value = data.soundEnabled ?? true
        musicVolume.value = data.musicVolume ?? 0.5
        sfxVolume.value = data.sfxVolume ?? 0.7
        voiceEnabled.value = data.voiceEnabled ?? true
        voiceSpeed.value = data.voiceSpeed ?? 1.0
        aiApiKey.value = data.aiApiKey || ''
        aiEnabled.value = !!data.aiApiKey
        parentPin.value = data.parentPin || ''
        dailyTimeLimit.value = data.dailyTimeLimit ?? 30
        studyReminder.value = data.studyReminder ?? true
        theme.value = data.theme || 'light'
        autoPlayNext.value = data.autoPlayNext ?? true
      } catch (e) {
        console.error('Failed to load settings:', e)
      }
    }
  }

  function resetSettings() {
    soundEnabled.value = true
    musicVolume.value = 0.5
    sfxVolume.value = 0.7
    voiceEnabled.value = true
    voiceSpeed.value = 1.0
    aiApiKey.value = ''
    aiEnabled.value = false
    parentPin.value = ''
    dailyTimeLimit.value = 30
    studyReminder.value = true
    theme.value = 'light'
    autoPlayNext.value = true
    localStorage.removeItem('literacy-settings')
  }

  // 初始化时加载
  loadSettings()

  return {
    // 状态
    soundEnabled,
    musicVolume,
    sfxVolume,
    voiceEnabled,
    voiceSpeed,
    aiApiKey,
    aiEnabled,
    parentPin,
    dailyTimeLimit,
    studyReminder,
    theme,
    autoPlayNext,
    // 方法
    setSoundEnabled,
    setMusicVolume,
    setSfxVolume,
    setVoiceEnabled,
    setVoiceSpeed,
    setAiApiKey,
    setParentPin,
    verifyPin,
    setDailyTimeLimit,
    setTheme,
    setAutoPlayNext,
    saveSettings,
    loadSettings,
    resetSettings
  }
})
