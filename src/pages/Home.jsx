import axios from "axios"
import React, { useEffect, useState } from "react"
import Article from "../components/Article"

const Home = () => {
  const [data, setData] = useState([])
  const [query, setQuery] = useState("")
  console.log(query)

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s")
      .then((res) => setData(res.data.meals))
  }, [])

  return (
    <div className="home-wrapper">
      <form>
        <label htmlFor="search"></label>
        <input type="search" onChange={(e) => setQuery(e.target.value)} />
      </form>
      <main className="content">
        {data
          .filter((recipe) => recipe.strMeal.toLowerCase().includes(query))
          .map((recipe) => (
            <Article
              key={recipe.idMeal}
              title={recipe.strMeal}
              origin={recipe.strArea}
              image={recipe.strMealThumb}
              content={recipe.strInstructions}
            />
          ))}
      </main>
    </div>
  )
}

export default Home
