import { Validator } from "jsonschema";

export function jsonValidator(jsonString: object, schema: any): boolean {
  return new Validator().validate(jsonString, schema).valid;
}
