import { jsonValidator } from "@/utilities/validators.ts";

describe("jsonValidator function:", () => {
  it("Correctly validates JSON object", () => {
    const catSchema = {
      name: { type: "string" },
      breed: { type: "string" },
      age: { type: "number" },
      color: { type: "array" },
      required: ["name"]
    };
    const cat = {
      name: "Garfield",
      breed: "orange tabby"
    };
    expect(jsonValidator(cat, catSchema)).toBe(true);
  });
  it("Correctly validates sample form data", () => {
    const citySchema = {
      cities: { type: "array" }
    };
    const cities = {
      cities: [{ name: "New York City" }]
    };
    expect(jsonValidator(cities, citySchema)).toBe(true);
  });
});
