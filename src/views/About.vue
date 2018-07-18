<template>
  <div class="about">
    <h1>About Bluffy</h1>
    <ul>
      <li>Have you ever wanted to fetch some data for prototyping an idea?</li>
      <li>Are you learning a new programming language and want to learn how to parse and display data?</li>
      <li>Have you found fake data CLIs (command-line interfaces), libraries, and apps that generate data for you, but you want data you can customize?</li>
      <li></li>
    </ul>
    <p>If you answered yes to any (or all) of those questions, <span :style="{'font-weight': 'bolder'}">Bluffy is for you!</span></p>
  </div>
</template>
<style lang="scss" scoped>
h1 {
  text-align: center;
}
p {
  margin-left: 50px;
}
ul {
  list-style: none;
}
li {
  padding: 10px;
}

li:nth-child(4) {
  margin-left: 15px;
}
</style>
