<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="12" :offset="6">
        <el-card>
          <el-form ref="form">   
            <el-form-item
              v-if="!schemaCreated"
              label="Data schema builder (JSON)"
              class="data-schema-input"
            >
              <el-col>
                <!-- schema builder -->
                <el-card>
                <codemirror
                  class="schema-builder-mirror"
                  :options="schemaBuilderOptions"
                  v-model="fakeDataItemSchema"
                />
                <el-row class="builder-buttons">
                  <el-col>
                    <el-button
                      @click="onClearSchema()"
                      :disabled="!fakeDataItemSchema"
                    >Clear</el-button>
                    <el-button
                      @click="onFormatSchema()"
                      :disabled="!fakeDataItemSchema"
                    >Format</el-button>
                    <el-button
                      @click="onHandleFakeDataItemSchema()"
                      :disabled="!fakeDataItemSchema"
                    >Create</el-button>
                  </el-col>
                </el-row>
                </el-card>
              </el-col>
            
            </el-form-item>
            <el-form-item v-else>
              <el-button @click="schemaCreated = false">Edit schema</el-button>
            </el-form-item>
            <el-form-item v-if="schemaCreated">
              <el-form-item label="Data fields">
                <el-tabs type="border-card">
                  <el-tab-pane label="JSON">
                  <!-- fields builder -->
                    <codemirror
                      v-model="fakeDataItemJSONBody.json"
                      :options="fieldsBuilderOptions"
                    />
                    <el-row class="builder-buttons">
                      <el-button @click="onClearJSONData()">Clear data</el-button>
                      <el-button
                        @click="onFormatJSONData()"
                        :disabled="!fakeDataItemJSONBody"
                      >Format data</el-button>
                      <el-button @click="onHandleFakeDataItemBody()"
                      >Create</el-button>
                    </el-row>
                  </el-tab-pane>
                </el-tabs>
              </el-form-item>
              <el-form-item class="footer-inputs">
                <el-form-item label="Data Recurrences">
                  <el-input-number
                      v-model="fakeDataItemRecurrences"
                      @change="onHandleFakeDataItemRecurrences()"
                      :min="1"
                  />
                </el-form-item>
                <el-form-item label="File name">
                  <el-input
                    v-model="fakeDataItemFilename"
                    placeholder="Enter filename; For example, cats.json"
                    required
                    />
                </el-form-item>
                <el-form-item>
                  <el-row class="builder-buttons">
                    <el-col>
                      <el-button
                      @click="generateFakeDataItem(fakeDataItemFilename)"
                      :disabled="!fakeDataFieldsCreated || !fakeDataItemFilename"
                    >Generate fake data</el-button>
                    </el-col>
                  </el-row>
                </el-form-item>
              </el-form-item>
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

import { DataBody, DataTypes, FakeDataItem } from '@/classes/FakeDataItem';

import 'codemirror/mode/javascript/javascript.js'
// theme css
import 'codemirror/theme/monokai.css'
@Component
export default class AppForm extends Vue {
  /**
   * Local data
   */

  private fakeDataItemRecurrences: number = 1
  private fakeDataItemSchema: string = `{ "cities": array }`
  private fakeDataItemJSONBody: DataBody = {json: `{ "cities": [ { "name": "New York City", "pop": "8.538 million" } ] }`, formatted: false}
  private fakeDataItemFilename: string = ""
  private schemaCreated: boolean = false
  private fakeDataFieldsCreated: boolean = false
  private schemaBuilderOptions: object = {
    mode: {
      name: 'javascript',
      json: true
    },
    tabSize: 2,
    theme: 'monokai',
    lineNumbers: true,
    line: true
  }
   private fieldsBuilderOptions: object = {
    mode: {
      name: 'javascript',
      json: true
    },
    tabSize: 2,
    theme: 'monokai',
    lineNumbers: true,
    line: true
  }

  /**
   * Vuex State, Actions, and Getters
   */

  @Action('setFakeDataItemRecurrences') setFakeDataItemRecurrences: any
  @Action('setFakeDataItemSchema') setFakeDataItemSchema: any
  @Action('setFakeDataItemBody') setFakeDataItemBody: any
  @Action('generateFakeDataItem') generateFakeDataItem: any

 /**
   * Form action handlers
  */


  onHandleFakeDataItemRecurrences(recurrences: HTMLInputElement) {
    this.setFakeDataItemRecurrences(recurrences)
  }
  onHandleFakeDataItemBody() {
    this.setFakeDataItemBody(this.fakeDataItemJSONBody)
    this.fakeDataFieldsCreated = true
  }
 
  onHandleFakeDataItemSchema() {
    this.setFakeDataItemSchema(this.fakeDataItemSchema)
    this.schemaCreated = true
  }



  onFormatSchema() {
   
    this.fakeDataItemSchema = JSON.stringify(JSON.parse(this.fakeDataItemSchema), null, 2)
  }

  onClearSchema() {
    this.fakeDataItemSchema = ''
  }
  
  onFormatJSONData() {
    this.fakeDataItemJSONBody.json = JSON.stringify(JSON.parse(this.fakeDataItemJSONBody.json), null, 2)
    this.fakeDataItemJSONBody.formatted = true
  }

  onclearJSONData() {
    this.fakeDataItemJSONBody.json = ""
  }


 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.builder-buttons {
  margin-top: 5px;
}
.footer-inputs {
  margin-top: 20px;
}
</style>
