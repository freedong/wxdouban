
const app = getApp()

// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    subtitle: '加载中...',
    type: 'in_theaters',
    hasMore: true,
    page: 1,
    size: 20,
    movies: []
  },


  // 加载更多函数
  loadMore(){
    // 如果有数据则返回空
    if(!this.data.hasMore) return 

    // 弹框加载中
    wx.showLoading({
      title: '拼命加载中~~',
    })

    this.setData({ subtitle:'加载中...'})

    return app.douban.find(this.data.type,this.data.page++,this.data.size).then(d => {
      console.log(d)
      if(d.subjects.length){
        this.setData({ subtitle: d.title, movies: this.data.movies.concat(d.subjects)})
      }else{
        this.setData({ subtitle: d.title, hasMore:false})
      }
      wx.hideLoading()
    }).catch(e => {
      this.setData({ subtitle:'获取数据异常'})
      console.error(e)
      wx.hideLoading()
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    // 根据链接传递的参数  得到type和title
    this.data.title = options.title || this.data.title
    // 类型 in_theaters  coming_soon  new_movies top250
    this.data.type = options.type || this.data.type
    // 加载更多
    this.loadMore()
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