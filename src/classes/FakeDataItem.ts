import FakeDataItemType from "./FakeDataItemType";
export default class FakeDataItem {
  private _types: FakeDataItemType[] = [];
  private _recurrences: number = 0;
  private _schema: object = {};
  private _body: object = {};
  constructor(
    type: FakeDataItemType,
    recurrences: number,
    schema: object = {},
    body: object = {}
  ) {
    this._types.push(type);
    this._recurrences = recurrences;
    this._schema = schema;
    this._body = body;
  }
  get types(): FakeDataItemType[] {
    return this._types;
  }

  get recurrences(): number {
    return this._recurrences;
  }

  get schema(): object {
    return this._schema;
  }

  get body(): object {
    return this._body;
  }

  set types(types: FakeDataItemType[]) {
    this._types = types;
  }

  updateTypes(updatedType: FakeDataItemType): FakeDataItemType[] {
    let updatedTypeIndex: any = this.types.find(
      type => type.name === updatedType.name
    );
    this._types.splice(updatedTypeIndex, 1, updatedType);
    return this._types;
  }

  set recurrences(recurrences: number) {
    this._recurrences = recurrences;
  }

  set schema(schema: object) {
    this._schema = schema;
  }

  set body(body: object) {
    this._body = body;
  }
}
