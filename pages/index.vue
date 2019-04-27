<template>
  <div>
    <form class="pa3" @submit.prevent="add(task)">
      <v-text-field v-model="task" required type="text"></v-text-field>
      <v-btn type="submit">Add</v-btn>
    </form>
    <v-list class="pa3">
      <ul class="list pl0 ml0 b--light-silver br2">
        <li
          v-for="todo of todos"
          :key="todo.id"
          class="flex items-center ph3 pv3 bb b--light-silver"
        >
          <v-list-tile-content
            v-bind:class="{strike: todo.complete}"
            class="flex-auto"
          >{{todo.task}}</v-list-tile-content>
          <button @click="toggle(todo)">
            <v-icon>done</v-icon>
          </button>
          <button @click="remove(todo)">
            <v-icon>delete</v-icon>
          </button>
        </li>
      </ul>
    </v-list>
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
