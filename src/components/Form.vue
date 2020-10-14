<template>
  <div>
    <div v-for="(item, idx) in value" :key="idx">
      <InputText :is="item.type" v-model="value[idx]"/>
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
