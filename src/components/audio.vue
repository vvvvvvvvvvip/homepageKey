<template>
    <div class="audio">
        <audio controls="controls"></audio>​
    </div>
</template>
<style scoped>
    /*在这里写css样式*/
    .audio {
        position: absolute;
        right: 0;
    }
</style>
<script type="text/javascript-6">
import store from '../vuex/index';

// 这里写逻辑代码
export default {

    computed: {
        getCurrentMusic () {
            return store.getters.getCurrentAudio
        }
    },

}
</script>