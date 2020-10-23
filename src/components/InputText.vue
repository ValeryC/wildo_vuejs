<template>
  <div>
    <div class="row">
            <div class="col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2 col-xs-8 col-xs-offset-2 margin_article">     
              <img class="img_project" :src="cityImg" alt="IMAGE PROJECT 1">
         
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

    cityImg(){
    const num = this.value.url
    if(this.value.spec=="city"){
        return require("@/assets/images/city/city_"+num)
    }
    else if(this.value.spec=="events"){
        return require("@/assets/images/events/events_"+num)
        }
     else{
        return require("@/assets/images/press/press_"+num)
        }    
    }
   },
};
</script>

<style lang="scss"  scoped>
@import 'InputText.sass'
</style>