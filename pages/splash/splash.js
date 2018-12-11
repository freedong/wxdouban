
const app = getApp()

// pages/splash/splash.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies:[],
    loading:true
  },

  // 自定义函数
  getCache(){
    return new Promise(resolve => {
      app.wechat.getStorage('last_splash_data').then(res => {
        console.log(res)
        const { movies, expires } = res.data
        // 有缓存，判断是否过期
        if(movies && expires > Date.now()){
          return resolve(res.data)
        }
        // 已经过期
        console.log("uncached缓存过期")
        return resolve(null)
      }).catch(e => resolve(null))
    })  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCache.then(cache => {
      if(cache){
        return this.setData({movies:cache.movies,loading:false})
      }
      app.douban.find()
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