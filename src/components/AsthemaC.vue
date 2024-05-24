<template>
  <div class="card text-center ms-2 me-2 mt-4">
    <div class="card-header">
      <h2>หอบ</h2>
      <p>ตื่นมาไอตอนกลางคืน</p>
      <p>แน่นหน้าอก หวีด</p>
      <p>ค่าสมรรถภาพปอด 50 - 80% ของค่าสูงสุด</p>
    </div>
    <div class="card-body">
      <h5 class="card-title">ปฏิบัติดังนี้</h5>
      <div class="card-text">
        <div>- พ้นยาฉุกเฉิน ทุก 15 นาที 3 ชุด</div>
        <div>- pMDI 1 ชุด คือ กดยา 4 ครั้ง แต่ล่ะครั้งห่างกัน 10 วินาที</div>
        <div>
          - Turbuhaler 1 ชุด คือ 1 สูด
        </div>
        <div>
          - ถ้าพ่น 3 ชุดแล้วอาการไม่ดีขึ้น โทรเรียกรถพยาบาลมารับ
        </div>
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
  name: "AsthemaC",
  methods :{
    goToAccuhaler(){
        this.$router.push('/accuhaler');
    },
    goToHandihaler(){
        this.$router.push('/handihaler');
    },
    goToMDI(){
        this.$router.push('/mdi');
    },
    goToSpacer(){
        this.$router.push('/spacer');
    },
    goToTurbuhaler(){
        this.$router.push('/turbuhaler');
    },
  }
};
</script>

<style scoped>
 .btn-outline-success{
    width: 95%;
 }
</style>
