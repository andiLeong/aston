<template>

    <main class="lg:relative">
        <div class="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
            <div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
                <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-gray-200 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                    <span class="block xl:inline">The Best city living </span>
                    <span class="block text-sky-600 xl:inline"> you will get from DMCI</span>
                </h1>
                <p class="mt-3 max-w-md mx-auto text-lg text-gray-500 dark:text-gray-300 sm:text-xl md:mt-5 md:max-w-3xl"> Is the best provider of residential communities in the Philippines</p>
                <div class="mt-10 sm:flex sm:justify-center lg:justify-start">
                    <div class="rounded-md shadow">
                        <a href="https://www.dmcihomes.com/" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 md:py-4 md:text-lg md:px-10"> Buy Now </a>
                    </div>
<!--                    <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">-->
<!--                        <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"> Live demo </a>-->
<!--                    </div>-->
                </div>
            </div>
        </div>
        <div class="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
            <img class="absolute inset-0 w-full h-full object-cover" src="https://andiliang.sgp1.digitaloceanspaces.com/aston/dmci-header.webp" alt="">
        </div>
    </main>

<!--    feature -->
    <div class="relative bg-white dark:bg-gray-700 py-16 sm:py-24 lg:py-32">
        <div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 class="text-base font-semibold uppercase tracking-wider text-sky-600">Affordable price</h2>
            <p class="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-300 sm:text-4xl">Everything you need to deploy your app</p>
            <p class="mx-auto mt-5 max-w-prose text-xl text-gray-500">Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend condimentum id viverra nulla.</p>
            <div class="mt-12">
                <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    <div class="pt-6" v-for="feature in features" :ke="feature.name">
                        <div class="flow-root rounded-lg bg-gray-50 dark:bg-gray-600 px-6 pb-8">

                            <div class="-mt-6" >
                                <div>
                <span class="inline-flex items-center justify-center rounded-md bg-sky-500 p-3 shadow-lg">
                  <!-- Heroicon name: outline/cloud-upload -->
                  <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </span>
                                </div>
                                <h3 class="mt-8 text-lg font-medium tracking-tight text-gray-900 dark:text-white">{{feature.name}}</h3>
                                <p class="mt-5 text-base text-gray-500 dark:text-gray-200">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

<!--    stats-->
    <div class="bg-gray-200 dark:bg-gray-700  pt-12 sm:pt-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-4xl mx-auto text-center">
                <h2 class="text-3xl font-extrabold text-gray-900 dark:text-gray-200 sm:text-4xl">Trusted by developers from over 80 planets</h2>
                <p class="mt-3 text-xl text-gray-500 sm:mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus repellat laudantium.</p>
            </div>
        </div>
        <div class="mt-10 pb-12  sm:pb-16">
            <div class="relative">
                <div class="absolute inset-0 h-1/2 bg-gray-200 dark:bg-gray-700"></div>
                <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="max-w-4xl mx-auto">
                        <dl class="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                            <div class="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                                <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Pepperoni</dt>
                                <dd class="order-1 text-5xl font-extrabold text-sky-600"> <CountUp to="25894"/></dd>
                            </div>
                            <div class="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                                <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Delivery</dt>
                                <dd class="order-1 text-5xl font-extrabold text-sky-600"> <CountUp to="5869" /></dd>
                            </div>
                            <div class="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                                <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Calories</dt>
                                <dd class="order-1 text-5xl font-extrabold text-sky-600"><CountUp to="887" /></dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<script setup>
import CountUp from "../components/CountUp.vue";
import {ref} from "vue";

const features = ref([
    {name: 'Flexible payment term'},
    {name: 'Excellent quality'},
    {name: 'Excellent quality'},
    {name: 'Spacious space'},
    {name: 'Modern city life'},
    {name: 'Theme Development'},
])

</script>

<style scoped>

</style>