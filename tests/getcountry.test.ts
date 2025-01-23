import College from "../src";

const college = new College();

test('[Only check first object] check if the object is following the ' + 
    'interface', () => {
  let result = (college.getRegion(["US"]))[0];
  expect(typeof result["web_pages"]).toBe(typeof ["test"]);
  expect(typeof result["domains"]).toBe(typeof ["test"]);
  expect(result["alpha_two_code"].toLowerCase()).toBe("us");
  expect(typeof result["country"]).toBe(typeof "string");


  result = (college.getRegion(["CN"]))[0];
  expect(typeof result["web_pages"]).toBe(typeof ["test"]);
  expect(typeof result["domains"]).toBe(typeof ["test"]);
  expect(result["alpha_two_code"].toLowerCase()).toBe("cn");
  expect(typeof result["country"]).toBe(typeof "string");
});