<template>

  <Banner />
  <Disclosure
    as="nav"
    class="bg-white shadow dark:bg-gray-700"
    v-slot="{ open }"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <!-- <div class="flex-shrink-0 flex items-center">
            <img
              class="block lg:hidden h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <img
              class="hidden lg:block h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
              alt="Workflow"
            />
          </div> -->
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <AppLink
              v-for="route in routes"
              :to="route"
              :key="route.name"
              class="dark:text-white text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium"
            >
                {{ useCapitalise(route.name) }}
            </AppLink>

            <a
              @click.prevent="change"
              class="cursor-pointer dark:text-white text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium"
            >
              <span v-if="themeStore.theme === 'dark'" class="dark:inline">
                  <Moon  class="w-6 h-6"/>
              </span>
              <span v-else>
                  <Sun  class="w-6 h-6"/>
              </span>
            </a>
          </div>
        </div>
        <div class="hidden sm:ml-6 sm:flex sm:items-center">

        </div>
        <div class="-mr-2 flex items-center sm:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500"
          >
            <span class="sr-only">Open main menu</span>
            <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>
    </div>

    <TheMobileNavigation :routes="routes" />
  </Disclosure>
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
import { BellIcon, MenuIcon, XIcon } from '@heroicons/vue/outline';
import TheMobileNavigation from '@/components/TheMobileNavigation.vue';
import { ref } from 'vue';
import Sun from "@/components/svg/Sun.vue";
import Moon from "@/components/svg/Moon.vue";
import Banner from "@/components/Banner.vue"
import useCapitalise from "../composable/useCapitalise";
import { useThemeStore } from '@/store/theme'
const themeStore = useThemeStore()

const emit = defineEmits(['change']);
const routes = ref([
  { name: 'home' },
  { name: 'aston' },
  { name: 'offer' },
]);

function change() {
  emit('change', themeStore.setTheme());
}
</script>
