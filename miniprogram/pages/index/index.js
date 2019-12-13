//index.js
const app = getApp()

const CHORDS = require('../../lib/chords.js')

function playNote(note) {
  const innerAudioContext = wx.createInnerAudioContext()
  innerAudioContext.src = `audio/piano/${note}.mp3`

  innerAudioContext.play()
}

Page({
  data: {
    currentKeys: ['c', 'cm', 'c7', 'cmaj7'],
    currentChordIndex: null,
    tempo: 70,
    isPlaying: false
  },
  onLoad: function () {
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              this.setData({
                avatarUrl: res.userInfo.avatarUrl,
                userInfo: res.userInfo
              })
            }
          })
        }
      }
    })
  },
  onKeyPress: function (e) {
    const key = e.currentTarget.id
    playNote(key)
  },
  onTempoChange: function (e) {
    this.setData({
      tempo: e.detail.value
    })
  },
  onPlay: function () {
    const {
      currentKeys
    } = this.data

    for (let index in currentKeys) {
      setTimeout(() => {
        const {
          chord: notes
        } = CHORDS.find(c => c.id === currentKeys[index])

        notes.forEach(note => {
          playNote(note)
        })
      }, 1000 * index)
    }
  }
})
