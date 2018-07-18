<template>
  <div id="app">
    <el-container>
    <el-header>
      <h1>Bluffy</h1>
      <img
        class="bluffy-image"
        src="@/assets/bluffy.jpg"/>
      <h3>Fake it 'til you make it</h3>
      <h5>A Web and CLI (coming soon) app for generating fake JSON data</h5>
  
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/create">Create your own</router-link> |
        <router-link to="/cli">CLI</router-link>
      </div>
    </el-header>
    <el-main class="main">
      <el-row :gutter="20">
        <el-col :span="16" :offset="4">
          <router-view/>
        </el-col>
      </el-row>
    </el-main>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.el-header {
  text-align: center;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: black;
    &.router-link-exact-active {
      color: darkgray;
    }
  }
}
.main {
  margin-top: 250px;
}
.bluffy-image {
  width: 50px;
  height: 50px;
}
</style>
