//app.js
App({
  onLaunch: function () {
    console.log("程序启动我会被调用");

    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },

  /**
  * 当程序启动完成展示给用户后，从后台切换到前台会再次调用
  */
  onShow: function () {
    console.log("程序自启动完成我会被调用");
  },
  globalData:{
    userInfo:null
  },

  onHide: function () {
    console.log("程序进入后台我会被调用");
  }
})