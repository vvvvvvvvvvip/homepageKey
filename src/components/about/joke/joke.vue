<template>
    <div class="joke">
        <div @click="back()">
            <i class="back"></i>
        </div>
        <div class="middle-content">
            <div class="jokeList whiteText" v-for="joke in jokeList" :key="joke.index">
                <p class="leftText" v-html="joke.content"></p>
                <h5 class="rightText">摘自<<{{ joke.title }}>></h5>
            </div>
        </div>
    </div>
</template>
<style scoped>
    /*在这里写css样式*/
    .jokeList {
        border-bottom: 1px solid hsla(0,0%,100%,.3);
        padding: 10px 10px 0;
    }

    .jokeList:hover {
        background: rgba(0,0,0,.3);
    }

    p {
        font-weight: lighter;
    }
    .middle-content::-webkit-scrollbar {/*滚动条整体样式*/
        width: 4px;     /*高宽分别对应横竖滚动条的尺寸*/
        height: 4px;
    }
    .middle-content::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
        border-radius: 5px;
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        background: rgba(255,255,255,0.2);
    }
    .middle-content::-webkit-scrollbar-track {/*滚动条里面轨道*/
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        border-radius: 0;
        background: rgba(0,0,0,0.1);
    }

    .middle-content{
        overflow-y: auto;
        position: fixed;
        top: 80px;
        bottom: 50px;
        left: 50%;
        max-width: 1240px;
        width: 100%;
        -webkit-transform: translate3d(-50%,0,0);
        transform: translate3d(-50%,0,0);
        margin: 0 auto;
        box-sizing: border-box;
        -webkit-overflow-scrolling: touch;
        padding: 15px;
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

    .joke {
        width: 90%;
        padding: 0 20px;
        margin: 0 auto;
    }
</style>
<script type="text/javascript-6"> 
// 这里写逻辑代码
export default {
    data(){
        return {
            jokeList: {}
        }
    },
    methods: {
        back: function(){
            this.$router.go(-1)
        }
    },
    created (){
        this.$http.get('http://www.daiwei.org/vue/server/home.php?inAjax=1&do=getJokeInfo').then(response => {
            console.log(response)
            this.jokeList = response.body
        })
    }
}
</script>