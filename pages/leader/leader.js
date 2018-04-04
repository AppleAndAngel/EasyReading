// pages/leader/leader.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    authors:[],
    id:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this;
    wx.request({
      url: 'https://www.easy-mock.com/mock/5ac4410ebd54fc1e0f62374d/getDatas/articleList',
      header: {
          'content-type': 'application/json'
      },
      success:function(res){
        console.log(res.data.data)

        _this.setData({
          authors:res.data.data.index
          // id:res.data.data.index.
        })
      }
    })


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
     wx.showLoading({
      title: '加载中',
      duration: 500
    })

    setTimeout(function(){
      wx.hideLoading()
    },500)

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
    let _this = this;

    let pullAuthors = [
      {
        "username": "船长路飞",
        "headImg": "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2250231223,1044421301&fm=27&gp=0.jpg",
        "bannerImage": "http://imgtu.5011.net/uploads/content/20170717/small53514915002860551500286129.jpg",
        "articleTitle": "说在古代怎么说 古代“说”是什么含义",
        "articleContent": "说，释也，一曰谈说也。——《说文》说所以明也。——《墨子·经上》",
        "clickTimes": "874",
        "thumbUp": "124",
        "articleInfo": [
          {
            "username": "船长路飞",
            "userDes": "专注演讲口才与个人成长方面的内容",
            "headImg": "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2250231223,1044421301&fm=27&gp=0.jpg",
            "articleTitle": "这是一种锻炼口才行之有效的方法",
            "bookAuthor": "东野圭吾",
            "bookCover": "http://www.520tingshu.com/pic/uploadimg/2016-5/20165621144242307.jpg",
            "bookName": "恶意",
            "image1": "http://img15.3lian.com/2015/f1/127/d/52.jpg",
            "image2": "http://www.chinesecio.com/m/photos/get_image/file/e4efc709633795fa9b9aa6c3b21d2fa3.jpg",
            "readerNum": "105",
            "text1": "　　编剧有一个基本功，叫做拉片子。打开一部电影或电视剧，随看随停，从镜头运用到台词走位，一帧一段地悉心揣摩。拉透了片子，大师的用心便了然于胸。同样的道理，想弄明白一段历史，最基本的要求，也得把相关史书拉上几遍才行。    可史书并不是那么好拉的。    最近知乎上有个问题，题主抱怨说有心想学历史，但大部分史书呆板枯燥，平铺直叙，读起来太难受了，向大家询问读史之法。我看到这问题，并不觉得他孤陋浅薄，反而心有戚戚焉，因为当年我也有同样困惑。    那时候我年幼无知，立志钻研历史，决定拉一拿前拉史书。可一翻开书页，眼前登时一黑。《史记》还好，司马迁写得有鼻子四史来说，有眼，可读性还不错;《三国志》勉强能看，",
            "text2": " 　　大部分我所见的墨西哥人，便如上帝捏出来的粗泥娃娃没有用刀子再细雕，也没有上釉，做好了，只等太阳晒晒干便放到世上来了——当然，那是地下车中最最平民的样子。这儿的人类学博物馆中有些故事，述说古时住在这片土地上的居民，他们喜欢将小孩子的前额和后脑夹起好几年，然后放开，那些小孩子的头发成扁平的，脸孔当然也显得宽大些，在他们的审美眼光中，那便是美丽。而今的墨西哥人，仍然有着那样的脸谱，扁脸、浓眉、大眼宽鼻、厚唇，不算太清洁，衣着鲜艳如彩虹，表情木然而本分。而他们身体中除了墨西哥本地的血液之外，当然渗杂了西班牙人的成份，可是看上去他们仍是不近欧洲而更近印地安人的。常常，在地下车中挤着去某个地方，只因时间充分，也因舍不得那一张张已到了艺术极致的脸谱，情愿坐过了站再回头。",
            "updateTime": "2018-04-04 17:42:38"
          }
        ]
      },
      {
        "username": "索隆",
        "headImg": "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2590326177,3878693638&fm=27&gp=0.jpg",
        "bannerImage": "http://imgtu.5011.net/uploads/content/20170713/small55488314999328961499932964.jpg",
        "articleTitle": "这是一种锻炼口才行之有效的方法",
        "articleContent": "锻炼口才，朗读、背诵、附属这三种方法，都能够提高我们说话的能力，朗读时锻炼舌。",
        "clickTimes": "874",
        "thumbUp": "124",
        "articleInfo": [
          {
            "username": "索隆",
            "userDes": "专注演讲口才与个人成长方面的内容",
            "headImg": "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2590326177,3878693638&fm=27&gp=0.jpg",
            "articleTitle": "这是一种锻炼口才行之有效的方法",
            "bookAuthor": "东野圭吾",
            "bookCover": "http://www.520tingshu.com/pic/uploadimg/2016-5/20165621144242307.jpg",
            "bookName": "恶意",
            "image1": "http://img15.3lian.com/2015/f1/127/d/52.jpg",
            "image2": "http://www.chinesecio.com/m/photos/get_image/file/e4efc709633795fa9b9aa6c3b21d2fa3.jpg",
            "readerNum": "105",
            "text1": "　　编剧有一个基本功，叫做拉片子。打开一部电影或电视剧，随看随停，从镜头运用到台词走位，一帧一段地悉心揣摩。拉透了片子，大师的用心便了然于胸。同样的道理，想弄明白一段历史，最基本的要求，也得把相关史书拉上几遍才行。    可史书并不是那么好拉的。    最近知乎上有个问题，题主抱怨说有心想学历史，但大部分史书呆板枯燥，平铺直叙，读起来太难受了，向大家询问读史之法。我看到这问题，并不觉得他孤陋浅薄，反而心有戚戚焉，因为当年我也有同样困惑。    那时候我年幼无知，立志钻研历史，决定拉一拿前拉史书。可一翻开书页，眼前登时一黑。《史记》还好，司马迁写得有鼻子四史来说，有眼，可读性还不错;《三国志》勉强能看，",
            "text2": " 　　大部分我所见的墨西哥人，便如上帝捏出来的粗泥娃娃没有用刀子再细雕，也没有上釉，做好了，只等太阳晒晒干便放到世上来了——当然，那是地下车中最最平民的样子。这儿的人类学博物馆中有些故事，述说古时住在这片土地上的居民，他们喜欢将小孩子的前额和后脑夹起好几年，然后放开，那些小孩子的头发成扁平的，脸孔当然也显得宽大些，在他们的审美眼光中，那便是美丽。而今的墨西哥人，仍然有着那样的脸谱，扁脸、浓眉、大眼宽鼻、厚唇，不算太清洁，衣着鲜艳如彩虹，表情木然而本分。而他们身体中除了墨西哥本地的血液之外，当然渗杂了西班牙人的成份，可是看上去他们仍是不近欧洲而更近印地安人的。常常，在地下车中挤着去某个地方，只因时间充分，也因舍不得那一张张已到了艺术极致的脸谱，情愿坐过了站再回头。",
            "updateTime": "2018-04-04 17:42:38"
          }
        ]
      },
      {
        "username": "陈米涵",
        "headImg": "http://imgtu.5011.net/uploads/content/20170720/8504701500522004.jpg",
        "bannerImage": "http://imgtu.5011.net/uploads/content/20170717/small53514915002860551500286129.jpg",
        "articleTitle": "这是一种锻炼口才行之有效的方法",
        "articleContent": "锻炼口才，朗读、背诵、附属这三种方法，都能够提高我们说话的能力，朗读时锻炼舌。",
        "clickTimes": "874",
        "thumbUp": "124",
        "articleInfo": [
          {
            "username": "陈米涵",
            "userDes": "专注演讲口才与个人成长方面的内容",
            "headImg": "http://imgtu.5011.net/uploads/content/20170720/8504701500522004.jpg",
            "articleTitle": "这是一种锻炼口才行之有效的方法",
            "bookAuthor": "东野圭吾",
            "bookCover": "http://www.520tingshu.com/pic/uploadimg/2016-5/20165621144242307.jpg",
            "bookName": "恶意",
            "image1": "http://img15.3lian.com/2015/f1/127/d/52.jpg",
            "image2": "http://www.chinesecio.com/m/photos/get_image/file/e4efc709633795fa9b9aa6c3b21d2fa3.jpg",
            "readerNum": "105",
            "text1": "　　编剧有一个基本功，叫做拉片子。打开一部电影或电视剧，随看随停，从镜头运用到台词走位，一帧一段地悉心揣摩。拉透了片子，大师的用心便了然于胸。同样的道理，想弄明白一段历史，最基本的要求，也得把相关史书拉上几遍才行。    可史书并不是那么好拉的。    最近知乎上有个问题，题主抱怨说有心想学历史，但大部分史书呆板枯燥，平铺直叙，读起来太难受了，向大家询问读史之法。我看到这问题，并不觉得他孤陋浅薄，反而心有戚戚焉，因为当年我也有同样困惑。    那时候我年幼无知，立志钻研历史，决定拉一拿前拉史书。可一翻开书页，眼前登时一黑。《史记》还好，司马迁写得有鼻子四史来说，有眼，可读性还不错;《三国志》勉强能看，",
            "text2": " 　　大部分我所见的墨西哥人，便如上帝捏出来的粗泥娃娃没有用刀子再细雕，也没有上釉，做好了，只等太阳晒晒干便放到世上来了——当然，那是地下车中最最平民的样子。这儿的人类学博物馆中有些故事，述说古时住在这片土地上的居民，他们喜欢将小孩子的前额和后脑夹起好几年，然后放开，那些小孩子的头发成扁平的，脸孔当然也显得宽大些，在他们的审美眼光中，那便是美丽。而今的墨西哥人，仍然有着那样的脸谱，扁脸、浓眉、大眼宽鼻、厚唇，不算太清洁，衣着鲜艳如彩虹，表情木然而本分。而他们身体中除了墨西哥本地的血液之外，当然渗杂了西班牙人的成份，可是看上去他们仍是不近欧洲而更近印地安人的。常常，在地下车中挤着去某个地方，只因时间充分，也因舍不得那一张张已到了艺术极致的脸谱，情愿坐过了站再回头。",
            "updateTime": "2018-04-04 17:42:38"
          }
        ]
      }
    ]


    setTimeout(function(){
      _this.setData({
        authors:[...pullAuthors,..._this.data.authors]
      })

      wx.stopPullDownRefresh()


      console.log(_this.data.authors)
    },1000)

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
