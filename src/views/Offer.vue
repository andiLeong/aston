<template>

    offer
    <main class="my-28 mx-auto max-w-7xl px-4 sm:px-6 ">
        <div class="lg:grid lg:grid-cols-12 lg:gap-8">
            <div class="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                <h1>
                    <span
                        class="block text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">Turn Over in 2 Years</span>
                    <span class="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                          <span class="block text-gray-900 dark:text-white">Connect your city lifer Now</span>
                          <span class="block text-sky-600">The ASTON Place</span>
                    </span>
                </h1>
                <p class="mt-3 text-base text-gray-500 dark:text-gray-100 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">Turning over in 2024,
                    The Aston Place is the perfect choice if you looking for a convenient and well-balanced lifestyle.
                    This high rise condo located Dominga St., Pasay City, offering you options to connect to business districts, shopping malls, distinguished schools and other key areas.
               </p>
            </div>
            <div
                class="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                <iframe class="w-full h-80"
                        src="https://www.youtube.com/embed/1mjEJQjW84c" frameborder="0" allowfullscreen>
                </iframe>
            </div>
        </div>
    </main>




</template>

<script setup>

import {ref} from "vue";
import {useMeta} from "vue-meta";

useMeta({
    title: 'dmci aston for sale | pasay high rise condo for sale | why aston to buy',
    description: 'aston is one of the high rise condo from dmci, why you should buy it , it connects you to to business districts, shopping malls, distinguished schools, hospitals and other convenient key area',
    htmlAttrs: { lang: 'en', amp: true }
})

const facilities = ref([
    {name:'Kiddie Pool', url: 'https://andiliang.sgp1.digitaloceanspaces.com/aston/The%20Aston%20Place-Kiddie%20Pool-small.jpg'},
    {name:'Lap Pool', url: 'https://andiliang.sgp1.digitaloceanspaces.com/aston/The%20Aston%20Place-Lap%20Pool-small.jpg'},
    {name:'Leisure Pool', url: 'https://andiliang.sgp1.digitaloceanspaces.com/aston/The%20Aston%20Place-Leisure%20Pool-small.jpg'},
    {name:'Lounge Area', url: 'https://andiliang.sgp1.digitaloceanspaces.com/aston/The%20Aston%20Place-Lounge%20Area-small.jpg'},
    {name:'Sky Patio', url: 'https://andiliang.sgp1.digitaloceanspaces.com/aston/The%20Aston%20Place-Sky%20Patio-small.jpg'},
    {name:'Amenity Area', url: 'https://andiliang.sgp1.digitaloceanspaces.com/aston/The%20Aston%20Place-Amenity%20Area-small.jpg'},
    {name:'Drop off', url: 'https://andiliang.sgp1.digitaloceanspaces.com/aston/The%20Aston%20Place-Drop-off-small.jpg'},
    {name:'Atrium', url: 'https://andiliang.sgp1.digitaloceanspaces.com/aston/The%20Aston%20Place-Atrium-small.jpg'},
    {name:'Sky Promenade', url: 'https://andiliang.sgp1.digitaloceanspaces.com/aston/The%20Aston%20Place-Sky%20Promenade-small.jpg'},
]);

const siteProgress = ref([
    {month:'May', percentage:'32.6%', url: 'https://andiliang.sgp1.digitaloceanspaces.com/aston/The%20Aston%20Place-site-progress-data-may-large.jpg'},
    {month:'April', percentage:'31.28%', url: 'https://andiliang.sgp1.digitaloceanspaces.com/aston/The%20Aston%20Place-site-progress-data-april-large.png'},
    {month:'March', percentage:'28.11%', url: 'https://andiliang.sgp1.digitaloceanspaces.com/aston/The%20Aston%20Place-site-progress-data-march-large.jpg'},
    {month:'February', percentage:'25.56%', url: 'https://andiliang.sgp1.digitaloceanspaces.com/aston/The%20Aston%20Place-site-progress-data-feberary-large.jpg'},
    {month:'January', percentage:'24.39%', url: 'https://andiliang.sgp1.digitaloceanspaces.com/aston/The%20Aston%20Place-site-progress-data-janarary-large.jpg'},

]);
</script>
