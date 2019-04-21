import axios from "axios";

export const state = {
  todos: []
};

export const mutations = {
  init(state, todos) {
    state.todos = todos;
  },
  add(state, todo) {
    state.todos = [...state.todos, todo];
  }
};

export const actions = {
  async add({ commit }, task) {
    const res = await axios.post(
      "https://warm-crag-28544.herokuapp.com/todos",
      { task, complete: false }
    );
    commit("add", res.data);
  }
};
