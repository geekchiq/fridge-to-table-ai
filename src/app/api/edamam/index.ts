// fetch all recipes from API
export const fetchData = async (endpoint: string) => {
  try {
    const response = await fetch(endpoint)
    const data = await response.json()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return data.hits.map((hit: any) => hit.recipe)
  } catch (error) {
    console.error('Error fetching recipes:', error)
  }
}
