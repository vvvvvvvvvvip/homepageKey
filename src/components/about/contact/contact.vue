<template>
    <div class="contact">
        <div @click="back()">
            <i class="back"></i>
        </div>
        <div class="ErWeiMa middle-content">
            <img src="../../../assets/qq.jpg" alt="TIM二维码" title="TIM二维码"/>
            <img src="../../../assets/weixin.jpg" alt="微信二维码" title="微信二维码"/>
            <div class="phone whiteText">手机号：18334795012</div>
            <div class="emial whiteText">邮箱：18334795012@163.com </br>1748872910@qq.com</div>
        </div>
    </div>
</template>
<style scoped>
    /*在这里写css样式*/
    .whiteText {
        color: #ffffff;
    }

    .phone {
        margin-top: 20px;
    }

    .middle-content::-webkit-scrollbar {/*滚动条整体样式*/
        width: 4px;     /*高宽分别对应横竖滚动条的尺寸*/
        height: 4px;
    }
    .middle-content::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
        border-radius: 5px;
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        background: rgba(0,0,0,0.2);
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

    .ErWeiMa {
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
    }

    .ErWeiMa img {
        width: 180px;
        height: 180px;
        margin: 0 5px 15px;
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

    .contact {
        width: 90%;
        padding: 0 20px;
        margin: 0 auto;
    }
</style>
<script type="text/javascript-6"> 
// 这里写逻辑代码
export default {
    methods: {
        back: function(){
            this.$router.go(-1)
        }
    }
}
</script>