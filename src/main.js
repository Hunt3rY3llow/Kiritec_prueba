import { createApp } from 'vue'
import App from './App.vue'
import Vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

import router from './router'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5w3O8aZnrbPE2Ti2bUileZEoTSinMRL4",
  authDomain: "loginconvue.firebaseapp.com",
  projectId: "loginconvue",
  storageBucket: "loginconvue.appspot.com",
  messagingSenderId: "952098229031",
  appId: "1:952098229031:web:c0ddfd28ac1034ceccf702"
};

loadFonts()

initializeApp(firebaseConfig);
createApp(App).use(router)
  .use(Vuetify)
  .mount('#app')

