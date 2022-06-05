<template>
  <div class="item-block">
    <img
      class="item-block__image min-w-2xl"
      style="min-width: 225px"
      :src="url"
    />
    <p
      class="item-block__name mt-6 text-center"
      style="max-width: 225px; min-height: 2em"
    >
      {{ itemName }}
    </p>
    <div class="mt-4 flex justify-center">
      <button
        class="w-28 bg-sky-500/100 text-white p-2 rounded-md min-w-max"
        v-on:click="onClick(itemName)"
      >
        Купить за {{ cost }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import qrcode from "qrcode";
import sjcl from "sjcl";
import { SEKRET_KEY } from "../config";

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

  methods: {
    onClick(name) {
      qrcode.toCanvas(
        document.querySelector(".canvas"),
        sjcl.encrypt(
          SEKRET_KEY,
          JSON.stringify({
            id: sessionStorage.getItem("userId"),
            name: name,
          }),
          (err) => {
            console.log("err" + err);
          }
        )
      );
    },
  },
};
</script>
