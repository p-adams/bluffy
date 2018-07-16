import Vue from "vue";
import Vuex from "vuex";
import { saveAs } from "file-saver";
import { DataTypes, FakeDataItem } from "@/classes/FakeDataItem";
import { jsonValidator } from "@/utilities/validators.ts";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    fakeDataItem: new FakeDataItem([], 1)
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
    setFakeDataItemBody(state, body: object) {
      state.fakeDataItem.body = body;
    }
  },
  actions: {
    updateFakeDataItemTypes({ commit }, types: DataTypes[]) {
      commit("updateFakeDataItemTypes", types);
    },
    generateFakeDataItem({ state, commit }) {
      const jsonBodyMatchesSchema = jsonValidator(
        state.fakeDataItem.body,
        state.fakeDataItem.schema
      );
      console.log(jsonBodyMatchesSchema);
      const file = new File(
        [JSON.stringify({ foo: "bar" }, null, 2)],
        "meow.json",
        {
          type: "application/json;charset=utf-8"
        }
      );
      saveAs(file);
      // save to file using file-saver module
    },
    setFakeDataItemRecurrences({ commit }, recurrences: number) {
      commit("setFakeDataItemRecurrences", recurrences);
    },
    setFakeDataItemSchema({ commit }, schema: object) {
      commit("setFakeDataItemSchema", schema);
    },
    setFakeDataItemBody({ commit }, body: object) {
      commit("setFakeDataItemBody", body);
    }
  }
});
