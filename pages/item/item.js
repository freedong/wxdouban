
const app = getApp()

// pages/item/item.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'',
    movie:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)

    wx.showLoading({
      title: '拼命加载中...',
    })

    app.douban.findOne(options.id).then( d => {
      console.log(d)
      this.setData({ title: d.title, movie: d })
      wx.setNavigationBarTitle({
        title: this.data.title,
      }) 
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#d83352',
        animation: {
          duration: 400,
          timingFunc: 'easeIn'
        }
      })
      wx.hideLoading()
    }).catch( e => {
      this.setData({ title:'获取数据异常',movie:{} })
      console.error(e)
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
    return {
      title:this.data.title,
      desc:this.data.title,
      path:'/pages/item?id='+this.data.id
    }
  }
})