<template>
  <div>
    <form @submit.prevent="add(task)">
      <input v-model="task" type="text">
    </form>
    <article class="pa3 pa3-ns">
      <h1 class="f4 bold center mw7">Todos</h1>
      <ul class="list pl0 ml0 center mw7 ba b--light-silver br3">
        <li v-for="todo of todos" :key="todo.id" class="ph3 pv3 bb b--light-silver">{{todo.task}}</li>
      </ul>
    </article>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
import { init } from "./shared";

export default {
  fetch: init,

  data() {
    return {
      task: "task"
    };
  },

  computed: {
    ...mapState({
      todos: state => state.todos
    })
  },

  methods: {
    ...mapActions(["add"])
  }
};
</script>
