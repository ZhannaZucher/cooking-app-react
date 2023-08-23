import axios from "axios"
import React, { useEffect, useState } from "react"
import { NavLink, useParams } from "react-router-dom"

const Recipe = () => {
  const { id } = useParams()
  const queryId = parseInt(id)
  const [recipe, setRecipe] = useState({})

  const ingredients = [
    recipe?.strIngredient1,
    recipe?.strIngredient2,
    recipe?.strIngredient3,
    recipe?.strIngredient4,
    recipe?.strIngredient5,
    recipe?.strIngredient6,
    recipe?.strIngredient7,
    recipe?.strIngredient8,
    recipe?.strIngredient9,
    recipe?.strIngredient10,
    recipe?.strIngredient11,
    recipe?.strIngredient12,
    recipe?.strIngredient13,
    recipe?.strIngredient14,
    recipe?.strIngredient15,
    recipe?.strIngredient16,
    recipe?.strIngredient17,
    recipe?.strIngredient18,
    recipe?.strIngredient19,
    recipe?.strIngredient20,
  ]

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${queryId}`)
      .then((res) => setRecipe(res.data.meals[0]))
  }, [queryId])

  return (
    recipe && (
      <main className="recipe-content">
        <div className="recipe">
          <div className="recipe__view">
            <img src={recipe.strMealThumb} alt={"photo de " + recipe.strMeal} />
          </div>

          <div className="recipe-body">
            <h2>{recipe.strMeal}</h2>
            <div className="recipe__subtitle">
              <h3>Origin: {recipe.strArea}</h3>
              <h3>Category: {recipe.strCategory}</h3>
            </div>
            <ul>
              {ingredients.map(
                (ingredient, index) =>
                  ingredient && <li key={index}>{ingredient}</li>
              )}
            </ul>
            <p>{recipe.strInstructions}</p>
          </div>
        </div>
        <NavLink to="/">Return to recipes</NavLink>
      </main>
    )
  )
}

export default Recipe
