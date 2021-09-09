<template>
    <h1>Counter - Vuex</h1>
    <h2>Direct Access: {{ $store.state.counter.count }}</h2>
    <h2>Computed: {{ countComputed }}</h2>
    
    <button @click="increment">+1</button>
    <button @click="incrementBy">+5</button>

    <!-- <button @click="incrementRandomInt" :disabled="isLoading">Random</button> -->
    <button @click="randomInt" :disabled="isLoading">Random</button>
    
    <button @click="reset">Reset</button>
    
    <h1>mapState</h1>
    <h2>mapState: {{ count  }}</h2>
    
    <h2>lastMutation: {{ lastMutation }}</h2>
    
    <h2>Direct getter: {{ $store.getters['counter/squareCount'] }}</h2>
    
    
</template>

<script>

import { mapState, mapActions } from 'vuex'

export default {
    
    computed: {
        countComputed(){
            return this.$store.state.counter.count
        },
        ...mapState('counter', ['count', 'lastMutation', 'isLoading']),
        
        // ...mapState({
        //     count: state => state.count  //Por si se requiere renombrar una propiedad
        // })
    },
    methods: {
        increment(){
            this.$store.commit('counter/increment')
        },
        incrementBy(){
            this.$store.commit('counter/incrementBy', 5)
            //this.randomInt() //Se pueden ejecutar las acciones mapeadas
        },
        reset(){
            this.$store.commit('counter/reset')
        },
        // ...mapActions('counter', ['incrementRandomInt']) //Para no crear un nuevo metodo
        
        ...mapActions('counter', {
            randomInt: 'incrementRandomInt' //Para poder renombrar un metodo, y evitar conflictos
        })
        // incrementRandomInt(){
        //     this.$store.dispatch( 'incrementRandomInt')
        // }
    },
    
    // computed: mapState(['count'])
}
</script>

