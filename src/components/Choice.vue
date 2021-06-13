<template>
    <form action="#">
        <div class="container">
            <h2>
                Выберите разрядность числа:
            </h2>
            <ChoiceBox 
                v-for="prop in numberRankProps" 
                :key="prop.id" 
                :data="prop"
                @chosen="chosen"
            />
            <h2>
                Выберите время показа:
            </h2>
            <ChoiceBox 
                v-for="prop in showTimeProps" 
                :key="prop.id" 
                :data="prop" 
                @chosen="chosen" 
            />
            <button @click="start">
                Старт
            </button>
        </div>
    </form>
</template>

<script>
    import ChoiceBox from './ChoiceBox.vue' 
    // import getNumberRankProps from '../assets/getNumberRankProps'
    import radioButtonProps from '../assets/radioButtonProps'
    // import showTime from '../assets/showTime'

    const numberRankProps = radioButtonProps.numberRankProps
    const showTimeProps = radioButtonProps.showTimeProps
    
    export default {
        name: 'Choice',

        data() {
            return {
                numberRankProps: numberRankProps,
                showTimeProps: showTimeProps,

                choosenParams: ['', ''],
                display: true
            }
        },

        components: {
            ChoiceBox
        },

        methods: {
            chosen(picked) {
                if(picked.includes('r')) {
                    this.choosenParams[0] = picked
                } else {
                    this.choosenParams[1] = picked
                }
            },

            start() {
                this.$emit('start', this.display, this.choosenParams)
            }
        }
    }
</script>

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
</style>