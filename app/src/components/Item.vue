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
      <button class="w-28" v-on:click="onClick(cost)">
        Купить за {{ cost }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import qrcode from "qrcode";
export default {
  name: "Item",

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
    onClick(cost) {
      console.log(cost);
      qrcode.toCanvas(
        document.querySelector(".canvas"),
        JSON.stringify({ cost: cost, id: sessionStorage.getItem("userId") }),
        (err) => {
          console.log("err" + err);
        }
      );
    },
  },

  watch: {
    cost: function () {
      this.init();
    },
  },
};
</script>
