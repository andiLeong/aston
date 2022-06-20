<template>
    <metainfo>
        <template v-slot:title="{ content }">{{ content ? `${content}` : `DMCI Aston for sale | pasay condo for sale | dmci project for sale ` }}</template>
    </metainfo>

    <div :class="myTheme" class="flex flex-col items-stretch min-h-screen" v-cloak>
        <TheNavigation @change="myTheme = $event"></TheNavigation>

        <div class="flex-1 dark:bg-gray-800">
            <router-view :key="$route.path"></router-view>
        </div>

        <TheFooter />
    </div>
</template>

<script setup>
import TheNavigation from '@/components/TheNavigation.vue';
import TheFooter from "@/components/TheFooter.vue"
import { ref } from 'vue';
import { useMeta } from 'vue-meta'
import {useThemeStore} from '@/store/theme'
const myTheme = ref();
useThemeStore().setLocalTheme(myTheme)

useMeta({
    title: 'DMCI the best condo provider in the Philippines | DMCI Aston for sale |  dmci project for sale ',
    description: 'DMCI the best condo builder in the ph, it provide a variety of theme for condo, its location spreading the philippines.',
    htmlAttrs: { lang: 'en' }
})


</script>