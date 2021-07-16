<template>
  <div id="diary">
    <div id="btn">
      <button>读</button>
      <button>写</button>
      <button>改</button>
    </div>
    <div id="content"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#diary {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}
#btn button {
  width: 5vw;
  height: 5vw;
  border: none;
  border-radius: 50%;
  background-color: rgb(229, 248, 253);
  color: gray;
  font-size: 1.2vw;
  font-weight: 600;
}
#btn {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 5vw;
  height: 30vw;
  /* background-color: black; */
  margin-left: 2vw;
}
#btn button:hover {
  background-color: lightblue;
  color: white;
  animation: btnAnimate 2s ease infinite;
}
@keyframes btnAnimate {
  0% {
    transform: scale(1.2, 1.2) rotate(0deg);
  }
  100% {
    transform: scale(1.2, 1.2) rotate(360deg);
  }
}
#content {
  background-color: gray;
  width: 80%;
  height: 80%;
  margin-left: 2.2vw;
}
</style>