<template>
  <Todos />
</template>

<script>
  import { onMounted } from '@vue/runtime-core'
  import Todos from './components/Todos/Todos.vue'

  export default{
    components:{
      Todos
    },

    stup(){
      onMounted(() => {
        console.log(" b m");
      })
    }
  }
</script>

<style></style>