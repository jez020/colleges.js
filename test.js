let Colleges = require("./index")
let college = new Colleges();


// get region
console.log(college.getRegion(["US"]))

// get Specific College
console.log(college.getCollege())