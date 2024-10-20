import { Recipe } from '@/types/recipe'
import { fetchData } from '@/app/api/edamam'

const apiKey = process.env.NEXT_PUBLIC_EDAMAM_API_KEY
const appId = process.env.NEXT_PUBLIC_EDAMAM_APP_ID

const baseUrl = 'https://api.edamam.com/api/recipes/v2'

interface RequestPayloadProps {
  ingredients: string[]
  healthOptions: string[]
  dietPreference: string
  mealType: string
}

// calls the api to get all the recipe data
export const getRecipes = async (
  payload: RequestPayloadProps
): Promise<Recipe[]> => {
  const { ingredients, healthOptions, dietPreference, mealType } = payload
  let url = `${baseUrl}?type=public&app_id=${appId}&app_key=${apiKey}&q=${ingredients.join(
    ','
  )}`

  if (healthOptions.length > 0) {
    url = `${url}&health=${healthOptions.join('&health=')}`
  }
  if (dietPreference) {
    url = `${url}&diet=${dietPreference}`
  }

  if (mealType) {
    url = `${url}&mealType=${mealType}`
  }

  const data = await fetchData(url)
  return data
}
