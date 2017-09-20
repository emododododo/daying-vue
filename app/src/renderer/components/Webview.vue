<template>
  <div>
    <div class="webview-bar">
      <a @click="goHome" class="icon-wrapper active">
        <img class="icon_home" src="./assets/home.png" alt="" />
      </a>
      <a @click="goBack" class="icon-wrapper" :class="{
        active: canGoBack
      }">
        <img class="icon_back" src="./assets/arrow_left.png" alt="" />
      </a>
      <a @click="goForward" class="icon-wrapper" :class="{
        active: canGoForward
      }">
        <img class="icon_forward" src="./assets/arrow_left.png" alt="" />
      </a>
      <a @click="onReload" class="icon-wrapper active">
        <img class="icon_reload" src="./assets/reload.png" alt="" />
      </a>
      <input type="text" name="" :value="inputValue">
      <a @click="vipView" class="icon-wrapper active">
        <img class="icon_reload" src="./assets/vip.png" alt="" />
        <== 破解
      </a>
    </div>
    <webview
      :src="url"
      class="webview"
      id="webview"
      ref="webview"
    ></webview>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  const services = require('electron').remote.getGlobal('services')
  // const webContents = require('electron').remote.getCurrentWebContents()
  // console.log(webContents.getURL())
  console.log('mainWindow opened')
  // console.log(playIcon)
  export default {
    data () {
      return {
        inputValue: '',
        canGoBack: false,
        canGoForward: false
      }
    },
    computed: {
      ...mapGetters({
        url: 'url'
      })
    },
    name: 'webview-view',
    mounted () {
      this.inputValue = this.url
      const webview = this.$refs.webview
      webview.addEventListener('new-window', (e) => {
        // 不允许跳转到新页面
        webview.loadURL(e.url)
      })
      webview.addEventListener('did-navigate', () => {
        const canGoBack = webview.canGoBack()
        const canGoForward = webview.canGoForward()
        if (this.canGoBack !== canGoBack) {
          this.canGoBack = canGoBack
        }
        if (this.canGoForward !== canGoForward) {
          this.canGoForward = canGoForward
        }
      })
    },
    methods: {
      goBack () {
        this.$refs.webview.goBack()
      },
      goForward () {
        this.$refs.webview.goForward()
      },
      onReload () {
        this.$refs.webview.reload()
      },
      goHome () {
        this.$router.push({
          path: '/'
        })
      },
      vipView () {
        const webviewElement = document.getElementById('webview')
        console.log(webviewElement.getURL())
        const url = encodeURIComponent(webviewElement.getURL())
        services.createWindow(`${services.winURL}/#/webview_play?url=${url}`, {
          height: 300,
          width: 400
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .webview-bar {
    position: fixed;
    display: flex;
    align-items: center;
    top: 0;
    height: 30px;
    border-bottom: 1px solid #ccc;
    width: 100vw;
    background-color: #fff;
    z-index: 100;

    .icon-wrapper {
      height: 18px;
      opacity: .4;
      margin: 0 8px;
      img {
        height: 18px;
      }

      &.active {
        opacity: 1;
      }
      .icon_forward {
        transform: rotate(180deg);
      }

    }
    input {
      width: 70vw;
    }
  }
  .webview {
    margin-top: 30px;
    width: 100vw;
    height: 100vh;
    overflow: scroll;
    left: 0;
  }

  button {
    position: fixed;
    top: 50%;
    z-index: 1000;
  }

  .play-button {
    position: fixed;
    top: 50%;
    z-index: 1000;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: rgb(306, 106, 48);
    box-shadow: 0px 0px 1px 1px #000;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: #1afa29;
    }
    img {
      width: 24px;
      height: 24px;
      transform: rotate(-90deg);
    }
  }
</style>
