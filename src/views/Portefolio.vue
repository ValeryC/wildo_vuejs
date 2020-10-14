<template>

   <ol>
        <div v-for="student in students" v-bind:key="student">
          ({{ student.id }}) - {{ student.firstname }} {{ student.lastname }}
          {{student.name}}
        </div>
    </ol>


</template>

<script>

export default {

  data() {
    return {
      students: [
      {id: 4720, firstname: 'Kelly', lastname: 'Smist', name: 'paris sous la neige'},
      {id: 1234, firstname: 'Charlie', lastname: 'Brown', name:'paris sous la pluie'},
      {id: 2103, firstname: 'Bryan', lastname: 'Griffiths'},
    ],
    };
  },
};
</script>

<style scoped>

</style>