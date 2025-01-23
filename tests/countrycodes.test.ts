import { College } from "../src";

test('Returns an object for countrycodes', () => {
  const college = new College();
  const result = college.countryCode;
  expect(typeof result).toBe(typeof {});
});