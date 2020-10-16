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
          'https://media.giphy.com/media/I5xVnGJRHZZf2/giphy.gif',
          'https://media.giphy.com/media/m4Y9SYi50CCrK/giphy.gif',
          'https://media.giphy.com/media/3o85xoi6nNqJQJ95Qc/giphy.gif',
          'https://media.giphy.com/media/10Jpr9KSaXLchW/giphy.gif',
          'https://media.giphy.com/media/6UWZ61yysjnjy/giphy.gif',
          require('@/assets/images/city/city_9.jpg'),
          'https://media.giphy.com/media/13f5iwTRuiEjjW/giphy.gif',
          'https://media.giphy.com/media/wLvhV2uZRg1OM/giphy.gif',
          'https://media.giphy.com/media/103xW5bZiXBVW8/giphy.gif',
          'https://media.giphy.com/media/hCiQVo1dzVwPu/giphy.gif',
          require('@/assets/images/events/events_19.jpg'),
          'https://media.giphy.com/media/xT9DPpf0zTqRASyzTi/giphy.gif',
          require('@/assets/images/events/events_17.jpg'),
          'https://media.giphy.com/media/f6pOe5e8ShRhS/giphy.gif',
          'https://media.giphy.com/media/WwpvJWNPq3WEhxvTef/giphy.gif',
          'https://media.giphy.com/media/has1WKhoorwLS/giphy.gif',
          'https://media.giphy.com/media/JrGYQZWou5Z51vNRob/giphy.gif',
          'https://media.giphy.com/media/xTiN0CNHgoRf1Ha7CM/giphy.gif',
          'https://media.giphy.com/media/3o7ZeTmU77UlPyeR2w/giphy.gif',
           require('@/assets/images/events/events_20.jpg'),
          'https://media.giphy.com/media/GcDtLf4RAdiRG/giphy.gif',
          'https://media.giphy.com/media/aZ3LDBs1ExsE8/giphy.gif',
          require('@/assets/images/press/press_19.jpg'),
          'https://media.giphy.com/media/CvZuv5m5cKl8c/giphy.gif',
          require('@/assets/images/press/press_17.jpg'),
          'https://media.giphy.com/media/uwcADIFwV4Jna/giphy.gif',
          'https://media.giphy.com/media/Mir5fnHxvXrTa/giphy.gif',
          'https://media.giphy.com/media/ziJdasPj03y0M/giphy.gif',
          'https://media.giphy.com/media/tJeGZumxDB01q/giphy.gif',
          require('@/assets/images/press/press_8.jpg'),
          'https://media.giphy.com/media/26tP1PZCE3xiDloqc/giphy.gif',
          'https://media.giphy.com/media/WZ9uA7jTQKydy/giphy.gif',
          'https://media.giphy.com/media/UqyTGHLbldQqs/giphy.gif',
          'https://media.giphy.com/media/4cQSQYz0a9x9S/giphy.gif',
          'https://media.giphy.com/media/lVhFOxFmaJezm/giphy.gif'

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