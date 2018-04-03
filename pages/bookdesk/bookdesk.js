// pages/bookdesk/bookdesk.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageUrl:[
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    swiperInfo:[
      {
        imageUrl:'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        bookname:'经济学原理',
        readNum:830,
        replayNum:100
      },{
        imageUrl:'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        bookname:'人工智能',
        readNum:120,
        replayNum:50
      },{
        imageUrl:'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        bookname:'月亮与六便士',
        readNum:500,
        replayNum:99
      }
    ],
    currentIndex:0,
    indicatorDots:false,
    circular:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  swiperChange(e){
    this.setData({
      currentIndex:e.detail.current
    })
  }
})