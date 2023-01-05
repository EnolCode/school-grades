import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";

import "./assets/scss/main.scss";

const app = createApp(App);

app.use(createPinia());

app.directive("color-subject", {
    beforeMount: (el, binding) => {
        if(el.textContent === "Math"){
            el.style.color = "yellow"
        }
        if(el.textContent === "History"){
            el.style.color = "rgb(41, 98, 253)"
        }
        if(el.textContent === "Chemistry"){
            el.style.color = "green"
        }
        if(el.textContent === "Music"){
            el.style.color = "violet"
        }
        if(el.textContent === "Physical Education"){
            el.style.color = "orangered"
        }
        
    }
})

app.directive("color-calification", {
    beforeMount: (el, binding) => {
        if(el.innerHTML === "Muy deficiente"){
            el.style.color = "#FF0000"
        }
        if(el.innerHTML === "Deficiente"){
            el.style.color = "#FF4D00"
        }
        if(el.innerHTML === "Suficiente"){
            el.style.color = "#228F41"
        }
        if(el.innerHTML === "Notable"){
            el.style.color = "#00AEFF"
        }
        if(el.innerHTML === "Sobresaliente"){
            el.style.color = "#001FFF"
        }
    }
})

app.mount("#app");
