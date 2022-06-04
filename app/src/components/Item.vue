<template>
  <div class="item-block">
    <img class="item-block__image w-30" :src="url" />
    <p class="item-block__name">{{ itemName }}</p>
    <div class="mt-6">
      <Button class="w-28" @setBarcode="setBarcode">
        <template slot="text">Купить {{ cost }}</template>
        <!--<template slot="icon">icon html</template>-->
      </Button>
    </div>
    <!-- <div v-if="barcode" class="mx-2 mt-6 text-center">
      <b>Result:</b>
      <br />
    </div> -->
  </div>
</template>

<script lang="ts">
import Button from "./Button.vue";
export default {
  name: "Item",
  components: {
    Button,
  },
  props: {
    url: {
      type: String,
    },
    itemName: {
      type: String,
      default: "",
    },
    cost: {
      type: String,
    },
  },

  methods: {
    setBarcode(barcode) {
      console.log(barcode);
    },

    setItemId() {},
  },
};
</script>
