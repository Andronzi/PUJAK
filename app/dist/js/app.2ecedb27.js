/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 6037:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__(8935);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=template&id=52aaa670&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('Header',[_c('CloseButton')],1),_c('Content',{attrs:{"header":true,"footer":false,"scroll":true,"scrollbar":true}},[_c('div',[_c('p',{staticClass:"balance text-lg text-center"},[_vm._v("Ваш баланс равен:")])]),_c('div',{staticClass:"flex items-center justify-center"},[_c('canvas',{staticClass:"canvas max-w-sm"})]),_c('div',{staticClass:"mt-6 flex items-center justify-center"},[_c('Button',{staticClass:"w-28 bg-sky-500/100 container flex items-center justify-center",on:{"setBarcode":_vm.setBarcode}},[_c('template',{slot:"text"},[_vm._v("Сканировать QR")])],2)],1),_c('div',{staticClass:"flex items-center justify-center flex-wrap"},_vm._l((_vm.storeData),function(item,index){return _c('div',{key:index,staticClass:"mt-10"},[_c('Item',{attrs:{"itemName":item.label,"url":item.url,"cost":item.cost}})],1)}),0),_c('div',{attrs:{"id":"console"}})])],1)}
var staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Header.vue?vue&type=template&id=1e508c6d&
var Headervue_type_template_id_1e508c6d_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"fixed w-screen top-0 left-0 border-b z-10 bg-gray-50",class:_vm.$slots.default ? 'h-[var(--header-sait]' : 'h-[var(--sait)]'},[(_vm.$slots.default)?_c('div',{staticClass:"mt-sait w-screen h-[var(--header-height)]"},[_vm._t("default")],2):_vm._e()])}
var Headervue_type_template_id_1e508c6d_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Header.vue?vue&type=script&lang=ts&















/* harmony default export */ const Headervue_type_script_lang_ts_ = ({
  name: "Header",
});

;// CONCATENATED MODULE: ./src/components/Header.vue?vue&type=script&lang=ts&
 /* harmony default export */ const components_Headervue_type_script_lang_ts_ = (Headervue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1001);
;// CONCATENATED MODULE: ./src/components/Header.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.Z)(
  components_Headervue_type_script_lang_ts_,
  Headervue_type_template_id_1e508c6d_render,
  Headervue_type_template_id_1e508c6d_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const Header = (component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/CloseButton.vue?vue&type=template&id=f6ae4590&
var CloseButtonvue_type_template_id_f6ae4590_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flex items-center w-screen h-full"},[_c('button',{staticClass:"group flex flex-row outline-none h-8 items-center ml-0 pr-2",on:{"click":_vm.onClick}},[_c('svg',{staticClass:"h-6 w-6 group-active:stroke-orange-500",attrs:{"xmlns":"http://www.w3.org/2000/svg","fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"}},[_c('path',{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","d":"M15 19l-7-7 7-7"}})]),_c('div',[_vm._v(_vm._s(_vm.name))])])])}
var CloseButtonvue_type_template_id_f6ae4590_staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/@mobyapps/moby.js/dist/moby.js
var moby = __webpack_require__(2907);
var moby_default = /*#__PURE__*/__webpack_require__.n(moby);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/CloseButton.vue?vue&type=script&lang=ts&



























/* harmony default export */ const CloseButtonvue_type_script_lang_ts_ = ({
  name: "CloseButton",
  props: {
    name: {
      type: String,
      default: "Close",
    },
  },
  methods: {
    onClick() {
      moby_default().miniapp.pop(true, "");
    },
  },
});

;// CONCATENATED MODULE: ./src/components/CloseButton.vue?vue&type=script&lang=ts&
 /* harmony default export */ const components_CloseButtonvue_type_script_lang_ts_ = (CloseButtonvue_type_script_lang_ts_); 
;// CONCATENATED MODULE: ./src/components/CloseButton.vue





/* normalize component */
;
var CloseButton_component = (0,componentNormalizer/* default */.Z)(
  components_CloseButtonvue_type_script_lang_ts_,
  CloseButtonvue_type_template_id_f6ae4590_render,
  CloseButtonvue_type_template_id_f6ae4590_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const CloseButton = (CloseButton_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Content.vue?vue&type=template&id=10e3dfb6&
var Contentvue_type_template_id_10e3dfb6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"w-screen",class:[
    _vm.header ? 'mt-[var(--header-sait)]' : '',
    _vm.calc_height,
    _vm.scroll ? 'overflow-y-auto' : 'overflow-hidden',
    _vm.scrollbar ? 'scrollbar' : '' ],attrs:{"hidden":_vm.hidden},on:{"scroll":_vm.onscroll}},[_vm._t("default")],2)}
