export type collegeDataInterface = Type[];

interface Type {
    "name": string,
    "domains": string[],
    "web_pages": string[],
    "country": string,
    "alpha_two_code": string,
    "state-province": string | null
};