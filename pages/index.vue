<template>
  <div>
    <form @submit.prevent="add(task)">
      <v-text-field v-model="task" clearable solo required placeholder="What are you working on?"></v-text-field>
      <h2 class="display-1 green--text pl-3">
        Tasks:&nbsp;
        <v-fade-transition leave-absolute>
          <span :key="`todos-${todos.length}`">{{ todos.length }}</span>
        </v-fade-transition>
      </h2>
      <hr class="mt-3 v-divider theme--light">
      <v-layout my-1 align-center>
        <strong class="mx-3 indigo--text">Remaining: {{ remainingTasks }}</strong>

        <v-divider vertical></v-divider>

        <strong class="mx-3 dark--text">Completed: {{ completedTasks }}</strong>

        <v-spacer></v-spacer>

        <v-progress-circular :value="progress" class="mr-4 indigo--text"></v-progress-circular>
      </v-layout>
      <hr class="mt-1 v-divider theme--light">
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
          <v-btn flat icon color="purple lighten-1" @click="toggle(todo)">
            <v-icon>done</v-icon>
          </v-btn>
          <v-btn flat icon color="red lighten-3" @click="remove(todo)">
            <v-icon>delete</v-icon>
          </v-btn>
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
      task: ""
    };
  },

  computed: {
    ...mapState({
      todos: state => state.todos
    }),
    completedTasks() {
      return this.todos.filter(todo => todo.complete).length;
    },
    progress() {
      return (this.completedTasks / this.todos.length) * 100;
    },
    remainingTasks() {
      return this.todos.length - this.completedTasks;
    }
  },

  methods: {
    ...mapActions(["add", "remove", "toggle"])
  }
};
</script>
