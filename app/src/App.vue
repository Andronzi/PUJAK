<template>
  <div id="app">
    <Header>
      <CloseButton />
    </Header>
    <Content :header="true" :footer="false" :scroll="true" :scrollbar="true">
      <b>canvas</b>
      <Item itemName="худи"></Item>
      <div class="mx-2 mt-6 text-center">
        <canvas class="qr-content"></canvas>
      </div>
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
    };
  },
  mounted() {
    getId()
      .then((data) => {
        if (data != undefined) {
          return data;
        } else {
          return setId();
        }
      })
      .then((data) => (this.id = data))
      .then(() => {
        qrcode.toCanvas(
          document.querySelector(".qr-content"),
          this.id,
          (err) => {
            console.log(err);
          }
        );
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
