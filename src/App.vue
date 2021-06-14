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
        <div 
            id="number" 
            v-if="displayNumber"
        >    
            {{ number }}
        </div>
             
        <Workplace 
            v-if="WorkPlaceDisplay" 
            @back="back" 
            @finishedInput="finishedInput" 
            :disabled="disableInput"
        />
        <div 
            id="truth" 
            v-if="truth"
        >
            {{ truthValue }}
        </div>
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
                disableInput: false,
                rank: '',
                time: '',
                WorkPlaceDisplay: false,
                displayNumber: false,
                number: 0,
                inputNumber: '',
                truth: false,
                truthValue: '',
                recursive: false
            }
        },

        methods: {
            start(display, params) {
                const rank = params[0].replace(/[sr]/g, ''),
                    time = params[1].replace(/[sr]/g, '')

                this.rank = rank
                this.time = time

                if(!this.rank || !this.time) return false

                const generateNumber = (from, to) => {
                    //Генерация случайного числа, НЕ ВКЛЮЧАЯ крайний верхний предел
                    const randomNum = Math.floor(Math.random() * (to - from)) + from 
                    return randomNum
                }

                if(rank == 2) this.number = generateNumber(10, 100) // 10 - 99
                else if(rank == 3) this.number = generateNumber(100, 1_000) // 100 - 999
                else if(rank == 4) this.number = generateNumber(1_000, 10_000) // 1_000 - 9_999
                else if(rank == 5 ) this.number = generateNumber(10_000, 100_000) // 10_000 - 99_999 

                const showNumber = () => {
                    this.displayNumber = true
                    this.disableInput = true
                    setTimeout(() => {
                        this.displayNumber = false
                        this.disableInput = false
                    }, time*1000)
                }
                showNumber()
                
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
                    this.truth = true
                    this.truthValue = 'ВЕРНО!'

                    setTimeout(() => {
                        this.truth = false
                        this.truthValue = ''
                    }, 700)
                } else {
                    this.truth = true
                    this.truthValue = `НЕПРАВИЛЬНО, ${this.number}`

                    setTimeout(() => {
                        this.truth = false
                        this.truthValue = ''
                    }, 1500)
                }
                setTimeout(() => this.start(true, [this.rank, this.time]), 1550)
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
