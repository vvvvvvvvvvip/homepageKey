<template>
    <!-- 歌词显示问题传--值-->
    <div class="musicList">
        <div @click="back()">
            <i class="back"></i>
        </div>
        <div class="title whiteText"  :class="isShow? 'show':'hide'">
            <div class="centerText">序列</div>
            <div class="leftText">歌曲</div>
            <div class="leftText">歌手</div>
            <div class="leftText album">专辑</div>
            <div class="centerText">时长</div>
        </div>
        <div class="musicLyric" :class="isHide? 'show':'hide'">
            <p class="lyricItem"  v-for="(item, key, index) in getMusicLrcLists">{{item}}</p>
        </div>
        <div class="middle-content"  :class="isShow? 'show':'hide'">
            <div class="set">
                <div class="whiteText musicSheet" v-for="(list, index) in musicList" :key="list.id"  @click="clickPlayList(list.id,list.name,list.al.picUrl,list.ar[0].name, list.dt,index), musicList">
                    <div class="centerText">
                        <span v-show="getCurrentMusic.id !== list.id">{{ index + 1 }}</span>
                        <img v-show="getCurrentMusic.id === list.id" src="http://www.daiwei.org/vue/bg/wave.gif" alt="播放中"/>
                    </div>
                    <div class="leftText">{{ list.name }}</div>
                    <div class="leftText">{{ list.ar[0].name }}</div>
                    <div class="leftText album">{{ list.al.name }}</div>
                    <div class="centerText">{{getMusicDurationType(list.dt)}}</div>
                </div>
            </div>
        </div>
        <music-bottom @showCityName="updateCity" :bufferingP="bufferingP"></music-bottom>
    </div>
</template>
<style scoped>
    /*在这里写css样式*/
    .show {
        display: block;
    }

    .hide {
        display: none;
    }

    .musicLyric {
        color: floralwhite;
        width: 100%;
        overflow-y: auto;
        position: fixed;
        top: 150px;
        bottom: 150px;
        left: 50%;
        -webkit-transform: translateX(-50%);
        -moz-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        -o-transform: translateX(-50%);
        transform: translateX(-50%);
        max-width: 1240px;
        margin: 0 auto;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-overflow-scrolling: touch;
    }
    .title {
        width: 100%;
        max-width: 1240px;
        position: fixed;
        top: 110px;
        left: 50%;
        -webkit-transform: translateX(-50%);
        -moz-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        -o-transform: translateX(-50%);
        transform: translateX(-50%);
    }

    .musicSheet {
        width: 100%;
        cursor: pointer;
    }

    .musicSheet:hover {
        background: rgba(0,0,0,.3);
    }

    .title div:nth-child(1),.musicSheet div:nth-child(1){
        display: inline-block;
        width: calc(5% - 1px);
        max-width: 50px;
    }

    .title div:nth-child(2),.musicSheet div:nth-child(2) {
        display: inline-block;
        width: calc(50% - 10px);
    }

    .title div:nth-child(3),.musicSheet div:nth-child(3) {
        display: inline-block;
        width: calc(15% - 10px);
    }

    .title div:nth-child(4),.musicSheet div:nth-child(4) {
        display: inline-block;
        width: calc(15% - 10px);
    }

    .title div:nth-child(5),.musicSheet div:nth-child(5){
        display: inline-block;
        width: calc(10% - 10px);
        max-width: 50px;
    }

    .title div,.musicSheet div {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }

    .musicSheet div {
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        font-weight: lighter;
    }

    .whiteText {
        color: #ffffff;
    }

    .middle-content::-webkit-scrollbar,.musicLyric::-webkit-scrollbar {/*滚动条整体样式*/
        width: 4px;     /*高宽分别对应横竖滚动条的尺寸*/
        height: 4px;
    }
    .middle-content::-webkit-scrollbar-thumb,.musicLyric::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
        border-radius: 5px;
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        background: rgba(0,0,0,0.2);
    }
    .middle-content::-webkit-scrollbar-track,.musicLyric::-webkit-scrollbar-track {/*滚动条里面轨道*/
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        border-radius: 0;
        background: rgba(0,0,0,0.1);
    }

    .middle-content{
        overflow-y: auto;
        position: fixed;
        top: 150px;
        bottom: 150px;
        left: 50%;
        -webkit-transform: translateX(-50%);
        -moz-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        -o-transform: translateX(-50%);
        transform: translateX(-50%);
        max-width: 1240px;
        width: 100%;
        margin: 0 auto;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-overflow-scrolling: touch;
    }

    .back {
        display: inline-block;
        width: 30px;
        height: 30px;
        background: url("https://raw.githubusercontent.com/vvvvvvvvvvip/new/master/image/back.png") center center no-repeat;
        background-size: 100%;
        position: absolute;
        left: 30px;
        top: 40px;
    }

    .musicList {
        width: 90%;
        padding: 0 20px;
        margin: 0 auto;
    }

    @media screen and (max-width: 768px) {
        .musicLyric {
            font-size: 12px;
        }
        .album {
            display: none!important;
        }
        .musicSheet div {
            font-size: 14px;
        }
        .title div:nth-child(1),.musicSheet div:nth-child(1){
            display: inline-block;
            width: calc(15% - 1px);
            max-width: 50px;
        }

        .title div:nth-child(2),.musicSheet div:nth-child(2) {
            display: inline-block;
            width: calc(45% - 10px);
        }

        .title div:nth-child(3),.musicSheet div:nth-child(3) {
            display: inline-block;
            width: calc(25% - 10px);
        }

        .title div:nth-child(5),.musicSheet div:nth-child(5){
            display: inline-block;
            width: calc(20% - 10px);
            max-width: 50px;
        }
    }
