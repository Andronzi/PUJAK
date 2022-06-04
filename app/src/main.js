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

let old_console = console.log;

console.log = function (...args) {
  let da = document.getElementById("console");
  let span = document.createElement("span");
  span.style.display = "block";

  let net = /.+?\n.+?\n.+?(:\d+)/.exec(new Error("da").stack.toString())[1];
  span.innerHTML = (JSON.stringify(args).toString() + net).toString();

  da.appendChild(span);

  old_console(...args);
};

new Vue({
  render: (h) => h(App),
}).$mount("#app");
