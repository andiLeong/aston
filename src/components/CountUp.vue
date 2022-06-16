<template>
    <span v-text="count" v-observe-visibility="visibilityChanged"></span>
</template>


<script setup>
import {ref, watch} from "vue";

const props = defineProps(['to'])
const count = ref(0);
const interval = ref(null);
const increment = ref(Math.ceil(props.to / 20));
const inView = ref(false);


watch(inView, newValue => {
    if (newValue) {
        interval.value = setInterval(() => start(), 40)
    }
})

function start() {
    if (increment.value + count.value >= props.to) {
        count.value = props.to
        return clearInterval(interval.value)
    }
    count.value += increment.value
}

function visibilityChanged(inViewNow) {
    if (inViewNow) {
        inView.value = true;
    }
}
</script>