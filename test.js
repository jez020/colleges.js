let Colleges = require("./index")
let college = new Colleges();

college.collegeData;

// get region
console.log(college.getRegion(["US"]))

// get Specific College
console.log(college.getCollege())