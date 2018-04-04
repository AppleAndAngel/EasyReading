// pages/leader/stories/stories.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    articleInfo:[],
    article:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this;
    wx.request({
      url: 'https://www.easy-mock.com/mock/5ac4410ebd54fc1e0f62374d/getDatas/articleList',
      success:function(res){
        _this.setData({
          articleInfo : res.data.data.index[options.id].articleInfo,
          article: res.data.data.index[options.id].articleInfo

        })
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