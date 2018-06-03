// pages/menu/menu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperTitle: [{
      text: "详情",
      id: 1
    }, {
      text: "评价",
      id: 2
    }, {
      text: "商家",
      id: 3
    }],
    howMuch: 12,
    currentPage: 0,
    salary1: "",
    salary2: "",
    content1: "",
    content2: "",
    content3: "",
    comment1: "",
    comment2: "",
    comment3: "",
    src:"",
    merchants:"",

  },
  turnPage: function (e) {
    this.setData({
      currentPage: e.currentTarget.dataset.index

    })
  },
  turnTitle: function (e) {
    if (e.detail.source == "touch") {
      this.setData({
        currentPage: e.detail.current
      })
    }
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      salary1: options.salary1,
      salary2: options.salary2,
      content1: options.content1,
      content2: options.content2,
      content3: options.content3,
      comment1: options.comment1,
      comment2: options.comment2,
      comment3: options.comment3,
      src:options.src,
      merchants: options.merchants
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