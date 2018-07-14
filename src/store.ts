import Vue from "vue";
import Vuex from "vuex";
import FakeDataItem from "@/classes/FakeDataItem";
import FakeDataItemType from "@/classes/FakeDataItemType";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    fakeDataItem: new FakeDataItem(new FakeDataItemType("JSON", true), 1),
    fakeDataItems: Array<FakeDataItem>()
  },
  mutations: {
    addFakeDataItem(state) {
      state.fakeDataItem.types = state.fakeDataItem.types.filter(
        type => type.selected
      );
      state.fakeDataItems.push(state.fakeDataItem);
    },
    addFakeDataItemType(state, { name, selected }: FakeDataItemType) {
      state.fakeDataItem.types.push(new FakeDataItemType(name, selected));
    },
    removeFakeDataItemType(state, tag: FakeDataItemType) {
      state.fakeDataItem.unselectType(tag);
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
    addFakeDataItemType({ commit }, { name, selected }) {
      commit("addFakeDataItemType", { name, selected });
    },
    generateFakeDataItem({ commit }) {
      commit("addFakeDataItem");
    },
    removeFakeDataItemType({ commit }, tag) {
      commit("removeFakeDataItemType", tag);
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
  },
  getters: {
    formatTypeTags: state => state.fakeDataItem.types
  }
});
