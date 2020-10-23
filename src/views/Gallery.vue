<template>
  <div class="container">
    <gallery :images="images" :media="media" :index="index" @close="index = null"></gallery>
    <div
      class="image"
      v-for="(image, imageIndex) in images"
      :key="imageIndex"
      @click="index = imageIndex"
      :style="{ backgroundImage: 'url(' + image + ')', width: '152px', height: '152px' }"
    ></div>
  </div>
</template>

<script>
import VueGallery from 'vue-gallery'

export default {
  data: function() {
    return {
      images: [
        require('@/assets/images/city/city_19.jpg'),
        require('@/assets/images/city/city_18.jpg'),
        require('@/assets/images/city/city_17.jpg'),
        require('@/assets/images/city/city_16.jpg'),
        require('@/assets/images/city/city_15.jpg'),
        require('@/assets/images/city/city_10.jpg'),
        require('@/assets/images/city/city_9.jpg'),
        require('@/assets/images/city/city_8.jpg'),
        require('@/assets/images/city/city_7.jpg'),
        'https://www.raphaeldecasabianca.com/wp-content/uploads/2016/02/paris.jpg',
        'https://i.ytimg.com/vi/8ZMxLZqL73M/maxresdefault.jpg',
        require('@/assets/images/events/events_19.jpg'),
        require('@/assets/images/events/events_18.jpg'),
        require('@/assets/images/events/events_17.jpg'),
        require('@/assets/images/events/events_16.jpg'),
        require('@/assets/images/events/events_15.jpg'),
        require('@/assets/images/events/events_10.jpg'),
        require('@/assets/images/events/events_9.jpg'),
        require('@/assets/images/events/events_8.jpg'),
        require('@/assets/images/events/events_7.jpg'),
        'https://www.theparisphotographer.com/wp-content/uploads/2020/02/The-Paris-Photographer-Best-photography-team-in-Paris.jpg',
        'https://offloadmedia.feverup.com/parissecret.com/wp-content/uploads/2020/10/02100650/arco-triunfo-paris.jpg',
        require('@/assets/images/press/press_19.jpg'),
        require('@/assets/images/press/press_18.jpg'),
        require('@/assets/images/press/press_17.jpg'),
        require('@/assets/images/press/press_16.jpg'),
        require('@/assets/images/press/press_15.jpg'),
        require('@/assets/images/press/press_10.jpg'),
        require('@/assets/images/press/press_9.jpg'),
        require('@/assets/images/press/press_8.jpg'),
        require('@/assets/images/press/press_7.jpg'),
        require('@/assets/images/events/events_3.jpg'),
        require('@/assets/images/events/events_4.jpg'),
        require('@/assets/images/events/events_5.jpg'),
        require('@/assets/images/city/city_20.jpg')
      ],
      index: null
    }
  },

  components: {
    gallery: VueGallery
  }
}
</script> 

<style scoped>
.image {
  float: left;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #ebebeb;
  margin: 5px;
}
.container {
  padding-top: 70px;
}
</style>