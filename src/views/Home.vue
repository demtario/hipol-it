<template>
  <div class="wrapper item-grid hes-gallery">
    <Photo v-for="item in photos" :item="item" :key="item.path" />
  </div>
</template>

<script>
import Photo from '@/components/Photo.vue'

export default {
  name: 'home',
  components: {
    Photo
  },
  data() {
    return {
      photos: require('@/photos.js')
    }
  }
}

onload = () => {
  let galItems = document.querySelectorAll('.hes-gallery .item')
  galItems.forEach((el, index) => {
      el.setAttribute('onclick', `HesGallery.show(0,${index})`)
  })

  HesGallery.init()
}

HesGallery.setOptions({
    minResolution: 544
})
</script>
