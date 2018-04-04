// pages/stock/fenlei/fenlei.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    listDes:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this;

    wx.request({
      url: 'https://www.easy-mock.com/mock/5ac4410ebd54fc1e0f62374d/getDatas/getAticleStack#!method=get',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        wx.setNavigationBarTitle({
          title: res.data.data.stack[options.id].bookType
        })

        console.log(res.data.data.stack[options.id], 'ggg-----')

        _this.setData({
          list: res.data.data.stack[options.id].booklist,
          listDes:{
            bookDes:res.data.data.stack[options.id].bookDes,
            publisher:res.data.data.stack[options.id].publisher
          }
        })

      }
    })
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log(this.data,'----dasd')
  
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