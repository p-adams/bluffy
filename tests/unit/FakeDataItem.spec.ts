import FakeDataItem from "@/classes/FakeDataItem";
import FakeDataItemType from "@/classes/FakeDataItemType";

describe("FakeDataItem class", () => {
  it("Correctly creates an instance of FakeDataItem class", () => {
    const aFakeDataItem = new FakeDataItem(
      new FakeDataItemType("XML", false),
      1,
      {},
      {}
    );
    expect(aFakeDataItem.types[0].name).toEqual("XML");
    expect(aFakeDataItem.types[0].selected).toEqual(false);
    expect(aFakeDataItem.recurrences).toEqual(1);
    expect(aFakeDataItem.schema).toEqual({});
    expect(aFakeDataItem.body).toEqual({});
  });
  it("Correctly updates 'selected' property of FakeDataItemType in 'types' variable", () => {
    const aFakeDataItem = new FakeDataItem(
      new FakeDataItemType("JSON", false),
      1,
      {},
      {}
    );
    const aFakeDataItemWithUpdatedSelectedField = aFakeDataItem.updateTypes(
      new FakeDataItemType("JSON", !aFakeDataItem.types[0].selected)
    );
    expect(aFakeDataItemWithUpdatedSelectedField[0].selected).toEqual(true);
  });
});
