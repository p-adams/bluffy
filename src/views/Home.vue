<template>
  <div class="home">
    <h4>Creating your own fake data is a cinch:</h4>
    <ul>
      <li>Define your data schema</li>
      <li>Plug values into the fields</li>
      <li>Format to make it pretty (optional)</li>
      <li>Name the file</li>
      <li>Done</li>
    </ul>
    <div >
      <router-link to="/create">Create your own customized fake data now!</router-link>
    </div>
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
ul li:before {
  color: green;
  content: "✓ ";
}
li {
  padding: 10px;
}
</style>

