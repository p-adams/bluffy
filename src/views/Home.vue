<template>
  <div class="home">
    <ul>
      <li>Define your data schema</li>
      <li>Plug values into the fields</li>
      <li>Format to make it pretty (optional)</li>
      <li>Name the file</li>
      <li>Done</li>
    </ul>
    <router-link to="/create">Create your own customized fake data now!</router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// @ is an alias to /src

@Component
export default class Home extends Vue {}
</script>
<style lang="scss" scoped>
ul {
  list-style: none;
}
ul li:after {
  content: "✓";
}
li {
  padding: 10px;
}
</style>

