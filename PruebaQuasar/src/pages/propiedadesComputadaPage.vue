<template>
  <div>
    <h6>Propiedasdes computadas</h6>
     es un metodo que se realiza sobre cierta data y que devuielve un valor y que son reactivas
    <q-input v-model="nuevaTarea"></q-input>
    <p></p>
    <q-btn label="agregar" color="primary" @click="agregar"></q-btn>
    <p>{{ tareas }}</p>
    <!--utilizacion de vfor en array de listas-->
    <ul>
      <!-- reenderizando sobre propiedad tareasPendientes -->
      <li v-for="(item, key) in tareasPendientes" :key="key">
        {{ item.nombre }}-{{ item.hecho }}
        <q-btn
          color="red"
          icon="delete"
          label="Borrar"
          @click="eliminar(item)"
        />
        <!-- se agrega control para probar propiedades computadas -->
        <q-toggle v-model="item.hecho" color="primary" />
      </li>
    </ul>
    <p>Terminadas: {{ cuentaTerminadas }}</p>
    <p>
      Ocultar completadas: <q-toggle v-model="ocultarCompletados"></q-toggle>
    </p>
  </div>
</template>

<script setup>
//importaciones, se agrega computed desde vue para agregar propiedades computadas
import { ref, computed } from "vue";

//variables o propiedades
const tareas = ref([]);
const nuevaTarea = ref("");
const ocultarCompletados = ref(false);

//propiedades computadas funcion de preuba 1
// computed debe recibir por dentro un arrow function para su funcionamiento,
//en esta funcion contara las tareas terminadas
const cuentaTerminadas = computed(() => {
  // declaro un let para variable interna
  let conta = 0;
  //recorriendo arreglo con foreach y contando
  tareas.value.forEach((item) => {
    if (item.hecho) {//esto es lo miso que decir if(item.hecho==true)
      conta++;
    }
  });
  return conta;
});

// creado propiedad computada sobre data para crear vfor en base a treas pendientes
const tareasPendientes = computed(() => {
  if (ocultarCompletados.value) {
    return tareas.value.filter((item) => !item.hecho); // es lo mismo que decir (item)=>item.hecho==false
  } else {
    return tareas.value;
  }
});
//metodos y funciones
function agregar() {
  tareas.value.push({ nombre: nuevaTarea.value, hecho: false });
  nuevaTarea.value = "";
}

//agregando funcion eliminar, la variable tarea hace referencia la objeto completo
function eliminar(tarea) {
  console.log(tarea);
  //se agrega filtro para saber que tarea eliminar cuando item sea diferente de tarea
  tareas.value = tareas.value.filter((item) => item != tarea);
}
</script>

<style lang="scss" scoped></style>
