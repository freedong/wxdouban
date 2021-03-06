

// 登录
function login() {
  return new Promise((resolve, reject) => {
    wx.login({ success: resolve, fail: reject })
  })
}
// 获取用户
function getUserInfo () {
  return new Promise((resolve, reject) => {
    wx.getUserInfo({
      success: resolve,
      fail: reject
    })
  })
}

// 得到存储
function getStorage(key){
  return new Promise((resolve, reject) => {
    wx.getStorage({
      key: key,
      success: resolve,
      fail:reject
    })
  })
}
// 设置存储
function setStorage(key,value){
  return new Promise((resolve,reject) => {
    wx.setStorage({
      key: key,
      data: value,
      success: resolve,
      fail:reject
    })
  })
}

// 获取位置
function getLocation(type){
  return new Promise((resolve,reject) => {
    wx.getLocation({
      type:type,
      success:resolve,
      fail:reject
    })
  })
}

module.exports = {
  getLocation,
  getStorage,
  setStorage,
  login,
  getUserInfo
}