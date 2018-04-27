<template>
    <div class="musicBottom">
        <img class="singerPic" :src="getCurrentMusic.picurl ? getCurrentMusic.picurl : '../../../../assets/logo.png'" alt=""/>
        <div class="rightSide whiteText">
            <div class="songName">{{ getCurrentMusicName }}</div>

            <div class="progress">
                <div class="duration" @click="clickProgress" id="music_progressD">
                    <div class="progressLine" :style="{width:`${bufferingP}%`}"></div>
                    <div class="progressDot" :style="{width:getMusicPro}"></div>
                </div>
                <div class="range"  :style="{left:`${getMusicPro}`}"></div>
            </div>
            <div class="controls">
                <div class="pre" @click="prePlay"></div>
                <div :class="playJudge ? 'pause': 'play'" @click.stop="judge()"></div>
                <div class="next" @click="nextPlay"></div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    /*在这里写css样式*/
    .songName {
        color: darkseagreen;
        font-weight: bolder;
        font-size: 20px;
    }

    .progress {
        position: relative;
        width: calc(90% - 110px);
        margin: 0 auto;
    }

    .duration {
        width: 100%;
        height: 2px;
        position: relative;
        background: hsla(0,0%,100%,.1);
        border-radius: 1px;
        top: 25px;
    }

    .progressLine {
        width: 20%;
        height: 100%;
        background: hsla(0,0%,100%,.2);
        border-radius: 1px;
        position: absolute;
        top: 0;
        left: 0;
        transition: width .3s;
    }

    .progressDot {
        width: 10%;
        position: absolute;
        height: 100%;
        left: 0;
        background: red;
        border-radius: 1px;
    }

    .range {
        width: 6px;
        height: 6px;
        margin-top: -3px;
        margin-left: 0;
        border-radius: 50%;
        background-color: red;
        position: absolute;
        left: 0;
        top: 25px;
        z-index: 2;
        cursor: pointer;
    }

    .controls div {
        width: 40px;
        height: 40px;
        display: inline-block;
        cursor: pointer;
    }

    .play {
        background: url("../../../../assets/play.png") center center no-repeat;
        background-size: 100%;
    }

    .pause {
        background: url("../../../../assets/pause.png") center center no-repeat;
        background-size: 100%;
    }

    .pre {
        background: url("../../../../assets/pre.png") center center no-repeat;
        background-size: 100%;
    }

    .next {
        background: url("../../../../assets/next.png") center center no-repeat;
        background-size: 100%;
    }

    .musicBottom {
        position: fixed;
        bottom: 0;
        padding: 10px 15px;
        width: 100%;
        max-width: 1000px;
        left: 50%;
        -webkit-transform:  translateX(-50%);
        -moz-transform:  translateX(-50%);
        -ms-transform:  translateX(-50%);
        -o-transform:  translateX(-50%);
        transform:  translateX(-50%);
    }

    .singerPic {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
    }
    
    .controls {
        position: absolute;
        left: 50%;
        -webkit-transform: translateX(-50%);
        -moz-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        -o-transform: translateX(-50%);
        transform: translateX(-50%);
        bottom: 5px;
    }

    .controls img:nth-child(2) {
        margin: 0 15px;
    }

    .controls img {
        width: 40px;
        height: 40px;
    }

    .rightSide {
        height: 105px;
    }

    @media screen and (max-width: 768px) {
        .singerPic {
            width: 55px;
            height: 55px;
            position: absolute;
            left: 25px;
            bottom: 60px;
            top: 0;
            transform: none;
        }
    }
</style>
<script type="text/javascript-6">
import store from '../../../../vuex/index'
import musicApi from '../music.js'
// 这里写逻辑代码
export default {
    props: {
        bufferingP: ""
    },
    data (){
        return {
        }
    },
    methods: {
        judge(){
            musicApi.playPause()
        },
        clickProgress(e) {
            musicApi.clickProgress(e)
        },
        nextPlay (){
            musicApi.nextOrPrePlay(this,true)
        },
        prePlay (){
            musicApi.nextOrPrePlay(this,false)
        }
    },
    computed: {
        playJudge() {
  			return store.getters.getAudioIsPlay
  		},
  		getCurrentMusic () {
  			return store.getters.getCurrentAudio
  		},
  		getMusicPro () {
  		  	return Number(store.getters.getCurrentD).toFixed(2) + '%'
  		},
  		getCurrentTime () {
			return store.getters.getCurrentTime
  		},
  		getCurrentMusicName () {
  		    return store.getters.getCurrentAudio.name
  		}
    }
}
</script>