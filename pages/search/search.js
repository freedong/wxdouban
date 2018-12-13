
const app = getApp()

// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page: 1,
    size: 20,
    subtitle: '请在此输入搜索内容',
    movies: [],
    search: '',
    loading: false,
    hasMore: false
  },


  // 搜索加载更多


  loadMore(){

    this.setData({ subtitle: '加载中...', loading:true })   

    return app.douban.find('search',this.data.page++,this.data.size,this.data.search).then( d => {
      if(d.subjects.length){
        this.setData({ subtitle: d.title, movies: this.data.movies.concat(d.subjects), loading: false})
      }else{
        this.setData({ hasMore: false, loading: false })
      }
    }).catch(e => {
      this.setData({ subtitle: '获取数据异常', loading: false })
      console.error(e)
    }) 
  },


  // 搜索函数

  handleSearch (e) {

    console.log(e.detail.value)
    if(!e.detail.value) return

    this.setData({ movies:[],page:1 })
    this.setData({ subtitle: '加载中...', hasMore: true, loading: true, search: e.detail.value })
    this.loadMore()
  },





  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '搜索电影',
    })
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#d83352',
      animation: {
        duration: 400,
        timingFunc: 'easeIn'
      }
    })
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
    this.loadMore()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})