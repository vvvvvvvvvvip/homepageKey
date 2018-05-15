<template>
    <div class="label">
        <div @click="back()">
            <i class="back"></i>
        </div>
        <div class="middle-content">
            <h2 class="whiteText">个人标签</h2>
            <span class="whiteText tag">前端开发</span>
            <span class="whiteText tag">王者荣耀</span>
            <span class="whiteText tag">绝地求生</span>
            <span class="whiteText tag">95后</span>
            <span class="whiteText tag">Bootstrap</span>
            <span class="whiteText tag">努力上进</span>
            <span class="whiteText tag">有责任心</span>
            <span class="whiteText tag">直率</span>
            <h2 class="whiteText">技术标签</h2>
            <span class="whiteText tag">Javascript</span>
            <span class="whiteText tag">Jquery</span>
            <span class="whiteText tag">HTML5/CSS3</span>
            <span class="whiteText tag">Vuejs</span>
            <span class="whiteText tag">Bootstrap</span>
            <span class="whiteText tag">Materialize</span>
            <span class="whiteText tag">模块化</span>
        </div>
    </div>
</template>
<style scoped>
    .tag {
        width: 120px;
        height: 35px;
        line-height: 35px;
        box-shadow: inset 0 0 0 18px hsl(0,0%,35%);
        border-radius: 999px;
        border: 5px solid transparent;
        display: inline-block;
        margin: 5px;
    }
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
        max-width: 768px;
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