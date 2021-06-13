<template>
    <div>
        <input 
            type="radio" 
            :id="data.id" 
            :name="data.name" 
            v-model="picked" 
            :value="data.id" 
            @change="chosen"
        >
        <label 
            :for="data.for"
        > 
            {{ data.label }} 
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