<template>
  <div class="about">
    <div class="card text-center">
        <div class="card-body">
          <div class="card-text">

              <button @click="GotoForm" class="btn btn-secondary">ประเมินระดับอาการหอบหืด</button>

          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  methods:{
    GotoForm(){
      this.$router.push('/formtest');
    }
  }
}
</script>