var Contentvue_type_template_id_10e3dfb6_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Content.vue?vue&type=script&lang=ts&

















/* harmony default export */ const Contentvue_type_script_lang_ts_ = ({
  name: "Content",
  props: {
    header: {
      type: Boolean,
      default: true,
    },
    footer: {
      type: Boolean,
      default: false,
    },
    scroll: {
      type: Boolean,
      default: true,
    },
    scrollbar: {
      type: Boolean,
      default: true,
    },
    hidden: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      timer: null,
    };
  },
  computed: {
    calc_height() {
      if (this.header) {
        if (this.footer)
          return "h-[calc(100vh-var(--header-sait)-var(--footer-saib))]";
        else return "h-[calc(100vh-var(--header-sait))]";
      } else {
        if (this.footer) return "h-[calc(100vh-var(--footer-saib))]";
        else return "h-screen";
      }
    },
  },
  methods: {
    onscroll(e) {
      if (e.target.scrollTop > 10) {
        document.documentElement.style.setProperty(
          "--scrollbar-opacity",
          "block"
        );
      }

      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        document.documentElement.style.setProperty(
          "--scrollbar-opacity",
          "none"
        );
      }, 2000);
    },
  },
});

;// CONCATENATED MODULE: ./src/components/Content.vue?vue&type=script&lang=ts&
 /* harmony default export */ const components_Contentvue_type_script_lang_ts_ = (Contentvue_type_script_lang_ts_); 
;// CONCATENATED MODULE: ./src/components/Content.vue





/* normalize component */
;
var Content_component = (0,componentNormalizer/* default */.Z)(
  components_Contentvue_type_script_lang_ts_,
  Contentvue_type_template_id_10e3dfb6_render,
  Contentvue_type_template_id_10e3dfb6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const Content = (Content_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Item.vue?vue&type=template&id=e2759c44&
var Itemvue_type_template_id_e2759c44_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"item-block"},[_c('img',{staticClass:"item-block__image min-w-2xl",staticStyle:{"min-width":"225px"},attrs:{"src":_vm.url}}),_c('p',{staticClass:"item-block__name mt-6 text-center",staticStyle:{"max-width":"225px","min-height":"2em"}},[_vm._v(" "+_vm._s(_vm.itemName)+" ")]),_c('div',{staticClass:"mt-4 flex justify-center"},[_c('button',{staticClass:"w-28 bg-sky-500/100 text-white p-2 rounded-md min-w-max",on:{"click":function($event){return _vm.onClick(_vm.itemName)}}},[_vm._v(" Купить за "+_vm._s(_vm.cost)+" ")])])])}
var Itemvue_type_template_id_e2759c44_staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/qrcode/lib/browser.js
var browser = __webpack_require__(8733);
// EXTERNAL MODULE: ./node_modules/sjcl/sjcl.js
var sjcl = __webpack_require__(5846);
var sjcl_default = /*#__PURE__*/__webpack_require__.n(sjcl);
;// CONCATENATED MODULE: ./src/config.js
/* eslint-disable */
const SERVER = "http://nl.arturka.net:8000/";
const SEKRET_KEY = "yde5rfutihj8femqi";
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Item.vue?vue&type=script&lang=ts&





























