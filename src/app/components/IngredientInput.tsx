import React, { useState } from 'react'

interface IngredientInputProps {
  ingredients: string[]
  setIngredients: React.Dispatch<React.SetStateAction<string[]>>
}

/**
 *
 * @param Input ingredient
 * @returns Displays ingredient list from user input
 */

const IngredientInput: React.FC<IngredientInputProps> = ({
  ingredients,
  setIngredients
}) => {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleAddIngredient = () => {
    if (inputValue.trim() !== '') {
      setIngredients([...ingredients, inputValue.trim()])
      setInputValue('')
    }
  }

  const handleRemoveIngredient = (index: number) => {
    setIngredients(ingredients.filter((_, i) => i !== index))
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAddIngredient()
    }
  }

  return (
    <div className="w-full mb-4">
      <h2 className="text-xl font-bold mb-4">Ingredients</h2>

      <div className="flex flex-col w-full mb-4 gap-4">
        <div>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="Enter an ingredient"
            className="lg:w-[90%] md:w-[70%] flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-lime-500"
          />
          <button
            onClick={handleAddIngredient}
            className="px-4 py-2.5 bg-lime-500 disabled:text-lime-600 text-white rounded-r-md hover:bg-lime-600 focus:outline-none focus:ring-1 focus:ring-lime-500 disabled:bg-lime-200 disabled:cursor-not-allowed"
            disabled={inputValue.length < 2}
          >
            Add
          </button>
        </div>
      </div>
      <div className="flex flex-row w-full mb-4 gap-4 flex-wrap">
        {ingredients.map((ingredient, index) => (
          <div
            key={index}
            className="flex flex-row bg-gray-100 px-3 py-2 rounded-md justify-start"
          >
            <button
              onClick={() => handleRemoveIngredient(index)}
              className="text-[12px] mr-3 text-red-500 hover:text-red-700 focus:outline-none"
            >
              ❌
            </button>
            <span>{ingredient}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default IngredientInput
