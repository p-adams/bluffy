<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="2"></el-col>
      <el-col :span="20">
        <div>
        Format type tags:
        <ul>
          <li
            v-for="(tag, key) in formatTypeTags"
            :key="key"
            >
            {{tag}}
            <el-tag
              v-if="tag._selected"
              @close="onHandleRemoveFormatTypeTag(tag)"
              closable
            >{{ tag._name }}</el-tag>
          </li>
        </ul>
      </div>
      <el-form ref="form">
        <el-form-item label="Data type">
          <el-col>
            <el-input
              v-model="fakeDataItemType"
              placeholder="Add type and press enter. For example: JSON, XML, or YAML"
              @keyup.enter.native="onHandleAddDataItemType()"
            />
          </el-col>
         
        </el-form-item>
        <el-form-item label="Data recurrences">
          <el-col>
            <el-input-number
              v-model="fakeDataItemRecurrences"
              @change="onHandleFakeDataItemRecurrences()"
              :min="1"
            />
          </el-col>
        </el-form-item>
        
        <el-form-item label="Data schema">
          <el-col>
            <el-input
              type="textarea"
              v-model="fakeDataItemSchema"
              @blur="onHandleFakeDataItemSchema()"
            />
          </el-col>
        </el-form-item>
        <el-form-item label="Data fields">
          <el-col>
            <el-input
              type="textarea"
              v-model="fakeDataItemBody"
              @change="onHandleFakeDataItemBody()"
            />
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-col>
            <el-button @click="generateFakeDataItem()">Generate fake data</el-button>
          </el-col>
        </el-form-item>
      </el-form>
    </el-col>
    <el-col></el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Getter, State, Action } from 'vuex-class'

import { jsonValidator } from '../utilities/validators.js'
import FakeDataItem from '@/classes/FakeDataItem.js';
import FakeDataItemType from '@/classes/FakeDataItemType.js';
@Component
export default class AppForm extends Vue {
  @Prop() private msg!: string;
  fakeDataItemType: string = ""
  fakeDataItemRecurrences: number = 1
  fakeDataItemSchema: string = ""
  fakeDataItemBody: string = ""
  isDataItemBodyValid: boolean = true
  
  @State('fakeDataItems') fakeDataItems: any
  @Action('addFakeDataItemType') addFakeDataItemType: any
  @Action('removeFakeDataItemType') removeFakeDataItemType: any
  @Action('setFakeDataItemRecurrences') setFakeDataItemRecurrences: any
  @Action('setFakeDataItemSchema') setFakeDataItemSchema: any
  @Action('setFakeDataItemBody') setFakeDataItemBody: any
  @Action('generateFakeDataItem') generateFakeDataItem: any
  @Getter('formatTypeTags') formatTypeTags: any

  onHandleFakeDataItemBody() {
    this.setFakeDataItemBody(this.fakeDataItemBody)
  }
 
  onHandleFakeDataItemSchema() {
    
    this.setFakeDataItemSchema(this.fakeDataItemSchema)
  }
  onHandleFakeDataItemRecurrences(recurrences: HTMLInputElement) {
    this.setFakeDataItemRecurrences(recurrences)
  }



  onHandleRemoveFormatTypeTag (tag: FakeDataItemType) {
    console.log(tag.name)
    this.removeFakeDataItemType(tag)

  }
  onHandleAddDataItemType() {
    this.addFakeDataItemType({name: this.fakeDataItemType, selected: true})
    this.fakeDataItemType = ""
  }
  

  validateFakeDataItemBody(){
    console.log(JSON.parse(this.fakeDataItemSchema))
    
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

.el-col {
  padding: 10px;
}
</style>
