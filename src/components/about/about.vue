<template>
    <div class="about">
        <div class="content">
            <ul>
                <router-link tag="a" to="/about/works">
                    <li>
                        <i></i>
                        <span>作品区</span>
                    </li>
                </router-link>

                <router-link tag="a" to="/about/label">
                    <li>
                        <i></i>
                        <span>个人标签</span>
                    </li>
                </router-link>

                <router-link tag="a" to="/about/musicList">
                    <li>
                        <i></i>
                        <span>音乐</span>
                    </li>
                </router-link>

                <router-link tag="a" to="/about/joke">
                    <li>
                        <i></i>
                        <span>笑话特辑</span>
                    </li>
                </router-link>

                <router-link tag="a" to="/about/contact">
                    <li>
                        <i></i>
                        <span>联系我</span>
                    </li>
                </router-link>
            </ul>
        </div>

        <!--<keep-alive>-->
            <!--<router-view></router-view>-->
        <!--</keep-alive>-->
    </div>
</template>
<style scoped>
    /*在这里写css样式*/
    .about {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
    }

    .content {
        color: #fff;
        max-width: 1200px;
        position: fixed;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%,-50%);
        -moz-transform: translate(-50%,-50%);
        -ms-transform: translate(-50%,-50%);
        -o-transform: translate(-50%,-50%);
        transform: translate(-50%,-50%);
    }

    ul a {
        width: 100%;
        display: inline-block;
        color: #fff;
        font-size: 18px;
        height: 35px;
        line-height: 35px;
        font-weight: 100;
    }

    ul a:hover {
        color: orangered;
        font-weight: bold;
    }
</style>
<script type="text/javascript-6"> 
// 这里写逻辑代码

</script>