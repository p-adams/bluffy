import { jsonValidator } from "@/utilities/validators.ts";

describe("jsonValidator function:", () => {
  it("Correctly validates JSON object", () => {
    const schema = {
      name: { type: "string" }
    };
    expect(jsonValidator(`{ "foo": "bar" }`, schema)).toBe(true);
  });
});
