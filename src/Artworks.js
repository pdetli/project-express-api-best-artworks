import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const Artworks = () => {
  // const [selectedFilter, setSelectedFilter] = useState("")
  const [arts, setArts] = useState([])

  const ArtworksAPI =
    "https://best-artworks-open-api-pde.herokuapp.com/artworks"
  // const ArtistAPI = `https://best-artworks-open-api-pde.herokuapp.com/artworks/name/${selectedFilter}`

  console.log(arts)

  useEffect(() => {
    fetch(ArtworksAPI)
      .then((res) => res.json())
      .then((json) => setArts(json.response))
  }, [])

  return (
    <>
      <header>
        <h2> Best 50 Artworks of All Time</h2>
      </header>

      <div className="card-container">
        {arts.map((art) => (
          <div key={art.id}>
            <div className="card">
              <p>{art.name}</p>
              <p>{art.years}</p>
              <p>{art.nationality}</p>
              <p>{art.genre}.</p>
              <p>{art.bio}</p>
              <a href={`${art.wikipedia}`} target="_blank">
                {art.wikipedia}
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
