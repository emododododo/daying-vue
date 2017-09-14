<template>
  <div class="wrapper">
    <ul class="images-wrapper">
      <li v-for="item in source" @click="handleClick(item.url)">
        <img :src="item.icon" alt="electron-vue">
      </li>
    </ul>
  </div>
</template>

<script>
  const source = [
    {
      icon: require('./assets/aqylogo.png'),
      url: 'http://www.iqiyi.com/'
    },
    {
      icon: require('./assets/youkulogo.png'),
      url: 'http://www.youku.com/'
    },
    {
      icon: require('./assets/letvlogo.png'),
      url: 'http://www.le.com/'
    },
    {
      icon: require('./assets/qqlogo.png'),
      url: 'http://v.qq.com/'
    },
    {
      icon: require('./assets/tudoulogo.png'),
      url: 'http://www.tudou.com/'
    },
    {
      icon: require('./assets/sohulogo.png'),
      url: 'http://tv.sohu.com/'
    },
    {
      icon: require('./assets/56logo.png'),
      url: 'http://www.56.com/'
    },
    {
      icon: require('./assets/ku6logo.png'),
      url: 'http://www.ku6.com/'
    },
    {
      icon: require('./assets/wasulogo.png'),
      url: 'http://www.wasu.cn/'
    },
    {
      icon: require('./assets/yinyuetailogo.png'),
      url: 'http://www.yinyuetai.com/'
    },
    {
      icon: require('./assets/hunantvlogo.png'),
      url: 'http://www.mgtv.com/'
    },
    {
      icon: require('./assets/sinalogo.png'),
      url: 'http://video.sina.com.cn/'
    },
    {
      icon: require('./assets/163logo.png'),
      url: 'http://v.163.com/'
    },
    {
      icon: require('./assets/6logo.png'),
      url: '#'
    },
    {
      icon: require('./assets/kugoulogo.png'),
      url: '#'
    },
    {
      icon: require('./assets/baomihualogo.png'),
      url: '#'
    },
    {
      icon: require('./assets/ifenglogo.png'),
      url: '#'
    },
    {
      icon: require('./assets/kankannewslogo.png'),
      url: '#'
    },
    {
      icon: require('./assets/mtimelogo.png'),
      url: '#'
    },
    {
      icon: require('./assets/kuwologo.png'),
      url: '#'
    },
    {
      icon: require('./assets/1905logo.png'),
      url: '#'
    },
    {
      icon: require('./assets/tangdoulogo.png'),
      url: '#'
    },
    {
      icon: require('./assets/cntvlogo.png'),
      url: '#'
    }
  ]

  import { mapActions } from 'vuex'
  export default {
    data () {
      return {
        source
      }
    },
    methods: {
      ...mapActions(['setUrl']),
      handleClick (url) {
        this.setUrl(url)
        this.$router.push({
          path: '/webview_view'
        })
      }
    },
    name: 'home'
  }
</script>

<style scoped lang="scss">
  .images-wrapper {
    display: flex;
    width: 100vw;
    flex-wrap: wrap;
    img {
      width: 110px;
      padding: 16px 14px;
      margin: 10px;
    }
  }

</style>
