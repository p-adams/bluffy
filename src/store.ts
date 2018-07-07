import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    fakeDataItem: {
      type: <String>"",
      recurrences: <Number>0,
      body: <Object>{}
    },
    fakeDataItems: <any>[]
  },
  mutations: {
    setFakeDataItemType(state, type: String) {
      state.fakeDataItem.type = type;
    },
    setFakeDataItemRecurrences(state, recurrences: Number) {
      state.fakeDataItem.recurrences = recurrences;
    },
    setFakeDataItemBody(state, body: Object) {
      state.fakeDataItem.body = body;
    },
    addFakeDataItem(state) {
      console.log(state.fakeDataItem);
      state.fakeDataItems.push(state.fakeDataItem);
    }
  },
  actions: {
    setFakeDataItemType({ commit }, type: String) {
      commit("setFakeDataType", type);
    },
    setFakeDataItemRecurrences({ commit }, recurrences: Number) {
      commit("setFakeDataRecurrences", recurrences);
    },
    setFakeDataItemBody({ commit }, body: Object) {
      commit("setFakeDataBody", body);
    },
    generateFakeDataItem({ commit }) {
      commit("addFakeDataItem");
    }
  }
});
