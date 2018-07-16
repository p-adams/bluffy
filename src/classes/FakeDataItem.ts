export enum DataTypes {
  JSON = "JSON"
}
export class FakeDataItem {
  private _types: DataTypes[] = [];
  private _recurrences: number = 0;
  private _schema: object = {};
  private _body: object = {};
  constructor(
    types: DataTypes[],
    recurrences: number,
    schema: object = {},
    body: object = {}
  ) {
    this._types = types;
    this._recurrences = recurrences;
    this._schema = schema;
    this._body = body;
  }
  get types(): DataTypes[] {
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

  set types(types: DataTypes[]) {
    this._types = types;
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
