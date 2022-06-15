<template>
    <span v-text="count" v-observe-visibility="visibilityChanged"></span>
</template>

<script>


export default {
    props: ['to'],

    data() {
        return {
            count: 0,
            interval: null,
            inView: false
        };
    },

    computed: {
        increment() {
            return Math.ceil(this.to / 30);
        }
    },

    watch:{
        inView(newValue){
           if(newValue){
               this.interval = setInterval(this.tick, 40);
           }
        }
    },

    methods: {
        tick() {
            if (this.count + this.increment >= this.to) {
                this.count = this.to;

                return clearInterval(this.interval);
            }

            this.count += this.increment;
        },
        visibilityChanged(inView) {
            if(inView){
                console.log('in view now')
                this.inView = true
            }

        }
    }
};
</script>