import Vue from "vue";
import Vuex from "vuex";
import { saveAs } from "file-saver";
import { DataBody, DataTypes, FakeDataItem } from "@/classes/FakeDataItem";
import { jsonValidator } from "@/utilities/validators.ts";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    fakeDataItem: new FakeDataItem([], 1, "", { json: "", formatted: false }),
    errorGeneratingFakeData: <boolean>false
  },
  mutations: {
    setFakeDataItemRecurrences(state, recurrences: number) {
      state.fakeDataItem.recurrences = recurrences;
    },
    setFakeDataItemSchema(state, schema: string) {
      state.fakeDataItem.schema = schema;
    },
    setFakeDataItemBody(state, body: DataBody) {
      state.fakeDataItem.body = body;
    },
    setErrorGeneratingFakeData(state, isError: boolean) {
      state.errorGeneratingFakeData = isError;
    }
  },
  actions: {
    generateFakeDataItem({ state, commit }, filename) {
      // save fake JSON to file
      const file = new File([state.fakeDataItem.body.json], filename, {
        type: "application/json;charset=utf-8"
      });
      saveAs(file);
    },
    setFakeDataItemRecurrences({ commit }, recurrences: number) {
      commit("setFakeDataItemRecurrences", recurrences);
    },
    setFakeDataItemSchema({ commit }, schema: string) {
      commit("setFakeDataItemSchema", schema);
    },
    setFakeDataItemBody({ state, commit }, body: DataBody) {
      // reset the error
      commit("setErrorGeneratingFakeData", false);
      // set the body
      commit("setFakeDataItemBody", body);
      if (
        jsonValidator(
          JSON.parse(state.fakeDataItem.body.json),
          JSON.parse(state.fakeDataItem.schema)
        )
      ) {
        // if user did not format JSON body in form
        // format the JSON body
        if (!state.fakeDataItem.body.formatted) {
          state.fakeDataItem.body.json = JSON.stringify(
            JSON.parse(state.fakeDataItem.body.json),
            null,
            2
          );
          state.fakeDataItem.body.formatted = true;
        }
      } else {
        // if there was an error validating the schema, make user away by setting the
        // error visibility to true
        commit("setErrorGeneratingFakeData", true);
      }
    }
  }
});
