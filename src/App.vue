<template>
    <div class="block">
        <h1>
            Игра "ЗАПОМНИ ЧИСЛО"
        </h1>

        <br>

        <Choice 
            v-if="ChoiceDisplay" 
            @start="start" 
        />
             
        <Workplace
            :data="{ showInput, number, displayNumber, inputClass }" 
            v-if="WorkPlaceDisplay" 
            @back="back" 
            @finishedInput="finishedInput" 
        />
    </div>
</template>

<script>
    import Choice from './components/Choice.vue'
    import Workplace from './components/Workplace.vue'

    export default {
       
        components: {
            Choice,
            Workplace,
        },

        data() {
            return {
                ChoiceDisplay: true,
                WorkPlaceDisplay: false,

                rank: '',
                time: '',

                showInput: true,

                displayNumber: false,
                number: 0,
                inputNumber: '',
                
                inputClass: null,

                successClass: {
                    border: 'solid 1px #0f0',
                    color:' #0f0',
                },
                errorClass: {
                    border: 'solid 1px #f00',
                    color:' #f00',
                }
            }
        },

        methods: {
            start(display, params) {
                this.rank = params[0].replace(/[sr]/g, '')
                this.time = params[1].replace(/[sr]/g, '')

                if(!this.rank || !this.time) {
                    return false
                } else {
                    const generateNumber = (from, to) => {
                        //Генерация случайного числа, НЕ ВКЛЮЧАЯ крайний верхний предел
                        return Math.floor(Math.random() * (to - from)) + from 
                    }

                    if(this.rank == 2) this.number = generateNumber(10, 100) // 10 - 99
                    else if(this.rank == 3) this.number = generateNumber(100, 1_000) // 100 - 999
                    else if(this.rank == 4) this.number = generateNumber(1_000, 10_000) // 1_000 - 9_999
                    else if(this.rank == 5 ) this.number = generateNumber(10_000, 100_000) // 10_000 - 99_999 

                    const showNumber = () => {
                        this.showInput = false
                        this.displayNumber = true

                        setTimeout(() => {
                            this.displayNumber = false
                            this.showInput = true
                        }, this.time*1000)
                    }
                    showNumber()
                }

                if(display) {
                    this.ChoiceDisplay = false
                    this.WorkPlaceDisplay = true
                }
            },

            back(display) {
                if(!display) {
                    this.ChoiceDisplay = true
                    this.WorkPlaceDisplay = false
                }
            },

            finishedInput(number) {
                this.inputNumber = number

                if(this.number == this.inputNumber) {
                    this.inputClass = this.successClass

                    setTimeout(() => {
                        this.inputClass = null
                    }, 700)
                } else {
                    this.inputClass = this.errorClass

                    setTimeout(() => {
                        this.inputClass = null 
                    }, 700)
                }
                setTimeout(() => this.start(true, [this.rank, this.time]), 1000)
            },
        }
    }
</script>

<style scoped>
    .block {
        display: block;
        margin-top: 10px;
        width: 50%;
        margin: 10px auto;
        padding: 15px;
        border: solid 1px #333;
        border-radius: 15px;
    }

    h1 {
        font-size: 2rem;
        text-align: center;
    }
</style>
