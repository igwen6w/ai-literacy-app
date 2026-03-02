// 音效管理器
class SoundManager {
  constructor() {
    this.sounds = {}
    this.enabled = true
    this.volume = 0.7
  }

  init() {
    this.sounds.flip = this.createTone(440, 0.1, 'sine')
    this.sounds.correct = this.createTone(523, 0.15, 'sine', [
      { freq: 523, time: 0 },
      { freq: 659, time: 0.1 },
      { freq: 784, time: 0.2 }
    ])
    this.sounds.wrong = this.createTone(200, 0.2, 'sawtooth')
    this.sounds.click = this.createTone(600, 0.05, 'sine')
    this.sounds.star = this.createTone(523, 0.3, 'sine', [
      { freq: 523, time: 0 },
      { freq: 659, time: 0.1 },
      { freq: 784, time: 0.2 },
      { freq: 1047, time: 0.3 }
    ])
    this.sounds.complete = this.createTone(523, 0.5, 'sine', [
      { freq: 523, time: 0 },
      { freq: 659, time: 0.15 },
      { freq: 784, time: 0.3 },
      { freq: 1047, time: 0.45 }
    ])
  }

  createTone(frequency, duration, type = 'sine', notes = null) {
    return { frequency, duration, type, notes }
  }

  play(soundName) {
    if (!this.enabled || !this.sounds[soundName]) return

    const sound = this.sounds[soundName]
    const audioContext = new (window.AudioContext || window.webkitAudioContext)()

    if (sound.notes) {
      sound.notes.forEach((note) => {
        setTimeout(() => {
          this.playNote(audioContext, note.freq, 0.1, sound.type)
        }, note.time * 1000)
      })
    } else {
      this.playNote(audioContext, sound.frequency, sound.duration, sound.type)
    }
  }

  playNote(audioContext, frequency, duration, type) {
    try {
      const oscillator = audioContext.createOscillator()
      const gainNode = audioContext.createGain()

      oscillator.connect(gainNode)
      gainNode.connect(audioContext.destination)

      oscillator.type = type
      oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime)

      gainNode.gain.setValueAtTime(this.volume * 0.3, audioContext.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration)

      oscillator.start(audioContext.currentTime)
      oscillator.stop(audioContext.currentTime + duration)
    } catch (e) {
      console.warn('Audio play failed:', e)
    }
  }

  setEnabled(enabled) {
    this.enabled = enabled
  }

  setVolume(volume) {
    this.volume = volume
  }
}

// 导出单例
export const soundManager = new SoundManager()
soundManager.init()

// 便捷函数
export function playSound(soundName) {
  soundManager.play(soundName)
}

export function setSoundEnabled(enabled) {
  soundManager.setEnabled(enabled)
}

export function setSoundVolume(volume) {
  soundManager.setVolume(volume)
}

// ============ 语音朗读 ============
let voices = []
let voicesLoaded = false
let currentUtterance = null

// 加载语音列表
function loadVoices() {
  if (!window.speechSynthesis) return

  voices = window.speechSynthesis.getVoices()
  console.log('Available voices:', voices.length)

  // 打印所有可用语音
  voices.forEach(v => console.log('Voice:', v.name, v.lang))

  voicesLoaded = true
}

// 强制加载语音
function getBestVoice() {
  if (voices.length === 0) {
    try { loadVoices() } catch(e) {}
  }

  // 优先找中文语音
  const zhVoice = voices.find(v =>
    v.lang.includes('zh-CN') ||
    v.lang.includes('zh_CN') ||
    v.lang.includes('cmn')
  )
  if (zhVoice) return zhVoice

  // 其次找任何中文
  const anyZh = voices.find(v => v.lang.includes('zh'))
  if (anyZh) return anyZh

  // 找中文相关的
  const chineseLike = voices.find(v =>
    v.name.toLowerCase().includes('chinese') ||
    v.name.toLowerCase().includes('mandarin')
  )
  if (chineseLike) return chineseLike

  // 都没有就返回第一个
  return voices[0] || null
}

// 立即加载
try {
  loadVoices()
} catch(e) {
  console.warn('Initial voice load failed:', e)
}

// 异步加载（某些浏览器需要）
if (window.speechSynthesis && window.speechSynthesis.onvoiceschanged !== undefined) {
  window.speechSynthesis.onvoiceschanged = loadVoices
}

// 当前正在播放的文本
let speakingText = null

export function speak(text, rate = 1.0) {
  console.log('speak() called:', text)

  if (!window.speechSynthesis) {
    console.error('speechSynthesis not available')
    return
  }

  // 直接播放，不 cancel 避免冲突
  doSpeak(text, rate)
}

function doSpeak(text, rate) {
  console.log('Creating utterance for:', text)

  // 尝试使用简单的语音合成
  try {
    // 创建 utterance
    const utterance = new window.SpeechSynthesisUtterance(text)

    // 设置中文
    utterance.lang = 'zh-CN'
    utterance.rate = rate || 1.0
    utterance.pitch = 1.0

    // 尝试设置语音
    const voice = window.speechSynthesis.getVoices().find(v =>
      v.lang.includes('zh') || v.lang.includes('CN')
    )
    if (voice) {
      utterance.voice = voice
    }

    // 直接播放
    window.speechSynthesis.speak(utterance)
    console.log('语音已播放:', text)
  } catch (e) {
    console.error('语音播放失败:', e)
  }
}

// 检查语音支持
export function checkSpeechSupport() {
  const support = {
    speechSynthesis: !!window.speechSynthesis,
    voices: voices.length,
    chineseVoices: voices.filter(v => v.lang.includes('zh')).length
  }
  console.log('Speech support:', support)
  return support
}
