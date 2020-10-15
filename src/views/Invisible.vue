<template>
  <div class="container">
    <gallery :images="images" :index="index" @close="index = null"></gallery>
    <div
      class="image"
      v-for="(image, imageIndex) in images"
      :key="imageIndex"
      @click="index = imageIndex"
      :style="{ backgroundImage: 'url(' + image + ')', width: '150px', height: '150px' }"
    ></div>
  </div>
</template>

<script>
  import VueGallery from 'vue-gallery';



  export default {
    data: function () {
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
          'https://i1.wp.com/onholidaysagain.com/wp-content/uploads/2019/09/Pr%C3%A9parer-son-voyage-aux-Maldives.jpg?fit=1170%2C783&ssl=1',
          'https://www.lokeshdhakar.com/projects/lightbox2/images/image-3.jpg',
          require('@/assets/images/events/events_19.jpg'),
          require('@/assets/images/events/events_18.jpg'),
          require('@/assets/images/events/events_17.jpg'),
          require('@/assets/images/events/events_16.jpg'),
          require('@/assets/images/events/events_15.jpg'),
          require('@/assets/images/events/events_10.jpg'),
          require('@/assets/images/events/events_9.jpg'),
          require('@/assets/images/events/events_8.jpg'),
          require('@/assets/images/events/events_7.jpg'),
          'https://dummyimage.com/1280/000000/ffffff',
          'https://dummyimage.com/400/000000/ffffff',
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