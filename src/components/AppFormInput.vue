<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="12" :offset="6">
        <el-card>
      <el-form ref="form">
        <el-form-item label="Data type">
         {{ selectedTypes }}
          <el-select
            v-model="selectedTypes"
            @change="onHandleFakeDataItemTypes"
            multiple
            placeholder="Select"
          >
            <el-option
              v-for="(type, index) in fakeDataItemTypes"
              :key="index"
              :label="type.label"
              :value="type.value"
            >
            </el-option>
          </el-select>
          
        </el-form-item>
        <el-form-item label="Data Recurrences">
          <el-input-number
              v-model="fakeDataItemRecurrences"
              @change="onHandleFakeDataItemRecurrences()"
              :min="1"
          />
        </el-form-item>
        
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
          <el-col>
            <el-input
              type="textarea"
              v-model="fakeDataItemBody"
              @change="onHandleFakeDataItemBody()"
            />
          </el-col>
        </el-form-item>
       
        <el-form-item>
          <el-input placeholder="file name"/>
          <el-input placeholder="file extension"/>
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
@Component
export default class AppForm extends Vue {
  @Prop() private msg!: string;
  
  fakeDataItemRecurrences: number = 1
  fakeDataItemSchema: string = ""
  fakeDataItemBody: string = ""
  isDataItemBodyValid: boolean = true
 
  selectedTypes: DataTypes[] = []

  fakeDataItemTypes: object = [
    {label: DataTypes.JSON, value: DataTypes.JSON},
    {label: DataTypes.XML, value: DataTypes.XML}
    ]


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
    this.setFakeDataItemBody(this.fakeDataItemBody)
  }
 
  onHandleFakeDataItemSchema() {
    this.setFakeDataItemSchema(this.fakeDataItemSchema)
  }


  /**
   * Utility methods
   */
  

  validateFakeDataItemBody(){
    console.log(JSON.parse(this.fakeDataItemSchema))
    
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
