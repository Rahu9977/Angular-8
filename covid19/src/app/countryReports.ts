export interface CountryReports {
    country: string;
    cases: number;
    todayCases: number;
    deaths: number;
    todayDeaths: number;
    recovered: number;
    active: number;
    critical: String;
    casesPerOneMillion: number
    deathsPerOneMillion: number
    tests: string;
    testsPerOneMillion: string;
}