/**
 * Schema for the collegeData inteface. Every college data object should
 * follow this interface template
 */
export type collegeDataInterface = {
    "name": string,
    "domains": string[],
    "web_pages": string[],
    "country": string,
    "alpha_two_code": string,
    "state-province": string | null
}[];