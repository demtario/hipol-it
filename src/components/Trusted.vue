<template>
    <div class="trusted">
        <h3 class="title-text">Zaufali mi</h3>
        <div class="trusted__grid">
            <img src="../assets/img/coop/proxymedia.jpg" alt="Proxymedia films" title="Proxymedia films">
            <img src="../assets/img/coop/heseya.jpg" alt="Heseya Video Productions" title="Heseya Video Productions">
            <img src="../assets/img/coop/impresariat.jpg" alt="Scena Studio Impresariat" title="Scena Studio Impresariat">
            <img src="../assets/img/coop/event.jpg" alt="Scena Studio Event" title="Scena Studio Event">
            <img src="../assets/img/coop/akadmuz.jpg" alt="Akademia Muzyczna w Bydgoszczy" title="Akademia Muzyczna w Bydgoszczy">
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
    width: 70%;
    grid-gap: 20px;
    padding: 20px;
    box-sizing: border-box;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    justify-items: center;
    align-items: center;

    @media #{$media-md} {
      width: 100%;
      margin: 0 auto;
    }

    @media #{$media-xl} {
      width: 860px;
    }
  }
}
</style>
