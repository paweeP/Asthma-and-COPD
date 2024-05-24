<template>
  <header
    class="text-center"
    style="
      padding: 20px;
      background: linear-gradient(to top, #43BFC7, #43C6DB);
      color: white;
    "
  >
    <h1>
      แนวทางปฏิบัติฉุกเฉินเมื่อเกิดอาการหอบ?
    </h1>
    <h2>ตอนนี้ท่านมีอาการหอบหรือไม่</h2>
  </header>

  <main class="d-flex justify-content-center align-items-center mt-5">
  <div class="card-body">
    <div class="card-text">
      <div @click="goToNoAsthmaView" class="noasthe-body">
        <div class="content">ไม่มีอาการหอบ</div>
      </div>

      <div @click="goToAsthmaC" class="asthe-body">
        <div class="content">
          <div class="border-bottom border-1">หอบ</div>
          <div class="text-a">ตื่นมาไอตอนกลางคืน</div>
          <div class="text-a">แน่นหน้าอก หวีด</div>
          <div class="text-a">ค่าสมรรถภาพปอด 50 - 80% ของค่าสูงสุด</div>
        </div>
      </div>

      <div @click="goToHardAsthema" class="hardasthe-body">
        <div class="content">
          <div class="border-bottom border-1">หอบมาก</div>
          <div class="text-a">พูดได้เป็นคำ ไม่เป็นประโยค</div>
          <div class="text-a">หน้าเขียว</div>
          <div class="text-a">ค่าสมรรถภาพปอดน้อยกว่า 50% ของค่าสูงสุด</div>
        </div>
      </div>
    </div>
  </div>
</main>
</template>

<script>
export default {
  name: "AsthmaView",
  methods: {
    goToNoAsthmaView() {
      this.$router.push("/noasthema");
    },
    goToAsthmaC() {
      this.$router.push("/asthemac");
    },
    goToHardAsthema() {
      this.$router.push("/hardasthema");
    },
  },
};
</script>

<style scoped>
.card-body {
  width: 95vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-left: 10px;
  margin-right: 10px;
}

.card-text {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.noasthe-body,
.asthe-body,
.hardasthe-body {
  color: white;
  border: 1px solid #ccc;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-bottom: 20px;
  flex-grow: 1;
  padding: 10px;
}

.noasthe-body {
  background-color: green;
  width: 50vw;
}

.asthe-body {
  background-color: yellow;
  color: black;
  width: 50vw;
}

.hardasthe-body {
  background-color: red;
  color: white;
  width: 50vw;
}

.content {
  font-size: 25px;
  line-height: 1.5;
}

.border-1 {
  border-bottom: 1px solid #6c757d;
}

.text-center {
  text-align: center;
}

.header {
  padding: 20px;
  color: white;
}

@media (min-width: 768px) {
  .card-body {
    width: 80vw;
    height: 60vh;
  }
}

h1 {
  font-size: 3vw;
  margin-bottom: 2vh;
}

h2 {
  font-size: 2vw;
}
</style>
