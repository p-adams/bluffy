import { Validator } from "jsonschema";

export function jsonValidator(jsonString: object, schema: object): boolean {
  return new Validator().validate(jsonString, {
    ...schema,
    required: Object.keys(schema)
  }).valid;
}
