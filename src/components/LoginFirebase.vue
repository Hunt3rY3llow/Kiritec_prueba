/* eslint-disable */
<template>
   <v-app >
      <v-main>
         <v-container>
            <v-layout align-center justify-center>
               <v-flex xs12 sm12 md12>
                  <v-card min-width=970px class="elevation-12">
                     <v-toolbar dark color="primary">
                        <v-toolbar-title>Login form</v-toolbar-title>
                     </v-toolbar>
                     <v-card-text>
                     <form ref="form" @submit.prevent="login()">
                      
                            <v-text-field
                              v-model="email"
                              name="email"
                              label="Email Usuario"
                              type="text"
                              placeholder="Correo usuario"
                              required
                           ></v-text-field>
                           
                            <v-text-field
                              v-model="password"
                              name="password"
                              label="Enter password"
                            type="password"
                               placeholder="Contraseña"
                               required
                           ></v-text-field>

                            
                           <v-btn class="mt-4" color="primary" @click="register">Login</v-btn>
                      </form>

                           <router-link to="/Register">Aun no tienes cuenta?, Registrate Aqui</router-link>
                     </v-card-text>
                  </v-card>
                
               </v-flex>
            </v-layout>
         </v-container>
      </v-main>
   </v-app>
</template>

<script setup>
 /* eslint-disable */
  import {ref} from "vue";
  import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
  import {useRouter} from 'vue-router';
  const email=ref("");
  const password=ref("");
  const router = useRouter();
  const register =() =>{
    const auth = getAuth();

   signInWithEmailAndPassword(auth,email.value,password.value)
   .then((data)=>{
    console.log("Acceso correcto");
    router.push('/Dashboard');
   })
   .catch( error =>{
   alert(error)
   switch(error.code){
    case "auth/weak-password":
      alert("Contraseña debil, Minimo 6 caracteres");
      break;
    case "auth/internal-error":
      alert("Error de correo o campo vacio");
      break;
      default:
      break;

   }
   }) 
  }
</script>


