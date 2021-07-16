<template>
  <el-menu
    default-active="1"
    class="navbar"
    active-text-color="lightblue"
    @select="handleSelect"
  >
    <el-menu-item index="1">
      <el-tooltip content="首页" placement="right" popper-class="tips">
        <i class="el-icon-house" style="font-size: 3vw"></i>
      </el-tooltip>
    </el-menu-item>
    <el-menu-item index="2" class="items">
      <el-tooltip content="日志" placement="right">
        <i class="el-icon-edit-outline" style="font-size: 3vw"></i>
      </el-tooltip>
    </el-menu-item>
    <el-menu-item index="3" class="items">
      <el-tooltip content="留言" placement="right">
        <i class="el-icon-chat-line-round" style="font-size: 3vw"></i>
      </el-tooltip>
    </el-menu-item>
    <el-menu-item index="4" class="items">
      <el-tooltip content="相册" placement="right">
        <i class="el-icon-picture-outline" style="font-size: 3vw"></i>
      </el-tooltip>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 1,
    };
  },
  methods: {
    //点击导航跳转路由
    handleSelect(index) {
      if (index == "1") {
        this.$router.push("/index");
      } else if (index == "2") {
        this.$router.push("/diary");
      } else if (index == "3") {
        this.$router.push("/message");
      } else {
        this.$router.push("/photo");
      }
    },
  },
};
</script>

<style scoped>
.navbar {
  width: 8vw;
  height: 80vh;
  background-color: white;
  box-shadow: 1.5px 0 6px lightgray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: white;
  min-height: 320px;
}
.items {
  margin-top: 1.5vw;
}
.el-menu-item .is-active {
  color: lightblue !important;
}
</style>