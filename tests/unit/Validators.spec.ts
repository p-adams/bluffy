import { jsonValidator } from "@/utilities/validators.ts";

describe("jsonValidator function:", () => {
  it("Correctly validates JSON object", () => {
    const catSchema = {
      name: { type: "string" },
      breed: { type: "string" },
      age: { type: "number" },
      required: ["name", "breed"]
    };
    const cat = {
      name: "Garfield",
      breed: "orange tabby"
    };
    expect(jsonValidator(cat, catSchema)).toBe(true);
  });
});
