<template>
  <div class="home">
    <ul>
      <li>Define your data schema</li>
      <li>Plug values into the fields</li>
      <li>Name the file</li>
    </ul>
    <p>And that's it!</p>
    <p>Choose from our list of pre-defined data (you pick the fields/how much data you want), or...</p>
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

