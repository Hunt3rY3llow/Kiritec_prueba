/* eslint-disable */
<template>
   <v-app >
      <v-main>
         <v-container>
            <v-layout align-center justify-center>
               <v-flex xs12 sm12 md12>
                  <v-card min-width=970px class="elevation-12">
                     <v-toolbar dark color="primary">
                        <v-toolbar-title>Formulario de Registro</v-toolbar-title>
                     </v-toolbar>
                     <v-card-text>
                     
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

                           <v-btn class="mt-4" color="primary" @click="register">Crear cuenta</v-btn>
                     
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
  import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
  import {useRouter} from 'vue-router';
  const email=ref("");
  const password=ref("");
  const router = useRouter();
  const register =() =>{
   createUserWithEmailAndPassword(getAuth(),email.value,password.value)
   .then((data)=>{
    console.log("Usuario registrado");
    router.push('/');
   })
  }
</script>

