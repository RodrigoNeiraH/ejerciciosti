<template>
  <div>
    <h6>reactividad en arreglos</h6>
    <q-input v-model="nuevaTarea"></q-input>
    <p></p>
    <q-btn label="agregar" @click="agregar"></q-btn>
    <p>{{ tareas }}</p>
    <!--utilizacion de vfor-->
    <ul>
      <li v-for="(item, key) in tareas" :key="key">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script setup>
//importaciones
import { ref } from "vue";

//variables o propiedades
/* se incilñiza variable de arreglo*/
const tareas = ref([]);
const nuevaTarea = ref("");
//metodos y funciones js
function agregar() {
  /**para pásar valores en la funcioncion se agrega en la sintaxiel el termino .push */
  tareas.value.push(nuevaTarea.value);
  nuevaTarea.value = "";
}
</script>

<style lang="scss" scoped></style>
