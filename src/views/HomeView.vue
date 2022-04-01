<template>
  <div class="home">
      <h1 class="text-3xl font-bold underline">
          project planner
      </h1>
      <div>
        created by fox-coding
      </div>
      <div>
        <img class="m-10 inline object-cover mr-2 rounded-full shadow-lg" alt="Fox Coding Avatar" src="../assets/ava3.png">
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
