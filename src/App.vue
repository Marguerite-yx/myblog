<template>
  <div id="app">
    <div class="navbar">
      <Navbar></Navbar>
    </div>
    <div id="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/navbar.vue";
import router from "./router/index";
export default {
  name: "App",
  components: {
    Navbar,
  },
  data() {
    return {};
  },
  methods: {},
  router,
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.navbar {
  margin-top: 10vh;
}
#content {
  position: absolute;
  width: 65vw;
  height: 80vh;
  left: 17.5vw;
  top: 10vh;
  box-shadow: 0 0 5px lightgrey;
  min-height: 320px;
}
</style>
