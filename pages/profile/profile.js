
const app = getApp()

// pages/profile/profile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: 'About me',
    userInfo: {
      wechat: 'WEDN-NET',
      nickName: 'https://github.com/zce/weapp-douban',
      avatarUrl: '../../images/qrcode.png'
    }
  },


  // 获取用户函数
  getUserInfo () {
    app.wechat.getUserInfo().then(res => {
      console.log(res)
      this.setData({
        userInfo: res.userInfo
      })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.wechat.login().then(res => {
      console.log(res)
      if(res.code){
        // this.getUserInfo()
        console.log('登录成功！' + res.code)
      }else{
        console.error('获取用户登录态失败！' + res.errMsg)
      }
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