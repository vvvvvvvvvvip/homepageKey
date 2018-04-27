<template>
    <div class="label">
        <div @click="back()">
            <i class="back"></i>
        </div>
        <div class="middle-content">qwesd</div>
    </div>
</template>
<style scoped>
    /*在这里写css样式*/
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

    .label {
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