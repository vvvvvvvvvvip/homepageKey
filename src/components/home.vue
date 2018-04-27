<template>
    <div class="home">
        <div class="home_center">
            <div class="home_content">
                <h1 class="title" key="title">
                    {{bingInfo.title}}
                    <!--{{imageInfo.title}}-->
                    <span class="date">{{ formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss').split(' ')[0] }}</span>
            <!--<span class="playpause" @click="playpause" v-if="imageInfo.musicUrl" :title="imageInfo.musicName">-->
              <!--<i class="icon-volume-medium"></i>{{isPlay ? '暂停' : '播放'}}-->
            <!--</span>-->
                </h1>
                <p class="disc" key="disc">{{bingInfo.para1}}</p>
            </div>
        </div>
        <span class="tips">
            {{ getBingPic }}
        </span>
    </div>
</template>
<style scoped>
    .disc,.title {
        text-align: left;
        color: #fff;
        letter-spacing: 1px;
    }

    .disc {
        line-height: 30px;
        font-size: 14px;
        font-weight: 100;
        letter-spacing: 2px;
        margin-top: 30px;
    }

    h1 {
        font-size: 24px;
        font-weight: bold;
    }

    .date {
        margin-left: 50px;
        font-size: 18px;
        font-weight: 100;
    }
    
    .home_center {
        padding: 10%;
        max-width: 1200px;
        max-height: 400px;
        position: absolute;
        left: 0;
        right: 0;
        top: 20%;
        bottom: 0;
        margin: auto;
    }

    .home .tips {
        color: #fff;
        width: 100%;
        position: absolute;
        display: block;
        bottom: 20px;
    }

    @media screen and (max-width: 414px) {
        .home_center {
            top: 0;
        }
        
        .disc,.title {
            text-align: center;
        }

        .date {
            margin-left: 0;
            display: block;
            margin-top: 30px;
        }
    }
</style>
<script type="text/javascript-6">
import store from '../vuex/index';

export default {
    methods: {
        formatDate: function (data, fmt) {
            var o = {
                'M+': data.getMonth() + 1,                 // 月份
                'd+': data.getDate(),                    // 日
                'h+': data.getHours(),                   // 小时
                'm+': data.getMinutes(),                 // 分
                's+': data.getSeconds(),                 // 秒
                'q+': Math.floor((data.getMonth() + 3) / 3), // 季度
                'S': data.getMilliseconds()             // 毫秒
            }
            if (/(y+)/.test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (data.getFullYear() + '').substr(4 - RegExp.$1.length))
            }
            for (var k in o) {
                if (new RegExp('(' + k + ')').test(fmt)) {
                    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
                }
            }
        return fmt
        }
    },
    computed: {
        getBingPic(){
            return "每日一图由 bing 提供"
        },
        bingInfo(){
            return this.$store.getters.getBingInfo
        }
    }
}
</script>