import axios from "axios"
import React, { useEffect, useState } from "react"
import Article from "../components/Article"

const Home = () => {
  const [data, setData] = useState([])
  console.log(data)

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s")
      .then((res) => setData(res.data.meals))
  }, [])

  return (
    <main className="wrapper">
      {data.map((recipe) => (
        <Article
          key={recipe.idMeal}
          title={recipe.strMeal}
          origin={recipe.strArea}
          image={recipe.strMealThumb}
          content={recipe.strInstructions}
        />
      ))}
    </main>
  )
}

export default Home
