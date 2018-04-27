<template>
    <div class="musicList">
        <p>{{message}}</p>
        <el-row class="setSize">
            <el-col :span="6"><div class="grid-content bg-purple">歌曲</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple-light">歌手</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"></div>专辑</el-col>
            <el-col :span="6"><div class="grid-content bg-purple-light">序数</div></el-col>
        </el-row>
        <div class="setBoxH">
            <!--id, name, pic, singer, duration, index, list-->
            <el-row class="setSize">
                <div :data-pic=song.url  v-for="(song,index) in tableData3" :key="song.id" @click="getMusicUrl(index)" ref="dataPic">
                    <el-col :span="6"><div class="grid-content bg-purple">{{song.name}}</div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple-light">{{song.singer}}</div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple"></div>{{song.type}}</el-col>
                    <el-col :span="6"><div class="grid-content bg-purple-light">{{song.id}}</div></el-col>
                </div>
            </el-row>
        </div>
    </div>
</template>
<style scoped>
    /*在这里写css样式*/
    .musicList {
        width: 80%;
    }

    .setBoxH {
        height: 350px;
        overflow: auto;
    }
    .setSize {
        height: 40px;
        line-height: 40px;
        font-size: 18px;
        cursor: pointer;
    }

    .el-col-6 {
        overflow: hidden;
        height: 40px;
    }

    /*定义滚动条宽高及背景，宽高分别对应横竖滚动条的尺寸*/
    .setBoxH::-webkit-scrollbar{
        width: 16px;
        height: 16px;
        background-color: #f5f5f5;
    }
    /*定义滚动条的轨道，内阴影及圆角*/
    .setBoxH::-webkit-scrollbar-track{
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        border-radius: 10px;
        background-color: #f5f5f5;
    }
    /*定义滑块，内阴影及圆角*/
    .setBoxH::-webkit-scrollbar-thumb{
        /*width: 10px;*/
        height: 20px;
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        background-color: #555;
    }
