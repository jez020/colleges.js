import College from "../src";

const college = new College();

test('[Only check first object] check if the object is following the ' + 
    'interface', () => {
  let result = (college.getCollege())[0];
  expect(typeof result["web_pages"]).toBe(typeof ["test"]);
  expect(typeof result["domains"]).toBe(typeof ["test"]);
  expect(typeof result["alpha_two_code"]).toBe(typeof "string");
  expect(typeof result["country"]).toBe(typeof "string");
  expect(result["name"].toLowerCase()).toBe("university of california, " +
    "san diego")


  result = (college.getCollege("University of California, Berkeley"))[0];
  expect(typeof result["web_pages"]).toBe(typeof ["test"]);
  expect(typeof result["domains"]).toBe(typeof ["test"]);
  expect(typeof result["alpha_two_code"]).toBe(typeof "string");
  expect(typeof result["country"]).toBe(typeof "string");
  expect(result["name"].toLowerCase()).toBe("university of california, " +
    "berkeley")
});