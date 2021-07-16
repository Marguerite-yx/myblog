<template>
  <div>
    <div id="wrap">
      <div id="top_part">
        <div id="wrap1">
          <div class="info_card" v-if="card1">
            <span>姓名：杨烜</span>
            <span>年龄：23</span>
            <span>籍贯：贵州省遵义市</span>
            <span>状态：目前在北京实习</span>
          </div>
          <button @click="info1_click">个人信息</button>
        </div>
        <div id="wrap2">
          <button @click="info2_click">教育背景</button>
          <div class="info_card" v-if="card2">
            <span>小学：遵义县第一小学</span>
            <span>初中：遵义市第一初级中学</span>
            <span>高中：遵义市第一中学</span>
            <span>大学：厦门大学信息学院软工系</span>
            <span>状态：目前大三，2022年毕业</span>
          </div>
        </div>
      </div>
      <div id="bottom_part">
        <div id="wrap3">
          <div class="info_card" v-if="card3">
            <span>喜欢唱歌、跳舞、阅读、看书、旅游</span>
          </div>
          <button @click="info3_click">兴趣爱好</button>
        </div>
        <div id="wrap4">
          <button @click="info4_click">专业知识</button>
          <div class="info_card" v-if="card4">
            <span>one 熟练使用html、css、以及js</span>
            <span>two 熟悉vue全家桶的使用</span>
            <span>three 熟悉版本控制工具git</span>
            <span>four 了解nodejs、Java等</span>
            <span>five 了解element-ui组件库开发</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      card1: false,
      card2: false,
      card3: false,
      card4: false,
    };
  },
  methods: {
    info1_click() {
      this.card1 = !this.card1;
    },
    info2_click() {
      this.card2 = !this.card2;
    },
    info3_click() {
      this.card3 = !this.card3;
    },
    info4_click() {
      this.card4 = !this.card4;
    },
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
#top_part,
#bottom_part {
  flex: 1;
  display: flex;
}
#wrap1,
#wrap2,
#wrap3,
#wrap4 {
  flex: 1;
  position: relative;
  border: 0;
}
#wrap {
  /* 图片拼接 */
  width: 60vw;
  height: 56vh;
  display: flex;
  flex-direction: column;
  background-image: url("../../assets/bg2.png");
  min-height: 230px;
}

#wrap1 {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}
#wrap2 {
  display: flex;
  align-items: flex-end;
}
#wrap3 {
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
}
#wrap4 {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}
#wrap button {
  width: 6vw;
  height: 6vw;
  color: gray;
  font-size: 1vw;
  background-color: rgb(245, 245, 245);
  position: absolute;
  padding: 0;
  min-width: 50px;
  min-height: 50px;
}
#wrap button:hover {
  color: white;
  background-color: lightblue;
}
#wrap1 button {
  border-radius: 6vw 0 0;
  border: none;
  right: 0;
  bottom: 0;
}
#wrap2 button {
  border-radius: 0 6vw 0 0;
  border: none;
  left: 0;
  bottom: 0;
}
#wrap3 button {
  border-radius: 0 0 0 6vw;
  border: none;
  right: 0;
  top: 0;
}
#wrap4 button {
  border-radius: 0 0 6vw 0;
  border: none;
  left: 0;
  top: 0;
}
.info_card {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 1vw;
  color: gray;
  background-image: url("../../assets/card.png");
  background-size: cover;
  justify-content: center;
  align-items: center;
}
</style>