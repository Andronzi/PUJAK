<template>
  <div class="item-block">
    <img class="item-block__image w-30" :src="imageSrc" />
    <p class="item-block__name">{{ itemName }}</p>
    <div class="mt-6 text-center">
      <Button class="w-28" @setBarcode="setBarcode">
        <template slot="text">Read QR</template>
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
    itemId: {
      id: Text,
      default: "",
    },
    imageSrc: {
      type: String,
      default:
        "https://sun6-20.userapi.com/impg/3wVf7NZLP7AIgiNZqPG9tOE0KnhFHUQDnsGIDA/BbRHOeFfhkY.jpg?crop=0.167,0,0.667,1&size=0x179&quality=95&sign=390c7f2f7fddf4ce64c45c05e0761c16",
    },
    itemName: {
      type: String,
      default: "",
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
