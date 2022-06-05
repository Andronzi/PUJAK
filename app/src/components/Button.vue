<template>
  <button
    id="buy-button"
    style="min-width: 150px"
    class="text-center px-4 py-2 bg-sky-500/100 rounded-md transition-all shadow-md font-normal"
    :class="
      danger
        ? 'bg-sky-500/100 active:ring-red-400 active:bg-red-50 m-0.5'
        : 'text-white bg-sky-500/100 bg-sky-500/100'
    "
    @click="onClick(cost)"
  >
    <div class="flex items-center">
      <LoadingIcon
        class="w-7 px-0.5 animate-spin-slow"
        :stroke="danger ? 'rgb(249 115 22)' : '#fffff0'"
        :className="isLoading ? 'block' : 'hidden'"
      />
      <div v-if="(!isLoading ? isLoading : false) || $slots.icon" class="w-7">
        <slot name="icon" />
      </div>
      <div
        class="text-base text-center w-full container flex items-center justify-center transition-padding"
        :class="isLoading || $slots.icon ? 'pl-9 -ml-7' : ''"
      >
        <slot name="text" />
      </div>
    </div>
  </button>
</template>

<script lang="ts">
import moby from "@mobyapps/moby.js";
import LoadingIcon from "./LoadingIcon.vue";

export default {
  name: "Button",
  props: {
    danger: {
      type: Boolean,
      default: false,
    },
    cost: {
      type: Number,
    },
  },
  components: {
    LoadingIcon,
  },
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    async onClick() {
      const barcode = await moby.barcode.scan([moby.barcode.symbology.qr]);
      this.$emit("setBarcode", barcode);
    },
  },
};
</script>
