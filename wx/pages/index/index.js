//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello，This is Luo,Tianhui & Zhang,Jie。',
    imgtitle:'',
    src: '../../resources/photo.jpg',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../pictures/pictures'
    })
  },
  bindAddressTap:function(){
    wx.navigateTo({
      url: '../address/address'
    })
  },
  onLoad: function () {
    
  }
})
