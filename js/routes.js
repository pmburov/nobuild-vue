const routes = [
  {
    path: "/",
    // component: Layout,
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("/js/pages/home.js"),
      },
      {
        path: "/dates",
        name: "dates",
        component: () => import("/js/pages/dates.js"),
      },
      {
        path: "/store",
        name: "store",
        component: () => import("/js/pages/store.js"),
      },
      {
        path: "/tailwindcss",
        name: "tailwindcss",
        component: () => import("/js/pages/tailwindcss.js"),
      },
    ],
  },
]

export default routes
