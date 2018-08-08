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
    openGallery: function(index) {
      HesGallery.show(0, index)
    }
  }
}

HesGallery.setOptions({
  minResolution: 544
})
</script>
