<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
         <q-btn
          flat
          dense
          round
          icon="home"
          aria-label="home"
          to="/home"
        />

        <q-toolbar-title> Quasar App </q-toolbar-title>
        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

defineOptions({
  name: "MainLayout",
});

const linksList = [
  {
    title: "HolaMundo",
    caption: "Primeros Ejercicos y comprobacion de otros",
    icon: "school",
    link: "holamundo",
  },
   {
    title: "reactividad en Arrays y V-for",
    caption: "estudio de propiedad de reactividad",
    icon: "school",
    link: "reactividadenarrays",
  },
  {
    title: "Propiedades Computadas",
    caption: "estudio de propiedades computadas",
    icon: "school",
    link: "propiedadescomputadas",
  },

  {
    title: "Reactividad de Clases y Estilos",
    caption: "ejercios de reactividad en clases y estilos",
    icon: "school",
    link: "clasesyestilos",
  },
  {
    title: "reenderizado condicional",
    caption: "utilizacion de v-show y v-if",
    icon: "code",
    link: "renderizadocondicional",
  },
  {
    title: "Manejo de eventos",
    caption: "aoprendizaje en manejo de ventos",
    icon: "code",
    link: "manejoeventos",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
