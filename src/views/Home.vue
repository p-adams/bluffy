<template>
  <div class="home">
    <router-link to="/create">Create your own customized Fake</router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// @ is an alias to /src

@Component
export default class Home extends Vue {}
</script>
<style lang="scss" scoped>
.home {
  text-align: center;
}
</style>

