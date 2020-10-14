<template>
 <div class="container">

  <div class="row">
    <div class="col-xs-12">
      
      <p><span class="label label-primary">v-for</span> Array</p>
      
      <div>Fruits:</div>
      <ul>
        <li v-for="fruit in fruits">
          {{ fruit }}
          </li>
      </ul>
    


      
      <div>Students:</div>
      <ol>
        <div v-for="student in students" v-bind:key="student">
          ({{ student.id }}) - {{ student.firstname }} {{ student.lastname }}
          {{student.name}}
        </div>
      </ol>
      
      <div>From 0 to 100:</div>
     
  <div v-for="x in 10">
        <span v-for="y in 10">{{ (x - 1) * 10 + y }}&nbsp;</span>
    </div>

      <hr>
   
      <p><span class="label label-primary">v-for</span> Object</p>
      
      <div>iPad mini 4 spec:</div>
      <hr>      
      
      <p><span class="label label-primary">v-for</span> Changable array</p>
 
      
    </div>
  </div>
  
</div>
</template>

<script>

export default{
  data() {
    return {
    fruits: ["Apple", "Banana", "Pineapple", "Pear"],
    students: [
      {id: 4720, firstname: 'Kelly', lastname: 'Smist', name: 'paris sous la neige'},
      {id: 1234, firstname: 'Charlie', lastname: 'Brown', name:'paris sous la pluie'},
      {id: 2103, firstname: 'Bryan', lastname: 'Griffiths'},
    ],
    ipad_mini_4: {
      'Announcement date': 'September 9, 2015',
      'Release date': 'September 9, 2015',
      CPU: '1.5 GHz dual-core Apple Typhoon',
      GPU: 'Quad-core PowerVR GX6450',
      Memory: '2048 MB LPDDR3 RAM',    
    },
    countries: ['France', 'China', 'Canada', 'USA', 'Finland'],
  }}
}
</script>

<style scoped>
.fruit{
  font-family: 'Courier New', Courier, monospace;
  font-size: 30px;
}
</style>
