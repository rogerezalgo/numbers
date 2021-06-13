<template>
    <div>
        <input 
            type="text" 
            v-model="number" 
            @keyup.enter="finishedInput"
        />
        <button @click="finishedInput">
            ОК
        </button>
        <button @click="back">
            Назад
        </button>
    </div>
</template>

<script>
    export default {
        name: 'Workplace',

        data() {
            return {
                display: false,
                number: '',
            }
        },

        methods: {
            back() {
                this.$emit('back', this.display)
            },

            finishedInput() {
                this.$emit('finishedInput', this.number)
                this.number = ''
            },
        }
    }
</script>