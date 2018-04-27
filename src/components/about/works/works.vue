<template>
    <div class="works">
        <div @click="back()">
            <i class="back"></i>
        </div>
        <div class="addBox">
            <ul class="middle-content">
                <h2>页面布局展示</h2>
                <li class="center" v-for="(item,index) in workInfo" :key="item.id">
                    <span :title="item.workName">{{ item.workName }}</span>
                    <div class="linkBox">
                        <a target="item.address" :href="item.address">演示地址</a>
                        <a target="item.projectAddress" :href="item.projectAddress">项目地址</a>
                    </div>
                </li>
                <h2>jquery系列</h2>
                <li class="center" v-for="(item,index) in jquery" :key="item.id">
                    <span :title="item.workName">{{ item.workName }}</span>
                    <div class="linkBox">
                        <a target="item.address" :href="item.address">演示地址</a>
                        <a target="item.projectAddress" :href="item.projectAddress">项目地址</a>
                    </div>
                </li>
                <h2>animation</h2>
                <li class="center" v-for="(item,index) in animation" :key="item.id">
                    <span :title="item.workName">{{ item.workName }}</span>
                    <div class="linkBox">
                        <a target="item.address" :href="item.address">演示地址</a>
                        <a target="item.projectAddress" :href="item.projectAddress">项目地址</a>
                    </div>
                </li>
                <h2>vue系列</h2>
                <li class="center" v-for="(item,index) in vue" :key="item.id">
                    <span :title="item.workName">{{ item.workName }}</span>
                    <div class="linkBox">
                        <a target="item.address" :href="item.address">演示地址</a>
                        <a target="item.projectAddress" :href="item.projectAddress">项目地址</a>
                    </div>
                </li>
            </ul>
        </div>
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
        padding: 0 15px 15px;
    }

    a {
        color: #fff;
        list-style: none;
        text-decoration: none;
        font-weight: lighter;
        font-size: 14px;
    }

    ul li {
        width: 100%;
        line-height: 40px;
        text-align: left;
        font-weight: 200;
        font-size: medium;
        color: #f0f0f0;
        display: flex;
        margin: 0;
    }

    ul li span {
        -webkit-box-flex: 1;
        -ms-flex: 0 1 auto;
        flex: 0 1 auto;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        width: 12%;
        font-size: 14px;
    }

    h2 {
        color: #fff;
        text-align: left;
        margin-top: 5px;
    }

    .center {
        text-align: center;
    }

    .linkBox {
        -ms-flex: 1 1 auto;
        flex: 1 1 auto;
        text-align: right;
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

    .works {
        width: 90%;
        padding: 0 20px;
        margin: 0 auto;
    }

    @media screen and (max-width: 768px) {
        ul li span {
            width: 64px;
        }
    }
</style>
<script type="text/javascript-6"> 
// 这里写逻辑代码
    let serverUrl = 'https://vvvvvvvvvvip.github.io'  //本地调试时

export default {
    data (){
        return {
            workInfo: [],
            jquery: [],
            vue: [],
            animation: []
        }
    },
    methods: {
        back: function(){
            this.$router.go(-1)
        }
    },
    created(){
        this.$http.get(serverUrl + '/new/dist/static/data.json').then((response) => {
            console.log(response)
            this.workInfo = response.data.workList.page
            this.jquery = response.data.workList.jquery
            this.animation = response.data.workList.animation
            this.vue = response.data.workList.vue
        }, response => {
            console.log("error");
        });
    }
}

</script>