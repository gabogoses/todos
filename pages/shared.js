import axios from "axios";

export async function init({ store, redirect, isClient }) {
  if (isClient) return;

  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    store.commit("init", res.data);
  } catch (err) {
    redirect("/error");
  }
}
