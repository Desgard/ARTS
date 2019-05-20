<template>
  <div>
    <arts-header/>
    <h1>hello</h1>
  </div>
</template>

<script>
import ArtsHeader from "@/components/Header";
export default {
  name: "Main",
  components: {
    "arts-header": ArtsHeader
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>