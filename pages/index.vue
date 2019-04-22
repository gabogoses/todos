<template>
  <div>
    <form class="pa3" @submit.prevent="add(task)">
      <input v-model="task" type="text">
      <input type="submit" value="Add">
    </form>
    <article class="pa3">
      <h1 class="f4 bold">Todos</h1>
      <ul class="list pl0 ml0 b--light-silver br2">
        <li
          v-for="todo of todos"
          :key="todo.id"
          class="flex items-center ph3 pv3 bb b--light-silver"
        >
          <span v-bind:class="{strike: todo.complete}" class="flex-auto">{{todo.task}}</span>
          <button @click="toggle(todo)">
            <img src="https://icon.now.sh/check" alt>
          </button>
          <button @click="remove(todo)">
            <img src="https://icon.now.sh/trash" alt>
          </button>
        </li>
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
    ...mapActions(["add", "remove", "toggle"])
  }
};
</script>
