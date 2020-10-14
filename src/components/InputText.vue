<template>
  <div>
    <div class="row">
            <div class="col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2 col-xs-8 col-xs-offset-2 margin_article">
              <img class="img_project" src="../assets/images/city/city_2.jpg" alt="IMAGE PROJECT 1">
                                                //{{value.img}}
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 col-md-offset-2 col-lg-6 col-lg-offset-2 col-xs-6 col-xs-offset-2">
                <h3>{{value.name}}</h3>
            </div>
            <div class="col-md-2 col-lg-2 col-xs-2">
                <h4 class="date">{{value.date}}</h4>
            </div>
        </div>
        <div class="row">
            <div class="col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2 col-xs-8 col-xs-offset-2">
                <p class="article">
                  {{value.text}}
                </p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2 col-xs-8 col-xs-offset-2" align="center">
                <br>
                    <router-link to="/portefolio">
                        <input type="submit" class="btn_pages" value="More pictures">
                    </router-link>
                <br/>
                <br>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  props: {
    // v-model injects the object to be edited into props.value
    value: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      inputList: [
        {
          name: "PARIS UNDER THE SNOW",
          img : "../assets/images/city/city_1.jpg",
          text:
            "Paris under a white coat, some pictures of the most famous places in the city under the snow so as to capture and remember those magical and fleeting moments. I choose to Just to enjoy, without a word: Snow is also Silence. Before the next storm hits keep scrolling to see what the most romantic city in the world looks like as a true winter wonderland.",
          date: "JANUARY 2018",
          type: "my-input-text",
        },
        {
          name: "PARISIANS MONUMENTS",
          img : "../assets/images/city/city_2.jpg",
          text:
            "Paris is one of the most famous cities of art and culture in the world, its museums and all its monuments form a breathtaking digest of the artistic history of Europe and the world. Whether you are a tourist in Paris or a Parisian, you are always amazed, my work shows one of these aspects",
          date: "DECEMBER 2017",
          type: "my-input-text",
        },
        {
          name: "PARISIANS CONCERTS AND FESTIVALS",
          img : "../assets/images/city/city_3.jpg",
          text: "Paris has an all-year-round busy festival scene. Music, theatre, cinema, dance, street arts ... There’s something for all tastes and all ages. Attracting tourists and Parisians, each event is the opportunity to get together for a fun time with family or friends !aris lively music scene of energy. I chose to retransmit this energy through my photographs.",
          date: "AOUT 2016",
          type: "my-input-text",
        },
      ],
    };
  },
  methods: {
    // just the value for the peeker
    getPeekValue() {
      return this.value;
    }
  }
};
</script>

<style lang="scss"  scoped>
@import 'InputText.sass'
</style>