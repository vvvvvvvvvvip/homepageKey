<template>
    <div id="app">
        <fixed-bg :imagePath="imagePath"></fixed-bg>
        <v-content :info="info"></v-content>
        <router-view></router-view>
        <!--https://cn.bing.com-->
        <audio :src="getCurrentMusic.url" ref="myAudio"></audio>
    </div>
</template>

<script type="text/javascript-6">
    import store from './vuex/index';
    import fixedbg from './components/common/fixedbg.vue'
    import homeComponent from './components/home.vue'
    import content from './components/common/content.vue'
    let serverUrl = '/api/'  //本地调试时

    export default {
    name: 'App',
        components: {
            'fixed-bg': fixedbg,
            homeComponent,
            'v-content': content
        },
    data () {
        return {
            info: {},
            imagePath: {}
         }
    },
   created() {
       this.$http.get(serverUrl + 'cnhp/coverstory/').then(response => {
           console.log(response)
           // get body data
           this.info = response.data
           console.log(this)

           // 所有的bing数据存起来
           store.dispatch('set_BingInfo', response.data)

           localStorage.setItem('fixedImageBg', JSON.stringify(response.data))
          }, response => {
              console.log("error");
          });
       this.$http.get(serverUrl + 'HPImageArchive.aspx?format=js&idx=0&n=1').then(response => {
            // get body data
           localStorage.setItem("imageUrlPart",response.body.images[0].url)
           this.imagePath = "http://www.bing.com" + response.body.images[0].url
           console.log(response.body.images[0].url)
           console.log("保存URL")
       }, response => {
           console.log("error");
       });
   },
   computed: {
       getCurrentMusic () {
           return store.getters.getCurrentAudio
       }
   },
   mounted () {
       console.log(this)
       this.setAudioRef()
   },
   methods: {
       setAudioRef () {
          store.commit({
              type: 'setAudioEle',
              data: this.$refs.myAudio
          })
       }
   }

}
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    body {
        margin: 0;
    }
    h1, h2 {
        font-weight: normal;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
    .container {
        padding: 0 10%;
    }
    header {
        position: fixed;
        top: 0;
        left: 50%;
        -webkit-transform: translateX(-50%);
        -moz-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        -o-transform: translateX(-50%);
        transform: translateX(-50%);
        width: 100%;
    }
    footer {
        position: fixed;
        bottom: 0;
        left: 50%;
        -webkit-transform: translateX(-50%);
        -moz-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        -o-transform: translateX(-50%);
        transform: translateX(-50%);
        width: 100%;
    }
    .whiteText {
        color: #ffffff;
    }
    .rightText {
        text-align: right;
    }
    .leftText {
        text-align: left;
    }
    .centerText {
        text-align: center;
    }
    @media screen and (max-width: 768px) {
        .fullScreen {
            display: none;
        }
    }


</style>
