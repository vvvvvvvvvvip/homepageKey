<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <div id="example-4">
        <div>
            <input type="radio" id="one" value="One" v-model="picked">
            <label for="one">One</label>
            <br>
            <input type="radio" id="two" value="Two" v-model="picked">
            <label for="two">Two</label>
            <br>
            <span>单选Picked: {{ picked }}</span>
        </div>
        <div>
            <select v-model="selected" multiple style="width: 50px;">
                <option>A</option>
                <option>B</option>
                <option>C</option>
            </select>
            <br>
            <span>选择框Selected: {{ selected }}</span>
        </div>
        <div>
            <select v-model="downSelected">
                <option v-for="option in options" v-bind:value="option.value">
                    {{ option.text }}
                </option>
            </select>
            <span>下拉Selected: {{ downSelected }}</span>
        </div>
    </div>
</template>

<script type="text/javascript-6">
export default {
    data () {
        return {
            picked: '',
            selected: [ ],
            downSelected: 'A',
            options: [
                { text: 'One', value: 'A' },
                { text: 'Two', value: 'B' },
                { text: 'Three', value: 'C' }
            ]
        }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#example-4 div {
    margin-bottom: 30px;
}
</style>
