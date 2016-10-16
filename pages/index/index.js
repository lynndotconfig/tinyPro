//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    name: 'Wechat'
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('index----onLoad');
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  onShow: function () {
    console.log("index --- onShow");
  },
  onReady: function () {
    console.log("index --- onReady");
  },
  onHide: function() {
    console.log("index --- onHide");
  },
  onUnload: function() {
    console.log("index --- onUnload");
  },
  changeName: function(e) {
    // sent data change to view
    this.setData({
      name: 'MINA'
    })
  },
  goTest: function(event) {
    console.log(event);
    wx.navigateTo({
      url: '../views/views'
    })
  }
})
