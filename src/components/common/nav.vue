<template>
  <div id="nav">
    <button class="btn" id="btn1" @click="toInfo">信息</button>
    <button class="btn" id="btn2" @click="toPic">照片</button>
    <button class="btn" id="btn3" @click="toCalendar">日历</button>
    <button class="btn" id="btn4" @click="toWeather">天气</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timer: null,
    };
  },
  created() {},
  mounted() {
    this.moveBtn();
  },
  methods: {
    moveBtn() {
      let btn = Array.from(document.getElementsByClassName("btn"));
      console.log(btn);
      //   window.requestAnimationFrame(animation);
      //   function animation() {
      //     console.log(111);
      //     let locX = Math.floor(Math.random() * (100 % -70));
      //     let locY = Math.floor(Math.random() * 50);
      //     btn[0].style.left = locX + "px";
      //     btn[0].style.top = locY + "px";
      //     window.requestAnimationFrame(animation);
      //   }
    },
    toInfo() {
      this.$router.push("/index/info");
    },
    toPic() {
      this.$router.push("/index/pic");
    },
    toCalendar() {
      this.$router.push("/index/calendar");
    },
    toWeather() {
      this.$router.push("/index/weather");
    },
  },
};
</script>

<style scoped>
#nav {
  position: relative;
  width: 100%;
  height: 9vw;
}
.btn {
  padding: 0;
  width: 5vw;
  height: 5vw;
  font-size: 1.5vw;
  border-radius: 50%;
  border: lightblue;
  background-color: rgb(229, 248, 253);
  color: rgb(192, 191, 191);
  font-weight: 600;
  position: absolute;
  min-width: 3vw;
  min-height: 3vw;
}
.btn:hover {
  background-color: lightblue;
  color: white;
}
@keyframes animation1 {
  0% {
    left: 0;
    top: 1vw;
  }
  12% {
    left: 12%;
    top: 3vw;
  }

  24% {
    left: 24%;
    top: 1vw;
  }
  36% {
    left: 36%;
    top: 3vw;
  }
  48% {
    left: 48%;
    top: 1vw;
  }
  60% {
    left: 60%;
    top: 3vw;
  }
  72% {
    left: 72%;
    top: 1vw;
  }
  84% {
    left: 84%;
    top: 3vw;
  }
  100% {
    left: calc(100% - 5vw);
    top: 1vw;
  }
}
#btn1 {
  animation: animation1 15s ease-out infinite alternate;
}
#btn2 {
  animation: animation1 18s ease-in-out infinite alternate;
}
#btn3 {
  animation: animation1 21s ease infinite alternate;
}
#btn4 {
  animation: animation1 24s ease-in infinite alternate;
}
</style>