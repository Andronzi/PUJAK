<template>
  <div id="app">
    <Header>
      <CloseButton />
    </Header>
    <Content :header="true" :footer="false" :scroll="true" :scrollbar="true">
      <div class="balance">
        <p>Ваш баланс равен:</p>
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
import qrcode from "qrcode";
import { getId, setId } from "./utils";
import Item from "./components/Item.vue";
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
    };
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
        this.id = data;
      })
      .then(() => {
        qrcode.toCanvas(
          document.querySelector(".qr-content"),
          this.id,
          (err) => {
            console.log("err1" + err);
          }
        );
      })
      .catch((err) => {
        console.log("err2" + err);
      });

    axios("http://nl.arturka.net:8000/market/").then((response) => {
      this.storeData = response.data;
    });

    axios(
      `http://nl.arturka.net:8000/user/update?id=${this.id}method[set]value=1000integertarget=points`
    );

    let balance = document.querySelector(".balance");
    setInterval(() => {
      axios(`http://nl.arturka.net:8000/user/${this.id}`).then((response) => {
        balance.innerHTML = response.data.points;
      });
    }, 1000);
  },
};
</script>
