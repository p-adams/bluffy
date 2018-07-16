import { DataTypes, FakeDataItem } from "@/classes/FakeDataItem";

describe("FakeDataItem class", () => {
  it("Correctly creates an instance of FakeDataItem class", () => {
    const aFakeDataItem = new FakeDataItem([DataTypes.JSON], 1, {}, {});
    expect(aFakeDataItem.types[0]).toEqual("JSON");
    expect(aFakeDataItem.recurrences).toEqual(1);
    expect(aFakeDataItem.schema).toEqual({});
    expect(aFakeDataItem.body).toEqual({});
  });
});
