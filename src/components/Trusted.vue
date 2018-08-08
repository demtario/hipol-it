<template>
    <div class="trusted">
        <h3 class="title-text">Zaufali mi</h3>
        <div class="trusted__grid">
            <img src="../assets/img/coop/c1.jpg" alt="Nazwa firmy">
            <img src="../assets/img/coop/c2.jpg" alt="Nazwa firmy">
            <img src="../assets/img/coop/c3.jpg" alt="Nazwa firmy">
            <img src="../assets/img/coop/c4.jpg" alt="Nazwa firmy">
            <img src="../assets/img/coop/c5.jpg" alt="Nazwa firmy">
            <img src="../assets/img/coop/c6.jpg" alt="Nazwa firmy">
        </div>
    </div>
</template>

<script>
export default {
  name: 'Trusted'
}
</script>

<style lang="scss" scoped>
@import '../settings.scss';
.trusted {
  background-color: #fff;
  padding: 20px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media #{$media-sm} {
    margin: 20px 0;
  }

  .title-text {
    margin-top: 0;
    color: #333;
    font-weight: 300;
  }

  &__grid {
    display: grid;
    width: 100%;
    grid-gap: 20px;
    padding: 20px;
    box-sizing: border-box;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    justify-items: center;
    align-items: center;

    @media #{$media-md} {
      width: 70%;
      margin:  0 auto;
    }

    @media #{$media-xl} {
      width: 50%;
    }
  }
}
</style>
