export interface IngredientLine {
  existing: boolean
  ingredient: string
}

export interface Recipe {
  uri: string
  label: string
  image: string
  url: string
  ingredientLines: IngredientLine[]
  calories: number
  existingCount: number
}

export interface RecipeData {
  uri: string
  label: string
  image: string
  url: string
  ingredientLines: string[]
  calories: number
}
