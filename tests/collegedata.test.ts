import { College } from "../src";

test('Returns an object for collegedata', () => {
  const college = new College();
  const result = college.collegeData;
  console.log(result)
  expect(typeof result).toBe(typeof {});
});

