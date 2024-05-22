<template>
  <div>
    <h6>Propiedades reactivas con vue 3</h6>
    <!-- llamando propiedad -->
    <h6>{{ nombre }}</h6>
    <!-- imput de quesar que permite cambiar variable reactiva  con v-model-->
    <q-input v-model="nombre"></q-input>
    <!-- envia modificacion al javascript, en label puedo utilzar propiedad -->
    <q-btn
      class="primary"
      label="nombre"
      color="primary"
      @click="Modificar"
    ></q-btn>
    <h6>{{ direccion }}</h6>
    <h6>
      {{ direccion.region }} - {{ direccion.pais }} - {{ direccion.ciudad }}
    </h6>
  </div>
</template>

<script setup>
//importaciones para propuiedades reactivas
import { ref } from "vue";

//variables o propiedades
const nombre = ref("Libreta");
const direccion = ref({ region: "latino america", pais: "chile" });

//metodos

function Modificar() {
  console.log(nombre);
  console.log(nombre.value);
  nombre.value = "libreta de notas ABC";
  direccion.value.ciudad = "Santiago";
}
</script>

<style lang="scss" scoped></style>
