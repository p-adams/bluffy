<template>
  <div>
    <div>{{ msg }}</div>
    <div>input: {{ fakeDataItemType }}</div>
    <div>
      Format type tags:
      <ul>
        <li
          v-for="(tag, key) in formatTypeTags"
          :key="key"
          >
          <span class="tagBg">{{ tag.text }}</span>
        </li>
      </ul>
    </div>
    <form>
      <AppInput
        label="Data format type"
        v-model="fakeDataItemType"
        @keyup.enter="AddDataItemType($event)"
      />
      <AppInput
        label="Data recurrences"
        v-model="fakeDataItemRecurrences"
        @blur="setFakeDataItemRecurrences($event)"
        type="number"
      />
      <AppInput
        label="Data fields"
        v-model="fakeDataItemBody"
        @blur="validateFakeDataItemBody"
      />
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Getter, State, Action } from 'vuex-class'
import AppInput from './AppInput.vue'
import { jsonValidator } from '../utilities/validators.js'
@Component({components: {AppInput}})
export default class AppForm extends Vue {
  @Prop() private msg!: string;
  fakeDataItemType: string = "JSON"
  fakeDataItemRecurrences: number = 1
  fakeDataItemBody: string = ""
  isDataItemBodyValid: boolean = true
  
  
  @State('fakeDataItems') fakeDataItems: any
  @Action('addFakeDataItemType') addFakeDataItemType: any
  @Action('setFakeDataItemRecurrences') setFakeDataItemRecurrences: any

  @Getter('formatTypeTags') formatTypeTags: any
  AddDataItemType(event: {target: HTMLInputElement}) {
    this.addFakeDataItemType({text: event.target.value, selected: true})
  }
  
  


  validateFakeDataItemBody(){
    console.log(JSON.parse(this.fakeDataItemBody))
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
.tagBg {
  background: red;
}
</style>
