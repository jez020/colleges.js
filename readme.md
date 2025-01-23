# colleges.js

This module is essentially a database of universities accross all the countries 
in the world.

## Documentation
You can find the documentation on 
[this website](https://jez020.github.io/colleges.js/index.html)

## Requirements
This package currently only supports typescript. 
Please see example below and the documentation for usage.

## Example
```js
// Importing the module
import { College } from 'colleges.js';

// Initializing a college instance using default database
const college = new College();

// Initializing a college instance using custom database
// Same methods apply to both constructor
const customCollege = new College(
  [{
    name: "University of Disneyland",
    alpha_two_code: "US",
    country: "United States",
    web_pages: ["https://uod.edu"],
    domains: ["uod.edu"],
    "state-province": null
  },]
);

// get full list of college database
console.log(college.collegeData);

// get full list of 2 character country codes
console.log(customCollege.countryCode);

// get colleges within specified regions (defaults to US)
console.log(college.getRegion(["US", "UK"]));

// get a specific college by it's name (case sensitive)
console.log(customCollege.getCollege("University of Disneyland"));
```

## Special Thanks
[Hipo](https://github.com/Hipo) - 
[Lists of Universities](https://github.com/Hipo/university-domains-list/blob/master/world_universities_and_domains.json)



