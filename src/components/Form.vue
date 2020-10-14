<template>
  <div>
<template>
  <div>
    <!-- Render our components for each entry in App.inputList 
    (now in value, passed via v-model from the parent component)
    Iterate all items, item is the current item, idx is the index 
    or key of the item

    The components type is defined in App.iputList.type
    You can not do v-model="item", you need to v-model="value[idx]"
    because of variable scope
    -->
    <div v-for="(item, idx) in value" :key="idx">
      <component :is="item.type" v-model="value[idx]"></component>
    </div>
  </div>
</template>
 <div class="row">
            <div class="col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2 col-xs-8 col-xs-offset-2 margin_article">
                <img class="img_project" src='../assets/images/city/city_1.jpg' alt="IMAGE PROJECT 1">
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 col-md-offset-2 col-lg-6 col-lg-offset-2 col-xs-6 col-xs-offset-2">
                <h3>Paris under the snow</h3>
            </div>
            <div class="col-md-2 col-lg-2 col-xs-2">
                <h4 class="date">January 2018</h4>
            </div>
        </div>
        <div class="row">
            <div class="col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2 col-xs-8 col-xs-offset-2">
                <p class="article">Paris under a white coat, some pictures of the most famous places in the city under
                    the snow so as to
                    capture and remember those magical and fleeting moments. I choose to Just to enjoy, without a word:
                    Snow is also Silence. Before the next storm hits keep scrolling to see what the most romantic city
                    in the world looks like as a true winter wonderland.
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
// import out dynamic components
// they can be loaded dynamically aswell, just Google it
import InputText from "./InputText";


export default {
  name: "Form",

  props: {
    // v-model in the parent component fills props.value automtically
    // App.vue, line 4
    value: {
      type: Array,
      required: true
    }
  },
  components: {
    "my-input-text": InputText,
  }
};
</script>

<style lang="scss" scoped>
@import "Form.sass"
</style>
