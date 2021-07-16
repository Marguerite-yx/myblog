<template>
  <div>
    <Nav></Nav>
    <div id="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Nav from "./common/nav.vue";
export default {
  components: {
    Nav,
  },
};
</script>

<style scoped>
#content {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
</style>