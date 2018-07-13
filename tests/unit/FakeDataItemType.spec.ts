import FakeDataItemType from "@/classes/FakeDataItemType";

describe("FakeDataItemType class", () => {
  it("Correctly creates an instance of FakeDataItemType", () => {
    expect(new FakeDataItemType("JSON", false).name).toEqual("JSON");
    expect(new FakeDataItemType("JSON", false).selected).toEqual(false);
  });
});
