import { DataTypes, FakeDataItem } from "@/classes/FakeDataItem";

describe("FakeDataItem class", () => {
  it("Correctly creates an instance of FakeDataItem class", () => {
    const aFakeDataItem = new FakeDataItem([DataTypes.JSON], 1, {}, {});
    expect(aFakeDataItem.types[0]).toEqual("JSON");
    expect(aFakeDataItem.recurrences).toEqual(1);
    expect(aFakeDataItem.schema).toEqual({});
    expect(aFakeDataItem.body).toEqual({});
  });
  it("Correctly adds two data types as its types", () => {
    const aFakeDataItem = new FakeDataItem(
      [DataTypes.JSON, DataTypes.XML],
      1,
      {},
      {}
    );
    expect(aFakeDataItem.types[0]).toEqual("JSON");
    expect(aFakeDataItem.types[1]).toEqual("XML");
    expect(aFakeDataItem.recurrences).toEqual(1);
    expect(aFakeDataItem.schema).toEqual({});
    expect(aFakeDataItem.body).toEqual({});
  });
});
