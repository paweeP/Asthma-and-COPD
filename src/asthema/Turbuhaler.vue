<template>
  <div class="d-flex justify-content-center align-items-center">
    <div class="image-container mt-2">
      <img
        src="@/assets/Turbuhaler.png"
        alt="รูปภาพ"
        class="responsive-image"
      />
    </div>
  </div>
</template>

<script>

export default{
    name: "Turbuhalar",
}
</script>

<style scoped>
.image-container {
  max-width: calc(100vw - 10px);
  overflow-x: auto;
  display: flex;
  justify-content: center;
  border: 1px solid #ccc;
  background-color: #f2f2f2;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.responsive-image {
  width: 100%;
  height: auto;
}

@media (max-width: 768px) {
  .responsive-image {
    max-width: 90%;
  }
}

@media (min-width: 992px) {
  .responsive-image {
    max-width: 70%;
  }
}

@media (min-width: 1200px) {
  .responsive-image {
    max-width: 50%;
  }
}
</style>
