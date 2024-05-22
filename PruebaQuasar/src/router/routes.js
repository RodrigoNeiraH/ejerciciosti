const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/HolaMundoPage.vue") },
      { path: "holamundo", component: () => import("pages/HolaMundoPage.vue") },
      {
        path: "Arreglos",
        component: () => import("pages/ReactividadArreglosPage.vue"),
      },
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
