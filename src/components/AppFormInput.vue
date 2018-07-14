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
          <el-tag>{{ tag._name }}</el-tag>
        </li>
      </ul>
    </div>
    <form>
      <span>
      <el-input
        v-model="fakeDataItemType"
        placeholder="Add type. For example: JSON, XML, or YAML"
      />
      <el-button @click="onHandleAddDataItemType()">Add type</el-button>
      </span>
      <el-input-number
        v-model="fakeDataItemRecurrences"
        :min="1"
      />
      <el-input
        type="textarea"
        @change="onHandleFakeDataItemSchema($event)"
      />
      <el-input
        type="textarea"
        @change="onHandleDataFakeDataItemBody($event)"
      />
      <el-button @click="generateFakeDataItem()">Generate fake data</el-button>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Getter, State, Action } from 'vuex-class'

import { jsonValidator } from '../utilities/validators.js'
@Component
export default class AppForm extends Vue {
  @Prop() private msg!: string;
  fakeDataItemType: string = ""
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


  onHandleAddDataItemType() {
    this.addFakeDataItemType({_name: this.fakeDataItemType, _selected: true})
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
