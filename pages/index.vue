<template>
  <div>
    Hello Compta Clementine 🍊
    {{counter}}
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      counter: state => state.counter
    })
  }
};
</script>
