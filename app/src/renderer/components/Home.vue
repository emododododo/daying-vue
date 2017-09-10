<template>
  <div>
    <div class="nav">
      <input type="text" name="" :value="url">
    </div>
    <webview
      src="https://www.baidu.com/"
      class="webview"
    ></webview>
  </div>
</template>

<script>
  import CurrentPage from './LandingPageView/CurrentPage'
  import Links from './LandingPageView/Links'
  import Versions from './LandingPageView/Versions'
  export default {
    data () {
      return {
        url: 'https://www.baidu.com/'
      }
    },
    components: {
      CurrentPage,
      Links,
      Versions
    },
    name: 'home'
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
</style>
