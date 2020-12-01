Component({
  options: {
    multipleSlots: true,
  },
  properties: {
    a: Number
  },
  data: {},
  methods: {},
  lifetimes: {
    /**
     * 在组件实例刚刚被创建时执行
     *
     * 最低基础库版本：[`1.6.3`](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)
     */
    created() {
      console.log('com created')
    },
    /**
     * 在组件实例进入页面节点树时执行
     *
     * 最低基础库版本：[`1.6.3`](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)
     */
    attached() {
      console.log('com attached')
    },
    /**
     * 在组件在视图层布局完成后执行
     *
     * 最低基础库版本：[`1.6.3`](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)
     */
    ready() {
      console.log('com ready')
    },
    /**
     * 在组件实例被移动到节点树另一个位置时执行
     *
     * 最低基础库版本：[`1.6.3`](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)
     */
    moved() {
      console.log('com moved')
    },
    /**
     * 在组件实例被从页面节点树移除时执行
     *
     * 最低基础库版本：[`1.6.3`](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)
     */
    detached() {
      console.log('com detached')
    },
    /**
     * 每当组件方法抛出错误时执行
     *
     * 最低基础库版本：[`2.4.1`](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)
     */
    error(err) {
      console.log('com error')
    },

  },
  pageLifetimes: {
    /** 页面生命周期回调—监听页面显示
     *
     * 页面显示/切入前台时触发。
     */
    show() {
      console.log('com page show')
    },
    /** 页面生命周期回调—监听页面隐藏
     *
     * 页面隐藏/切入后台时触发。 如 `navigateTo` 或底部 `tab` 切换到其他页面，小程序切入后台等。
     */
    hide() {
      console.log('com page hide')
    },
    /** 页面生命周期回调—监听页面尺寸变化
     *
     * 所在页面尺寸变化时执行
     */
    resize(size) {
    },
  }
});
