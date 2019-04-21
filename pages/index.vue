<template>
  <article>
    <h1 class="f4 bold center mw5">Todos</h1>
    <ul class="list pl0 ml0 center mw5 ba b--light-silver br3">
      <li v-for="todo of todos" :key="todo.id" class="ph3 pv3 bb b--light-silver">{{todo.title}}</li>
    </ul>
  </article>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import axios from "axios";
export default {
  async fetch({ store }) {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    store.commit("init", res.data);
  },
  computed: {
    ...mapState({
      todos: state => state.todos
    })
  },

  methods: {}
};
</script>