</style>
<script type="text/javascript-6">
import store from '../../../vuex/index'
import musicApi from './music.js'
import musicBottom from './musicBottom/musicBottom'

// 这里写逻辑代码
export default {
    data (){
        return {
            isDrag: false,
            bufferingP: true,
            isShow: true,
            isHide: false
        }
    },
    methods: {
        updateCity(data){//触发子组件城市选择-选择城市的事件
            console.log(data)
            this.toCity = !data.cityname;//改变了父组件的值
            this.isShow = this.toCity
            this.isHide = !this.toCity
            console.log('toCity:'+this.toCity)
        },
        back: function(){
            this.$router.go(-1)
        },
        // 初始化音乐播放器
		initMusic () {
			musicApi.getMusicSheet('124995419')
  		},
  		initAudioEvent () {
  			const audio = store.getters.getAudioEle
  			console.log(this)
  			musicApi.initAudioEvent(this, audio)
  		},
        // 点击播放音乐
  		clickPlayList (id, name, pic, singer, duration, index, list) {
  			// alert(JSON.stringify(this.$route.params))
  			const data = {
  				id: id,
  				name: name,
  				pic: pic,
  				singer: singer,
  				duration: duration,
  				index: index,
  				list: store.getters.getMusicList
  			}
  			console.log(data)
  			console.log(this)
  			musicApi.clickIndex(data, this)
  		},
  		// 音乐时长格式
  		getMusicDurationType (time) {
  			return musicApi.getMusicDurationType(time)
  		}
    },
    components:{
        'music-bottom': musicBottom
    },
    computed: {
        musicList() {
        console.log(store)
            return store.getters.getMusicList
        },
  		getCurrentMusic () {
  		    console.log(store)
  			return store.getters.getCurrentAudio
  		},
  		getMusicLrcLists () {
  		    console.log(store)
  			return store.getters.getCurrentAudio.lyric
  		}
    },
    mounted () {
  		this.$nextTick(() => {
			// alert(JSON.stringify(this))
			console.log(this)
			this.initMusic()
			this.initAudioEvent()
		})
  	},
  	components: {
        'music-bottom': musicBottom
    },
}
</script>