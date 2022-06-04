<template>
  <div id="app">
    <Header>
      <CloseButton />
    </Header>
    <Content :header="true" :footer="false" :scroll="true" :scrollbar="true">
      <b>canvas</b>
      <Item itemName="худи"></Item>
      <p>ee</p>
      <p id="id"></p>
      <div class="mx-2 mt-6 text-center">
        <canvas class="qr-content"></canvas>
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
    document.getElementById("id").innerHTML = "123";
    getId()
      .catch(() => {
        console.log("OBASRALCYA");
        return axios("http://nl.arturka.net:8000/user/").then((response) => {
          console.log("response1" + response);
          return response.data.id;
        });
      })
      .then((data) => {
        console.log("post getid" + data);
        if (data.length) {
          return data;
        } else {
          return axios("http://nl.arturka.net:8000/user/").then(
            async (response) => {
              console.log("response2" + response);
              //save_id = response.data.id;
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
        console.log("lovim govno");
        return save_id;
      })
      .then((data) => {
        console.log("КОНЕЦ" + data);
        this.id = data;
        document.getElementById("id").innerHTML = this.id;
      })
      .then(() => {
        qrcode.toCanvas(
          document.querySelector(".qr-content"),
          this.id,
          (err) => {
            console.log("gg" + err);
          }
        );
      })
      .catch((err) => {
        console.log("da" + err);
        document.getElementById("id").innerHTML = JSON.stringify(err);
      });
  },
};
</script>
