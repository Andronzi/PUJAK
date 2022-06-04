<template>
  <div class="item-block">
    <img
      class="item-block__image w-30"
      :src="url"
      style="max-width: 150px; min-width: 150px"
    />
    <p class="item-block__name" style="max-width: 150px; min-height: 2em">
      {{ itemName }}
    </p>
    <div class="mt-6">
      <Button class="w-28" @setBarcode="setBarcode" :cost="cost">
        <template slot="text">Купить за {{ cost }}</template>
      </Button>
    </div>
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
      type: Number,
    },
  },

  data() {
    return {
      storeCost: 0,
    };
  },

  methods: {
    setBarcode(barcode, cost) {
      this.id = barcode;
      console.log(cost);
    },
  },
};
</script>
