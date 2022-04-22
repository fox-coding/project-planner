<template>
  <div class="home">
      <h1 class="text-3xl font-bold">
          project planner
      </h1>
      <ul>
        <li v-for="project in myProjects" :key="project.id">
          <div class="details">
            <Project :title="project.title" :description="project.description" :finished="project.finished" :created="project.created" />
          </div>
        </li>
      </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import Project from '@/components/Project.vue'
import getCollection from '@/utils/getCollection'

export default {
  name: 'HomeView',
  components: {
    Project
  },
  setup() {
    const { documents: myProjects } = getCollection('user/i0KIhtj6dn3v9xHzIemx/projects')
    
    return {
      myProjects
    }
  }
}
</script>
