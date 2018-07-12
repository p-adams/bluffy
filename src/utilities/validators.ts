import { Validator } from "jsonschema";

export function jsonValidator(jsonString: string, schema: any): boolean {
  return new Validator().validate(4, schema).valid;
}
