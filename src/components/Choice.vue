<template>
    <form @submit.prevent="start">
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
            <button 
                type="submit"
                class="btn btn-primary"
            >
                Старт
            </button>
        </div>
    </form>
</template>

<script>
    import ChoiceBox from './ChoiceBox.vue' 
    import radioButtonProps from '../assets/radioButtonProps'

    const numberRankProps = radioButtonProps.numberRankProps
    const showTimeProps = radioButtonProps.showTimeProps
    
    export default {
        name: 'Choice',

        data() {
            return {
                numberRankProps: numberRankProps,
                showTimeProps: showTimeProps,

                chosenParams: ['', ''],
                display: true
            }
        },

        components: {
            ChoiceBox
        },

        methods: {
            chosen(picked) {
                if(picked.includes('r')) {
                    this.chosenParams[0] = picked
                } else {
                    this.chosenParams[1] = picked
                }
            },

            start() {
                this.$emit('start', this.display, this.chosenParams)
            }
        }
    }
</script>

<style scoped>
    .container {
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    h2 {
        margin-top: 30px;
        font-size: 1.65rem;
    }
   
    button {
        display: flex;
        margin-top: 50px;
        width: 125px;
        height: 35px;
        justify-content: center;
        align-items: center;
    }
</style>