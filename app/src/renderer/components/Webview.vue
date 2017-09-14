<template>
  <div>
    <div class="nav">
      <input type="text" name="" :value="url">
    </div>
    <webview
      :src="url"
      class="webview"
    ></webview>
    <button type="button" @click="test">button</button>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters({
        url: 'url'
      })
    },
    name: 'webview-view',
    methods: {
      test () {
        this.$router.push({
          path: '/'
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
