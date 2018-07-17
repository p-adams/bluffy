import Vue from "vue";
import Vuex from "vuex";
import { saveAs } from "file-saver";
import { DataBody, DataTypes, FakeDataItem } from "@/classes/FakeDataItem";
import { jsonValidator } from "@/utilities/validators.ts";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    fakeDataItem: new FakeDataItem([], 1, {}, { json: "", formatted: false })
  },
  mutations: {
    updateFakeDataItemTypes(state, types: DataTypes[]) {
      state.fakeDataItem.types = types;
    },
    setFakeDataItemRecurrences(state, recurrences: number) {
      state.fakeDataItem.recurrences = recurrences;
    },
    setFakeDataItemSchema(state, schema: object) {
      state.fakeDataItem.schema = schema;
    },
    setFakeDataItemBody(state, body: DataBody) {
      state.fakeDataItem.body = body;
    }
  },
  actions: {
    updateFakeDataItemTypes({ commit }, types: DataTypes[]) {
      commit("updateFakeDataItemTypes", types);
    },
    generateFakeDataItem({ state, commit }, filename) {
      console.log(filename);
      const jsonBodyMatchesSchema = jsonValidator(
        JSON.parse(state.fakeDataItem.body.json),
        state.fakeDataItem.schema
      );
      console.log(jsonBodyMatchesSchema);
      /* const file = new File(
        [JSON.stringify({ foo: "bar" }, null, 2)],
        "meow.json",
        {
          type: "application/json;charset=utf-8"
        }
      );
      saveAs(file); */
      // save to file using file-saver module
    },
    setFakeDataItemRecurrences({ commit }, recurrences: number) {
      commit("setFakeDataItemRecurrences", recurrences);
    },
    setFakeDataItemSchema({ commit }, schema: object) {
      commit("setFakeDataItemSchema", schema);
    },
    setFakeDataItemBody({ commit }, body: DataBody) {
      commit("setFakeDataItemBody", body);
    }
  }
});
