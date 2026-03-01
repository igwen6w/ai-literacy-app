// 音效管理器
class SoundManager {
  constructor() {
    this.sounds = {}
    this.enabled = true
    this.volume = 0.7
  }

  // 初始化音效（使用 Web Audio API 生成简单的音效）
  init() {
    // 翻转卡片音效
    this.sounds.flip = this.createTone(440, 0.1, 'sine')

    // 正确答案音效
    this.sounds.correct = this.createTone(523, 0.15, 'sine', [
      { freq: 523, time: 0 },
      { freq: 659, time: 0.1 },
      { freq: 784, time: 0.2 }
    ])

    // 错误答案音效
    this.sounds.wrong = this.createTone(200, 0.2, 'sawtooth')

    // 点击音效
    this.sounds.click = this.createTone(600, 0.05, 'sine')

    // 星星获得音效
    this.sounds.star = this.createTone(523, 0.3, 'sine', [
      { freq: 523, time: 0 },
      { freq: 659, time: 0.1 },
      { freq: 784, time: 0.2 },
      { freq: 1047, time: 0.3 }
    ])

    // 完成关卡音效
    this.sounds.complete = this.createTone(523, 0.5, 'sine', [
      { freq: 523, time: 0 },
      { freq: 659, time: 0.15 },
      { freq: 784, time: 0.3 },
      { freq: 1047, time: 0.45 }
    ])
  }

  // 创建音调
  createTone(frequency, duration, type = 'sine', notes = null) {
    return { frequency, duration, type, notes }
  }

  // 播放音效
  play(soundName) {
    if (!this.enabled || !this.sounds[soundName]) return

    const sound = this.sounds[soundName]
    const audioContext = new (window.AudioContext || window.webkitAudioContext)()

    if (sound.notes) {
      // 播放音符序列
      sound.notes.forEach((note, index) => {
        setTimeout(() => {
          this.playNote(audioContext, note.freq, 0.1, sound.type)
        }, note.time * 1000)
      })
    } else {
      // 播放单个音符
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

      gainNode.gain.setValueAtTime(this.volume, audioContext.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration)

      oscillator.start(audioContext.currentTime)
      oscillator.stop(audioContext.currentTime + duration)
    } catch (e) {
      console.warn('Audio play failed:', e)
    }
  }

  // 播放中文朗读（使用 Web Speech API）
  speak(text, rate = 1.0) {
    if (!this.enabled || !('speechSynthesis' in window)) return

    // 取消之前的朗读
    window.speechSynthesis.cancel()

    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = 'zh-CN'
    utterance.rate = rate
    utterance.pitch = 1.0

    window.speechSynthesis.speak(utterance)
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

export function speak(text, rate = 1.0) {
  soundManager.speak(text, rate)
}

export function setSoundEnabled(enabled) {
  soundManager.setEnabled(enabled)
}

export function setSoundVolume(volume) {
  soundManager.setVolume(volume)
}
