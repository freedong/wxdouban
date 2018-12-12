
const app = getApp()

// pages/splash/splash.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies: [],
    loading: true
  },


  // 立即体验按钮  点击进入榜单页
  handleStart() {
    wx.switchTab({
      url: '../board/board',
    })
  },

  // 自定义函数

  getCache() {
    return new Promise(resolve => {
      app.wechat.getStorage('last_splash_data')
        .then(res => {
          const { movies, expires } = res.data
          // 有缓存，判断是否过期
          if (movies && expires > Date.now()) {
            return resolve(res.data)
          }
          // 已经过期
          console.log('uncached')
          return resolve(null)
        })
        .catch(e => resolve(null))
    })
  },

 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.getCache()
      .then(cache => {
        console.log(cache)
        if (cache) {
          return this.setData({ movies: cache.movies, loading: false })
        }

        app.douban.find('coming_soon', 1, 3)
          .then(d => {
            this.setData({ movies: d.subjects, loading: false })
            return app.wechat.setStorage('last_splash_data', {
              movies: d.subjects,
              expires: Date.now() + 1 * 24 * 60 * 60 * 1000
            })
          })
          .then(() => console.log('storage last splash data'))
      })
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})