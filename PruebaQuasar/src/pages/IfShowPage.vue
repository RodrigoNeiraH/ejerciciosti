<template>
  <div class="q-ma-lg">
      <h5>v-show y v-if </h5>
      <p>
        <q-btn color="primary" label="Mostrar/Ocultar" @click="mostrar = !mostrar" />
      </p>
      <!-- parrafos con v- if y v-show que se muestran base a desencadenar el evneto en el btn
      segun el valor del boleano en la constante mostrar seteada en el script del js es basicamente
      muestralo si se cumple esta condicion-->
      <p v-show="mostrar" class="bg-primary"> este es un texto a mostrar</p>

      <p v-if="mostrar" class="bg-secondary"> este es otro texto</p>

      <p v-if="objeto"> Nombre: {{objeto.nombre}}</p> <!-- es lo mismo que decir if =objeto!= null -->
      <p v-if="objeto"> Edad: {{objeto.edad}}</p>
      <q-btn color="primary" icon="check" label="Mostrar Objeto" @click="objeto={nombre: 'Juan', edad: 20}" />

  </div>
</template>

<script setup>
//reactividad
import { ref } from "vue";

//propiedad reactiva
const mostrar =ref(false);
const objeto = ref(null);
</script>

<style lang="scss" scoped>

</style>
