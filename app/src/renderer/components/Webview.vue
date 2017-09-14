<template>
  <div>
    <div class="nav">
      <input type="text" name="" :value="url">
    </div>
    <webview
      :src="url"
      class="webview"
      id="webview"
    ></webview>
    <button type="button" @click="test">Home</button>
    <button type="button" style="margin-top: 30px;" @click="view">View</button>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  const services = require('electron').remote.getGlobal('services')
  const webContents = require('electron').remote.getCurrentWebContents()
  console.log(webContents.getURL())
  console.log('mainWindow opened')
  export default {
    computed: {
      ...mapGetters({
        url: 'url'
      })
    },
    name: 'webview-view',
    mounted () {
      const webview = document.getElementById('webview')
      webview.addEventListener('new-window', (e) => {
        // 不允许跳转到新页面
        webview.loadURL(e.url)
      })
    },
    methods: {
      test () {
        this.$router.push({
          path: '/'
        })
      },
      view () {
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

<style scoped>
  img {
    margin-top: -25px;
    width: 450px;
  }

  .webview {
    width: 100vw;
    height: calc(100vh - 30px);
    position: absolute;
    top: 30px;
    left: 0;
  }

  .nav {
    position: absolute;
    top: 0;
    left: 0;
    height: 30px;

    input {
      width: 100%;
    }
  }

  button {
    position: fixed;
    top: 50%;
    z-index: 1000;
  }
</style>
