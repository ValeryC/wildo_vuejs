<template>
  <div>
    <span class='colore'>{{value.name}}</span>

    
    {{value.text}}
    
 
      <label>{{ value.label }}:</label>

      {{value.date}}
      dfjikldjvkj
  
 
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
  methods: {
    // just the value for the peeker
    getPeekValue() {
      return this.value;
    }
  }
};
</script>

<style>
  .colore{
    font-size:40px;
}


</style>
