<template>
  <div>
    <article class="pa3">
      <h1 class="f4 bold">Completed Todos</h1>
      <ul class="list pl0 ml0 b--light-silver br2">
        <li
          v-for="todo of todos"
          :key="todo.id"
          class="flex items-center ph3 pv3 bb b--light-silver"
        >
          <span v-bind:class="{strike: todo.complete}" class="flex-auto">{{todo.task}}</span>
        </li>
      </ul>
    </article>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { init } from "./shared";

export default {
  fetch: init,

  computed: {
    ...mapState({
      todos: state => state.todos.filter(todo => todo.complete)
    })
  }
};
</script>
