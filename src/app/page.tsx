'use client'

import { IngredientLine, Recipe } from '@/types/recipe'
import React, { useState } from 'react'

import FilterOptions from '@/app/components/FilterOptions'
import Head from 'next/head'
import IngredientInput from '@/app/components/IngredientInput'
import RecipeList from '@/app/components/RecipeList'
import { getRecipes } from '@/actions'

export default function Home() {
  const [ingredients, setIngredients] = useState<string[]>([])
  const [healthOptions, setHealthOptions] = useState<string[]>([])
  const [dietPreference, setDietPreference] = useState<string>('')
  const [mealType, setMealType] = useState<string>('')
  const [recipes, setRecipes] = useState<Recipe[]>([])

  function isCommonIngredient(arr1: string[], ingredient: string) {
    const lowerArr1 = arr1.map((ingr: string) => ingr.toLowerCase())

    // Check if any ingredient in arr1 is a substring of ingredient
    for (const ingr1 of lowerArr1) {
      if (ingredient.toLowerCase().indexOf(ingr1) > 0) {
        return true
      }
    }
    return false
  }

  const handleSearch = async () => {
    const recipeData = await getRecipes({
      ingredients,
      healthOptions,
      dietPreference,
      mealType
    })

    if (!recipeData || recipeData.length === 0) {
      alert('No Data Found')
    }

    const newRecipeData: Recipe[] = []
    recipeData?.forEach((recipe) => {
      let existingCount = 0

      const ingredientLines = recipe.ingredientLines
      const newIngrLines: IngredientLine[] = []
      ingredientLines?.forEach((ingr) => {
        const existing = isCommonIngredient(ingredients, ingr.toString())
        if (existing) existingCount++
        newIngrLines.push({
          existing,
          ingredient: ingr.toString()
        })
      })

      // sort and move existing ingredients to top
      newIngrLines.sort((a, b) =>
        a.existing === b.existing ? 0 : a.existing ? -1 : 1
      )

      newRecipeData.push({
        ...recipe,
        ingredientLines: newIngrLines,
        existingCount
      })
    })

    // sort data to recipes with most common ingredients
    newRecipeData.sort((a, b) => b.existingCount - a.existingCount)
    setRecipes(newRecipeData)
  }

  return (
    <div className="min-h-screen bg-lime-300">
      <Head>
        <title>Recipe Finder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Recipe Finder</h1>
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <IngredientInput
            ingredients={ingredients}
            setIngredients={setIngredients}
          />
          <FilterOptions
            healthOptions={healthOptions}
            setHealthOptions={setHealthOptions}
            dietPreference={dietPreference}
            setDietPreference={setDietPreference}
            mealType={mealType}
            setMealType={setMealType}
          />
          <button
            onClick={handleSearch}
            className="w-full bg-lime-500 text-white py-2 px-4 rounded-md hover:bg-lime-500 transition-colors disabled:bg-lime-100 disabled:cursor-not-allowed"
            disabled={ingredients.length === 0}
          >
            Search Recipes
          </button>
        </div>
        {recipes.length > 0 && <RecipeList recipes={recipes} />}
      </main>
    </div>
  )
}
