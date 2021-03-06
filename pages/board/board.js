
const app = getApp()

// pages/board/board.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    boards:[
      { key: 'in_theaters' },
      { key: 'coming_soon' },
      { key: 'new_movies' },
      { key: 'top250' }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //  数据加载中的弹框
    wx.showLoading({
      title: '拼命加载中...',
    })

    // 循环得到每个键值下的数据
    const tasks = this.data.boards.map(board => {
      return app.douban.find(board.key,1,8).then(d => {
        // 赋值
        board.title = d.title
        board.movies = d.subjects
        return board
      })
    })


    // 给data赋值
    Promise.all(tasks).then(boards => {
      console.log(boards)
      // 赋值
      this.setData({boards:boards,loading:false})
      // 加载弹框隐藏
      wx.hideLoading()
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