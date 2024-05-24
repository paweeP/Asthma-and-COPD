<template>
  <div class="card text-center ms-2 me-2 mt-4">
    <div class="card-header">
      <h2>อาการกำเริบและอันตราย</h2>
      <p>หายใจหอบมาก</p>
      <p>ไอถี่ และมีเสมหะมาก</p>
      <p>มีเลือดในเสมหะ</p>
      <p>เจ็บหน้าอก</p>
      <p>สับสน พูดไม่รู้เรื่อง</p>
      <p>เป็นลม หมดสติ</p>
      <p>ใช้ยาสูดฉุกเฉินแล้วไม่ดีขึ้น</p>
      <p>มีไข้หนาวสั่น</p>
    </div>
    <div class="card-body">
      <h5 class="card-title">ปฏิบัติดังนี้</h5>
      <div class="card-text">
        <div>- ใช้ยาสูดฉุกเฉิน 4 กดทุก 15 นาที และโทร 1669 ไปห้องฉุกเฉินทันที</div>
      </div>

        <div class="border border-2 rounded-2 mt-3 d-grid gap-2 col-6 mx-auto">
        <div class="mt-2">
          <button class="btn btn-outline-success" @click="goToMDI"><img src="@/assets/icon3.png" alt="MDI" style="width: 50px"> MDI</button>
        </div>

        <div class="mt-2">
          <button class="btn btn-outline-success" @click="goToSpacer">
            <img src="@/assets/icon2.png" alt="MDI + Spacer" style="width: 50px"> MDI + Spacer
          </button>
        </div>

        <div class="mt-2">
          <button class="btn btn-outline-success" @click="goToTurbuhaler"><img src="@/assets/icon.png" alt="Turbuhaler" style="width: 50px"> Turbuhaler</button>
        </div>

        <div class="mt-2">
          <button class="btn btn-outline-success" @click="goToAccuhaler"><img src="@/assets/accuhalaricon.png" alt="Accuhaler" style="width: 50px"> Accuhaler</button>
        </div>

        <div class="mt-2 pb-2">
          <button class="btn btn-outline-success" @click="goToHandihaler"><img src="@/assets/handihalericon.png" alt="Handihaler" style="width: 50px"> Handihaler</button>
        </div>
      </div>
      </div>

  </div>
</template>

<script>
export default {
  name: "HardCopd",
  methods: {
    goToAccuhaler() {
      this.$router.push("/accuhaler");
    },
    goToHandihaler() {
      this.$router.push("/handihaler");
    },
    goToMDI() {
      this.$router.push("/mdi");
    },
    goToSpacer() {
      this.$router.push("/spacer");
    },
    goToTurbuhaler() {
      this.$router.push("/turbuhaler");
    },
  },
};
</script>

<style scoped>
.btn-outline-success {
  width: 95%;
}
</style>
