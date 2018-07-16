<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="12" :offset="6">
        <el-card>
      <el-form ref="form">
        
     
        
        <el-form-item
          label="Data schema"
          class="data-schema-input"
        >
          <el-col>
            <el-input
              type="textarea"
              v-model="fakeDataItemSchema"
              @blur="onHandleFakeDataItemSchema()"
            />
          </el-col>
        </el-form-item>
        <el-form-item label="Data fields">
          <el-tabs type="border-card">
            <el-tab-pane label="JSON">
              <el-input
                type="textarea"
                v-model="fakeDataItemJSONBody.json"
                @blur="onHandleFakeDataItemBody()"
                :placeholder="fakeDataItemJSONBodyPlaceholder"
              />
             
              <el-button @click="clearJSONData()">Clear data</el-button>
              <el-button
                @click="formatJSONData()"
                :disabled="!fakeDataItemJSONBody"
              >Format data</el-button>
            </el-tab-pane>
          </el-tabs>
        </el-form-item>
        <el-form-item label="Data Recurrences">
          <el-input-number
              v-model="fakeDataItemRecurrences"
              @change="onHandleFakeDataItemRecurrences()"
              :min="1"
          />
        </el-form-item>
       
        <el-form-item label="File name">
          <el-input placeholder="enter file name"/>
        </el-form-item>
        <el-form-item>
          <el-col>
            <el-button @click="generateFakeDataItem()">Generate fake data</el-button>
          </el-col>
        </el-form-item>
      </el-form>
        </el-card>
    </el-col>
   
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Getter, State, Action } from 'vuex-class'

import { jsonValidator } from '../utilities/validators'

import { DataTypes, FakeDataItem } from '@/classes/FakeDataItem';
import { stringify } from 'querystring';
@Component
export default class AppForm extends Vue {
  /**
   * Local data
   */

  private fakeDataItemRecurrences: number = 1
  private fakeDataItemSchema: string = ""
  private fakeDataItemJSONBody: {json?: string, formatted?: boolean} = {}
  private fakeDataItemJSONBodyPlaceholder: string = `Example => { "cities": [ { "name": "New York City", "pop": "8.538 million" } ] }`
  private isDataItemJSONBodyValid: boolean = true

  /**
   * Vuex State, Actions, and Getters
   */
  
  @Action('updateFakeDataItemTypes') updateFakeDataItemTypes: any
  @Action('setFakeDataItemRecurrences') setFakeDataItemRecurrences: any
  @Action('setFakeDataItemSchema') setFakeDataItemSchema: any
  @Action('setFakeDataItemBody') setFakeDataItemBody: any
  @Action('generateFakeDataItem') generateFakeDataItem: any

  /**
   * Form input handlers
   */

  onHandleFakeDataItemTypes(types: DataTypes[]) {
    this.updateFakeDataItemTypes(types)
  }

  onHandleFakeDataItemRecurrences(recurrences: HTMLInputElement) {
    this.setFakeDataItemRecurrences(recurrences)
  }
  onHandleFakeDataItemBody() {
    this.setFakeDataItemBody({json: this.fakeDataItemJSONBody})
  }
 
  onHandleFakeDataItemSchema() {
    this.setFakeDataItemSchema(this.fakeDataItemSchema)
  }


  /**
   * Utility methods
   */
  
  formatJSONData() {
    this.fakeDataItemJSONBody.json = JSON.stringify(JSON.parse(this.fakeDataItemJSONBody.json!), null, 2)
    this.fakeDataItemJSONBody.formatted = !this.fakeDataItemJSONBody.formatted
  }

  clearJSONData() {
    this.fakeDataItemJSONBody.json = ""
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
