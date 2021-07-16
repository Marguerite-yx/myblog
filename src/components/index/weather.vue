<template>
  <div>
    <div id="he-plugin-standard"></div>
  </div>
</template>

<script>
window.WIDGET = {
  CONFIG: {
    modules: "01234",
    background: "4",
    backgroundColor: "ADD8E6",
    tmpColor: "FFFFFF",
    tmpSize: "16",
    cityColor: "FFFFFF",
    citySize: "16",
    aqiColor: "FFFFFF",
    aqiSize: "16",
    weatherIconSize: "24",
    alertIconSize: "18",
    padding: "10px 10px 10px 10px",
    shadow: "0",
    language: "auto",
    fixed: "false",
    vertical: "top",
    horizontal: "left",
    key: "d83a4dc9ec844d6983a60f6d5269534c",
  },
};
export default {
  created() {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://widget.qweather.net/standard/static/js/he-standard-common.js?v=2.0";
    document.getElementsByTagName("head")[0].appendChild(script);
  },
};
</script>

<style>
</style>