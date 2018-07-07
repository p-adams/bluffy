<template>
  <div>
    {{ msg }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import {State, Action} from 'vuex-class'
@Component
export default class AppForm extends Vue {
  @Prop() private msg!: string;
  @State('fakeDataItems') fakeDataItems: any
  @Action('generateFakeDataItem') generateFakeDataItem: any
  created() {
    console.log(this.fakeDataItems)
  }
  generate() {
    this.generateFakeDataItem()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
