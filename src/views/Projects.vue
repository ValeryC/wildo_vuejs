<template>
  <section id="project">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3 col-xs-6 col-xs-offset-3">
          <h1>Projects</h1>
        </div>
      </div>
      <my-form v-model="inputList"/>
    </div>
  </section>
</template>

<script>
import Form from '../components/Form'
export default {
  name: 'Projects',
  data() {
    return {
      inputList: [
        {
          name: 'PARIS UNDER THE SNOW',
          url: '1.jpg',
          spec: 'city',
          text:
            'Paris under a white coat, some pictures of the most famous places in the city under the snow so as to capture and remember those magical and fleeting moments. I choose to Just to enjoy, without a word: Snow is also Silence. Before the next storm hits keep scrolling to see what the most romantic city in the world looks like as a true winter wonderland.',
          date: 'JANUARY 2018',
          type: 'my-input-text'
        },
        {
          name: 'PARISIANS MONUMENTS',
          url: '11.jpg',
          spec: 'city',
          text:
            'Paris is one of the most famous cities of art and culture in the world, its museums and all its monuments form a breathtaking digest of the artistic history of Europe and the world. Whether you are a tourist in Paris or a Parisian, you are always amazed, my work shows one of these aspects',
          date: 'DECEMBER 2017',
          type: 'my-input-text'
        },
        {
          name: 'PARISIANS CONCERTS AND FESTIVALS',
          url: '16.jpg',
          spec: 'events',
          text:
            'Paris has an all-year-round busy festival scene. Music, theatre, cinema, dance, street arts ... There’s something for all tastes and all ages. Attracting tourists and Parisians, each event is the opportunity to get together for a fun time with family or friends !aris lively music scene of energy. I chose to retransmit this energy through my photographs.',
          date: 'AOUT 2016',
          type: 'my-input-text'
        },
        {
          name: 'CHARLIE HEBDO',
          url: '8.jpg',
          spec: 'press',
          text:
            'On 11 January, about two million people, including more than 40 world leaders, met in Paris for a rally of national unity, and 3.7 million people joined demonstrations across France. The phrase Je suis Charlie became a common slogan of support at the rallies and in social media.',
          date: 'JANVIER 2015',
          type: 'my-input-text'
        }
      ]
    }
  },
  methods: {
    getPeekValue() {
      return this.inputList
    }
  },

  components: {
    'my-form': Form
  }
}
</script>

<style lang="scss" scoped>
@import 'Projects.sass';
</style>