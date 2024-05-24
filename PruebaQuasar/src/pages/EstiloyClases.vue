<template>
  <div>
    <h6>Reactidad de clases y estilos</h6>
    <p>
      <q-toggle v-model="isPrimary" color="green" label="es primary" />
    </p>
    <!-- clases de estilops quasar, quando agrego : esto sera interpretado por vue framwork
en donde se evalua una condicion 1er ejemplo-->
    <p class="q-pa-lg" :class="{ 'bg-primary ': isPrimary }">
      un texto cualquiera
    </p>
    <!-- trabajando con construccion de objeto de estilo con clases con propiedad computada -->
    <p>
      <q-toggle v-model="isDark" color="green" label="es Dark" />
    </p>
    <p :class="estilo">el fondo Dark</p>
    <!-- cambiando color de forma reactiva con proiedad computada por style -->
    <p></p>

    <p :style="{'background-color': colorFondo}">Cambiando color de fondo</p>
    <!-- este control permite hacer cambio de color  -->
    <q-color v-model="colorFondo" inline class="my-picker" style="width: 80px"/>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

//instanciar propiedad reactiva
const isPrimary = ref(false);
const isDark = ref(false);

//nueva variable para ejercico incializada como vacio
const colorFondo = ref("");

//propiedadcomputada para ejercicio 2, se necesita para hacer que el objeto cambie
const estilo = computed(() => {
  return {
    "bg-dark": isDark.value,
    "text-white": isDark.value,
    "q-pa-lg": isDark.value,
  };
});


</script>

<style lang="scss" scoped></style>
