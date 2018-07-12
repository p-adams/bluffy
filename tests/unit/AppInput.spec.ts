import { shallowMount } from "@vue/test-utils";
import AppInput from "@/components/AppInput.vue";

describe("AppInput.vue", () => {
  it("renders props.label when passed", () => {
    const label = "Name";
    const wrapper = shallowMount(AppInput, {
      propsData: { label }
    });
    expect(wrapper.text()).toMatch(label);
  });
});
