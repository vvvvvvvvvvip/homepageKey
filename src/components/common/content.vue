<template>
    <div style="height: 45px;line-height: 45px;text-align: left;">
        <!--<router-view></router-view>-->
        <div class="place">
            <ul class="tags">
                <div>
                    <router-link tag="a" to="/home">
                        <li>
                            <i></i>
                            <span>首页</span>
                        </li>
                    </router-link>
                    <router-link tag="a" to="/about">
                        <li>
                            <i></i>
                            <span>关于</span>
                        </li>
                    </router-link>
                    <div class="right rightTag">
                     <span>
                         <i class="placeIcon"
                            :style="{background : 'url(' + placeIconPath + ')', backgroundSize:imagesize, backgroundPosition:imageposition}"></i>
                {{ address.city }}
                     </span>
                </div>
                </div>

            </ul>

        </div>
        <div class="fullScreen">
            <i :class="isFullScreen ? 'icon-cancleFullScreen':'icon-fullScreen'" :title="isFullScreen ? '取消全屏显示':'全屏显示'"
               @click="toggleFullScreen()"></i>
        </div>
    </div>
</template>
<style scoped>
    /*在这里写css样式*/
    li,.rightTag span {
        height: 45px;
        line-height: 45px;
    }

    .rightTag span{
        font-size: 16px;
    }

    ul li span {
        color: #fff;
        font-size: 16px;
    }

    .fullScreen {
        position: absolute;
        bottom: 20px;
        right: 20px;

    }

    .fullScreen i {
        display: inline-block;
        width: 25px;
        height: 25px;
        position: absolute;
        bottom: 20px;
        right: 20px;
        z-index: 999;
    }

    .icon-cancleFullScreen {
        background: url("https://raw.githubusercontent.com/vvvvvvvvvvip/new/master/image/editFullpage.png") center center no-repeat;
        background-size: 100%;
    }

    .icon-fullScreen {
        background: url("https://raw.githubusercontent.com/vvvvvvvvvvip/new/master/image/fullpage.png") center center no-repeat;
        background-size: 100%;
    }

    .left {
        float: left;
    }
    
    .rightTag {
        padding: 0 20px;
        font-size: 24px;
        position: absolute;
        right: 0;
        display: inline-block;
    }

    .placeIcon {
        display: inline-block;
        width: 18px;
        height: 18px;
    }

    .tags {
        position: fixed;
        height: 45px;
        line-height: 45px;
        width: 100%;
        /*background-color: chocolate;*/
        z-index: 5;
        top: 0;
        margin: 0;
    }

    .place {
        color: #fff;
        height: 68px;
    }
</style>
<script type="text/javascript-6"> 
// 这里写逻辑代码
export default {
    data (){
        return {
            address: { },
            placeIconPath: 'https://raw.githubusercontent.com/vvvvvvvvvvip/new/master/image/position.png',
            imagesize: 'cover',
            imageposition: 'center center',
            isFullScreen: false
        }
    },
    methods: {
    toggleFullScreen: function(){
        console.log(this)
        if (this.isFullScreen) {
        this.exitFullscreen()
      } else {
        this.fullScreen()
      }
    },

    fullScreen () {
      // W3C
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen()
      }
      // FireFox
      if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen()
      }
      // Chrome等
      if (document.documentElement.webkitRequestFullScreen) {
        document.documentElement.webkitRequestFullScreen()
      }
      // IE11
      if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen()
      }
      this.isFullScreen = true
    },
    exitFullscreen () {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      }
      if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      }
      if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen()
      }
      if (document.msExitFullscreen) {
        document.msExitFullscreen()
      }
      this.isFullScreen = false
    },
    },
    mounted: function () {
        this.$http.get('http://www.daiwei.org/vue/server/home.php?inAjax=1&do=getAdress').then(response => {
              console.log(response.data);
             // get body data
             this.address = response.data.data;
         }, response => {
             console.log("error");
         });
    }
}



</script>