import { Recipe } from '@/types/recipe'

interface RecipeListProps {
  recipes: Recipe[]
  currentIngredients: string[]
}

/**
 *
 * @param recipes Array of Recipe
 * @returns  Displays a list of recipes
 */

export default function RecipeList({ recipes }: RecipeListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-white">
      {recipes.map((recipe, index) => (
        <div
          key={index}
          className="border rounded-lg overflow-hidden shadow-lg"
        >
          <img
            src={recipe.image}
            alt={recipe.label}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{recipe.label}</h2>
            <p className="text-gray-600 mb-2">
              Calories: {Math.round(recipe.calories)}
            </p>
            <p className="text-gray-600 mb-2">Ingredients:</p>
            <ul className="space-y-2 mb-4">
              {recipe.ingredientLines.map((ingredientLine, index) => (
                <li
                  key={index}
                  className="relative bg-gray-100 px-3 py-2 rounded-md pl-8"
                >
                  <span className="mr-4">
                    {ingredientLine.existing ? '✅' : '❌'}
                  </span>

                  <span>{ingredientLine.ingredient}</span>
                </li>
              ))}
            </ul>
            <a
              href={recipe.url}
              target="_blank"
              className="px-4 py-2 bg-lime-500 text-white rounded-md hover:bg-lime-600 focus:outline-none focus:ring-1 focus:ring-lime-500 self-end"
            >
              View Recipe
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}
