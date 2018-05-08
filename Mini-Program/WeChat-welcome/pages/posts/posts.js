// pages/posts/posts.js
var postsData=require("../../data/data.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  a: function() {

  },
  b: function() {

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.data);
     this.setData({
      post_key: postsData.post_list
    }) 
    console.log("我是posts下的 onReady")
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("我是posts下的 onLoad")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("我是posts下的 onShow")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("我是posts下的 onHide")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("我是posts下的 onUnload")
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
  
  },
  onPostTap:function(e){
    console.log(e)
    var postId = e.currentTarget.dataset.postid;
    console.log(postId)
    wx.navigateTo({
      url: '../post-detail/post-detail?id=' + postId,
    })
  }
})