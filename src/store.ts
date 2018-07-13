import Vue from "vue";
import Vuex from "vuex";
import FakeDataItem from "@/classes/FakeDataItem";
import FakeDataItemType from "@/classes/FakeDataItemType";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    fakeDataItem: new FakeDataItem(
      new FakeDataItemType("JSON", true),
      1,
      {},
      {}
    ),
    fakeDataItems: Array<FakeDataItem>()
  },
  mutations: {
    addFakeDataItemType(state, type: FakeDataItemType) {
      state.fakeDataItem.types.push(type);
    },
    setFakeDataItemRecurrences(state, recurrences: number) {
      state.fakeDataItem.recurrences = recurrences;
    },
    setFakeDataItemSchema(state, schema: object) {
      state.fakeDataItem.schema = schema;
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
    setFakeDataItemSchema({ commit }, schema: object) {
      commit("setFakeDataItemSchema", schema);
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
