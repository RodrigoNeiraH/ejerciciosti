<template>
  <q-page class="flex flex-center">
    <h2>Propiedades reactivas con vue 3</h2>
  </q-page>
</template>

<script setup>
// reactive simplifica el tener que crear api de compiscion setup y return
// pero solo retorna objetos y no valores primitivos como number o string
// import { reactive } from "vue";

// para elminiar esa limitante se utiliza ref
import { ref } from "vue";
</script>

<style></style>
