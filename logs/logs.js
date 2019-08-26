//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    colorArrays: ["#85B8CF", "#90C652", "#D8AA5A", "#FC9F9D", "#0A9A84", "#61BC69", "#12AEF3", "#E29AAD"],
    wlist: [

    ]
  },

  onLoad: function () {

    var that = this;

    wx.request({
      url: 'https://www.easy-mock.com/mock/5d639b8ef93bee12cc1e1ab2/1/1',
      data: {
        week: '2',
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data['结果'][0].wlist)

        that.setData({

          wlist: res.data['结果'][0].wlist
        })
      }

    })
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})



