<template>
  <div>
    <h6>reactividad en arreglos</h6>
    <q-input v-model="nuevaTarea"></q-input>
    <p></p>
    <q-btn label="agregar" color="primary" @click="agregar"></q-btn>
    <q-btn label="agregar objeto" color="green" @click="agregarObjeto"></q-btn>
    <p>{{ tareas }}</p>
    <!--utilizacion de vfor en array de listas-->
    <ul>
      <li v-for="(item, key) in tareas" :key="key">
        {{ item.nombre }}-{{ item.hecho }}
        <q-btn
          color="red"
          icon="delete"
          label="Borrar"
          @click="eliminar(key)"
        />
      </li>
    </ul>
  </div>
</template>

<script setup>
//importaciones
import { ref } from "vue";

//variables o propiedades
/* se incializa variable de arregloen vacío, no es necesario indicar si es string o otro tipo de variables*/
const tareas = ref([]);
const nuevaTarea = ref("");
//metodos y funciones js
function agregar() {
  /**para pásar valores en la funcioncion se agrega en la sintaxiel el termino .push */
  tareas.value.push(nuevaTarea.value);
}
function agregarObjeto() {
  //probando array de objetos
  tareas.value.push({ nombre: nuevaTarea.value, hecho: false });
  nuevaTarea.value = "";
}
//agregando funcion eliminar
function eliminar(key) {
  console.log(key);
  //indico la cantauidad de elementos a eliminar a partir del key
  tareas.value.splice(key, 1);
}
</script>

<style lang="scss" scoped></style>
