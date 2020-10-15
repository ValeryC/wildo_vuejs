<template>
  <div>
    <div class="row">
            <div class="col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2 col-xs-8 col-xs-offset-2 margin_article">
              
              <img class="img_project" src="../assets/images/city/city_1.jpg" alt="IMAGE PROJECT 1">
                <div class="img_project" :style="setBackgroundImage">{{value.url}}</div>


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
  computed:{
  setBackgroundImage(){
    return { backgroundImage: 'url(../assets/images/city/city_2.jpg)'
    }
    }
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