</style>
<script type="text/javascript-6">
import VueAudio from './audio'
// 这里写逻辑代码
 export default {
 props: ["message"],
    components: {
        'vue-audio': VueAudio
    },
    methods: {
        getMusicUrl(index) {
           this.$emit("transGetMusic",this.$refs.dataPic[index].getAttribute("data-pic"));
        },
  		// 点击播放音乐
  		clickPlayList (id, name, pic) {
  			// alert(JSON.stringify(this.$route.params))
  			const data = {
  				id: id,
  				name: name,
  				pic: pic
  			}
  			musicApi.clickIndex(data, this)
  		}
    },
    data() {
      return {
        tableData3: [{
		        "id": "1",
		        "name": "一千年以后",
		        "singer": "林俊杰",
		        "img_url": "http://oiq8j9er1.bkt.clouddn.com/music_%E5%A5%B9%E8%AF%B4.jpg",
		        "url": "http://www.daiwei.org/vue/music/%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E4%B8%80%E5%8D%83%E5%B9%B4%E4%BB%A5%E5%90%8E.mp3",
		        "type": "华语 林俊杰",
		    	"lyric": ""
		    },
		    {
		        "id": "2",
		        "name": "那些你很冒险的梦",
		        "singer": "林俊杰",
		        "img_url": "http://oiq8j9er1.bkt.clouddn.com/music_%E9%82%A3%E4%BA%9B%E4%BD%A0%E5%BE%88%E5%86%92%E9%99%A9%E7%9A%84%E6%A2%A6.jpg",
		        "url": "http://www.daiwei.org/vue/music/%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E9%82%A3%E4%BA%9B%E4%BD%A0%E5%BE%88%E5%86%92%E9%99%A9%E7%9A%84%E6%A2%A6.mp3",
		        "type": "华语 林俊杰",
		    	"lyric": ""
		    },
		    {
		        "id": "3",
		        "name": "可惜没如果",
		        "singer": "林俊杰",
		        "img_url": "http://oiq8j9er1.bkt.clouddn.com/music_%E5%8F%AF%E6%83%9C%E6%B2%A1%E6%9C%89%E5%A6%82%E6%9E%9C.jpg",
		        "url": "http://www.daiwei.org/vue/music/%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E5%8F%AF%E6%83%9C%E6%B2%A1%E5%A6%82%E6%9E%9C.mp3",
		        "type": "华语 林俊杰",
		    	"lyric": ""
		    },
		    {
		        "id": "4",
		        "name": "她说",
		        "singer": "林俊杰",
		        "img_url": "http://oiq8j9er1.bkt.clouddn.com/music_%E5%A5%B9%E8%AF%B4.jpg",
		        "url": "http://www.daiwei.org/vue/music/林俊杰 - 她说.mp3",
		        "type": "华语 林俊杰",
		    	"lyric": ""
		    },
		    {
		        "id": "5",
		        "name": "修炼爱情",
		        "singer": "林俊杰",
		        "img_url": "http://oiq8j9er1.bkt.clouddn.com/music_%E4%BF%AE%E7%82%BC%E7%88%B1%E6%83%85.jpg",
		        "url": "http://www.daiwei.org/vue/music/%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E4%BF%AE%E7%82%BC%E7%88%B1%E6%83%85.mp3",
		        "type": "华语 林俊杰",
		    	"lyric": ""
		    },
		    {
		        "id": "6",
		        "name": "当你",
		        "singer": "林俊杰",
		        "img_url": "http://oiq8j9er1.bkt.clouddn.com/music_%E5%A5%B9%E8%AF%B4.jpg",
		        "url": "http://www.daiwei.org/vue/music/%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E5%BD%93%E4%BD%A0.mp3",
		        "type": "华语 林俊杰",
		    	"lyric": ""
		    },
		    {
		        "id": "7",
		        "name": "不为谁而作的歌",
		        "singer": "林俊杰",
		        "img_url": "http://oiq8j9er1.bkt.clouddn.com/music_%E5%A5%B9%E8%AF%B4.jpg",
		        "url": "http://www.daiwei.org/vue/music/%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E4%B8%8D%E4%B8%BA%E8%B0%81%E8%80%8C%E4%BD%9C%E7%9A%84%E6%AD%8C.mp3",
		        "type": "华语 林俊杰",
		    	"lyric": ""
		    },
		    {
		        "id": "8",
		        "name": "爱笑的眼睛",
		        "singer": "林俊杰",
		        "img_url": "http://oiq8j9er1.bkt.clouddn.com/music_%E6%88%91%E8%BF%98%E6%83%B3%E5%A5%B9.jpg",
		        "url": "http://www.daiwei.org/vue/music/%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E7%88%B1%E7%AC%91%E7%9A%84%E7%9C%BC%E7%9D%9B.mp3",
		        "type": "华语 林俊杰",
		    	"lyric": ""
		    },
		    {
		        "id": "9",
		        "name": "江南",
		        "singer": "林俊杰",
		        "img_url": "http://oiq8j9er1.bkt.clouddn.com/music_%E6%B1%9F%E5%8D%97.jpg",
		        "url": "http://www.daiwei.org/vue/music/%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E6%B1%9F%E5%8D%97.mp3",
		        "type": "华语 林俊杰",
		    	"lyric": ""
		    },
		    {
		        "id": "10",
		        "name": "我还想她",
		        "singer": "林俊杰",
		        "img_url": "http://oiq8j9er1.bkt.clouddn.com/music_%E6%88%91%E8%BF%98%E6%83%B3%E5%A5%B9.jpg",
		        "url": "http://www.daiwei.org/vue/music/%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E6%88%91%E8%BF%98%E6%83%B3%E5%A5%B9.mp3",
		        "type": "华语 林俊杰",
		    	"lyric": ""
		    },
		    {
		        "id": "11",
		        "name": "Fade（LaRry Rong Remix）",
		        "singer": "LaRry Rong",
		        "img_url": "http://oiq8j9er1.bkt.clouddn.com/music_faded-1.jpg",
		        "url": "http://oiq8j9er1.bkt.clouddn.com/LaRry%C2%A0Rong%20-%20Fade%EF%BC%88LaRry%20Rong%20Remix%EF%BC%891.mp3",
		        "type": "纯音乐 电音",
		    	"lyric": ""
		    }]
      }
    }
  }
</script>