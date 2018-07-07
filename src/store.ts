import Vue from "vue";
import Vuex from "vuex";

interface fakeDataItem {
  types: fakeDataItemType[];
  recurrences: number;
  body: object;
}

interface fakeDataItemType {
  text: string;
  selected: boolean;
}

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    fakeDataItem: {
      types: [{ text: "JSON", selected: true }],
      recurrences: 1,
      body: {}
    } as fakeDataItem,
    fakeDataItems: <any>[]
  },
  mutations: {
    addFakeDataItemType(state, type: fakeDataItemType) {
      state.fakeDataItem.types.push(type);
    },
    setFakeDataItemRecurrences(state, recurrences: number) {
      state.fakeDataItem.recurrences = recurrences;
    },
    setFakeDataItemBody(state, body: object) {
      state.fakeDataItem.body = body;
    },
    addFakeDataItem(state) {
      state.fakeDataItems.push(state.fakeDataItem);
    }
  },
  actions: {
    addFakeDataItemType({ commit }, type: string) {
      commit("addFakeDataItemType", type);
    },
    setFakeDataItemRecurrences({ commit }, recurrences: number) {
      commit("setFakeDataItemRecurrences", recurrences);
    },
    setFakeDataItemBody({ commit }, body: object) {
      commit("setFakeDataItemBody", body);
    },
    generateFakeDataItem({ commit }) {
      commit("addFakeDataItem");
    }
  },
  getters: {
    formatTypeTags: state => state.fakeDataItem.types
  }
});
