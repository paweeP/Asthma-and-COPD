<template>
  <div>
    <header
      class="text-center"
      style="
        padding: 20px;
        background: linear-gradient(to top, #43bfc7, #43c6db);
        color: white;
      "
    >
      <h1>แนวทางปฏิบัติฉุกเฉินเมื่อเกิดอาการปอดกั้นเรื้องรัง?</h1>
      <h2>ตอนนี้ท่านมีอาการปอดกั้นเรื้อรังเหรือไม่</h2>
    </header>

    <main class="d-flex justify-content-center align-items-center mt-5">
      <div class="card-body">
        <div class="card-text">
          <div @click="goToNoCopdView" class="noasthe-body">
            <div class="content">
              <div class="border-bottom border-2">อาการปกติ</div>
              <div class="text-a">- ไม่มีอาการหอบ</div>
              <div class="text-a">- ทำกิจวัตรประจำวันได้ตามปกติ</div>
              <div class="text-a">- ไอเสมหะออกง่าย</div>
              <div class="text-a">- นอนหลับดี</div>
              <div class="text-a">- รับประทานอาหาร</div>
              <div class="text-a">- ออกกำลังกายได้</div>
            </div>
          </div>

          <div @click="goToCopdC" class="asthe-body">
            <div class="content">
              <div class="border-bottom border-2">อาการแย่ลงจากโรค</div>
              <div class="text-a">- หายใจหอบ</div>
              <div class="text-a">- ทำกิจวัตรประจำวันไม่ได้ตามปกติ</div>
              <div class="text-a">- ไอมากขึ้น</div>
              <div class="text-a">- เสมหะเหนียวข้น และเปลี่ยนสี</div>
              <div class="text-a">- มีไข้</div>
              <div class="text-a">- นอนไม่หลับ</div>
              <div class="text-a">- เบื่ออาหาร</div>
              <div class="text-a">- สมาธิลดลง</div>
            </div>
          </div>

          <div @click="goToHardCopd" class="hardasthe-body">
            <div class="content">
              <div class="border-bottom border-2">อาการกำเริบและอันตราย</div>
              <div class="text-a">- หายใจหอบมาก</div>
              <div class="text-a">- ไอถี่ และมีเสมหะมาก</div>
              <div class="text-a">- มีเลือดในเสมหะ</div>
              <div class="text-a">- เจ็บหน้าอก</div>
              <div class="text-a">- สับสน พูดไม่รู้เรื่อง</div>
              <div class="text-a">- เป็นลม หมดสติ</div>
              <div class="text-a">- ใช้ยาสูดฉุกเฉินแล้วไม่ดีขึ้น</div>
              <div class="text-a">- มีไข้หนาวสั่น</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "CopdView",
  methods: {
    goToNoCopdView() {
      this.$router.push("/nocopd");
    },
    goToCopdC() {
      this.$router.push("/copdc");
    },
    goToHardCopd() {
      this.$router.push("/hardCopd");
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
  overflow-y: auto;
  margin-left: 10px;
  margin-right: 10px;
}

.card-text {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: 1;
  max-height: 60vh;
}

.text-a {
  font-size: 25px;
  line-height: 1.5;
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
  height: auto;
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
  padding: 10px;
  font-size: 25px;
  line-height: 1.5;
}

.border-bottom {
  border-bottom: 2px solid #000;
}

.text-center {
  text-align: center;
}

@media (min-width: 768px) {
  .card-body {
    width: 80vw;
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
