<template>
  <div id="app">
    <el-container>
    <el-header>
      <h1>Faker Data</h1>
      <h3>Fake it 'til you make it</h3>
      <h5>A Web and (coming soon) CLI app for generating fake data</h5>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
    </el-header>
    <el-main class="main">
      <router-view/>
    </el-main>
    </el-container>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #ab47bc;
    &.router-link-exact-active {
      color: #80cbc4;
    }
  }
}
.main {
  margin-top: 160px;
}
</style>
