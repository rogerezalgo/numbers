<template>
    <div>
        <input 
            type="radio"
            class="form-check-input" 
            :id="data.id" 
            :name="data.name" 
            v-model="picked" 
            :value="data.id" 
            @change="chosen"
        >
        <label 
            :for="data.id"
            class="form-check-label"
        > 
            <span>&nbsp;</span>{{ data.label }} 
        </label>
    </div>
</template>

<script>
    export default {
        name: 'ChoiceBox',
        
        props: {
            data: {
                type: Object,
                require: true,
            },
        },

        data() {
            return{
                picked: '',
            }
        },

        methods: {
            chosen() {
                this.$emit('chosen', this.picked)
            },
        }
    }
</script>

<style scoped>
    [type="radio"], label {
        font-size: 18px;
        cursor: pointer
    }
    div {
        display: block;
        margin: 0 auto;
        width: 150px;
        padding-left: 20px
    }
</style>