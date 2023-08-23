import axios from "axios"
import React, { useEffect, useState } from "react"
import Article from "../components/Article"
import { Link } from "react-router-dom"

const Home = () => {
  const [data, setData] = useState([])
  const [query, setQuery] = useState("")

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
      .then((res) => setData(res.data.meals))
  }, [query])

  return (
    <div className="home-wrapper">
      <form>
        <label htmlFor="search"></label>
        <input
          type="text"
          placeholder="search an ingredient"
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
      <main className="content">
        {data?.slice(0, 24).map((recipe) => (
          <Link key={recipe.idMeal} to={`/recipe/${recipe.idMeal}`}>
            <Article
              title={recipe.strMeal}
              origin={recipe.strArea}
              image={recipe.strMealThumb}
              content={recipe.strInstructions}
            />
          </Link>
        ))}
      </main>
    </div>
  )
}

export default Home
