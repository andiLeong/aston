<template>
  <DisclosurePanel class="sm:hidden">
    <div class="pt-2 pb-3 space-y-1">
      <!-- Current: "bg-sky-50 border-sky-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" -->
      <AppLink
        v-for="(route, index) in routes"
        :key="index"
        :to="route"
        class="dark:hover:text-gray-700 dark:text-gray-100 border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 text-base font-medium"
      >
        {{ useCapitalise(route.name) }}
      </AppLink>
    </div>

  </DisclosurePanel>
</template>

<script setup>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/vue';
import { MenuIcon, XIcon } from '@heroicons/vue/outline';
import useCapitalise from "@/composable/useCapitalise";

const props = defineProps(['routes'])



</script>
