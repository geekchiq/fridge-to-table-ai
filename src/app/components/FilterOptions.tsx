import {
  DIETOPTIONS,
  HEALTHOPTIONS,
  MEALTYPEOPTIONS
} from '@/constants/filterOptions'

import React from 'react'

interface FilterOptionsProps {
  healthOptions: string[]
  setHealthOptions: React.Dispatch<React.SetStateAction<string[]>>
  dietPreference: string
  setDietPreference: React.Dispatch<React.SetStateAction<string>>
  mealType: string
  setMealType: React.Dispatch<React.SetStateAction<string>>
}

const FilterOptions: React.FC<FilterOptionsProps> = ({
  healthOptions,
  setHealthOptions,
  dietPreference,
  setDietPreference,
  mealType,
  setMealType
}) => {
  const handleHealthOptionChange = (option: string) => {
    setHealthOptions((prevOptions) =>
      prevOptions.includes(option)
        ? prevOptions.filter((item) => item !== option)
        : [...prevOptions, option]
    )
  }

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Filter Options</h2>

      <div className="mb-4">
        <h3 className="font-semibold mb-2">Health Options</h3>
        <div className="flex flex-wrap gap-2">
          {HEALTHOPTIONS.map((option) => (
            <button
              key={option}
              onClick={() => handleHealthOptionChange(option)}
              className={`px-3 py-1 rounded border border-lime-500 ${
                healthOptions.includes(option)
                  ? 'bg-lime-500 text-white'
                  : 'bg-white text-lime-700'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold mb-2">Diet Preference</h3>
        <select
          value={dietPreference}
          onChange={(e) => setDietPreference(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="">No Preference</option>

          {DIETOPTIONS.map((option) => (
            <option value={option} key={option}>
              {option.toUpperCase()}
            </option>
          ))}
        </select>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Meal Type</h3>
        <select
          value={mealType}
          onChange={(e) => setMealType(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="">No Preference</option>
          {MEALTYPEOPTIONS.map((option) => (
            <option value={option} key={option}>
              {option.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default FilterOptions
