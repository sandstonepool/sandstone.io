<template>
  <Box>
    <Disclosure as="div" class="p-4" v-slot="{ open }">
      <DisclosureButton
        class="inline-flex justify-between w-full px-4 py-2 text-md font-medium text-left rounded-lg focus:outline-none">
        <span>{{ summary }}</span>
        <ChevronUpIcon :class="open ? 'transform rotate-180' : ''" class="flex-shrink-0 h-8 w-8 text-blue-dark"/>
      </DisclosureButton>
      <transition
        enter-active-class="transition duration-400 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-out"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0">
        <DisclosurePanel class="px-4 pt-4 pb-2">
          <slot></slot>
        </DisclosurePanel>
      </transition>
    </Disclosure>
  </Box>
</template>

<script>
import Box from './Box'
import {Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/vue'
import {ChevronUpIcon} from '@heroicons/vue/solid'

export default {
  components: {
    Box,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    ChevronUpIcon
  },
  props: {
    summary: {
      type: String,
      required: true
    }
  }
}
</script>
