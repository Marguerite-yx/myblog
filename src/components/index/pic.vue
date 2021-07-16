<template>
  <div>
    <el-carousel :interval="4000" type="card" height="18vw" min-height="200px">
      <el-carousel-item v-for="item in images" :key="item.id">
        <img :src="item.source" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { id: 0, source: require("../../assets/stu1.png") },
        { id: 1, source: require("../../assets/stu2.png") },
        { id: 2, source: require("../../assets/stu3.png") },
        { id: 3, source: require("../../assets/stu4.png") },
      ],
    };
  },
};
</script>

<style scoped>
.el-carousel {
  width: 44vw;
  margin-top: 3.5vw;
  min-width: 270px;
  min-height: 300px;
}
/* .el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
} */

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>