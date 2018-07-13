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
      <AppTextarea
        label="Define your data schema"
        @input="onHandleFakeDataItemSchema($event)"
      />
      <AppTextarea
        label="Fill in data fields"
        @input="onHandleDataFakeDataItemBody($event)"
      />
      <button @click="generateFakeDataItem()">Generate fake data</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Getter, State, Action } from 'vuex-class'
import AppInput from './AppInput.vue'
import AppTextarea from './AppTextarea.vue'
import { jsonValidator } from '../utilities/validators.js'
@Component({components: {AppInput, AppTextarea}})
export default class AppForm extends Vue {
  @Prop() private msg!: string;
  fakeDataItemType: string = "JSON"
  fakeDataItemRecurrences: number = 1
  fakeDataItemSchema: string = ""
  isDataItemBodyValid: boolean = true
  
  
  @State('fakeDataItems') fakeDataItems: any
  @Action('addFakeDataItemType') addFakeDataItemType: any
  @Action('setFakeDataItemRecurrences') setFakeDataItemRecurrences: any
  @Action('setFakeDataItemSchema') setFakeDataItemSchema: any
  @Action('setFakeDataItemBody') setFakeDataItemBody: any
  @Action('generateFakeDataItem') generateFakeDataItem: any
  

  onHandleFakeDataItemBody(body: string): any {
    console.log("body", body)
    this.setFakeDataItemBody(body)
  }
 
  onHandleFakeDataItemSchema(schema: string): any{
    this.setFakeDataItemSchema(schema)
  }

  @Getter('formatTypeTags') formatTypeTags: any


  AddDataItemType(event: {target: HTMLInputElement}) {
    this.addFakeDataItemType({text: event.target.value, selected: true})
  }
  
  


  validateFakeDataItemBody(){
    console.log(JSON.parse(this.fakeDataItemSchema))
  }



  onHandleSchema(schema: string) {
    console.log('schema', schema)
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
