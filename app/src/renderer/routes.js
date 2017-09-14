export default [
  // {
  //   path: '/',
  //   name: 'landing-page',
  //   component: require('components/LandingPageView')
  // },
  {
    path: '/',
    name: 'home',
    component: require('components/Home')
  },
  {
    path: '/webview_view',
    name: 'webview-view',
    component: require('components/Webview')
  },
  {
    path: '/webview_play',
    name: 'webview-play',
    component: require('components/WebviewPlay')
  }
  // {
  //   path: '*',
  //   redirect: '/'
  // }
]
