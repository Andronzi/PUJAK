<template>
  <div id="app">
    <Header>
      <CloseButton />
    </Header>
    <Content :header="true" :footer="false" :scroll="true" :scrollbar="true">
      <div>
        <p class="balance">Ваш баланс равен:</p>
      </div>
      <canvas class="canvas"></canvas>
      <div class="mt-6">
        <Button class="w-28 bg-sky-500/100" @setBarcode="setBarcode">
          <template slot="text">Сканировать QR</template>
        </Button>
      </div>
      <div class="mx-2 mt-6 text-center">
        <canvas class="qr-content"></canvas>
      </div>
      <div class="container flex items-center flex-wrap">
        <div
          :key="index"
          v-for="(item, index) in storeData"
          class="ml-10 mt-10"
        >
          <Item :itemName="item.label" :url="item.url" :cost="item.cost"></Item>
        </div>
      </div>
      <div id="console"></div>
    </Content>
  </div>
</template>

<script lang="ts">
import Header from "./components/Header.vue";
import CloseButton from "./components/CloseButton.vue";
import Content from "./components/Content.vue";
import Item from "./components/Item.vue";
import Button from "./components/Button.vue";
import axios from "axios";
import sjcl from "sjcl";
import { getId, setId } from "./utils";
import { SERVER } from "./config.js";
import { SEKRET_KEY } from "./config.js";

export default {
  name: "App",
  components: {
    Content,
    Header,
    CloseButton,
    Button,
    Item,
  },
  data() {
    return {
      id: "",
      count: 0,
      spinner: true,
      storeData: [],
      userId: "",
    };
  },
  methods: {
    setBarcode(barcode) {
      let result = sjcl.decrypt(SEKRET_KEY, barcode.result);
      var qrObj = JSON.parse(result);
      console.log("obj=", qrObj);
      axios(`${SERVER}user?id=${qrObj.id}`)
        .then((response) => {
          let cost;
          this.storeData.forEach((el) => {
            if (el.label == qrObj.name) {
              cost = el.cost;
            }
          });
          return {
            cost: cost,
            points: response.data.points,
          };
        })
        .then((obj) => {
          if (obj.points - obj.cost >= 0) {
            axios(
              `${SERVER}user/update?id=${qrObj.id}&method=set&value=${
                obj.points - obj.cost
              }&target=points`
            );
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    let save_id;
    getId()
      .catch(() => {
        return axios(`${SERVER}user/`).then((response) => {
          return response.data.id;
        });
      })
      .then((data) => {
        if (data.length) {
          this.id = data;
          return data;
        } else {
          return axios(`${SERVER}user/`).then(async (response) => {
            let ret;
            try {
              ret = await setId(response.data.id);
            } catch (e) {
              return response.data.id;
            }

            return ret;
          });
        }
      })
      .catch(() => {
        return save_id;
      })
      .then((data) => {
        if (this.id.length == 0) {
          this.id = data;
        }
      })
      .then(() => {
        axios(
          `${SERVER}user/update?id=${this.id}&method=set&value=1000&target=points`
        );
      })
      .then(() => {
        sessionStorage.setItem("userId", this.id);
        console.log(sessionStorage.getItem("userId"));
      })
      .catch((err) => {
        console.log("error " + err);
      });

    axios(`${SERVER}market/`).then((response) => {
      this.storeData = response.data;
    });

    let balance = document.querySelector(".balance");

    setInterval(() => {
      axios(`${SERVER}user?id=${this.id}`)
        .then((response) => {
          return response.data;
        })
        .then((data) => {
          balance.innerHTML = `Ваш баланс равен: ${data.points}`;
        });
    }, 1000);
  },
};
</script>
