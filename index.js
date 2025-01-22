/**
 * @typedef { "AF" | "AL" | "DZ" | "AS" | "AD" | "AO" | "AI" | "AQ" | "AG" | 
 *            "AR" | "AM" | "AW" | "AU" | "AT" | "AZ" | "BS" | "BH" | "BD" | 
 *            "BB" | "BY" | "BE" | "BZ" | "BJ" | "BM" | "BT" | "BO" | "BQ" | 
 *            "BA" | "BW" | "BV" | "BR" | "IO" | "BN" | "BG" | "BF" | "BI" | 
 *            "CV" | "KH" | "CM" | "CA" | "KY" | "CF" | "TD" | "CL" | "CN" | 
 *            "CX" | "CC" | "CO" | "KM" | "CD" | "CG" | "CK" | "CR" | "HR" | 
 *            "CU" | "CW" | "CY" | "CZ" | "CI" | "DK" | "DJ" | "DM" | "DO" | 
 *            "EC" | "EG" | "SV" | "GQ" | "ER" | "EE" | "SZ" | "ET" | "FK" | 
 *            "FO" | "FJ" | "FI" | "FR" | "GF" | "PF" | "TF" | "GA" | "GM" | 
 *            "GE" | "DE" | "GH" | "GI" | "GR" | "GL" | "GD" | "GP" | "GU" | 
 *            "GT" | "GG" | "GN" | "GW" | "GY" | "HT" | "HM" | "VA" | "HN" | 
 *            "HK" | "HU" | "IS" | "IN" | "ID" | "IR" | "IQ" | "IE" | "IM" | 
 *            "IL" | "IT" | "JM" | "JP" | "JE" | "JO" | "KZ" | "KE" | "KI" | 
 *            "KP" | "KR" | "KW" | "KG" | "LA" | "LV" | "LB" | "LS" | "LR" | 
 *            "LY" | "LI" | "LT" | "LU" | "MO" | "MG" | "MW" | "MY" | "MV" | 
 *            "ML" | "MT" | "MH" | "MQ" | "MR" | "MU" | "YT" | "MX" | "FM" | 
 *            "MD" | "MC" | "MN" | "ME" | "MS" | "MA" | "MZ" | "MM" | "NA" | 
 *            "NR" | "NP" | "NL" | "NC" | "NZ" | "NI" | "NE" | "NG" | "NU" | 
 *            "NF" | "MP" | "NO" | "OM" | "PK" | "PW" | "PS" | "PA" | "PG" | 
 *            "PY" | "PE" | "PH" | "PN" | "PL" | "PT" | "PR" | "QA" | "MK" | 
 *            "RO" | "RU" | "RW" | "RE" | "BL" | "SH" | "KN" | "LC" | "MF" | 
 *            "PM" | "VC" | "WS" | "SM" | "ST" | "SA" | "SN" | "RS" | "SC" | 
 *            "SL" | "SG" | "SX" | "SK" | "SI" | "SB" | "SO" | "ZA" | "GS" | 
 *            "SS" | "ES" | "LK" | "SD" | "SR" | "SJ" | "SE" | "CH" | "SY" | 
 *            "TW" | "TJ" | "TZ" | "TH" | "TL" | "TG" | "TK" | "TO" | "TT" | 
 *            "TN" | "TR" | "TM" | "TC" | "TV" | "UG" | "UA" | "AE" | "GB" | 
 *            "UM" | "US" | "UY" | "UZ" | "VU" | "VE" | "VN" | "VG" | "VI" | 
 *            "WF" | "EH" | "YE" | "ZM" | "ZW" | "AX" } CountryCodes The country
 * codes that is used in methods below
 */

/**
 * Main Modules Page
 * Contains methods to get necessary data about colleges around the WORLD
 */



const { countryListAlpha2, isArrayType } = require("./definitions");

/**
 * The College class, containing all the neccessary methods
 */
class College {

    // Get the original college data in JSON
    collegeData = require("./collegeData.json");
    // All the 2 characters country codes
    countryCode = Object.keys(countryListAlpha2).map((key) => key);

    /**
     * Creates an instance of College.
     * @memberof College
     */
    constructor(){
        
    }

    /**
     * Get all the colleges based on a country code
     *
     * @param {Array.<CountryCodes>} regionCode an array of 2 letters country codes to 
     * include in the data
     * @memberof College
     * @returns {Object} Returns an object of colleges belonging to 
     */
    getRegion(regionCode = ["US"]) {
        // removes duplicates from region code
        regionCode = [...new Set(regionCode)];
        // Check if the regionCode is an object
        if(typeof regionCode != "object") 
            throw new TypeError("regionCode needs to be a array. Received: " + 
            typeof regionCode);
        // Check if every region in regionCode is a string
        if(!isArrayType(regionCode, "string"))
            throw new TypeError("Every item of regionCode needs to be a string.")

        // Set every term of the given regionCode to an uppercase string
        regionCode = regionCode.map(code => code.toUpperCase());

        // Finding every college within the given country code and adds it to
        // the collegesInRegion array
        let collegesInRegion = [];
        for (let i in this.collegeData){
            if(regionCode.includes(this.collegeData[i]["alpha_two_code"]
            .toUpperCase())){
                collegesInRegion.push(this.collegeData[i]);
            }
        }

        // returns the resulting object
        return collegesInRegion;
    }

    
    /**
     * Get the colleges with the same name as the input
     * @param {String} name The name of the college, case sensitive
     * @memberof College
     * @returns {Array.<Object>} An array of objects containing the college data
     */
    getCollege (name = "University of California, San Diego") {
        // Making sure the type is correct
        if(typeof name != "string") throw new TypeError("The college name " + 
            "must be a string. Received: " + typeof name);

        // Find every college that matches the input name and insert it to the
        // selectedCollegeData array
        let selectedCollegeData = [];
        for (let i in this.collegeData){
            if ( this.collegeData[i]["name"] == name ){
                selectedCollegeData.push(this.collegeData[i])
            }
        }

        // returns the college
        return selectedCollegeData;
    }

}

module.exports = College