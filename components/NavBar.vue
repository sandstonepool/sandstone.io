<template>
  <client-only>
    <Disclosure v-slot="{ open }" as="nav" class="sticky w-full z-50 pl-4 pr-4 bg-white shadow-xl left-0 right-0 top-0">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <div class="absolute inset-y-0 left-0 flex items-center md:hidden">
            <DisclosureButton
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span class="sr-only">Open main menu</span>
              <MenuIcon v-if="!open" aria-hidden="true" class="block h-6 w-6"/>
              <XIcon v-else aria-hidden="true" class="block h-6 w-6"/>
            </DisclosureButton>
          </div>
          <div class="flex-1 flex items-center justify-center md:items-stretch md:justify-between">
            <div class="flex-shrink-0 flex items-center">
              <a href="/">
                <img class="h-6 w-auto sm:h-6" src="~/assets/images/sandstone-logo.svg" alt="Sandstone Home Page" width="205" height="25"/>
              </a>
            </div>
            <div class="hidden md:block sm:ml-6">
              <div class="flex space-x-4">
                <a v-for="item in navigation" :key="item.name" :href="item.anchor"
                   class="text-blue-dark hover:text-blue-light hover:bg-blue-900 px-3 py-2 rounded-md text-sm font-medium">
                  {{ item.name }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DisclosurePanel class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <DisclosureButton v-for="item in navigation" :key="item.name" :href="item.anchor" as="a"
                            class="text-blue-dark hover:text-blue-light hover:bg-blue-900 block px-3 py-2 rounded-md text-base cursor-pointer">
            {{ item.name }}
          </DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>
  </client-only>
</template>

<script setup>
const props = defineProps({
  navigation: {
    type: Array[{
      name: String,
      anchor: String
    }],
    required: false,
    default: []
  }
})
</script>

<script>
import {XIcon, MenuIcon} from '@heroicons/vue/solid'
import {Disclosure, DisclosurePanel, DisclosureButton} from "@headlessui/vue";

export default {
  components: {
    XIcon,
    MenuIcon,
    Disclosure,
    DisclosurePanel,
    DisclosureButton
  }
}
</script>
