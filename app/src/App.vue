<template>
  <div id="app">
    <Header>
      <CloseButton />
    </Header>
    <Content :header="true" :footer="false" :scroll="true" :scrollbar="true">
      <div>
        <p class="balance">Ваш баланс равен:</p>
      </div>
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
      <!-- {{ createQR() }} -->
      <!--<Shimmer />-->
      <!--<SurveyCard-->
      <!--url="http://"-->
      <!--imgUrl=""-->
      <!--name="SurveyCard"-->
      <!--description="SurveyCard"-->
      <!--/>-->
    </Content>
    <!--<Footer>content footer</Footer>-->
    <!--<Modal :isVisible="modal.show" @onClose="modal.show = false" />-->
    <!--<Spinner v-if="spinner" />-->
  </div>
</template>

<script lang="ts">
import Header from "./components/Header.vue";
import CloseButton from "./components/CloseButton.vue";
import Content from "./components/Content.vue";
import { getId, setId } from "./utils";
import Item from "./components/Item.vue";
import Button from "./components/Button.vue";
import axios from "axios";
// import SurveyCard from "./components/SurveyCard";
// import Shimmer from "./components/Shimmer";
// import Spinner from "./components/Spinner";
// import Modal from "./components/Modal";
// import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    // SurveyCard,
    // Shimmer,
    // Spinner,
    // Modal,
    // Footer,
    Content,
    Header,
    CloseButton,
    Button,
    Item,
  },
  data() {
    return {
      id: "",
      // modal: {
      //   show: false,
      // },
      count: 0,
      spinner: true,
      storeData: [],
      userId: "",
    };
  },
  methods: {
    setBarcode(barcode) {
      var qrObj = JSON.parse(barcode.result);
      axios(`http://nl.arturka.net:8000/user?id=${qrObj.id}`)
        .then((response) => {
          return response.data;
        })
        .then((data) => {
          console.log(qrObj);
          console.log(data.points, qrObj.cost);
          if (data.points - qrObj.cost >= 0) {
            axios(
              `http://nl.arturka.net:8000/user/update?id=${
                qrObj.id
              }&method=set&value=${data.points - qrObj.cost}&target=points`
            );
          }
        });
    },
  },
  mounted() {
    // axios("http://nl.arturka.net:8000/user/").then((response) => {
    //   console.log(response.data);
    //   return response.data;
    // });
    // axios("http://nl.arturka.net:8000/user/").then((response) => {
    //   console.log(response);
    //   return setId(response.data.id);
    // });
    let save_id;
    getId()
      .catch(() => {
        return axios("http://nl.arturka.net:8000/user/").then((response) => {
          return response.data.id;
        });
      })
      .then((data) => {
        if (data.length) {
          this.id = data;
          return data;
        } else {
          return axios("http://nl.arturka.net:8000/user/").then(
            async (response) => {
              let ret;
              try {
                ret = await setId(response.data.id);
              } catch (e) {
                return response.data.id;
              }

              return ret;
            }
          );
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
          `http://nl.arturka.net:8000/user/update?id=${this.id}&method=set&value=1000&target=points`
        );
      })
      .then(() => {
        sessionStorage.setItem("userId", this.id);
        console.log(sessionStorage.getItem("userId"));
      })
      .catch((err) => {
        console.log("err2" + err);
      });

    axios("http://nl.arturka.net:8000/market/").then((response) => {
      this.storeData = response.data;
    });

    let balance = document.querySelector(".balance");

    setInterval(() => {
      axios(`http://nl.arturka.net:8000/user?id=${this.id}`)
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
