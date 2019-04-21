<template>
  <div>
    <article class="pa3 pa3-ns">
      <h1 class="f4 bold center mw7">Todos</h1>
      <ul class="list pl0 ml0 center mw7 ba b--light-silver br3">
        <li v-for="todo of todos" :key="todo.id" class="ph3 pv3 bb b--light-silver">{{todo.title}}</li>
      </ul>
    </article>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import { init } from "./shared";

export default {
  fetch: init,

  computed: {
    ...mapState({
      todos: state => state.todos
    })
  },

  methods: {}
};
</script>
