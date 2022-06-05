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
      <button class="w-28" v-on:click="onClick(itemName)">
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
