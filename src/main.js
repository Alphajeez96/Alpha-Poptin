import {createApp} from "vue";
import App from "./App.vue";
import "./assets/styles/main.scss";
import "./assets/styles/index.css";
import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faUserSecret} from "@fortawesome/free-solid-svg-icons";
import {faStar} from "@fortawesome/free-regular-svg-icons";

library.add(faUserSecret);
library.add(faStar);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
