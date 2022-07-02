<template>

  <div class="relative bg-white pt-16 pb-32 overflow-hidden dark:bg-gray-800">
    <div class="relative">
      <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
        <div class="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div class="mt-6">
              <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-200">Save at least 2m on dmci aston, what a deal!</h2>


              <div v-for="skill in skills" :key="skill" class="flex items-center space-y-1 mt-4">
                <div class="mr-2">
                  <svg class="h-6 w-6 text-sky-400" xmlns="http://www.w3.org/2000/svg"
                       fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                       aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div class="dark:text-gray-100 text-lg text-gray-500">{{ skill }}</div>
              </div>
              <div class="mt-6">
                <button @click.prvent="contact.scrollIntoView({behavior:'smooth'})" class="inline-flex px-4 py-2 text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-purple-300 to-sky-500 hover:bg-sky-700">Contact Now</button>
              </div>
            </div>

        </div>
        <div class="mt-12 sm:mt-16 lg:mt-0">
          <div class="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
            <img class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none" src="https://andiliang.sgp1.digitaloceanspaces.com/aston/E8AF825C-AE4C-4040-9184-05992D573C5D.jpeg" alt="DMCI Aston inner D layout">
          </div>
        </div>
      </div>
    </div>
    <div class="mt-24">
      <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
        <div class="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
          <div>
            <div class="mt-6">
              <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-200">Currently DMCI selling this at 8.5m the same type of unit</h2>
              <p class="mt-4 text-lg text-gray-500 dark:text-gray-100">
                Turning over in 2024, currently the same layout unit from dmci is selling 8.5m total plus the closing fee, it probably gets higher in future .
                If you purchase from me, you only pay 6.3m with flexible payment scheme, you have to save st least 2m above, I dont earn much from you.
              </p>
            </div>
          </div>
        </div>
        <div class="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
          <div class="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
            <img class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none" src="https://andiliang.sgp1.digitaloceanspaces.com/aston/aston8.5m.PNG" alt="Customer profile user interface">
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-gray-50 dark:bg-gray-700" id="contact" ref="contact">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
      <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        <span class="block dark:text-gray-100">Convince ?</span>
        <span class="block text-sky-600">Let's talk now</span>
      </h2>
      <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
        <div class="inline-flex rounded-md shadow">
          <a href="https://wa.me/60132204523" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"> Whatsapp Me </a>
        </div>
        <div class="ml-3 inline-flex rounded-md shadow">
          <button @click.prevent="viberNumber = !viberNumber" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50">
            {{
            !viberNumber
            ? 'Viber Me'
            : '09272714285'
                }}
          </button>
        </div>
      </div>
    </div>
  </div>




</template>

<script setup>

import {ref} from "vue";
import {useMeta} from "vue-meta";

useMeta({
    title: 'DMCI Aston for sale | pasay high rise condo for sale | 2br aston 6m only',
    description: 'aston is one of the high rise condo from DMCI, why you should buy it , it connects you to to business districts, shopping malls, distinguished schools, hospitals and other convenient key area',
    htmlAttrs: { lang: 'en', amp: true }
})

const contact = ref()
const skills = ref([
  'Same type unit from dmci is now 8.5m, and I\'m selling 6.3m',
  '100% clear ownership',
  'one to one to owner',
  'no property broker/agent',
  '2br with balcony 54 square meter',
  'total selling price, 6.3m',
  'Buyer cash out, 1,361,908  ',
  'Then monthly payment 24,230.44 until 2024,July',
  'Settle the remaining balance 4.4m including the closing fee on 2024,July ',
  'turn over in 2024,july',
  'include closing fee, admin fee',
])

const viberNumber = ref(false)
</script>
