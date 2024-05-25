const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "home", component: () => import("pages/IndexPage.vue") },
      { path: "holamundo", component:() => import ("pages/HolaMundoPage.vue")},
      { path: "propiedadescomputadas", component: () =>import ("pages/propiedadesComputadaPage.vue")},
      { path: "reactividadenarrays", component: ()=> import ("pages/ReactividadArreglosPage.vue")},
      { path: "clasesyestilos", component: ()=> import ("pages/EstiloyClases.vue")},
      { path: "renderizadocondicional", component: () => import ("pages/IfShowPage.vue")},
      { path: "manejoeventos", component:() => import ("pages/ManejodeEventosPage.vue")}

    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
