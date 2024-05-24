<template>
  <div @click="toggleNavbar">
    <nav class="tapbar d-flex justify-content-between">
      <i
        class="fa-solid fa-chevron-left mt-3 ms-2"
        style="cursor: pointer"
        @click="goBack"
      ></i>
      <div class="tapbar-top mt-2">
        <div class="home" @click="goHome"><span>HOME</span></div>
      </div>
      <div></div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navigator",
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    goHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.tapbar {
  background: linear-gradient(to right, white, #f8f8f8);
  height: 50px;
  display: flex;
  justify-content: center;
}

.tapbar-top .mt-2 {
  cursor: pointer;
}

.navbar {
  background-color: #f8f8f8;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-top: 1px solid #ccc;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 65px;
}

.navbar-item {
  color: #333333;
  width: 100%;
  text-align: center;
}

.navbar-item.active {
  color: orange;
}

.icon-link {
  display: flex;
  align-items: center;
}

.navbar-start {
  display: flex;
  justify-content: center;
  width: 100%;
}

.home{
  cursor: pointer;
}
</style>
