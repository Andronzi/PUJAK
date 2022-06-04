import "./assets/styles/global.css";
import Vue from "vue";
import App from "./App.vue";

// Vue.config.productionTip = false;

// moby.firebase.subscribe();
// moby.firebase
//   .get_token()
//   .then((token) => {
//     console.log({ token });
//   })
//   .catch((e) => console.log(e));

new Vue({
  render: (h) => h(App),
}).$mount("#app");
