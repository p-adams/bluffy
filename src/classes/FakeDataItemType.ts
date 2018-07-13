export default class FakeDataItemType {
  private _name: string = "";
  private _selected: boolean = false;
  constructor(typeName: string, selected: boolean) {
    this._name = typeName;
    this._selected = selected;
  }
  get name(): string {
    return this._name;
  }
  get selected(): boolean {
    return this._selected;
  }
  set name(typeName: string) {
    this._name = typeName;
  }
  set selected(selected: boolean) {
    this._selected = selected;
  }
}
