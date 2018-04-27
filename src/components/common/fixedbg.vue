<template>
    <div class="fixedbg" ref="fixedbg"
         :style="{backgroundImage : 'url(' + imagePath + ')', backgroundSize:imagesize, backgroundPosition:imageposition}">
        <div class="mask-fixedbg"></div>
    </div>
</template>
<style scoped>
    /*在这里写css样式*/
    .fixedbg {
        position: fixed;
        z-index: -2;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    .fixedbg:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #000;
        opacity: 0;
        visibility: hidden;
        transition: all 0.5s;
    }

    .mask-fixedbg {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: -webkit-radial-gradient(50% 50%, ellipse closest-corner, rgba(0, 0, 0, 0) 10%, rgb(0, 0, 0) 90%);
        opacity: 0.9;
    }
</style>
<script type="text/javascript-6"> 
// 这里写逻辑代码
       let serverUrl = '/api/'  //本地调试时
export default {

    props: {
        imagePath: ""
    },
    data () {
        return {
            imagesize: 'cover',
            imageposition: 'center center'
        }
    },
    created() {

    },
    methods: {

    }
}
</script>