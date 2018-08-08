<template>
  <header class="header">
  
    <h2>Director & Photographer</h2>
    <h1>Karol Hipolit Kempiński</h1>

    <Navi />
  
  </header>
</template>

<script>
import Navi from '@/components/Navi.vue'

export default {
  name: 'Header',
  components: {
    Navi
  }
}
</script>

<style lang="scss" scoped>
@import '../settings.scss';

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 26px 12px;
  text-align: center;
  margin-top: 20px;

  @media #{$media-sm} {
    margin-top: 0;
  }

  h2 {
    font-weight: 300;
    font-size: 0.8em;
    margin: 0;

    @media #{$media-xs} {
      font-size: 1em;
    }
  }

  h1 {
    font-weight: 200;
    font-size: 1.8em;
    margin: 0;
    letter-spacing: 1px;

    @media #{$media-xs} {
      font-size: 2.1em;
    }

    @media #{$media-md} {
      font-size: 2.6em;
    }
  }
}
</style>
