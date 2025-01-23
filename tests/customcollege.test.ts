import { College } from "../src";

const college = new College(
  [{
    name: "University of Disneyland",
    alpha_two_code: "US",
    country: "United States",
    web_pages: ["https://uod.edu"],
    domains: ["uod.edu"],
    "state-province": null
  },]
);

test('[Only check first object] check if the object is following the ' + 
    'interface', () => {
  let result = (college.getCollege("University of Disneyland"))[0];
  expect(typeof result["web_pages"]).toBe(typeof ["test"]);
  expect(typeof result["domains"]).toBe(typeof ["test"]);
  expect(typeof result["alpha_two_code"]).toBe(typeof "string");
  expect(typeof result["country"]).toBe(typeof "string");
  expect(result["name"].toLowerCase()).toBe("university of disneyland");
});