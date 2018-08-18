<template>
  <div class="wrapper item-grid hes-gallery">
    <Photo v-for="(item, index) in photos" :item="item" :key="index" @click.native="openGallery(index)" />
  </div>
</template>

<script>
import Photo from '@/components/Photo.vue'

export default {
  name: 'home',
  components: {
    Photo
  },
  data () {
    return {
      photos: require('@/photos.js')
    }
  },
  methods: {
    openGallery: function (index) {
      // eslint-disable-next-line
      HesGallery.show(0, index)
    }
  }
}

// eslint-disable-next-line
HesGallery.setOptions({
  minResolution: 544,
  showCredits: true
})
</script>

<style lang="scss" scoped>
@import '../settings.scss';
.item-grid {
  display: grid;
  justify-self: start;
  grid-template-columns: 1fr;
  grid-gap: 1px;

  @media #{$media-sm} {
    grid-template-columns: repeat(auto-fill, minmax(480px, 1fr));
  }
}
</style>
