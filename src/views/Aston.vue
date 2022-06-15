<template>

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
                        src="https://www.youtube-nocookie.com/embed/1mjEJQjW84c" frameborder="0" allowfullscreen>
                </iframe>
            </div>
        </div>
    </main>

    <section>
        <div class="bg-white dark:bg-gray-700">
            <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
                <div class="space-y-12">
                    <div class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                        <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl dark:text-gray-100">Site Progress as of 2022</h2>
                    </div>
                    <ul role="list" class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
                        <li v-for="progress in siteProgress" :key="progress.month">
                            <div class="space-y-4">
                                <div class="aspect-w-3 aspect-h-2">
<!--                                    <img class="object-cover shadow-lg rounded-lg" :src="progress.url" alt="">-->
                                    <v-lazy-image class="object-cover shadow-lg rounded-lg" :src="progress.url" />
                                </div>

                                <div class="space-y-2">
                                    <div class="flex items-center justify-between text-lg leading-6 font-medium space-y-1">
                                        <h3 class="dark:text-gray-100">{{ progress.month }}</h3>
                                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-bold bg-green-100 dark:bg-white dark:text-gray-800 text-green-800"> {{progress.percentage}} </span>
                                    </div>
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div class="bg-white dark:bg-gray-700">
            <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
                <div class="space-y-12">
                    <div class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                        <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl dark:text-gray-100">Facilities</h2>
                    </div>
                    <ul role="list" class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
                        <li v-for="facility in facilities" :key="facility.name">
                            <div class="space-y-4">
                                <div class="aspect-w-3 aspect-h-2">
                                    <v-lazy-image class="object-cover shadow-lg rounded-lg" :src="facility.url" />
                                </div>

                                <div class="space-y-2">
                                    <div class="text-lg leading-6 font-medium space-y-1">
                                        <h3 class="dark:text-gray-100">{{ facility.name }}</h3>
                                    </div>
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div class="bg-white dark:bg-gray-700">
            <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
                <div class="space-y-12">
                    <div class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                        <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl dark:text-gray-100">Location</h2>
                    </div>

                    <iframe
                        class="w-full h-96"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1875.8951462544896!2d120.9980944659103!3d14.5576532803237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c97a9aa46b3f%3A0x17eafb9720942b59!2sAston%20Place%20By%20DMCI%20Homes!5e0!3m2!1sen!2sph!4v1655279441456!5m2!1sen!2sph"
                        style="border:0;"
                        allowfullscreen="true"
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import VLazyImage from "v-lazy-image";
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
