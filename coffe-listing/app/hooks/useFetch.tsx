import { CafeTypes } from "../Types/CafeTypes";

export default async function useFetch(): Promise<CafeTypes[]> {

    const response = await fetch("https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json")
    return response.json()
} 