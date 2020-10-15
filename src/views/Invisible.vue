<template>
  <div class="container">
    <gallery :images="images" :index="index" @close="index = null"></gallery>
    <div
      class="image"
      v-for="(image, imageIndex) in images"
      :key="imageIndex"
      @click="index = imageIndex"
      :style="{ backgroundImage: 'url(' + image + ')', width: '272px', height: '272px' }"
    ></div>
  </div>
</template>

<script>
  import VueGallery from 'vue-gallery';



  export default {
    data: function () {
      return {
        images: [
          'https://media.giphy.com/media/chtA1qmMfqItVs31Wj/giphy.gif',
          require('@/assets/images/city/city_18.jpg'),
          'https://media.giphy.com/media/m4Y9SYi50CCrK/giphy.gif',
          require('@/assets/images/city/city_16.jpg'),
          'https://media.giphy.com/media/10Jpr9KSaXLchW/giphy.gif',
          require('@/assets/images/city/city_10.jpg'),
          require('@/assets/images/city/city_9.jpg'),
          require('@/assets/images/city/city_8.jpg'),
          require('@/assets/images/city/city_7.jpg'),
          'https://media.giphy.com/media/103xW5bZiXBVW8/giphy.gif',
          'https://media.giphy.com/media/hCiQVo1dzVwPu/giphy.gif',
          require('@/assets/images/events/events_19.jpg'),
          require('@/assets/images/events/events_18.jpg'),
          require('@/assets/images/events/events_17.jpg'),
          'https://media.giphy.com/media/f6pOe5e8ShRhS/giphy.gif',
          require('@/assets/images/events/events_15.jpg'),
          require('@/assets/images/events/events_10.jpg'),
          require('@/assets/images/events/events_9.jpg'),
          'https://media.giphy.com/media/xTiN0CNHgoRf1Ha7CM/giphy.gif',
          require('@/assets/images/events/events_7.jpg'),
          require('@/assets/images/events/events_20.jpg'),
          'https://media.giphy.com/media/GcDtLf4RAdiRG/giphy.gif',
          'https://media.giphy.com/media/aZ3LDBs1ExsE8/giphy.gif',
          require('@/assets/images/press/press_19.jpg'),
          'https://media.giphy.com/media/CvZuv5m5cKl8c/giphy.gif',
          require('@/assets/images/press/press_17.jpg'),
          'https://media.giphy.com/media/uwcADIFwV4Jna/giphy.gif',
          require('@/assets/images/press/press_15.jpg'),
          require('@/assets/images/press/press_10.jpg'),
          'https://media.giphy.com/media/tJeGZumxDB01q/giphy.gif',
          require('@/assets/images/press/press_8.jpg'),
          require('@/assets/images/press/press_7.jpg'),
          require('@/assets/images/events/events_3.jpg'),
          require('@/assets/images/events/events_4.jpg'),
          'https://media.giphy.com/media/4cQSQYz0a9x9S/giphy.gif',
          require('@/assets/images/city/city_20.jpg')

        ],
        index: null
      };
    },

    components: {
      'gallery': VueGallery
    },
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
  .container{
      padding-top: 70px;
  }
</style>