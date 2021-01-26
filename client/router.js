import Vue from "vue";
import Router from "vue-router";
import scrollBehavior from './.nuxt/router.scrollBehavior.js'
import {RouterView} from "vue-router";
import Index from "./pages/index.vue";
// import WorkIndex from "./pages/work/index.vue";
import WorkId from "./pages/work/_wid.vue";
// import PopupBase from "./pages/work/PopupBase.vue";
// import PopupLightbox from "./pages/work/PopupLightbox.vue";
// import PopupOverlay from "./pages/work/PopupOverlay.vue";
// import PopupRouterView from "./pages/work/PopupRouterView.vue";
import UserId from "./pages/user/_uid.vue";
// import UserWorkIndex from "./pages/work/index.vue";
// import UserWorkId from "./pages/user/work/_id.vue";
// import TestId from "./pages/test/_id.vue";
// import UserTestId from "./pages/test/_id.vue";

Vue.use(Router)


export function createRouter() {
  return new Router({
    mode: "history",
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
      {
        name: "index",
        path: "/",
        component: Index,
        children: [
          {
          name: "work-wid",
          path: "/work/:wid",
          component: WorkId
          }
        ]
      },
      {
        name: "user-uid",
        path: "/user/:uid",
        component: UserId,
        children: [
          {
          name: "user-uid-work-wid",
          path: "/work/:wid",
            component: WorkId,
          alias : "work/:wid",
          }
        ]
      }
    ]
  });
}