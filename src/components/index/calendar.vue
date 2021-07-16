<template>
  <div class="wrap">
    <el-calendar v-model="value" id="calendar"></el-calendar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: new Date(),
    };
  },
};
</script>

<style scoped>
</style>
<style>
.wrap {
  margin-top: 5px;
}
.wrap .el-calendar-table .el-calendar-day {
  font-size: 1vw;
  height: 2vw;
  display: flex;
  justify-content: center;
  align-items: center;
  /* color: gray; */
}
.el-calendar .el-calendar__title {
  font-size: 1vw;
  color: gray;
}
.el-calendar .el-button {
  color: gray;
  width: 5vw;
  height: 2vw;
  min-width: 55px;
  min-height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.wrap .el-calendar-table .el-calendar-day:hover {
  background-color: lightblue;
  color: white;
}
.wrap .el-calendar-table .current {
  color: gray;
}
.wrap .el-calendar-table .is-selected {
  background-color: yellow;
  color: green;
}
.wrap .el-calendar-table .is-today {
  color: red !important;
}

.wrap .el-calendar__body {
  width: 30vw;
  min-width: 240px;
}
.wrap .el-calendar__header {
  width: 30vw;
  min-width: 240px;
}
.wrap .el-calendar-table thead {
  font-size: 1vw;
}

.el-calendar .el-button:hover {
  background-color: lightblue;
  color: white;
}
</style>