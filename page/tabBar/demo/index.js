Page({
  data: {
    list: [
      {
        id: 'api',
        name: '示例演示',
        open: false,
        pages: [
          {
            zh: '转译字符',
            url: 'html-char/index'
          },
          {
            zh: 'template slot使用',
            url: 'slot/index'
          },
          {
            zh: '生命周期',
            url: 'lifetimes/index'
          },{
            zh: '小程序运行原理',
            url: 'nwjs/index'
          },
        ]
      },
    ]
  },


  kindToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        if (list[i].url) {
          wx.navigateTo({
            url: '../../demo/pages/' + list[i].url
          })
          return
        }
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list: list
    });
  }
})
