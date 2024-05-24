<template>
  <div id="app">
    <div>
      <Navigator />
      <router-view />
    </div>
  </div>
</template>

<script>
import Navigator from "./components/Navigator.vue";

export default {
  name: "App",
  components: {
    Navigator,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}

#app {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

#app {
  background: linear-gradient(to right, #DBE9FA, #82CAFF);
}

#app > div {
  height: 100%;
  overflow: auto;
}
</style>
