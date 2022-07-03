import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

import './index.css'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";


const options= {
    
}

app.use(Toast , options)

app.mount('#app')
