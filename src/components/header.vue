<template>
    <div id="header">
        <header class="header">
            <h3>{{message}}</h3>
        </header>
    </div>
</template>
<style scoped>
    /*在这里写css样式*/
    #header {
        height: 48px;
        line-height: 48px;
        background-color: orange;
    }

    #header h3 {
        margin: 0;
        color: #fff;
    }
</style>
<script type="text/javascript-6">
// 这里写逻辑代码
export default {
    props:["message"]
};

</script>