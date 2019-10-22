import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import BusinessClearance from "@/views/BusinessClearance.vue";
import BarangayIndigency from "@/views/BarangayIndigency.vue";
import BarangayClearance from "@/views/BarangayClearance.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/business-clearance",
    name: "business-clearance",
    component: BusinessClearance
},
{
    path: "/barangay-clearance",
    name: "barangay-clearance",
    component: BarangayClearance
},
{
    path: "/barangay-indigency",
    name: "barangay-indigency",
    component: BarangayIndigency
}
];



const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