/* harmony default export */ const Itemvue_type_script_lang_ts_ = ({
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
      browser.toCanvas(
        document.querySelector(".canvas"),
        sjcl_default().encrypt(
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
});

;// CONCATENATED MODULE: ./src/components/Item.vue?vue&type=script&lang=ts&
 /* harmony default export */ const components_Itemvue_type_script_lang_ts_ = (Itemvue_type_script_lang_ts_); 
;// CONCATENATED MODULE: ./src/components/Item.vue





/* normalize component */
;
var Item_component = (0,componentNormalizer/* default */.Z)(
  components_Itemvue_type_script_lang_ts_,
  Itemvue_type_template_id_e2759c44_render,
  Itemvue_type_template_id_e2759c44_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const Item = (Item_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Button.vue?vue&type=template&id=9c460f1e&
var Buttonvue_type_template_id_9c460f1e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"text-center px-4 py-2 bg-sky-500/100 rounded-md transition-all shadow-md font-normal",class:_vm.danger
      ? 'bg-sky-500/100 active:ring-red-400 active:bg-red-50 m-0.5'
      : 'text-white bg-sky-500/100 bg-sky-500/100',staticStyle:{"min-width":"150px"},attrs:{"id":"buy-button"},on:{"click":function($event){return _vm.onClick(_vm.cost)}}},[_c('div',{staticClass:"flex items-center"},[_c('LoadingIcon',{staticClass:"w-7 px-0.5 animate-spin-slow",attrs:{"stroke":_vm.danger ? 'rgb(249 115 22)' : '#fffff0',"className":_vm.isLoading ? 'block' : 'hidden'}}),((!_vm.isLoading ? _vm.isLoading : false) || _vm.$slots.icon)?_c('div',{staticClass:"w-7"},[_vm._t("icon")],2):_vm._e(),_c('div',{staticClass:"text-base text-center w-full container flex items-center justify-center transition-padding",class:_vm.isLoading || _vm.$slots.icon ? 'pl-9 -ml-7' : ''},[_vm._t("text")],2)],1)])}
var Buttonvue_type_template_id_9c460f1e_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/LoadingIcon.vue?vue&type=template&id=23a28844&
var LoadingIconvue_type_template_id_23a28844_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.className},[_c('svg',{attrs:{"version":"1.1","viewBox":"-58 -58 116 116","xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[_c('g',{attrs:{"stroke-linecap":"round","stroke-width":"15"}},[_c('path',{attrs:{"id":"a","d":"m0 35 0,14"}}),_c('use',{attrs:{"transform":"rotate(210)","xlink:href":"#a","stroke":_vm.stroke,"opacity":"0.08"}}),_c('use',{attrs:{"transform":"rotate(240)","xlink:href":"#a","stroke":_vm.stroke,"opacity":"0.16"}}),_c('use',{attrs:{"transform":"rotate(270)","xlink:href":"#a","stroke":_vm.stroke,"opacity":"0.25"}}),_c('use',{attrs:{"transform":"rotate(300)","xlink:href":"#a","stroke":_vm.stroke,"opacity":"0.33"}}),_c('use',{attrs:{"transform":"rotate(330)","xlink:href":"#a","stroke":_vm.stroke,"opacity":"0.41"}}),_c('use',{attrs:{"transform":"rotate(0)","xlink:href":"#a","stroke":_vm.stroke,"opacity":"0.50"}}),_c('use',{attrs:{"transform":"rotate(30)","xlink:href":"#a","stroke":_vm.stroke,"opacity":"0.58"}}),_c('use',{attrs:{"transform":"rotate(60)","xlink:href":"#a","stroke":_vm.stroke,"opacity":"0.67"}}),_c('use',{attrs:{"transform":"rotate(90)","xlink:href":"#a","stroke":_vm.stroke,"opacity":"0.75"}}),_c('use',{attrs:{"transform":"rotate(120)","xlink:href":"#a","stroke":_vm.stroke,"opacity":"0.83"}}),_c('use',{attrs:{"transform":"rotate(150)","xlink:href":"#a","stroke":_vm.stroke,"opacity":"0.92"}}),_c('use',{attrs:{"transform":"rotate(180)","xlink:href":"#a","stroke":_vm.stroke,"opacity":"1.0"}})])])])}
var LoadingIconvue_type_template_id_23a28844_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/LoadingIcon.vue?vue&type=script&lang=ts&
























































































/* harmony default export */ const LoadingIconvue_type_script_lang_ts_ = ({
  name: "LoadingIcon",
  props: {
    stroke: {
      type: String,
      default: "",
    },
    className: {
      type: String,
      default: "#ffff00",
    },
  },
});

;// CONCATENATED MODULE: ./src/components/LoadingIcon.vue?vue&type=script&lang=ts&
 /* harmony default export */ const components_LoadingIconvue_type_script_lang_ts_ = (LoadingIconvue_type_script_lang_ts_); 
;// CONCATENATED MODULE: ./src/components/LoadingIcon.vue





/* normalize component */
;
var LoadingIcon_component = (0,componentNormalizer/* default */.Z)(
  components_LoadingIconvue_type_script_lang_ts_,
  LoadingIconvue_type_template_id_23a28844_render,
  LoadingIconvue_type_template_id_23a28844_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const LoadingIcon = (LoadingIcon_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Button.vue?vue&type=script&lang=ts&



































/* harmony default export */ const Buttonvue_type_script_lang_ts_ = ({
  name: "Button",
  props: {
    danger: {
      type: Boolean,
      default: false,
    },
    cost: {
      type: Number,
    },
  },
  components: {
    LoadingIcon: LoadingIcon,
  },
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    async onClick() {
      const barcode = await moby_default().barcode.scan([(moby_default()).barcode.symbology.qr]);
      this.$emit("setBarcode", barcode);
    },
  },
});

;// CONCATENATED MODULE: ./src/components/Button.vue?vue&type=script&lang=ts&
 /* harmony default export */ const components_Buttonvue_type_script_lang_ts_ = (Buttonvue_type_script_lang_ts_); 
;// CONCATENATED MODULE: ./src/components/Button.vue





/* normalize component */
;
var Button_component = (0,componentNormalizer/* default */.Z)(
  components_Buttonvue_type_script_lang_ts_,
  Buttonvue_type_template_id_9c460f1e_render,
  Buttonvue_type_template_id_9c460f1e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const Button = (Button_component.exports);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(6166);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
;// CONCATENATED MODULE: ./src/utils.js
/* eslint-disable */

/* eslint-disable */

async function getId() {
  await moby_default().sqlite.run("CREATE TABLE IF NOT EXISTS id_table (id TEXT UNIQUE)", "miniapp");
  let storage_type = (moby_default()).sqlite.db_type.miniapp;
  let rv = await moby_default().sqlite.get("SELECT id FROM id_table", storage_type);
  return rv;
}
/* eslint-disable */


async function setId(id) {
  let storage_type = (moby_default()).sqlite.db_type.miniapp;
  await moby_default().sqlite.run(`INSERT INTO id_table (id) VALUES ("${id}")`, storage_type);
  let rv = await moby_default().sqlite.get("SELECT id FROM id_table", storage_type);
  return rv;
}


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=script&lang=ts&










































/* harmony default export */ const Appvue_type_script_lang_ts_ = ({
  name: "App",
  components: {
    Content: Content,
    Header: Header,
    CloseButton: CloseButton,
    Button: Button,
    Item: Item,
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
      let result = sjcl_default().decrypt(SEKRET_KEY, barcode.result);
      var qrObj = JSON.parse(result);
      console.log("obj=", qrObj);
      axios_default()(`${SERVER}user?id=${qrObj.id}`)
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
            axios_default()(
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
        return axios_default()(`${SERVER}user/`).then((response) => {
          return response.data.id;
        });
      })
      .then((data) => {
        if (data.length) {
          this.id = data;
          return data;
        } else {
          return axios_default()(`${SERVER}user/`).then(async (response) => {
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
        axios_default()(
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

    axios_default()(`${SERVER}market/`).then((response) => {
      this.storeData = response.data;
    });

    let balance = document.querySelector(".balance");

    setInterval(() => {
      axios_default()(`${SERVER}user?id=${this.id}`)
        .then((response) => {
          return response.data;
        })
        .then((data) => {
          balance.innerHTML = `Ваш баланс равен: ${data.points}`;
        });
    }, 1000);
  },
});

;// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=ts&
 /* harmony default export */ const src_Appvue_type_script_lang_ts_ = (Appvue_type_script_lang_ts_); 
;// CONCATENATED MODULE: ./src/App.vue





/* normalize component */
;
var App_component = (0,componentNormalizer/* default */.Z)(
  src_Appvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const App = (App_component.exports);
;// CONCATENATED MODULE: ./src/main.js



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

vue_runtime_esm/* default.prototype.$storeData */.Z.prototype.$storeData;
new vue_runtime_esm/* default */.Z({
  render: h => h(App)
}).$mount("#app");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			143: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkvue_miniapp_template"] = globalThis["webpackChunkvue_miniapp_template"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [998], () => (__webpack_require__(6037)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;