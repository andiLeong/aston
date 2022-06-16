<template>

  <div v-if="open" class="relative bg-sky-600" v-cloak>
    <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
      <div class="pr-16 sm:text-center sm:px-16">
        <p class="font-medium text-white">
          <span class="md:hidden"> DMCI Ason for sale! </span>
          <span class="hidden md:inline"> Big news! We're selling aston unit for inexpensive price. </span>
          <span class="block sm:ml-2 sm:inline-block">
          <AppLink to="/offer" class="text-white font-bold underline"> Learn more <span aria-hidden="true">&rarr;</span></AppLink>
        </span>
        </p>
      </div>
      <div class="absolute inset-y-0 right-0 pt-1 pr-1 flex items-start sm:pt-1 sm:pr-2 sm:items-start">
        <button @click.prevent="open = false" type="button" class="flex p-2 rounded-md hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-white">
          <span class="sr-only">Dismiss</span>
          <!-- Heroicon name: outline/x -->
          <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  </div>

</template>

<script setup>
import {ref} from "vue";

const open = ref(true)
</script>