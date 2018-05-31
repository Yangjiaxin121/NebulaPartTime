// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categoryList: {
      pageone: [{
        name: "美食",
        src: "/pages/images/1.png"
      }, {
        name: "甜点饮品",
        src: "/pages/images/2.png"
      }, {
        name: "美团超市",
        src: "/pages/images/3.png"
      }, {
        name: "正餐精选",
        src: "/pages/images/4.png"
      }, {
        name: "生鲜果蔬",
        src: "/pages/images/5.png"
      }, {
        name: "全部商家",
        src: "/pages/images/6.png"
      }, {
        name: "免配送费",
        src: "/pages/images/7.png"
      }, {
        name: "新商家",
        src: "/pages/images/8.png"
      }],
      pagetwo: [{
        name: "美食",
        src: "/pages/images/1.png"
      }, {
        name: "甜点饮品",
        src: "/pages/images/2.png"
      }, {
        name: "美团超市",
        src: "/pages/images/3.png"
      }, {
        name: "正餐精选",
        src: "/pages/images/4.png"
      }, {
        name: "生鲜果蔬",
        src: "/pages/images/5.png"
      }, {
        name: "全部商家",
        src: "/pages/images/6.png"
      }, {
        name: "免配送费",
        src: "/pages/images/7.png"
      }, {
        name: "新商家",
        src: "/pages/images/8.png"
      }]
    },
    "restaurant": [
      {
        "name": "签约艺人",
        "star": 5,
        "sales": 1161,
        "src": "/pages/images/jobs/签约艺人.jpg",
        "initial_price": 20,
        "distribution_price": 0,
        "distance": "1.5km",
        "content": "网络主播月薪过万",
        "time": 30
      },
      {
        "name": "网拍模特",
        "star": 4,
        "sales": 330,
        "src": "/pages/images/jobs/网拍模特1.jpg",
        "initial_price": 50,
        "distribution_price": 3,
        "distance": "3.3km",
        "time": 56
      },
      {
        "name": "摄影助理",
        "src": "/pages/images/jobs/摄影助理.jpg",
        "star": 0,
        "sales": 39,
        "initial_price": 35,
        "distribution_price": 3,
        "distance": "3.1km",
        "time": 44
      },
      {
        "name": "迎宾",
        "star": 0,
        "sales": 24,
        "src": "/pages/images/jobs/迎宾.jpg",
        "initial_price": 30,
        "distribution_price": 1,
        "distance": "2.6km",
        "time": 44
      },
      {
        "name": "洗浴服务员",
        "src": "/pages/images/jobs/洗浴服务员.jpg",
        "star": 4.5,
        "sales": 641,
        "initial_price": 0,
        "distribution_price": 0,
        "distance": "156m",
        "time": 33
      },
      {
        "name": "韩式炸鸡啤酒屋",
        "star": 4.5,
        "sales": 731,
        "src": "http://i4.piimg.com/601998/9ce47f2f19d7717d.jpg",
        "initial_price": 15,
        "distribution_price": 0,
        "distance": "1.3km",
        "time": 52
      },
      {
        "name": "榴芒先生",
        "star": 4.5,
        "sales": 37,
        "src": "http://i4.piimg.com/601998/da9e00c0bccd6fb0.jpg",
        "initial_price": 58,
        "distribution_price": 0,
        "distance": "6.8km",
        "time": 49
      }
    ]
    
  
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